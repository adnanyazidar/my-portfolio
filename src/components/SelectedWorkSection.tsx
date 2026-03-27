export default function SelectedWorkSection() {
  return (
    <section id="case-studies" className="pb-24 md:pb-32 xl:pb-40 pt-12 md:pt-16 px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              Selected Work
            </h2>
            <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tighter">
              Case Studies
            </h3>
          </div>
          <a className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1 flex items-center gap-2 group mb-2 w-fit" href="/project-archive">
            View All <span className="material-symbols-outlined !text-[1rem] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="space-y-6 group cursor-pointer">
            <div className="bg-surface-container-highest aspect-[16/10] overflow-hidden">
              <img
                alt="Financial Dashboard UI"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Sleek financial interface on a laptop screen with dark mode aesthetic and blue data visualizations in a minimal studio setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KI3dMh1NJJPX-cwlWrIHjzkWADCesI3kbtJ8bQByLBKd1yH9s70s8e8-8ZilRqkVsd3ccdIQvXJbBmWkI3njP3lJX8C9OMNOwkJZMR8vfiSGcLN1LH6hybRwTkjTdi9lDmty9vnQCa2tD2Q0h00Nu2gidPtCeFurHa6WPStWv0G4ZKdXV2gztFeBfwEdqOxw2o43ruPqS4nmWGe1DmWWt69EIGX5KkHUlZOikUoHjSFDORRVISz_Cqy9u797As7aIvH0tPl8q3o"
              />
            </div>
            <div className="space-y-4">
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-0">
                <h4 className="font-headline font-bold text-2xl">
                  Nexus FinTech Portal
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest">
                  QA Automation Contributor
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-200">
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Challenge
                  </span>
                  <p className="text-xs font-medium">
                    Frequent regressions in checkout flow were affecting conversion rates and requiring manual retesting.
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Action
                  </span>
                  <p className="text-xs font-medium">
                    Built and maintained a Playwright test suite covering 30+ critical user scenarios for checkout.
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Result
                  </span>
                  <p className="text-xs font-medium">
                    Reduced post-release checkout bugs by catching issues in CI/CD before deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="space-y-6 group cursor-pointer">
            <div className="bg-surface-container-highest aspect-[16/10] overflow-hidden">
              <img
                alt="Data Visualization"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Abstract data visualization on a tablet screen with colorful graphs and charts, shot with shallow depth of field on a clean white desk."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBinFM2GxLHY6vQGdUWpSI8LeRWZG56S01_qkOIV6fWW937Qbra8df09UEkTnd1eJ4_KdGQFNE9op1JWY5JZxVK3OXwlKqbzWGvSkIcRM-xsHkpZaepK2vfaVxuCqe-MOKahxiPI0WXNxiaLEZO5YpHklpS6yBdkOSllAgD0x_TGf4q3ZwAaWPFFnINUbh-_uF-MVQ8gm9mZDId9-RmefOajYmAFfNg-vLjr2K3ypqSV156gAc4f0U_0crkfz7y_EYfIYw6Sx0nuIg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-0">
                <h4 className="font-headline font-bold text-2xl">
                  Vortex Data Engine
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest">
                  Automation Shell
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-200">
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Problem
                  </span>
                  <p className="text-xs font-medium">
                    Manual validation of complex data tables causing delays in the CI/CD pipeline.
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Action
                  </span>
                  <p className="text-xs font-medium">
                    Integrated automated visual testing to detect UI discrepancies instantly.
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-400 uppercase font-bold mb-1">
                    Result
                  </span>
                  <p className="text-xs font-medium">
                    Improved release confidence by integrating automated UI validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
