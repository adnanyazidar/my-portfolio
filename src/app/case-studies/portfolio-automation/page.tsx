import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio Playwright E2E Automation — Adnan Labs",
  description:
    "My journey architecting an industry-grade Playwright E2E automation framework for my personal Next.js portfolio.",
};

export default function PortfolioAutomationCaseStudy() {
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

        {/* 1. Hero (Technical Impact First) */}
        <div className="mb-12">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-normal leading-tight mb-6">
            Architecting Robust E2E Coverage with Playwright
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-medium max-w-4xl leading-relaxed mb-10">
            Engineered a Playwright automation framework delivering 100% critical flow coverage across 3 breakpoints.
          </p>
          <div className="flex flex-wrap gap-4 sticky top-[80px] md:top-[96px] z-40 bg-zinc-50/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 2xl:-mx-[120px] 2xl:px-[120px] shadow-sm transition-all duration-300">
            <a
              href="https://github.com/adnanyazidar/my-portfolio"
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
            {/* The actual test cases CSV link */}
            <a
              href="/Test_Cases_Automation.csv"
              download
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Download Test Cases CSV
              <span className="material-symbols-outlined" data-icon="download">
                download
              </span>
            </a>
          </div>
        </div>

        {/* 2. Project Metadata & Technical Challenges */}
        <section className="mx-auto py-12 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  About The Automation Project
                </h4>
                <div className="text-sm leading-relaxed text-on-surface-variant space-y-4">
                  <p>
                    This portfolio was designed in Next.js and styled with customized utility classes. Before automation, UI changes could silently break:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-medium text-zinc-800">
                    <li>Resume downloads</li>
                    <li>Contact flows</li>
                    <li>Case study routing</li>
                    <li>Mobile navigation</li>
                  </ul>
                  <p>
                    I initiated this dedicated SDET project to eliminate that risk entirely from the deployment pipeline.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Project Target
                  </p>
                  <p className="text-sm font-medium">
                    Next.js Portfolio Application
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-medium">1 Week Integration</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    My Role
                  </p>
                  <p className="text-sm font-medium">
                    QA Automation Engineer 
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Test Scripts
                  </p>
                  <p className="text-sm font-medium text-emerald-600 font-bold">45+ Automated Configurations</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Tech Stack
                  </p>
                  <p className="text-sm font-medium">Playwright, TypeScript, GitHub Actions CI</p>
                </div>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="mb-12 space-y-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    engineering
                  </span>
                  Architectural Implementation
                </h3>

                <div className="space-y-6">
                  {/* Architecture Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Structure
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Page Object Model (POM)
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Organizing locators and asserting logic within repetitive test scripts severely degrades maintainability exactly when the DOM changes.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          My Solution
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Created dedicated class abstractions (`BasePage.ts`, `HomePage.ts`) encapsulating all structural locators, resulting in highly readable, declarative tests that are virtually immune to UI refactor breakages.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Architecture Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Validation Level
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Strict Visual Regression Checks
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Minor CSS utility class errors (`flex-col` vs `flex-row`) can ruin complex grid layouts completely undetected by standard DOM assertions.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          My Solution
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Integrated Playwright's `toHaveScreenshot` capability capturing pixel-perfect baseline images. I routed all animations accurately using `.disableAnimation()` parameters dynamically so tests remain 100% flake-free.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Architecture Item */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          Multi-Device Configuration
                        </strong>
                        <h4 className="font-bold text-lg mb-2 text-primary">
                          Cross-Breakpoint Responsive Testing
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Hamburger navigation menus vs desktop wide-nav visibility are entirely reliant on precise window size logic.
                        </p>
                      </div>
                      <div>
                        <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                          My Solution
                        </strong>
                        <p className="text-sm text-secondary font-medium">
                          Programmed dynamic viewport injection inside `playwright.config.ts`, directly forcing parallel execution against predefined Mobile (iPhone 12), Tablet (iPad Mini), and Desktop (1080p) container environments simultaneously.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Deep Dive coverage */}
              <div className="mb-12" id="qa-strategy">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Test Coverage Matrix & Modules
                </h2>
                <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-10">
                  <p className="text-lg leading-relaxed text-on-surface-variant mb-10">
                    The automation suites were strictly broken down conceptually to isolate component failures.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white shadow-sm border border-outline-variant/15 rounded-lg overflow-hidden text-sm">
                      <thead className="bg-zinc-50">
                        <tr className="border-b border-outline-variant/20">
                          <th className="py-4 px-6 font-semibold w-1/4">Area</th>
                          <th className="py-4 px-6 font-semibold w-1/3">Example Tests</th>
                          <th className="py-4 px-6 font-semibold">Validation Concept</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-outline-variant/10">
                          <td className="py-4 px-6 font-medium">Navigation</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Anchor scrolling, Internal routing</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Asserted smooth hash links without hard refreshes.</td>
                        </tr>
                        <tr className="border-b border-outline-variant/10">
                          <td className="py-4 px-6 font-medium">Call To Actions (CTA)</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Mailto logic, Resume downloads</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Validated href attributes securely target proper system apps/files.</td>
                        </tr>
                        <tr className="border-b border-outline-variant/10">
                          <td className="py-4 px-6 font-medium">Responsive Shifts</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Mobile hamburger menus, Grid breaks</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Verified viewport-specific elements trigger and toggle dynamically based on config size.</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 font-medium">Visual Presentation</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Full-page component screenshots</td>
                          <td className="py-4 px-6 text-on-surface-variant text-xs">Caught CSS utility regressions silently breaking padding/colors using masked baseline comparisons.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Continuous Integration */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Continuous Integration
                </h2>
                <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="w-full md:w-2/3 space-y-4">
                    <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
                      Tests are integrated tightly into the development workflow to ensure a production-ready mindset.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-center bg-white shadow-sm">
                        <span className="material-symbols-outlined text-secondary">commit</span>
                        <span className="text-sm font-medium">Tests run synchronously on every Pull Request</span>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-center bg-white shadow-sm">
                        <span className="material-symbols-outlined text-red-500">block</span>
                        <span className="text-sm font-medium">Failing tests explicitly block any Vercel deployments</span>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-center bg-white shadow-sm">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                        <span className="text-sm font-medium">Visual screenshot diffs are isolated for review before merge</span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex flex-col items-center justify-center p-8">
                      <span className="material-symbols-outlined text-zinc-300 !text-[8rem]">account_tree</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Technical Implementation Section (Code Snippets) */}
        <section
          id="test-implementation"
          className="bg-[#111] text-white py-12 rounded-[2rem] -mx-6 md:-mx-12 xl:-mx-20 2xl:-mx-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] mb-12"
        >
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-normal mb-16 text-center">
              Testing Code Implementation Snippets
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* POM ImplementationSnippet */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase mb-6">
                  Page Object Model Abstraction (HomePage.ts)
                </h4>
                <div className="bg-[#1a1a1a] border border-[#333] text-[#e4e4e7] p-6 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed text-[#e4e4e7]">
                    {`import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heroHeading: Locator;
  readonly downloadResumeBtn: Locator;
  readonly selectedWorkSection: Locator;

  constructor(page: Page) {
    super(page);
    this.heroHeading = page.getByRole('heading', { level: 1 });
    this.downloadResumeBtn = page.getByRole('link', { name: /Download Resume/i });
    this.selectedWorkSection = page.locator('#case-studies');
  }

  async navigateToSelectedWork() {
    await this.selectedWorkSection.scrollIntoViewIfNeeded();
  }
} `}
                  </pre>
                </div>
              </div>

              {/* Visual Regression Snippet */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase mb-6">
                  Masking Flaky Elements in Visual Regression
                </h4>
                <div className="bg-[#1a1a1a] border border-[#333] text-[#e4e4e7] p-6 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed text-[#e4e4e7]">
                    {`test("homepage hero section should match baseline", async ({ homePage }) => {
  // We actively mask dynamically-loading external images or looping videos
  // so visual regression only tests our structural UI logic accurately.
  
  await expect(homePage.page.locator("main")).toHaveScreenshot(
    "homepage-hero-desktop.png",
    {
      mask: [homePage.page.locator('img[loading="lazy"]')],
      animations: 'disabled',
      maxDiffPixelRatio: 0.05
    }
  );
});`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Tools list directly underneath */}
            <div className="mt-16 w-full max-w-2xl mx-auto">
              <h4 className="text-[0.75rem] font-semibold tracking-widest text-[#a1a1aa] uppercase text-center mb-6">
                Automation Framework Stack
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold">
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Playwright Native Runner
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  TypeScript Static Typing
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  ESLint / Prettier
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Playwright Trace Viewer
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  GitHub Actions (CI/CD)
                </div>
                <div className="bg-[#222] p-4 text-center rounded border border-[#333]">
                  Next.js App Router Waiters
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Impact & Outcomes Section */}
        <section className="mx-auto py-12 border-t border-outline-variant/10 w-full mb-12">
          <div className="w-full">
            <h2 className="text-[2rem] font-semibold tracking-normal mb-12">
              Business Impact & Outcomes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 border-l-4 border-l-primary bg-zinc-50 rounded-r-xl shadow-sm">
                <h5 className="font-bold text-lg mb-2 flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> 100% Core Flow Coverage</h5>
                <p className="text-sm text-zinc-600">All revenue-critical paths (portfolios, routing, contacts) are explicitly safeguarded before traffic hits them.</p>
              </div>
              <div className="p-8 border-l-4 border-l-secondary bg-zinc-50 rounded-r-xl shadow-sm">
                <h5 className="font-bold text-lg mb-2 flex items-center gap-3"><span className="material-symbols-outlined text-secondary">timer</span> ~80% Testing Time Saved</h5>
                <p className="text-sm text-zinc-600">Manual regression execution that usually took tedious hours across mobile/desktop views is now executed reliably in roughly 45 seconds.</p>
              </div>
              <div className="p-8 border-l-4 border-l-emerald-500 bg-zinc-50 rounded-r-xl shadow-sm">
                <h5 className="font-bold text-lg mb-2 flex items-center gap-3"><span className="material-symbols-outlined text-emerald-500">security</span> Safe UI Refactoring</h5>
                <p className="text-sm text-zinc-600">Developers can aggressively update structural code knowing the visual regression engine will automatically highlight broken layout shifts.</p>
              </div>
              <div className="p-8 border-l-4 border-l-blue-500 bg-zinc-50 rounded-r-xl shadow-sm">
                <h5 className="font-bold text-lg mb-2 flex items-center gap-3"><span className="material-symbols-outlined text-blue-500">gavel</span> Strict CI/CD Deployment Gate</h5>
                <p className="text-sm text-zinc-600">Established an impenetrable GitHub Actions pipeline gate preventing severely broken code states from ever reaching production users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Actionable CTA */}
        <section className="mt-12 pt-16 border-t border-outline-variant/20 mb-12">
          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-normal mt-12 mb-8 text-primary">
              Ready Secure Your Core Product{" "}
              <span className="text-secondary italic">Workflows?</span>
            </h2>
            <p className="max-w-xl mx-auto text-zinc-600 text-sm mb-12">
              If your team requires an automation engineer deeply obsessed with robust, un-flaky TypeScript test architectures that heavily validate business requirements — let's immediately talk.
            </p>
            <div className="w-full">
              <a href="mailto:adnanyazidar48@gmail.com">
                <button className="px-12 py-6 bg-primary text-on-primary-container font-headline font-black uppercase tracking-widest hover:bg-secondary transition-colors text-lg rounded-full">
                  Hire Me For Automation
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
