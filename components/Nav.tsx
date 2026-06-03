import Link from "next/link";
import type { NavItem } from "@/lib/types";

const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Camino", href: "/camino" },
  { label: "Quantum", href: "/quantum" },
  { label: "BMG", href: "/bmg" },
  { label: "AI Systems", href: "/ai-systems" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="text-sm font-semibold text-text-primary">
          Estefania Tortoledo
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
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
