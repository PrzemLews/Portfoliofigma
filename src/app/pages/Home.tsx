import { Link } from "react-router";
import { ArrowRight, Sparkles, Users, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Years Experience", value: "5+" },
    { label: "Awards Won", value: "12" },
  ];

  const services = [
    {
      icon: Sparkles,
      title: "User Research",
      description: "Deep dive into user needs and behaviors to inform design decisions",
      color: "#FFC133",
    },
    {
      icon: Lightbulb,
      title: "Product Design",
      description: "Creating intuitive and beautiful interfaces that users love",
      color: "#FF8A5B",
    },
    {
      icon: Users,
      title: "Usability Testing",
      description: "Validating designs through comprehensive user testing",
      color: "#10B981",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFF8F0] border-b-8 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#FFC133] border-4 border-[#374151] mb-6">
                <span className="text-[#374151] font-bold">UX DESIGNER & CREATIVE THINKER</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#374151] mb-6">
                Designing{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Meaningful</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#FFC133] transform -skew-x-12"></span>
                </span>{" "}
                Digital Experiences
              </h1>
              <p className="text-xl text-gray-600 mb-8 border-l-6 border-[#FF8A5B] pl-4">
                I craft user-centered designs that blend creativity with functionality,
                turning complex problems into elegant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC133] text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all hover:translate-x-1 hover:translate-y-[-4px] font-bold"
                >
                  VIEW MY WORK
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#374151] border-4 border-[#374151] hover:bg-[#FFF8F0] transition-all hover:translate-x-1 hover:translate-y-[-4px] font-bold"
                >
                  LET'S TALK
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFC133] transform translate-x-4 translate-y-4 border-4 border-[#374151]"></div>
              <div className="relative border-4 border-[#374151] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753162657332-4f061398c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3NDUzNTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Designer at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#374151] border-b-8 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center border-4 border-[#FFC133] bg-[#374151] p-6">
                <div className="text-4xl font-bold text-[#FFC133] mb-2">{stat.value}</div>
                <div className="text-gray-300 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block border-b-8 border-[#FFC133] pb-2 mb-4">
              <h2 className="text-4xl font-bold text-[#374151]">WHAT I DO</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining research, strategy, and design to create exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white border-4 border-[#374151] hover:border-[#FFC133] transition-all hover:translate-x-2 hover:translate-y-[-8px]"
                >
                  <div
                    className="w-16 h-16 border-4 border-[#374151] flex items-center justify-center mb-6"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon size={32} className="text-[#374151]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151] mb-4 border-b-4 border-[#FFC133] inline-block pb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFC133] border-y-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#374151] mb-6 border-b-8 border-[#374151] inline-block pb-2">
            LET'S CREATE SOMETHING AMAZING TOGETHER
          </h2>
          <p className="text-xl text-[#374151] mb-8 font-medium">
            I'm always excited to collaborate on new projects and bring ideas to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all hover:translate-y-[-4px] font-bold"
          >
            GET IN TOUCH
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
