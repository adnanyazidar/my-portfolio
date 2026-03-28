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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* QA Automation */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
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
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Playwright{" "}
                    (Intermediate)
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    Cypress{" "} (Beginner)
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    Selenium{" "}
                    (Beginner)
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Building automated test scenarios and reducing manual testing
                </p>
              </div>
            </div>
          </div>
          {/* API Testing */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
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
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    Postman {" "}(Intermediate)<span className="text-[9px] opacity-50 ml-1"></span>
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400">
                    REST API Testing{" "}(Beginner)<span className="text-[9px] opacity-50 ml-1"></span>
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Understanding API behavior and validating responses
                </p>
              </div>
            </div>
          </div>
          {/* Front-End */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
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
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      HTML/CSS/JS{" "}
                      <span className="text-[9px] opacity-50 ml-1"></span>
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      React {" "}(Intermediate)<span className="text-[9px] opacity-50 ml-1"></span>
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200 w-fit">
                      Tailwind{" "}
                      <span className="text-[9px] opacity-50 ml-1"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Building responsive UI and understanding user experience
                </p>
              </div>
            </div>
          </div>
          {/* CI/CD */}
          <div className="bg-white p-8 md:p-10 flex flex-col h-full border border-zinc-100">
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
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-100 border border-zinc-200">
                    GitHub Actions{" "} (Basic)
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6">
                  Focus
                </span>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  Learning automated test execution and simple
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
