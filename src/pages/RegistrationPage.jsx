import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { banks } from "../data/banks";
import { useRegistrationStore } from "../store/registrationStore";
import {
  BuildingLibraryIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  IdentificationIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const steps = ["Pilih Produk", "Pilih Bank", "Data Diri", "Review"];
const stepIcons = [Squares2X2Icon, BuildingLibraryIcon, IdentificationIcon, CheckCircleIcon];

const isPersonalDataValid = (form) =>
  form.fullName.trim() &&
  form.whatsapp.trim() &&
  form.email.trim() &&
  form.city.trim();

export default function RegistrationPage() {
  const { step, form, setField, nextStep, prevStep, resetForm } = useRegistrationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);

  const handleReset = () => {
    resetForm();
    setSubmitError("");
    setSubmitSuccess("");
    setConsentChecked(false);
  };

  const handleSubmitLead = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Terjadi kegagalan saat mengirim pendaftaran.");
      }

      setSubmitSuccess(
        `Pendaftaran berhasil dikirim. ID lead: ${result.data?.id ?? "N/A"}.`,
      );
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-[860px] mx-auto rounded-xl border-t-3 border-[#cfa93f] bg-white/80 shadow-soft p-6">
          <div className="max-w-[72ch] mx-auto text-center mb-4">
            <SectionTitle
              eyebrow="Pendaftaran"
              title="Mulai Perjalanan Suci Anda"
              description="Lengkapi data diri Anda untuk mendapatkan simulasi dan penawaran terbaik."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {steps.map((label, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={label}
                  className={`flex items-center gap-2 p-2 rounded-lg border ${
                    step >= index + 1
                      ? "bg-amber-50 border-amber-600"
                      : "bg-white border-[#e5d9bf]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Icon className="w-4 h-4 text-amber-800" />
                    <span className="w-5 h-5 rounded-full bg-[#efe3c8] flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-bold">{label}</p>
                </div>
              );
            })}
          </div>

          <article className="bg-white border border-[#e6d7ba] rounded-xl p-4">
            {step === 1 ? (
              <div className="grid gap-4">
                <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1">
                  <Squares2X2Icon className="w-4 h-4 text-amber-800" />
                  Pilih Produk
                </h3>
                <label className="flex items-center gap-2 border border-[#e8dcc3] rounded-lg p-3 bg-white cursor-pointer hover:bg-[#fbf9f5] transition-all">
                  <input
                    type="radio"
                    name="product"
                    checked={form.product === "haji"}
                    onChange={() => setField("product", "haji")}
                    className="accent-amber-600"
                  />
                  <span>Tabungan Haji</span>
                </label>
                <label className="flex items-center gap-2 border border-[#e8dcc3] rounded-lg p-3 bg-white cursor-pointer hover:bg-[#fbf9f5] transition-all">
                  <input
                    type="radio"
                    name="product"
                    checked={form.product === "umroh"}
                    onChange={() => setField("product", "umroh")}
                    className="accent-amber-600"
                  />
                  <span>Tabungan Umroh</span>
                </label>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-4">
                <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1">
                  <BuildingLibraryIcon className="w-4 h-4 text-amber-800" />
                  Pilih Bank Mitra
                </h3>
                {banks.map((bank) => (
                  <label
                    key={bank.id}
                    className="flex items-center gap-2 border border-[#e8dcc3] rounded-lg p-3 bg-white cursor-pointer hover:bg-[#fbf9f5] transition-all"
                  >
                    <input
                      type="radio"
                      name="bank"
                      checked={form.bankId === bank.id}
                      onChange={() => setField("bankId", bank.id)}
                      className="accent-amber-600"
                    />
                    <span>{bank.name}</span>
                  </label>
                ))}
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-4">
                <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1">
                  <IdentificationIcon className="w-4 h-4 text-amber-800" />
                  Data Diri
                </h3>
                <label className="block">
                  <span className="block text-sm font-medium text-text-body mb-2">
                    Nama lengkap
                  </span>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    className="w-full border border-[#e8dcc6] rounded-lg px-3 py-2.5 bg-[#fbfaf8] focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-text-body mb-2">
                    WhatsApp
                  </span>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setField("whatsapp", e.target.value)}
                    className="w-full border border-[#e8dcc6] rounded-lg px-3 py-2.5 bg-[#fbfaf8] focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-text-body mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full border border-[#e8dcc6] rounded-lg px-3 py-2.5 bg-[#fbfaf8] focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-text-body mb-2">
                    Kota
                  </span>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setField("city", e.target.value)}
                    className="w-full border border-[#e8dcc6] rounded-lg px-3 py-2.5 bg-[#fbfaf8] focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </label>
                <label className="grid grid-cols-[auto_1fr] gap-3 border border-[#ead9b7] rounded-lg p-4 bg-[#f8efdf]">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 accent-amber-600"
                  />
                  <span className="text-sm">
                    Saya menyetujui syarat dan ketentuan serta kebijakan privasi
                    Azizati.id.
                  </span>
                </label>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="grid gap-4">
                <h3 className="text-base font-bold text-text-heading inline-flex items-center gap-1">
                  <CheckCircleIcon className="w-4 h-4 text-amber-800" />
                  Ringkasan Pendaftaran
                </h3>
                <p className="text-sm">
                  Produk: <strong className="text-text-heading">{form.product || "-"}</strong>
                </p>
                <p className="text-sm">
                  Bank:{" "}
                  <strong className="text-text-heading">
                    {banks.find((b) => b.id === form.bankId)?.name || "-"}
                  </strong>
                </p>
                <p className="text-sm">
                  Nama:{" "}
                  <strong className="text-text-heading">{form.fullName || "-"}</strong>
                </p>
                <p className="text-sm">
                  WhatsApp:{" "}
                  <strong className="text-text-heading">{form.whatsapp || "-"}</strong>
                </p>
                <p className="text-sm">
                  Email: <strong className="text-text-heading">{form.email || "-"}</strong>
                </p>
                <p className="text-sm">
                  Kota: <strong className="text-text-heading">{form.city || "-"}</strong>
                </p>
                {submitError ? (
                  <p className="rounded-lg px-3 py-2 text-sm bg-red-50 border border-red-200 text-red-700">
                    {submitError}
                  </p>
                ) : null}
                {submitSuccess ? (
                  <p className="rounded-lg px-3 py-2 text-sm bg-green-50 border border-green-200 text-green-700">
                    {submitSuccess}
                  </p>
                ) : null}
                <button
                  className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all"
                  onClick={handleReset}
                  type="button"
                >
                  Reset Form
                </button>
              </div>
            ) : null}

            <div className="flex justify-between gap-3 pt-2">
              <button
                className="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg font-bold border border-[#d7c29a] text-[#2a2213] hover:bg-[#fbf1db] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={prevStep}
                type="button"
                disabled={step === 1}
              >
                Kembali
              </button>
              {step < 4 ? (
                <button
                  className="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={nextStep}
                  type="button"
                  disabled={
                    (step === 1 && !form.product) ||
                    (step === 2 && !form.bankId) ||
                    (step === 3 && (!isPersonalDataValid(form) || !consentChecked))
                  }
                >
                  Lanjut <ChevronRightIcon className="w-4 h-4" />
                </button>
              ) : (
                <button
                  className="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg font-bold bg-gradient-to-r from-[#eedc82] via-[#cfa93f] to-[#8f6c18] text-[#241d0f] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSubmitLead}
                  type="button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </button>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}