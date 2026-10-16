
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, Wrench, Rocket } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-110px)] items-center justify-center overflow-hidden bg-[#030717] px-5 py-16 text-white sm:px-10 lg:px-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_45%,rgba(105,45,210,0.22),transparent_55%),radial-gradient(ellipse_at_80%_75%,rgba(0,190,255,0.10),transparent_45%)]" />

      {/* Animated glowing orbs */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 25, 0], y: [0, -20, 0] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[12%] -z-10 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px] sm:h-80 sm:w-80"
      />

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -20, 0], y: [0, 25, 0] }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[10%] left-[8%] -z-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px] sm:h-72 sm:w-72"
      />

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
            XTACH Services
          </span>
          <Sparkles size={16} className="text-purple-400" />
        </div>

        {/* Animated icon */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -7, 0] }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[24px] border border-purple-400/30 bg-purple-500/10 shadow-[0_0_50px_rgba(140,70,255,0.20)] backdrop-blur-xl"
        >
          <Wrench size={32} className="text-purple-300" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-[-0.055em]">
          Services Page In Progress
          <br />
         
        </h1>

         

        {/* Status */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-purple-400/25 bg-[#10132c]/80 px-5 py-3 backdrop-blur-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-100">
            Work in Progress
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 text-[13px] font-semibold shadow-[0_8px_30px_rgba(120,60,240,0.3)] transition-all hover:shadow-[0_8px_35px_rgba(120,60,240,0.5)]"
          >
            Back to Home
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/#contact"
            className="group inline-flex min-h-[48px] items-center justify-center gap-4 rounded-full border border-white/25 bg-white/5 px-7 text-[13px] font-semibold backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Start Your Project
            <Rocket
              size={17}
              className="transition-transform group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Bottom line */}
        <div className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

        <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Redefining The Matrix
        </p>
      </motion.div>
    </section>
  );
}
