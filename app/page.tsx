import Link from "next/link";

interface FeaturedProjectData {
  capability: string;
  company: string;
  heading: string;
  description: string;
  href: string;
}

interface FrameworkStepData {
  number: string;
  name: string;
  definition: string;
}

interface ProjectData {
  capability: string;
  company: string;
  summary: string;
  href: string;
}

interface OutcomeData {
  category: string;
  description: string;
}

const featuredProject: FeaturedProjectData = {
  capability: "Strategic Judgment",
  company: "BMG Money",
  heading: "Designing Infrastructure for a Regulated Lending Product",
  description:
    "Designing the compliance, operational, and decision infrastructure required to support a new regulated lending product.",
  href: "/bmg",
};

const frameworkSteps: FrameworkStepData[] = [
  {
    number: "01",
    name: "Understand",
    definition:
      "Understand how people, processes, technology, constraints, and incentives interact.",
  },
  {
    number: "02",
    name: "Align",
    definition: "Create shared understanding across stakeholders.",
  },
  {
    number: "03",
    name: "Simplify",
    definition:
      "Reduce complexity and friction through thoughtful design and decision-making.",
  },
  {
    number: "04",
    name: "Enable",
    definition:
      "Improve outcomes through better products, workflows, and systems.",
  },
];

const projects: ProjectData[] = [
  {
    capability: "Strategic Judgment",
    company: "BMG Money",
    summary:
      "Designing the compliance, operational, and decision infrastructure required to launch a regulated lending product.",
    href: "/bmg",
  },
  {
    capability: "Systems Thinking",
    company: "Quantum Lending",
    summary:
      "Creating alignment across an interconnected lending platform ecosystem.",
    href: "/quantum",
  },
  {
    capability: "Customer Understanding",
    company: "Camino Financial",
    summary: "Reducing uncertainty throughout the borrower experience.",
    href: "/camino",
  },
  {
    capability: "Decision Systems",
    company: "AI Job Search OS",
    summary:
      "Building a system for evaluating opportunities consistently through AI-assisted decision making.",
    href: "/ai-systems/job-search-os",
  },
];

const outcomes: OutcomeData[] = [
  {
    category: "Strategic Alignment",
    description:
      "Coordinated cross-functional teams around shared priorities, constraints, and business objectives.",
  },
  {
    category: "Scalable Systems",
    description:
      "Designed frameworks, workflows, and platforms capable of supporting long-term growth.",
  },
  {
    category: "Customer Understanding",
    description:
      "Translated customer behavior and uncertainty into actionable product decisions.",
  },
  {
    category: "Better Decision Making",
    description:
      "Built systems that improved evaluation, prioritization, and organizational clarity.",
  },
];

function FeaturedProject({ project }: { project: FeaturedProjectData }) {
  return (
    <article className="rounded-lg border border-border bg-card-bg p-10 sm:p-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary">
          {project.capability}
        </span>
        <p className="text-xs uppercase tracking-widest text-text-tertiary">
          {project.company}
        </p>
      </div>
      <h2 className="mt-6 text-2xl font-medium leading-snug text-text-primary sm:text-3xl">
        {project.heading}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <div className="mt-8 border-t border-border pt-6">
        <Link
          href={project.href}
          className="inline-flex items-center justify-center rounded bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

function FrameworkStep({ step, isLast }: { step: FrameworkStepData; isLast: boolean }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-x-10 sm:grid-cols-[8rem_1fr]">
      <div className="flex flex-col items-start">
        <p className="text-xs uppercase tracking-widest text-text-tertiary">
          {step.number}
        </p>
        <p className="mt-1 text-lg font-medium text-text-primary">{step.name}</p>
        {!isLast && (
          <p className="mt-4 text-text-tertiary" aria-hidden>
            ↓
          </p>
        )}
      </div>
      <p className="pt-[1px] text-sm leading-relaxed text-text-secondary sm:text-base">
        {step.definition}
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="rounded-lg border border-border bg-card-bg p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary">
          {project.capability}
        </span>
        <p className="text-xs uppercase tracking-widest text-text-tertiary">
          {project.company}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {project.summary}
      </p>
      <div className="mt-6 border-t border-border pt-5">
        <Link
          href={project.href}
          className="text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
        >
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

function OutcomeItem({ outcome }: { outcome: OutcomeData }) {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <p className="text-base font-medium text-text-primary">{outcome.category}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {outcome.description}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background px-6 py-32 sm:px-10 sm:py-40">
        <div className="mx-auto w-full max-w-[860px]">
          <p className="mb-5 text-xs uppercase tracking-widest text-text-tertiary">
            Product Manager
          </p>
          <h1 className="mb-5 text-4xl font-medium tracking-tightest text-text-primary sm:text-5xl">
            Turning complexity into clarity.
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-text-secondary">
            I build products that help people and organizations make better
            decisions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#selected-work"
              className="inline-flex items-center justify-center rounded bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-text-secondary"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-surface px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
            Featured Project
          </p>
          <h2 className="mb-8 text-3xl font-medium text-text-primary">
            Strategic Judgment in Practice
          </h2>
          <FeaturedProject project={featuredProject} />
        </div>
      </section>

      {/* How I Approach Complex Problems */}
      <section className="bg-background px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
            Approach
          </p>
          <h2 className="mb-3 text-3xl font-medium text-text-primary">
            How I Approach Complex Problems
          </h2>
          <p className="mb-16 max-w-xl text-base leading-relaxed text-text-secondary">
            Over time, I&apos;ve found that most complex product challenges can
            be approached through the same four-step process.
          </p>
          <div className="flex flex-col gap-12">
            {frameworkSteps.map((step, i) => (
              <FrameworkStep
                key={step.number}
                step={step}
                isLast={i === frameworkSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="selected-work"
        className="scroll-mt-20 bg-surface px-6 py-24 sm:px-10"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
            Work
          </p>
          <h2 className="mb-3 text-3xl font-medium text-text-primary">
            Selected Work
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary">
            Products and systems built across fintech, lending, and AI —
            each led by a distinct capability.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.company} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Outcomes */}
      <section className="bg-background px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
            Impact
          </p>
          <h2 className="mb-10 text-3xl font-medium text-text-primary">
            Selected Outcomes
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <OutcomeItem key={outcome.category} outcome={outcome} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-surface px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
            Contact
          </p>
          <h2 className="mb-3 text-3xl font-medium text-text-primary">
            Let&apos;s Connect
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary">
            I&apos;m always interested in conversations about product strategy,
            systems thinking, customer understanding, and the future of
            decision-making.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://www.linkedin.com/in/estefania-tortoledo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tortoledoestefan@gmail.com"
              className="inline-flex items-center justify-center rounded border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-text-secondary"
            >
              Email
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
            >
              Resume →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
