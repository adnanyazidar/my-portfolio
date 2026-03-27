export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 xl:py-40 px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          {/* <span className="font-label text-[0.6875rem] tracking-[0.3em] uppercase text-secondary font-bold mb-8 inline-block">
            06 / Inquiry
          </span> */}
          <h2 className="font-headline text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1] text-primary uppercase tracking-tighter mb-12">
            Let&apos;s Improve Your <br />Product Quality.
          </h2>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-medium mb-16 max-w-2xl mx-auto">
            I&apos;m open to remote QA automation roles and freelance projects.
          </p>
          <div className="mb-16 md:mb-24 w-full">
            <a
              className="font-headline text-[clamp(1.2rem,4vw,3rem)] font-extrabold text-primary hover:text-secondary transition-all duration-500 border-b-2 border-primary hover:border-secondary pb-2 md:pb-4 inline-block break-all"
              href="mailto:adnanyazidar48@gmail.com"
            >
              adnanyazidar48@gmail.com
            </a>
          </div>
          {/* <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-12 border-t border-outline-variant/20 justify-center w-full">
            <a
              className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/adnan-yazid-ardiansyah-a14800160/"
            >
              LinkedIn
            </a>
            <a
              className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/adnanyazidar"
            >
              GitHub
            </a>
            <a
              className="font-label text-[0.75rem] tracking-[0.2em] uppercase font-bold text-primary hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/AdnanArdiansyah"
            >
              Dribbble
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
