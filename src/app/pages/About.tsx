import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Target, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    { name: "User Research", level: 95 },
    { name: "Wireframing & Prototyping", level: 92 },
    { name: "UI Design", level: 90 },
    { name: "Usability Testing", level: 88 },
    { name: "Design Systems", level: 85 },
    { name: "Information Architecture", level: 90 },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Miro",
    "Maze",
    "Hotjar",
    "Principle",
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every decision is guided by user needs and feedback",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving measurable business objectives",
    },
    {
      icon: Award,
      title: "Quality-Driven",
      description: "Committed to delivering pixel-perfect designs",
    },
    {
      icon: Briefcase,
      title: "Collaborative",
      description: "Working seamlessly with cross-functional teams",
    },
  ];

  const experience = [
    {
      role: "Senior UX Designer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description: "Leading design initiatives for B2B SaaS products",
    },
    {
      role: "UX Designer",
      company: "Digital Innovations",
      period: "2021 - 2023",
      description: "Designed mobile and web applications for e-commerce clients",
    },
    {
      role: "Junior UX Designer",
      company: "Creative Studio",
      period: "2019 - 2021",
      description: "Supported senior designers in user research and prototyping",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFF8F0] py-20 border-b-8 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#374151] mb-6">
                ABOUT <span className="bg-[#FFC133] px-2 border-4 border-[#374151]">ME</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 border-l-6 border-[#FF8A5B] pl-4">
                I'm Alexandra Kim, a UX Designer with 5+ years of experience creating
                user-centered digital products that people love to use.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My passion lies in understanding user behaviors and translating insights
                into intuitive, accessible, and delightful experiences. I believe great
                design is invisible — it just works.
              </p>
              <p className="text-lg text-gray-600 bg-[#FFC133] p-4 border-4 border-[#374151]">
                <strong>Fun fact:</strong> When I'm not designing, you'll find me exploring new coffee shops,
                reading about psychology, or sketching ideas in my notebook.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF8A5B] transform translate-x-6 translate-y-6 border-4 border-[#374151]"></div>
              <div className="relative border-4 border-[#374151] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666618207644-4de0226a3f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3NDUzNTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#374151] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">
              MY VALUES
            </h2>
            <p className="text-xl text-gray-600 mt-4">The principles that guide my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-[#FFF8F0] border-4 border-[#374151] hover:border-[#FFC133] transition-all hover:translate-y-[-8px]"
                >
                  <div className="w-16 h-16 mx-auto bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center mb-4">
                    <Icon size={32} className="text-[#374151]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#374151] mb-2 border-b-4 border-[#FF8A5B] inline-block pb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#FFF8F0] border-y-8 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#374151] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">
              SKILLS & EXPERTISE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills Progress */}
            <div className="bg-white p-8 border-4 border-[#374151]">
              <h3 className="text-2xl font-bold text-[#374151] mb-8 border-b-4 border-[#FFC133] inline-block pb-2">
                CORE COMPETENCIES
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-[#374151]">{skill.name}</span>
                      <span className="text-[#FFC133] font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-6 border-4 border-[#374151] bg-white overflow-hidden">
                      <div
                        className="h-full bg-[#FFC133] border-r-4 border-[#374151] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-8 border-4 border-[#374151]">
              <h3 className="text-2xl font-bold text-[#374151] mb-8 border-b-4 border-[#FFC133] inline-block pb-2">
                TOOLS I USE
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#FFF8F0] border-4 border-[#374151] hover:bg-[#FFC133] hover:translate-y-[-4px] transition-all text-center font-bold text-[#374151]"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#374151] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">
              EXPERIENCE
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 pb-8 border-l-6 border-[#FFC133] last:pb-0"
              >
                <div className="absolute left-[-14px] top-0 w-6 h-6 bg-[#FFC133] border-4 border-[#374151]"></div>
                <div className="bg-[#FFF8F0] p-6 border-4 border-[#374151]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-2xl font-bold text-[#374151] border-b-4 border-[#FFC133] inline-block pb-1">
                      {exp.role}
                    </h3>
                    <span className="bg-[#FF8A5B] text-white px-3 py-1 font-bold border-2 border-[#374151] mt-2 sm:mt-0 inline-block">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 mb-2 font-bold mt-4">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
