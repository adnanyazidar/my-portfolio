export default function WhyHireMeSection() {
  return (
    <section
      id="why-hire-me"
      className="py-[100px] md:py-[120px] px-6 md:px-12 xl:px-20 2xl:px-[120px] bg-white"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Why Hire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline font-bold text-sm uppercase tracking-[0.3em] text-secondary mb-8">
              Why Work With Me
            </h2>
            {/* <h3 className="font-headline font-extrabold text-4xl md:text-5xl mb-8 tracking-tighter">
              Built for Reliability.
            </h3> */}
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-[560px] mb-8">
              I focus on writing tests that help catch real issues
              and improve product quality from a user perspective.
            </p>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-[560px] mb-12">
              With my front-end background, I understand how users interact with products,
              so I aim to build tests that are not only technical but also meaningful.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">
                  01
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Attention to Detail
                  </h4>
                  <p className="text-sm text-zinc-500 max-w-[560px]">
                    I pay attention to small issues that can impact user experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">
                  02
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Clear communication
                  </h4>
                  <p className="text-sm text-zinc-500 max-w-[560px]">
                    I document my work clearly so it is easy to understand and collaborate.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">
                  03
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Fast learner
                  </h4>
                  <p className="text-sm text-zinc-500 max-w-[560px]">
                    I continuously learn new tools and improve my testing approach.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-headline font-bold text-secondary">
                  04
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-2">
                    Front‑end empathy
                  </h4>
                  <p className="text-sm text-zinc-500 max-w-[560px]">
                    I understand how UI works, helping me test more effectively.
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
