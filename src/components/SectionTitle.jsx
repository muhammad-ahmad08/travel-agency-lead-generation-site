export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-12">
      <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
        {subtitle}
      </p>
      <h2 className="text-4xl font-heading text-primary">
        {title}
      </h2>
    </div>
  )
}