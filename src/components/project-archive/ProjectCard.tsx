import Link from "next/link";

export interface Project {
  roleDesc: string;
  category: string;
  title: string;
  tech: string;
  problem: string;
  myRole: string | string[];
  result: string | string[];
  caseStudyHref?: string;
  demoHref?: string;
  sourceHref?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-12 py-16 border-b border-outline-variant/20 hover:bg-surface-container-lowest transition-colors px-4 -mx-4">
      <div className="lg:col-span-5 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-primary group-hover:text-secondary transition-colors">
          {project.caseStudyHref ? (
            <Link href={project.caseStudyHref}>
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h2>
        <p className="text-sm font-bold text-on-surface-variant/60 uppercase tracking-widest">
          {project.roleDesc}
        </p>
        <div className="pt-4 flex flex-wrap gap-6 font-label text-[10px] font-black uppercase tracking-widest">
          {project.caseStudyHref && (
            <Link
              className="flex items-center gap-1 hover:text-secondary transition-colors border-b border-black/10 pb-1"
              href={project.caseStudyHref}
            >
              Case Study <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </Link>
          )}
          {project.demoHref && (
            <a
              className="flex items-center gap-1 hover:text-secondary transition-colors border-b border-black/10 pb-1"
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          )}
          {project.sourceHref && (
            <a
              className="flex items-center gap-1 hover:text-secondary transition-colors border-b border-black/10 pb-1"
              href={project.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <span className="material-symbols-outlined text-[14px]">code</span>
            </a>
          )}
        </div>
      </div>
      <div className="lg:col-span-7 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Tech:</span>
          <p className="text-sm font-medium text-on-surface-variant">{project.tech}</p>
        </div>
        <div className="text-sm leading-relaxed text-on-surface-variant/80 space-y-6 max-w-[560px]">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Problem:</span>
            <p>{project.problem}</p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">My Role:</span>
            <div className="pl-4">
              {Array.isArray(project.myRole) ? (
                <ul className="list-disc space-y-1">
                  {project.myRole.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.myRole}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Result:</span>
            <div className="pl-4 font-bold text-primary">
              {Array.isArray(project.result) ? (
                <ul className="list-disc space-y-1">
                  {project.result.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.result}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
