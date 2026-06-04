import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
        <p className="text-xs text-text-tertiary">
          Estefania Tortoledo · Senior Product Manager
        </p>
        <p className="text-xs text-text-tertiary">
          Built with Next.js and Cursor
        </p>
        <ul className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/estefania-tortoledo" },
            { label: "GitHub", href: "https://github.com" },
          ].map((link) => (
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
