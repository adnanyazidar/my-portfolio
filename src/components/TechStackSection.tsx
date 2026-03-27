export default function TechStackSection() {
  return (
    <section id="expertise" className="py-24 md:py-32 xl:py-40 px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100 border-t border-zinc-100">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-4">
            Stack
          </h2>
          <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tighter mb-3">
            Technology Profile
          </h3>
          <h4 className="font-headline font-normal text-sm md:text-base text-zinc-400 tracking-normal">
            Tools I use daily and am currently building proficiency with.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* QA Automation */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                QA Automation
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Tools</span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Playwright <span className="text-[9px] opacity-50 ml-1">(active)</span>
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    Cypress <span className="text-[9px] opacity-50 ml-1">(familiar)</span>
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    Selenium <span className="text-[9px] opacity-50 ml-1">(basic)</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Focus</span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">E2E &middot; Integration &middot; Test suite development</p>
              </div>
            </div>
          </div>
          {/* API Testing */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">api</span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                API Testing
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Tools</span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Postman <span className="text-[9px] opacity-50 ml-1">(working)</span>
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    JMeter <span className="text-[9px] opacity-50 ml-1">(basic)</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Focus</span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">API testing &middot; Performance basics</p>
              </div>
            </div>
          </div>
          {/* Front-End */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">code</span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                Front-End
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Tools</span>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      HTML/CSS/JS <span className="text-[9px] opacity-50 ml-1">(active)</span>
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      React <span className="text-[9px] opacity-50 ml-1">(active)</span>
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      Tailwind <span className="text-[9px] opacity-50 ml-1">(working)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Focus</span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">UI validation &middot; Responsive design</p>
              </div>
            </div>
          </div>
          {/* CI/CD */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary text-2xl">settings_suggest</span>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-black">
                CI/CD
              </h4>
            </div>
            <div className="space-y-8 flex-grow">
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3">Tools</span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    GitHub Actions <span className="text-[9px] opacity-50 ml-1">(active)</span>
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    Jenkins <span className="text-[9px] opacity-50 ml-1">(basic)</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Focus</span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">CI integration &middot; Automated test execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
