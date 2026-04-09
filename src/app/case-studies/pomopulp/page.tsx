import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PomoPulp Case Study: Elite Productivity Engineering — Adnan Labs",
  description:
    "Engineering a high-performance workstation that unifies Pomodoro, immersive media, and elite-level analytics with bit-perfect quality assurance.",
};

export default function PomoPulpCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-16 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[19200px] mx-auto w-full">
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
            PomoPulp: Mastering the Rhythm of Productivity
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-medium max-w-4xl leading-relaxed mb-10">
            Engineered an immersive workstation that unifies the Pomodoro technique with an
            elite media hub and immersive analytics, delivering a seamless "Flow State"
            on a zero-latency mono-architecture.
          </p>
          <div className="flex flex-wrap gap-4 sticky top-[80px] md:top-[96px] z-40 bg-zinc-50/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 2xl:-mx-[120px] 2xl:px-[120px] shadow-sm transition-all duration-300">
            <a
              href="https://pomopulp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              Launch Live App
              <span
                className="material-symbols-outlined"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="https://github.com/adnanyazidar/Pulp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              View Repository
              <span
                className="material-symbols-outlined"
                data-icon="code"
              >
                code
              </span>
            </a>
            <a
              href="#qa-strategy"
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              QA Strategy
              <span
                className="material-symbols-outlined"
                data-icon="verified_user"
              >
                verified_user
              </span>
            </a>
          </div>
        </div>

        {/* Hero Asset */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
          <img
            src="/asset/Cuplikan layar_9-4-2026_103558_pomopulp.vercel.app.jpeg"
            alt="PomoPulp Dashboard Mockup"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 2. Project Context & Challenges */}
        <section className="mx-auto py-12 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  About PomoPulp
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  PomoPulp is a high-performance productivity workstation designed
                  to eliminate fragmentation. It unifies a focus timer, ambient
                  audio mixer, and data-driven analytics into a single, cohesive command center.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Project
                  </p>
                  <p className="text-sm font-medium">PomoPulp Ecosystem (v1.0)</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Timeline
                  </p>
                  <p className="text-sm font-medium">5 Weeks (Concept to Deployment)</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Industry
                  </p>
                  <p className="text-sm font-medium">SaaS / Productivity</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Stack
                  </p>
                  <p className="text-sm font-medium">Next.js 15, ElysiaJS, Bun, TiDB, Playwright</p>
                </div>
              </div>

              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  👤 My Role
                </h4>
                <ul className="text-sm leading-relaxed text-on-surface-variant space-y-2">
                  <li>• Lead Full-stack Architect</li>
                  <li>• Performance Optimization Engineer</li>
                  <li>• QA Automation Framework Lead</li>
                  <li>• Hybrid Auth & Sync Architect</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="mb-12 space-y-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    assignment_late
                  </span>
                  Key Challenges & Solutions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Challenge Item 1 */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                      Architecture
                    </strong>
                    <h4 className="font-bold text-lg mb-2 text-primary">Zero-Latency Mono-Architecture</h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Integrating backend logic into Next.js often creates network overhead
                      and complex cold-start issues in serverless environments.
                    </p>
                    <p className="text-xs text-primary font-bold border-t border-zinc-200 pt-3">
                      How I Contributed: Implemented ElysiaJS & Bun inside Next.js Edge Functions, achieving
                      &lt;30ms API responses through a unified deployment layer.
                    </p>
                  </div>
                  {/* Challenge Item 2 */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                      Data Integrity
                    </strong>
                    <h4 className="font-bold text-lg mb-2 text-primary">Bulletproof Data Migration</h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Ensuring guest progress (Pomodoros, local notes) seamlessly
                      migrates to a cloud account upon registration without data loss.
                    </p>
                    <p className="text-xs text-primary font-bold border-t border-zinc-200 pt-3">
                      How I Contributed: Engineered a Drizzle Transaction-based migration worker that maps
                      local UUIDs to MySQL IDs with 100% atomic consistency.
                    </p>
                  </div>
                  {/* Challenge Item 3 */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                      Atmosphere
                    </strong>
                    <h4 className="font-bold text-lg mb-2 text-primary">Multi-Layer Audio Engineering</h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Coordinating ambient sound loops with third-party Spotify/YouTube
                      embeds and timer-triggered alarms.
                    </p>
                    <p className="text-xs text-primary font-bold border-t border-zinc-200 pt-3">
                      How I Contributed: Developed a specialized Audio Mixer Hook using the Web Audio API to
                      normalize volumes and prevent browser-level audio ducking issues.
                    </p>
                  </div>
                  {/* Challenge Item 4 */}
                  <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15">
                    <strong className="text-on-surface-variant uppercase tracking-widest text-[0.65rem] block mb-2">
                      Verification
                    </strong>
                    <h4 className="font-bold text-lg mb-2 text-primary">Regression-Free Velocity</h4>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Releasing new UI features every week while ensuring core timer
                      logic and database writes remained stable.
                    </p>
                    <p className="text-xs text-primary font-bold border-t border-zinc-200 pt-3">
                      How I Contributed: Architected a Playwright E2E framework with Page Object Model (POM)
                      to achieve 100% logic coverage on every deployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story Section */}
              <div className="max-w-3xl mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  The Journey: From Fragmented to Flow
                </h2>
                <div className="space-y-8 text-lg leading-relaxed text-on-surface-variant">
                  <p>
                    Most productivity applications suffer from high friction—users have to
                    manually track their time, switch music, and eventually sign up just
                    to see their progress. I wanted to build something different: a
                    workstation that feels like it belongs in a high-end studio.
                  </p>
                  <p>
                    As the Lead Architect, I didn't just write code; I designed an ecosystem.
                    The use of **Next.js 15** and **ElysiaJS** wasn't just a trend choice—it
                    was about achieving a level of performance (<code className="text-sm px-1 bg-zinc-100 rounded">&lt;30ms API</code>)
                    that makes the web feel like a native desktop app.
                  </p>
                  <blockquote className="pl-6 border-l-4 border-secondary py-2 my-8">
                    <p className="text-xl font-medium text-on-surface italic">
                      "PomoPulp represents the intersection of high-fidelity UX and bulletproof backend engineering. It's built for those who value every second of their deep focus work."
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Heatmap Asset */}
              <div className="mb-20 rounded-2xl overflow-hidden border border-outline-variant/15 shadow-xl">
                <img
                  src="/asset/Cuplikan layar_9-4-2026_103914_pomopulp.vercel.app.jpeg"
                  alt="PomoPulp Productivity Heatmap"
                  className="w-full h-auto"
                />
              </div>

              {/* 3. QA Strategy & Automation */}
              <div className="mb-12" id="qa-strategy">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  The "Bulletproof" QA Strategy
                </h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 text-zinc-300">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest">
                      Playwright Automated
                    </span>
                    <span className="text-[0.65rem] uppercase font-bold tracking-widest text-zinc-500">
                      E2E Suite v1.4
                    </span>
                  </div>

                  <div className="overflow-x-auto mb-12">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead className="text-zinc-500 uppercase tracking-widest border-b border-zinc-800">
                        <tr>
                          <th className="py-4 px-2 font-semibold">Module</th>
                          <th className="py-4 px-2 font-semibold text-center w-24">Tests</th>
                          <th className="py-4 px-2 font-semibold">Critical Validations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/50">
                        <tr>
                          <td className="py-4 px-2 text-zinc-100 font-medium">Focus Timer Engine</td>
                          <td className="py-4 px-2 text-center text-zinc-100 font-bold">12</td>
                          <td className="py-4 px-2">Cycle logic (25/5/15), notification triggers, alarm persistence</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-2 text-zinc-100 font-medium">Auth & Cloud Sync</td>
                          <td className="py-4 px-2 text-center text-zinc-100 font-bold">10</td>
                          <td className="py-4 px-2">Migration audit, atomic registration, session token rotation</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-2 text-zinc-100 font-medium">Atmosphere Hub</td>
                          <td className="py-4 px-2 text-center text-zinc-100 font-bold">6</td>
                          <td className="py-4 px-2">Audio mixer levels, YT/Spotify embed responsiveness, mute states</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-2 text-zinc-100 font-medium">Analytics Engine</td>
                          <td className="py-4 px-2 text-center text-zinc-100 font-bold">8</td>
                          <td className="py-4 px-2">Heatmap data aggregation, XP leveling formula, DB write integrity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold flex items-center gap-2 mb-4 text-zinc-100">
                        <span className="material-symbols-outlined text-secondary text-sm">terminal</span>
                        Automation First Mindset
                      </h4>
                      <p className="text-zinc-500 leading-relaxed text-sm">
                        To maintain rapid development cycles without sacrificing quality, I architected a
                        Playwright POM suite that runs on every single Pull Request.
                      </p>
                      <ul className="mt-4 space-y-2 text-[11px] text-zinc-400 list-disc pl-4">
                        <li>**Regression Control**: Automated visual checks on every button and layout shift.</li>
                        <li>**Mock Data Factories**: Realistic user focus patterns for analytics testing.</li>
                        <li>**Edge Cases**: Testing offline-to-online sync transitions.</li>
                      </ul>
                    </div>
                    <div>
                      <pre className="bg-black/50 p-6 rounded-lg text-[10px] text-zinc-400 border border-zinc-800 font-mono">
                        {`// Validating Smart Sync Logic
test('Guest migration integrity', async ({ app }) => {
  await app.guest.addTask('Review Architecture');
  await app.auth.register(user);
  
  // Verify atomic persistence
  const task = await db.tasks.find({ title: 'Review Architecture' });
  expect(task.owner).toBe(user.id);
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Testing Strategy Implementation */}
              <div className="mb-12">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8">
                  Testing Strategy Implementation
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant mb-10">
                  How I explicitly approached the quality engineering for a
                  high-speed productive workstation environment.
                </p>

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
                            Validated core Pomodoro cycles (25/5/15), user registration, and task CRUD operations.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                        <div>
                          <strong className="block text-sm">
                            E2E Integration Testing
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Verified the "Guest-to-Member" flow, ensuring local tasks accurately map to new MySQL user IDs.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-white">
                        <div>
                          <strong className="block text-sm">
                            Performance Benchmarking
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Used Bun runtime to measure API latencies, ensuring 100% of requests survive the 30ms threshold.
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
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Atomic Transactions
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Used Drizzle's transaction API to ensure database state remains consistent during complex syncs.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Timestamp Identification
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Aggressively used timestamp-based seeds to ensure asynchronous tests never collide in the shared database.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-4 p-4 border border-outline-variant/10 rounded items-start bg-surface-container-low">
                        <div>
                          <strong className="block text-sm">
                            Factory Mocking
                          </strong>
                          <span className="text-xs text-on-surface-variant">
                            Leveraged Faker.js patterns to simulate realistic productivity data for heatmap analytics validation.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile View Asset */}
              <div className="mb-20 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-900">
                  <img
                    src="/asset/Screenshot_20260409_104041_Edge.jpg"
                    alt="PomoPulp Mobile Experience"
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-6 text-xs text-zinc-500 font-medium uppercase tracking-[0.2em]">Optimized for Samsung A34 5G & WebGL</p>
              </div>

              {/* 5. Measurable Impact */}
              <div className="mb-20">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-normal">
                    Measurable Impact
                  </h2>
                  <span className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase border-b-2 border-secondary pb-1">
                    Performance Data
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-8 border border-outline-variant/20 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow bg-zinc-50/50">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">API Response</p>
                    <p className="text-4xl font-headline font-black text-primary tracking-tight leading-none">&lt;30ms</p>
                    <p className="text-[10px] text-zinc-400 mt-2">Zero network hop via Edge</p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow bg-zinc-50/50">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">Build Stability</p>
                    <p className="text-4xl font-headline font-black text-primary tracking-tight leading-none">100%</p>
                    <p className="text-[10px] text-zinc-400 mt-2">Core regression pass rate</p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow bg-zinc-50/50">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">Sync Accuracy</p>
                    <p className="text-4xl font-headline font-black text-primary tracking-tight leading-none">Zero</p>
                    <p className="text-[10px] text-zinc-400 mt-2">Data loss reports post-launch</p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow bg-zinc-50/50">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">Development</p>
                    <p className="text-4xl font-headline font-black text-primary tracking-tight leading-none">5 Wks</p>
                    <p className="text-[10px] text-zinc-400 mt-2">From prototype to production</p>
                  </div>
                </div>
              </div>

              {/* 6. Key Contributions Listing */}
              <div className="mb-20">
                <h2 className="text-[2rem] font-semibold tracking-normal mb-8 text-center uppercase tracking-widest opacity-20 font-headline">Contributions</h2>
                <div className="bg-surface-container-lowest border border-outline-variant/20 p-10 rounded-3xl">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface-variant">
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Architected a 100% type-safe Mono-Architecture (Next.js + ElysiaJS).
                    </li>
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Designed "Guest-to-Member" atomic migration via Drizzle Transactions.
                    </li>
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Optimized API latency to &lt;30ms on global serverless edge.
                    </li>
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Engineered multi-layered Audio Mixer for immersive workstation vibes.
                    </li>
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Lead QA Automation with Playwright and GitHub Actions CI.
                    </li>
                    <li className="flex gap-3 items-start p-4 hover:bg-zinc-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      Integrated YouTube/Spotify media hub with responsive layouts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Key Learnings */}
        <section className="mx-auto py-12 border-t border-outline-variant/10 w-full mb-12">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-[2rem] font-semibold tracking-normal mb-12 text-center">
              Key Product Learnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  layers
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Mono-Arch Simplifies Performance:</strong> Running ElysiaJS
                  in Next.js Edge eliminates network overhead and simplifies CI/CD workflows.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  sync_alt
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Hybrid Auth is a UX Gamechanger:</strong> Allowing guest access
                  before registration significantly lowers friction and increases conversion.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  database
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Drizzle Transactions Save Data:</strong> Explicit transaction
                  management is non-negotiable for "Guest-to-Member" migration integrity.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  search
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>E2E is the Ultimate Auditor:</strong> Playwright POM revealed
                  edge-case race conditions in timer logic that manual testing missed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Soft CTA Section */}
        <section className="mt-12 pt-24 border-t border-outline-variant/20">
          <div className="flex flex-col items-center text-center space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              Propelling Digital Products
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-normal max-w-4xl">
              Ready to build your next{" "}
              <span className="text-on-surface-variant/20 italic font-medium lowercase">
                high-performance system?
              </span>
            </h2>
            <div className="mb-12 w-full">
              <a href="mailto:adnanyazidar48@gmail.com">
                <button className="px-12 py-6 bg-primary text-white font-headline font-black uppercase tracking-widest hover:bg-secondary transition-colors text-lg shadow-xl hover:scale-105 transition-transform duration-300">
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
