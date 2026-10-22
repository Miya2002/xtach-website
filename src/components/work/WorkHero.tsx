
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Globe2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkHero() {
  const reduced = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      id="work-hero"
      aria-labelledby="work-hero-title"
      className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-[#030615] text-white lg:min-h-[760px]"
    >
      {/* Cinematic image background */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/work-galaxy-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hide baked-in text from artwork on the left */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#030615] via-[#030615]/95 to-[#030615]/25 lg:from-[#030615] lg:via-[#030615]/90 lg:to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030615]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030615] to-transparent" />

      {/* Subtle animated ambient lighting */}
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-36 sm:px-9 sm:pt-40 lg:px-12 lg:pb-20 lg:pt-40 xl:px-16">
        <div className="max-w-[660px]">
          <motion.div
            {...reveal(0.05)}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-200 sm:text-[11px]">
              Selected Work / XTACH
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.15)}
            id="work-hero-title"
            className="text-[clamp(2.55rem,4.1vw,4.4rem)] font-bold leading-[1.1] tracking-[-0.055em]"
          >
            Ideas Made
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Extraordinary.
            </span>
            <br />
            Results Made Real.
          </motion.h1>

          <motion.p
            {...reveal(0.3)}
            className="mt-7 max-w-[510px] text-[13px] leading-[1.9] text-slate-300 sm:text-[14px] lg:text-[15px]"
          >
            Explore a selection of digital experiences, distinctive
            brands, and intelligent solutions. Discover how XTACH
            combines thoughtful design with meaningful technology.
          </motion.p>

          <motion.div
            {...reveal(0.42)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#featured-work"
              className="group inline-flex min-h-[49px] items-center justify-center gap-5 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 px-7 text-[13px] font-semibold shadow-[0_12px_35px_rgba(116,58,237,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(116,58,237,0.45)]"
            >
              Explore Our Work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-full border border-purple-400/40 bg-[#090b22]/65 px-6 text-[13px] font-semibold backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-purple-500/15"
            >
              Start a Project
              <ArrowUpRight size={16} className="text-purple-300" />
            </Link>
          </motion.div>

          <motion.div
            {...reveal(0.55)}
            className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6"
          >
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <Code2 size={17} className="text-cyan-400" />
              Web Experiences
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <Layers3 size={17} className="text-purple-400" />
              Brand & Design
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <Globe2 size={17} className="text-fuchsia-400" />
              Digital Innovation
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
