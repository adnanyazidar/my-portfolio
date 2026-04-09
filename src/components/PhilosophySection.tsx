import QAApproachSection from "./QAApproachSection";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white relative"
    >
      <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-16 lg:gap-24">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-8">
              Philosophy
            </h2>
            <blockquote className="font-body text-xl lg:text-2xl text-zinc-600 italic leading-relaxed border-l-2 border-secondary pl-6">
              &quot;Quality is not a final step &mdash; it&apos;s built from the
              start.&quot;
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="group border-l border-zinc-200 pl-8 py-2">
              <h4 className="font-headline font-bold text-lg leading-tight tracking-tight mb-6">
                My Approach to Quality
              </h4>
              <p className="text-on-surface-variant leading-relaxed max-w-[560px] mb-6">
                I focus on building quality step by step, starting from simple
                and maintainable tests.
              </p>
              <p className="text-on-surface-variant leading-relaxed max-w-[560px]">
                As I grow, I continue learning how to improve test coverage,
                reduce repetitive manual work, and make testing more efficient.
              </p>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Build automated tests for repetitive scenarios
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Keep tests simple, readable, and maintainable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Focus on catching real issues that impact users
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: About Me */}
        <div className="bg-surface-container-low p-10 lg:p-16 w-full">
          <div>
            <span className="font-label text-[10px] tracking-widest text-zinc-400 uppercase mb-8 block">
              About Me
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-body text-zinc-600 leading-relaxed max-w-[560px] mb-6">
                  I test like a user, but think like a developer. With 1+ year of
                  experience building interfaces at CIMB Niaga, I don&apos;t just
                  find bugs &mdash; I understand why they happen.
                </p>
                <p className="font-body text-zinc-600 leading-relaxed max-w-[560px] mb-6">
                  I’m now focusing my frontend expertise into building reliable
                  automation frameworks using Playwright.
                </p>
              </div>
              <div>
                <p className="font-body text-zinc-600 leading-relaxed max-w-[560px] mb-6">
                  My goal is to grow into an engineer who not only tests
                  features, but also contributes to building better and more
                  reliable systems.
                </p>
                <p className="font-body text-zinc-600 leading-relaxed max-w-[560px] mb-6">
                  <span className="font-bold text-black uppercase text-xs tracking-widest block mb-2">
                    Expanding My Toolkit:
                  </span>
                  I’m currently deep-diving into Advanced API Testing and CI/CD
                  Pipeline Integration to further streamline the release
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QAApproachSection />
    </section>
  );
}
