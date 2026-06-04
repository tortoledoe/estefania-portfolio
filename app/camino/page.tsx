import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camino Financial — Estefania Tortoledo",
  description:
    "How I redesigned a high-friction SMB financial onboarding system to drive end-to-end funded loan conversion across application, underwriting, and funding.",
};

const metricsDisclaimer =
  "* Metrics shown are illustrative estimates based on the scope and nature of the work. Specific figures are confidential per company agreement.";

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs uppercase tracking-widest text-text-tertiary">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-medium text-text-primary">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
      {children}
    </div>
  );
}

function MetricsDisclaimer() {
  return (
    <p className="mt-4 text-xs italic text-text-tertiary">{metricsDisclaimer}</p>
  );
}

// ─── Funnel Table ─────────────────────────────────────────────────────────────

function FunnelTable({
  rows,
  disclaimer = true,
}: {
  rows: { step: string; value: string }[];
  disclaimer?: boolean;
}) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full max-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 pr-6 text-left text-xs uppercase tracking-widest text-text-tertiary">
              Step
            </th>
            <th className="pb-3 text-right text-xs uppercase tracking-widest text-text-tertiary">
              Conversion
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border last:border-0 ${
                i === rows.length - 1 ? "font-medium text-text-primary" : ""
              }`}
            >
              <td className="py-3 pr-6 text-text-secondary">{row.step}</td>
              <td className="py-3 text-right tabular-nums text-text-secondary">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {disclaimer && <MetricsDisclaimer />}
    </div>
  );
}

// ─── Before/After Results Table ───────────────────────────────────────────────

function ResultsTable({
  rows,
}: {
  rows: { step: string; before: string; after: string }[];
}) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full max-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 pr-6 text-left text-xs uppercase tracking-widest text-text-tertiary">
              Step
            </th>
            <th className="pb-3 pr-6 text-right text-xs uppercase tracking-widest text-text-tertiary">
              Before
            </th>
            <th className="pb-3 text-right text-xs uppercase tracking-widest text-text-tertiary">
              After
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isTotal = i === rows.length - 2;
            const isLift = i === rows.length - 1;
            return (
              <tr
                key={i}
                className={`border-b border-border last:border-0 ${
                  isTotal ? "font-medium text-text-primary" : ""
                } ${isLift ? "border-0" : ""}`}
              >
                <td className="py-3 pr-6 text-text-secondary">{row.step}</td>
                <td className="py-3 pr-6 text-right tabular-nums text-text-secondary">
                  {row.before}
                </td>
                <td
                  className={`py-3 text-right tabular-nums ${
                    isLift
                      ? "font-medium text-text-primary"
                      : isTotal
                        ? "font-medium text-accent-dark"
                        : "text-text-secondary"
                  }`}
                >
                  {row.after}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <MetricsDisclaimer />
    </div>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function Timeline({
  phases,
}: {
  phases: { phase: string; title: string; body: string; goal: string }[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-0">
      {phases.map((p, i) => (
        <div key={i} className="flex gap-6">
          {/* spine */}
          <div className="flex flex-col items-center">
            <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-accent" />
            {i < phases.length - 1 && (
              <div className="mt-1 w-px flex-1 bg-border" />
            )}
          </div>
          {/* content */}
          <div className={`pb-8 ${i === phases.length - 1 ? "pb-0" : ""}`}>
            <p className="text-xs uppercase tracking-widest text-text-tertiary">
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
          className="rounded-lg border border-border bg-surface p-6"
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

// ─── Business Impact ──────────────────────────────────────────────────────────

function ImpactItem({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <p className="text-sm font-medium text-text-primary">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-text-secondary">{body}</p>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const baselineFunnelRows = [
  { step: "Application Start → Complete", value: "~60%" },
  { step: "Complete → Offer", value: "~70%" },
  { step: "Offer → Acceptance", value: "~65%" },
  { step: "Acceptance → Funding", value: "~70%" },
  { step: "Total funded conversion", value: "~19–20%" },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Application UX",
    body: "Reduce friction at the top of the funnel. Simplify application steps, remove unnecessary fields, improve mobile experience.",
    goal: "Improve application start → complete conversion.",
  },
  {
    phase: "Phase 2",
    title: "Financial Data and Documents",
    body: "Improve the financial data collection experience. Clearer guidance on what's needed and why. Structured inputs that reduce submission errors.",
    goal: "Improve data quality entering underwriting without increasing drop-off.",
  },
  {
    phase: "Phase 3",
    title: "Underwriting Automation",
    body: "Reduce manual review dependency. Automate eligibility rules for clear-cut cases. Surface only genuine edge cases for human review.",
    goal: "Reduce time-to-decision and improve offer rate.",
  },
  {
    phase: "Phase 4",
    title: "Funding Optimization",
    body: "Reduce post-acceptance drop-off. Improve the offer presentation and acceptance experience. Streamline the path from accepted offer to funded loan.",
    goal: "Improve acceptance → funding conversion.",
  },
];

const tradeoffCards = [
  {
    title: "Friction vs Risk",
    body: "The instinct was to remove as much application friction as possible. But friction and risk controls are not always separable — some friction exists because we genuinely need certain data to make a responsible credit decision. The resolution: identify which friction points were protecting data quality versus which were unnecessary process burden. Remove the latter aggressively. Preserve the former.",
  },
  {
    title: "Speed vs Accuracy",
    body: "Faster underwriting decisions improve conversion — but only if those decisions are accurate. Automating decisions too aggressively could reduce manual review burden while increasing credit risk. The resolution: automate only the cases where confidence in the automated decision was high. Route everything else to human review with better tooling to accelerate that review.",
  },
  {
    title: "Automation vs Reliability",
    body: "Reducing manual underwriting work was a clear operational efficiency goal. But automation introduces its own failure modes — model drift, edge cases, data quality issues that break automated rules. The resolution: build explicit fallback paths for every automated decision point. Design for failure, not just for the happy path.",
  },
  {
    title: "Transparency vs Conversion",
    body: "Making document requirements and eligibility criteria clearer to applicants was the right thing to do — but there was a real risk that more transparency would reveal to some applicants that they were unlikely to qualify, causing early abandonment. The resolution: be transparent about what's needed without surfacing disqualifying information prematurely. Guide applicants through the process rather than front-loading rejection signals.",
  },
];

const resultsRows = [
  { step: "App → Complete", before: "~60%", after: "~72%" },
  { step: "Complete → Offer", before: "~70%", after: "~75%" },
  { step: "Offer → Accept", before: "~65%", after: "~70%" },
  { step: "Accept → Fund", before: "~70%", after: "~75%" },
  { step: "Total funded conversion", before: "~19–20%", after: "~28%" },
  { step: "Relative lift", before: "—", after: "+16%" },
];

const impactItems = [
  {
    label: "Revenue",
    body: "More funded loans from the same acquisition volume — improving unit economics without increasing marketing spend.",
  },
  {
    label: "Operational Efficiency",
    body: "Reduced manual underwriting review volume and lower cost-to-serve per funded loan.",
  },
  {
    label: "Borrower Experience",
    body: "Faster time-to-decision and clearer application guidance reduced borrower confusion and inbound support volume.",
  },
  {
    label: "Scalability",
    body: "The improved data quality and automated eligibility infrastructure created a more scalable foundation for future funnel optimization and volume growth.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaminoPage() {
  return (
    <main>
      {/* Back link */}
      <div className="bg-background px-6 pt-24 pb-0 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/#selected-work"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to Work
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-background px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            Camino Financial · SMB Lending
          </p>
          <h1 className="mt-4 max-w-[720px] text-4xl font-medium tracking-tightest text-text-primary">
            Redesigning a High-Friction Financial Onboarding System to Drive
            End-to-End Conversion
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
            How I connected UX, data quality, and underwriting decisioning to
            improve funded loan conversion across a complete SMB financial
            onboarding funnel.
          </p>

          {/* Metrics row */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:divide-x sm:divide-border">
            {[
              { value: "+20–22%", label: "Application Completion" },
              { value: "+16%", label: "Funded Conversion Lift" },
              { value: "4 Phases", label: "Delivered" },
            ].map((stat) => (
              <div key={stat.label} className="sm:px-8 first:sm:pl-0">
                <p className="text-2xl font-medium text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-text-tertiary">{stat.label}</p>
              </div>
            ))}
          </div>
          <MetricsDisclaimer />

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "SMB Lending",
              "Funnel Optimization",
              "Underwriting",
              "Experimentation",
              "Decision Systems",
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
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>
            Scaling SMB Lending With an Underperforming Funnel
          </SectionHeading>
          <Prose>
            <p>
              Camino Financial is a fintech lender focused on providing capital
              access to underserved small business owners — predominantly Latino
              entrepreneurs who are often overlooked by traditional financial
              institutions.
            </p>
            <p>
              The business had strong acquisition — applicants were coming in.
              But the funnel was leaking badly. High drop-off at the application
              stage, slow underwriting decisioning, and weak offer-to-acceptance
              conversion meant a significant portion of acquired applicants
              never became funded borrowers.
            </p>
            <p>
              The core opportunity was clear: improve funded loan conversion
              without increasing risk exposure. The challenge was that nobody
              had clearly diagnosed where the funnel was actually breaking — or
              why.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 2 — Problem */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            The Breakdown Was Happening on Both Sides of the Funnel
          </SectionHeading>
          <Prose>
            <p>
              The initial instinct was that this was a UX problem. Simplify the
              application, reduce the fields, improve completion rates. But the
              data told a more complicated story.
            </p>
            <p>
              Drop-off was happening at multiple stages simultaneously — and
              the causes were tightly connected. On the front end, applicants
              were abandoning because the application was complex, document
              requirements were unclear, and the experience of submitting
              financial data felt confusing and untrustworthy. On the back end,
              underwriting was slow because the financial data coming through
              was incomplete or low quality — which created manual review
              backlogs that further delayed decisions and killed momentum for
              applicants who had already completed the application.
            </p>
            <p>
              This was the key insight that changed everything: the conversion
              problem was not a UX problem or an underwriting problem. It was a
              systems problem. Front-end friction and back-end delays were
              feeding each other.
            </p>
          </Prose>

          {/* Baseline funnel */}
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Baseline Funnel
            </p>
            <FunnelTable rows={baselineFunnelRows} />
          </div>
        </div>
      </section>

      {/* Section 3 — Key Insight */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Key Insight</SectionLabel>
          <SectionHeading>
            Conversion Issues Were Tightly Linked to Underwriting Delays and
            Data Quality
          </SectionHeading>
          <Prose>
            <p>
              The most important product insight in this project was that the
              application drop-off problem and the underwriting delay problem
              were not independent. They were the same problem viewed from two
              different angles.
            </p>
            <p>
              When applicants didn't understand what financial data was needed
              and why, they submitted incomplete or low-quality data. That
              incomplete data triggered manual underwriting review. That review
              took days instead of hours. The delay killed applicant confidence
              and momentum. Some abandoned mid-process. Others who received
              offers had lost trust in the process by the time the offer
              arrived — and didn't accept.
            </p>
            <p>
              Solving UX alone would improve completion rates but not funded
              conversion. Solving underwriting automation alone would speed up
              decisions but not fill the pipeline with quality applications. The
              only solution that moved the north star metric — funded loan
              conversion — was one that addressed both layers simultaneously.
            </p>
            <p>This insight shaped everything that followed.</p>
          </Prose>
        </div>
      </section>

      {/* Section 4 — North Star */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>North Star</SectionLabel>
          <SectionHeading>One Metric to Rule the Entire Funnel</SectionHeading>
          <Prose>
            <p>
              We defined a single north star metric: funded loan conversion
              rate, measured from application start through to funded loan.
            </p>
            <p>
              This metric was chosen deliberately because it captured the full
              funnel — not just one stage. A PM optimizing only for application
              completion could improve that number while hurting overall
              conversion if the changes attracted lower-quality applicants or
              created downstream problems. A PM optimizing only for underwriting
              speed could accelerate decisions without improving the quality of
              applications coming through.
            </p>
            <p>
              Funded loan conversion forced the team to think about the entire
              system — UX, data quality, underwriting logic, offer design, and
              funding experience — as a connected whole rather than as
              independent stages with independent owners.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 5 — Strategy */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Strategy</SectionLabel>
          <SectionHeading>
            Optimize Across Three Layers Simultaneously
          </SectionHeading>
          <Prose>
            <p>
              The strategy was built around three parallel workstreams, each
              targeting a different layer of the conversion problem.
            </p>
            <p>
              The customer layer focused on reducing application friction —
              simplifying the flow, improving clarity around document
              requirements, and making the financial data collection experience
              feel less intimidating for small business owners who weren't
              accustomed to digitally submitting business financial information.
            </p>
            <p>
              The business layer focused on conversion optimization —
              specifically improving the offer presentation experience and the
              post-offer acceptance flow, where a meaningful percentage of
              applicants who received offers were not converting to funded loans.
            </p>
            <p>
              The risk layer focused on maintaining underwriting quality
              throughout — ensuring that every UX simplification we made didn't
              come at the cost of the data quality the underwriting model needed
              to make accurate credit decisions.
            </p>
            <p>
              The goal was not to choose between these layers. It was to improve
              all three simultaneously, because the funnel math showed that
              meaningful gains required movement at every stage — not a single
              big fix.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 6 — Roadmap */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Roadmap</SectionLabel>
          <SectionHeading>
            Four Phases, Sequenced by Revenue Impact
          </SectionHeading>
          <Prose>
            <p>
              Rather than building everything at once, the roadmap was sequenced
              by where the highest revenue impact could be unlocked fastest —
              with each phase building the foundation for the next.
            </p>
          </Prose>
          <Timeline phases={roadmapPhases} />
        </div>
      </section>

      {/* Section 7 — Key Tradeoffs */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Key Decisions</SectionLabel>
          <SectionHeading>
            The Tradeoffs That Defined the Product
          </SectionHeading>
          <Prose>
            <p>
              Every meaningful product decision in this project involved a
              tradeoff between competing priorities. Four tradeoffs defined the
              work.
            </p>
          </Prose>
          <TradeoffGrid cards={tradeoffCards} />
        </div>
      </section>

      {/* Section 8 — Experimentation */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Experimentation</SectionLabel>
          <SectionHeading>Full-Stack Funnel Optimization</SectionHeading>
          <Prose>
            <p>
              The experimentation approach connected front-end behavioral data
              with back-end underwriting and funding outcomes — which was
              essential for validating that UX improvements were actually
              driving funded loan conversion, not just improving surface-level
              completion metrics.
            </p>
            <p>
              Front-end funnel data from Google Analytics tracked where
              applicants were dropping off, how long they were spending at each
              step, and which document submission patterns correlated with
              completion. Back-end data from Snowflake connected those
              behavioral signals to underwriting outcomes, offer rates,
              acceptance rates, and funded loan conversion.
            </p>
            <p>
              This full-stack view was what allowed us to confirm that the
              changes we were making to the application UX were actually
              improving funded loan conversion — not just making the application
              feel easier while leaving the real conversion problem untouched.
            </p>
            <p>
              We tested across application UX variants, financial data
              collection flows, document submission guidance, and offer
              presentation formats — always measuring success at the funded loan
              level, not just at the stage-level metric closest to the change.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 9 — Outcome */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Outcome</SectionLabel>
          <SectionHeading>
            Improved Conversion Across Every Stage of the Funnel
          </SectionHeading>
          <Prose>
            <p>
              The combined UX, data quality, and underwriting automation
              improvements drove measurable lift across every stage of the
              funnel.
            </p>
          </Prose>
          <ResultsTable rows={resultsRows} />

          <div className="mt-10 flex flex-col gap-4">
            {impactItems.map((item) => (
              <ImpactItem key={item.label} label={item.label} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — AI Lens */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>AI Lens</SectionLabel>
          <SectionHeading>
            How I Would Redesign This With AI Today
          </SectionHeading>
          <Prose>
            <p>
              The core problem in this project — connecting front-end applicant
              behavior to back-end underwriting outcomes in real time — is
              exactly the kind of problem where AI creates step-change
              improvements over the rules-based and analytics-driven approach
              we used.
            </p>
            <p>
              If I were designing this system today, I would replace the static
              document requirements checklist with an AI layer that dynamically
              assesses the quality and completeness of submitted financial data
              in real time — flagging gaps before the application is submitted
              rather than after it enters underwriting review. This single
              change would dramatically reduce the manual review volume that was
              the primary cause of underwriting delays.
            </p>
            <p>
              I would also apply AI to the offer presentation layer — using
              behavioral signals from the application process to personalize how
              offers are framed and presented. Applicants who showed hesitation
              around repayment terms during the application could receive offers
              with repayment clarity front and center. Applicants who moved
              quickly through the financial data steps could receive streamlined
              offer presentations. The goal is the same — accepted offers — but
              the path is tailored rather than uniform.
            </p>
            <p>
              Finally, I would build an evaluation loop that continuously
              monitors the relationship between front-end behavioral signals and
              funded loan outcomes — not just for reporting purposes, but to
              actively surface when the relationship between behavior and outcome
              is changing. Model drift in a credit context is dangerous. An AI
              evaluation layer that catches it early is a product feature, not
              just a data science concern.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 11 — Cross-Fintech Application */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Beyond This Context</SectionLabel>
          <SectionHeading>
            Where This Thinking Applies Across Fintech
          </SectionHeading>
          <Prose>
            <p>
              The core problem in this case study — a multi-step financial
              onboarding process where front-end friction and back-end
              operational delays are feeding each other — is not a lending
              problem. It is a fintech problem.
            </p>
            <p>
              The same dynamic exists in merchant onboarding for payment
              processors, where KYC requirements and underwriting for payment
              acceptance create exactly the same friction-versus-risk tradeoffs.
              It exists in digital banking account opening, where identity
              verification requirements create drop-off at the exact moment a
              new customer is most engaged. It exists in insurance underwriting
              flows, where data collection requirements and manual review
              backlogs create delays that kill conversion.
            </p>
            <p>
              Any financial product that requires collecting sensitive data,
              making a risk-based decision, and then converting that decision
              into a customer action has this problem. The framework — connect
              UX and operational data, identify where friction is protective
              versus unnecessary, automate the high-confidence decisions,
              preserve human review for genuine edge cases — applies everywhere.
            </p>
            <p>
              That is what this project was really about. Not optimizing a
              lending funnel. Designing a system that connects the customer
              experience layer to the operational and decisioning layer — and
              optimizing them together rather than separately.
            </p>
          </Prose>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="border-t border-border bg-background px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
              href="/quantum"
              className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
            >
              Quantum Lending Solutions →
            </Link>
            <p className="mt-1 text-xs uppercase tracking-wide text-text-tertiary">
              Building an End-to-End SMB Lending Platform from Zero
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
