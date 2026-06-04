import Link from "next/link";
import type { NavItem } from "@/lib/types";

const navItems: NavItem[] = [
  { label: "Work", href: "/#selected-work" },
  { label: "AI Systems", href: "/#ai-systems" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-nav-bg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10"
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight text-text-primary"
        >
          Estefania Tortoledo
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
