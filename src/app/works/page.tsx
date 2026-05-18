import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "@/components/WorkCard";
import { categories, works } from "@/data/works";

export default function WorksPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        eyebrow="Works"
        title="作品一覧"
        description="TRPGシナリオ、立ち絵、アニメーション、MAP・資料制作を掲載しています。"
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
