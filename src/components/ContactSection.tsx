export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-zinc-100"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="max-w-4xl flex flex-col items-center text-center mx-auto">
          {/* <span className="font-label text-[0.6875rem] tracking-[0.3em] uppercase text-secondary font-bold mb-8 inline-block">
            06 / Inquiry
          </span> */}
          <h2 className="font-headline text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-tight text-primary uppercase tracking-tight mb-12">
            Ready to make your product more reliable?
          </h2>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-medium mb-12 max-w-[600px] mx-auto">
            Let&apos;s discuss how I can help your team automate quality.
          </p>
          <div className="mb-12 w-full">
            <a
              className="font-headline text-[clamp(1.2rem,4vw,3rem)] font-extrabold text-primary hover:text-secondary transition-all duration-500 border-b-2 border-primary hover:border-secondary pb-2 md:pb-4 inline-block break-all"
              href="mailto:adnanyazidar48@gmail.com"
            >
              adnanyazidar48@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
