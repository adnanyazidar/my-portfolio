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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          {/* FIXED: Added flex flex-col for equal bottom alignment */}
          <div className="space-y-6 group cursor-pointer flex flex-col">
            <a href="/case-studies/freshtoria" className="bg-surface-container-highest aspect-[16/10] overflow-hidden block">
              <img
                alt="Financial Dashboard UI"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Sleek financial interface on a laptop screen with dark mode aesthetic and blue data visualizations in a minimal studio setting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KI3dMh1NJJPX-cwlWrIHjzkWADCesI3kbtJ8bQByLBKd1yH9s70s8e8-8ZilRqkVsd3ccdIQvXJbBmWkI3njP3lJX8C9OMNOwkJZMR8vfiSGcLN1LH6hybRwTkjTdi9lDmty9vnQCa2tD2Q0h00Nu2gidPtCeFurHa6WPStWv0G4ZKdXV2gztFeBfwEdqOxw2o43ruPqS4nmWGe1DmWWt69EIGX5KkHUlZOikUoHjSFDORRVISz_Cqy9u797As7aIvH0tPl8q3o"
              />
            </a>
            <div className="space-y-6">
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-0">
                <h4 className="font-headline font-bold text-2xl tracking-tight leading-tight">
                  Freshtoria Dashboard
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest">
                  QA Automation Contributor
                </span>
              </div>
              {/* FIXED: Removed border-t border-zinc-200 divider line, replaced with pt-8 spacing (DESIGN.md §2.3 No-Line Rule) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div>
                  {/* FIXED: Increased label from text-[10px] text-zinc-400 mb-1 → text-[11px] text-zinc-500 mb-2 for better contrast */}
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Challenge
                  </span>
                  {/* FIXED: Increased body from text-xs → text-sm leading-relaxed for readability */}
                  <p className="text-sm font-medium leading-relaxed">
                    The development team does not yet have automated testing for
                    the financial accounting and inventory features. Changes to
                    these features often cause regressions that aren't detected
                    until after deployment.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Action
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    I automated the key regression scenarios using Playwright
                    and integrated them into GitHub Actions.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    Testing became more efficient, and the team received
                    feedback faster before deployment.
                  </p>
                </div>
              </div>
              {/* View Detail Button */}
              {/* FIXED: Added mt-auto to push CTA to consistent baseline across cards */}
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
          {/* Project 2 */}
          {/* FIXED: Added flex flex-col for equal bottom alignment */}
          <div className="space-y-6 group cursor-pointer flex flex-col">
            <a href="/case-studies/roomcraft" className="bg-surface-container-highest aspect-[16/10] overflow-hidden block">
              <img
                alt="Data Visualization"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Abstract data visualization on a tablet screen with colorful graphs and charts, shot with shallow depth of field on a clean white desk."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBinFM2GxLHY6vQGdUWpSI8LeRWZG56S01_qkOIV6fWW937Qbra8df09UEkTnd1eJ4_KdGQFNE9op1JWY5JZxVK3OXwlKqbzWGvSkIcRM-xsHkpZaepK2vfaVxuCqe-MOKahxiPI0WXNxiaLEZO5YpHklpS6yBdkOSllAgD0x_TGf4q3ZwAaWPFFnINUbh-_uF-MVQ8gm9mZDId9-RmefOajYmAFfNg-vLjr2K3ypqSV156gAc4f0U_0crkfz7y_EYfIYw6Sx0nuIg"
              />
            </a>
            <div className="space-y-6">
              <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-0">
                <h4 className="font-headline font-bold text-2xl tracking-tight leading-tight">
                  RoomCraft
                </h4>
                <span className="text-[10px] w-fit bg-secondary/10 text-secondary px-3 py-1 font-bold uppercase tracking-widest">
                  QA Manual & Front End Developer
                </span>
              </div>
              {/* FIXED: Removed border-t border-zinc-200 divider line, replaced with pt-8 spacing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Challenge
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    I want to build an interactive and responsive 3D app for
                    interior design, while also learning how to implement
                    testing in modern apps.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Action
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    In addition to contributing to the development of the user
                    interface, I created test cases for various scenarios,
                    conducted exploratory testing, and documented bugs in
                    detail.
                  </p>
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-500 uppercase font-bold mb-2">
                    Result
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    I successfully identified various bugs prior to the project
                    presentation and improved the stability and quality of the
                    application's user interface.
                  </p>
                </div>
              </div>
              {/* View Detail Button */}
              {/* FIXED: Added mt-auto to push CTA to consistent baseline */}
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
        </div>
      </div>
    </section>
  );
}
