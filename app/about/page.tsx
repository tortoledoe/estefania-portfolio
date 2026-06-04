import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Estefania Tortoledo",
  description:
    "Estefania Tortoledo is a Senior Fintech Product Manager based in Los Angeles, CA — specializing in lending, financial infrastructure, risk systems, and AI-assisted product development.",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
      {children}
    </p>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const experience = [
  {
    title: "Senior Product Manager",
    company: "BMG Money",
    domain: "Consumer Lending",
    body: "Led product definition and execution planning for an MLA-compliant military lending product — coordinating across 9 cross-functional teams through regulatory, technical, and operational complexity. Defined borrower experience strategy, compliance infrastructure, and lifecycle workflows for a net-new consumer lending segment.",
    href: "/bmg",
  },
  {
    title: "Product Manager",
    company: "Quantum Lending Solutions",
    domain: "SMB Lending",
    body: "Built a complete SMB lending platform from zero — application experience, financial data infrastructure, offer design, and borrower self-service portal. Delivered meaningful improvement in application completion, support volume reduction, and self-service adoption under real engineering constraints.",
    href: "/quantum",
  },
  {
    title: "Product Manager",
    company: "Camino Financial",
    domain: "SMB Lending",
    body: "Redesigned a high-friction SMB financial onboarding system connecting UX, data quality, and underwriting decisioning. Improved funded loan conversion across a complete funnel — application through underwriting through funding — through a four-phase optimization roadmap.",
    href: "/camino",
  },
];

const principles = [
  {
    title: "Start with the system, not the feature.",
    body: "Every product problem exists inside a larger system. Before defining what to build, I need to understand how the pieces connect — where the real constraint is, what breaks if we change one component, and what the right architecture looks like before anyone writes a line of code or designs a single screen.",
  },
  {
    title: "Tradeoffs are the work.",
    body: "The easy product decisions make themselves. The real work is in the tradeoffs — where improving one dimension costs something in another, and someone has to make the call with incomplete information. I make those calls explicitly, document the reasoning, and hold myself accountable to the outcomes.",
  },
  {
    title: "Complexity is not an excuse for opacity.",
    body: "Financial products are genuinely complex. That complexity does not justify products that are hard to understand, hard to use, or hard to trust. The job is to absorb the complexity internally — in the systems design, the operational workflows, the decision logic — so that it does not leak into the customer experience.",
  },
];

const domainTags = [
  "Consumer Lending",
  "SMB Lending",
  "Financial Risk Systems",
  "Regulatory Compliance",
  "Underwriting and Decisioning",
  "Borrower Lifecycle Management",
  "Operational Systems Design",
  "Embedded Finance",
  "AI Product Development",
  "Open Banking",
];

const toolTags = [
  "Claude · Cursor · Claude Code",
  "Figma · Jira · Notion",
  "GitHub · Replit",
  "Product Requirements (BRD/TRD)",
  "Experimentation and A/B Testing",
  "Funnel Optimization",
  "Cross-Functional Leadership",
  "0→1 Product Development",
  "Roadmap Strategy",
  "KPI Framework Design",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-background px-6 pt-24 pb-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            Senior Product Manager · Los Angeles, CA
          </p>
          <h1 className="mt-3 text-3xl font-medium text-text-primary sm:text-4xl">
            Estefania Tortoledo
          </h1>
          {/* Pull quote */}
          <p className="mt-8 max-w-2xl text-4xl font-medium tracking-tightest text-text-primary">
            I build financial products that work the way people actually need
            them to.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Section 1 — Essay */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-text-secondary">
            <p>
              Money touches every significant decision a person makes — where
              they live, whether they can start a business, how they weather a
              financial emergency. Most of the systems built around those
              decisions are needlessly complicated, opaque by design, and
              optimized for the institution rather than the person using them.
              That gap is what brought me to fintech. It&apos;s what keeps me
              here.
            </p>
            <p>
              I&apos;ve spent six years building financial products in consumer
              and SMB lending — working inside the operational complexity that
              most people never see. Eligibility logic. Underwriting decision
              systems. Compliance workflows embedded at the product layer.
              Servicing infrastructure that has to scale without breaking. The
              work has never been simple, and that is precisely what has made it
              worth doing.
            </p>
            <p>
              What I&apos;ve learned is that the hard problems in fintech are
              rarely purely technical or purely experiential. They sit at the
              intersection of both — and they require holding the full system in
              mind simultaneously. A UX change that improves application
              completion but degrades underwriting data quality is not an
              improvement. A compliance requirement that protects borrowers but
              creates so much friction that qualified applicants abandon is not a
              well-designed product. The job is to find the solution that works
              across all the constraints at once — not to optimize one dimension
              at the expense of the others.
            </p>
            <p>
              That systems orientation is how I approach every product problem.
              Not what is the fastest thing to ship, but what is the right
              architecture — for the customer, for the business, for the
              operational teams who will run it, and for the regulatory
              environment that governs it. Getting that architecture right before
              building is what separates products that scale from products that
              create compounding operational debt.
            </p>
            <p>
              I did not come to product management through a traditional path. I
              came to it because I kept finding myself drawn to the hardest, most
              ambiguous problems in whatever room I was in — the ones where the
              constraints were real, the tradeoffs were meaningful, and the
              answer was not obvious. Product management turned out to be the
              discipline that formalizes that instinct. It gave me the frameworks
              and the authority to go after those problems systematically.
            </p>
            <p>
              The work I&apos;m most proud of is not any single feature or
              metric. It is the moments where a genuinely complex system — a
              regulated lending product, a 0→1 platform, a funnel that connected
              UX to underwriting outcomes — came together in a way that was
              simpler and more durable than it had any right to be. Those moments
              come from obsessing over the problem long enough that the right
              architecture becomes obvious rather than forcing a solution
              prematurely.
            </p>
            <p>
              Right now I am applying that same thinking to AI. Not as a
              technology trend to follow, but as a genuine shift in what is
              possible in product design — particularly for operational and
              decisioning problems that have historically required significant
              manual effort. The financial products I want to build next use AI
              not as a feature but as a foundational component — changing what
              the product can do, not just how efficiently it does what it
              already did.
            </p>
            <p>
              I am based in Los Angeles. I am looking for senior product
              leadership opportunities in fintech — lending, banking
              infrastructure, embedded finance, risk systems, and AI-enabled
              financial products. I am particularly drawn to environments where
              the problems are hard, the domain complexity is real, and the
              expectation is that the PM takes genuine ownership of outcomes
              rather than managing a process.
            </p>
            <p className="font-medium text-text-primary">
              If that sounds like your team, I would like to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Experience Timeline */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Experience</SectionLabel>
          <div className="flex flex-col gap-0">
            {experience.map((role, i) => (
              <div
                key={i}
                className={`border-l-2 border-accent pl-6 ${
                  i < experience.length - 1 ? "pb-10" : ""
                }`}
              >
                <p className="text-base font-medium text-text-primary">
                  {role.title}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-text-tertiary">
                  {role.company} · {role.domain}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {role.body}
                </p>
                <Link
                  href={role.href}
                  className="mt-3 inline-block text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How I Work */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>How I Work</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <p className="text-sm font-medium leading-snug text-text-primary">
                  {p.title}
                </p>
                <div className="my-3 border-t border-border" />
                <p className="text-sm leading-relaxed text-text-secondary">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Currently Interested In */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Currently Interested In</SectionLabel>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Senior and principal PM roles in fintech — lending, banking
              infrastructure, embedded finance, payments, risk systems, and
              AI-enabled financial products.
            </p>
            <p>
              Environments where the problems are hard, the domain is complex,
              and the expectation is genuine product ownership rather than
              feature delivery.
            </p>
            <p>
              Teams building financial products that actually work better for
              the people who use them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Outside of Work */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Outside of Work</SectionLabel>
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              I am consistently drawn to understanding how systems work —
              financial markets, consumer behavior, emerging technology, the way
              incentives shape decisions at scale. That curiosity does not stay
              inside work hours. I build side projects, explore new tools, and
              spend more time than is probably reasonable thinking about how AI
              is going to change the operational layer of financial services over
              the next five years.
            </p>
            <p>
              I am based in Los Angeles, which means I am also required by local
              ordinance to have opinions about traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Contact */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="text-3xl font-medium text-text-primary">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            I am open to conversations about senior PM roles, fintech product
            challenges, and AI-enabled financial product development.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:tortoledoestefan@gmail.com"
              className="inline-flex items-center justify-center rounded bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/estefania-tortoledo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-text-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Section 7 — Skills and Tools */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Tools and Domain Knowledge</SectionLabel>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-text-tertiary">
                Domain
              </p>
              <ul className="flex flex-col gap-2">
                {domainTags.map((tag) => (
                  <li key={tag} className="text-sm leading-relaxed text-text-secondary">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-text-tertiary">
                Tools and Methods
              </p>
              <ul className="flex flex-col gap-2">
                {toolTags.map((tag) => (
                  <li key={tag} className="text-sm leading-relaxed text-text-secondary">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-border bg-background px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs text-text-tertiary">
            This portfolio was built with Next.js, Tailwind CSS, Cursor, and
            Claude. The case study content reflects real product work. Metrics
            are illustrative estimates. Specific figures are confidential per
            company agreement.
          </p>
        </div>
      </div>
    </main>
  );
}
