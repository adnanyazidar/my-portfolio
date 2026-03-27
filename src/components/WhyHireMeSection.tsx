export default function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="pt-24 md:pt-32 xl:pt-40 pb-12 md:pb-16 px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Why Hire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-8">
              Why Hire Me
            </h2>
            {/* <h3 className="font-headline font-extrabold text-4xl md:text-5xl mb-8 tracking-tighter">
              Built for Reliability.
            </h3> */}
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-12">
              I focus on writing tests that catch real issues, not just flaky coverage. My front-end background helps me understand what users actually care about, so my testing adds value to both developers and the final product.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">01</span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Efficiency
                  </h4>
                  <p className="text-sm text-zinc-500">
                    Automating critical user journeys to reduce repetitive manual testing.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">02</span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Clarity
                  </h4>
                  <p className="text-sm text-zinc-500">
                    Clear bug reports and documentation that help developers fix issues faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square bg-black relative">
            <img
              alt="Coding environment"
              className="w-full h-full object-cover opacity-60"
              data-alt="Close-up of a high-end monitor displaying clean code in a dark room with subtle blue ambient lighting and sharp focus."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgTRKaUaoEy5u1zwY4AbRmYa9W-6jArsWuJMstlkcyB0yd2Q7Cpts78BIm5h5pjokn2_AkrNUqUhnpgjZ-BVPgUNjiOYmruSZzi0-WaXNa8zZ5d6kg0Hx-Ef0r6bG688Ufl4bekH12NrbIWFzIiqlP3XCd7enZItEPSMOdTe6u63VrJvsA5T474Xd65EAGOPHEU7Oo5-yn86JAQMrB1LsGO20lt0hylDBn6rgClnzEsGLPBuZYfa0D2h5N9tkvch-Otoc-AQPzNLo"
            />
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white p-6 md:p-8 max-w-xs shadow-2xl">
              {/* <span className="font-headline font-black text-xl md:text-2xl block mb-2 text-black">
                Verified Coverage
              </span> */}
              <p className="text-[10px] text-black uppercase font-bold tracking-widest leading-relaxed">
                Shift left mindset – testing earlier, not harder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
