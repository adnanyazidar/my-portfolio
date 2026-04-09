import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "QA Approach | Adnan Labs",
  description:
    "My philosophy on testing, automation principles, and how I enable teams to ship high-quality software with confidence.",
};

export default function QAApproachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[1920px] mx-auto w-full">
        <a
          href="/"
          className="text-sm font-bold tracking-widest uppercase text-primary hover:text-secondary mb-12 inline-flex items-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined !text-[1rem]">
            arrow_back
          </span>
          Back to Home
        </a>

        {/* 1️⃣ Header Section — 2-column with icon grid on right */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
                QA Approach
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-normal mb-8 leading-tight">
                How I Think About{" "}
                <span className="text-secondary italic">Quality</span>
              </h1>
              <p className="text-2xl text-zinc-600 font-medium leading-relaxed">
                Quality is not a final step before release — it is built into
                every stage of development.
              </p>
            </div>

            {/* Visual balance — icon grid */}
            <div className="hidden lg:grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: "bug_report", label: "Find Bugs" },
                { icon: "shield", label: "Prevent" },
                { icon: "speed", label: "Optimize" },
                { icon: "code", label: "Automate" },
                { icon: "groups", label: "Collaborate" },
                { icon: "trending_up", label: "Improve" },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10 transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    {item.icon}
                  </span>
                  <span className="text-xs font-medium text-on-surface-variant tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2️⃣ "My goal is simple" card — narrower width */}
          <div className="mt-10 max-w-2xl bg-surface-container-low border border-outline-variant/10 p-8 rounded-2xl">
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              As a QA, I don't see testing as only finding bugs. I see it as
              reducing product risk and helping teams ship with confidence.
            </p>
            <h4 className="font-bold text-lg mb-4 text-primary">
              My goal is simple:
            </h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  verified_user
                </span>
                Prevent critical issues before they reach users
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  rocket_launch
                </span>
                Enable faster and safer releases
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  handshake
                </span>
                Strengthen collaboration between QA and developers
              </li>
            </ul>
          </div>
        </section>

        {/* 3️⃣ My Testing Mindset — 3-column card layout */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold tracking-wide mb-12 border-b border-outline-variant/20 pb-4">
            My Testing Mindset
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Risk-Based */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 flex flex-col transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  security
                </span>
                <h3 className="text-lg font-bold">Risk-Based Testing</h3>
              </div>
              <p className="text-secondary font-medium mb-4 text-sm">
                Not all bugs have the same impact.
              </p>
              <p className="text-on-surface-variant text-sm mb-5">
                I focus testing efforts on areas that matter most:
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Payments & data integrity
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Core user journeys
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  High-change components
                </li>
              </ul>
              <p className="text-on-surface-variant italic text-xs mt-auto">
                Maximum value from limited testing time.
              </p>
            </div>

            {/* Card 2 — Think Like a User */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 flex flex-col transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  person_search
                </span>
                <h3 className="text-lg font-bold">Think Like a User</h3>
              </div>
              <p className="text-secondary font-medium mb-4 text-sm">
                Real users don't follow scripts.
              </p>
              <p className="text-on-surface-variant text-sm mb-5">
                I practice exploratory testing to discover:
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Unexpected user behavior
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  UI/UX inconsistencies
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Edge cases scripts miss
                </li>
              </ul>
              <p className="text-on-surface-variant italic text-xs mt-auto">
                Found critical issues in visual rendering and financial
                workflows.
              </p>
            </div>

            {/* Card 3 — Automation With Purpose */}
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 flex flex-col transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  smart_toy
                </span>
                <h3 className="text-lg font-bold">Automation With Purpose</h3>
              </div>
              <p className="text-secondary font-medium mb-4 text-sm">
                Not everything should be automated.
              </p>
              <p className="text-on-surface-variant text-sm mb-5">
                I believe automation should:
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Save time on regression
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Provide fast CI/CD feedback
                </li>
                <li className="bg-zinc-50 p-3 border border-outline-variant/10 rounded-lg text-sm font-medium">
                  Increase release confidence
                </li>
              </ul>
              <p className="text-on-surface-variant italic text-xs mt-auto">
                Focus on tests that bring long-term value.
              </p>
            </div>
          </div>
        </section>

        {/* 4️⃣ Manual vs Automation Philosophy — balanced bullets */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold tracking-wide mb-8">
            Manual vs Automation Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-secondary/20 bg-secondary/5 p-8 rounded-xl">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  smart_toy
                </span>
                What I Prefer to Automate
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span> Critical user
                  flows
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span> Regression
                  test suites
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span> Stable and
                  repeatable scenarios
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5">•</span> Data
                  integrity validations
                </li>
              </ul>
            </div>
            <div className="border border-primary/20 bg-primary/5 p-8 rounded-xl">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  person_search
                </span>
                What I Prefer to Test Manually
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">•</span> New features in
                  early development
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">•</span> UI/UX and
                  visual quality
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">•</span> Exploratory
                  testing sessions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">•</span> Rapidly
                  changing interfaces
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-lg font-medium text-primary bg-zinc-50 py-6 rounded-lg border border-outline-variant/10">
            The goal is balance — not replacing manual testing, but making it
            more strategic.
          </p>
        </section>

        {/* 5️⃣ Workflow & Bug Reporting Grid — keep as-is ✅ */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                groups
              </span>
              How I Work With Developers
            </h2>
            <p className="text-lg text-secondary font-medium mb-6">
              Quality is a team responsibility.
            </p>
            <p className="text-on-surface-variant mb-6">
              I actively collaborate early and often by:
            </p>
            <ul className="space-y-3 text-on-surface-variant mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[1.2rem] mt-0.5 opacity-50">
                  arrow_forward
                </span>
                Sharing clear and reproducible bug reports
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[1.2rem] mt-0.5 opacity-50">
                  arrow_forward
                </span>
                Providing testing feedback during development
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[1.2rem] mt-0.5 opacity-50">
                  arrow_forward
                </span>
                Communicating risk before release
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[1.2rem] mt-0.5 opacity-50">
                  arrow_forward
                </span>
                Helping improve testing workflows
              </li>
            </ul>
            <p className="italic text-on-surface-variant">
              Great products are built when QA and developers work as partners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                bug_report
              </span>
              My Bug Reporting Principles
            </h2>
            <p className="text-lg text-secondary font-medium mb-6">
              A good bug report saves development time.
            </p>
            <p className="text-on-surface-variant mb-6">
              I focus on making reports:
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[1.2rem] mt-0.5">
                  check
                </span>
                Clear and easy to reproduce
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[1.2rem] mt-0.5">
                  check
                </span>
                Supported with screenshots or videos
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[1.2rem] mt-0.5">
                  check
                </span>
                Prioritized by severity and impact
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[1.2rem] mt-0.5">
                  check
                </span>
                Written with the user's perspective in mind
              </li>
            </ul>
          </div>
        </section>

        {/* 6️⃣ Continuous Learning — subtle tinted background */}
        <section className="mb-16 bg-secondary/[0.04] p-10 rounded-2xl border border-secondary/10 text-center">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4">
            school
          </span>
          <h2 className="text-3xl font-bold tracking-wide mb-6">
            Expanding My Toolkit
          </h2>
          <p className="text-lg text-primary font-medium mb-8">
            I’m continuously deep-diving into advanced testing methodologies to
            further streamline the release process.
          </p>
          <p className="text-on-surface-variant mb-6">
            I am currently focusing on:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-5 py-2 bg-white border border-outline-variant/20 rounded-full text-sm font-medium shadow-sm">
              Advanced API Testing & Security
            </span>
            <span className="px-5 py-2 bg-white border border-outline-variant/20 rounded-full text-sm font-medium shadow-sm">
              CI/CD Pipeline Integration
            </span>
            <span className="px-5 py-2 bg-white border border-outline-variant/20 rounded-full text-sm font-medium shadow-sm">
              Cloud-Based Testing Infrastructure
            </span>
          </div>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            My goal is to contribute to both product quality and team efficiency
            by building better and more reliable automated systems.
          </p>
        </section>

        {/* 7️⃣ Closing CTA — reduced spacing */}
        <section className="mt-4 pt-10 border-t border-outline-variant/20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Interested in working together to improve product quality?
            </h2>
            <p className="text-2xl text-secondary italic font-medium mb-8">
              Let's build reliable software together.
            </p>
            <a href="mailto:adnanyazidar48@gmail.com">
              <button className="px-12 py-5 bg-primary text-white font-bold uppercase tracking-widest hover:bg-secondary transition-colors rounded-full shadow-md text-lg">
                Let's Talk
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
