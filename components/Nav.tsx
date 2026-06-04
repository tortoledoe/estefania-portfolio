import Link from "next/link";
import type { NavItem } from "@/lib/types";

const navItems: NavItem[] = [
  { label: "Work", href: "/#selected-work" },
  { label: "AI Systems", href: "/#ai-systems" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[900px] items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-wide text-text-primary"
        >
          Estefania Tortoledo
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-text-secondary transition-colors hover:text-text-primary sm:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            className="shrink-0 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-accent-dark sm:text-sm"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
