import Link from "next/link";

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
        <span>KASO集落工房</span>
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
