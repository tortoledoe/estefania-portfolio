import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum",
};

export default function QuantumPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
          Quantum
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
          Placeholder for the Quantum case study.
        </p>
      </div>
    </main>
  );
}
