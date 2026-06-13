export const profile = {
  name: "Alexander Fisher",
  role: "Software Engineer",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/alexfisher03/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fisheralexander03/" },
  ],
} as const

export type EducationRecord = {
  degree: string
  school: string
  focus?: string
}

export const education: EducationRecord[] = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Texas",
  },
  {
    degree: "B.S. in Computer Science",
    school: "University of Florida",
    focus: "Focused on theory, scalable systems, and real-world applications.",
  },
] as const

export type ExperienceRecord = {
  title: string
  company: string
  description: string
  technologies: string[]
  date: string
  link?: string
}

export const experiences: ExperienceRecord[] = [
  {
    title: "Software Engineer",
    company: "Cylake",
    description: "Building the future of cybersecurity with some of the world's best engineers.",
    technologies: ["Software Engineering", "Cybersecurity"],
    date: "2026 - Present",
  },
  {
    title: "Lead Researcher - Enterprise Infrastructure Migration",
    company: "Citi Bank-backed research",
    description:
      "TIBCO BW to Apache Camel migration research. Helped develop the migration pipeline, the system architecture for the tooling, and the migration algorithm.",
    technologies: ["Apache Camel", "TIBCO BW", "Migration tooling", "System architecture"],
    date: "2026",
  },
  {
    title: "Lead Researcher - Post-Quantum Cryptography Readiness",
    company: "UF SmartSystems Lab and Citi Bank R&D",
    description:
      "Led research on post-quantum migration risk in enterprise software systems by reconstructing a bounded, sanitized case study aligned with Citi-relevant architecture. Identified where quantum-vulnerable public-key cryptography appears, normalized the findings into a cryptographic inventory, and mapped each result to services, dependencies, interfaces, and cryptographic roles to support migration planning and risk prioritization.",
    technologies: [
      "Cryptographic inventory",
      "Dependency analysis",
      "Enterprise systems",
      "Migration risk assessment",
    ],
    date: "Fall 2025 - Spring 2026",
    link: "https://www.citigroup.com/",
  },
  {
    title: "Lead Researcher - Verification Tooling and Hardware-Software Systems",
    company: "University of Florida SmartSystems Lab (Dr. Christophe Bobda)",
    description:
      "Built software for debugging and analyzing pipelined RTL, including SystemVerilog parsing, structural analysis, stage-boundary extraction, and solver-backed workflows that localize failures and report witnesses tied back to RTL signals and time indices. The focus was practical verification tooling for diagnostics and counterexample generation. This work also led to a first-author publication with advising professor Christophe Bobda at IEEE DCAS 2026 on workspace-bounded reversible scheduling using grounded computation graphs exported from the verification pipeline.",
    technologies: [
      "SystemVerilog",
      "Parsing and semantic analysis",
      "SAT / SMT (Z3)",
      "Formal methods",
      "C++",
      "Debug tooling",
    ],
    date: "August 2025 - Spring 2026",
    link: "https://smartsystems.ece.ufl.edu/",
  },
  {
    title: "Software Engineer Intern, Wealth Services Engineering",
    company: "Bank of New York (BNY)",
    description:
      "Built a production-ready admin microservice for Pershing Wealth Services using Spring Boot and Angular. Connected frontend with Spring Boot backend, leveraging REST API calls to IBM Mainframe master database through microservice chaining.",
    technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "GitLab CI/CD", "Jasmine", "Jira"],
    date: "June 2025 - August 2025",
    link: "https://www.bny.com/corporate/global/en.html",
  },
  {
    title: "Vice President - Internal",
    company: "UF Association for Computing Machinery (ACM)",
    description:
      "Managed internal operations for UF's largest pre-professional Computer Science organization, establishing repeatable formulas for successful workshop and social event creation. Led the creation and delivery of technical code-along workshops, expanding annual engagement by over 8x and driving a 50% average increase in total organization attendance, while ensuring all projects were hands-on, documented, and take-home ready. (Previously served as Workshop Lead)",
    technologies: [
      "Public Speaking",
      "Organization Leadership",
      "React",
      "Git",
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "Figma",
      "Firebase",
    ],
    date: "January 2023 - May 2026",
    link: "https://uf-acm.com/",
  },
  {
    title: "Design Team Lead",
    company: "UF Association for Computing Machinery (ACM)",
    description:
      "Redesigned and optimized the UF ACM website (Spring 2024) with React, Framer Motion, and Tailwind CSS, improving performance, maintainability, and engagement. Developed and deployed ACM Connect (Fall 2024), a Discord bot on AWS EC2 using discord.py, automating daily internship and opportunity postings for 2,100+ members. Built and launched the ACM Admin Dashboard (Spring 2025) with Next.js, React, and Firebase, centralizing meetings, attendance, analytics, and member administration for 475+ users.",
    technologies: ["React", "Next.js", "Firebase", "Framer Motion", "Tailwind CSS", "AWS EC2", "discord.py"],
    date: "May 2024 - May 2025",
    link: "https://acm-connect-website-git-feature-tandev-jasons-projects-bbe11fb6.vercel.app/",
  },
]

export type PublicationRecord = {
  title: string
  venue: string
  authors: string
  description: string
  date: string
  technologies: string[]
}

export const publications: PublicationRecord[] = [
  {
    title: "Earliest Failure Localization in Pipelines via Quantum Search",
    venue: "IEEE DCAS 2026 Conference Proceedings",
    authors: "Alexander Fisher, Christophe Bobda",
    description:
      "Accepted for publication in the IEEE DCAS 2026 Conference Proceedings and presented at DCAS 2026. This paper studies how to localize the earliest point of failure in pipelined RTL using stage-scoped predicates derived from real design semantics and rule structure. It then uses grounded AIG-based representations to examine reversible compute and uncompute schedules under explicit workspace limits, measuring how tighter ancilla budgets force recomputation and change cost. The result is a controlled study of time-space tradeoffs in oracle-oriented verification workflows.",
    date: "2026",
    technologies: [
      "Pipelined RTL verification",
      "Boolean / AIG encodings",
      "Reversible scheduling",
      "Quantum search (oracle framing)",
    ],
  },
]

export type ProjectRecord = {
  year: string
  title: string
  stack: string[]
  linkHref?: string
  linkLabel?: string
  description?: string
  featured?: boolean
  statusLabel?: string
}

export const projects: ProjectRecord[] = [
  {
    year: "2026",
    title: "Budgeted Reversible Computation on And-Inverter Graphs",
    description:
      "Published at IEEE DCAS 2026: developed and evaluated schedulers for reversible computation on AIGs under strict ancilla budgets, spanning store-all baselines through exact-optimal Dijkstra search, with budget-vs-cost analysis.",
    stack: ["C++", "AIG", "Reversible Scheduling", "Dijkstra", "Ancilla Budgeting"],
    linkHref: "https://github.com/alexfisher03/budgeted_active_volume_algorithm",
    linkLabel: "GitHub Repo",
    featured: true,
  },
  {
    year: "2026",
    title: "Shigawire",
    description:
      "Desktop HTTP recording and replay proxy with automatic redaction, packaged with Tauri and backed by Go/Fiber, reverse-proxy capture, and SQLite.",
    stack: ["Tauri", "Next.js", "React", "Tailwind", "Go", "Fiber", "SQLite"],
    linkHref: "https://github.com/alexfisher03/shigawire-dev",
    linkLabel: "GitHub Repo",
    featured: true,
  },
  {
    year: "2025",
    title: "Amtal - HDL Parsing and Verification Pipeline",
    description:
      "End-to-end toolchain from SystemVerilog RTL and stage-scoped rules to solver-ready Boolean constraints: lex/parse, binding, Boolean IR, AIG, CNF, Z3 SAT, and witness reports mapped back to signals and time indices, built for explainable debug.",
    stack: ["SystemVerilog", "Rust", "C++", "Parsing", "AIG", "CNF", "Z3", "SAT"],
    linkLabel: "Closed-source",
    statusLabel: "Closed-source",
    featured: true,
  },
  {
    year: "2025",
    title: "Quantum Vision",
    description: "Educational and interactive web application visualizing various quantum systems.",
    linkHref: "https://qvisionsim.com",
    linkLabel: "qvisionsim.com",
    stack: ["Svelte", "SvelteKit", "TypeScript", "Tailwind", "Svelte Cubed"],
    featured: true,
  },
  {
    year: "2025",
    title: "Swamp Subleasing",
    description: "Early contributor - platform for UF students to list and find subleases all in one place (400+ users).",
    linkHref: "https://www.swampsubleasing.com/",
    linkLabel: "swampsubleasing.com",
    stack: ["React", "Next.js", "Tailwind", "PostgreSQL"],
    featured: true,
  },
  {
    year: "2025",
    title: "ACM Connect - Discord Internship Bot",
    stack: ["Python", "Discord.py", "AWS"],
    linkHref: "https://acm-connect-website-git-feature-tandev-jasons-projects-bbe11fb6.vercel.app/",
    linkLabel: "acm-connect-website",
  },
  {
    year: "2024",
    title: "UF ACM Administrative Dashboard",
    stack: ["React", "Firebase", "Tailwind", "Material UI"],
    linkLabel: "Closed-source",
    statusLabel: "Closed-source",
  },
  {
    year: "2024",
    title: "UF ACM API Workshop Template",
    stack: ["Python", "Flask", "JavaScript", "HTML"],
    linkHref: "https://github.com/alexfisher03/ACM_API_Workshop",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "UF ACM Fullstack Workshop Template",
    stack: ["React", "Next.js", "Supabase", "PostgreSQL"],
    linkHref: "https://github.com/alexfisher03/ACM_Fullstack_Template",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "UF ACM Admin SDK",
    stack: ["JavaScript", "Firebase", "Node.js", "Bash"],
    linkLabel: "Private",
    statusLabel: "Private",
  },
  {
    year: "2024",
    title: "Craigslist CarCache",
    stack: ["C++", "React", "Tailwind"],
    linkHref: "https://github.com/alexfisher03/COP3530_project3/tree/main",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "GatorSync - Centralized UF Student Org Scheduler",
    stack: ["React", "Django", "Tailwind", "PostgreSQL"],
    linkHref: "https://github.com/alexfisher03/CEN3031_Group4",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "UF ACM Web Portfolio Workshop 2",
    stack: ["React", "Tailwind"],
    linkHref: "https://github.com/alexfisher03/ACMWebPortfolio2",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "UF ACM Web Portfolio Workshop",
    stack: ["HTML", "CSS", "JavaScript"],
    linkHref: "https://github.com/alexfisher03/ACMWebPortfolio",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "UF ACM Main Website",
    description: "Redesign of UF ACM main website with new attendance and analytics features (500+ users).",
    linkHref: "https://uf-acm.com/",
    linkLabel: "uf-acm.com",
    stack: ["React", "Firebase", "Framer Motion"],
    featured: true,
  },
  {
    year: "2024",
    title: "Credit Spotter - AI Financial Chatbot",
    stack: ["React", "Node.js", "OpenAI API", "Tailwind"],
    linkHref: "https://github.com/alexfisher03/CFC_Hackathon2024",
    linkLabel: "GitHub Repo",
  },
  {
    year: "2024",
    title: "Minesweeper Game",
    stack: ["C++", "SFML"],
    linkLabel: "Archived",
    statusLabel: "Archived",
  },
  {
    year: "2023",
    title: "Barbell",
    description: "Gym-oriented social media web application for sharing workouts and progress.",
    linkHref: "https://github.com/alexfisher03/Barbell",
    linkLabel: "GitHub Repo",
    stack: ["Django", "React", "Tailwind", "MySQL", "Nginx", "Docker", "Gunicorn", "DigitalOcean"],
  },
  {
    year: "2023",
    title: "Sudoku Game",
    stack: ["Python"],
    linkLabel: "Archived",
    statusLabel: "Archived",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const backlogProjects = projects.filter((project) => !project.featured)
