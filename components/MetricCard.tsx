import type { MetricCardProps } from "@/lib/types";

export default function MetricCard({ metric, className = "" }: MetricCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-surface p-6 ${className}`}
    >
      <p className="text-3xl font-semibold tracking-tight text-text-primary">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-medium text-text-secondary">
        {metric.label}
      </p>
      {metric.description && (
        <p className="mt-1 text-sm text-text-tertiary">{metric.description}</p>
      )}
    </article>
  );
}
