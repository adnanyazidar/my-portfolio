"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const CATEGORIES = [
  "All Projects",
  "QA Automation",
  "Front-End Architecture",
  "UI/UX Systems",
] as const;

const projects: Project[] = [
  {
    year: "2024",
    category: "Front-End Architecture",
    title: "E-Commerce Re-design",
    tags: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
    problem:
      "Fragmented legacy architecture causing significant layout shift and 3s+ interaction latency on high-traffic product pages.",
    action:
      "Engineered a headless commerce experience focused on 100ms interaction cycles and strict pixel-perfect typographic grids.",
    impact: "40% Increase in conversion via LCP optimization.",
  },
  {
    year: "2023",
    category: "QA Automation",
    title: "Modern SaaS Ecosystem",
    tags: ["Playwright", "TypeScript", "CI/CD", "Docker"],
    problem:
      "Manual regression testing cycle taking 48 hours per release, creating a bottleneck for continuous delivery.",
    action:
      "Implemented a custom end-to-end testing framework that reduced regression cycles through structural analysis and parallel execution.",
    impact: "84% Reduction in regression test duration.",
  },
  {
    year: "2023",
    category: "UI/UX Systems",
    title: "Structural UI Framework",
    tags: ["Storybook", "Figma API", "Tokens Studio"],
    problem:
      "Visual inconsistency and component duplication across 12 different financial sub-products.",
    action:
      "Developed a proprietary design system used by 50+ engineers to maintain visual and functional consistency via modular tokens.",
    impact: "Zero UI drift across 50+ engineer workflows.",
  },
  {
    year: "2023",
    category: "Front-End Architecture",
    title: "Banking Core Refactor",
    tags: ["TypeScript", "Zod", "Redux Toolkit"],
    problem:
      "Untyped legacy dashboard prone to runtime crashes and difficult-to-track data mutations.",
    action:
      "Deconstruction and re-architecting into a high-performance React application with strict TypeScript compliance and schema validation.",
    impact: "99.9% Type safety coverage across data flow.",
  },
];

export default function ProjectList() {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filters */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-outline-variant/30 pb-8 mb-1">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">
            Filter by Classification
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-headline font-bold text-lg">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={
                  activeFilter === cat
                    ? "relative text-primary after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-secondary cursor-pointer"
                    : "text-on-surface-variant opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-60 font-label">
          Index Vol. 24.1
        </div>
      </section>

      {/* Project Entries */}
      <section className="space-y-1">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-on-surface-variant text-lg font-body">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
