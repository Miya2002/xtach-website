
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Sparkles,
} from "lucide-react";

const technologies = [
  { name: "Next.js", logo: "nextdotjs", color: "FFFFFF" },
  { name: "React", logo: "react", color: "61DAFB" },
  { name: "Node.js", logo: "nodedotjs", color: "5FA04E" },
  { name: "TypeScript", logo: "typescript", color: "3178C6" },
  { name: "Python", logo: "python", color: "3776AB" },
  { name: "AWS", logo: "amazonaws", color: "FF9900" },
  { name: "Firebase", logo: "firebase", color: "FFCA28" },
  { name: "MongoDB", logo: "mongodb", color: "47A248" },
  { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
  { name: "Docker", logo: "docker", color: "2496ED" },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* TECHNOLOGY LOGO CARD */

function TechnologyTile({
  tech,
  index,
}: {
  tech: (typeof technologies)[number];
  index: number;
}) {
  const reducedMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 24, scale: 0.95 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay: reducedMotion ? 0 : index * 0.055,
        ease,
      }}
      className="group flex min-w-0 flex-col items-center gap-3"
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[14px] border border-[#27305A] bg-[#090F25] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-400/65 group-hover:bg-[#11132E] group-hover:shadow-[0_15px_40px_rgba(124,58,237,0.2)]">
        {/* Soft hover glow */}
        <div className="pointer-events-none absolute inset-3 rounded-full bg-purple-500/0 blur-xl transition-colors duration-500 group-hover:bg-purple-500/15" />

        {/* Light reflection */}
        {!reducedMotion && (
          <div className="pointer-events-none absolute -left-[160%] top-0 h-full w-[85%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[160%]" />
        )}

        {/* Technology logo */}
        {failed ? (
          <Code2
            size={36}
            className="relative z-10 text-purple-300"
          />
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color}`}
            alt={`${tech.name} logo`}
            width={54}
            height={54}
            loading="lazy"
            onError={() => setFailed(true)}
            className="relative z-10 h-[36px] w-[36px] object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[46px] sm:w-[46px] xl:h-[50px] xl:w-[50px]"
          />
        )}

        {/* Hover underline */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-500 group-hover:w-[65%]" />
      </div>

      <span className="text-center text-[11px] font-medium leading-snug text-slate-200 sm:text-[12px]">
        {tech.name}
      </span>
    </motion.div>
  );
}

/* CINEMATIC CTA BANNER */

function VideoCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 30, scale: 0.985 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease }}
      className="group/banner relative mt-14 overflow-hidden rounded-[22px] border border-purple-500/35 bg-[#100C29] shadow-[0_20px_75px_rgba(76,28,150,0.15)] sm:mt-16"
    >
      {/* Background video - no controls */}
      <video
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      >
        <source
          src="/videos/xtach-services-cta.mp4"
          type="video/mp4"
        />
      </video>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080719]/95 via-[#100B2B]/85 to-[#0C0924]/30" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050617]/55 via-transparent to-purple-900/10" />

      {/* Animated atmosphere */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[100px]"
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.35, 0.8, 0.35],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />

      {/* Gradient bottom border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />

      {/* Main banner content */}
      <div className="relative z-10 flex min-h-[300px] flex-col justify-center gap-7 px-6 py-12 sm:min-h-[320px] sm:px-10 lg:min-h-[300px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-16">
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, x: -15 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
              Let's Build Together
            </span>

            <Sparkles
              size={14}
              className="text-purple-300"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h3
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(1.9rem,3vw,3.1rem)] font-bold leading-[1.15] tracking-[-0.045em] text-white"
          >
            Turn Your Ideas Into
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real-World Solutions.
            </span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="mt-5 max-w-[590px] text-[13px] leading-[1.85] text-slate-200 sm:text-[15px]"
          >
            Let's discuss your project and create something
            extraordinary.
          </motion.p>
        </div>

        {/* CTA button */}
        <Link
          href="/contact"
          className="group/cta inline-flex min-h-[49px] shrink-0 items-center justify-center gap-4 self-start rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 px-7 text-[13px] font-semibold text-white shadow-[0_10px_35px_rgba(110,55,220,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(110,55,220,0.45)]"
        >
          Start a Project

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

/* MAIN TECHNOLOGIES SECTION */

export default function ServicesTechnologies() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative overflow-hidden bg-[#040716] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_20%,rgba(100,40,190,0.08),transparent_40%),radial-gradient(ellipse_at_90%_75%,rgba(20,95,180,0.07),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-9 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div>
            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, x: -15 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
                Technologies We Work With
              </span>
            </motion.div>

            <motion.h2
              id="technologies-heading"
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
            >
              Powered by
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Modern Technologies.
              </span>
            </motion.h2>
          </div>

          <p className="max-w-[420px] text-[13px] leading-[1.85] text-slate-400 sm:text-[14px]">
            We use industry-leading technologies to build secure,
            scalable, and future-ready solutions.
          </p>
        </div>

        {/* Technology logos */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 min-[420px]:grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 lg:gap-x-5">
          {technologies.map((tech, index) => (
            <TechnologyTile
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}
        </div>

        {/* Cinematic banner */}
        <VideoCTA />
      </div>
    </section>
  );
}
