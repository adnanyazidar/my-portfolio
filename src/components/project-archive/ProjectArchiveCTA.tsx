export default function ProjectArchiveCTA() {
  return (
    <section className="mt-48 pt-32 border-t border-outline-variant/20">
      <div className="flex flex-col items-center text-center space-y-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
          The Next Foundation
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-4xl">
          Ready to build something{" "}
          <span className="text-on-surface-variant/20 italic font-medium">
            indestructible?
          </span>
        </h2>
        <div className="pt-8">
          <button className="px-12 py-6 bg-primary text-on-primary-container font-headline font-black uppercase tracking-[0.2em] hover:bg-secondary transition-colors text-lg">
            Initiate Collaboration
          </button>
        </div>
      </div>
    </section>
  );
}
