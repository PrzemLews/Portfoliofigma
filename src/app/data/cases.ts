import { FlaskConical, Cpu, Glasses, MapPin, Utensils, Monitor, FolderOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Figure = {
  src: string;
  alt?: string;
  caption?: string;
  narrow?: boolean;  // renders the figure centred at ~1/3 width
  zoomable?: boolean; // adds a click-to-enlarge lightbox
};

export type ContentBlock =
  | { type: "p"; html: string }
  | { type: "list"; intro?: string; items: string[] }
  | { type: "h3"; text: string }
  | { type: "figure"; figure: Figure }
  | { type: "figureRow"; figures: Figure[] }
  | { type: "quote"; html: string; attribution?: string };

export type CaseDetails = {
  heroTitle?: string; // overrides "Case N" label, e.g. "UX research in VR"
  overview: string;
  context: { label: string; value: string }[];
  mainOutcomes: {
    heading?: string;
    intro?: string;
    items: string[];
    outro?: string; // HTML allowed
  };
  processCards: {
    iconSrc: string;
    anchor: string;
    title: string;
    lines: string[];
  }[];
  phaseSections: {
    id: string;
    title: string;
    blocks: ContentBlock[];
  }[];
  conclusion: {
    heading?: string;
    html: string;
  };
};

export type CaseData = {
  slug: string;
  id: number;
  title: string;
  subtitle: string;
  category: "research" | "design" | "other";
  description: string;
  image: string;
  icon: LucideIcon;
  tags: string[];
  details?: CaseDetails;
};

const LOUPE = "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104639f2f3ee94b66347ddc_loupe.png";
const GROWTH = "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109bdd46ca2ebce89a4c6bc_growth.png";
const LAYOUT = "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610464394b6e3051b949dde1_layout.png";
const PROTOTYPING = "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104646ea631535924d41c7a_prototyping.png";
const ITERATION = "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610715808346ad44b9476dbb_iteration.png";

export const cases: CaseData[] = [
  {
    slug: "ing",
    id: 1,
    title: "ING Netherlands",
    subtitle: 'Is "??? for flats" a good idea?',
    category: "research",
    description:
      "This is a story about working in the ING headquaters' startup accelerator. The task of my team was validating a business model with mix of different research methods. We followed the ING's custom lean-startup validation framework.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317ef70f2c3a950cf279_ingcover.jpg",
    icon: FlaskConical,
    tags: ["Customer Research", "Lean UX", "Ideation"],
  },
  {
    slug: "ericsson",
    id: 2,
    title: "Ericsson IoT",
    subtitle: "How to improve an IoT design process?",
    category: "research",
    description:
      "I looked for a way to improve experience in participating in a design process of IoT systems. As a result of individual interviews and RITE testing I designed IoT Solution Advisor - a platform for matching system requirements with an IoT technology stack.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61030d6e7ff1602f83c7a8e2_erikson2.png",
    icon: Cpu,
    tags: ["Customer Research", "Iterative Prototyping"],
    details: {
      heroTitle: "Ericsson IoT",
      overview:
        "In this project, I wanted to find bottlenecks in the general IoT design process and support them with an analog toolkit or digital tool. After review of IoT challenges and several already existing tools, I decided to focus on the aspect of supporting technology selection. I created an initial prototype which was improved by insights from individual interviews and RITE (Rapid Iterative Testing and Evaluation) with industry experts. Then, to decrease the difficulty of using the tool, I applied RITE again, but with novice users.",
      context: [
        { label: "Contribution:", value: "UX research, UX design" },
        { label: "Context:", value: "Commercial project, 5-months duration" },
        { label: "Team size:", value: "1 person (supported by different business / technology specialists)" },
        { label: "Dates:", value: "02.2021 – 06.2021" },
        { label: "Tools:", value: "Axure RP" },
      ],
      mainOutcomes: {
        heading: "The main deliverables / learning points",
        items: [
          "<strong>Clickable, complex prototype of the IoT Solution Advisor (IoT SA)</strong> – a tool that helps to match technical / operational requirements of an IoT system with a specific technology stack (devices / connectivity types).",
          "<strong>Analysis of already existing analog toolkits and digital tools</strong> which aim to support the IoT process. The goal of such analysis was to explore which areas of IoT design / implementation are not covered well.",
          "<strong>List of discoveries about industry problems</strong> and recommendations on how to handle such problems with a digital tool.",
          "<strong>Insights about design process challenges</strong> and corresponding ideas on how they can be addressed by IoT SA.",
        ],
        outro:
          "Personally, I learned a lot about IoT, its design process, and telecommunications. I practiced RITE methodology intensively. I understood the difficulties of user research in Business-to-Business projects.<br /><br />As the project was also the topic of my Master's Thesis, it followed scientific research procedures. Therefore, the general aim of the project was to address the following research questions:<br /><br /><strong>RQ1:</strong> <em>What characteristics and features should the IoT Solution Advisor have to address technological challenges that design projects face?</em><br /><br /><strong>RQ2:</strong> <em>What improvements could be implemented in the IoT Solution Advisor so IoT beginners could still successfully use it?</em>",
      },
      processCards: [
        {
          iconSrc: LOUPE,
          anchor: "phase-one",
          title: "Understanding the challenge",
          lines: ["Literature review", "Analysis of already", "existing tools", "Business Analysis (Ericsson)"],
        },
        {
          iconSrc: ITERATION,
          anchor: "phase-two",
          title: "1st cycle of research & design",
          lines: ["Prototype of the first version", "Individual interviews", "RITE with industry experts"],
        },
        {
          iconSrc: ITERATION,
          anchor: "phase-three",
          title: "2nd cycle of research & design",
          lines: ["RITE with novice users"],
        },
      ],
      phaseSections: [
        {
          id: "phase-one",
          title: "Understanding the challenge",
          blocks: [
            {
              type: "p",
              html: "One of the first steps was to find and analyze printable toolkits for supporting the IoT design process. They were reviewed to get inspiration for the IoT-SA interface and discover important areas that should be addressed while planning an IoT project. For each one, I listed the part of the design / implementation process that they tried to handle, what aspects are solved well, and what are their bottlenecks. Based on the review, I created a map of the solutions, where they are placed according to the stage of the process they support.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610722f0f465e9e1e1cebbf9_map%20tools.jpg",
                alt: "A map of stages, challenges and tools of the IoT design / implementation process",
                caption: "A map of stages, challenges and tools of the IoT design / implementation process.",
              },
            },
            { type: "h3", text: "Challenges to address" },
            {
              type: "list",
              items: [
                "Latency and connectivity",
                "Battery lifetime",
                "Finance and risks (costs, prototyping aspects)",
                "Interoperability (common communication standards for each device in the IoT network)",
                "Intelligent analysis (AI computing placement)",
              ],
            },
          ],
        },
        {
          id: "phase-two",
          title: "1st cycle of research & design",
          blocks: [
            { type: "h3", text: "The initial prototype of IoT SA" },
            {
              type: "p",
              html: "Based on work done at the previous stage, I created the initial prototype. Except for addressing challenges mentioned in the previous paragraph, I also followed:",
            },
            {
              type: "list",
              items: [
                "Nielsen and Molich usability heuristics",
                "Graphic design rules: Fitt's law, Hick's law, Gestalt principles",
                "Ericsson Design System",
              ],
            },
            {
              type: "p",
              html: "The prototype was created in AXURE RP 9 for desktop resolution (1300px width). The initial version is available under the following link: <a href=\"https://2lxg5b.axshare.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#F09065] underline hover:text-[#374151] transition-colors\">2lxg5b.axshare.com</a>. Examples of features are visualized below.",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6107aab24e858b18e2027676_eri2.jpg",
                  alt: "Screen from the first step of IoT SA",
                  caption: "Step 1 – collecting data about required latency, radio conditions and addressed industry.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6107aaaab1082c757e8dc405_eri1.jpg",
                  alt: "The last step of the IoT SA",
                  caption: "Final step – suggestion of specific sensors, middlemen devices and matching communication protocols.",
                },
              ],
            },
            { type: "h3", text: "1st cycle of research" },
            {
              type: "p",
              html: "The primary focus of the research was to discover what decisions need to be considered in order to create a sufficient IoT system for a defined operational and business context – so to answer the first research question. Although the initial design tried to address technological challenges and was based on already existing tools, I wanted to verify the way they were addressed on the prototype. For this research cycle, the expertise of 6 industrial experts was used (including 1 for a pilot session). For this research cycle, I engaged people fulfilling specific criteria:",
            },
            {
              type: "list",
              items: [
                "Have an IT background; working as a project manager, software / hardware developer, or researcher",
                "Understand the role of sensors, gateways, cloud, and their desired features and parameters",
                "Aware of the benefits, limitations, and disadvantages of different network protocols",
                "At least three years of experience in the IoT industry, including participation in at least one IoT project",
              ],
            },
            {
              type: "p",
              html: "I decided to conduct semi-structured interviews as the first applied method. Such interviews were preferred, as each interviewee could have different experiences, and structured questions would not allow for exploration of each discussed IoT design case. The purpose of the interview was to gather information on how decision-making is structured in a business environment. That would allow addressing needs that are not strictly related to the technical aspects but still bring value to the user group. The questions were related to roles in the IoT industry that interviewees occupied, challenges they experienced, cooperation between project specialists, and tools applicable during the design process. Secondly, just after the interviews, explorative prototype testing was carried out.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61072da0e4bb7fb9c67f475a_scheme1.jpg",
                alt: "Scheme of methods used in the first research cycle",
                caption: "Scheme of methods used in the first research cycle.",
              },
            },
            { type: "h3", text: "Learning points and improvements (cycle 1)" },
            {
              type: "p",
              html: "This cycle brought the following insights:",
            },
            {
              type: "list",
              items: [
                "The tool might be used by different experts, none of whom is a specialist in the end-to-end IoT design process, so all of them need some kind of knowledge support to use the tool. Also, the IoT-SA should provide results (so the specification of the system) that are relevant to different specialists – from a financial, software, hardware, and UX point of view.",
                "I've learned that experts use data flow – a diagram which helps them understand how data is circulating between devices, the type of data and its size – as it creates requirements for them, and based on that it is possible to choose their parameters and also communication protocols.",
                "On the way of making different choices, experts wanted to see how they affect the final parameters of the system (so device costs, battery lifetime, latency, and availability of devices).",
              ],
            },
          ],
        },
        {
          id: "phase-three",
          title: "2nd cycle of research & design",
          blocks: [
            {
              type: "p",
              html: "The focus of the second cycle was increasing the learnability of the tool by inviting IoT beginners to test IoT-SA. Here, learnability is understood as how easily users can learn to use the system. In this cycle of research, it was decided to use two target groups – five IoT beginners and one expert. The beginners had to fulfill the criteria:",
            },
            {
              type: "list",
              items: [
                "Have an IT background and current occupancy as an HCI specialist, project manager, IoT developer intern, IT analyst, UX designer / researcher, Product Owner, or Product Manager",
                "Understand the role of sensors and cloud",
                "Understand what network protocols are",
                "At least initial experience working with simple IoT starter kits, like Arduino",
                "No commercial IoT experience longer than one year",
              ],
            },
            {
              type: "p",
              html: "The purpose of the last test was to validate the correctness of the design changes from an IoT expert's perspective. The first method, an interview, was applied to discover participants' knowledge gaps. That helped provide a distinction whenever an included functionality was unclear due to the interviewee's lack of knowledge or design reasons. Just after the interview, the prototype testing was conducted – the RITE method was used again. Thirdly, structured interviews were conducted just after prototype testing. Post-testing interviews were focused on the impression from testing. They included questions about parts of the system that could be difficult or easy to understand, incomprehensible terminology, or unclear visualizations.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6107b7fd9167e8c428179ead_learnability.png",
                alt: "Scheme of methods used in the second research cycle",
                caption: "Scheme of methods used in the second research cycle.",
              },
            },
            { type: "h3", text: "Learning points and improvements (cycle 2)" },
            {
              type: "p",
              html: "This cycle brought the following insights:",
            },
            {
              type: "list",
              items: [
                "As the system presented a lot of data and options, it was crucial to make all labels / explanations as clear as possible, and it plays an important role especially on the first use of IoT-SA. During the research I discovered which expressions were difficult to understand.",
                "The initial idea was to show general guidelines on the first step of IoT-SA, but it turned out that it increased cognitive load, while anyway users had to familiarize themselves with the mechanics of the prototype. Contextual guidelines, so explanations placed just next to the related options, worked better.",
                "As I used a linear prototype, it was not always possible to see what consequences of selecting an option on, for example, Step 2 would have on options on Step 3, so users felt hesitant while selecting options. That's why it is important to include in explanations also the outcomes of actions if they are not visible on the same step.",
              ],
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109c634aa1f61317d538afb_pierwszy%20screen.jpg",
                  alt: "3rd step of the IoT Solution Advisor",
                  caption: "3rd step of the IoT Solution Advisor – selection of device / cloud features and computing parameters.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109c7354aa56b222ff58148_drugi%20screen.jpg",
                  alt: "4th step of the IoT Solution Advisor",
                  caption: "4th step of the IoT Solution Advisor – selection of communication protocols.",
                },
              ],
            },
          ],
        },
      ],
      conclusion: {
        heading: "Final outcomes",
        html: "4 out of 6 experts said that IoT-SA could be a very useful tool. It can save time for exploring the technology stack, help to structure the process, and provide interesting information.<br /><br />3 out of 5 beginners admitted that IoT-SA could be a nice learning tool. All of them said that they learned something new by exploring the interface.<br /><br />It is very likely that the project will be incorporated into the Ericsson system. Based on this experience I wrote my Master's Thesis.<br /><br /><strong>Resources:</strong><br />– <a href=\"https://www.researchgate.net/publication/353527189_Investigating_a_decision_support_tool_for_designing_Internet_of_Things_solutions\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#F09065] underline hover:text-[#374151] transition-colors\">Investigating a decision support tool for designing Internet of Things solutions – Thesis</a><br />– <a href=\"https://9c94js.axshare.com/#id=wsus9l&p=step_1_-_video&g=1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#F09065] underline hover:text-[#374151] transition-colors\">The final prototype</a>",
      },
    },
  },
  {
    slug: "vr",
    id: 3,
    title: "UX Research in VR",
    subtitle: "What is the best menu for VR experiences?",
    category: "research",
    description:
      "Here we designed and developed simple VR app. Later I conducted usability tests with 8 participants. The goal of the project was to compare usability attributes of different navigation menus in context of Virtual Reality.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317f629928f84e0f3b3f_vrcover.png",
    icon: Glasses,
    tags: ["VR", "Usability Tests", "Scientific Research"],
    details: {
      heroTitle: "UX research in VR",
      overview:
        "The problem of the research was the unsatisfactory usability of handheld and contextual menus designed for Virtual Reality. Based on analyzed scientific publications, we discovered that menus with higher potency to support immersive experience are in general worse in terms of usability (like 3D or handheld menus). Our goal was to design and test 2 new types of menus supporting immersion and compare them with a traditional flat menu manipulated by a pointer. We conducted 10 tests.",
      context: [
        { label: "Contribution:", value: "Environment design, research planning, moderation and analysis" },
        { label: "Context:", value: "University research project (KTH Royal Institute of Technology, Stockholm), non-profit" },
        { label: "Team size:", value: "2 people (+ developer/researcher)" },
        { label: "Dates:", value: "10.2020 – 01.2021" },
        { label: "Tools:", value: "Unity, SUS questionnaire, Oculus Rift" },
      ],
      mainOutcomes: {
        heading: "The main deliverables / learning points",
        items: [
          "Still, simple flat menus perform the best in terms of usability, though their immersion score is the worst",
          "The main aspect that influenced the results was a sense of precision and forcing users to move their whole bodies to use the menus",
          "Touch can't be the only indicator of selection – it is too easy for an unintentional touch of different objects. Grasp could be an additional trigger of selection",
          "3D menus manipulated with touch require a special approach when it comes to communicating achieved reach between the hand and object – like change of color, animation",
          "It is necessary to use the delay between consecutive menu components, especially if they are displayed in the reach of a user's hand",
        ],
        outro:
          "<strong>Research question answer:</strong> \"Which is the most effective configuration of handheld (contextual) VR menus considering the design principles of usability without losing on immersion?\" The configuration which gives users a strong sense of control by eliminating any kind of undesired actions, like for example by the solutions mentioned above.",
      },
      processCards: [
        {
          iconSrc: LOUPE,
          anchor: "phase-one",
          title: "Exploration",
          lines: ["Formulating goals,", "research questions"],
        },
        {
          iconSrc: LAYOUT,
          anchor: "phase-two",
          title: "Design and implementation",
          lines: ["Lo-fi design of menus", "Implementation in Unity"],
        },
        {
          iconSrc: PROTOTYPING,
          anchor: "phase-three",
          title: "Experiment",
          lines: ["Planning research session,", "measures", "Conducting the tests", "Analysis of results"],
        },
      ],
      phaseSections: [
        {
          id: "phase-one",
          title: "Exploration",
          blocks: [
            {
              type: "p",
              html: "The project was the main part of the course Research Methodology and Scientific Writing. Together with my teammate Bharat, we decided to conduct research in the Virtual Reality area. As the topic, we selected the usability of handheld and contextual menus in VR.",
            },
            {
              type: "p",
              html: "Based on scientific research done in the past, we discovered that flat and fixed types of menus offer the best usability in terms of efficiency (how quickly it is possible to accomplish a task), safety (number of errors), and satisfaction of use. However, such flat menus offer a poor immersion experience. By immersion, I mean a state where users forgot about an artificial aspect of reality. As a consequence of immersion, users put more attention into task execution, the memory of presented information performs better. Immersion is one of the advantages of VR over 2D interfaces. <strong>From this stage, our main findings were:</strong>",
            },
            {
              type: "list",
              items: [
                "Handheld menus offered better immersion level comparing to fixed menus",
                "Hand pointing fixed menu offered the best level of efficiency, low error rate and low task load",
                "Handheld menus operated with hand pointing were problematic due to the Heisenberg Effect (discrete input (e.g. button press) will disturb the position of the tracker, resulting in a different selection point during ray-cast interaction)",
              ],
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106de41b5e45b0052f8d539_vr1.png",
                  alt: "Example of a flat menu",
                  caption: "An example of flat menu, manipulated by a pointer. Such menu was a baseline in our research.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106de0dca4a74f200f1b5b0_vr2.png",
                  alt: "Example of a handheld menu",
                  caption: "Handheld menu manipulated by hand. According to previous research, such menus provide better immersion.",
                },
              ],
            },
            {
              type: "p",
              html: "For the purpose of methodology, we tried to answer two research questions:",
            },
            {
              type: "list",
              items: [
                "Which is the most effective configuration of handheld (contextual) VR menus considering the design principles of usability without losing on immersion?",
                "How design decisions taken while creating handheld menus influence the ratings of usability attributes of the system (efficiency, safety)?",
              ],
            },
          ],
        },
        {
          id: "phase-two",
          title: "Design and implementation",
          blocks: [
            {
              type: "p",
              html: "We decided to run the experiment by testing 3 types of menus:",
            },
            {
              type: "list",
              items: [
                "Traditional flat menu, manipulated by a \"laser\" pointer and clicks – we treated it as a benchmark.",
                "Handheld menu, fixed to the left hand of a user, supposed to be manipulated by a direct touch of the right hand, with consecutive levels of options.",
                "Contextual 3D menu, fixed to a specific point in the VR environment. Options are selected by direct touch of a hand.",
              ],
            },
            {
              type: "p",
              html: "The users' task in this research was to modify objects on the platform – for example by changing their size, color or shape, or removing existing / adding a new object. The design was implemented in a Unity environment by my teammate with a better development experience.",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106e33624304a77fdcc1bd4_vr3.png",
                  alt: "Designed flat menu",
                  caption: "Designed / implemented flat menu",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106e3bd23ab404d4d50276d_vr4.jpg",
                  alt: "Designed handheld menu",
                  caption: "Handheld menu",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6106e3cd915e0ad607b1631c_vr5.jpg",
                  alt: "Designed contextual 3D menu",
                  caption: "Contextual 3D menu",
                },
              ],
            },
          ],
        },
        {
          id: "phase-three",
          title: "Experiment – testing and results",
          blocks: [
            { type: "h3", text: "Target group" },
            {
              type: "list",
              items: [
                "People with a low level of experience with VR applications – so each type of menu still could be challenging",
                "People with no background in VR development / design – for the same reason as the previous criterion",
                "People without potential nausea problems – we wanted to avoid dangerous situations during the usability sessions",
              ],
            },
            {
              type: "p",
              html: "We recruited the participants among other students from the campus, usually our friends.",
            },
            { type: "h3", text: "Prepared tasks" },
            {
              type: "list",
              items: [
                "As the first task – please create a new figure: big, red cube",
                "Please change the colour of figure 1 to green",
                "Remove the figure",
              ],
            },
            {
              type: "p",
              html: "Testers had to follow the same tasks for every type of menu. The order of tested menus was random and different for each participant. During the tests (which we recorded), we counted the number of actions, errors and measured time spent per task. After each tested menu, we asked users to fill the SUS questionnaire. After all tests, we asked questions about overall experience and comparison between different menus.",
            },
            { type: "h3", text: "Results" },
            {
              type: "p",
              html: "Based on quantitative measures (of time per task, actions, and errors) we stated that <strong>the flat menu turned out to be the best in all possible measures.</strong> The same result came from the qualitative part (semi-structured interview), where 9 out of 10 respondents chose a flat, fixed menu as the easiest to use. For the reasons for that, they mentioned high precision thanks to the pointing laser, and control on action moment by pressing the controllers' button. From the perspective of the users, the menu was convenient as it did not require whole-body involvement, it was clear to read and \"well-known\" due to its similarity with menus used for flat interfaces. The perceived usability was also the highest, and the system usability scale classified it for grade A according to the SUS framework. From the perspective of safety (low number of errors) and perceived usability (SUS), the second menu was the contextual 3D menu. Moreover, for 50% of test participants, this menu was described as the most natural. From all menus, the handheld menu turned out to perform the worst.",
            },
          ],
        },
      ],
      conclusion: {
        heading: "The conclusion",
        html: "We did not manage to design a menu which, compared to the traditional flat one, would perform better in the sense of usability. However, through the following experiment, we found out how handheld / contextual 3D menus could be improved. Those are mentioned in \"The main deliverables / learning points\" at the beginning of this case.<br /><br />Full research report available at: <a href=\"https://www.researchgate.net/publication/348923969_Usability_of_Handheld_VR_menus_-_Research_project\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#F09065] underline hover:text-[#374151] transition-colors\"><strong>Usability of Handheld VR menus – Research project</strong></a> (ResearchGate).",
      },
    },
  },
  {
    slug: "ar",
    id: 4,
    title: "AR Navigation",
    subtitle: "Designing AR navigation for a museum experience",
    category: "research",
    description:
      "This non-commercial project taught me how to deal with physical space and AR technology, designing for smartwatch, as well as museum customer experience. Due to COVID issues I also learnt more about the remote user research.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e4d5af21060f0c9d3_arcover.jpg",
    icon: MapPin,
    tags: ["UX Research", "AR", "Rapid Prototyping"],
  },
  {
    slug: "food-allergy",
    id: 5,
    title: "UX & Food Allergy",
    subtitle: "Technology vs allergies. Who would win?",
    category: "design",
    description:
      "My university designed a non-commercial product for those, who can't eat everything. Thanks to the database of products, our users could go exactly, where they would find everything that they need and stay inspired for their daily diet.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109612e8870c62666a65f78_squirrel.jpg",
    icon: Utensils,
    tags: ["UX Research", "UX+UI Design"],
    details: {
      heroTitle: "Healthy Squirrel",
      overview:
        "In this project we wanted to improve the shopping experience of people suffering from food intolerances / allergies. In this 8-month-long project we used a full UCD process including user needs research, low / hi-fi prototyping and 2 rounds of usability tests.",
      context: [
        { label: "Contribution:", value: "UX research, Product design" },
        { label: "Context:", value: "Non-commercial project, realized during 1-year \"UX & Product Design\" postgraduate studies" },
        { label: "Team size:", value: "5 people (researchers / designers)" },
        { label: "Dates:", value: "10.2016 – 06.2017" },
        { label: "Tools:", value: "Lookback.io, Axure" },
      ],
      mainOutcomes: {
        heading: "The main deliverables / learning points",
        items: [
          "Understanding the necessity of doing groceries in many shops instead of one",
          "Discovering the problem of diet monotony of people with many food allergies",
          "Indelible habit of checking composition of the product, despite given recommendations",
          "Understanding how allergies / intolerances may influence the lifestyle",
        ],
        outro:
          "As an outcome of the whole project we created an advanced prototype of an aggregator, where the target group could find shops / ideas / ingredients – a response to the discovered problem. During the last usability test iteration the project got very positive feedback from the end users, and most of the usability problems were fixed.",
      },
      processCards: [
        {
          iconSrc: LOUPE,
          anchor: "phase-one",
          title: "Exploration",
          lines: ["In-depth interviews", "Quantitative survey", "Personas"],
        },
        {
          iconSrc: LAYOUT,
          anchor: "phase-two",
          title: "Modelling",
          lines: ["Customer Journey Map", "Value proposition canvas", "User scenarios", "Paper wire-flows"],
        },
        {
          iconSrc: PROTOTYPING,
          anchor: "phase-three",
          title: "Final prototype",
          lines: ["Hi-fi Axure prototype", "Usability tests"],
        },
      ],
      phaseSections: [
        {
          id: "phase-one",
          title: "Exploration",
          blocks: [
            {
              type: "p",
              html: "Our group didn't start with a predefined problem statement or solution to improve. At the beginning of the process we selected a target group to improve their user experience – we chose people with food allergies / intolerances and we focused on potential shopping problems they might have. So in our case the main issue was to actually find the target group, discover its problem, find a digital solution, and test our proposal within the same target group.",
            },
            {
              type: "p",
              html: "To investigate the context of the selected target group, we decided to conduct a series of in-depth interviews. <strong>We interviewed 11 users</strong> and asked about the shopping process, the most positive experiences, shopping in new places; we used \"explain me how\" questions. Successfully, we discovered some problems:",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109a67818c86b4d6ec8a352_wiewior1.png",
                  alt: "Test participants following a task to read product information",
                  caption: "Test participants following a task to read product information.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109a71b9b0f9be4b9fb5db9_wiewior2.png",
                  alt: "Cross-analysis of registered tendencies and behaviours",
                  caption: "Cross-analysis of registered tendencies and behaviours.",
                },
              ],
            },
            {
              type: "quote",
              html: "I always go to the same store departments and buy the same products, because I know that there is no point in walking around the store and looking for something new. I rarely find something interesting. I often find it boring and tiring to eat the same thing over and over again. I have my favorite brands and products and usually buy the same groceries.",
            },
            {
              type: "quote",
              html: "For me, the biggest problem is when I didn't make lunch for the working day and I have to buy something quickly, e.g. shopping at express shops (like 7-Eleven) is a nightmare! It's hard to find a replacement product.",
            },
            {
              type: "p",
              html: "We also gathered quantitative data by collecting answers from surveys posted on Facebook groups for people with food intolerances / allergies (we collected 180 answers). <strong>Main conclusions from both research methods were:</strong>",
            },
            {
              type: "list",
              items: [
                "To collect all the food they need, they have <strong>to visit more than just one shop</strong>",
                "<strong>Monotonic diet</strong> – eating the same meals all the time",
                "The long duration of shopping and shopping planning",
                "<strong>Prices</strong> of gluten-free, lactose-free (etc.) products <strong>are usually higher</strong> than the price of traditional products",
                "The necessity of ingredients review",
              ],
            },
            { type: "h3", text: "Personas" },
            {
              type: "p",
              html: "Based on the conducted research we created 2 personas – representations of our target group. They were helpful during major design discussions.",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109a8066ef5347b271fb830_marta%20persona.png",
                  alt: "Marta persona",
                  caption: "Marta – persona.",
                  zoomable: true,
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109a80f29b5b62d279a0aac_marcin%20persona.png",
                  alt: "Marcin persona",
                  caption: "Marcin – persona.",
                  zoomable: true,
                },
              ],
            },
          ],
        },
        {
          id: "phase-two",
          title: "Modelling",
          blocks: [
            {
              type: "p",
              html: "By asking about respondents' shopping habits we could recreate their customer journey map, which turned out to be a very good tool to look for areas of experience improvement.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109a9aba7c8ef34c5321548_cjm.png",
                alt: "Customer Journey Map",
                caption: "Customer Journey Map.",
                zoomable: true,
              },
            },
            {
              type: "p",
              html: "The next steps were to figure out functionalities and put them in a natural user flow. We proceeded with creating user scenarios, then we created a set of paper wireflows. Based on the feedback gathered from more experienced UX professionals, we moved to a high-fidelity, clickable prototype.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109aa704432c8643c50e1a3_low%20fi.png",
                alt: "Low-fidelity wireflows",
                caption: "Low-fidelity wireflows.",
                zoomable: true,
              },
            },
            {
              type: "p",
              html: "To think about future constant improvement of the product, <strong>we settled a set of KPIs to monitor:</strong>",
            },
            {
              type: "list",
              items: [
                "Number of registered users",
                "Conversion from listing / product card to the usage of the link to buy the product",
                "Cost of user acquisition",
              ],
            },
          ],
        },
        {
          id: "phase-three",
          title: "Final prototype and improvements",
          blocks: [
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ab5571bb812eb10e9192_c1.png",
                  alt: "Exclusion of ingredients feature screenshot",
                  caption: "<strong>Exclusion of ingredients</strong> – global filter setting: by applying predefined filters (or adding customized ones), users can be sure displayed results won't include marked allergens.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ab553e26c97c888e38a9_c2.png",
                  alt: "Multi-input search tool feature screenshot",
                  caption: "<strong>Multi-input search tool</strong> – allows inserting more than one product with a single query to find a full list across different shops.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ab55500241c136e5b477_c3.png",
                  alt: "Snack inspirations feature screenshot",
                  caption: "<strong>Snack inspirations</strong> – suggestions for new snacks and products not previously encountered, responding to the need for a more diverse diet.",
                },
              ],
            },
            { type: "h3", text: "Usability testing & improvements" },
            {
              type: "p",
              html: "We tested the final prototype in 2 turns of usability tests. In total we tested the prototype with 12 users with food intolerances / allergies. Thanks to that, we found major areas for improvement like:",
            },
            { type: "h3", text: "1. Optimisation of the landing page" },
            {
              type: "p",
              html: "In the 1st turn of tests it turned out that users didn't understand how to use the search tool. Instead of an infographic description (which anyway they didn't read), we just put the features on the top of the website with self-explanatory labels.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ba33918aa5ac02194a68_c4.png",
                alt: "Landing page optimization",
                caption: "Landing page optimization – redesign based on testing.",
                narrow: true,
              },
            },
            { type: "h3", text: "2. Findability of product categories" },
            {
              type: "p",
              html: "Users couldn't find the list of product categories which we put in the top navigation bar. To improve findability of the categories feature, we informed about such an option when users had 0 results from using the search tool. We also fixed the header, so the option with categories is visible all the time.",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ba3373bf9159ff2ac92d_c6.png",
                  alt: "Before – categories findability",
                  caption: "Before – categories findability.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ba33396379e10f5f583f_c7.png",
                  alt: "After – categories findability",
                  caption: "After – categories findability.",
                },
              ],
            },
            { type: "h3", text: "3. Affordances of food inspirations" },
            {
              type: "p",
              html: "In the feature for food inspirations we presented selected healthy products. In the 1st research turn we found out that components which were links to the inspiration feature <strong>were not perceived as clickable due to lack of affordances</strong>. We changed the visuals of the feature, so in the 2nd turn users had no problem with the perception of the elements' clickability.",
            },
            {
              type: "figureRow",
              figures: [
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ba33533fe3829b75615c_c8.png",
                  alt: "Before – food inspirations affordance",
                  caption: "Before – food inspirations affordance.",
                },
                {
                  src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6109ba32b8a8da6c024e3c06_c9.png",
                  alt: "After – food inspirations affordance",
                  caption: "After – food inspirations affordance.",
                },
              ],
            },
            {
              type: "p",
              html: "<strong>Link to the clickable prototype:</strong> <a href=\"https://1p5p4r.axshare.com/#g=1&p=1_0_strona_g__wna\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#F09065] underline hover:text-[#374151] transition-colors\">1p5p4r.axshare.com</a>",
            },
          ],
        },
      ],
      conclusion: {
        heading: "The final outcomes",
        html: "Even though it wasn't a commercial product, we know that we did a good job thanks to feedback from our users. From my perspective it was a very important project, as it was my first project with a full UCD process applied. Thanks to it I could understand that products designed based on real insights and feedback are really appreciated by the final users.<br /><br /><em>\"Generally – it's so great that I can go only to the one shop and buy everything that I need.\"</em> <strong>– Karina, 28, lactose intolerant</strong><br /><br /><em>\"At the beginning, I told you that I have never used such a website. When we started to talk I thought that I wouldn't need such a thing. But after I had tried it I thought: 'Oh my God, shopping with such a website would be so easy!'\"</em> <strong>– Marta, 25, gluten intolerant</strong><br /><br /><em>\"Wow, this website is much more than expected!\"</em> <strong>– Ala, 22, allergic to dairy</strong>",
      },
    },
  },
  {
    slug: "pse",
    id: 6,
    title: "PSE Innovation",
    subtitle: "UX supporting Polish power lines",
    category: "design",
    description:
      "The project required UX analysis of a few ERP systems, designing a new system which integrates functionalities of previous ones. Additionally, we created a new design system for future products of PSE Innovation.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6103317e3e51cbc7dbd228bf_psecover.jpg",
    icon: Monitor,
    tags: ["UX Audit", "UX+UI Design"],
    details: {
      heroTitle: "PSE Innovation",
      overview:
        "The client of this project was a Polish public entity providing IT solutions for the energy sector. My task was to analyze their existing systems, indicate areas for improvement in the usability area, and then create an exemplary ERP application with corresponding system design. The new project was supposed to become a role-model system for improving existing applications and creating new ones. At every stage, I consulted progress with the client and its programmers. An important aspect of the project was an explanation of design decisions and customer education in the field of usability.",
      context: [
        { label: "Contribution:", value: "Usability analysis, hi-fi prototyping, negotiations with the customer" },
        { label: "Context:", value: "Commercial project, with PSE Innovation" },
        { label: "Team size:", value: "3 people (+ PM and UI designer)" },
        { label: "Dates:", value: "06.2018 – 08.2018" },
        { label: "Tools:", value: "Adobe XD" },
      ],
      mainOutcomes: {
        heading: "The main deliverables / learning points",
        items: [
          "The audit was very extensive – it included 3 different ERP systems that were designed by programmers, so in consequence the systems had to be redesigned from scratch.",
          "ERP systems used a multi-level data structure, which was a serious challenge in visualization and designing interaction for each level of data.",
          "It was a cooperation with a client inexperienced in UX design, so translating the project and comparing different solutions was very important to establish further success of the project.",
          "The process of creating system design – it turns out that it should be an iterative process, and a good design system should be created based on the needs of the system, which clarified continuously during the project.",
        ],
        outro:
          "As a result of the cooperation, high-fidelity mock-ups of an exemplary ERP system were created, together with the design of the system and a description of interactions. The client planned to use them in its future projects.",
      },
      processCards: [
        {
          iconSrc: LOUPE,
          anchor: "phase-one",
          title: "Exploration",
          lines: ["Review of stakeholder needs", "Usability audit"],
        },
        {
          iconSrc: LAYOUT,
          anchor: "phase-two",
          title: "Modelling / prototype",
          lines: ["Medium-fi mockups", "Design system"],
        },
      ],
      phaseSections: [
        {
          id: "phase-one",
          title: "Exploration",
          blocks: [
            {
              type: "p",
              html: "Our team was requested to help improve ERP solutions developed by PSE Innovation – a Polish public entity created to support power-network companies and their employees. They had already designed and developed 3 different systems, but without the help of any UX specialist. Apart from major usability problems, the lack of a coherent design system implied difficulties with further development. Our promise was to deliver knowledge and tools which would help them to create better systems.",
            },
            {
              type: "p",
              html: "As a first step, my colleague delivered training about usability and user experience to the whole team of PSE Innovation – developers, project managers, system analysts. We wanted to make sure that the PSE team would not only listen to our advice, but would co-create the system with us. The next big step was 100% my task – usability evaluation of all systems. As a reference source, I used Nielsen's Heuristics, Gestalt design principles and industrial benchmarks. During that phase, I discovered 32 areas for improvement, including 13 of the most crucial ones. Here are some examples of them:",
            },
            { type: "h3", text: "Problem 1 — Generic, non-contextual copy on buttons related to undo, overwrite and deleting data (or interrupting processes)" },
            {
              type: "p",
              html: "In the case of confirmation pop-ups it's better to use customized messages and texts on the buttons. There was also inconsistent use of red colour for buttons – once it was used for closing a pop-up window, another time for deleting data.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610466c7384a70f0e48de2bd_pse1.png",
                alt: "Screenshot with visualisation of problems with the buttons",
                caption: "Screenshot with visualisation of problems with the buttons.",
              },
            },
            { type: "h3", text: "Problem 2 — Using many \"saving buttons\" on the same screen" },
            {
              type: "p",
              html: "Due to nesting multiple forms on the same page, users might be confused whether they should use only one or more buttons, and what is the correct sequence of use – it would be better if there were no nested forms on the same page.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104674925bbb77a4996a6bb_pse2.png",
                alt: "Screenshot with visualisation of problems with using too many buttons",
                caption: "Screenshot with visualisation of problems with using too many buttons.",
              },
            },
            { type: "h3", text: "Problem 3 — Major problems with the records filtration mechanism" },
            {
              type: "list",
              items: [
                "Filtration looked and worked a bit different in each application",
                "In one system filters were in a place that didn't correspond to related data",
                "In the case of some tables dynamic filtration was implemented, but in other cases – not",
                "After applying filters, there was no feedback that they had been applied",
              ],
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/6104677b18905c6ba7ec1aab_pse3.png",
                alt: "Screenshot showing the problem with the filtration",
                caption: "Screenshot showing the problem with the filtration.",
              },
            },
            { type: "h3", text: "Problem 4 — Need to use nested tables and datasets" },
            {
              type: "p",
              html: "In the previous version, when the user displayed details about a record of data, a new pop-up was opened. And again, if the user wanted to see more details about data already displayed on the pop-up, the next pop-up was displayed. To repair this problematic navigation model I had to come up with a completely new structure of the user interface.",
            },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610467efefee0df2f9a0bc36_pse4.png",
                alt: "Screenshot with visualisation of problems with using too many popups",
                caption: "Screenshot with visualisation of problems with using too many pop-ups.",
              },
            },
          ],
        },
        {
          id: "phase-two",
          title: "Modelling / prototype",
          blocks: [
            {
              type: "p",
              html: "The next phase started with the presentation of the usability analysis report. Together with our client, we discussed the most important problems and potential solutions. Equipped with the point of view of PSE Innovation, I could design mid-fidelity design proposals. After 3 iterations of design and feedback, we co-created concepts for improvements like:",
            },
            { type: "h3", text: "Improvement 1 — New scheme of data nesting" },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610469328dc7b53bb22ca70b_pse5.png",
                alt: "Visualisation of new mechanism for data nesting",
                caption: "Visualisation of the new mechanism for data nesting.",
              },
            },
            { type: "h3", text: "Improvement 2 — Improved filtering mechanism" },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610469ad2f3ee9c53634a347_pse6.png",
                alt: "Visualisation of new filtering mechanism",
                caption: "Visualisation of the new filtering mechanism.",
              },
            },
            { type: "h3", text: "Improvement 3 — Tools for more efficient data modification" },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610469bb5e3f4c4cba32e530_pse7.png",
                alt: "Visualisation of a new method of quick data modification",
                caption: "Visualisation of a new method of quick data modification.",
              },
            },
            { type: "h3", text: "Improvement 4 — Patterns for better communication between system and users" },
            {
              type: "figure",
              figure: {
                src: "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/610469c714c7ba28b0208dce_pse8.png",
                alt: "Printscreen of new patterns of communicating error messages and warning popups",
                caption: "Printscreen of new patterns of communicating error messages and warning pop-ups.",
              },
            },
          ],
        },
      ],
      conclusion: {
        heading: "The final outcomes",
        html: "Based on the designed proposals we created a design system – so developers could use predefined elements, know the rules of developing UI of datasets, etc. As an outcome, all proposals were accepted and will be used in new systems developed by PSE Innovation.",
      },
    },
  },
  {
    slug: "other",
    id: 7,
    title: "Other Projects",
    subtitle: "A collection of smaller commercial and non-commercial work",
    category: "other",
    description:
      "Here you can find the list of shorter projects or those which I consider less important or couldn't be described in details (because of NDA issues). This folder includes extra commercial projects and non-commercial.",
    image:
      "https://cdn.prod.website-files.com/60f82d3f9214a9503e13d8fc/61040d72bf74a0e0f9ca5b4b_others2.jpg",
    icon: FolderOpen,
    tags: ["Commercial", "Non-commercial"],
  },
];

export const getCaseBySlug = (slug: string) =>
  cases.find((c) => c.slug === slug);

export const getOtherCases = (slug: string) =>
  cases.filter((c) => c.slug !== slug);
