type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, description, as = "h2" }: SectionTitleProps) {
  const Heading = as;
  const lines = title.split("\n");
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <Heading>
        {lines.length > 1
          ? lines.map((line, index) => (
              <span className="title-seg" key={index}>
                {line}
              </span>
            ))
          : title}
      </Heading>
      {description ? <span>{description}</span> : null}
    </div>
  );
}
