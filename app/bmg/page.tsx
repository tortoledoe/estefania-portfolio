import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BMG Money — Estefania Tortoledo",
  description:
    "How I led product definition and execution planning for an MLA-compliant consumer lending product — navigating regulatory, technical, operational, and organizational complexity across a full borrower lifecycle.",
};

const metricsDisclaimer =
  "* This product did not launch prior to company restructuring. The case study documents the product strategy, workflow design, and execution groundwork completed before that point. Metrics shown are illustrative projections based on the scope of work.";

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs uppercase tracking-widest text-text-tertiary">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-[720px] space-y-4 text-base leading-relaxed text-text-secondary">
      {children}
    </div>
  );
}

function MetricsDisclaimer() {
  return (
    <p className="mt-4 text-xs italic text-text-tertiary">{metricsDisclaimer}</p>
  );
}

// ─── Constraint Cards (2×2) ───────────────────────────────────────────────────

function ConstraintGrid({
  cards,
}: {
  cards: { title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border-[0.5px] border-border bg-surface p-6"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            {c.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Pillar Cards (3 horizontal) ─────────────────────────────────────────────

function PillarCards({
  cards,
}: {
  cards: { pillar: string; title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((c) => (
        <div
          key={c.pillar}
          className="rounded-2xl border-[0.5px] border-border bg-surface p-6"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            {c.pillar}
          </p>
          <p className="mt-2 text-sm font-medium text-text-primary">{c.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Decision Stack (numbered vertical) ──────────────────────────────────────

function DecisionStack({
  decisions,
}: {
  decisions: { number: string; title: string; body: string }[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {decisions.map((d) => (
        <div
          key={d.number}
          className="flex gap-5 rounded-2xl border-[0.5px] border-border bg-surface p-6"
        >
          <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-text-tertiary">
            {d.number}
          </span>
          <div>
            <p className="text-sm font-medium text-text-primary">{d.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {d.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Impact Cards (2-col grid) ────────────────────────────────────────────────

function ImpactCards({
  cards,
}: {
  cards: { title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border-[0.5px] border-border bg-surface p-6"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            {c.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const constraintCards = [
  {
    title: "Regulatory Constraints",
    body: "Military Lending Act borrower protection requirements. State-by-state lending regulations and product variations. Compliance-driven disclosure and repayment requirements. Auditability and servicing traceability expectations. Every product decision had a regulatory dimension that had to be evaluated before implementation.",
  },
  {
    title: "Technical Constraints",
    body: "Existing loan origination system limitations not designed for MLA-specific workflows. Eligibility logic and borrower classification complexity — determining MLA coverage status in real time required specific data integrations. Repayment and servicing system dependencies. Architectural decisions around integrating a new lending product into existing infrastructure without creating fragility or operational risk.",
  },
  {
    title: "Operational Constraints",
    body: "Servicing workflow readiness — operations teams needed new processes, new training, and new tooling to handle MLA-specific servicing requirements. Edge case handling across repayment scenarios and borrower status changes. Cross-functional dependency management across nine teams with different priorities and different implementation timelines.",
  },
  {
    title: "Product Constraints",
    body: "Balancing MLA-specific compliance safeguards with a borrower experience that felt simple and trustworthy. Minimizing application friction while embedding required eligibility verification steps. Designing workflows scalable enough to support future state expansion. Preserving conversion opportunity while maintaining strong compliance controls at every touchpoint.",
  },
];

const pillarCards = [
  {
    pillar: "Pillar 1",
    title: "Funnel and Conversion Strategy",
    body: "Design a lending funnel capable of supporting MLA-covered borrowers without introducing unnecessary friction. This meant defining application flow structure, eligibility handling logic, offer presentation, repayment incentive concepts, and friction reduction opportunities throughout the borrower journey. The goal was to improve borrower completion rates and user experience while maintaining compliance and risk controls — not treating those as mutually exclusive objectives.",
  },
  {
    pillar: "Pillar 2",
    title: "Compliance-Aware Product Design",
    body: "Rather than treating compliance as a downstream operational process, the product approach embedded MLA and risk considerations directly into workflow and system design from the start. Compliant eligibility handling. Repayment structure requirements. Operational auditability. Borrower protection workflows. Servicing traceability. Risk-aware product decisions at every layer. Compliance was a design input, not a design constraint.",
  },
  {
    pillar: "Pillar 3",
    title: "Lifecycle and Operational Scalability",
    body: "Design the product as a cohesive end-to-end borrower lifecycle experience — not a disconnected origination flow with servicing bolted on afterward. Borrower eligibility handling. Workflow orchestration. Servicing impact assessment. Repayment dependencies. Operational edge case documentation. Architectural implications for future product extensibility. The goal was a product that scaled operationally as military lending volume grew.",
  },
];

const decisions = [
  {
    number: "01",
    title: "Controlled Growth Over Rapid Acquisition",
    body: "Rather than aggressively optimizing for rapid borrower acquisition immediately, the product approach prioritized controlled rollout sequencing, compliance readiness, operational scalability, and eligibility accuracy. Expanding access to military borrowers was the mission — but doing it irresponsibly would have created regulatory, reputational, and operational risk that outweighed the near-term volume benefit. Sustainable growth required getting the compliance and operational foundation right first.",
  },
  {
    number: "02",
    title: "Organic Channels Before Multi-Channel Expansion",
    body: "The MVP strategy prioritized military borrowers entering through organic acquisition channels before expanding into broader marketing channels. This allowed the team to validate borrower behavior and operational workflows, identify servicing and eligibility edge cases early, reduce launch complexity, and establish clear performance baselines before scaling acquisition. De-risking the launch by limiting initial channel complexity was the right sequencing even though it meant slower early volume growth.",
  },
  {
    number: "03",
    title: "Stable MVP Before State Expansion",
    body: "Although future state expansion was a major business objective — MLA lending opportunity exists across many states — the strategy intentionally prioritized establishing a stable, compliant MVP in initial markets before introducing additional state-specific regulatory complexity. Building the reusable compliance and operational infrastructure first meant state expansion would be faster and lower-risk when it happened.",
  },
  {
    number: "04",
    title: "Where to Embed Compliance vs Where to Streamline",
    body: "A major product design challenge was determining where MLA-specific compliance validations needed to occur within the borrower experience versus where the experience could be streamlined without compromising regulatory integrity. Some compliance steps had to be visible and explicit — disclosures, MAPR acknowledgments, eligibility confirmation. Others could be handled as background system checks without borrower-facing friction. Getting this distinction right was essential for building a product that was both compliant and usable.",
  },
  {
    number: "05",
    title: "Extend Existing Infrastructure vs Dedicated Workflows",
    body: "The team needed to determine how much of the existing lending infrastructure could be reused versus where dedicated military lending workflows were necessary. Reusing infrastructure reduced engineering effort and operational fragmentation. But forcing MLA requirements into infrastructure not designed for them created compliance risk and operational brittleness. The resolution: reuse where genuinely compatible, build dedicated workflows where MLA requirements created meaningful divergence from existing product behavior.",
  },
];

const impactCards = [
  {
    title: "Expanded Borrower Eligibility",
    body: "Positioned the company to serve a previously unsupported borrower segment — military servicemembers and dependents whose applications were being declined by the existing product infrastructure.",
  },
  {
    title: "Improved Funnel Conversion",
    body: "The redesigned application and offer experience were projected to improve borrower completion rates and accelerate application processing while maintaining risk and compliance controls.",
  },
  {
    title: "Faster Lending Operations",
    body: "Standardized borrower lifecycle workflows were designed to reduce operational fragmentation and minimize manual servicing complexity across origination, repayment, and servicing.",
  },
  {
    title: "Future State Expansion Readiness",
    body: "The compliance, servicing, and operational infrastructure created the foundation for expansion into additional regulated markets — reducing the marginal cost and risk of each subsequent state launch.",
  },
  {
    title: "Cross-Functional Alignment",
    body: "Aligned nine teams around a unified lending strategy and implementation roadmap — establishing the organizational coordination infrastructure that any future regulated product launch would benefit from.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BmgPage() {
  return (
    <main>
      {/* Back link */}
      <div className="bg-background px-6 pt-28 pb-0">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/#selected-work"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to Work
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-background px-6 pt-10 pb-16">
        <div className="mx-auto max-w-[900px]">
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            BMG Money · Consumer Lending · Regulated Product
          </p>
          <h1 className="mt-4 max-w-[720px] text-[32px] font-medium leading-[1.15] tracking-tight text-text-primary sm:text-[44px]">
            Designing a Regulated Financial Product from Scratch: Compliance
            Infrastructure at the Product Layer
          </h1>
          <p className="mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary sm:text-lg">
            How I led product definition, borrower experience strategy, and
            execution planning for an MLA-compliant consumer lending product —
            coordinating across 9 cross-functional teams under significant
            regulatory, technical, and operational complexity.
          </p>

          {/* Metrics row */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:divide-x sm:divide-border">
            {[
              { value: "9", label: "Teams Coordinated" },
              { value: "4", label: "Constraint Domains" },
              { value: "Full Lifecycle", label: "Designed" },
            ].map((stat) => (
              <div key={stat.label} className="sm:px-8 first:sm:pl-0">
                <p className="text-xl font-medium text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-text-tertiary">{stat.label}</p>
              </div>
            ))}
          </div>
          <MetricsDisclaimer />

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Consumer Lending",
              "MLA Compliance",
              "Regulatory Product Design",
              "Lifecycle Design",
              "Cross-Functional Leadership",
              "Operational Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Section 1 — Context */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>
            Expanding Into a New Borrower Segment With No Supporting
            Infrastructure
          </SectionHeading>
          <Prose>
            <p>
              BMG Money is a consumer lending fintech specializing in
              responsible lending for working Americans — primarily
              employer-sponsored loan programs where repayments are made through
              payroll deduction. The business had an established lending
              operation but a significant gap in its product coverage: military
              borrowers covered under the Military Lending Act.
            </p>
            <p>
              The MLA is a federal consumer protection law that establishes
              specific borrower protections for active duty servicemembers and
              their dependents — including a 36% Military Annual Percentage Rate
              cap, mandatory disclosures, prohibited loan terms, and specific
              repayment structure requirements. Lenders who want to serve
              MLA-covered borrowers must build dedicated compliance
              infrastructure around every layer of the product — not just legal
              review, but the application flow, the eligibility logic, the
              repayment system, and the servicing workflows.
            </p>
            <p>
              BMG Money was declining applications from otherwise eligible
              military borrowers because the existing lending infrastructure
              could not support MLA-specific requirements. This represented both
              a missed business opportunity and a gap in the company's mission
              to expand access to responsible lending for underserved borrowers.
            </p>
            <p>
              I was brought in to lead product definition, borrower experience
              strategy, and execution planning for the military lending product
              — building the compliance infrastructure, borrower experience, and
              operational workflows required to serve this segment compliantly
              and at scale.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 2 — Honest Context (accent callout) */}
      <section className="bg-background px-6 pb-16">
        <div className="mx-auto max-w-[900px]">
          <div className="rounded-2xl border-[0.5px] border-border bg-surface p-8 border-l-4 border-l-accent">
            <SectionLabel>Important Context</SectionLabel>
            <SectionHeading>
              This Product Did Not Launch — and Why That Matters
            </SectionHeading>
            <Prose>
              <p>
                The majority of the product strategy, workflow planning,
                experimentation design, operational alignment, and
                implementation groundwork had been completed when the company
                underwent restructuring and layoffs.
              </p>
              <p>
                I am including this case study in my portfolio for a specific
                reason: the work required to define, design, and prepare a
                regulated financial product for launch is substantial and
                demonstrates a distinct set of capabilities — regulatory
                translation, compliance-aware product design, cross-functional
                coordination at scale, and operational systems thinking — that
                are not always visible in case studies that focus primarily on
                shipped outcomes and post-launch metrics.
              </p>
              <p>
                Product work happens before the launch, not just after it. This
                case study documents that work honestly.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      {/* Section 3 — Problem */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            Four Constraint Domains, All Requiring Simultaneous Resolution
          </SectionHeading>
          <Prose>
            <p>
              What made this initiative genuinely complex was not any single
              constraint — it was the simultaneous presence of four distinct
              constraint domains, each with its own requirements, its own
              stakeholders, and its own failure modes.
            </p>
          </Prose>
          <ConstraintGrid cards={constraintCards} />
        </div>
      </section>

      {/* Section 4 — Key Insight */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Key Insight</SectionLabel>
          <SectionHeading>
            Compliance Embedded at the Product Layer Is Not a Constraint —
            It&apos;s the Product
          </SectionHeading>
          <Prose>
            <p>
              The conventional approach to compliance in product development
              treats regulatory requirements as constraints imposed on the
              product from the outside — things the legal and compliance teams
              hand down that the product team then figures out how to
              accommodate without breaking the user experience.
            </p>
            <p>
              The insight that shaped this initiative was that this framing is
              backwards — especially for a regulated financial product targeting
              a protected borrower segment.
            </p>
            <p>
              For MLA lending, the compliance requirements are not constraints
              on the product. They are the product. The borrower protections
              exist because military borrowers have historically been targeted
              by predatory lenders. A product that genuinely serves this segment
              well is one that makes those protections visible, trustworthy, and
              easy to understand — not one that hides them in fine print to
              minimize their impact on conversion.
            </p>
            <p>
              This reframe had practical product consequences. Rather than
              asking "how do we satisfy MLA requirements with minimal UX
              disruption," we asked "how do we design MLA protections into the
              borrower experience in a way that builds trust and supports the
              borrower's decision-making?" The answers to those two questions
              produce very different products.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 5 — My Role */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>My Role</SectionLabel>
          <SectionHeading>
            Leading Product Across the Full Borrower Lifecycle
          </SectionHeading>
          <Prose>
            <p>
              My responsibilities spanned the full borrower lifecycle — from
              first application touch through funded loan through servicing and
              repayment.
            </p>
          </Prose>

          {/* Role layer cards */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              {
                layer: "Strategy",
                body: "Defined the product vision, compliance-aware product approach, phased rollout strategy, and KPI framework for measuring launch success across conversion, borrower experience, operational efficiency, risk exposure, and engagement.",
              },
              {
                layer: "Requirements",
                body: "Wrote Business Requirements Documents and Technical Requirements Documents translating MLA compliance obligations into specific product behaviors — what the system needed to do, when, and why, in language that engineering could implement and compliance could audit.",
              },
              {
                layer: "Experience",
                body: "Defined how eligibility logic should surface within the borrower application flow, how compliance-driven disclosures should be presented to minimize confusion without reducing their legal effectiveness, and how repayment options and allotment incentives should be communicated to maximize adoption.",
              },
              {
                layer: "Operations",
                body: "Mapped borrower lifecycle workflows and servicing edge cases — the scenarios that don't appear in happy-path product specs but that operations teams encounter constantly and that create disproportionate support burden when they are not designed for in advance.",
              },
              {
                layer: "Coordination",
                body: "Aligned nine cross-functional teams — Product, Engineering, Design, Compliance, Legal, Credit, Fraud, Marketing, Operations, and Servicing — around a unified product strategy and implementation roadmap, managing dependencies and sequencing across teams with different constraints and different delivery timelines.",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className="flex gap-4 rounded-2xl border-[0.5px] border-border bg-background p-5"
              >
                <span className="mt-0.5 w-24 shrink-0 text-xs font-medium text-text-secondary">
                  {item.layer}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Product Strategy */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Strategy</SectionLabel>
          <SectionHeading>
            Three Strategic Pillars, One Unified Approach
          </SectionHeading>
          <Prose>
            <p>
              The product strategy was organized around three pillars that had
              to work together rather than being optimized independently.
            </p>
          </Prose>
          <PillarCards cards={pillarCards} />
        </div>
      </section>

      {/* Section 7 — Key Decisions */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Key Decisions</SectionLabel>
          <SectionHeading>
            The Strategic Tradeoffs That Shaped the Product
          </SectionHeading>
          <Prose>
            <p>
              Five key strategic decisions defined how the product was designed
              and sequenced.
            </p>
          </Prose>
          <DecisionStack decisions={decisions} />
        </div>
      </section>

      {/* Section 8 — Cross-Functional Coordination */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Cross-Functional Leadership</SectionLabel>
          <SectionHeading>Nine Teams, One Unified Strategy</SectionHeading>
          <Prose>
            <p>
              The scale of cross-functional coordination required for this
              initiative was significant — and was itself a product management
              challenge distinct from the product design work.
            </p>
            <p>
              Nine teams had meaningful stakes in the military lending product
              launch: Product, Engineering, Design, Compliance, Legal, Credit,
              Fraud, Marketing, Operations, and Servicing. Each brought
              different priorities, different constraints, and different
              definitions of what "ready to launch" meant.
            </p>
          </Prose>

          {/* Team callout chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Product",
              "Engineering",
              "Design",
              "Compliance",
              "Legal",
              "Credit",
              "Fraud",
              "Marketing",
              "Operations & Servicing",
            ].map((team) => (
              <span
                key={team}
                className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
              >
                {team}
              </span>
            ))}
          </div>

          <Prose>
            <p>
              Compliance and Legal needed to verify that every product decision
              satisfied MLA requirements before implementation — which required
              building a review process into the product development workflow
              rather than treating compliance as a final gate.
            </p>
            <p>
              Credit needed confidence that the MLA MAPR cap and repayment
              structure requirements would not compromise portfolio performance
              — which required joint analysis of how MLA constraints interacted
              with existing credit risk parameters.
            </p>
            <p>
              Operations and Servicing needed workflow documentation for every
              MLA-specific scenario they would encounter — including edge cases
              that the happy-path product spec did not address.
            </p>
            <p>
              Engineering needed requirements that were specific enough to
              implement without ambiguity — which meant BRDs and TRDs that
              translated regulatory language into precise system behaviors
              rather than leaving interpretation to implementation.
            </p>
            <p>
              Aligning these teams required treating cross-functional
              coordination as a product discipline — not as a communication
              task. Shared artifacts, clear decision rights, explicit dependency
              mapping, and a prioritization framework that all teams could
              reference when conflicts arose.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 9 — Projected Impact */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Projected Impact</SectionLabel>
          <SectionHeading>
            What This Initiative Was Designed to Deliver
          </SectionHeading>
          <Prose>
            <p>
              Although the product did not reach launch, the initiative
              established the foundational product and operational framework
              required to serve MLA-covered borrowers — and the projected
              business impact was meaningful.
            </p>
          </Prose>
          <ImpactCards cards={impactCards} />
          <MetricsDisclaimer />
        </div>
      </section>

      {/* Section 10 — AI Lens */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>AI Lens</SectionLabel>
          <SectionHeading>
            How AI Changes Regulated Product Development and Compliance Design
          </SectionHeading>
          <Prose>
            <p>
              The compliance challenge at the heart of this initiative —
              translating a complex regulatory framework into specific product
              behaviors, system requirements, and operational workflows — is
              exactly the kind of work where AI creates significant leverage for
              product teams.
            </p>
            <p>
              The BRD and TRD writing process — translating MLA regulatory text
              into precise product and system requirements — involved significant
              research synthesis, cross-referencing of regulatory guidance, and
              structured documentation work. AI-assisted research synthesis and
              requirements drafting would have accelerated this work
              meaningfully, not by replacing the judgment required to make
              compliance decisions, but by compressing the research and
              documentation cycles that surrounded those decisions.
            </p>
            <p>
              The eligibility determination logic — identifying MLA-covered
              borrowers in real time — is a classification problem where AI can
              improve accuracy and reduce edge case failures compared to
              rules-based approaches, particularly as borrower status changes
              over the life of a loan.
            </p>
            <p>
              The operational edge case documentation — mapping every scenario
              that servicing teams might encounter with MLA-covered borrowers —
              is the kind of structured, comprehensive workflow analysis that AI
              can assist with significantly. The human judgment required is in
              evaluating and validating the edge cases identified — not in
              generating the initial list from first principles.
            </p>
            <p>
              More broadly: regulated product development is one of the
              highest-leverage applications of AI in fintech. The volume of
              regulatory text, guidance documents, state-specific variations,
              and compliance decision history that a PM needs to process and
              synthesize to design a compliant product is enormous. AI
              doesn&apos;t replace the regulatory judgment. It compresses the
              time required to develop the context that judgment requires.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 11 — Cross-Fintech Application */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Beyond This Context</SectionLabel>
          <SectionHeading>
            Where Regulatory Product Thinking Transfers Across Fintech
          </SectionHeading>
          <Prose>
            <p>
              The capability demonstrated in this case study — taking a novel
              regulatory framework, translating it into product requirements,
              designing borrower-facing experiences around it, and building
              operational workflows to support it — is not MLA-specific. It is
              a general fintech capability.
            </p>
            <p>
              Every fintech company operating in regulated markets faces this
              challenge in some form. Banking product teams navigating new OCC
              or Federal Reserve guidance. Payments product teams responding to
              network rule changes or open banking mandates. Embedded finance
              platforms designing compliance infrastructure for partner financial
              products. Neobanks expanding into new markets with different
              regulatory frameworks.
            </p>
            <p>
              The specific regulation changes. The product discipline required
              to translate regulatory requirements into compliant, usable,
              operationally scalable products does not.
            </p>
          </Prose>

          {/* Three transferable capabilities */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              {
                title: "Regulatory Translation",
                body: "Converting complex regulatory language into specific product behaviors and system requirements that engineering can implement and compliance can audit.",
              },
              {
                title: "Compliance-Aware Product Design",
                body: "Embedding regulatory requirements into the product experience as design inputs rather than treating them as constraints imposed after the product is designed.",
              },
              {
                title: "Operational Systems Thinking",
                body: "Designing not just for the happy path but for the full range of operational scenarios that a regulated product creates — including the edge cases that generate disproportionate operational burden when they are not designed for in advance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border-[0.5px] border-border bg-background p-5"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-text-secondary">
            These capabilities are what allow a product team to move fast in a
            regulated environment without creating the compliance debt that comes
            back as enforcement risk later.
          </p>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="border-t border-border bg-background px-6 py-12">
        <div className="mx-auto flex max-w-[900px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-text-tertiary">
              Previous Case Study
            </p>
            <Link
              href="/quantum"
              className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
            >
              ← Quantum Lending Solutions
            </Link>
          </div>
          <div className="sm:text-right">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">
              Next
            </p>
            <Link
              href="/ai-systems"
              className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
            >
              AI Systems →
            </Link>
            <p className="mt-0.5 text-xs text-text-tertiary">
              AI Job Search OS and AI-Assisted Financial Decisioning System
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
