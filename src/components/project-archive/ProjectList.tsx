"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const CATEGORIES = [
  "All Projects",
  "QA Automation",
  "Front-End",
  "UI/UX",
] as const;

const projects: Project[] = [
  {
    roleDesc: "QA Automation Contributor | 2026",
    category: "QA Automation",
    title: "Freshtoria Dashboard",
    tech: "Playwright, JavaScript, GitHub Actions",
    problem:
      "The development team does not yet have automated testing for the financial accounting and inventory features. Changes to these features often cause regressions that aren’t detected until after deployment.",
    myRole: [
      "Build an end-to-end test suite using Cypress for critical workflows: login, add inventory, edit financial data, and delete data.",
      "Write test scenarios that include input validation and verification of results.",
      "Integrate the tests into GitHub Actions so they run automatically whenever a pull request is created.",
    ],
    result: [
      "The team receives early notification if there is a regression.",
      "The time spent on manual regression testing has been reduced, giving the team greater confidence in new releases.",
    ],
    caseStudyHref: "#",
    demoHref: "#",
    // sourceHref: "#",
  },
  {
    roleDesc: "Front-end Developer & QA Enthusiast | 2024",
    category: "Personal Project",
    title: "RoomCraft",
    tech: "React, Tailwind CSS, Redux, React Three Fiber, Firebase",
    problem:
      "I want to build an interactive and responsive 3D app for interior design, while also learning how to implement testing in modern applications.",
    myRole: [
      "Developing UI components with React and Tailwind CSS, as well as 3D integration using React Three.js.",
      "Writing simple tests with React Testing Library to ensure key components (furniture selection, position changes) function correctly.",
      "Conducting manual visual testing to ensure consistent 3D rendering across various devices.",
    ],
    result: [
      "The application runs stably in the development environment.",
      "I gained experience building a full-stack project with a focus on user-facing quality.",
      "This project serves as a portfolio piece demonstrating my interest in testing interactive applications.",
    ],
    caseStudyHref: "#",
    demoHref: "https://room-craft-three.vercel.app/",
    sourceHref: "#",
  },
  {
    roleDesc: "Front-end Contributor | 2024",
    category: "Front-End",
    title: "Arjuna (CIMB Niaga)",
    tech: "React, TypeScript, Redux Toolkit, Tailwind CSS",
    problem:
      "Arjuna is an internal portal for employees (HR, leave requests, payroll). When I joined, the team was overhauling the user interface of several modules to make them more responsive and align with the latest design standards.",
    myRole: [
      "Developing front-end components for the leave request and payroll information modules based on provided designs.",
      "Ensuring components can handle complex state (remaining leave, claim history) and integrate with the backend services.",
      "Collaborated with the QA, Backend, and UI/UX teams and assisted with manual testing verification prior to release.",
    ],
    result: [
      "Modules for leave, payslips, training, facility bookings, employee performance, and more can be used by thousands of employees with a more consistent interface.",
      "I learned to work in a large team with strict coding standards and review processes.",
    ],
    demoHref: "https://arjuna.cimbniaga.co.id/auth/sign-in",
  },
  {
    roleDesc: "UI/UX Design Contributor | 2022",
    category: "UI/UX",
    title: "SurveyAsia (PT Citiasia Internasional)",
    tech: "Figma, Design system, Prototyping",
    problem:
      "The survey platform has a simple and less-than-intuitive interface, especially for non-technical users. Some features, such as questionnaire creation and result visualization, are difficult to navigate.",
    myRole: [
      "Analyzed user flows based on feedback from the product team and early users.",
      "Redesigned the interface for the survey creation page, respondent management, and results dashboard.",
      "Creating interactive prototypes in Figma for internal testing before development.",
    ],
    result: [
      "The new design was approved by the product team and served as the basis for front-end development.",
      "I learned the collaborative process between design, development, and product in a real-world work environment.",
      "I gained a deeper understanding of the importance of user-friendly design for data applications.",
    ],
    caseStudyHref: "#",
    demoHref: "https://surveyasia.id/",
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
      <div className="mb-24">
        {/* Filters Section */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-black/10 pb-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-headline font-bold text-xs uppercase tracking-widest">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={
                  activeFilter === cat
                    ? "relative text-primary after:content-[''] after:absolute after:-bottom-[33px] after:left-0 after:w-full after:h-0.5 after:bg-secondary cursor-pointer"
                    : "text-on-surface-variant opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                }
              >
                {cat}
              </button>
            ))}
          </div>
          {/* <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-40">
            Index Vol. 24.1
          </div> */}
        </section>
      </div>

      {/* Project List: Updated Structured High-Density Layout */}
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
