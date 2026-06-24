import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { animationProcess } from "@/data/extraSections";
import { assetPath, thumbnailPath } from "@/lib/assetPath";

export default function AnimationProcessPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Animation Process"
        title="CORE 制作工程"
        description="企画、設定、作業表、Vコンテ、LOまでの工程をまとめています。"
      />
      <section className="process-timeline">
        {animationProcess.map((step, index) => (
          <article className="process-step" key={step.title}>
            <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="process-image">
              <Image src={assetPath(thumbnailPath(step.image))} alt={step.title} fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className="process-copy">
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
