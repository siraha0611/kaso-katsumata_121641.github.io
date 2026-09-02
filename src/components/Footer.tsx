import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>KASO集落工房</p>
        <span>代表・制作: {profile.nameJa}（KASO）</span>
      </div>
      <div className="footer-links">
        <a href="https://kasokatsumata.booth.pm/" target="_blank" rel="noreferrer">
          BOOTH
        </a>
        <a href="https://x.com/KASOkatsumata" target="_blank" rel="noreferrer">
          X
        </a>
        <Link href="/for-recruiters">採用ご担当の方へ</Link>
      </div>
    </footer>
  );
}
