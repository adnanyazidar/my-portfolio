export interface Project {
  year: string;
  category: string;
  title: string;
  tags: string[];
  problem: string;
  action: string;
  impact: string;
  caseStudyHref?: string;
  demoHref?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid grid-cols-12 gap-8 py-12 border-b border-outline-variant/20 hover:bg-surface-container-lowest transition-colors px-4 -mx-4">
      {/* Left: Meta + Title + Tags */}
      <div className="col-span-12 lg:col-span-4 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-on-surface-variant opacity-60">
            {project.year}
          </span>
          <span className="h-px w-8 bg-outline-variant" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
            {project.category}
          </span>
        </div>
        <h3 className="text-4xl font-black uppercase tracking-tight leading-none group-hover:text-secondary transition-colors font-headline">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-surface-container text-[10px] font-bold uppercase tracking-tighter font-label"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Center: Problem + Action */}
      <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-6">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 font-label">
            Problem
          </h4>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 font-label">
            Action
          </h4>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            {project.action}
          </p>
        </div>
      </div>

      {/* Right: Impact + Links */}
      <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between items-start md:items-end">
        <div className="bg-secondary/5 border-l-2 border-secondary p-4 w-full md:w-auto md:min-w-[200px]">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1 font-label">
            Impact
          </h4>
          <p className="text-xl font-black text-primary leading-tight font-headline">
            {project.impact}
          </p>
        </div>
        <div className="flex gap-6 mt-8 md:mt-0 font-label text-[10px] font-black uppercase tracking-widest">
          <a
            className="flex items-center gap-2 hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1"
            href={project.caseStudyHref || "#"}
          >
            Case Study{" "}
            <span className="material-symbols-outlined !text-xs">
              arrow_outward
            </span>
          </a>
          <a
            className="flex items-center gap-2 hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1"
            href={project.demoHref || "#"}
          >
            Demo{" "}
            <span className="material-symbols-outlined !text-xs">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
