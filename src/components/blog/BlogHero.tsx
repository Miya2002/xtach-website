
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Lightbulb,
  Orbit,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    icon: BookOpen,
    title: "Articles",
    subtitle: "Knowledge & Guides",
  },
  {
    icon: Lightbulb,
    title: "Industry",
    subtitle: "Insights",
  },
  {
    icon: Orbit,
    title: "Future-Ready",
    subtitle: "Perspectives",
  },
];

export default function BlogHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="blog-hero"
      aria-labelledby="blog-hero-title"
      className="relative isolate flex min-h-[650px] flex-col overflow-hidden bg-[#040716] text-white sm:min-h-[680px] lg:min-h-[720px]"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/blog-hero-tech.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#040716]/98 via-[#040716]/90 to-[#040716]/20 lg:from-[#040716]/98 lg:via-[#040716]/80 lg:to-[#040716]/10" />

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#040716] to-transparent" />

      {/* TOP FADE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-20 bg-gradient-to-b from-[#040716]/65 to-transparent" />

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute right-[10%] top-[25%] z-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1480px] flex-1 flex-col justify-center px-5 pb-14 pt-[135px] sm:px-9 sm:pb-16 sm:pt-[145px] lg:px-12 lg:pb-20 lg:pt-[150px] xl:px-16">
        <div className="max-w-[610px]">

          {/* EYEBROW */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -18 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              <span className="text-purple-300">
                XTACH
              </span>

              <span className="mx-2 text-slate-400">
                /
              </span>

              <span className="text-cyan-300">
                Journal
              </span>
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            id="blog-hero-title"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 24 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease,
            }}
            className="text-[clamp(2.35rem,3.8vw,3.9rem)] font-bold leading-[1.12] tracking-[-0.05em]"
          >
            Ideas That Shape
            <br />

            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What&apos;s Next.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.24,
              ease,
            }}
            className="mt-6 max-w-[490px] text-[14px] leading-[1.85] text-slate-200 sm:text-[15px]"
          >
            Explore insights, emerging technologies,
            creative thinking, and the ideas driving
            digital transformation.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#blog-articles"
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 px-7 text-[13px] font-semibold text-white shadow-[0_12px_35px_rgba(116,58,237,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(116,58,237,0.4)]"
            >
              Explore Articles

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#blog-categories"
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-purple-400/40 bg-[#080b20]/50 px-6 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-purple-500/15"
            >
              Our Topics

              <ArrowUpRight
                size={15}
                className="text-purple-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.48,
              ease,
            }}
            className="mt-12 grid max-w-[570px] grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-6"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 flex-col gap-2.5 sm:flex-row sm:items-center"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 text-cyan-300 backdrop-blur-sm">
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-white sm:text-[12px]">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[9px] leading-snug text-slate-300 sm:text-[10px]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
