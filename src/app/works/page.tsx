import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { categories, works } from "@/data/works";

export default function WorksPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Works"
        title="作品一覧"
        description="TRPGシナリオ、立ち絵、アニメーション、Web・演出素材を掲載しています。各作品のページで制作の流れ(ワークフロー)も確認できます。"
      />
      <div className="category-list">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className="work-grid all-works">
        {works.map((work, index) => (
          <WorkCard key={work.slug} work={work} priority={index < 2} />
        ))}
      </div>
    </main>
  );
}
