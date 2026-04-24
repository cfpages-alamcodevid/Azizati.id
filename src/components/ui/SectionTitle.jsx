export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "max-w-[72ch] mx-auto text-center mb-6" : "max-w-[72ch] mb-6"}>
      {eyebrow ? (
        <p className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-heading mt-1 mb-2">
        {title}
      </h2>
      {description ? (
        <p className="text-text-body leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}