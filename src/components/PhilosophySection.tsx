export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 xl:py-40 px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white relative">
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-8">
            Philosophy
          </h2>
          <blockquote className="font-body text-xl lg:text-2xl text-zinc-600 italic leading-relaxed border-l-2 border-secondary pl-6">
            &quot;Quality is not a final step &mdash; it&apos;s built from the start.&quot;
          </blockquote>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group border-l border-zinc-200 pl-8 py-2">
              <h4 className="font-headline font-bold text-lg mb-4">
                My Approach to Quality
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                I focus on catching issues early by integrating testing into the development process. Quality isn’t an afterthought — it’s built step by step.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Automated testing integrated early
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Clean, maintainable test suites
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">
                    Performance and reliability awareness
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-surface-container-low p-10 flex flex-col justify-between">
            <div>
              <span className="font-label text-[10px] tracking-widest text-zinc-400 uppercase mb-4 block">
                About Me
              </span>
              <p className="font-body text-zinc-600 leading-relaxed mb-8">
                I’m Adnan, a QA Automation Engineer with a passion for building reliable testing systems. I combine technical testing with a front-end perspective to ensure that what works under the hood also feels right to the user.
              </p>
            </div>
            <div className="border-t border-zinc-200 pt-8">
              <div className="flex items-center gap-2 font-mono text-sm font-bold">
                <span>QA</span>
                <span className="text-zinc-400">·</span>
                <span>Front-end</span>
                <span className="text-zinc-400">·</span>
                <span>UX Awareness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
