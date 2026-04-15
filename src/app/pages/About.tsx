import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Target, Briefcase } from "lucide-react";
import Chip from "../../imports/Chip-76-20";

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
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
            <div className="order-1">
              <h1 className="text-[60px] font-bold text-[#261d08] mb-6 leading-[60px]">
                More about me
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                My full name is Przemyslaw Lewandowski, but you can call me Pshemek (or Přemek).
              </p>
            </div>
            <div className="relative order-2 lg:row-span-2">
              <div className="absolute inset-0 bg-[#FFC133] transform translate-x-6 translate-y-6 border-4 border-[#374151]"></div>
              <div className="relative border-4 border-[#374151] overflow-hidden">
                <ImageWithFallback
                  src="/src/imports/jabiureczko-1.png"
                  alt="Workspace"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="order-3">
              <p className="text-lg text-gray-600 mb-6">I put real effort into the early stages of working with someone. Because understanding everyone's real goals, makes me a better partner and produces better outcomes. I also tend to pull stakeholders into the design process early and often. In my experience, people who feel heard and involved become advocates for the work - and that momentum is what actually moves projects forward. I like working on long-term projects, as taking the best decisions comes with experience within the field. Speaking of the type of projects I have been working on:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Chip label="Compliance" />
                <Chip label="ERP systems" />
                <Chip label="AI solutions" />
                <Chip label="Developer Experience" />
                <Chip label="Banking" />
              </div>
              <p className="text-lg text-gray-600 bg-[#FFC133] p-4 border-4 border-[#374151]">
                <strong>Fun fact:</strong> Apart from work, I like to spend my time pursuing my hobbies: Making electronic music, gym, psychology, painting, RPG games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-[#FFC133] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">
              MY VALUES
            </h2>
            <p className="text-xl text-white mt-4">The principles that guide my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-[#374151] border-3 border-[#FFC133]"
                >
                  <div className="w-16 h-16 mx-auto bg-[#FFC133] border-4 border-[#FFC133] flex items-center justify-center mb-4">
                    <Icon size={32} className="text-[#374151]" />
                  </div>
                  <h3 className="text-[32px] font-bold text-[#FFC133] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white mt-4">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-[#261d08] mb-4 inline-block border-b-8 border-[#FFC133] pb-2">My journey to UX</h2>
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
                    <h3 className="text-[40px] font-bold text-[#261d08] border-b-4 border-[#FFC133] inline-block pb-1">
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