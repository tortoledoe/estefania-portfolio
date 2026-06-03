import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
          About
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
          Placeholder for bio, background, and contact information.
        </p>
      </div>
    </main>
  );
}
