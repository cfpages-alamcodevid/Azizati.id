export default function BankLogo({ bank, compact = false }) {
  return (
    <span
      className={`bank-logo-frame ${
        compact ? "bank-logo-frame--compact" : ""
      }`}
    >
      <img
        src={bank.logo}
        alt={`Logo ${bank.name}`}
        className="bank-logo-image"
        data-bank={bank.id}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
