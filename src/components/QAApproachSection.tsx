import React from "react";

export default function QAApproachSection() {
  return (
    <section className="py-24 border-t border-outline-variant/10 text-center bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-6">
          lightbulb
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6 text-on-surface">
          Explore My QA Approach
        </h2>
        <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
          How I think about testing, automation, collaboration, and building reliable software.
        </p>
        <a
          href="/about"
          className="inline-flex items-center justify-center bg-primary text-white hover:bg-secondary border border-transparent px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors shadow-sm text-sm group"
        >
          View My QA Approach <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
