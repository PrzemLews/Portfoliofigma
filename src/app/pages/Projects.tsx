import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, FlaskConical, Cpu, Glasses, MapPin, Utensils, Monitor, FolderOpen } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "research", label: "UX Research" },
    { id: "design", label: "UX/UI Design" },
    { id: "other", label: "Other" },
  ];

  const projects = [
    {
      id: 1,
      title: "ING Netherlands",
      category: "research",
      description:
        "This is a story about working in the ING headquaters' startup accelerator. The task of my team was validating a business model with mix of different research methods. We followed the ING's custom lean-startup validation framework.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317ef70f2c3a950cf279_ingcover.jpg",
      icon: FlaskConical,
      tags: ["Customer Research", "Lean UX", "Ideation"],
      link: "#",
    },
    {
      id: 2,
      title: "Ericsson IoT",
      category: "research",
      description:
        "I looked for a way to improve experience in participating in a design process of IoT systems. As a result of individual interviews and RITE testing I designed IoT Solution Advisor - a platform for matching system requirements with an IoT technology stack.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61030d6e7ff1602f83c7a8e2_erikson2.png",
      icon: Cpu,
      tags: ["Customer Research", "Iterative Prototyping"],
      link: "#",
    },
    {
      id: 3,
      title: "UX Research in VR",
      category: "research",
      description:
        "Here we designed and developed simple VR app. Later I conducted usability tests with 8 participants. The goal of the project was to compare usability attributes of different navigation menus in context of Virtual Reality.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317f629928f84e0f3b3f_vrcover.png",
      icon: Glasses,
      tags: ["VR", "Usability Tests", "Scientific Research"],
      link: "#",
    },
    {
      id: 4,
      title: "AR Navigation",
      category: "research",
      description:
        "This non-commercial project taught me how to deal with physical space and AR technology, designing for smartwatch, as well as museum customer experience. Due to COVID issues I also learnt more about the remote user research.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e4d5af21060f0c9d3_arcover.jpg",
      icon: MapPin,
      tags: ["UX Research", "AR", "Rapid Prototyping"],
      link: "#",
    },
    {
      id: 5,
      title: "UX & Food Allergy",
      category: "design",
      description:
        "My university designed a non-commercial product for those, who can't eat everything. Thanks to the database of products, our users could go exactly, where they would find everything that they need and stay inspired for their daily diet.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109612e8870c62666a65f78_squirrel.jpg",
      icon: Utensils,
      tags: ["UX Research", "UX+UI Design"],
      link: "#",
    },
    {
      id: 6,
      title: "PSE Innovation",
      category: "design",
      description:
        "The project required UX analysis of a few ERP systems, designing a new system which integrates functionalities of previous ones. Additionally, we created a new design system for future products of PSE Innovation.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e3e51cbc7dbd228bf_psecover.jpg",
      icon: Monitor,
      tags: ["UX Audit", "UX+UI Design"],
      link: "#",
    },
    {
      id: 7,
      title: "Other Projects",
      category: "other",
      description:
        "Here you can find the list of shorter projects or those which I consider less important or couldn't be described in details (because of NDA issues). This folder includes extra commercial projects and non-commercial.",
      image:
        "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61040d72bf74a0e0f9ca5b4b_others2.jpg",
      icon: FolderOpen,
      tags: ["Customer Research", "Lean UX", "Ideation"],
      link: "#",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFF8F0] py-20 border-b-8 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#374151] mb-6">
            MY <span className="bg-[#FFC133] px-4 py-2 border-4 border-[#374151]">PROJECTS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto border-l-6 border-[#FF8A5B] pl-4 inline-block text-left">
            A collection of my recent work showcasing user-centered design solutions
            across various industries and platforms.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b-4 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 border-4 border-[#374151] font-bold transition-all ${
                  filter === category.id
                    ? "bg-[#FFC133] text-[#374151] translate-y-[-4px]"
                    : "bg-white text-[#374151] hover:bg-[#FFF8F0] hover:translate-y-[-2px]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white border-4 border-[#374151] overflow-hidden hover:border-[#FFC133] transition-all hover:translate-x-2 hover:translate-y-[-8px]"
                >
                  <div className="relative overflow-hidden aspect-video border-b-4 border-[#374151]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <a
                        href={project.link}
                        className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] hover:bg-[#FF8A5B] transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center mr-3">
                        <Icon size={20} className="text-[#374151]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#374151] border-b-4 border-[#FF8A5B] pb-1">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#FFF8F0] text-[#374151] border-2 border-[#374151] text-sm font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF8F0] border-t-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-8 border-[#374151] p-12 bg-white">
            <h2 className="text-4xl font-bold text-[#374151] mb-6 border-b-8 border-[#FFC133] inline-block pb-2">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <p className="text-xl text-gray-600 mb-8 mt-6">
              I'm always open to discussing new projects and creative opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC133] text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all hover:translate-y-[-4px] font-bold"
            >
              START A CONVERSATION
              <ExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
