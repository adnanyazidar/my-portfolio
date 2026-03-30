import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Freshtoria QA Automation — Adnan Labs",
  description:
    "How I automated critical financial regressions and secured the Freshtoria deployment pipeline.",
};

export default function FreshtoriaCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[1920px] mx-auto w-full">
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
        <div className="mb-20">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter leading-tight mb-6">
            Securing Financial Data with Automated E2E Testing
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-medium max-w-4xl leading-relaxed mb-10">
            Eliminated manual regression effort by 100% on core financial flows,
            catching pre-deployment bugs using Playwright & GitHub Actions.
          </p>
          <div className="flex flex-wrap gap-4 sticky top-[80px] md:top-[96px] z-40 bg-zinc-50/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 2xl:-mx-[120px] 2xl:px-[120px] shadow-sm transition-all duration-300">
            <a
              href="https://github.com/adnanyazidar/freshtoria-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              View GitHub Repo
              <span className="material-symbols-outlined" data-icon="open_in_new">
                open_in_new
              </span>
            </a>
            <a
              href="#test-implementation"
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Skip to Code
              <span className="material-symbols-outlined" data-icon="arrow_downward">
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

        {/* 2. Key Metrics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          <div className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200">
            <span className="block text-4xl font-extrabold font-headline mb-2 text-primary">
              20+
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              E2E Test Cases
            </span>
          </div>
          <div className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200">
            <span className="block text-4xl font-extrabold font-headline mb-2 text-primary">
              100%
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              Pass Rate (CI)
            </span>
          </div>
          <div className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200">
            <span className="block text-4xl font-extrabold font-headline mb-2 text-primary">
              5
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              Critical Bugs Caught
            </span>
          </div>
          <div className="bg-zinc-100 p-8 rounded-2xl border border-zinc-200">
            <span className="block text-4xl font-extrabold font-headline mb-2 text-primary">
              &lt; 3m
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              CI Execution Time
            </span>
          </div>
        </div> */}

        {/* Project Metadata & Challenges */}
        <section className="mx-auto py-32 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">About Apex</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Apex Solutions is a global leader in cloud-native logistics, servicing over 45 countries with real-time data orchestration.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">Duration</p>
                  <p className="text-sm font-medium">6 Months</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">Team Composition</p>
                  <p className="text-sm font-medium">4 Devs, 2 QA, 1 DevOps</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">Stack</p>
                  <p className="text-sm font-medium">Playwright, TypeScript</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">CI/CD &amp; Tools</p>
                  <p className="text-sm font-medium">GitHub Actions, Allure</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">Management</p>
                  <p className="text-sm font-medium">Jira, Postman</p>
                </div>
              </div>

              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">👤 My Role</h4>
                <ul className="text-sm leading-relaxed text-on-surface-variant space-y-2">
                  <li>• Designed a QA strategy for 3D interaction testing</li>
                  <li>• Conducted exploratory testing across multiple devices</li>
                  <li>• Documented and reported critical rendering bugs</li>
                  <li>• Collaborated with developers to validate fixes</li>
                </ul>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div className="p-10 bg-surface-container-low rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">warning</span>
                    Challenge
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant text-sm leading-relaxed">
                    <li className="flex gap-2"><span>•</span> Zero automated regression testing</li>
                    <li className="flex gap-2"><span>•</span> Critically slow deployment cycles</li>
                    <li className="flex gap-2"><span>•</span> Frequent defect leakage to production</li>
                    <li className="flex gap-2"><span>•</span> No visibility into test coverage</li>
                  </ul>
                </div>
                <div className="p-10 bg-surface-container rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    Solution
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Spearheaded the initiative to build a comprehensive automation strategy. Transitioned from purely manual workflows to a shift-left approach using Playwright, integrating directly into the dev pipeline.
                  </p>
                </div>
              </div>

              {/* Apex's story */}
              <div className="max-w-2xl mb-32">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-12">Apex&apos;s story</h2>
                <div className="space-y-10 text-lg leading-[1.7] text-on-surface-variant">
                  <p>
                    The journey of Apex Solutions is one of constant evolution. Founded in 2016, the company quickly became a disruptor in the logistics space. However, as Sarah Jenkins, CTO, explains, their success became their biggest bottleneck.
                  </p>
                  <p>
                    &quot;Our original architecture was built for a single market,&quot; Jenkins says. &quot;As we expanded into Southeast Asia and Latin America, the fragmentation became unbearable. We were spending 60% of our engineering budget just maintaining legacy bridges instead of building new value.&quot;
                  </p>
                  <blockquote className="pl-8 border-l-4 border-secondary py-4 my-12">
                    <p className="text-2xl font-medium text-on-surface italic">
                      &quot;Forge gave us a blank canvas that already had the structural integrity we needed. It was like moving from a crowded apartment into a master-planned estate.&quot;
                    </p>
                  </blockquote>
                  <p>
                    The transition took place over a focused six-month sprint. Leveraging Forge&apos;s editorial-first design principles, the engineering team not only improved backend performance but also revolutionized the internal dashboarding experience for their fleet managers.
                  </p>
                  <div className="my-16 h-[400px] overflow-hidden rounded-xl">
                    <img className="w-full h-full object-cover" alt="Macro view of a high-resolution data dashboard on a sleek monitor displaying clean charts and minimalist interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-TBEngiAY5G73dGidI3bIDioR8IeywfXNvO6AsgnaTRGU6HRelljB7_Zuh6i4k3XH93M7WroidJOHx9lgqp9Z4cu3zQmUhN1TPInrUfaXu4ZETWhtrFo9kpgYF4JHVnjaGyF6TMMHOZpaNhj0g_o36CI_DZPj7qCWEYxwZsvO4Up1JNoeM4HPKbiAqIK4okKOMRjurX6uXeDyPcEFGjdMZs8kvPiSZHh3X6R7k38EKQf_FiK01oE8mVOnC9xUlmTeeDMIL_-3h-x8" />
                  </div>
                  <p>
                    Today, Apex Solutions processes over 2.4 billion data points daily. Their deployment cycle has dropped from 3 weeks to 12 minutes, and their customer satisfaction scores have reached an all-time high of 4.9/5.
                  </p>
                </div>
              </div>

              {/* QA Strategy */}
              <div className="mb-32" id="qa-strategy">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">Testing Strategy</h2>
                <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-10">
                  <p className="text-lg leading-[1.7] text-on-surface-variant mb-10">
                    To ensure the Obsidian Framework could handle the immense scale of Apex&apos;s logistics data, we implemented a multi-layered quality assurance strategy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <h4 className="font-semibold text-on-surface">Exploratory Testing</h4>
                      <p className="text-sm text-on-surface-variant">Simulating complex user journeys across edge cases to identify unscripted failure points in high-latency environments.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">devices</span>
                      </div>
                      <h4 className="font-semibold text-on-surface">Cross-Platform Matrix</h4>
                      <p className="text-sm text-on-surface-variant">Validated performance parity across 14+ browser/OS combinations including specialized logistics hardware.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <h4 className="font-semibold text-on-surface">Bug Documentation</h4>
                      <p className="text-sm text-on-surface-variant">Iterative feedback loop using standardized reporting to accelerate developer triaging and resolution.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Technical Decisions */}
              <div className="mb-32">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-tight">Key Technical Decisions</h2>
                  <span className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase">Architectural Logic</span>
                </div>
                <p className="text-lg text-on-surface-variant mb-12 max-w-3xl">Our choice of tech stack was driven by the need for extreme reliability and long-term maintainability in a rapidly evolving global logistics environment.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">speed</span>
                      <h4 className="font-bold">Playwright over Selenium</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Selected for superior Developer Experience (DX) and native auto-waiting mechanisms, reducing flaky tests by 45% compared to legacy suites.</p>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">verified_user</span>
                      <h4 className="font-bold">TypeScript Core</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Implemented for strict type safety and self-documenting code. Essential for maintainability across our long-term automation infrastructure.</p>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">account_tree</span>
                      <h4 className="font-bold">Page Object Model</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Used the POM pattern to decouple test logic from UI selectors, enabling rapid updates when front-end components are redesigned.</p>
                  </div>
                </div>
              </div>

              {/* Visual Rendering & Interaction Bugs */}
              <div className="mb-32">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-tight">Visual Rendering &amp; Interaction Bugs</h2>
                  <span className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase">Quality Insights</span>
                </div>
                <p className="text-lg text-on-surface-variant mb-12">Caught 15+ visual rendering and interaction bugs before the final prototype presentation through structured exploratory testing and precise bug reporting.</p>
                <div className="space-y-4">
                  {/* Bug Card 1 */}
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-secondary">BUG-142</span>
                        <h3 className="font-semibold text-sm">iOS Safari WebGL Context Loss on Room Switch</h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">Critical</span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">Fixed</span>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase mb-2">Observed Behavior</p>
                        <p className="text-sm text-on-surface italic bg-red-50/20 p-3 rounded">Map interface turns solid black on M1 iPads during rapid viewport transitions. Console logs &quot;CONTEXT_LOST_WEBGL&quot;.</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs text-on-surface-variant leading-relaxed">Resolution: Implemented a context restoration listener that automatically reinstantiates the renderer without requiring a page refresh.</p>
                      </div>
                    </div>
                  </div>
                  {/* Bug Card 2 */}
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-secondary">BUG-089</span>
                        <h3 className="font-semibold text-sm">Critical Crash during 3D model loading on mobile hardware</h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">Blocker</span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">Fixed</span>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase mb-2">Observed Behavior</p>
                        <p className="text-sm text-on-surface italic bg-orange-50/20 p-3 rounded">OOM crash on mid-range Android devices when loading high-density warehouse schematics.</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs text-on-surface-variant leading-relaxed">Resolution: Integrated level-of-detail (LOD) streaming and aggressive texture compression for mobile-specific assets.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Contributions Table */}
              <div className="mb-32">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">Key Contributions</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-[0.75rem] font-semibold uppercase tracking-widest text-on-surface-variant">
                        <th className="py-4 px-2">Focus Area</th>
                        <th className="py-4 px-2">Achievement</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-6 px-2 font-medium">Framework Design</td>
                        <td className="py-6 px-2 text-on-surface-variant">Built a scalable Page Object Model (POM) architecture using Playwright and TypeScript.</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-6 px-2 font-medium">API Testing</td>
                        <td className="py-6 px-2 text-on-surface-variant">Developed a library for validating microservices endpoints, reducing integration errors by 40%.</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-6 px-2 font-medium">Reporting</td>
                        <td className="py-6 px-2 text-on-surface-variant">Integrated Allure reporting for real-time visibility into test execution and flaky test analysis.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Soft CTA */}
              <div className="mb-32 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
                <p className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-8 max-w-2xl">
                  Need a robust automated testing strategy like this to secure your deployments?
                </p>
                <a
                  href="mailto:adnanyazidar48@gmail.com"
                  className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Initiate Collaboration &rarr;
                </a>
              </div>

              {/* Results Section */}
              <div className="mb-32">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">Measurable Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2">E2E Tests</p>
                    <p className="text-4xl font-bold text-secondary">150+</p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2">API Tests</p>
                    <p className="text-4xl font-bold text-secondary">300+</p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2">Component</p>
                    <p className="text-4xl font-bold text-secondary">85+</p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-10 rounded-lg overflow-x-auto">
                  <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Quality Metrics</h4>
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="py-4">Metric</th>
                        <th className="py-4">Before</th>
                        <th className="py-4">After Automation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 font-medium">Full Regression Time</td>
                        <td className="py-4 text-error">3 Days (Manual)</td>
                        <td className="py-4 text-secondary">18 Minutes</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 font-medium">Deployment Frequency</td>
                        <td className="py-4">Weekly</td>
                        <td className="py-4">Daily / On-demand</td>
                      </tr>
                      <tr className="border-b border-outline-variant/10">
                        <td className="py-4 font-medium">Production Defect Rate</td>
                        <td className="py-4">12%</td>
                        <td className="py-4 text-secondary">Under 2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section className="bg-white py-32 rounded-[2rem] -mx-6 md:-mx-12 xl:-mx-20 2xl:-mx-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] mb-32">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Technical Deep Dive</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Framework Architecture */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">Framework Architecture</h4>
                <div className="bg-zinc-900 text-zinc-300 p-8 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed">{`project-root/
├── tests/
│   ├── e2e/
│   ├── api/
│   └── components/
├── pages/             # Page Object Models
├── utils/             # Helper functions
├── fixtures/          # Global test data
├── .github/workflows/ # CI/CD Config
├── playwright.config.ts
└── package.json`}</pre>
                </div>
                <p className="mt-6 text-sm text-on-surface-variant leading-relaxed">
                  The architecture emphasizes modularity and reusability, ensuring that changes in the UI only require updates in a single Page Object file.
                </p>
              </div>

              {/* Code Snippet */}
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">Sample: Playwright + TypeScript</h4>
                <div className="bg-zinc-900 text-zinc-300 p-8 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed"><span className="text-indigo-400">import</span> {`{ test, expect }`} <span className="text-indigo-400">from</span> <span className="text-emerald-400">'@playwright/test'</span>;

                    {`test(`}<span className="text-emerald-400">'validate dashboard load'</span>{`, `}<span className="text-indigo-400">async</span> {`({ page }) => {`}
                    <span className="text-zinc-500">{`// Using POM pattern`}</span>
                    <span className="text-indigo-400">const</span> {`dashboard = `}<span className="text-indigo-400">new</span> {`DashboardPage(page);`}
                    <span className="text-indigo-400">await</span> {`dashboard.goto();`}
                    <span className="text-indigo-400">await</span> {`expect(dashboard.mainChart).toBeVisible();`}
                    <span className="text-indigo-400">await</span> {`expect(dashboard.statCards).toHaveCount(4);`}
                    {`});`}</pre>
                </div>
              </div>
            </div>

            {/* Testing Strategy Pyramid & CI/CD */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">CI/CD Pipeline Integration</h4>
                <div className="bg-zinc-900 text-zinc-300 p-8 rounded-lg overflow-x-auto">
                  <pre className="text-xs leading-relaxed"><span className="text-indigo-400">name:</span> {`Playwright Tests`}
                    <span className="text-indigo-400">on:</span> {`[push, pull_request]`}
                    <span className="text-indigo-400">jobs:</span>
                    <span className="text-indigo-400">test:</span>
                    <span className="text-indigo-400">runs-on:</span> {`ubuntu-latest`}
                    <span className="text-indigo-400">steps:</span>
                    {`- `}<span className="text-indigo-400">uses:</span> {`actions/checkout@v3`}
                    {`- `}<span className="text-indigo-400">run:</span> {`npm ci`}
                    {`- `}<span className="text-indigo-400">run:</span> {`npx playwright test`}</pre>
                </div>
              </div>

              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">Testing Pyramid Strategy</h4>
                <div className="flex flex-col items-center justify-center h-full min-h-[200px] border border-outline-variant/10 rounded-lg p-12 bg-surface-container-lowest">
                  {/* Simplified Visual Representation */}
                  <div className="w-full max-w-xs space-y-2">
                    <div className="w-1/3 mx-auto h-8 bg-secondary rounded-sm flex items-center justify-center text-[10px] font-bold text-white uppercase">E2E</div>
                    <div className="w-2/3 mx-auto h-10 bg-secondary/60 rounded-sm flex items-center justify-center text-[10px] font-bold text-white uppercase">API / Integration</div>
                    <div className="w-full mx-auto h-14 bg-secondary/20 rounded-sm flex items-center justify-center text-[10px] font-bold text-secondary uppercase border border-secondary/30">Unit / Component</div>
                  </div>
                  <p className="mt-8 text-xs text-on-surface-variant text-center">Optimized for fast feedback loops and stability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings & Testimonial */}
        <section className="mx-auto py-32 border-t border-outline-variant/10 w-full">
          <div className="w-full">
            <div className="w-full">
              <h2 className="text-[2rem] font-semibold tracking-tight mb-12">Key Learnings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Technical</h5>
                  <ul className="text-on-surface-variant text-sm space-y-3 leading-relaxed">
                    <li>• Advanced asynchronous patterns in TypeScript.</li>
                    <li>• Mastering Playwright's auto-waiting and locator strategies.</li>
                    <li>• Designing custom reporting for stakeholder visibility.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Soft Skills</h5>
                  <ul className="text-on-surface-variant text-sm space-y-3 leading-relaxed">
                    <li>• Collaboration within a cross-functional Agile pod.</li>
                    <li>• Advocating for quality as a shared responsibility.</li>
                    <li>• Effective documentation for technical and non-technical peers.</li>
                  </ul>
                </div>
              </div>

              {/* <div className="mt-24 p-12 bg-surface-container-low border border-outline-variant/10 rounded-xl italic">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img alt="Sarah Jenkins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMeS7gQWbXoi7X2kdVqJgThU85xTQuV9itSDWHA5pSYkgCZR_FHSnT7LB9iZYRgC1KdjinvGkhpP7tLiHVS0mv3HD7qUwOpRAYIbHGkdd_m4qXA5GFwo8xwb_ncYHn6gBQ8oaHidrLrXohXS2t87wH9H9hTN5MBfzwCUVuJB9tFAmoNYF8vuma_yCGxLKomvWDYf44hKBS0_A1I4btC164gpNdL9P-l9Hmd8r2YZU2piTNNsclG2S_SOr7x7eMaOdFRCkIGtegfJBJ" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Sarah Jenkins</p>
                    <p className="text-xs text-on-surface-variant">CTO, Apex Solutions</p>
                  </div>
                </div>
                <p className="text-xl text-on-surface leading-relaxed">
                  "Alex didn't just write scripts; they built a culture of quality. Our engineering velocity has doubled, and for the first time, our release candidate sign-offs are backed by concrete data rather than gut feeling."
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Tools Mosaic Footer */}
        {/* <section className="bg-surface-container-low py-24 rounded-[2rem] -mx-6 md:-mx-12 xl:-mx-20 2xl:-mx-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-12 opacity-50 grayscale filter hover:grayscale-0 transition-all text-center">
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl">PLAYWRIGHT</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl italic">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl underline decoration-secondary">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl">Allure</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl">JIRA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-tighter text-xl line-through decoration-secondary">POSTMAN</span>
              </div>
            </div>
          </div>
        </section> */}
        <section className="mt-48 pt-32 border-t border-outline-variant/20">
          <div className="flex flex-col items-center text-center space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              The Next Foundation
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-4xl">
              Ready to build something{" "}
              <span className="text-on-surface-variant/20 italic font-medium">
                indestructible?
              </span>
            </h2>
            <div className="mb-12 w-full">
              <a href="mailto:adnanyazidar48@gmail.com">
                <button className="px-12 py-6 bg-primary text-on-primary-container font-headline font-black uppercase tracking-[0.2em] hover:bg-secondary transition-colors text-lg">
                  Initiate Collaboration
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
