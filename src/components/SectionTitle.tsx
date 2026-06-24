type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, description, as = "h2" }: SectionTitleProps) {
  const Heading = as;
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <Heading>{title}</Heading>
      {description ? <span>{description}</span> : null}
    </div>
  );
}
