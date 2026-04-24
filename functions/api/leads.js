const json = (data, init = {}) =>
  new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init.headers,
    },
    status: init.status ?? 200,
  });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeString = (value) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";

const validatePayload = (payload) => {
  const errors = [];
  const form = {
    product: normalizeString(payload.product).toLowerCase(),
    bankId: normalizeString(payload.bankId).toLowerCase(),
    fullName: normalizeString(payload.fullName),
    whatsapp: normalizeString(payload.whatsapp),
    email: normalizeString(payload.email).toLowerCase(),
    city: normalizeString(payload.city),
  };

  if (!["haji", "umroh"].includes(form.product)) {
    errors.push("Kolom product harus berisi 'haji' atau 'umroh'.");
  }
  if (!form.bankId) errors.push("Kolom bankId wajib diisi.");
  if (!form.fullName) errors.push("Kolom fullName wajib diisi.");
  if (!form.whatsapp) errors.push("Kolom whatsapp wajib diisi.");
  if (!form.email || !emailRegex.test(form.email)) {
    errors.push("Kolom email tidak valid.");
  }
  if (!form.city) errors.push("Kolom city wajib diisi.");

  return { errors, form };
};

export const onRequestGet = async ({ env }) => {
  const hasBinding = Boolean(env.AZIZATI_DB);

  return json({
    ok: true,
    service: "azizati-lead-api",
    dbBindingFound: hasBinding,
  });
};

export const onRequestPost = async ({ request, env }) => {
  if (!env.AZIZATI_DB) {
    return json(
      {
        ok: false,
        error:
          "Binding D1 AZIZATI_DB belum tersedia. Periksa konfigurasi Cloudflare Pages Project Settings.",
      },
      { status: 500 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(
      { ok: false, error: "Body request harus format JSON yang valid." },
      { status: 400 },
    );
  }

  const { errors, form } = validatePayload(payload ?? {});
  if (errors.length) {
    return json({ ok: false, error: errors.join(" ") }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const source = "website";
  const userAgent = request.headers.get("user-agent") ?? "";
  const ipAddress =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for") ??
    "";

  try {
    await env.AZIZATI_DB.prepare(
      `INSERT INTO leads (
          id,
          product,
          bank_id,
          full_name,
          whatsapp,
          email,
          city,
          source,
          user_agent,
          ip_address,
          created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        form.product,
        form.bankId,
        form.fullName,
        form.whatsapp,
        form.email,
        form.city,
        source,
        userAgent,
        ipAddress,
        createdAt,
      )
      .run();

    return json({
      ok: true,
      message: "Lead berhasil disimpan.",
      data: { id, createdAt },
    });
  } catch (error) {
    return json(
      {
        ok: false,
        error: "Gagal menyimpan lead ke database.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
};
