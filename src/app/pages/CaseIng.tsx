import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const otherProjects = [
  { title: "Ericsson IoT", tags: ["Customer Research", "Iterative Prototyping"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61030d6e7ff1602f83c7a8e2_erikson2.png", link: "#" },
  { title: "UX Research in VR", tags: ["VR", "Usability Tests", "Scientific Research"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317f629928f84e0f3b3f_vrcover.png", link: "#" },
  { title: "AR Navigation", tags: ["UX Research", "AR", "Rapid Prototyping"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e4d5af21060f0c9d3_arcover.jpg", link: "#" },
  { title: "UX & Food Allergy", tags: ["UX Research", "UX+UI Design"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109612e8870c62666a65f78_squirrel.jpg", link: "#" },
  { title: "PSE Innovation", tags: ["UX Audit", "UX+UI Design"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e3e51cbc7dbd228bf_psecover.jpg", link: "#" },
  { title: "Other Projects", tags: ["Commercial", "Non-commercial"], image: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61040d72bf74a0e0f9ca5b4b_others2.jpg", link: "#" },
];

const DOT_COUNT = 5;

export default function CaseIng() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      velocityRef.current += (e.deltaY + e.deltaX) * 0.8;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const animate = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft += velocityRef.current;
        velocityRef.current *= 0.85;
        if (Math.abs(velocityRef.current) > 0.5) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          velocityRef.current = 0;
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleScroll() {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setActiveDot(Math.round(progress * (DOT_COUNT - 1)));
  }
  return (
    <div className="bg-white">
      {/* Hero: title left (5/12) + cover image right (7/12) */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
              <h1 className="text-[60px] font-bold text-[#000000] mb-4 leading-tight">
                Case 1
              </h1>
              <div className="w-fit mb-8">
                <p className="text-[20px] font-semibold text-[#261d08] leading-[20px] whitespace-nowrap">Is "??? for flats" a good idea?</p>
                <div className="mt-[4px] h-[5px] w-full bg-[#FFC133] -skew-x-12" />
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-[#374151] hover:text-[#F09065] transition-colors text-[20px] font-medium underline underline-offset-4"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to all the cases
              </Link>
            </div>
            <div className="lg:col-span-7">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317ef70f2c3a950cf279_ingcover.jpg"
                alt="ING Netherlands case study cover"
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Context */}
      <section className="bg-[#fdf7f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview */}
            <div className="lg:col-span-7">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Context */}
            <div className="lg:col-span-5">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Context
              </h2>
              <dl className="space-y-3 text-base">
                {[
                  { label: "Contribution:", value: "Lorem ipsum, dolor sit amet" },
                  { label: "Context:", value: "Lorem ipsum project, X-months duration" },
                  { label: "Team size:", value: "X people (other roles: lorem, ipsum, dolor)" },
                  { label: "Dates:", value: "MM.YYYY – MM.YYYY" },
                  { label: "Tools:", value: "Lorem ipsum tool, dolor sit amet" },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="inline font-bold text-[#374151]">{item.label} </dt>
                    <dd className="inline text-gray-600">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
            The Main Outcomes
          </h2>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquip ex ea commodo</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consequat</li>
            <li>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</li>
          </ul>
          <p className="text-base text-gray-600 leading-relaxed mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#FFC133] mb-10 leading-tight">
            Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[17px]">
            {/* Phase 1 */}
            <div className="p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png"
                alt=""
                className="w-[130px] h-[130px] object-contain mb-4" style={{filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)'}}
              />
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-one" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Lorem ipsum – Phase one</strong></a>
                <br />Lorem ipsum dolor
                <br />Sit amet consectetur
                <br />Adipiscing elit sed
                <br />Eiusmod tempor
                <br />Incididunt ut labore
                <br />Dolore magna aliqua
              </p>
            </div>
            {/* Phase 2 */}
            <div className="p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png"
                alt=""
                className="w-[130px] h-[130px] object-contain mb-4" style={{filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)'}}
              />
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-two" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Lorem ipsum – Phase two</strong></a>
                <br />Ut enim ad minim
                <br />Veniam quis nostrud
                <br />Exercitation ullamco
              </p>
            </div>
            {/* Phase 3 */}
            <div className="p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png"
                alt=""
                className="w-[130px] h-[130px] object-contain mb-4" style={{filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)'}}
              />
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-three" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Lorem ipsum – Phase three</strong></a>
                <br />Lorem ipsum dolor
                <br />Sit amet consectetur
                <br />Adipiscing elit sed
                <br />Eiusmod tempor
                <br />Incididunt ut labore
                <br />Dolore magna aliqua
              </p>
            </div>
            {/* Phase 4 */}
            <div className="p-6">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png"
                alt=""
                className="w-[130px] h-[130px] object-contain mb-4" style={{filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)'}}
              />
              <p className="text-base text-gray-300 leading-relaxed w-full">
                <a href="#phase-four" className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>Lorem ipsum – Phase four</strong></a>
                <br />Ut enim ad minim
                <br />Veniam quis nostrud
                <br />Exercitation ullamco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 */}
      <section id="phase-one" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Lorem ipsum – Phase one
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <strong>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</strong> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae. <strong>Itaque earum rerum hic tenetur a sapiente delectus.</strong>
          </p>
        </div>
      </section>

      {/* Phase 2 */}
      <section id="phase-two" className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Lorem ipsum – Phase two
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Phase 3 */}
      <section id="phase-three" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Lorem ipsum – Phase three
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Phase 4 */}
      <section id="phase-four" className="border-b border-gray-200 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            Lorem ipsum – Phase four
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>
          </p>
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Adipiscing elit sed do eiusmod tempor</li>
            <li>Incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            The outcomes
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFF8F0] border-t-4 border-[#374151]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="text-[48px] font-bold text-[#374151] leading-tight inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
              See more cases
            </h2>
          </div>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", willChange: "scroll-position" }}
          >
            {otherProjects.map((p) => (
              <div key={p.title} className="relative group flex-shrink-0 w-[340px]">
                <div className="absolute inset-0 bg-[#FFC133] group-hover:bg-[#F09065] transform translate-x-4 translate-y-4 border-4 border-[#374151] transition-colors"></div>
                <div className="relative bg-white border-4 border-[#374151] overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/12] border-b-4 border-[#374151]">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#FFF8F0] text-[#374151] border-2 border-[#374151] text-sm font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-6 right-6">
                      <Link
                        to={p.link}
                        className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] hover:bg-[#FF8A5B] group-hover:bg-[#FF8A5B] transition-colors block shrink-0"
                        aria-label="View project"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    </div>
                    <div className="mb-1 pr-16">
                      <h3 className="text-[28px] font-bold text-[#261d08] inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>{p.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                style={{ backgroundColor: i === activeDot ? '#FF8A5B' : '#D1D5DB' }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
