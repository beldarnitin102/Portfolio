"use client";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SkillBridge",
    description:
      "AI learning platform transforming YouTube playlists into structured learning paths.",
    image: "/projects/skillbridge.png",
    stack: ["React", "Node", "MongoDB"],
  },

  {
    title: "ThreatLens",
    description:
      "Machine learning powered malware detection and executable visualization system.",
    image: "/projects/threatlens.png",
    stack: ["Python", "FastAPI", "ML"],
  },

  {
    title: "SkillScope",
    description:
      "Resume Analyzer with ATS scoring, Gemini AI feedback and career insights.",
    image: "/projects/skillscope.png",
    stack: ["React", "Gemini", "Express"],
  },
];

export default function ProjectsGrid() {
  return (
    <div className="space-y-10">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-3xl font-bold text-white">
          More Projects
        </h3>

        <p className="mt-3 text-white/60">
          A selection of AI, Full Stack and Machine Learning applications.
        </p>
      </motion.div>

      {/* Cards */}

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.15,
            }}
            viewport={{
              once: true,
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

    </div>
  );
}