export default function TechStackSection() {
  return (
    <section
      id="expertise"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100 border-t border-zinc-100"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="mb-12">
          <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-6">
            Stack
          </h2>
          <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            Technology Profile
          </h3>
          <h4 className="font-headline font-normal text-sm md:text-base text-zinc-400 tracking-normal max-w-[560px] leading-relaxed">
            Here are the tools and technologies I currently use and learn.
          </h4>
          {/* FIXED: Added visual legend for skill level encoding — replaces parenthetical labels
              like "(Beginner)", "(Learning)" which were self-undermining in a portfolio context */}
          <div className="flex items-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-[2px] bg-primary"></span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">In Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-[2px] bg-zinc-300"></span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Exploring</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Manual Testing */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">
                fact_check
              </span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                Manual Testing
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Core Skills
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Manual Testing
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Bug Reporting
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Test Case Design
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Helping teams catch real user issues before release through exploratory and structured testing
                </p>
              </div>
            </div>
          </div>

          {/* QA Automation */}
          {/* FIXED: Changed invisible border border-zinc-100 → Ghost Border pattern border-outline-variant/15
              per DESIGN.md §4.3 — border was same color as bg, providing zero visual differentiation */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">
                verified_user
              </span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                QA Automation
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Tools
                </span>
                {/* FIXED: Standardized to flex flex-wrap gap-2 (was already correct here) */}
                <div className="flex flex-wrap gap-2">
                  <a href="/case-studies/freshtoria#technical-deep-dive" className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 hover:bg-primary hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 underline decoration-secondary/30 underline-offset-2">
                    Playwright
                    <span className="material-symbols-outlined !text-[10px]">arrow_outward</span>
                  </a>

                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    JavaScript / TypeScript
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Building automated regression tests and reducing repetitive manual testing
                </p>
              </div>
            </div>
          </div>
          {/* API Testing */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">
                api
              </span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                API Testing
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {/* FIXED: Removed "(Intermediate)" label; added interactive chip affordance */}
                  <a href="/case-studies/freshtoria#api-testing-section" className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 hover:bg-primary hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 underline decoration-secondary/30 underline-offset-2">
                    Postman
                    <span className="material-symbols-outlined !text-[10px]">arrow_outward</span>
                  </a>
                  {/* FIXED: Removed "(Beginner)" label and empty inner span */}
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    REST API Testing
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Validating API responses and ensuring reliable backend integration
                </p>
              </div>
            </div>
          </div>
          {/* Front-End */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">
                code
              </span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                Front-End
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Tools
                </span>
                {/* FIXED: Standardized chip layout from flex-col gap-3 nesting → flex flex-wrap gap-2
                    to match all other cards (was previously inconsistent with QA/API/CI cards) */}
                <div className="flex flex-wrap gap-2">
                  {/* FIXED: Removed empty inner spans and "(Intermediate)" label */}
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    JavaScript / TypeScript
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    React
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Understanding UI behavior to create better end-to-end and visual tests
                </p>
              </div>
            </div>
          </div>
          {/* CI/CD */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-outline-variant/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">
                settings_suggest
              </span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                CI/CD
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {/* FIXED: Removed "(Basic)" label */}
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    GitHub Actions
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                {/* FIXED: Completed truncated sentence — was "and simple" (cut off mid-thought) */}
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Integrating automated tests into CI pipelines using GitHub Actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
