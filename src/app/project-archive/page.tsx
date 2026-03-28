import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectArchiveHeader from "@/components/project-archive/ProjectArchiveHeader";
import ProjectList from "@/components/project-archive/ProjectList";
import ProjectArchiveCTA from "@/components/project-archive/ProjectArchiveCTA";

export const metadata: Metadata = {
  title: "Project Archive — Adnan Labs",
  description:
    "A high-density record of technical solutions, architectural decisions, and quantifiable impacts across the digital landscape.",
};

export default function ProjectArchivePage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 px-6 md:px-12 xl:px-20 2xl:px-[120px] max-w-[1920px] mx-auto w-full">
        <ProjectArchiveHeader />
        <ProjectList />
        <ProjectArchiveCTA />
      </main>
      <Footer />
    </>
  );
}
