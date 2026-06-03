import Link from "next/link";

interface WorkMetric {
  value: string;
  label: string;
}

interface WorkCaseStudy {
  company: string;
  tag: string;
  title: string;
  description: string;
  metrics: WorkMetric[];
  tags: string[];
  href: string;
  disclaimer?: boolean;
}

interface AiSystemCard {
  title: string;
  tag: string;
  description: string;
  tags: string[];
  comingSoon?: boolean;
}

const heroStats = [
  { value: "6+", label: "Years in Fintech" },
  { value: "3", label: "Case Studies" },
  { value: "2", label: "AI Systems" },
];

const caseStudies: WorkCaseStudy[] = [
  {
    company: "Camino Financial",
    tag: "SMB Lending",
    title: "Optimizing the SMB Lending Funnel for Conversion and Funding",
    description:
      "Redesigned a high-friction financial onboarding system connecting UX, data quality, and underwriting decisioning to drive funded loan conversion across Application → Underwriting → Funding.",
    metrics: [
      { value: "+20–22%", label: "Application Completion" },
      { value: "+16%", label: "Funded Conversion" },
      { value: "Full Funnel Redesign", label: "" },
    ],
    tags: ["Funnel Optimization", "SMB", "Underwriting", "Experimentation"],
    href: "/camino",
    disclaimer: true,
  },
  {
    company: "Quantum Lending Solutions",
    tag: "SMB Lending · 0→1",
    title: "Building an End-to-End SMB Lending Platform from Zero",
    description:
      "Led 0→1 product development of a complete SMB lending platform spanning application experience, financial data infrastructure, offer design, and borrower self-service portal — prioritized under real engineering constraints.",
    metrics: [
      { value: "+20%", label: "Application Completion" },
      { value: "↓25–30%", label: "Support Volume" },
      { value: "↑40%", label: "Self-Service Adoption" },
    ],
    tags: ["0→1 Platform", "SMB", "Financial Data", "Self-Service"],
    href: "/quantum",
  },
  {
    company: "BMG Money",
    tag: "Consumer Lending · Regulated",
    title: "Launching a Military Lending Act Product in a Regulated Fintech Environment",
    description:
      "Led product definition, borrower experience strategy, and execution planning for an MLA-compliant consumer lending product — coordinating across 9 cross-functional teams under significant regulatory, technical, and operational complexity.",
    metrics: [
      { value: "9", label: "Teams Coordinated" },
      { value: "4", label: "Constraint Domains" },
      { value: "Full Lifecycle", label: "Designed" },
    ],
    tags: ["Regulatory Compliance", "Consumer Lending", "MLA", "Lifecycle Design"],
    href: "/bmg",
  },
];

const aiSystems: AiSystemCard[] = [
  {
    title: "AI Job Search OS",
    tag: "Workflow · Orchestration",
    description:
      "An AI-assisted workflow system for strategic job searching — featuring modular agents, evaluation loops, ATS intelligence, recruiter simulation, and human-in-the-loop review.",
    tags: ["Claude", "Modular Agents", "Evaluation Loops"],
  },
  {
    title: "SMB Cash Flow Intelligence System",
    tag: "Concept · In Progress",
    description:
      "An AI-native financial intelligence system that ingests SMB transaction data, generates real-time cash flow insights, and surfaces risk signals — without requiring a loan application.",
    tags: ["AI Decisioning", "Open Banking", "SMB Finance"],
    comingSoon: true,
  },
];

function WorkCaseStudyCard({ study }: { study: WorkCaseStudy }) {
  return (
    <article className="rounded-2xl border-[0.5px] border-border bg-surface p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-xs uppercase tracking-widest text-text-tertiary">
          {study.company}
        </p>
        <span className="w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary">
          {study.tag}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-medium text-text-primary">
        {study.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {study.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
        {study.metrics.map((metric) => (
          <div key={metric.value} className="min-w-[100px]">
            <p className="text-sm font-medium text-text-primary">
              {metric.value}
            </p>
            {metric.label ? (
              <p className="mt-0.5 text-xs text-text-tertiary">{metric.label}</p>
            ) : null}
          </div>
        ))}
      </div>

      {study.disclaimer && (
        <p className="mt-4 text-xs italic text-text-tertiary">
          * Metrics shown are illustrative estimates. Specific figures are
          confidential.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href={study.href}
          className="shrink-0 text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

function AiSystemCard({ card }: { card: AiSystemCard }) {
  return (
    <article className="relative rounded-2xl border-[0.5px] border-border bg-surface p-8">
      {card.comingSoon && (
        <span className="absolute top-6 right-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-text-primary">
          Coming Soon
        </span>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:pr-24">
        <h3 className="text-xl font-medium text-text-primary">{card.title}</h3>
        <span className="w-fit shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary">
          {card.tag}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {card.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen flex-col justify-center bg-background px-6 pt-20 pb-16">
        <div className="mx-auto w-full max-w-[900px]">
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            Fintech Product Manager
          </p>
          <h1 className="mt-4 max-w-[900px] text-[36px] leading-[1.1] font-medium tracking-tight text-text-primary sm:text-[56px]">
            I build financial products at the intersection of data, risk, and
            experience.
          </h1>
          <p className="mt-6 max-w-[560px] text-base leading-relaxed text-text-secondary sm:text-lg">
            6 years in fintech across consumer and SMB lending. Now focused on
            AI-assisted financial products, decision systems, and the
            infrastructure that makes intelligent fintech possible.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/#selected-work"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-accent-dark"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-text-tertiary hover:text-text-primary"
            >
              About Me
            </Link>
          </div>

          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:divide-x sm:divide-border">
            {heroStats.map((stat) => (
              <div key={stat.label} className="sm:px-8 first:sm:pl-0">
                <p className="text-sm font-medium text-text-primary">
                  {stat.value}
                </p>
                {stat.label ? (
                  <p className="mt-0.5 text-xs text-text-tertiary">
                    {stat.label}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="selected-work"
        className="scroll-mt-20 bg-background px-6 py-24"
      >
        <div className="mx-auto w-full max-w-[900px]">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-tertiary">
            Selected Work
          </p>
          <h2 className="mb-2 text-2xl font-medium text-text-primary">
            Case Studies
          </h2>
          <p className="mb-12 max-w-[720px] text-text-secondary">
            Fintech products built across consumer and SMB lending — from 0→1
            platforms to funnel optimization and regulated product launches.
          </p>

          <div className="flex flex-col gap-6">
            {caseStudies.map((study) => (
              <WorkCaseStudyCard key={study.company} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Systems */}
      <section id="ai-systems" className="scroll-mt-20 bg-surface px-6 py-24">
        <div className="mx-auto w-full max-w-[900px]">
          <p className="mb-3 text-xs uppercase tracking-widest text-text-tertiary">
            AI Systems
          </p>
          <h2 className="mb-2 text-2xl font-medium text-text-primary">
            AI-Assisted Product Work
          </h2>
          <p className="mb-12 max-w-[720px] text-text-secondary">
            Building AI-native workflows, decision systems, and operational
            tools — with Claude, Cursor, and modern AI infrastructure.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiSystems.map((card) => (
              <AiSystemCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-3xl font-medium text-text-primary">
            Let&apos;s talk fintech and AI.
          </h2>
          <p className="mt-4 text-text-secondary">
            Open to PM roles at fintech and AI-first companies.
          </p>
          <a
            href="mailto:hello@estefania.dev"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
