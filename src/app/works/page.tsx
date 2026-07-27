import { SectionTitle } from "@/components/SectionTitle";
import { WorksFilter } from "@/components/WorksFilter";
import { categories, works, type WorkCategory } from "@/data/works";

const usedCategories = categories.filter(
  (category): category is WorkCategory =>
    category !== "All" && works.some((work) => work.category === category)
);

export default function WorksPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="Works"
        title="作品一覧"
        description="TRPGシナリオ、立ち絵、アニメーション、Web・演出素材を掲載しています。カードの担当範囲でどこを手がけたかを確認でき、各作品のページでは制作の流れ(ワークフロー)も掲載しています。"
      />
      <WorksFilter works={works} categories={usedCategories} />
    </main>
  );
}
