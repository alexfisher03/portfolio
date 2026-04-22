import { motion } from "motion/react";
import ExperienceItem from "./ExperienceItem";
import experienceBg from "../../assets/about-bg.png";

const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } },
};

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" as const }}
      className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-12 sm:py-20 mx-4 sm:mx-10 border border-white/25 backdrop-blur-sm shadow-[0_10px_30px_0_rgba(29,78,216,0.2)]"
    >
      <div className="absolute top-1/2 left-1/2 sm:w-[2000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <img
          src={experienceBg}
          alt="gradient bg"
          style={{ rotate: "45deg" }}
          className="w-full h-full object-fill opacity-40 blur-2xl animate-[spin-rev_60s_linear_infinite]"
        />
      </div>
      <div className="flex flex-col">
        <div className="">
          <h2 className="text-xl sm:text-2xl text-white opacity-50 mb-8">
            EXPERIENCE
          </h2>
        </div>
        <div className="group">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="space-y-2"
          >
            <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-12 sm:mb-0">
              <ExperienceItem
                title="Software Engineer Intern, Wealth Services Engineering"
                company="Bank of New York (BNY)"
                description="Built a production-ready admin microservice for Pershing Wealth Services using Spring Boot and Angular. Connected the frontend to a Spring Boot backend and routed REST API calls through internal microservices to IBM mainframe data sources."
                technologies={[
                  "Java",
                  "SpringBoot",
                  "Angular",
                  "TypeScript",
                  "Gitlab CI/CD",
                  "Jasmine",
                  "Jira",
                ]}
                date="June 2025 — August 2025"
                link="https://www.bny.com/corporate/global/en.html"
              />
            </div>
            <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-12 sm:mb-0">
              <ExperienceItem
                title="Lead Researcher — verification tooling & hardware–software systems"
                company="University of Florida, SmartSystems Lab (Dr. Christophe Bobda)"
                description="Built software for debugging and analyzing pipelined RTL, including SystemVerilog parsing, structural analysis, stage-boundary extraction, and solver-backed workflows that localize failures and report witnesses tied back to RTL signals and time indices. The focus was practical verification tooling for diagnostics and counterexample generation. This work also led to a first-author publication with advising professor Christophe Bobda at IEEE DCAS 2026 on workspace-bounded reversible scheduling using grounded computation graphs exported from the verification pipeline."
                date="August 2025 — Spring 2026"
                technologies={[
                  "SystemVerilog",
                  "Parsing & semantic analysis",
                  "SAT / SMT (Z3)",
                  "Formal methods",
                  "C++",
                  "Debug tooling",
                ]}
                link="https://smartsystems.ece.ufl.edu/"
              />
            </div>
            <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-12 sm:mb-0">
              <ExperienceItem
                title="Lead Researcher — post-quantum cryptography readiness"
                company="UF SmartSystems Lab and Citi Bank R&D"
                description="Led research on post-quantum migration risk in enterprise software systems by reconstructing a bounded, sanitized case study aligned with Citi-relevant architecture. Identified where quantum-vulnerable public-key cryptography appears, normalized the findings into a cryptographic inventory, and mapped each result to services, dependencies, interfaces, and cryptographic roles to support migration planning and risk prioritization."
                date="2025 — Present"
                technologies={[
                  "Cryptographic inventory",
                  "Dependency analysis",
                  "Enterprise systems",
                  "Migration risk assessment",
                ]}
                link="https://www.citigroup.com/"
              />
            </div>
            <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-6 sm:mb-0">
              <ExperienceItem
                title="Vice President — Internal"
                company="UF Association for Computing Machinery (ACM)"
                description="Managed internal operations for UF’s largest pre-professional computer science organization by building repeatable playbooks for workshops and events and helping create code-along sessions where students left with complete, documented projects. As engineering lead, redesigned the ACM website, built ACM Connect, a Discord bot on AWS EC2 that delivered daily internship posts to more than 2,100 members, and launched the ACM Admin Dashboard for meetings, attendance, analytics, and member management. Also designed onboarding and deployment workflows that let additional campus organizations join a centralized multi-organization platform, scaling it to more than 1,000 users across groups."
                technologies={[
                  "Organization Leadership",
                  "Public Speaking",
                  "React",
                  "Next.js",
                  "Firebase",
                  "Framer Motion",
                  "Tailwind CSS",
                  "AWS EC2",
                  "discord.py",
                  "Figma",
                  "Supabase",
                  "Git",
                ]}
                date="January 2023 — May 2026"
                link="https://uf-acm.com/"
              />
            </div>
          </motion.ul>
        </div>
        <div className="mt-16 sm:mt-20">
          <h2 className="text-xl sm:text-2xl text-white opacity-50 mb-8">
            PUBLICATIONS
          </h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="space-y-2"
          >
            <div>
              <ExperienceItem
                title="Earliest Failure Localization in Pipelines via Quantum Search"
                company="IEEE DCAS 2026 Conference Proceedings"
                authors="Alexander Fisher, Christophe Bobda"
                description="Accepted for publication in the IEEE DCAS 2026 Conference Proceedings and presented at DCAS 2026. This paper studies how to localize the earliest point of failure in pipelined RTL using stage-scoped predicates derived from real design semantics and rule structure. It then uses grounded AIG-based representations to examine reversible compute and uncompute schedules under explicit workspace limits, measuring how tighter ancilla budgets force recomputation and change cost. The result is a controlled study of time-space tradeoffs in oracle-oriented verification workflows."
                date="2026"
                technologies={[
                  "Pipelined RTL verification",
                  "Boolean / AIG encodings",
                  "Reversible scheduling",
                  "Quantum search (oracle framing)",
                ]}
              />
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}
