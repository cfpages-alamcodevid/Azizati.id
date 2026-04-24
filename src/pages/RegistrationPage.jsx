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
    <section className="section">
      <div className="container">
        <div className="wizard-shell">
          <div className="section-title center">
          <SectionTitle
            eyebrow="Pendaftaran"
            title="Mulai Perjalanan Suci Anda"
            description="Lengkapi data diri Anda untuk mendapatkan simulasi dan penawaran terbaik."
          />
        </div>

          <div className="stepper">
            {steps.map((label, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={label} className={`step ${step >= index + 1 ? "active" : ""}`}>
                  <div className="step-marker">
                    <Icon className="step-icon" />
                    <span>{index + 1}</span>
                  </div>
                  <p>{label}</p>
                </div>
              );
            })}
          </div>

          <article className="card form-card">
          {step === 1 ? (
            <div className="form-stack">
              <h3 className="card-title-with-icon">
                <Squares2X2Icon className="card-icon-sm" />
                Pilih Produk
              </h3>
              <label className="choice-card">
                <input
                  type="radio"
                  name="product"
                  checked={form.product === "haji"}
                  onChange={() => setField("product", "haji")}
                />
                <span>Tabungan Haji</span>
              </label>
              <label className="choice-card">
                <input
                  type="radio"
                  name="product"
                  checked={form.product === "umroh"}
                  onChange={() => setField("product", "umroh")}
                />
                <span>Tabungan Umroh</span>
              </label>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="form-stack">
              <h3 className="card-title-with-icon">
                <BuildingLibraryIcon className="card-icon-sm" />
                Pilih Bank Mitra
              </h3>
              {banks.map((bank) => (
                <label className="choice-card" key={bank.id}>
                  <input
                    type="radio"
                    name="bank"
                    checked={form.bankId === bank.id}
                    onChange={() => setField("bankId", bank.id)}
                  />
                  <span>{bank.name}</span>
                </label>
              ))}
            </div>
          ) : null}

          {step === 3 ? (
            <div className="form-stack">
              <h3 className="card-title-with-icon">
                <IdentificationIcon className="card-icon-sm" />
                Data Diri
              </h3>
              <label>
                Nama lengkap
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                />
              </label>
              <label>
                WhatsApp
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => setField("whatsapp", e.target.value)}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
              </label>
              <label>
                Kota
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setField("city", e.target.value)}
                />
              </label>
              <label className="consent-box">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                />
                <span>
                  Saya menyetujui syarat dan ketentuan serta kebijakan privasi Azizati.id.
                </span>
              </label>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="form-stack">
              <h3 className="card-title-with-icon">
                <CheckCircleIcon className="card-icon-sm" />
                Ringkasan Pendaftaran
              </h3>
              <p>
                Produk: <strong>{form.product || "-"}</strong>
              </p>
              <p>
                Bank: <strong>{banks.find((b) => b.id === form.bankId)?.name || "-"}</strong>
              </p>
              <p>
                Nama: <strong>{form.fullName || "-"}</strong>
              </p>
              <p>
                WhatsApp: <strong>{form.whatsapp || "-"}</strong>
              </p>
              <p>
                Email: <strong>{form.email || "-"}</strong>
              </p>
              <p>
                Kota: <strong>{form.city || "-"}</strong>
              </p>
              {submitError ? <p className="alert alert-error">{submitError}</p> : null}
              {submitSuccess ? <p className="alert alert-success">{submitSuccess}</p> : null}
              <button className="btn btn-secondary" onClick={handleReset} type="button">
                Reset Form
              </button>
            </div>
          ) : null}

          <div className="wizard-actions">
            <button className="btn btn-secondary" onClick={prevStep} type="button" disabled={step === 1}>
              Kembali
            </button>
            {step < 4 ? (
              <button
                className="btn btn-primary"
                onClick={nextStep}
                type="button"
                disabled={
                  (step === 1 && !form.product) ||
                  (step === 2 && !form.bankId) ||
                  (step === 3 && (!isPersonalDataValid(form) || !consentChecked))
                }
              >
                Lanjut
                <ChevronRightIcon className="btn-icon" />
              </button>
            ) : (
              <button
                className="btn btn-primary"
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
