export default function ProjectArchiveHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
      <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase text-primary leading-none">
        Project<br /><span className="text-secondary">Archive.</span>
      </h1>
      <div className="max-w-md">
        <p className="text-lg text-on-surface-variant font-body leading-relaxed">
          A collection of projects where I contributed to quality, front-end, and user experience.
        </p>
      </div>
    </div>
  );
}
