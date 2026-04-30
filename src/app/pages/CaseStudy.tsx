import React, { useRef, useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ExternalLink, Signal, Wifi, BatteryFull, Home, Search, Heart, User } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { getCaseBySlug, getOtherCases, type ContentBlock } from "../data/cases";
import Lightbox from "../components/Lightbox";
import IterationCycle from "../components/IterationCycle";
import PseFormMock from "../components/PseFormMock";
import PseFiltersMock from "../components/PseFiltersMock";
import PsePopupsMock from "../components/PsePopupsMock";
import PseSaveButtonsMock from "../components/PseSaveButtonsMock";
import ScaledFrame from "../components/ScaledFrame";

const DOT_COUNT = 5;

function MobileStatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-white text-[#374151] text-[11px] font-semibold border-b-2 border-[#374151]">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Signal className="w-3 h-3" strokeWidth={2.5} />
        <Wifi className="w-3 h-3" strokeWidth={2.5} />
        <BatteryFull className="w-4 h-4" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function MobileNavBar() {
  return (
    <div className="flex items-center justify-around px-4 py-2 bg-white text-[#374151] border-t-2 border-[#374151]">
      <Home className="w-5 h-5" strokeWidth={2.5} fill="currentColor" />
      <Search className="w-5 h-5" strokeWidth={2.5} />
      <Heart className="w-5 h-5" strokeWidth={2.5} />
      <User className="w-5 h-5" strokeWidth={2.5} />
    </div>
  );
}

const DEFAULT_CONTEXT = [
  { label: "Type:", value: "Commercial project, in-house" },
  { label: "My Contribution:", value: "Scoping requirements, expert interviews, hi-fi design, development cooperation" },
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
      { type: "p", html: "The system which is the baseline for this case was used for filling out process documentation - including forms such as the <strong>New Headcount Request</strong> - that had to be completed by members of the company. These forms contained <strong>open-ended questions, which couldn't be replaced by more granular closed questions</strong>. Even though the completed documents were reviewed by other members, filling out these forms was not the core job of these authors or reviewers; therefore, the authors and reviewers often did not pay enough attention to the quality of the content." },
      { type: "figure", figure: { src: "/UX-Portfolio/headcount-request-form.png", alt: "New Headcount Request form in the NDApp ERP system", caption: "The original state of the form", maxWidth: "70%" } },
      { type: "p", html: "Due to the complex nature of the questions, provided answers were often only partial - or the same piece of information was repeated across multiple questions, sometimes the answers were even contradictory. Still, from the business perspective the <strong>accurate answers were crucial, as these documents could be a subject of investigation of external audits</strong>." },
      { type: "p", html: "As the owner of the system, we knew about the problem and we tried to solve it before in various ways: providing webinars, reframing questions, putting additional guidance on the website, including examples. That was helpful to some extent, but never resolved the issues. After the burst of GenAI, business started to see the <strong>opportunity of applying this technology to provide better governance over the user inputs</strong>, and this high-level idea was the starting point for the project." },
    ],
  },
  {
    id: "phase-two",
    title: "Problem Discovery",
    blocks: [
      { type: "p", html: "The first stage of the project was about learning what the typical users' struggles with the questions were specifically. To discover these patterns, I <strong>scheduled 6 interviews with people who advise our users on the content and with people who do the review and audits</strong>. Based on the interviews I <strong>created a list of the typical mistakes people do</strong>." },
      { type: "p", html: "The insights from these conversations were invaluable in understanding not just what mistakes were being made, but <strong>why they were happening and what patterns emerged</strong> across different types of documentation. Some of these were as simple as just trying to ignore the question, confusion of similar terms, invalid references, or generic answers without referring to a specific process. I <strong>translated these problem statements into a set of rules applicable to different questions</strong> that we ask in the forms. For example:" },
      { type: "list", items: [
        "Users don't input any numerical values that are quite relevant for the process.",
        "Users confuse different questions, providing answers to a different question than they were supposed to.",
        "The answers are missing the necessary level of detail.",
      ] },
      { type: "p", html: "This enabled us to think about how we could actually employ a real use case for artificial intelligence; however, many questions about the shape of the solution were still unanswered." },
    ],
  },
  {
    id: "phase-three",
    title: "Solution Scoping, Stakeholder Alignment",
    blocks: [
      { type: "p", html: "On the scoping phase I had to think about the following aspects:" },
      { type: "h6", text: "1. Should AI autocorrect the answers, or should we just let the users know what inputs are wrong?" },
      { type: "p", html: "<strong>Solution: Feedback, not autocorrect.</strong> Together with the business stakeholders we made a decision to rather <strong>inform users what mistakes they had made and ask them for the \"manual\" improvement</strong>, rather than provide an autocorrect or text to paste. Primarily because most likely the AI wouldn't have a good source of truth. The other aspect was that we wanted <strong>users to feel the personal responsibility for the content</strong>, which we felt would be diminished if AI replaced them with figuring out the content. Whenever a mistake happened, the solution highlighted the paragraphs with the issues, and users were asked to address a specific issue." },
      { type: "h6", text: "2. How to incorporate the solution into an already cluttered form? We already had commenting and compare-changes mode - not much empty space left for yet another feature." },
      { type: "p", html: "<strong>Solution: Reusing familiar patterns.</strong> To <strong>reduce the number of design patterns we were familiarising our users with</strong>, I wanted to reuse patterns from an already existing, somewhat similar feature - comment mode. Since we could think of the AI suggestions as comments, but provided by the machine, we could also reuse the mechanism of signalling a comment, showing their number, and resolving them." },
      { type: "figure", figure: { src: "/UX-Portfolio/nicerpicture.png", alt: "AI validation indicators on the New Headcount Request form", maxWidth: "70%" } },
      { type: "figureRow", figures: [
        { src: "/UX-Portfolio/comment_comparison.png", alt: "Comment mode reused as the pattern for AI suggestions", objectPosition: "center 35%" },
        { src: "/UX-Portfolio/validation-screen-4.png", alt: "Feedback-based AI validation highlighting issues in the form", objectPosition: "right center" },
      ] },
      { type: "h6", text: "3. When the solution provides wrong suggestion, how users can react to that?" },
      { type: "p", html: "<strong>Solution: Reporting AI mistakes.</strong> Though we felt like we had exhausted the list of potential issues, we couldn't be 100% sure. Also, we had to <strong>account for AI hallucination scenarios</strong>. Therefore, I <strong>designed the mechanism to report a mistake of the validation agent</strong>. Whenever a user reported a specific suggestion as invalid, this specific criterion wouldn't be checked ever again against the text provided for the input. To decrease the chance of reporting the mistake just to be able to ignore validation, the copy suggested that each report will be <strong>checked for improving the accuracy of the solution</strong> - and that wasn't a lie, we wanted to see these reports, quantify them, and act upon them." },
      { type: "figure", figure: { src: "/UX-Portfolio/critical mistake.png", alt: "Reporting AI validation mistakes mechanism", maxWidth: "70%" } },
      { type: "h6", text: "4. How to motivate users to address as many remarks as possible?" },
      { type: "p", html: "<strong>Solution:</strong> To inform users how they were doing with the quality of the application, I introduced a <strong>\"Quality Score\"</strong> — a percentage score which informed users about how far they are from what we consider being 100% right. I proposed a <strong>75% threshold</strong> under which users wouldn't be able to <strong>proceed to review stage</strong>. Users were informed about the quality score at the bottom of the screen, they could also click on the score to <strong>see what issues are contributing to the lowered score</strong>. Also, they were reminded about the score while they click on the \"Send for Review\" button." },
      { type: "figure", figure: { src: "/UX-Portfolio/q-score-1.png", alt: "Quality Score Summary showing score below threshold", maxWidth: "70%" } },
      { type: "figureRow", figures: [
        { src: "/UX-Portfolio/q-score-2.png", alt: "Quality Score Summary showing acceptable score" },
        { src: "/UX-Portfolio/q-score-3.png", alt: "Quality Score indicator at the bottom of the form" },
      ] },
      { type: "p", html: "<strong>Solution: Critical vs. non-critical issues.</strong> Not all user mistakes should have the same weight. For example, imprecise language shouldn't be treated the same way as inputting \"lorem ipsum\" content. That's why I <strong>proposed classifying mistakes into two categories: critical mistake and non-critical issue</strong>. The solution was designed so that users wouldn't be able to proceed with a critical mistake. However, they should be able to proceed with a non-critical issue, unless they had accumulated too many of them. We <strong>set up a threshold for the number of acceptable non-critical issues</strong>, as well as a mechanism to inform the users about the <strong>overall score of the document</strong>. Users could check their score ad hoc, but also they would be informed about the score before marking the document as completed." },
      { type: "h6", text: "5. How to integrate the solution with UI, without disturbing users while they're typing?" },
      { type: "p", html: "<strong>Solution: Delayed, non-disruptive notifications.</strong> To <strong>avoid constant user disruptions with incoming feedback</strong>, we decided on a mechanism of delayed feedback without a need for users to wait before proceeding to the next fields. On the other hand, we didn't want to postpone the feedback too much, as users would forget the context necessary for the content improvement. Once the field is evaluated by the AI, users would receive a gentle notification in the corner of the screen." },
      { type: "figure", figure: { src: "/UX-Portfolio/message-box.png", alt: "Delayed non-disruptive notification about AI suggestions", maxWidth: "70%" } },
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
    const ListTag = block.ordered ? "ol" : "ul";
    const listClass = block.ordered ? "list-decimal" : "list-disc";
    return (
      <div key={idx} className="mb-6">
        {block.intro && (
          <p className="text-base text-gray-600 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: block.intro }} />
        )}
        <ListTag
          className={`text-base text-gray-600 leading-relaxed ${listClass} pl-6 space-y-1`}
          {...(block.ordered && block.start ? { start: block.start } : {})}
        >
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ListTag>
      </div>
    );
  }
  if (block.type === "figure") {
    const { src, alt, caption, narrow, zoomable, maxWidth, mobileFrame } = block.figure;
    const inner = (
      <figure className={narrow ? "" : "my-8"}>
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          {mobileFrame && <MobileStatusBar />}
          {zoomable
            ? <Lightbox src={src} alt={alt ?? ""} caption={caption} />
            : <div className="block w-full"><ImageWithFallback src={src} alt={alt ?? ""} className="w-full h-auto block" /></div>}
          {mobileFrame && <MobileNavBar />}
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
    if (maxWidth) {
      return (
        <div
          key={idx}
          className="mx-auto md:max-w-[var(--fig-max-w)]"
          style={{ "--fig-max-w": maxWidth } as React.CSSProperties}
        >
          {inner}
        </div>
      );
    }
    return <div key={idx}>{inner}</div>;
  }
  if (block.type === "figureRow") {
    const n = block.figures.length;
    const colClass = block.singleColumn
      ? ""
      : n >= 3 ? "md:grid-cols-3" : n === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    const hasCrop = block.figures.some(f => f.objectPosition);
    const grid = (
      <div key={idx} className={`grid grid-cols-1 ${colClass} gap-6 my-8`}>
        {block.figures.map((fig, i) => (
          <figure key={i}>
            <div className="border-4 border-[#374151] overflow-hidden bg-white">
              {fig.mobileFrame && <MobileStatusBar />}
              {fig.aspectRatio ? (
                <div className="w-full [&>button]:h-full [&>button]:block" style={{ aspectRatio: fig.aspectRatio }}>
                  {fig.zoomable
                    ? <Lightbox src={fig.src} alt={fig.alt ?? ""} caption={fig.caption} className="w-full h-full object-cover object-top" />
                    : <ImageWithFallback src={fig.src} alt={fig.alt ?? ""} className="w-full h-full object-cover object-top" />}
                </div>
              ) : fig.zoomable
                ? <Lightbox src={fig.src} alt={fig.alt ?? ""} caption={fig.caption} />
                : hasCrop
                  ? <div className="w-full aspect-[1/1] overflow-hidden"><ImageWithFallback src={fig.src} alt={fig.alt ?? ""} className="w-full h-full object-cover" style={{ objectPosition: fig.objectPosition ?? "center center" }} /></div>
                  : <div className="block w-full"><ImageWithFallback src={fig.src} alt={fig.alt ?? ""} className="w-full h-auto block" /></div>}
              {fig.mobileFrame && <MobileNavBar />}
            </div>
            {fig.caption && (
              <figcaption className="mt-3 text-sm text-gray-500 italic leading-relaxed" dangerouslySetInnerHTML={{ __html: fig.caption }} />
            )}
          </figure>
        ))}
      </div>
    );
    if (block.maxWidth) {
      return (
        <div
          key={idx}
          className="mx-auto md:max-w-[var(--row-max-w)]"
          style={{ "--row-max-w": block.maxWidth } as React.CSSProperties}
        >
          {grid}
        </div>
      );
    }
    return grid;
  }
  if (block.type === "quote") {
    return (
      <blockquote
        key={idx}
        className="border-l-4 border-[#FFC133] pl-6 py-2 my-6 text-base text-gray-700 italic leading-relaxed"
      >
        <p dangerouslySetInnerHTML={{ __html: block.html }} />
        {block.attribution && (
          <footer className="mt-2 text-sm not-italic text-gray-500">- {block.attribution}</footer>
        )}
      </blockquote>
    );
  }
  if (block.type === "h6") {
    return (
      <h5 key={idx} className="text-[20px] font-semibold text-[#374151] mb-2 mt-4">
        {block.text}
      </h5>
    );
  }
  if (block.type === "iterationCycle") {
    return (
      <IterationCycle
        key={idx}
        focus={block.focus}
        steps={block.steps}
        iterations={block.iterations}
        caption={block.caption}
      />
    );
  }
  if (block.type === "pseFormMock") {
    return (
      <figure key={idx} className="my-8">
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          <ScaledFrame>
            <PseFormMock variant={block.variant} highlight={block.highlight} />
          </ScaledFrame>
        </div>
        {block.caption && (
          <figcaption
            className="mt-3 text-sm text-gray-500 italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.caption }}
          />
        )}
      </figure>
    );
  }
  if (block.type === "pseFiltersMock") {
    return (
      <figure key={idx} className="my-8">
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          <ScaledFrame>
            <PseFiltersMock />
          </ScaledFrame>
        </div>
        {block.caption && (
          <figcaption
            className="mt-3 text-sm text-gray-500 italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.caption }}
          />
        )}
      </figure>
    );
  }
  if (block.type === "psePopupsMock") {
    return (
      <figure key={idx} className="my-8">
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          <ScaledFrame>
            <PsePopupsMock />
          </ScaledFrame>
        </div>
        {block.caption && (
          <figcaption
            className="mt-3 text-sm text-gray-500 italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.caption }}
          />
        )}
      </figure>
    );
  }
  if (block.type === "pseSaveButtonsMock") {
    return (
      <figure key={idx} className="my-8">
        <div className="border-4 border-[#374151] overflow-hidden bg-white">
          <ScaledFrame>
            <PseSaveButtonsMock />
          </ScaledFrame>
        </div>
        {block.caption && (
          <figcaption
            className="mt-3 text-sm text-gray-500 italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.caption }}
          />
        )}
      </figure>
    );
  }
  // h3
  return (
    <h3 key={idx} className="text-[24px] font-bold text-[#374151] mb-3 mt-2">
      {block.text}
    </h3>
  );
}

function PreviousStateDiagram() {
  const problems = [
    {
      title: "Partial answers",
      desc: "Users skipped or only half-answered open-ended questions.",
      icon: (
        <svg viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" fill="#FFC133" stroke="#374151" strokeWidth="3" />
          <line x1="16" y1="22" x2="44" y2="22" stroke="#374151" strokeWidth="3" />
          <line x1="16" y1="32" x2="38" y2="32" stroke="#374151" strokeWidth="3" />
          <line x1="16" y1="42" x2="26" y2="42" stroke="#374151" strokeWidth="3" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      title: "Ineffective guidance",
      desc: "Tooltips and guides didn't help users write better answers.",
      icon: (
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M12 14 H44 A4 4 0 0 1 48 18 V36 A4 4 0 0 1 44 40 H30 L22 50 V40 H16 A4 4 0 0 1 12 36 Z" fill="#FFC133" stroke="#374151" strokeWidth="3" strokeLinejoin="round" />
          <text x="28" y="32" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#374151" fontFamily="system-ui, sans-serif">?</text>
          <line x1="10" y1="50" x2="50" y2="10" stroke="#F09065" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "No specialised review",
      desc: "Reviewers weren't subject-matter experts, so issues slipped through.",
      icon: (
        <svg viewBox="0 0 60 60" fill="none">
          <circle cx="26" cy="26" r="14" fill="#FFC133" stroke="#374151" strokeWidth="3" />
          <line x1="36" y1="36" x2="50" y2="50" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
          <text x="26" y="32" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#374151" fontFamily="system-ui, sans-serif">?</text>
        </svg>
      ),
    },
  ];
  return (
    <div className="mt-12">
      <h3 className="text-[20px] font-bold text-[#374151] mb-6">General problem statements we started with</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((p) => (
          <div key={p.title} className="relative">
            <div className="absolute inset-0 bg-[#FFC133] transform translate-x-1.5 translate-y-1.5 border-4 border-[#374151]" />
            <div className="relative bg-white border-4 border-[#374151] p-5 h-full">
              <div className="w-12 h-12 mb-3">{p.icon}</div>
              <h4 className="text-[16px] font-bold text-[#374151] mb-1">{p.title}</h4>
              <p className="text-[14px] text-gray-600 leading-snug">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const caseData = getCaseBySlug(slug);
  const otherProjects = getOtherCases(slug).filter((p) => p.slug !== "other");

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
  const overview = details?.overview ?? "This project addressed issues in an <strong>ERP system</strong> where users struggled to provide accurate answers to a <strong>new headcount request form*</strong> (the questions were open-ended), often missing important points in responses that were <strong>subjected to a review</strong>. Providing more guidance, tooltips, or framing the question in a different way were not effective. To understand the problem, I <strong>conducted interviews with reviewers to identify typical user mistakes</strong> and understand how we could use AI to improve the quality of the information put to the system. The proposed solution used <strong>AI to provide feedback, telling users what mistakes they made</strong> and how to mitigate them, <strong>rather than automatically re-writing the content</strong>, ensuring people rely on their own information. I <strong>designed high-level sketches in Figma</strong>; later they were <strong>reviewed by both the business owner and AI developers to validate feasibility</strong>. The development of the project started, but the project was stopped due to resource issues.<br /><br /><em>*the process name has been changed because of the NDA</em>";
  const context = details?.context ?? DEFAULT_CONTEXT;
  const mainOutcomes = details?.mainOutcomes ?? {
    heading: "The Main Outcomes and Learning Points",
    items: [
      "<strong>Solution for supervising user inputs, motivating them to improve their work, and quantifying the quality</strong> of documents written by them",
      "<strong>Positive feedback on the proposed design solution from stakeholders</strong>",
      "Reviewed and <strong>validated concepts from AI developers</strong>, ready to follow up in the future",
      "The team and I got an understanding of <strong>how specific and granular AI task statements must be for agentic AI implementation</strong>",
      "The project helped develop skills in <strong>working across multiple disciplines, including cooperation with AI devs</strong>",
    ],
  };
  const processCards = details?.processCards ?? DEFAULT_PROCESS_CARDS;
  const phaseSections = details?.phaseSections ?? DEFAULT_PHASE_SECTIONS;
  const conclusion = details?.conclusion ?? {
    heading: "Outcomes",
    html: "What was quite challenging in the project was <strong>iterating on programming the AI behaviour</strong>. Once we were testing the rules defined after the research phase, quite often it turned out the rules were too specific or not specific enough. <strong>Together with AI developers, we had to check the AI behaviour against the real documents provided by users</strong> combined with our human judgement on the AI feedback. Unfortunately, the project was stopped in the development phase due to resource issues, though <strong>the business was pleased with the proposed solution</strong>.",
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
            <div className="lg:col-span-7 relative">
              <ImageWithFallback
                src={caseData.image}
                alt={`${caseData.title} case study cover`}
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px] object-right"
              />
              {slug === "ai-validation" && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to right, rgba(156,163,175,0.55) 0%, rgba(156,163,175,0) 35%)" }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Context */}
      <section className="bg-[#fdf7f2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-[#000000] mb-6 leading-tight">
                Overview
              </h2>
              <p
                className="text-base text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-[#000000] mb-6 leading-tight">
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
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#000000] mb-6 leading-tight">
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
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#FFC133] mb-10 leading-tight">
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
                  {phase.lines.map((line, i) => (
                    <span key={line}>{i === 0 ? <><br /><br /></> : <br />}{line}</span>
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
            <h2 className="text-[32px] lg:text-[32px] lg:text-[48px] font-bold text-[#374151] mb-6 leading-tight">
              {phase.title}
            </h2>
            {phase.blocks.map((block, i) => renderBlock(block, i))}
            {slug === "ai-validation" && phase.id === "phase-one" && <PreviousStateDiagram />}
          </div>
        </section>
      ))}

      {/* Conclusion */}
      <section className="bg-[#FDF7F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#374151] mb-6 leading-tight">
            {conclusion.heading ?? "The outcomes"}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: conclusion.html }} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFF8F0] border-t-4 border-[#374151]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="mb-8">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-[#374151] leading-tight inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px' }}>
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
                <Link to={`/projects/${p.slug}`} className="relative bg-white border-4 border-[#374151] overflow-hidden block">
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
                      <div className="p-3 bg-[#FFC133] border-4 border-[#374151] text-[#374151] group-hover:bg-[#FF8A5B] transition-colors block shrink-0">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                    <div className="mb-1 pr-16 min-h-[108px]">
                      <h3 className="text-[28px] font-bold text-[#261d08] inline" style={{ textDecoration: 'underline', textDecorationColor: '#FFC133', textDecorationThickness: '4px', textUnderlineOffset: '2px', whiteSpace: 'pre-line' }}>{p.cardTitle ?? p.title}</h3>
                    </div>
                  </div>
                </Link>
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
