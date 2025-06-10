"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/ui/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import SkillsSection from "./components/SkillsSection";

const words = `prathamesh anvekar`;

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection words={words} />
      {/* Separator */}
      
      <div className="flex justify-center my-4">
        <hr className="w-24 border-t-2 border-blue-500 rounded" />
      </div>
      
      {/* About Me */}
      <AboutSection />
      {/* Experience */}
      <ExperienceSection />
      {/* Projects */}
      <ProjectSection />
      {/* Skills */}
      <SkillsSection />
      {/* Contact Me */}
      <ContactSection />
      {/* Footer */}
      <FooterSection />
    </>
  );
}
