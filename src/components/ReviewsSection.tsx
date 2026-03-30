const testimonials = [
  {
    quote: (
      <>
        I am pleased to recommend Adnan Yazid Ardiansyah as an application
        developer. He possesses <strong>excellent technical skills</strong> and
        consistently delivers efficient, innovative, and reliable solutions in
        building responsive and scalable applications.
      </>
    ),
    role: "Jenny Hutasoit",
    company: "Senior Software Test Engineer at CIMB Niaga",
  },
  {
    quote: (
      <>
        Adnan Yazid Ardiansyah is a <strong>detail-oriented</strong> and highly
        professional QA specialist. He adapts quickly from a front-end
        background, is communicative and collaborative, and is reliable when it
        comes to ensuring product quality.
      </>
    ),
    role: "Dio Aditia Pratama",
    company: "QA Test Coordinator at Bank Mandiri",
  },
  {
    quote: (
      <>
        Working with Adnan gives me real <strong>peace of mind</strong>. His
        Playwright QA automation is efficient, reliable, and helps detect bugs
        early while keeping release velocity high.
      </>
    ),
    role: "Kamal Saputra",
    company: "Owner Freshtoria",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* FIXED: Changed from center-aligned single h2 to left-aligned dual-tier label + title pattern
            matching SelectedWorkSection and TechStackSection (DESIGN.md §6 — Don't center-align) */}
        <div className="mb-12">
          <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-6">
            Perspective
          </h2>
          <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
            Voices of Impact.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            /* FIXED: Added group/card hover state with subtle background tint transition
               for interactivity (previously zero hover/transitions on this section).
               p-6 -m-6 trick maintains visual layout while creating a hover target area. */
            <div
              key={t.role}
              className="relative flex flex-col group/card p-6 -m-6 hover:bg-surface-container-low/50 transition-colors duration-500"
            >
              {/* FIXED: Increased decorative quotation mark opacity from primary/5 → primary/10
                  so it actually registers visually against white background */}
              <div className="font-headline text-[4rem] md:text-[6rem] leading-none absolute -top-2 md:-top-6 -left-4 text-primary/10 select-none pointer-events-none">
                &ldquo;
              </div>
              <div className="flex flex-col h-full space-y-6 md:space-y-8">
                {/* FIXED: Changed font-bold → font-medium (italic removed so text has a stronger visual anchor). */}
                <p className="font-body text-sm md:text-base xl:text-lg font-medium leading-relaxed text-primary relative z-10 max-w-[560px]">
                  {t.quote}
                </p>
                {/* FIXED: Removed border-t border-primary/10 divider line, replaced with pt-10 spacing
                    (DESIGN.md §5.3 — Forbid divider lines) */}
                <div className="pt-10 mt-auto">
                  <p className="font-headline text-[0.8125rem] uppercase font-extrabold tracking-[0.2em] text-primary">
                    {t.role}
                  </p>
                  <p className="font-body text-[0.6875rem] text-on-surface-variant uppercase tracking-[0.1em] mt-6">
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
