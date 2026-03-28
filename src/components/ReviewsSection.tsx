const testimonials = [
  {
    quote:
      "Adnan significantly improved our product quality and reduced critical bugs before release. His framework is now our standard.",
    role: "Lead Engineer",
    company: "Fortune 500 Enterprise",
  },
  {
    quote: [
      "I am pleased to recommend Adnan Yazid Ardiansyah as an application developer, as he possesses excellent technical skills in various programming languages and technologies, and consistently delivers efficient, innovative solutions through his experience in building responsive and scalable applications.",
    ],
    role: "Jenny Hutasoit",
    company: "Senior Software Test Engineer at CIMB Niaga",
  },
  {
    quote:
      "The ROI on his automation strategy was immediate. We went from manual weekly releases to daily deployments with total confidence.",
    role: "CTO",
    company: "FinTech Global",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 flex flex-col items-center">
          {/* <span className="font-label text-[0.6875rem] tracking-[0.3em] uppercase text-secondary font-bold mb-4">
            05 / Perspective
          </span> */}
          <h2 className="font-headline text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-primary uppercase text-center tracking-tight leading-tight">
            Voices of Impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.role} className="relative flex flex-col">
              <div className="font-headline text-[4rem] md:text-[6rem] leading-none absolute -top-8 md:-top-12 -left-4 text-primary/5 select-none pointer-events-none">
                &ldquo;
              </div>
              <div className="flex flex-col h-full space-y-6 md:space-y-8">
                <p className="font-headline text-sm md:text-base xl:text-lg font-bold leading-relaxed text-primary relative z-10 max-w-[560px]">
                  {t.quote}
                </p>
                <div className="pt-8 border-t border-primary/10 mt-auto">
                  <p className="font-headline text-[0.6875rem] uppercase font-extrabold tracking-[0.2em] text-primary">
                    {t.role}
                  </p>
                  <p className="font-body text-[0.625rem] text-on-surface-variant uppercase tracking-[0.1em] mt-6">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
