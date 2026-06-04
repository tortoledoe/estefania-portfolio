import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quantum Lending Solutions — Estefania Tortoledo",
  description:
    "How I built an end-to-end SMB lending platform from zero — connecting application experience, financial data infrastructure, underwriting, and borrower self-service across a complete 0→1 product build.",
};

const metricsDisclaimer =
  "* Metrics shown are illustrative estimates based on the scope and nature of the work. Specific figures are confidential per company agreement.";

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

// ─── Timeline ─────────────────────────────────────────────────────────────────

function Timeline({
  phases,
}: {
  phases: {
    phase: string;
    number: string;
    title: string;
    body: string;
    goal: string;
  }[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-0">
      {phases.map((p, i) => (
        <div key={i} className="flex gap-6">
          {/* spine */}
          <div className="flex flex-col items-center">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-text-primary">
              {p.number}
            </div>
            {i < phases.length - 1 && (
              <div className="mt-1 w-px flex-1 bg-border" />
            )}
          </div>
          {/* content */}
          <div className={`pb-8 ${i === phases.length - 1 ? "pb-0" : ""}`}>
            <p className="mt-1 text-xs uppercase tracking-widest text-text-tertiary">
              {p.phase}
            </p>
            <h3 className="mt-1 text-base font-medium text-text-primary">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {p.body}
            </p>
            <p className="mt-2 text-xs text-text-tertiary">
              <span className="font-medium text-text-secondary">Goal:</span>{" "}
              {p.goal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tradeoff Cards (2×2) ─────────────────────────────────────────────────────

function TradeoffGrid({
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

// ─── Outcome Metric Cards (2-col grid) ───────────────────────────────────────

function MetricCards({
  cards,
}: {
  cards: { title: string; value: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border-[0.5px] border-border bg-surface p-6"
        >
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            {c.title}
          </p>
          <p className="mt-2 text-2xl font-medium text-text-primary">
            {c.value}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Business Impact ──────────────────────────────────────────────────────────

function ImpactItem({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <p className="text-sm font-medium text-text-primary">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-text-secondary">{body}</p>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const roadmapPhases = [
  {
    phase: "Phase 1",
    number: "1",
    title: "Application and Eligibility",
    body: "Build the core application experience from scratch. Structured business and owner data collection. Simplified UX and reduced friction. Clear guidance on requirements. Eligibility logic to surface qualification signals early.",
    goal: "Establish a functioning application pipeline with measurable completion rates.",
  },
  {
    phase: "Phase 2",
    number: "2",
    title: "Financial Data Infrastructure",
    body: "Build bank connectivity and financial data ingestion. Transaction data integration enabling cash flow analysis for underwriting. High-signal data prioritization — collect what materially improves underwriting quality, eliminate what doesn't.",
    goal: "Improve underwriting data quality without increasing application drop-off.",
  },
  {
    phase: "Phase 3",
    number: "3",
    title: "Offer Experience",
    body: "Design the offer presentation and acceptance flow. Clear loan term communication — amount, APR, repayment structure. Structured, digestible offer format that reduces cognitive overload.",
    goal: "Improve offer-to-acceptance conversion by building borrower confidence in the offer.",
  },
  {
    phase: "Phase 4",
    number: "4",
    title: "Borrower Portal and Self-Service",
    body: "Build the post-funding borrower experience. Loan balance and payment tracking. Autopay enrollment and account management. Complete loan lifecycle visibility.",
    goal: "Eliminate unnecessary support volume and establish a self-service foundation for the ongoing borrower relationship.",
  },
];

const tradeoffCards = [
  {
    title: "Build for Revenue First",
    body: "The instinct might be to build the full platform end-to-end before launching. Instead, we sequenced by revenue impact — application and conversion before portal and self-service. This meant borrowers had a great application experience before they had a great post-funding experience. The sequencing was correct: funded loan volume had to exist before servicing efficiency mattered at scale.",
  },
  {
    title: "Balance Data vs Conversion",
    body: "The financial data collection step was the highest-risk friction point in the application flow. We resolved this by conducting a systematic analysis of which data inputs had the highest underwriting signal value relative to their friction cost. Inputs with high signal and low friction were kept. High friction, low signal inputs were removed. This was a product decision with direct credit risk implications — made jointly with underwriting.",
  },
  {
    title: "Self-Service vs Control",
    body: "Enabling borrowers to manage their own accounts — view balances, change payment methods, enroll in autopay — required careful design around what actions to allow self-service versus what required human review. The principle: enable borrower actions that reduce support volume without creating risk exposure. Verify system accuracy thoroughly before exposing any self-service capability that could affect payment flows.",
  },
  {
    title: "Platform Thinking vs Feature Shipping",
    body: "Under engineering constraints there is constant pressure to ship features quickly rather than build platform foundations. We resisted this pressure at key moments — particularly in the data infrastructure layer — because building a fragile data pipeline to ship faster would have created technical debt that slowed every subsequent phase. Every decision was anchored to ROI and scalability, not just near-term delivery speed.",
  },
];

const metricCards = [
  {
    title: "Application Completion",
    value: "↑ ~20%",
    body: "Simplified application UX and clearer requirement guidance drove meaningful improvement in application start-to-complete conversion.",
  },
  {
    title: "Financial Data Quality",
    value: "↑ Improved",
    body: "Higher-quality financial data entering underwriting reduced manual review dependency and improved underwriting decision confidence.",
  },
  {
    title: "Support Volume",
    value: "↓ 25–30%",
    body: "Borrower portal self-service capability eliminated the majority of routine inbound support requests — balance inquiries, payment questions, account management — that had previously required human handling.",
  },
  {
    title: "Self-Service Adoption",
    value: "↑ 40%",
    body: "Borrowers adopted the self-service portal at a rate that confirmed the demand for account visibility and control that the previous experience had not provided.",
  },
  {
    title: "Autopay Enrollment",
    value: "↑ Increased",
    body: "Streamlined autopay enrollment through the borrower portal drove meaningful adoption — improving payment reliability and reducing delinquency risk at the portfolio level.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function QuantumPage() {
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
            Quantum Lending Solutions · SMB Lending · 0→1
          </p>
          <h1 className="mt-4 max-w-[720px] text-[32px] font-medium leading-[1.15] tracking-tight text-text-primary sm:text-[44px]">
            Building a Financial Platform from Zero: Connecting Acquisition,
            Data Infrastructure, and Self-Service
          </h1>
          <p className="mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary sm:text-lg">
            How I led 0→1 product development of a complete SMB lending platform
            — from application experience through financial data infrastructure,
            offer design, and borrower self-service — prioritized under real
            engineering constraints.
          </p>

          {/* Metrics row */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:divide-x sm:divide-border">
            {[
              { value: "+20%", label: "Application Completion" },
              { value: "↓25–30%", label: "Support Volume" },
              { value: "↑40%", label: "Self-Service Adoption" },
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
              "0→1 Platform",
              "SMB Lending",
              "Financial Data",
              "Self-Service",
              "Open Banking",
              "Prioritization",
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
            A Growing SMB Lending Business With No Product Foundation
          </SectionHeading>
          <Prose>
            <p>
              Quantum Lending Solutions was scaling an SMB lending business —
              but without a cohesive product to support it. The application
              experience, underwriting data collection, and loan servicing all
              operated as disconnected pieces. There was no unified platform
              connecting the borrower journey from first application through
              funded loan through ongoing loan management.
            </p>
            <p>
              The result was fragmented on both sides. Borrowers experienced a
              confusing, manual-heavy process with no visibility into their
              application status or loan account after funding. The business
              experienced high application drop-off, poor financial data quality
              entering underwriting, and a heavy servicing burden driven
              entirely by inbound borrower support requests that a self-service
              portal would have resolved automatically.
            </p>
            <p>
              This was a 0→1 problem. Not optimizing an existing product —
              building the product from scratch, under real engineering
              constraints, with limited resources and competing priorities.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 2 — Problem */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            No Unified Product Across the Entire Loan Lifecycle
          </SectionHeading>
          <Prose>
            <p>
              The problems were systemic and interconnected across three
              distinct layers of the borrower journey.
            </p>
            <p>
              At the application layer, borrowers faced a long, confusing
              application with unclear requirements and a heavy document burden.
              Drop-off was high and the data coming through was inconsistent —
              creating downstream problems in underwriting that the application
              experience was directly causing.
            </p>
            <p>
              At the underwriting layer, poor financial data quality meant heavy
              reliance on manual review. Underwriters were spending significant
              time chasing missing documents and cleaning up incomplete
              submissions rather than making credit decisions. This slowed
              time-to-decision and created a bottleneck that hurt conversion and
              borrower experience simultaneously.
            </p>
            <p>
              At the servicing layer, funded borrowers had no self-service
              capability. No way to check their loan balance. No way to manage
              payments or enroll in autopay. No visibility into their account.
              Every question — however simple — became an inbound support
              ticket. The operational cost was significant and growing with loan
              volume.
            </p>
            <p>
              The core issue: there was no unified product connecting acquisition
              through underwriting through servicing. Three disconnected
              experiences created three disconnected operational problems.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 3 — Key Insight */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Key Insight</SectionLabel>
          <SectionHeading>
            Two Systemic Gaps Were Driving All the Inefficiency
          </SectionHeading>
          <Prose>
            <p>
              Beneath the surface-level symptoms — drop-off, slow decisioning,
              high support volume — two fundamental systemic gaps were driving
              everything.
            </p>
            <p>
              The first was a data versus conversion tradeoff that had never
              been properly resolved. Better underwriting required more
              financial data. But asking for more data increased application
              friction and drop-off. The team had been treating this as an
              either/or choice — either collect the data we need and accept the
              drop-off, or reduce friction and accept worse underwriting quality.
              The insight was that this was a false choice. The real solution
              was to collect the right data — high-signal inputs that materially
              improved underwriting quality — while eliminating the data
              collection that added friction without adding underwriting value.
            </p>
            <p>
              The second was a self-service gap that was entirely unnecessary.
              Borrowers were generating support tickets not because their needs
              were complex but because they had no other way to get basic
              information about their own loan account. This was an operational
              cost that a well-designed borrower portal would eliminate almost
              entirely — and it was also a borrower experience problem that was
              damaging trust and satisfaction in the post-funding relationship.
            </p>
            <p>
              These two insights — prioritize high-signal data, eliminate
              unnecessary support volume through self-service — shaped the
              entire product strategy.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 4 — Strategy */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Strategy</SectionLabel>
          <SectionHeading>
            Build a Scalable Lending Platform, Not Just Features
          </SectionHeading>
          <Prose>
            <p>
              The strategic framing was deliberate and important: this was not a
              features project. It was a platform project. The goal was to build
              a cohesive end-to-end SMB lending experience — one where
              application, underwriting data, offer, and servicing all operated
              as parts of a unified product rather than as disconnected
              workflows.
            </p>
            <p>
              The product vision: an end-to-end SMB lending experience enabling
              fast application, data-driven underwriting, and self-service loan
              management.
            </p>
            <p>
              Every prioritization decision was anchored to three dimensions in
              order of priority:
            </p>
          </Prose>

          {/* Priority framework */}
          <div className="mt-6 flex flex-col gap-3">
            {[
              {
                rank: "01",
                label: "Revenue first",
                body: "Acquisition and conversion drove the top line. Any investment that improved funded loan volume had the highest priority.",
              },
              {
                rank: "02",
                label: "Risk second",
                body: "Financial data quality protected the underwriting model. Investments that improved the quality of data entering underwriting were essential infrastructure, not optional improvements.",
              },
              {
                rank: "03",
                label: "Cost third",
                body: "Servicing efficiency reduced operational overhead. Investments in self-service reduced cost-to-serve per loan as volume scaled.",
              },
            ].map((item) => (
              <div
                key={item.rank}
                className="flex gap-4 rounded-2xl border-[0.5px] border-border bg-background p-5"
              >
                <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-text-tertiary">
                  {item.rank}
                </span>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-text-secondary">
            This framework created a clear sequencing logic for the roadmap
            under engineering constraints — and gave the team a principled way
            to resolve prioritization debates when tradeoffs arose.
          </p>
        </div>
      </section>

      {/* Section 5 — Roadmap */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Roadmap</SectionLabel>
          <SectionHeading>
            Four Phases, Built in Order of Business Impact
          </SectionHeading>
          <Prose>
            <p>
              The 0→1 platform was built in four sequential phases, each
              delivering standalone value while building the foundation for the
              next phase.
            </p>
          </Prose>
          <Timeline phases={roadmapPhases} />
        </div>
      </section>

      {/* Section 6 — Financial Data Deep Dive (surface bg) */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Deep Dive</SectionLabel>
          <SectionHeading>
            The Financial Data Layer: Where Open Banking Meets Underwriting
          </SectionHeading>
          <Prose>
            <p>
              Phase 2 — the financial data infrastructure build — deserves
              specific attention because it was the most technically complex
              component and the one with the most direct impact on underwriting
              quality.
            </p>
            <p>
              The core work involved building bank connectivity that allowed
              borrowers to securely connect their business bank accounts,
              ingesting transaction-level data, and structuring that data into
              the cash flow signals the underwriting model needed — revenue
              patterns, average daily balances, payment behavior, seasonal
              trends, and cash flow volatility.
            </p>
            <p>
              This is fundamentally open banking product work. The product
              decisions — which data provider to use, how to handle connection
              failures and data gaps, how to present the bank connection step to
              borrowers in a way that built trust rather than anxiety, how to
              structure the data pipeline so underwriting could consume it
              reliably — were the same decisions that any financial data product
              faces regardless of whether the end use case is lending, payments,
              account management, or financial health.
            </p>
            <p>
              The key product tradeoff at this layer was data completeness
              versus conversion. A comprehensive financial data pull gave
              underwriting everything it wanted — but asking borrowers for
              extensive bank access created friction and drop-off. The resolution
              was to identify the minimum viable data set that materially
              improved underwriting quality — the high-signal inputs — and build
              the data collection experience around that reduced but sufficient
              set.
            </p>
            <p>
              The result was improved underwriting data quality with no
              meaningful increase in application drop-off at the bank connection
              step.
            </p>
          </Prose>

          {/* Signal callout */}
          <div className="mt-8 rounded-2xl border-[0.5px] border-border bg-background p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Key Cash Flow Signals
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Revenue patterns",
                "Average daily balances",
                "Payment behavior",
                "Seasonal trends",
                "Cash flow volatility",
                "Transaction consistency",
              ].map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7 — Key Tradeoffs */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Key Decisions</SectionLabel>
          <SectionHeading>Prioritization Under Real Constraints</SectionHeading>
          <Prose>
            <p>
              Limited engineering resources meant we could not build everything.
              Every roadmap decision was a tradeoff decision. Three tradeoffs
              defined the work.
            </p>
          </Prose>
          <TradeoffGrid cards={tradeoffCards} />
        </div>
      </section>

      {/* Section 8 — Outcome */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Outcome</SectionLabel>
          <SectionHeading>
            Stronger Acquisition, Lower Cost-to-Serve, Better Borrower
            Experience
          </SectionHeading>
          <Prose>
            <p>
              The end-to-end platform delivered measurable improvement across
              all three dimensions of the prioritization framework — revenue,
              risk, and cost.
            </p>
          </Prose>

          <MetricCards cards={metricCards} />

          {/* Business impact summary */}
          <div className="mt-10 max-w-[720px] space-y-4 rounded-2xl border-[0.5px] border-border bg-background p-6">
            <p className="text-sm font-medium text-text-primary">
              Business Impact
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              The combined effect was a stronger acquisition funnel feeding into
              a lower cost-to-serve servicing operation — the financial model
              that scales efficiently as loan volume grows.
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              More funded loans from the same acquisition investment. Fewer
              support tickets per funded loan. Better payment behavior from
              autopay adoption. A data infrastructure that improved underwriting
              quality and created the foundation for continued model improvement
              as transaction data accumulated.
            </p>
            <p className="text-sm font-medium text-text-primary">
              Strong products connect acquisition, underwriting, and servicing.
              They do not treat them separately.
            </p>
          </div>

          <MetricsDisclaimer />
        </div>
      </section>

      {/* Section 9 — AI Lens */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>AI Lens</SectionLabel>
          <SectionHeading>
            How I Would Redesign This Platform With AI Today
          </SectionHeading>
          <Prose>
            <p>
              The financial data infrastructure we built in Phase 2 — bank
              connectivity, transaction ingestion, cash flow analysis — is the
              foundation that AI transforms most dramatically.
            </p>
            <p>
              The rules-based cash flow analysis we built would be replaced
              today with an AI layer that learns the relationship between
              transaction patterns and credit outcomes over time — continuously
              improving its signal extraction as more loan performance data
              accumulates. Rather than static rules defining what constitutes a
              strong cash flow signal, the model learns what actually predicts
              repayment behavior for SMB borrowers in this specific lending
              context.
            </p>
            <p>
              The document collection and verification step — which remained
              partially manual even after our improvements — would be replaced
              with an AI document processing layer that reads, classifies, and
              validates submitted financial documents in real time. An applicant
              uploads a bank statement and the system immediately confirms
              whether it meets requirements, extracts the relevant data, and
              flags any gaps — before the application is submitted rather than
              after it enters underwriting review.
            </p>
            <p>
              The borrower portal would evolve from a static account management
              tool into an AI-assisted financial intelligence layer — surfacing
              proactive insights about cash flow patterns, upcoming payment
              timing risks, and working capital optimization opportunities. The
              loan account becomes a financial relationship, not just a payment
              obligation.
            </p>
            <p>
              The evaluation loop — monitoring the relationship between data
              inputs, model outputs, and actual loan performance — would be a
              first-class product component rather than a data science
              afterthought. Built for the PM and the underwriting team to
              monitor, not just for the data team to analyze.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 10 — Cross-Fintech Application */}
      <section className="bg-surface px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Beyond This Context</SectionLabel>
          <SectionHeading>
            Where This Thinking Applies Across Fintech
          </SectionHeading>
          <Prose>
            <p>
              The 0→1 platform build at Quantum was a lending product. But the
              capabilities it required — and the problems it solved — are not
              lending-specific.
            </p>
            <p>
              The financial data infrastructure work — bank connectivity,
              transaction ingestion, cash flow signal extraction — is open
              banking product work. The same infrastructure decisions, the same
              data quality tradeoffs, the same borrower trust challenges around
              connecting bank accounts apply directly to account aggregation
              products, personal financial management tools, embedded finance
              platforms, and any product that needs to understand a customer's
              financial position from their transaction data.
            </p>
            <p>
              The self-service portal work — giving customers visibility and
              control over their financial account, reducing support volume,
              driving autopay adoption — maps directly to digital banking
              account management, payments merchant dashboards, and any fintech
              product managing an ongoing financial relationship with a customer
              or business.
            </p>
            <p>
              The prioritization framework — revenue first, risk second, cost
              third, always under real engineering constraints — is universal.
              Every fintech product team faces resource constraints. The
              discipline of anchoring every roadmap decision to a clear value
              hierarchy is what separates teams that build coherent products
              from teams that build feature collections.
            </p>
            <p>
              The anchor I took away from this project: strong products connect
              acquisition, underwriting, and servicing. They do not treat them
              separately. That principle holds whether the product is a loan, a
              bank account, a payment tool, or an embedded financial service.
            </p>
          </Prose>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="border-t border-border bg-background px-6 py-12">
        <div className="mx-auto flex max-w-[900px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link
            href="/#selected-work"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to Work
          </Link>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">
              Next Case Study
            </p>
            <Link
              href="/bmg"
              className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
            >
              BMG Money →
            </Link>
            <p className="mt-0.5 text-xs text-text-tertiary">
              Launching a Military Lending Act Product in a Regulated Fintech
              Environment
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
