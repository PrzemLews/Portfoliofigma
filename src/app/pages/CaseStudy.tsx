import React, { useRef, useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getCaseBySlug, getOtherCases, type ContentBlock } from "../data/cases";
import Lightbox from "../components/Lightbox";

const DOT_COUNT = 5;

const DEFAULT_CONTEXT = [
  { label: "Type:", value: "Commercial project, in-house" },
  { label: "My Contribution:", value: "Scoping requirements, experts interview, hi-fi design, development cooperation" },
  { label: "Team composition:", value: "Product Manager, Business Owner, AI Devs, Front-end Dev" },
  { label: "Duration:", value: "3 months" },
];

const SVG_STROKE_PROPS = {
  fill: "none" as const,
  stroke: "#FFC133",
  strokeWidth: 4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const MagnifierIcon = (
  <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" {...SVG_STROKE_PROPS} aria-hidden>
    <circle cx="54" cy="54" r="30" />
    <line x1="76" y1="76" x2="110" y2="110" />
    <line x1="42" y1="50" x2="66" y2="50" />
    <line x1="42" y1="60" x2="60" y2="60" />
  </svg>
);

const SketchGridIcon = (
  <svg viewBox="0 0 130 130" className="w-[150px] h-[150px] mb-4" {...SVG_STROKE_PROPS} aria-hidden>
    <rect x="14" y="22" width="78" height="62" rx="2" />
    <line x1="14" y1="42" x2="92" y2="42" />
    <line x1="14" y1="62" x2="92" y2="62" />
    <line x1="40" y1="22" x2="40" y2="84" />
    <line x1="66" y1="22" x2="66" y2="84" />
    <path d="M78 96 L112 62 L120 70 L86 104 Z" />
    <line x1="78" y1="96" x2="86" y2="104" />
    <path d="M78 96 L70 112 L86 104" />
  </svg>
);

const DEFAULT_PROCESS_CARDS: { icon: React.ReactNode; anchor: string; title: string; lines: string[] }[] = [
  { icon: MagnifierIcon, anchor: "phase-two", title: "Problem Discovery & Solution Scoping", lines: ["Interviews with content reviewers to identify typical user mistakes and create a list of rules applicable to different form questions."] },
  { icon: SketchGridIcon, anchor: "phase-three", title: "Design & Stakeholder Alignment", lines: ["I prepared high-level sketches with the AI-assisted feedback concept, later reviewed by the business owner and AI developers to ensure feasibility."] },
];

const DEFAULT_PHASE_SECTIONS: { id: string; title: string; blocks: ContentBlock[] }[] = [
  {
    id: "phase-one",
    title: "Project Origins",
    blocks: [
      { type: "p", html: "The system which is the baseline for this case was used for filling out a certain process documentation that had to be completed by members of the company. The document forms contained open-ended questions, which couldn't be replaced by more granular closed questions. Even though the completed documents were reviewed by other members, filling out these forms was not the core job of these authors or reviewers, therefore the content and reviewers often did not pay enough attention to the quality of the content." },
      { type: "p", html: "Due to the complex nature of the questions, provided answers were often only partial — or the same piece of information was repeated across multiple questions, sometimes the answers were even contradicting. Still, from the business perspective the accurate answers were crucial, as these documents could be a subject of investigation of external audits." },
      { type: "p", html: "As the owner of the system, we knew about the problem and we tried to solve it before in various ways: providing webinars, reframing questions, putting additional guidance on the website, including examples. That was helpful to some extent, but never resolved the issues. After the burst of GenAI, business started to see the opportunity of applying this technology to provide better governance over the user inputs, and this high-level idea was the starting point for the project." },
    ],
  },
  {
    id: "phase-two",
    title: "Problem Discovery",
    blocks: [
      { type: "p", html: "The first stage of the project was about learning what the typical users' struggles with the questions are specifically. To discover these patterns, I scheduled 6 interviews with people who advise our users on the content and with people who do the review and audits. Based on the interviews I created a list of the typical mistakes people do." },
      { type: "p", html: "The insights from these conversations were invaluable in understanding not just what mistakes were being made, but why they were happening and what patterns emerged across different types of documentation. Some of these were simple as just trying to ignore the question, confusion of similar terms, invalid references, generic answers without referring to a specific process. I translated these problem statements into a set of rules applicable for different questions that we ask in the forms. For example:" },
      { type: "list", items: [
        "Users don't describe what their project is about — check whether the \"project information\" includes: project name, project dates, project purpose.",
        "Users confuse \"project information\" with \"document information\" fields — check whether \"project information\" does not include any description related to concept of a document.",
      ] },
      { type: "p", html: "This enabled us to think how actually we could employ a real use case for artificial intelligence; however, many questions about the shape of the solution were unanswered yet." },
    ],
  },
  {
    id: "phase-three",
    title: "Solution Scoping, Stakeholder Alignment",
    blocks: [
      { type: "p", html: "On the scoping phase I had to think about the following aspects:" },
      { type: "list", items: [
        "Should AI autocorrect the answers, or should we just let the users know what inputs are wrong?",
        "When the solution provides wrong suggestion, how users can react to that?",
        "How to motivate users to address as many remarks as possible?",
        "Incorporate the solution on an already cluttered form? We already had commenting and compare-changes mode — not much empty space left for yet another feature.",
        "How to integrate the solution with UI, without disturbing users while they're typing?",
      ] },
      { type: "p", html: "<strong>1. Reusing familiar patterns.</strong> To reduce the number of design patterns we were familiarising our users with, I wanted to reuse patterns from an already existing, somewhat similar feature — comment mode. Since we could think of the AI suggestions as comments, but provided by the machine, we could also reuse the mechanism of signalling a comment, showing their number, and resolving them." },
      { type: "p", html: "<strong>2. Feedback, not autocorrect.</strong> Together with the business stakeholders we took a decision to rather inform users what mistakes they have done and ask them for the \"manual\" improvement, rather than provide an autocorrect or text to paste. Primarily because the most likely AI wouldn't have a good source of truth. The other aspect was that we wanted users to feel the personal responsibility for the content, which we felt would be diminished if AI replaced them with figuring out the content. Whenever a mistake happened, the solution highlighted the paragraphs with the issues, and users were asked to address a specific issue." },
      { type: "p", html: "<strong>3. Delayed, non-disruptive notifications.</strong> To avoid constant user disruptions with incoming feedback, we decided for a mechanism of delayed feedback without a need for users to wait before proceeding to the next fields. On the other hand, we didn't want to postpone the feedback too much, as users would forget the context necessary for the content improvement. Once the field is evaluated by the AI, users would receive a gentle notification in the corner of the screen." },
      { type: "p", html: "<strong>4. Critical vs. non-critical issues.</strong> Not all user mistakes should have the same weight. For example, imprecise language shouldn't be treated the same way as inputing \"lorem ipsum\" content. That's why I proposed classifying mistakes into two categories: critical mistake and non-critical issue. The solution was designed so that users wouldn't be able to proceed with a critical mistake. However, they should be able to proceed with a non-critical issue, unless they accumulated too many of them. We set up a threshold for the number of acceptable non-critical issues, as well as a mechanism to inform the users about the overall score of the document. Users could check their score ad hoc, but also they would be informed about the score before marking the document as completed." },
      { type: "p", html: "<strong>5. Reporting AI mistakes.</strong> Though we felt like we exhausted the list of potential issues, we couldn't be 100% sure. Also, we had to count with the AI hallucination scenarios. Therefore, I designed the mechanism to report a mistake of the validation agent. Whenever a user reported a specific suggestion as invalid, this specific criterion wouldn't be checked ever again against the text provided for the input. To decrease the chance of reporting the mistake just to be able to ignore validation, the copy suggested that each report will be checked for improving the accuracy of the solution — and that wasn't a lie, we wanted to see these reports, quantise them, and act upon them." },
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
  const heroTitle = details?.heroTitle ?? "AI-based validation in forms";
  const overview = details?.overview ?? "This project addressed issues in an ERP system where users struggled to provide accurate answers to open-ended form questions, often missing important points in responses that were subjected to a strict review. Providing more guidance, tooltips, or framing the question in a different way were not effective. To understand the problem, I conducted interviews with reviewers to identify typical user mistakes and understand how we could use AI to improve the quality of the information put to the system. The proposed solution used AI to provide feedback, telling users what mistakes they made and how to mitigate them, rather than automatically re-writing the content, ensuring people rely on their own information. I designed high-level sketches in Figma; later they were reviewed by both the business owner and AI developers to validate feasibility for desktop and mobile solutions. The development of the project started, but the project was stopped due to resource issues.";
  const context = details?.context ?? DEFAULT_CONTEXT;
  const mainOutcomes = details?.mainOutcomes ?? {
    heading: "The Main Outcomes and Learning Points",
    items: [
      "Solution for supervising user inputs, motivating them to improve their work, and quantising the quality of documents written by them",
      "Positive feedback on the proposed design solution from stakeholders",
      "Reviewed and validated concepts from AI developers, ready to follow up in the future",
      "The team and I got an understanding of how specific and granular AI task statements must be for agentic AI implementation",
      "The project helped develop skills in working across multiple disciplines, including cooperation with AI devs",
    ],
  };
  const processCards = details?.processCards ?? DEFAULT_PROCESS_CARDS;
  const phaseSections = details?.phaseSections ?? DEFAULT_PHASE_SECTIONS;
  const conclusion = details?.conclusion ?? {
    heading: "Outcomes",
    html: "What was quite challenging in the project was re-iterating on programming the AI behaviour. Once we were testing the rules defined after the research phase, quite often it turned out the rules were too specific or not specific enough. Together with AI developers we had to check the AI behaviour against the real documents provided by users combined with our human judgement on the AI feedback. Unfortunately, the project was stopped in the development phase due to resource issues, though the business was pleased with the proposed solution.",
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
                {"icon" in phase && phase.icon ? (
                  phase.icon
                ) : (
                  <ImageWithFallback
                    src={(phase as { iconSrc: string }).iconSrc}
                    alt=""
                    className="w-[130px] h-[130px] object-contain mb-4"
                    style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(59%) saturate(700%) hue-rotate(358deg) brightness(103%)' }}
                  />
                )}
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
      <section className="bg-[#FDF7F2] border-b border-gray-200">
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
