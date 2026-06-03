import Link from "next/link";
import type { CaseStudyCardProps } from "@/lib/types";

export default function CaseStudyCard({
  caseStudy,
  className = "",
}: CaseStudyCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-surface p-6 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {caseStudy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {caseStudy.description}
          </p>
        </div>
        {caseStudy.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-background px-3 py-1 text-xs text-text-tertiary"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={caseStudy.href}
          className="inline-flex w-fit text-sm font-medium text-text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-dark"
        >
          View case study
        </Link>
      </div>
    </article>
  );
}
