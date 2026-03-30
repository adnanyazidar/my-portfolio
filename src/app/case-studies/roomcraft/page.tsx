import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RoomCraft QA & Frontend — Adnan Labs",
  description:
    "Balancing high-performance 3D web experiences with functional correctness through rigorous manual testing and frontend development.",
};

export default function RoomCraftCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[1920px] mx-auto w-full">
        <a
          href="/#case-studies"
          className="text-sm font-label font-bold tracking-widest uppercase text-primary hover:text-secondary mb-12 inline-flex items-center gap-2 transition-colors"
        >
          <span
            className="material-symbols-outlined !text-[1rem]"
            data-icon="arrow_back"
          >
            arrow_back
          </span>
          Back to Portfolio
        </a>

        {/* 1. Hero (Impact First) */}
        <div className="mb-16">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tighter leading-tight mb-6">
            Ensuring Visual Perfection in RoomCraft: A 3D Interactive App
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-medium max-w-4xl leading-relaxed mb-10">
            Caught 15+ visual rendering and interaction bugs before the final
            prototype presentation through structured exploratory testing and
            precise bug reporting.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              QA Manual
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Frontend Development
            </span>
            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">
              React Three Fiber
            </span>
            <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">
              3-person team
            </span>
          </div>
          <div className="flex flex-wrap gap-4 sticky top-[80px] md:top-[96px] z-40 bg-zinc-50/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20 2xl:-mx-[120px] 2xl:px-[120px] shadow-sm transition-all duration-300">
            <a
              href="https://github.com/fauzan3596/room-craft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              View GitHub Repo
              <span
                className="material-symbols-outlined"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="https://room-craft-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Live Website
              <span className="material-symbols-outlined" data-icon="public">
                public
              </span>
            </a>
            <a
              href="/files/RoomCraft-QA-Report.pdf"
              download
              className="px-8 py-4 rounded-full font-bold tracking-wide text-primary border border-primary bg-white hover:bg-zinc-50 transition-colors flex items-center gap-2"
            >
              Download Document
              <span className="material-symbols-outlined" data-icon="download">
                download
              </span>
            </a>
          </div>
        </div>

        {/* Project Metadata & Challenges */}
        <section className="mx-auto py-20 border-t border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  About RoomCraft
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  RoomCraft is an ambitious web application designed to simplify
                  interior design through an immersive, real-time 3D experience
                  built with React and React Three Fiber.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-medium">1 Month</p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Team Composition
                  </p>
                  <p className="text-sm font-medium">
                    1 QA + FE, 1 Full Stack, 1 BE
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Stack
                  </p>
                  <p className="text-sm font-medium">
                    React, Redux, React Three Fiber, Firebase, Excel
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Testing Approach
                  </p>
                  <p className="text-sm font-medium">
                    Manual Exploratory, Cross-Platform
                  </p>
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-1">
                    Management
                  </p>
                  <p className="text-sm font-medium">Taiga, GitHub Projects</p>
                </div>
              </div>

              <div>
                <h4 className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase mb-6">
                  👤 My Role
                </h4>
                <ul className="text-sm leading-relaxed text-on-surface-variant space-y-2">
                  <li>• QA Manual &amp; Frontend Developer (dual role)</li>
                  <li>
                    • Built responsive UI components with React, Tailwind CSS,
                    and daisyUI
                  </li>
                  <li>• Owned end-to-end manual QA for 3D web application</li>
                  <li>• Designed &amp; executed exploratory test sessions</li>
                  <li>• Implemented state management with Redux Toolkit</li>
                  <li>
                    • Validated across 14+ devices &amp; documented 15+
                    visual/interaction bugs
                  </li>
                </ul>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="p-10 bg-surface-container-low rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      warning
                    </span>
                    Challenge
                  </h3>
                  <ul className="space-y-3 text-on-surface-variant text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <span>•</span> Zero automated regression testing in the
                      initial development phase
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Tight deployment cycles with frequent UI/3D
                      rendering inconsistencies
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Risk of defect leakage impacting user
                      experience in production
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> No formal test coverage for complex 3D
                      interactions and state management
                    </li>
                  </ul>
                </div>
                <div className="p-10 bg-surface-container rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      verified
                    </span>
                    Solution
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    As the sole QA Manual Tester, I stepped in to bridge the gap
                    between development and quality. With no existing test
                    automation, I took ownership of the end-to-end quality
                    assurance process—focusing on exploratory testing,
                    cross-platform validation, and precise bug reporting to
                    ensure a seamless, pixel-perfect user experience before
                    launch.
                  </p>
                </div>
              </div>

              {/* RoomCraft's story */}
              <div className="max-w-2xl mb-20">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-12">
                  RoomCraft&apos;s Story
                </h2>
                <div className="space-y-10 text-lg leading-[1.7] text-on-surface-variant">
                  <p>
                    RoomCraft began as an ambitious project to simplify interior
                    design through an immersive 3D experience. Built with React,
                    Redux, and React Three Fiber, the platform offered powerful
                    features—from furniture placement to real-time room
                    customization. However, ensuring visual perfection across
                    browsers, devices, and complex 3D interactions became a
                    critical challenge.
                  </p>
                  <p>
                    With a tight 1-month timeline and a small team of three —
                    one backend developer, one frontend developer, and myself
                    handling both QA and frontend — efficiency was critical.
                    There was no existing test automation, so I took ownership
                    of quality assurance while also contributing directly to the
                    frontend codebase. By building reusable UI components,
                    managing state with Redux Toolkit, and simultaneously
                    prioritizing high-risk areas of the 3D canvas through
                    focused exploratory testing, I helped the team intercept
                    critical rendering flaws before they ever reached end-users.
                  </p>
                </div>
              </div>

              {/* QA Strategy */}
              <div className="mb-20" id="qa-strategy">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">
                  Testing Strategy
                </h2>
                <div className="bg-surface-container-low border border-outline-variant/15 rounded-xl p-10">
                  <p className="text-lg leading-[1.7] text-on-surface-variant mb-10">
                    To ensure RoomCraft delivered a flawless 3D design
                    experience, I implemented a structured, user-centric QA
                    approach.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </div>
                      <h4 className="font-semibold text-on-surface">
                        Exploratory Testing
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Simulated real-world user journeys—from furniture
                        selection to 3D room customization—to uncover unexpected
                        visual glitches, interaction bugs, and edge cases in
                        high-complexity 3D scenes.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">
                          devices
                        </span>
                      </div>
                      <h4 className="font-semibold text-on-surface">
                        Cross-Platform Matrix
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Validated visual consistency and performance across 14+
                        browser and device combinations, including desktop,
                        tablet, and mobile views, ensuring the 3D environment
                        remained responsive and stable.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded text-secondary">
                        <span className="material-symbols-outlined">
                          description
                        </span>
                      </div>
                      <h4 className="font-semibold text-on-surface">
                        Bug Documentation
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Established a standardized bug reporting workflow,
                        providing clear reproduction steps, annotated
                        screenshots, and severity ratings to accelerate
                        developer triage and resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Technical Insights */}
              <div className="mb-20">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-tight">
                    Key Technical Insights
                  </h2>
                  <span className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase">
                    Quality Focus
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        code
                      </span>
                      <h4 className="font-bold">Frontend &amp; QA Synergy</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Built reusable UI components with React and Tailwind CSS
                      while simultaneously testing them. This dual perspective
                      allowed me to catch UI inconsistencies early and ensure
                      components were both functional and testable.
                    </p>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        visibility
                      </span>
                      <h4 className="font-bold">
                        Visual &amp; Interaction Focus
                      </h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Developed a keen eye for visual regression—catching
                      misaligned 3D models, texture glitches, and
                      rotation/scaling inconsistencies that impacted user
                      immersion.
                    </p>
                  </div>
                  <div className="p-8 border border-outline-variant/15 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-secondary">
                        sync
                      </span>
                      <h4 className="font-bold">Agile Collaboration</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Worked closely with developers using an iterative feedback
                      loop, ensuring rapid fixes and maintaining momentum during
                      tight sprint cycles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Rendering & Interaction Bugs */}
              <div className="mb-20">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-[2rem] font-semibold tracking-tight">
                    Visual Rendering &amp; Interaction Bugs
                  </h2>
                  <span className="text-[0.75rem] font-semibold tracking-widest text-on-surface-variant uppercase">
                    Quality Insights
                  </span>
                </div>
                <p className="text-lg text-on-surface-variant mb-12">
                  Caught 15+ visual rendering and interaction bugs before the
                  final prototype presentation through structured exploratory
                  testing and precise bug reporting.
                </p>
                <div className="space-y-4">
                  {/* Bug Card 1 */}
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-secondary">
                          BUG-142
                        </span>
                        <h3 className="font-semibold text-sm">
                          iOS Safari WebGL Context Loss on Room Switch
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">
                          Critical
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">
                          Fixed
                        </span>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase mb-2">
                          Observed Behavior
                        </p>
                        <p className="text-sm text-on-surface italic bg-red-50/20 p-3 rounded">
                          3D furniture models fail to render on iOS Safari after
                          switching rooms. Console logs
                          &quot;CONTEXT_LOST_WEBGL&quot;.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Resolution: Implemented a context restoration listener
                          that automatically reinstantiates the renderer without
                          requiring a page refresh.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Bug Card 2 */}
                  <div className="bg-white border border-outline-variant/15 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-zinc-50/50">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-secondary">
                          BUG-089
                        </span>
                        <h3 className="font-semibold text-sm">
                          Critical Crash during 3D model loading on mobile
                          hardware
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">
                          Blocker
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[0.65rem] font-bold rounded uppercase tracking-wider">
                          Fixed
                        </span>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase mb-2">
                          Observed Behavior
                        </p>
                        <p className="text-sm text-on-surface italic bg-orange-50/20 p-3 rounded">
                          OOM crash on mid-range Android devices when loading
                          high-density room layouts and complex furniture
                          meshes.
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Resolution: Integrated level-of-detail (LOD) streaming
                          and aggressive texture compression for mobile-specific
                          assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="mb-20">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">
                  Key Contributions
                </h2>
                <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-xl">
                  <ul className="space-y-4 text-on-surface-variant text-base leading-relaxed">
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        QA Manual &amp; Frontend Developer — managed dual role
                        in a 3-person team (1 BE, 1 FE, and myself as QA+FE)
                        over a 1-month sprint
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Built responsive UI components using React, Tailwind
                        CSS, and daisyUI, ensuring design consistency across all
                        pages
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Implemented global state management with Redux Toolkit
                        for furniture data, favorites, and room customization
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Owned end-to-end manual QA for a complex 3D web
                        application with zero automation coverage
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Designed and executed exploratory test sessions focused
                        on 3D rendering, furniture placement, and real-time room
                        customization
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Developed a comprehensive cross-platform test matrix,
                        ensuring consistent performance across desktop, tablet,
                        and mobile devices
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Implemented a structured bug reporting system, reducing
                        developer triage time and improving fix accuracy
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-secondary mt-1">
                        check_circle
                      </span>
                      <p>
                        Collaborated closely with backend and frontend
                        developers to validate fixes and maintain high-quality
                        release cadence
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Soft CTA */}
              <div className="mb-20 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                  rocket_launch
                </span>
                <p className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-8 max-w-2xl">
                  Ready to ensure visual perfection in your digital products
                  through meticulous QA?
                </p>
                <a
                  href="mailto:adnanyazidar48@gmail.com"
                  className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  Initiate Collaboration &rarr;
                </a>
              </div>

              {/* Results Section */}
              <div className="mb-24">
                <h2 className="text-[2rem] font-semibold tracking-tight mb-8">
                  Measurable Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center bg-white shadow-sm">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        bug_report
                      </span>{" "}
                      Visual/Interaction Bugs Caught
                    </p>
                    <p className="text-4xl font-bold text-secondary">15+</p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Before final prototype
                    </p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center bg-white shadow-sm">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        devices
                      </span>{" "}
                      Cross-Platform Coverage
                    </p>
                    <p className="text-4xl font-bold text-secondary">14+</p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Browser/OS combinations
                    </p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center bg-white shadow-sm">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      Timeline
                    </p>
                    <p className="text-4xl font-bold text-secondary">1 Month</p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      From concept to delivery
                    </p>
                  </div>
                  <div className="p-8 border border-outline-variant/20 rounded-lg text-center bg-white shadow-sm">
                    <p className="text-sm text-on-surface-variant uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>{" "}
                      User Satisfaction
                    </p>
                    <p className="text-4xl font-bold text-secondary">Zero</p>
                    <p className="text-xs text-on-surface-variant mt-2">
                      Post-launch visual defects reported
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings & Testimonial */}
        <section className="mx-auto py-20 border-t border-outline-variant/10 w-full mb-20">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-[2rem] font-semibold tracking-tight mb-12 text-center">
              Key Learnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  lightbulb
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Exploratory Testing is Essential:</strong> Critical
                  for uncovering nuanced visual and interaction bugs in dynamic
                  3D environments that scripted tests miss.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  description
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Clear Bug Reports Build Trust:</strong> Actionable,
                  heavily documented bug reports accelerate development velocity
                  and foster strong dev-QA trust.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  devices
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Cross-Platform Validation:</strong> Ensures a
                  consistent, reliable user experience and immersion across
                  fragmented hardware and all major devices.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl">
                  verified_user
                </span>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  <strong>Manual QA Delivers Quality:</strong> Plays a critical
                  and irreplaceable role in the final mile of delivering
                  pixel-perfect, immersive applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 pt-24 border-t border-outline-variant/20">
          <div className="flex flex-col items-center text-center space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              The Next Foundation
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-4xl">
              Ready to ensure visual perfection in your next{" "}
              <span className="text-on-surface-variant/20 italic font-medium">
                digital product?
              </span>
            </h2>
            <div className="mb-12 w-full">
              <a href="mailto:adnanyazidar48@gmail.com">
                <button className="px-12 py-6 bg-primary text-on-primary-container font-headline font-black uppercase tracking-[0.2em] hover:bg-secondary transition-colors text-lg">
                  Initiate Collaboration
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
