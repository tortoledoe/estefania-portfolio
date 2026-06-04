import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-widest text-text-tertiary">
        404
      </p>
      <h1 className="mt-4 text-3xl font-medium text-text-primary">
        Page not found
      </h1>
      <p className="mt-4 text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
