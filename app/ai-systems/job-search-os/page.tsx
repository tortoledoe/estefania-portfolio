import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Job Search OS — Estefania Tortoledo",
  description:
    "An AI-assisted workflow system for strategic job searching — featuring modular agents, evaluation loops, ATS intelligence, recruiter simulation, and human-in-the-loop review. Built with Claude and modern AI workflow architecture.",
};

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

// ─── Agent Card ───────────────────────────────────────────────────────────────

function AgentCard({
  number,
  name,
  whatItDoes,
  whyItMatters,
  output,
}: {
  number: string;
  name: string;
  whatItDoes: string;
  whyItMatters: string;
  output: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-medium text-accent-dark">
            {number}
          </span>
          <h3 className="text-base font-medium text-text-primary">{name}</h3>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Rows */}
      <div className="divide-y divide-border">
        {[
          { label: "What it does", body: whatItDoes },
          { label: "Why it matters", body: whyItMatters },
          { label: "Output", body: output },
        ].map((row) => (
          <div key={row.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
            <span className="w-28 shrink-0 text-xs font-medium text-text-primary">
              {row.label}
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">
              {row.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Architecture Flow ────────────────────────────────────────────────────────

function ArchFlow({
  stages,
}: {
  stages: { stage: string; label: string; body: string }[];
}) {
  return (
    <div className="mt-8 flex flex-col gap-0">
      {stages.map((s, i) => (
        <div key={i}>
          <div className="flex gap-5 rounded-lg border border-border bg-surface p-5">
            <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-text-tertiary">
              {s.stage}
            </span>
            <div>
              <p className="text-sm font-medium text-text-primary">{s.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                {s.body}
              </p>
            </div>
          </div>
          {i < stages.length - 1 && (
            <div className="flex justify-center py-1">
              <span className="text-xs text-text-tertiary">↓</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Tool Cards (3-col grid) ──────────────────────────────────────────────────

function ToolGrid({
  tools,
}: {
  tools: { name: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {tools.map((t) => (
        <div
          key={t.name}
          className="rounded-lg border border-border bg-surface p-5"
        >
          <p className="text-sm font-medium text-text-primary">{t.name}</p>
          <p className="mt-2 text-xs leading-relaxed text-text-secondary">
            {t.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Status Table ─────────────────────────────────────────────────────────────

function StatusTable({
  rows,
}: {
  rows: { capability: string; status: string; active: boolean }[];
}) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full max-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 pr-6 text-left text-xs uppercase tracking-widest text-text-tertiary">
              Capability
            </th>
            <th className="pb-3 text-left text-xs uppercase tracking-widest text-text-tertiary">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.capability} className="border-b border-border last:border-0">
              <td className="py-3 pr-6 text-text-secondary">{row.capability}</td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-sm ${
                    row.active ? "font-medium text-text-primary" : "text-text-secondary"
                  }`}
                >
                  <span
                    className={`text-base leading-none ${
                      row.active ? "text-accent-dark" : "text-text-tertiary"
                    }`}
                  >
                    {row.active ? "✓" : "⚙"}
                  </span>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const agents = [
  {
    number: "Agent 01",
    name: "Job Description Analysis Agent",
    whatItDoes:
      "Ingests a job description and produces a structured analysis — extracting required skills, preferred qualifications, seniority signals, team context clues, and implicit prioritization of requirements based on language patterns and emphasis.",
    whyItMatters:
      "Most candidates read job descriptions and apply if they think they roughly qualify. This agent reads job descriptions the way a recruiter writes them — identifying what is actually being prioritized versus what is standard boilerplate, and surfacing the signals that should shape positioning and application strategy.",
    output:
      "Structured JD analysis with skill mapping, seniority assessment, and strategic positioning recommendations.",
  },
  {
    number: "Agent 02",
    name: "Resume Optimization Agent",
    whatItDoes:
      "Takes the JD analysis and the candidate's base resume and produces a role-specific resume optimization — identifying which experience to emphasize, which language to mirror from the JD, and which accomplishments are most relevant to the specific role.",
    whyItMatters:
      "A generic resume optimized for no specific role performs worse than a tailored resume at every stage — ATS screening, recruiter review, and hiring manager evaluation. This agent makes tailoring systematic rather than manual.",
    output:
      "Specific resume modification recommendations with before/after framing and rationale for each change.",
  },
  {
    number: "Agent 03",
    name: "ATS Evaluation Agent",
    whatItDoes:
      "Evaluates the optimized resume against the job description using ATS simulation logic — scoring keyword coverage, identifying gaps, flagging formatting issues that cause ATS parsing failures, and producing an ATS compatibility score with specific improvement recommendations.",
    whyItMatters:
      "A significant percentage of applications are screened out by ATS systems before a human sees them — often for fixable reasons like missing keywords, formatting issues, or wrong section labeling. This agent surfaces those issues before submission, not after rejection.",
    output:
      "ATS compatibility score, keyword gap analysis, formatting assessment, and specific fixes ranked by impact.",
  },
  {
    number: "Agent 04",
    name: "Recruiter Simulation Agent",
    whatItDoes:
      "Simulates a recruiter reviewing the candidate's profile and application for the target role — producing a realistic assessment of how a recruiter would evaluate the fit, what questions the profile would raise, what would make the recruiter move forward or pass, and what the candidate should emphasize in outreach or screening calls.",
    whyItMatters:
      "Recruiters make fast decisions based on pattern recognition. Understanding how your profile reads to a recruiter — before you've submitted — allows you to address concerns proactively rather than reactively.",
    output:
      "Simulated recruiter assessment with fit rating, concern identification, and specific recommendations for improving recruiter-facing positioning.",
  },
  {
    number: "Agent 05",
    name: "Interview Preparation Agent",
    whatItDoes:
      "Generates role-specific interview preparation — likely questions based on the JD and company context, STAR-format answer frameworks for behavioral questions, technical or domain knowledge areas to prepare, and specific talking points that connect the candidate's experience to the role's key requirements.",
    whyItMatters:
      "Generic interview preparation produces generic interview performance. Role-specific preparation — grounded in the actual JD, company context, and likely interviewer priorities — produces more targeted, confident, and effective interview responses.",
    output:
      "Question bank, answer frameworks, domain preparation guide, and strategic talking points for the specific role.",
  },
];

const archStages = [
  {
    stage: "01",
    label: "Input",
    body: "User provides: job description URL or text, target company context, current resume, and any specific positioning notes or constraints.",
  },
  {
    stage: "02",
    label: "Analysis",
    body: "JD Analysis Agent processes the input and produces a structured role analysis. Output passes through evaluation check — flagging any low-confidence assessments for human review before proceeding.",
  },
  {
    stage: "03",
    label: "Optimization",
    body: "Resume Optimization Agent and ATS Evaluation Agent run in sequence. Resume recommendations are generated. ATS score is calculated. Human reviews both outputs and approves, modifies, or rejects specific recommendations before any resume changes are finalized.",
  },
  {
    stage: "04",
    label: "Simulation",
    body: "Recruiter Simulation Agent produces the recruiter perspective assessment. Human reviews the simulated assessment and uses it to refine positioning for outreach and screening conversations.",
  },
  {
    stage: "05",
    label: "Preparation",
    body: "Interview Preparation Agent generates the role-specific prep package. Human reviews, adds personal context and specific experience examples, and finalizes the preparation guide.",
  },
  {
    stage: "06",
    label: "Feedback Loop",
    body: "Post-application and post-interview outcomes are fed back into the system to improve future agent performance and calibrate the evaluation criteria.",
  },
];

const statusRows = [
  { capability: "JD Analysis Agent", status: "Active", active: true },
  { capability: "Resume Optimization Agent", status: "Active", active: true },
  { capability: "ATS Evaluation Agent", status: "Active", active: true },
  { capability: "Recruiter Simulation Agent", status: "Active", active: true },
  { capability: "Interview Preparation Agent", status: "Active", active: true },
  { capability: "Evaluation Loop", status: "Active", active: true },
  { capability: "Human Review Checkpoints", status: "Active", active: true },
  { capability: "Outcome Feedback Loop", status: "In Progress", active: false },
];

const roadmapItems = [
  {
    title: "Company Intelligence Agent",
    body: "Research target company culture, recent news, product direction, and hiring signals — surfacing context that improves positioning and interview preparation.",
  },
  {
    title: "Outreach Personalization Agent",
    body: "Generate personalized recruiter and hiring manager outreach messages tailored to specific roles and individuals — with tone calibration and relevance scoring.",
  },
  {
    title: "Application Tracking Integration",
    body: "Connect application outcomes back into the system automatically — building a dataset that improves agent calibration over time without manual feedback entry.",
  },
  {
    title: "Multi-Role Strategy Agent",
    body: "Manage positioning across multiple simultaneous target roles and companies — identifying conflicts and recommending positioning adjustments when targeting different types of roles simultaneously.",
  },
];

const tools = [
  {
    name: "Claude",
    body: "Primary AI layer — all agents built on Claude via Claude Cowork and Claude Code.",
  },
  {
    name: "Notion",
    body: "Documentation, workflow mapping, and system knowledge base.",
  },
  {
    name: "Jira",
    body: "Backlog management and sprint planning for system development.",
  },
  {
    name: "Figma",
    body: "Workflow diagrams and system architecture visualization.",
  },
  {
    name: "GitHub",
    body: "Source control and version management for prompt library and system documentation.",
  },
  {
    name: "Replit",
    body: "MVP prototyping and lightweight agent testing environment.",
  },
];

const pmLessons = [
  {
    title: "Modularity is a product requirement, not an engineering preference.",
    body: "A monolithic prompt that does everything is fragile — one change breaks everything. Modular agents with clear input/output contracts can be improved independently and fail gracefully when one component underperforms.",
  },
  {
    title: "Evaluation loops are not optional.",
    body: "An AI system without evaluation logic is a system that doesn't know when it's wrong. Every agent needs an evaluation step — either automated scoring, human review, or both — before its output affects downstream steps.",
  },
  {
    title: "Human-in-the-loop is a feature, not a workaround.",
    body: "For any AI system operating in a high-stakes context, the question is not whether to include human review but where to place it and how to make it as lightweight as possible while preserving its judgment value.",
  },
  {
    title: "Failure modes are the product.",
    body: "Designing for what happens when an agent produces a low-confidence or incorrect output is as important as designing for the happy path. Fallback logic, confidence scoring, and escalation paths are product decisions, not engineering details.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AiSystemsPage() {
  return (
    <main>
      {/* Back link */}
      <div className="bg-background px-6 pt-24 pb-0 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/#ai-systems"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to AI Systems
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-background px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <p className="text-xs uppercase tracking-widest text-text-tertiary">
            AI Systems · Workflow Orchestration · Active Build
          </p>
          <h1 className="mt-4 max-w-[720px] text-4xl font-medium tracking-tightest text-text-primary">
            AI Job Search OS: A Modular Agent System for Strategic Job Searching
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
            An AI-native workflow system that treats job searching as a product
            problem — with modular agents, evaluation loops, human-in-the-loop
            review, and continuous optimization built in from the start.
          </p>

          {/* Status badge */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Active Build
            </span>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Claude",
              "Modular Agents",
              "Evaluation Loops",
              "Human-in-the-Loop",
              "ATS Intelligence",
              "Workflow Orchestration",
              "Prompt Engineering",
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

      {/* Section 1 — The Problem */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            Job Searching Is a Product Problem. Most People Treat It Like a
            Task.
          </SectionHeading>
          <Prose>
            <p>
              The conventional job search approach is manual, reactive, and
              unstructured. You find a job posting, you update your resume, you
              write a cover letter, you apply. You do this dozens of times with
              no systematic feedback loop, no way to evaluate whether your
              positioning is working, and no mechanism for improving your
              approach based on what you learn.
            </p>
            <p>
              The result is high effort with low signal. You don't know whether
              your resume is being screened out by ATS systems before a human
              sees it. You don't know whether your positioning is landing with
              recruiters. You don't know whether your interview preparation is
              addressing the questions that actually get asked for the roles
              you're targeting.
            </p>
            <p>
              As a product manager, I approached this differently. Job searching
              is a system with inputs, outputs, evaluation criteria, feedback
              loops, and optimization opportunities. It can be designed. It can
              be instrumented. It can be continuously improved.
            </p>
            <p>
              The AI Job Search OS is the system I designed to do exactly that.
            </p>
          </Prose>
        </div>
      </section>

      {/* Section 2 — System Overview */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>System Overview</SectionLabel>
          <SectionHeading>
            A Modular Agent Architecture for End-to-End Job Search Optimization
          </SectionHeading>
          <Prose>
            <p>
              The AI Job Search OS is built around a modular agent architecture
              — each agent handling a specific function in the job search
              workflow, with evaluation loops connecting agent outputs to human
              review before any action is taken.
            </p>
            <p>
              The system is designed around three core principles that came
              directly from AI product design thinking:
            </p>
          </Prose>

          <div className="mt-6 flex flex-col gap-3">
            {[
              {
                title: "Modularity",
                body: "Each agent is independent and can be improved without breaking others. Adding a new capability means adding a new agent, not rewriting the system.",
              },
              {
                title: "Evaluation",
                body: "Every agent output passes through an evaluation step before it is used. The system does not trust its own outputs blindly. It checks them.",
              },
              {
                title: "Human-in-the-loop",
                body: "The system makes recommendations and drafts. The human makes decisions and sends. Nothing goes out without explicit review and approval.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="flex gap-4 rounded-lg border border-border bg-background p-5"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — The Agents */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Agent Architecture</SectionLabel>
          <SectionHeading>
            Five Specialized Agents, One Unified System
          </SectionHeading>
          <Prose>
            <p>
              The current system consists of five modular agents, each handling
              a distinct function in the job search workflow.
            </p>
          </Prose>
          <div className="mt-8 flex flex-col gap-4">
            {agents.map((agent) => (
              <AgentCard key={agent.number} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — System Architecture */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>System Design</SectionLabel>
          <SectionHeading>How the System Works End to End</SectionHeading>
          <Prose>
            <p>
              The workflow moves through six stages, with evaluation loops and
              human review checkpoints built into the flow.
            </p>
          </Prose>
          <ArchFlow stages={archStages} />
        </div>
      </section>

      {/* Section 5 — Human-in-the-Loop (surface bg) */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="rounded-lg border border-border bg-background p-8">
            <SectionLabel>Human-in-the-Loop</SectionLabel>
            <SectionHeading>
              Why Every Output Goes Through Human Review Before Action
            </SectionHeading>
            <Prose>
              <p>
                The human-in-the-loop design is not a limitation of the system.
                It is a deliberate architectural choice — and one of the most
                important product decisions in the build.
              </p>
              <p>
                AI agents in a job search context face a specific failure mode:
                confident but wrong outputs. An ATS agent that misidentifies the
                most important keywords. A recruiter simulation agent that
                applies the wrong mental model for a specific company culture. A
                resume optimization agent that emphasizes the wrong experience
                for a niche role.
              </p>
              <p>
                These failures are not catastrophic if there is a human review
                step that catches them before they affect an actual application.
                They are costly if the system is automated end-to-end and the
                outputs go directly into submitted applications.
              </p>
              <p>
                The review checkpoints are designed to be lightweight — the
                human is not re-doing the agent's work, they are evaluating the
                agent's output and making a binary decision: use it, modify it,
                or reject it. The agent does the generative work. The human does
                the judgment work.
              </p>
              <p>
                This is the right division of labor for any AI system operating
                in a high-stakes personal context where errors have real
                consequences.
              </p>
            </Prose>
          </div>
        </div>
      </section>

      {/* Section 6 — PM Perspective (surface bg) */}
      <section className="bg-surface px-6 pb-16">
        <div className="mx-auto max-w-[760px]">
          <div className="rounded-lg border border-border bg-background p-8">
            <SectionLabel>PM Perspective</SectionLabel>
            <SectionHeading>
              What Building This System Taught Me About AI Product Design
            </SectionHeading>
            <Prose>
              <p>
                I built the AI Job Search OS as a personal tool. But I
                documented and share it as a portfolio piece because the design
                decisions it required are the same decisions that any AI product
                faces — and working through them in a context where I was
                simultaneously the PM, the user, and the evaluator produced
                unusually clear thinking about what good AI product design
                actually requires.
              </p>
              <p>Four lessons that I now apply to every AI product problem:</p>
            </Prose>
            <div className="mt-6 flex flex-col gap-3">
              {pmLessons.map((lesson, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-text-tertiary">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {lesson.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Current Status */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Current Status</SectionLabel>
          <SectionHeading>
            Where the System Is Today and Where It&apos;s Going
          </SectionHeading>
          <Prose>
            <p>
              The AI Job Search OS is an active build — in use now, being
              improved continuously based on real usage and outcome data.
            </p>
          </Prose>

          {/* Status table */}
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Current Capabilities
            </p>
            <StatusTable rows={statusRows} />
          </div>

          {/* Roadmap */}
          <div className="mt-12">
            <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Next Additions
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {roadmapItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
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
          </div>
        </div>
      </section>

      {/* Section 8 — Tools */}
      <section className="bg-surface px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Built With</SectionLabel>
          <SectionHeading>Tools and Infrastructure</SectionHeading>
          <ToolGrid tools={tools} />
        </div>
      </section>

      {/* Section 9 — Connection to Fintech */}
      <section className="bg-background px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <SectionLabel>Connection to Fintech</SectionLabel>
          <SectionHeading>Why a Fintech PM Built This System</SectionHeading>
          <Prose>
            <p>
              The AI Job Search OS is not a fintech product. But the thinking
              that produced it is directly connected to my fintech product work
              — and that connection is intentional.
            </p>
            <p>
              The agent architecture mirrors the decision system architecture
              that I think about in financial products. A loan decisioning
              system has agents too — eligibility classification, risk scoring,
              offer generation, fraud detection — each with its own input/output
              contract, its own evaluation logic, and its own human review
              triggers for edge cases.
            </p>
            <p>
              The evaluation loops in this system are the same evaluation loops
              I would design for an AI-assisted underwriting product — monitoring
              model outputs, flagging low-confidence decisions, and feeding
              outcome data back into the system to improve future performance.
            </p>
            <p>
              The human-in-the-loop design philosophy — AI does the generative
              work, humans do the judgment work — is the design philosophy I
              apply to any AI product operating in a context where errors have
              real consequences. In job searching, the consequence is a rejected
              application. In financial services, the consequence can be a wrong
              credit decision or a compliance failure.
            </p>
            <p>
              Building this system taught me things about AI product design that
              I could not have learned by reading about it. That is why I built
              it.
            </p>
          </Prose>
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="border-t border-border bg-background px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link
            href="/#ai-systems"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to AI Systems
          </Link>
          <div className="sm:text-right">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">
              Coming Soon
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary">
              SMB Cash Flow Intelligence System →
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-text-tertiary">
              An AI-native financial intelligence system for small business cash
              flow analysis and risk detection.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
