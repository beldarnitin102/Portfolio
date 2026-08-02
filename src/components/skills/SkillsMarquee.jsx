"use client";

import { motion } from "framer-motion";
import SkillPill from "./SkillPill";

const frontend = [
  { icon: "⚛", name: "React.js" },
  { icon: "▲", name: "Next.js" },
  { icon: "🟨", name: "JavaScript" },
  { icon: "🎨", name: "HTML5" },
  { icon: "💠", name: "CSS3" },
  { icon: "🅱️", name: "Bootstrap" },
];

const backend = [
  { icon: "🟢", name: "Node.js" },
  { icon: "🚂", name: "Express.js" },
  { icon: "☕", name: "Java" },
  { icon: "🐍", name: "Python" },
  { icon: "💻", name: "C" },
];

const ml = [
  { icon: "📊", name: "NumPy" },
  { icon: "🐼", name: "Pandas" },
  { icon: "🤖", name: "Scikit-learn" },
  { icon: "🧠", name: "Deep Learning" },
  { icon: "✨", name: "Generative AI" },
];

const database = [
  { icon: "🍃", name: "MongoDB" },
  { icon: "🐬", name: "MySQL" },
  { icon: "🗄️", name: "SQL" },
];

const tools = [
  { icon: "🌱", name: "Git" },
  { icon: "🐙", name: "GitHub" },
  { icon: "💙", name: "VS Code" },
  { icon: "📮", name: "Postman" },
  { icon: "▲", name: "Vercel" },
  { icon: "🚀", name: "Render" },
];

function MarqueeRow({ title, items, reverse = false }) {
  const skills = [...items, ...items];

  return (
    /* 
      FIX 1: CLEAN SEPARATION
      Swapped mb-28 for pb-4 to isolate each block track cleanly without clipping context!
    */
    <div className="w-full flex flex-col items-center overflow-hidden pb-4">
      {/* Badge */}
      <span
        className="
          mb-8
          inline-flex
          items-center
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          px-6
          py-2.5
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D4AF37]
        "
      >
        {title}
      </span>

      {/* Marquee Wrapper */}
      {/* 
        FIX 2: ADDED pt-4 PADDING TOP
        This explicitly acts as a physical shield spacer, forcing the sliding 
        SkillPills DOWN and completely clearing the overlap bug visible in your screenshot!
      */}
      <div className="w-full pt-4 flex justify-center">
        <motion.div
          animate={{
            x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {skills.map((skill, index) => (
            <SkillPill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    /* 
      FIX 3: REMOVED BROKEN BR TAGS
      Using a professional 'flex flex-col gap-20' layout setup instead. 
      This pushes your rows far apart uniformly without breaking line tracking metrics!
    */
    <div className="relative mt-24 pb-32 w-full flex flex-col gap-20">
      <MarqueeRow title="Frontend Development" items={frontend} />
      <MarqueeRow title="Backend Development" items={backend} reverse />
      <MarqueeRow title="Machine Learning & AI" items={ml} />
      <MarqueeRow title="Tools & Deployment" items={tools} />
      <MarqueeRow title="Databases" items={database} reverse />
    </div>
  );
}
