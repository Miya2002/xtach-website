
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  PenTool,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { icon: BookOpen, label: "Insights", color: "text-cyan-400" },
  { icon: Cpu, label: "Technology", color: "text-violet-400" },
  { icon: PenTool, label: "Creativity", color: "text-fuchsia-400" },
];

export default function BlogHero() {
  const reduced = useReducedMotion();

  const stars = useMemo(
    () =>
      Array.from({ length: 38 }, (_, i) => ({
        left: `${(i * 73.17 + 11) % 100}%`,
        top: `${(i * 47.83 + 9) % 95}%`,
        size: i % 7 === 0 ? 2 : 1,
        opacity: 0.2 + (i % 5) * 0.11,
        delay: (i % 9) * 0.5,
      })),
    []
  );

  const reveal = (delay: number, y = 20) => ({
    initial: reduced ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      delay,
      ease,
    },
  });

  return (
    <section
      id="blog-hero"
      aria-labelledby="blog-hero-title"
      className="relative isolate overflow-hidden bg-[#050617] text-white"
    >
      {/* DEEP GALAXY BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_70%,rgba(42,26,115,0.22),transparent_65%)]" />

      {/* STARS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {stars.map((star, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-blue-200"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              boxShadow:
                star.size === 2
                  ? "0 0 9px rgba(125,185,255,0.6)"
                  : "none",
            }}
            animate={
              reduced
                ? undefined
                : {
                    opacity: [
                      star.opacity * 0.45,
                      star.opacity,
                      star.opacity * 0.45,
                    ],
                  }
            }
            transition={{
              duration: 3.5 + (i % 4),
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* BACKGROUND ATMOSPHERE */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[380px] w-[850px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[115px]"
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOWING GALAXY HORIZON */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[330px] overflow-hidden sm:h-[390px] lg:h-[440px]"
      >
        {/* Planet glow beneath horizon */}
        <div className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,83,205,0.42),rgba(29,33,109,0.36)_42%,rgba(8,11,40,0.9)_75%)]" />

        {/* Wide purple atmosphere */}
        <div className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] border-t-[28px] border-violet-600/20 blur-[35px]" />

        {/* Electric blue outer glow */}
        <div className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] border-t-[12px] border-blue-500/50 blur-[14px]" />

        {/* Main sharp horizon */}
        <div className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] border-t-[3px] border-blue-400 shadow-[0_-8px_35px_rgba(59,130,246,0.75)]" />

        {/* Cyan highlight */}
        <div className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] border-t border-cyan-200/70" />

        {/* Inner orbital line */}
        <div className="absolute bottom-[-650px] left-1/2 h-[790px] w-[1320px] max-w-none -translate-x-1/2 rounded-[50%] border-t border-violet-400/20" />

        {/* Animated planet illumination */}
        <motion.div
          className="absolute bottom-[-670px] left-1/2 h-[860px] w-[1450px] max-w-none -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(79,95,255,0.25),transparent_68%)]"
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.35, 0.8, 0.35],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050617]/70 to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-[690px] w-full max-w-[1500px] flex-col items-center px-5 pb-16 pt-[155px] text-center sm:min-h-[720px] sm:px-8 sm:pt-[170px] lg:min-h-[750px] lg:px-12 lg:pt-[175px]">
        {/* EYEBROW */}
        <motion.div
          {...reveal(0.05, 12)}
          className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-[#0b1533]/75 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles
            size={15}
            className="text-cyan-400"
            strokeWidth={1.8}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100 sm:text-[11px]">
            The XTACH Journal · Ideas for Tomorrow
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          {...reveal(0.16)}
          id="blog-hero-title"
          className="mt-7 max-w-[960px] text-[clamp(2.7rem,5.2vw,5.4rem)] font-bold leading-[1.08] tracking-[-0.055em]"
        >
          Ideas That Shape
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            What&apos;s Next.
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.28)}
          className="mt-6 max-w-[650px] text-[13px] leading-[1.85] text-slate-300 sm:text-[15px] lg:text-[16px]"
        >
          Explore fresh perspectives on technology, design, artificial
          intelligence, and the ideas transforming tomorrow&apos;s
          digital world.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          {...reveal(0.38)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#blog-articles"
            className="group inline-flex min-h-[48px] items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 px-7 text-[13px] font-semibold text-white shadow-[0_12px_38px_rgba(109,40,217,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(109,40,217,0.5)]"
          >
            Explore Articles
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#blog-categories"
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-lg border border-violet-400/30 bg-[#0d122b]/70 px-6 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-violet-500/15"
          >
            Explore Topics
            <ArrowUpRight
              size={16}
              className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          {...reveal(0.52)}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/15 px-5 pt-5 sm:mt-16 sm:gap-x-10"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-[12px] text-slate-300"
              >
                <Icon
                  size={16}
                  className={item.color}
                  strokeWidth={1.8}
                />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </section>
  );
}
