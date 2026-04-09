export default function SelectedWorkSection() {
  return (
    <section
      id="case-studies"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-6">
              Selected Work
            </h2>
            <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
              Case Studies
            </h3>
          </div>
          <a
            className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1 flex items-center gap-2 group mb-2 w-fit"
            href="/project-archive"
          >
            View All{" "}
            <span
              className="material-symbols-outlined !text-[1rem] group-hover:translate-x-1 transition-transform"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">

          {/* Project 2: Freshtoria */}
          <div className="space-y-6 group cursor-pointer flex flex-col">
            <a
              href="/case-studies/freshtoria"
              className="bg-surface-container-highest aspect-[16/10] overflow-hidden block"
            >
              <img
                alt="Financial Dashboard UI"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KI3dMh1NJJPX-cwlWrIHjzkWADCesI3kbtJ8bQByLBKd1yH9s70s8e8-8ZilRqkVsd3ccdIQvXJbBmWkI3njP3lJX8C9OMNOwkJZMR8vfiSGcLN1LH6hybRwTkjTdi9lDmty9vnQCa2tD2Q0h00Nu2gidPtCeFurHa6WPStWv0G4ZKdXV2gztFeBfwEdqOxw2o43ruPqS4nmWGe1DmWWt69EIGX5KkHUlZOikUoHjSFDORRVISz_Cqy9u797As7aIvH0tPl8q3o"
              />
            </a>
            <div className="space-y-6 flex-grow flex flex-col">
              <div className="flex flex-col gap-3">
                <h4 className="font-headline font-bold text-2xl tracking-tight leading-tight w-full xl:w-2/3">
                  Freshtoria Dashboard
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest shrink-0 mt-1">
                  QA Automation Contributor
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-4 flex-grow">
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Challenge
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    The team lacked automated testing for financial and inventory features, 
                    leading to undetected regressions in critical business logic.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Action
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Automated key regression scenarios using Playwright and integrated 
                    them into the CI/CD pipeline via GitHub Actions.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Dramatically faster feedback loops and improved deployment confidence 
                    through consistent, reliable automated validation.
                  </p>
                </div>
              </div>
              <div className="pt-2 mt-auto">
                <a
                  href="/case-studies/freshtoria"
                  className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors flex items-center gap-2 group/btn w-fit"
                >
                  View Detail
                  <span
                    className="material-symbols-outlined !text-[1rem] group-hover/btn:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: RoomCraft */}
          <div className="space-y-6 group cursor-pointer flex flex-col">
            <a
              href="/case-studies/roomcraft"
              className="bg-surface-container-highest aspect-[16/10] overflow-hidden block"
            >
              <img
                alt="Interior Design 3D App"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="../../asset/room.png"
              />
            </a>
            <div className="space-y-6 flex-grow flex flex-col">
              <div className="flex flex-col gap-3">
                <h4 className="font-headline font-bold text-2xl tracking-tight leading-tight w-full xl:w-2/3">
                  RoomCraft
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest shrink-0 mt-1">
                  QA Manual & Front End Developer
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-4 flex-grow">
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Challenge
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    The goal was to build an interactive 3D app for interior design while 
                    learning to implement high-quality testing in modern web apps.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Action
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Contributed to the UI development and created comprehensive test cases 
                    and exploratory testing strategies for 3D interactions.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Identified critical UI bugs before presentation and improved global 
                    stability and rendering quality across various devices.
                  </p>
                </div>
              </div>
              <div className="pt-2 mt-auto">
                <a
                  href="/case-studies/roomcraft"
                  className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors flex items-center gap-2 group/btn w-fit"
                >
                  View Detail
                  <span
                    className="material-symbols-outlined !text-[1rem] group-hover/btn:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="space-y-6 group cursor-pointer flex flex-col">
            <a
              href="/case-studies/portfolio-automation"
              className="bg-surface-container-highest aspect-[16/10] overflow-hidden block"
            >
              <img
                alt="Test Automation Dashboard Code"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Code editor showing Playwright E2E automation setup with test results and colorful syntax highlighting."
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              />
            </a>
            <div className="space-y-6 flex-grow flex flex-col">
              <div className="flex flex-col gap-3">
                <h4 className="font-headline font-bold text-2xl tracking-tight leading-tight w-full xl:w-2/3">
                  Portfolio Playwright E2E Automation
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest shrink-0 mt-1">
                  QA Automation Engineer
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-4 flex-grow">
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Challenge
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Personal portfolios require 100% uptime and visual
                    consistency across varying devices, yet manual checks easily
                    miss subtle CSS layout breakages.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Action
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Built a Playwright automation framework and applied Page
                    Object Model (POM) to map core layouts and visual targets.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-1">
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    100% coverage on critical anchor navigation, CTA downloads,
                    responsive states, and layout pixel-perfect visual
                    validation.
                  </p>
                </div>
              </div>
              <div className="pt-2 mt-auto">
                <a
                  href="/case-studies/portfolio-automation"
                  className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors flex items-center gap-2 group/btn w-fit"
                >
                  View Detail
                  <span
                    className="material-symbols-outlined !text-[1rem] group-hover/btn:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
