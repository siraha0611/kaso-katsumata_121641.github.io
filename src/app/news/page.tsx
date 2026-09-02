import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { news } from "@/data/news";

export const metadata = {
  title: "お知らせ",
  description: "KASO集落工房のお知らせ・新作情報・イベント出展情報の一覧です。"
};

function NewsRow({ date, category, title, href }: (typeof news)[number]) {
  const inner = (
    <>
      <span className="news-date">{date}</span>
      <span className="news-chip">{category}</span>
      <span className="news-title">{title}</span>
    </>
  );
  if (!href) {
    return <div className="news-row">{inner}</div>;
  }
  if (href.startsWith("/")) {
    return (
      <Link className="news-row news-row-link" href={href}>
        {inner}
      </Link>
    );
  }
  return (
    <a className="news-row news-row-link" href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  );
}

export default function NewsPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        as="h1"
        eyebrow="News"
        title="お知らせ"
        description="工房の新作・イベント・制作の近況をまとめています。"
      />
      <section className="section compact">
        <div className="news-list">
          {news.map((item) => (
            <NewsRow key={`${item.date}-${item.title}`} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
