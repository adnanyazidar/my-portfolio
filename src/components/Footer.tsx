"use client";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 md:py-16 px-6 md:px-12 xl:px-20 2xl:px-[120px] border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 w-full max-w-[1920px] mx-auto">
        <p className="font-label text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-outline md:text-left text-center">
          © 2026 Adnan Labs <span className="mx-2 text-outline-variant/30">|</span> Jakarta, Indonesia
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/adnan-yazid-ardiansyah-a14800160/",
            },
            { label: "GitHub", href: "https://github.com/adnanyazidar" },
            { label: "Dribbble", href: "https://dribbble.com/AdnanArdiansyah" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[0.6875rem] tracking-[0.1em] uppercase font-medium text-outline hover:text-primary underline-offset-4 underline transition-all duration-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Adnan Yazid Ardiansyah - Junior Software Quality Assurance.pdf"
            download="Adnan Yazid Ardiansyah - Junior Software Quality Assurance.pdf"
            className="font-label text-[0.6875rem] tracking-[0.1em] uppercase font-bold text-secondary hover:text-primary underline-offset-4 underline transition-all duration-500"
          >
            Download Resume
          </a>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-label text-[0.6875rem] tracking-[0.1em] uppercase font-medium text-secondary underline-offset-4 underline transition-all duration-500 cursor-pointer hover:text-primary"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
