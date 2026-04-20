import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { cases } from "../data/cases";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "research", label: "UX Research" },
    { id: "design", label: "UX/UI Design" },
    { id: "other", label: "Other" },
  ];

  const projects = cases.map((c) => ({
    ...c,
    link: `/projects/${c.slug}`,
  }));

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white">
      {/* Hero + Projects Grid */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[60px] font-bold text-[#261d08] mb-[54px] leading-[60px]">
            My Cases
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              return (
                <div key={project.id} className="relative group">
                  <div className="absolute inset-0 bg-[#FFC133] group-hover:bg-[#F09065] transform translate-x-4 translate-y-4 border-4 border-[#374151] transition-colors"></div>
                  <div
                    className="relative bg-white border-4 border-[#374151] overflow-hidden group cursor-pointer"
                    onClick={() => navigate(project.link)}
                  >
                    <div className="relative overflow-hidden aspect-[16/12] border-b-4 border-[#374151]">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
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
                    <div className="p-6 relative">
                      <div className="absolute top-6 right-6">
                        <Link
                          to={project.link}
                          className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] hover:bg-[#FF8A5B] group-hover:bg-[#FF8A5B] transition-colors block shrink-0"
                          aria-label="View project"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </Link>
                      </div>
                      <div className="mb-3 pr-16">
                        <h3 className="text-[40px] font-bold text-[#261d08] inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
