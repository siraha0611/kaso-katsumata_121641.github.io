import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{profile.nameEn}</p>
      <span>2D Design / Story / Entertainment Planning</span>
    </footer>
  );
}
