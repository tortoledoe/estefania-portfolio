import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMG",
};

export default function BmgPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
          BMG
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
          Placeholder for the BMG case study.
        </p>
      </div>
    </main>
  );
}
