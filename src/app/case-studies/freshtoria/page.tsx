import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Freshtoria QA Automation — Adnan Labs",
  description:
    "My journey as a Junior QA Automation Engineer ensuring financial integrity for the Freshtoria Dashboard.",
};

export default function FreshtoriaCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-16 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[1920px] mx-auto w-full">
        <a
          href="/#case-studies"
          className="text-sm font-label font-bold tracking-widest uppercase text-primary hover:text-secondary mb-12 inline-flex items-center gap-2 transition-colors"
        >
          <span
            className="material-symbols-outlined !text-[1rem]"
            data-icon="arrow_back"
          >
            arrow_back
          </span>
          Back to Portfolio
        </a>

        {/* 1. Hero (Impact First) */}
        <div className="mb-12">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-normal leading-tight mb-6">
            Supporting Financial Integrity with Automated Testing
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-medium max-w-4xl leading-relaxed mb-10">
            Contributed to automation coverage on core financial and inventory
            flows, helping the team catch critical calculation bugs before
            deployment using Playwright.
          </p>
          <div className="flex flex-wrap gap-4 sticky top-[80px] md:top-[96px] z-40 bg-zinc-50/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 2xl:-mx-[120px] 2xl:px-[120px] shadow-sm transition-all duration-300">
            <a
              href="https://github.com/adnanyazidar/freshtoria-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              View GitHub Repo
              <span
                className="material-symbols-outlined"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="#test-implementation"
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Skip to Code
              <span
                className="material-symbols-outlined"
                data-icon="arrow_downward"
              >
                arrow_downward
              </span>
            </a>
            <a
              href="/files/Freshtoria-QA-Report.pdf"
              download
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Download Document
              <span className="material-symbols-outlined" data-icon="download">
                download
              </span>
            </a>
          </div>
        </div>

        {/* 2. Project Metadata & Challenges */}
        <section className="mx-auto py-12 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  About Freshtoria Dashboard
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Freshtoria Dashboard is a web-based inventory and financial
                  management platform designed for juice and fresh beverage
                  businesses. The MVP focuses on accurate perishable stock
                  calculations, cash flow transparency, and real-time
                  profit/loss monitoring.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Project
                  </p>
                  <p className="text-sm font-medium">
                    Freshtoria Dashboard (MVP v1.0)
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-medium">1 Month (Sprint-based)</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Team Structure
                  </p>
                  <p className="text-sm font-medium">
                    1 Frontend, 1 Backend, 1 Junior QA
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Industry
                  </p>
                  <p className="text-sm font-medium">F&B / Small Business</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Stack
                  </p>
                  <p className="text-sm font-medium">Playwright, TypeScript</p>
                </div>
              </div>

              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  👤 My Role
                </h4>
                <ul className="text-sm leading-relaxed text-on-surface-variant space-y-2">
                  <li>• Junior QA Automation Engineer</li>
                  <li>• Learned to automate critical flows</li>
                  <li>• Supported manual and E2E testing</li>
                  <li>• Wrote precise bug reports</li>
                </ul>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="mb-12 space-y-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    assignment_late
                  </span>
                  Key Challenges & How I Contributed
                </h3>

                <div className="space-y-6">
                  {/* Challenge Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Challenge
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Complex Financial Logic
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Testing dynamic business formulas for Stok Akhir and
                          Profit/Loss required a deep understanding of the app
                          structure.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          How I Contributed
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Learned the business logic and wrote automated test
                          scripts to validate stock calculations and profit/loss
                          formulas, directly verifying the numbers.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Challenge Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Challenge
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Tight 1-Month Timeline
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          The fast-paced MVP deadline barely left time for
                          comprehensive test plans.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          How I Contributed
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Focused aggressively on automating critical user flows
                          first, ensuring the most important features were
                          covered before relying on manual testing.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Challenge Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Challenge
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Zero Tolerance for Integrity Issues
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Small mistakes could skew massive financial records,
                          frustrating early customers.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          How I Contributed
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Collaborated with the backend developer to understand
                          edge cases and added test scenarios specifically for
                          negative stock prevention and date constraint
                          validation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Challenge Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Challenge
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Audit Trail Compliance
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Tracking every CRUD operation safely required
                          extensive repetitive testing.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          How I Contributed
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Wrote tests to verify that audit logs were created for
                          every data change, strictly following the test
                          patterns established by the broader team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Story */}
              <div className="max-w-3xl mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-12">
                  My First Experience with Financial Application Testing
                </h2>
                <div className="space-y-8 text-lg leading-relaxed text-on-surface-variant">
                  <p>
                    When I joined the Freshtoria Dashboard project, I was
                    excited but also nervous. This was my first experience
                    testing a financial application where every number
                    mattered—one wrong calculation could make the business think
                    they were profitable when they were actually losing money.
                  </p>
                  <p>
                    The team was small: one Frontend, one Backend, and me as the
                    Junior QA Automation team member. We had one short month to
                    deliver a working MVP.
                  </p>
                  <p>What made this project practically challenging for me:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      I had to rapidly understand complex business formulas (
                      <code className="text-sm tracking-normal px-1 bg-zinc-100 rounded">
                        Stok Akhir = Stok Sebelumnya + Stok Masuk − Stok Keluar
                      </code>
                      )
                    </li>
                    <li>
                      I needed to learn how to use Playwright effectively as a
                      primary automation driver in a real-world setting
                    </li>
                    <li>
                      I had to communicate clearly and professionally with
                      developers about the bugs I found
                    </li>
                  </ul>
                  <blockquote className="pl-6 border-l-4 border-secondary py-2 my-8">
                    <p className="text-xl font-medium text-on-surface italic">
                      "Our junior QA showed great initiative in learning the
                      business logic and writing reliable automated tests. She
                      caught several calculation errors that would have been
                      embarrassing to fix after launch."
                      <span className="block text-sm text-on-surface-variant not-italic font-bold mt-4 uppercase tracking-widest">
                        — Backend Developer
                      </span>
                    </p>
                  </blockquote>
                  <p>
                    By the end of the project, I had written automated tests for
                    the most critical user flows, helped catch bugs early, and
                    gained immense confidence in testing complex financial
                    applications.
                  </p>
                </div>
              </div>

              {/* 4. QA Strategy */}
              <div className="mb-12" id="qa-strategy">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Learning to Test with an Automation-First Mindset
                </h2>
                <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-10">
                  <p className="text-lg leading-relaxed text-on-surface-variant mb-10">
                    As a junior, I focused heavily on deeply understanding the
                    testing approach established by the team and contributing
                    where I could add the greatest immediate value.
                  </p>

                  <div className="space-y-12">
                    <div>
                      <h4 className="font-bold flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-secondary">
                          route
                        </span>{" "}
                        A. Critical User Flows I Automated
                      </h4>
                      <p className="text-sm text-on-surface-variant mb-4">
                        I focused on automating the most important user journeys
                        first:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                          <strong className="w-1/3 text-sm">
                            Inventory In/Out
                          </strong>
                          <span className="w-2/3 text-sm text-on-surface-variant">
                            Verified stock updates correctly after adding or
                            removing consecutive items in succession.
                          </span>
                        </li>
                        <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                          <strong className="w-1/3 text-sm">
                            Cash Flow Entry
                          </strong>
                          <span className="w-2/3 text-sm text-on-surface-variant">
                            Ensured sold quantity strictly doesn't exceed the
                            recorded production quantity.
                          </span>
                        </li>
                        <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                          <strong className="w-1/3 text-sm">
                            Profit/Loss Widget
                          </strong>
                          <span className="w-2/3 text-sm text-on-surface-variant">
                            Checked that dashboard aggregated numbers directly
                            matched manual fallback calculations.
                          </span>
                        </li>
                        <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                          <strong className="w-1/3 text-sm">
                            User Management
                          </strong>
                          <span className="w-2/3 text-sm text-on-surface-variant">
                            Automated assertions checking that Staff users
                            couldn't see Admin-only components.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold flex items-center gap-3 mb-4">
                          <span className="material-symbols-outlined text-secondary">
                            rule
                          </span>{" "}
                          B. Business Rules Validated
                        </h4>
                        <p className="text-sm text-on-surface-variant mb-4">
                          Wrote test scripts to enforce core project brief
                          rules:
                        </p>
                        <ul className="text-sm space-y-3 text-on-surface-variant list-disc pl-5">
                          <li>
                            <strong>Negative Stock Prevention:</strong>{" "}
                            Validated system absolutely rejects stock removal
                            when removing more than available.
                          </li>
                          <li>
                            <strong>Date Validation:</strong> Expired date must
                            logically be after or equal to entry date.
                          </li>
                          <li>
                            <strong>Status Automation:</strong> Allowed tests to
                            verify automated status changes when stock dropped
                            (&lt; 2 items).
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold flex items-center gap-3 mb-4">
                          <span className="material-symbols-outlined text-secondary">
                            history
                          </span>{" "}
                          C. Audit Trail Verification
                        </h4>
                        <p className="text-sm text-on-surface-variant mb-4">
                          Helped ensure every data change was visibly logged by
                          writing tests that:
                        </p>
                        <ul className="text-sm space-y-3 text-on-surface-variant list-disc pl-5">
                          <li>
                            Verified audit logs were automatically created
                            post-CRUD.
                          </li>
                          <li>
                            Checked logs carefully included accurate user names
                            and timestamps.
                          </li>
                          <li>
                            Confirmed login attempts (both success and failure)
                            securely recorded.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Key Technical Decisions */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-normal">
                    Team Decisions I Learned From
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-on-surface-variant mb-8">
                  As a junior, I didn't make architectural decisions, but I
                  learned a massive amount from how the experienced team set up
                  our testing stack.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        rocket
                      </span>{" "}
                      Playwright Automation
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Experiencing its native capabilities vastly improved my
                      workflow.
                    </p>
                    <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-4">
                      <li>
                        Learned how auto-waiting makes tests dramatically more
                        stable than manual waits.
                      </li>
                      <li>
                        Understood why testing across multiple browsers matters
                        for diverse users.
                      </li>
                      <li>
                        Used the Trace Viewer extensively for deep debugging of
                        my failed tests.
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        code_blocks
                      </span>{" "}
                      TypeScript for Test Code
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Transitioning from loose languages, TS was an eye-opener.
                    </p>
                    <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-4">
                      <li>
                        Learned how type safety prevents silly mistakes before
                        runtime (passing string instead of number).
                      </li>
                      <li>
                        Understood exactly why sharing types between the backend
                        and frontend/tester is highly efficient.
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        layers
                      </span>{" "}
                      Page Object Model
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      My introduction to proper code organization.
                    </p>
                    <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-4">
                      <li>
                        Learned to organize test code cleanly by creating
                        reusable modular page objects.
                      </li>
                      <li>
                        Learned how to set up authenticated session fixtures
                        once and reuse them across runs seamlessly.
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        sync
                      </span>{" "}
                      CI/CD Integration
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Witnessed how modern pipelines accelerate delivery.
                    </p>
                    <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-4">
                      <li>
                        Learned how GitHub Actions automatically validates code
                        on every single Pull Request.
                      </li>
                      <li>
                        Understood practically why tests must absolutely be
                        structurally independent to run in parallel.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. Testing Strategy Implementation */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Testing Strategy Implementation
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant mb-10">
                  How I explicitly approached daily test execution as a junior
                  team member.
                </p>

                <h4 className="font-bold mb-4 text-sm tracking-widest uppercase text-on-surface-variant">
                  Test Coverage I Contributed To
                </h4>
                <div className="overflow-x-auto mb-12">
                  <table className="w-full text-left border-collapse bg-white shadow-sm border border-outline-variant/15 rounded-lg overflow-hidden text-sm">
                    <thead className="bg-zinc-50">
                      <tr className="border-b border-outline-variant/20">
                        <th className="py-4 px-6 font-semibold">Module</th>
                        <th className="py-4 px-6 font-semibold text-center">
                          Tests I Wrote
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          What I Validated
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Inventory Management
                        </td>
                        <td className="py-4 px-6 text-center text-primary font-bold">
                          12
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Stock calculations, negative stock prevention, status
                          updates
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Cash Flow & Finance
                        </td>
                        <td className="py-4 px-6 text-center text-primary font-bold">
                          8
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Batch creation, sold vs production limits, loss
                          calculations
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          User Management
                        </td>
                        <td className="py-4 px-6 text-center text-primary font-bold">
                          5
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Login/logout workflows, role-based access control
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">Audit Trail</td>
                        <td className="py-4 px-6 text-center text-primary font-bold">
                          4
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Log creation after varied data modifications
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-sm tracking-widest uppercase text-on-surface-variant">
                      Testing Activities Performed
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                        <div>
                          <strong className="block text-sm">
                            Functional Testing
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Validated that all main features worked fully
                            according to strict business requirements.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                        <div>
                          <strong className="block text-sm">
                            Regression & Integration Testing
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Maintained tests to run automatically before each
                            minor release to ensure non-breaking changes.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                        <div>
                          <strong className="block text-sm">
                            Exploratory Testing
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Attempted highly unusual scenarios and odd-click
                            behavior that might break the web application.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-sm tracking-widest uppercase text-on-surface-variant">
                      How I Managed Test Data
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded border-l-4 border-l-secondary bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Unique Identification Approach
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Used timestamps aggressively to create unique SKUs
                            so asynchronous tests wouldn't collide.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded border-l-4 border-l-secondary bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Database Seeding
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Learned practically the importance of resetting
                            identical database states before every test run.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded border-l-4 border-l-secondary bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Advanced Factory Patterns
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Practiced using Faker.js logic extensively to mock
                            realistic dynamic test data for varying input forms.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Key Technical Insights */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Lessons from My First QA Automation Project
                </h2>
                <div className="space-y-6">
                  {/* Insight 1 */}
                  <div className="p-8 border border-outline-variant/20 bg-surface-container-lowest rounded-xl">
                    <h4 className="font-bold text-lg mb-4 text-primary">
                      Insight 1: Understanding Business Logic is Crucial
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-6">
                      I spent the first week learning formulas and rules, which
                      helped me write meaningful tests rather than just
                      arbitrarily clicking buttons.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-zinc-50 p-4 rounded text-xs">
                        <strong className="block text-secondary mb-1">
                          Stok Akhir Formula
                        </strong>
                        Caught an unexpected off-by-one edge-case error when
                        physical stock reached exactly zero.
                      </div>
                      <div className="bg-zinc-50 p-4 rounded text-xs">
                        <strong className="block text-secondary mb-1">
                          Profit/Loss Calculation
                        </strong>
                        Verified the UI dashboard aggregated widget confidently
                        matched manual manual sum checks.
                      </div>
                      <div className="bg-zinc-50 p-4 rounded text-xs">
                        <strong className="block text-secondary mb-1">
                          Expired Date Logic
                        </strong>
                        Successfully documented edge cases surrounding complex
                        same-day expiry handling.
                      </div>
                    </div>
                  </div>
                  {/* Insight 2 */}
                  <div className="p-8 border border-outline-variant/20 bg-surface-container-lowest rounded-xl">
                    <h4 className="font-bold text-lg mb-4 text-primary">
                      Insight 2: Automation Catches What Manual Testing Misses
                    </h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Discovered invisible system-level issues:
                    </p>
                    <ul className="text-sm space-y-2 list-disc pl-5 text-on-surface-variant">
                      <li>
                        <strong>Race Condition:</strong> Paralleled tests
                        running aggressively revealed database deadlocks.
                      </li>
                      <li>
                        <strong>Stale UI States:</strong> The automated waiter
                        confirmed values visually never updated dynamically.
                      </li>
                      <li>
                        <strong>Visual Flaws:</strong> Playwright image matches
                        caught incorrectly rendered CSS status classes.
                      </li>
                    </ul>
                  </div>
                  {/* Insight 4 */}
                  <div className="p-8 border border-outline-variant/20 bg-surface-container-lowest rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-primary">
                        Insight 3: TypeScript Prevents Silly Mistakes
                      </h4>
                      <p className="text-sm text-on-surface-variant mb-4">
                        Transitioning from loose JS patterns greatly lowered bug
                        incidence code-side.
                      </p>
                      <pre className="text-xs bg-zinc-900 text-zinc-300 p-4 rounded mt-4">
                        {`// Before TS: I would write this
const quantity = "10"; // string error

// After TS: I write this
const quantity: number = 10; // safe`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-primary">
                        Insight 4: Overcoming Isolation Hurdles
                      </h4>
                      <p className="text-sm text-on-surface-variant mb-4">
                        I learned the extremely hard way that tests need
                        absolute context independence:
                      </p>
                      <ul className="text-sm space-y-2 bg-red-50/50 p-4 rounded border border-red-100 text-zinc-800">
                        <li>
                          <strong>Data failures:</strong> Appended{" "}
                          <code>
                            SKU_<span className="opacity-50">timestamp</span>
                          </code>{" "}
                          for safety.
                        </li>
                        <li>
                          <strong>State bleeds:</strong> Hard-reset databases
                          meticulously before every new test sequence.
                        </li>
                        <li>
                          <strong>Cluttered sessions:</strong> Shifted entirely
                          to isolated browser contexts overriding each other.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Visual Rendering & Interaction Bugs I found */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Bugs I Discovered Through Testing
                </h2>

                <h3 className="text-xl font-medium mb-4 mt-8">
                  Visual Bugs I Reported:
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <h3 className="font-semibold text-sm">
                        Status Coloring & Device Views
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="text-sm text-on-surface-variant space-y-2">
                        <li>
                          • <strong>Status Color Wrong:</strong> Low stock
                          confusingly showed green instead of red. Found via
                          visual check during exploratory testing.
                        </li>
                        <li>
                          • <strong>Mobile Overflow:</strong> Table content
                          completely broke mobile layouts. Caught via Responsive
                          tools.
                        </li>
                        <li>
                          • <strong>Profit Misalignment:</strong>{" "}
                          Safari-specific alignment issues found actively doing
                          cross-browser sweeps.
                        </li>
                        <li>
                          • <strong>Date Formats:</strong> Found non-localized
                          Date outputs showing USA format inherently instead of
                          indonesian DD/MM/YYYY.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-4 mt-8">
                  Interaction Bugs I Reported:
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <h3 className="font-semibold text-sm">
                        Edge-case Integrity Interactions
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="text-sm text-on-surface-variant space-y-4">
                        <li>
                          <strong>Negative Stock Allowed:</strong> Users could
                          remove stock beyond logical negative bounds. I
                          scripted strict automation assertions that caught this
                          underlying ruleset.
                        </li>
                        <li>
                          <strong>Form Validation Timing:</strong> Errors
                          delayed rendering till final submission, confusing UX.
                          Caught doing manual data-entry sweeps.
                        </li>
                        <li>
                          <strong>Deactivated Users Security Risk:</strong>{" "}
                          Disabled accounts possessed lingering active session
                          data. Verified extensively using Security Testing
                          principles.
                        </li>
                        <li>
                          <strong>Session Timeouts:</strong> App failed entirely
                          to boot invalid tokens after 2-hours. I utilized
                          Time-based session tests.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 9. Key Contributions Table */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Key Contributions
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white shadow-sm border border-outline-variant/15 rounded-lg overflow-hidden">
                    <thead className="bg-zinc-50">
                      <tr className="border-b border-outline-variant/30 text-[0.75rem] font-semibold uppercase tracking-widest text-on-surface-variant">
                        <th className="py-4 px-6">Contribution Area</th>
                        <th className="py-4 px-6">Impact Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Automated Scripting
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Wrote <strong>30+ test scripts</strong> for inventory,
                          finance, and user management modules. Enabled very
                          quick regression testing before releases.
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Proactive Bug Reporting
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Documented <strong>15+ bugs</strong> accurately with
                          clear structured steps to reproduce and
                          screenshots/video to help developers close issues
                          faster.
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Test Documentation
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Created and drafted well-outlined test-case
                          documentation, heavily assisting team transparency on
                          total codebase coverage scenarios.
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Exploratory Testing
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Spent downtime performing diverse manual UI tests
                          directly complementing logic gaps in our Playwright
                          automation scripts.
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 px-6 font-medium">
                          Learning & Adapting
                        </td>
                        <td className="py-4 px-6 text-on-surface-variant">
                          Quickly learned modern Playwright architectures and
                          nested TypeScript patterns on the job, becoming highly
                          productive by Week 2.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 10. Results Section & Growth */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  What We Achieved as a Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="p-8 border border-outline-variant/20 rounded-lg bg-white shadow-sm">
                    <p className="text-xl font-bold mb-4">
                      MVP Delivery Success
                    </p>
                    <ul className="text-sm space-y-3 text-on-surface-variant">
                      <li>
                        • <strong>70% Coverage</strong> reached on
                        hyper-critical core logic.
                      </li>
                      <li>
                        • <strong>10+ Crucial Bugs</strong> secured and debugged
                        fully prior to integration.
                      </li>
                      <li>
                        • <strong>Regression Speed Catalyst:</strong> Reduced 1
                        day of manual checks to just roughly 2 hours visually.
                      </li>
                      <li>• MVP shipped comfortably on timeline schedule.</li>
                    </ul>
                  </div>
                  <div className="p-8 border border-[#111] bg-[#1a1a1a] text-white rounded-lg shadow-sm">
                    <p className="text-xl font-bold mb-4">My Personal Growth</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-[#222] rounded text-zinc-400">
                        <span className="uppercase tracking-widest text-[10px] block mb-1 opacity-70">
                          Before Project
                        </span>
                        New to E2E Playwright
                      </div>
                      <div className="p-3 bg-[#333] rounded text-emerald-400 font-bold border-l-2 border-emerald-500">
                        <span className="uppercase tracking-widest text-[10px] block mb-1 opacity-70 text-zinc-400">
                          After Project
                        </span>
                        Comfortable writing Playwright tests
                      </div>
                      <div className="p-3 bg-[#222] rounded text-zinc-400">
                        Basic TypeScript
                      </div>
                      <div className="p-3 bg-[#333] rounded text-emerald-400 font-bold border-l-2 border-emerald-500">
                        Confident with type-safe test architectures
                      </div>
                      <div className="p-3 bg-[#222] rounded text-zinc-400">
                        Unsure about testing strategies
                      </div>
                      <div className="p-3 bg-[#333] rounded text-emerald-400 font-bold border-l-2 border-emerald-500">
                        Understand automated priority triangles
                      </div>
                      <div className="p-3 bg-[#222] rounded text-zinc-400">
                        Nervous about bug reporting
                      </div>
                      <div className="p-3 bg-[#333] rounded text-emerald-400 font-bold border-l-2 border-emerald-500">
                        Comfortable communicating logic actively
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Technical Implementation Section */}
        <section
          id="test-implementation"
          className="bg-[#111] text-white py-12 rounded-[2rem] -mx-6 md:-mx-12 xl:-mx-20 2xl:-mx-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] mb-12"
        >
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-normal mb-16 text-center">
              Example Test Scripts I Wrote
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inventory Module Snippet */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase mb-6">
                  Inventory Module UI Interaction Validation
                </h4>
                <div className="bg-[#1a1a1a] border border-[#333] text-[#e4e4e7] p-6 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed text-[#e4e4e7]">
                    {`// Test I wrote to verify stock calculation updates
test('Stock updates correctly when adding and removing UI action items', async ({ page }) => {
  // Navigate to inventory page
  await page.goto('/inventory');
  
  // Add 10 items to stock physically
  await page.click('#add-stock');
  await page.fill('#quantity', '10');
  await page.click('#save');
  
  // Assert verify stock shows 10 on UI specifically
  await expect(page.locator('#stock-amount')).toHaveText('10');
  
  // Perform remove 3 items workflow
  await page.click('#remove-stock');
  await page.fill('#quantity', '3');
  await page.click('#save');
  
  // Ensure stock visually recalculates to 7 successfully
  await expect(page.locator('#stock-amount')).toHaveText('7');
});`}
                  </pre>
                </div>
              </div>

              {/* Cash flow module snippet */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase mb-6">
                  Finance Core Logic Constraint Verification
                </h4>
                <div className="bg-[#1a1a1a] border border-[#333] text-[#e4e4e7] p-6 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed text-[#e4e4e7]">
                    {`// Test I wrote to verify batch creation limits aggressively
test('Cannot sell more than produced quantity securely', async ({ page }) => {
  await page.goto('/finance');
  
  // Create batch with 100 bottles inherently produced globally
  await page.click('#create-batch');
  await page.fill('#produksi', '100');
  await page.fill('#terjual', '120');  // Intentional edge-break testing
  
  await page.click('#save');
  
  // Assert explicit error message behavior exists upon invalid state
  await expect(page.locator('.error-message')).toBeVisible();
  await expect(page.locator('.error-message'))
      .toContainText('Tidak boleh melebihi produksi');
});`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tools list directly underneath */}
            <div className="mt-16 w-full max-w-2xl mx-auto">
              <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase text-center mb-6">
                Stack Arsenal
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold">
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Playwright Framework
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  TypeScript Typings
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  VS Code
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Git Version Control
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  GitHub / Actions
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Jira Tracking
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Learnings & Testimonial */}
        <section className="mx-auto py-12 border-t border-outline-variant/10 w-full">
          <div className="w-full">
            <h2 className="text-[2rem] font-semibold tracking-normal mb-12">
              Concluding Lessons & Impact Evidence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest mb-4">
                  Core Skills Gained
                </h5>
                <ul className="text-on-surface-variant text-sm space-y-4 leading-relaxed">
                  <li>
                    <strong>Financial Logic Acumen:</strong> Learned how to
                    strictly functionally assert complex calculations and edge
                    formulas that define core business viability.
                  </li>
                  <li>
                    <strong>Team Communication:</strong> Drastically improved
                    capacity to concisely document system bugs clearly into Jira
                    channels alongside busy developers.
                  </li>
                  <li>
                    <strong>Agile Collaboration:</strong> Prioritized testing
                    layers securely within heavily strapped timeline structures
                    safely alongside backend logic developers.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest mb-4">
                  Obstacles Crushed
                </h5>
                <ul className="text-on-surface-variant text-sm space-y-4 leading-relaxed">
                  <li>
                    <strong>Learning Playwright Fast:</strong> Watched tutorials
                    and read heavy documentation over weekend deep dives to
                    perform at startup output levels.
                  </li>
                  <li>
                    <strong>Writing Reliable Architectures:</strong> Adopted
                    Page-wait strategies and assertion isolation to squash
                    inherently flaky system designs easily.
                  </li>
                  <li>
                    <strong>Test Data Handling:</strong> Learned heavily on how
                    DB transaction states strictly required unique randomized
                    SKUs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Actionable CTA */}
        <section className="mt-12 pt-16 border-t border-outline-variant/20 mb-12">
          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              What's Next For Me
            </span>
            <p className="text-lg text-zinc-600 font-medium max-w-4xl mx-auto mb-4">
              This project firmly taught me that aggressive automation within
              financial applications specifically requires severe attention to
              exact details and profound rule-based logic comprehension. I am
              deeply excited to exponentially grow my Playwright API integration
              horizons.
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-normal mt-12 mb-8 text-primary">
              Ready to Discuss How I Can{" "}
              <span className="text-secondary italic">Contribute?</span>
            </h2>
            <p className="max-w-xl mx-auto text-zinc-600 text-sm mb-12">
              If you're looking for a highly eager junior QA Automation engineer
              who writes reliable code structure and rapidly catches system
              flows, let's heavily connect.
            </p>
            <div className="w-full">
              <a href="mailto:adnanyazidar48@gmail.com">
                <button className="px-12 py-6 bg-primary text-on-primary-container font-headline font-black uppercase tracking-widest hover:bg-secondary transition-colors text-lg rounded-full">
                  Contact Me Directly
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
