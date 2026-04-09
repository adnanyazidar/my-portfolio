export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary blur-[120px] rounded-full -mr-64 -mt-64" />
      </div>

      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-6  mt-8">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-white/60">
              Hi, I'm Adnan.
            </span>
          </div>

          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-[1.1] mb-8 tracking-tight">
            QA Automation Engineer <br />
            <span className="text-secondary italic font-light">
              with Frontend DNA
            </span>
          </h1>

          <p className="font-body text-xl text-white/70 max-w-[600px] leading-relaxed mb-10">
            I leverage my background in Frontend development to build robust
            automated tests that catch real issues and ensure seamless user
            experiences.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/Adnan Yazid Ardiansyah - Junior Software Quality Assurance.pdf"
              download="Adnan Yazid Ardiansyah - Junior Software Quality Assurance.pdf"
              className="bg-secondary text-white px-10 py-5 font-headline font-bold tracking-widest uppercase text-[12px] hover:bg-secondary/80 transition-all shadow-xl"
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="/#contact"
              className="border border-white/20 text-white px-10 py-5 font-headline font-bold tracking-widest uppercase text-[12px] hover:bg-white/5 transition-all"
            >
              CONTACT ME
            </a>
            <a
              href="/#case-studies"
              className="font-headline font-bold tracking-widest uppercase text-[12px] text-white/40 hover:text-white transition-all underline underline-offset-8 decoration-secondary/40 hover:decoration-secondary"
            >
              VIEW MY PROJECTS
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 mt-12 lg:mt-0">
          <div className="bg-zinc-900 p-1 border border-zinc-800 shadow-2xl">
            <div className="bg-black p-6 font-mono text-sm leading-relaxed overflow-hidden">
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="text-zinc-500 text-[10px] ml-4 uppercase tracking-tighter">
                  Terminal &mdash; runner.sh
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>$ playwright test --project=chromium</span>
                </div>

                <div className="text-zinc-600">
                  Running 26 tests using 4 workers
                </div>

                <div className="flex items-center gap-4 py-2">
                  <span className="text-green-400">✔ Checkout Flow</span>
                  <span className="text-zinc-500 text-xs">0.4s</span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 mt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">
                      Passed
                    </span>
                    <span className="text-xl text-green-400 font-bold">24</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">
                      Failed
                    </span>
                    <span className="text-xl text-red-400 font-bold">2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase">
                      Coverage
                    </span>
                    <span className="text-xl text-secondary font-bold">
                      87%
                    </span>
                  </div>
                </div>

                <div className="pt-4 text-zinc-500 italic text-xs">
                  &gt; Report generated in 1.42ms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
