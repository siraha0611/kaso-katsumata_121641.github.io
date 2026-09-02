import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/news", label: "News" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/published", label: "Published" },
  { href: "/research", label: "Research" },
  { href: "/tools", label: "Dev" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="KASO集落工房 Top">
        <Image
          className="brand-logo"
          src={assetPath("/assets/kobo-logo-ab-dark.png")}
          alt="KASO集落工房"
          width={3304}
          height={448}
          priority
        />
        <small>TRPG素材・シナリオ・ツールの工房</small>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
