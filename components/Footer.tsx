import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-sm text-text-tertiary md:order-1">
          Estefania Tortoledo · Senior Product Manager
        </p>
        <p className="text-xs text-text-tertiary md:order-2">
          Built with Next.js and Cursor
        </p>
        <ul className="flex items-center justify-center gap-6 md:order-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
