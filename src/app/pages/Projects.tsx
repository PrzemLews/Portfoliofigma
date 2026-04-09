import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Smartphone, Globe, ShoppingCart, Layout } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Design" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "HealthTrack Mobile App",
      category: "mobile",
      description:
        "A comprehensive health tracking app that helps users monitor their fitness goals, nutrition, and wellness journey.",
      image:
        "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc0NDc4MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Smartphone,
      tags: ["Mobile", "Healthcare", "iOS/Android"],
      link: "#",
    },
    {
      id: 2,
      title: "EduLearn Platform",
      category: "web",
      description:
        "An online learning platform designed to provide seamless educational experiences for students and educators.",
      image:
        "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NDQyNDU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Globe,
      tags: ["Web", "Education", "SaaS"],
      link: "#",
    },
    {
      id: 3,
      title: "StyleHub E-Commerce",
      category: "ecommerce",
      description:
        "A modern fashion e-commerce platform with intuitive navigation and personalized shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1698434156098-68e834638679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzQ0Mjg0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: ShoppingCart,
      tags: ["E-Commerce", "Fashion", "Responsive"],
      link: "#",
    },
    {
      id: 4,
      title: "TaskFlow Productivity",
      category: "web",
      description:
        "A project management tool that streamlines team collaboration and boosts productivity through smart workflows.",
      image:
        "https://images.unsplash.com/photo-1742440711276-679934f5b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc3NDQ4MTM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Layout,
      tags: ["Web", "Productivity", "B2B"],
      link: "#",
    },
    {
      id: 5,
      title: "FoodDelight App",
      category: "mobile",
      description:
        "A food delivery app with an emphasis on quick ordering, real-time tracking, and delightful micro-interactions.",
      image:
        "https://images.unsplash.com/photo-1753162657332-4f061398c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDUzNTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Smartphone,
      tags: ["Mobile", "Food", "On-Demand"],
      link: "#",
    },
    {
      id: 6,
      title: "TechStore Marketplace",
      category: "ecommerce",
      description:
        "An electronics marketplace featuring advanced filtering, comparison tools, and personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1666618207644-4de0226a3f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3NDUzNTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: ShoppingCart,
      tags: ["E-Commerce", "Tech", "Marketplace"],
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
