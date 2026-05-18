import Link from "next/link";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/works", label: "Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/published", label: "Published" },
  { href: "/commission", label: "Commission" },
  { href: "/animation-process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Top">
        <span>Katsumata Sota</span>
        <small>Portfolio 2026</small>
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
