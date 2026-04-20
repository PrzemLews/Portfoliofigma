import { useRef, useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getCaseBySlug, getOtherCases, type ContentBlock } from "../data/cases";
import Lightbox from "../components/Lightbox";

const DOT_COUNT = 5;

const DEFAULT_CONTEXT = [
  { label: "Contribution:", value: "Lorem ipsum, dolor sit amet" },
  { label: "Context:", value: "Lorem ipsum project, X-months duration" },
  { label: "Team size:", value: "X people (other roles: lorem, ipsum, dolor)" },
  { label: "Dates:", value: "MM.YYYY – MM.YYYY" },
  { label: "Tools:", value: "Lorem ipsum tool, dolor sit amet" },
];

const DEFAULT_PROCESS_CARDS = [
  { iconSrc: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png", anchor: "phase-one", title: "Lorem ipsum – Phase one", lines: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed", "Eiusmod tempor", "Incididunt ut labore", "Dolore magna aliqua"] },
  { iconSrc: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png", anchor: "phase-two", title: "Lorem ipsum – Phase two", lines: ["Ut enim ad minim", "Veniam quis nostrud", "Exercitation ullamco"] },
  { iconSrc: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png", anchor: "phase-three", title: "Lorem ipsum – Phase three", lines: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed", "Eiusmod tempor", "Incididunt ut labore", "Dolore magna aliqua"] },
  { iconSrc: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png", anchor: "phase-four", title: "Lorem ipsum – Phase four", lines: ["Ut enim ad minim", "Veniam quis nostrud", "Exercitation ullamco"] },
];

const DEFAULT_PHASE_SECTIONS: { id: string; title: string; blocks: ContentBlock[] }[] = [
  {
    id: "phase-one",
    title: "Lorem ipsum – Phase one",
    blocks: [
      { type: "p", html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor." },
      { type: "p", html: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>" },
      { type: "list", items: ["Lorem ipsum dolor sit amet consectetur", "Adipiscing elit sed do eiusmod tempor", "Incididunt ut labore et dolore magna aliqua"] },
    ],
  },
  {
    id: "phase-two",
    title: "Lorem ipsum – Phase two",
    blocks: [
      { type: "p", html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { type: "p", html: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>" },
      { type: "list", items: ["Lorem ipsum dolor sit amet consectetur", "Adipiscing elit sed do eiusmod tempor", "Incididunt ut labore et dolore magna aliqua"] },
    ],
  },
  {
    id: "phase-three",
    title: "Lorem ipsum – Phase three",
    blocks: [
      { type: "p", html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { type: "p", html: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>" },
      { type: "list", items: ["Lorem ipsum dolor sit amet consectetur", "Adipiscing elit sed do eiusmod tempor", "Incididunt ut labore et dolore magna aliqua"] },
    ],
  },
  {
    id: "phase-four",
    title: "Lorem ipsum – Phase four",
    blocks: [
      { type: "p", html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { type: "p", html: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <strong>In total, lorem ipsum conclusions were:</strong>" },
      { type: "list", items: ["Lorem ipsum dolor sit amet consectetur", "Adipiscing elit sed do eiusmod tempor", "Incididunt ut labore et dolore magna aliqua"] },
    ],
  },
];

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "p") {
    return (
      <p
        key={idx}
        className="text-base text-gray-600 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }
  if (block.type === "list") {
    return (
      <div key={idx} className="mb-6">
        {block.intro && (
          <p className="text-base text-gray-600 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: block.intro }} />
        )}
        <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-1">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === "figure") {
    const { src, alt, caption, narrow, zoomable } = block.figure;
    const inner = (
      <figure className={narrow ? "" : "my-8"}>
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          {zoomable
            ? <Lightbox src={src} alt={alt ?? ""} caption={caption} />
            : <div className="block w-full"><ImageWithFallback src={src} alt={alt ?? ""} className="w-full h-auto block" /></div>}
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm text-gray-500 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    );
    if (narrow) {
      return (
        <div key={idx} className="my-8 max-w-sm mx-auto">
          {inner}
        </div>
      );
    }
    return <div key={idx}>{inner}</div>;
  }
  if (block.type === "figureRow") {
    const n = block.figures.length;
    const colClass =
      n >= 3 ? "md:grid-cols-3" : n === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    return (
      <div key={idx} className={`grid grid-cols-1 ${colClass} gap-6 my-8`}>
        {block.figures.map((fig, i) => (
          <figure key={i}>
            <div className="border-4 border-[#374151] overflow-hidden bg-white">
              {fig.zoomable
                ? <Lightbox src={fig.src} alt={fig.alt ?? ""} caption={fig.caption} />
                : <div className="block w-full"><ImageWithFallback src={fig.src} alt={fig.alt ?? ""} className="w-full h-auto block" /></div>}
            </div>
            {fig.caption && (
              <figcaption className="mt-3 text-sm text-gray-500 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: fig.caption }} />
            )}
          </figure>
        ))}
      </div>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote
        key={idx}
        className="border-l-4 border-[#FFC133] pl-6 py-2 my-6 text-base text-gray-700 italic leading-relaxed"
      >
        <p dangerouslySetInnerHTML={{ __html: block.html }} />
        {block.attribution && (
          <footer className="mt-2 text-sm not-italic text-gray-500">— {block.attribution}</footer>
        )}
      </blockquote>
    );
  }
  // h3
  return (
    <h3 key={idx} className="text-[24px] font-bold text-[#374151] mb-3 mt-2">
      {block.text}
    </h3>
  );
}

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const caseData = getCaseBySlug(slug);
  const otherProjects = getOtherCases(slug);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  if (!caseData) {
    return <Navigate to="/projects" replace />;
  }

  const details = caseData.details;
  const heroTitle = details?.heroTitle ?? `Case ${caseData.id}`;
  const overview = details?.overview ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const context = details?.context ?? DEFAULT_CONTEXT;
  const mainOutcomes = details?.mainOutcomes ?? {
    heading: "The Main Outcomes",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquip ex ea commodo",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consequat",
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    ],
    outro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };
  const processCards = details?.processCards ?? DEFAULT_PROCESS_CARDS;
  const phaseSections = details?.phaseSections ?? DEFAULT_PHASE_SECTIONS;
  const conclusion = details?.conclusion ?? {
    heading: "The outcomes",
    html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  // Decide grid column count for process cards based on how many phases we have (max 4)
  const processColClass =
    processCards.length >= 4
      ? "md:grid-cols-4"
      : processCards.length === 3
      ? "md:grid-cols-3"
      : processCards.length === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-1";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
              <h1 className="text-[60px] font-bold text-[#000000] mb-4 leading-tight">
                {heroTitle}
              </h1>
              <div className="w-fit mb-8">
                <p className="text-[20px] font-semibold text-[#261d08] leading-[24px]">{caseData.subtitle}</p>
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
                src={caseData.image}
                alt={`${caseData.title} case study cover`}
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
            <div className="lg:col-span-7">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {overview}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Context
              </h2>
              <dl className="space-y-3 text-base">
                {context.map((item) => (
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

      {/* Main Outcomes */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#000000] mb-6 leading-tight">
            {mainOutcomes.heading ?? "The Main Outcomes"}
          </h2>
          {mainOutcomes.intro && (
            <p className="text-base text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: mainOutcomes.intro }} />
          )}
          <ul className="text-base text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
            {mainOutcomes.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          {mainOutcomes.outro && (
            <p className="text-base text-gray-600 leading-relaxed mt-6" dangerouslySetInnerHTML={{ __html: mainOutcomes.outro }} />
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#374151] border-y-4 border-[#FFC133]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#FFC133] mb-10 leading-tight">
            Process
          </h2>
          <div className={`grid grid-cols-1 ${processColClass} gap-[17px]`}>
            {processCards.map((phase) => (
              <div key={phase.anchor} className="p-6">
                <ImageWithFallback
                  src={phase.iconSrc}
                  alt=""
                  className="w-[130px] h-[130px] object-contain mb-4"
                  style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)' }}
                />
                <p className="text-base text-gray-300 leading-relaxed w-full">
                  <a href={`#${phase.anchor}`} className="text-[#FFC133] underline hover:text-[#F09065] transition-colors"><strong>{phase.title}</strong></a>
                  {phase.lines.map((line) => (
                    <span key={line}><br />{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase sections */}
      {phaseSections.map((phase, idx) => (
        <section
          key={phase.id}
          id={phase.id}
          className={`border-b border-gray-200 ${idx % 2 === 1 ? "bg-[#FDF7F2]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
            <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
              {phase.title}
            </h2>
            {phase.blocks.map((block, i) => renderBlock(block, i))}
          </div>
        </section>
      ))}

      {/* Conclusion */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            {conclusion.heading ?? "The outcomes"}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: conclusion.html }} />
        </div>
      </section>

      {/* CTA */}
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
              <div key={p.slug} className="relative group flex-shrink-0 w-[340px]">
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
                        to={`/projects/${p.slug}`}
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
