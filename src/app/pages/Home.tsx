import { Link } from "react-router";
import { Target, PenTool, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import prmImage from "../../imports/jaja4.png";

export default function Home() {
  const stats = [
    { label: "Years of experience in UX", value: "~10" },
    { label: "People I trained in UX", value: "60+" },
    { label: "Formal design degrees", value: "2" },
    { label: "Research studies done", value: "30+" },
  ];

  const services = [
    {
      icon: Target,
      title: "UX Strategy",
      description: "I can set up the right metrics for your product and build a design strategy focused on improving them. Every decision we make together is tied to measurable outcomes — so you always know what's working and why",
      color: "#FFC133",
    },
    {
      icon: Lightbulb,
      title: "User Research",
      description: "I can help you resolve business challenges related to your users with the deep-dive qualitative and quantize research. Even if you are not sure about the questions you have in your head.",
      color: "#FF8A5B",
    },
    {
      icon: PenTool,
      title: "Product Design",
      description: "I specialize in design for complex commercial/in-house systems - so they can serve users well, look good, and fulfill their business goal. I know how to cooperate with developers, engage business in the process.",
      color: "#10B981",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-12 lg:items-center">
            <div className="order-1">
              <p className="text-[32px] font-semibold text-[#261d08] leading-[40px] mb-2">Hi, I'm Przemek</p>
              <h1 className="text-[60px] font-bold text-[#261d08] mb-4 leading-[60px]">
                UX Designer<br />& Researcher
              </h1>
              <div className="inline-block mb-6">
                <p className="text-[20px] font-semibold text-[#261d08] leading-[20px] whitespace-nowrap">Based in Prague</p>
                <div className="mt-[4px] h-[5px] w-full bg-[#FFC133] -skew-x-12" />
              </div>
            </div>
            <div className="relative order-2 lg:row-span-2">
              <div className="absolute inset-0 bg-[#FFC133] transform translate-x-4 translate-y-4 border-4 border-[#374151]"></div>
              <div className="relative border-4 border-[#374151] overflow-hidden">
                <ImageWithFallback
                  src={prmImage}
                  alt="Przemek - UX Designer"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="order-3">
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                With nearly a <strong>decade of experience in UX</strong>, I specialize in supporting <strong>complex systems</strong>, covering all the activities in the <strong>end-to-end design process</strong>. I can help you improve your <strong>product metrics</strong> with my up-to the newest standards skillset and academic background in <strong>Human-Computer Interaction</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-9 py-5 bg-white text-[#374151] border-4 border-[#374151] hover:bg-[#fbe3d8] hover:text-[#f09065] hover:border-[#f09065] transition-all font-bold text-[16px] leading-[24px] tracking-[-0.3125px]"
                >
                  MORE ABOUT ME
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-5 bg-[#FFC133] text-[#374151] border-4 border-[#374151] hover:bg-[#FF8A5B] transition-all font-bold text-[16px] leading-[24px] tracking-[-0.3125px]"
                >
                  VIEW MY CASES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#2c3e50] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center border-3 border-[#FFC133] bg-[#2c3e50] p-6">
                <div className="text-3xl font-bold text-[#FFC133] mb-2">{stat.value}</div>
                <div className="text-white font-normal text-[16px]">{stat.label}</div>
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
              <h2 className="text-[48px] font-bold text-[#261d08]">WHAT I DO</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">I use my design expertise to drive business outcomes through your product.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-[#FFC133] transform translate-x-4 translate-y-4 border-4 border-[#374151]"></div>
                  <div className="relative p-8 bg-white border-4 border-[#374151]">
                    <div
                      className="w-16 h-16 border-4 border-[#374151] flex items-center justify-center mb-6"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon size={32} className="text-[#374151]" />
                    </div>
                    <div className="mb-4">
                      <h3 className="font-bold text-[#261d08] border-b-4 border-[#FFC133] inline pb-1 text-[36px]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
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