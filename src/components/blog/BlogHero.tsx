
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Lightbulb,
  FileText,
  BrainCircuit,
} from "lucide-react";

export default function BlogHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative isolate flex min-h-[calc(100svh-100px)] items-center justify-center overflow-hidden bg-[#030717] px-5 py-16 text-white sm:px-10 lg:px-16"
    >
      {/* Futuristic background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_40%,rgba(120,55,230,0.22),transparent_55%),radial-gradient(ellipse_at_85%_75%,rgba(0,190,255,0.12),transparent_45%)]" />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160,120,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(160,120,255,0.5) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center,black,transparent 75%)",
        }}
      />

      {/* Floating glow effects */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 30, 0], y: [0, -20, 0] }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -25, 0], y: [0, 25, 0] }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      {/* Floating technology icons */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[12%] top-[18%] hidden rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4 text-purple-300 backdrop-blur-md lg:block"
      >
        <Lightbulb size={27} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[12%] top-[23%] hidden rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-cyan-300 backdrop-blur-md lg:block"
      >
        <BrainCircuit size={27} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[17%] right-[18%] hidden rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4 text-purple-300 backdrop-blur-md xl:block"
      >
        <FileText size={25} />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[850px] text-center"
      >
        {/* Eyebrow */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-cyan-400" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-200 sm:text-xs">
            XTACH Insights
          </span>

          <Sparkles size={16} className="text-purple-400" />
        </div>

        {/* Main icon */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[24px] border border-purple-400/30 bg-purple-500/10 shadow-[0_0_50px_rgba(140,70,255,0.2)] backdrop-blur-xl"
        >
          <BookOpen size={33} className="text-purple-300" />
        </motion.div>

        {/* Heading */}
        <h1
          id="blog-heading"
          className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-[-0.055em]"
        >
          Blog Page in Progress
          <br />
          
        </h1>


        {/* Coming soon status */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-purple-400/25 bg-[#10132c]/80 px-5 py-3 backdrop-blur-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-100">
            Blog Coming Soon
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 text-[13px] font-semibold shadow-[0_8px_30px_rgba(120,60,240,0.3)] transition-all hover:shadow-[0_8px_35px_rgba(120,60,240,0.5)]"
          >
            Explore XTACH
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full border border-white/25 bg-white/5 px-7 text-[13px] font-semibold backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Get in Touch
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Bottom accent */}
        <div className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

        <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Redefining The Matrix
        </p>
      </motion.div>
    </section>
  );
}
