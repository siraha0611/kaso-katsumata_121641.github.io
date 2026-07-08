import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";

export default function NotFound() {
  return (
    <main className="page-shell notfound-page">
      <SectionTitle
        as="h1"
        eyebrow="404 Not Found"
        title="ページが見つかりません"
        description="お探しのページは移動したか、削除された可能性があります。"
      />
      <div className="hero-actions">
        <Link className="button primary" href="/">
          トップへ戻る
        </Link>
        <Link className="button" href="/works">
          作品一覧を見る
        </Link>
        <Link className="button" href="/contact">
          お問い合わせ
        </Link>
      </div>
    </main>
  );
}
