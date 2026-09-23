export default function SectionHeading({ index, title }) {
  return (
    <div className="section-heading reveal">
      <span>{index}</span>
      <h2>{title}</h2>
    </div>
  )
}
