
"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  BrainCircuit,
  Palette,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const expertise = [
  { icon: Code2, label: "Digital Engineering" },
  { icon: BrainCircuit, label: "AI & Automation" },
  { icon: Palette, label: "Creative Innovation" },
];

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  const stars = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        left: `${(i * 47.31 + 9) % 100}%`,
        top: `${(i * 31.67 + 13) % 100}%`,
        size: i % 7 === 0 ? 2.5 : 1.5,
        delay: (i % 9) * 0.35,
        duration: 2.8 + (i % 5) * 0.65,
      })),
    []
  );

  const reveal = (delay: number) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24, filter: "blur(5px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: 0.85,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="services-hero"
      aria-labelledby="services-hero-title"
      className="relative isolate overflow-hidden bg-[#030616] text-white"
    >
      {/* ANIMATED GALAXY IMAGE */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[4%] -z-20"
        style={{
          backgroundImage:
            "url('/images/services/services-galaxy-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
        initial={
          reduceMotion
            ? false
            : { opacity: 0.7, scale: 1.04 }
        }
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: 1,
                scale: [1.04, 1.095, 1.04],
                x: ["0%", "-1.2%", "0%"],
                y: ["0%", "0.8%", "0%"],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                scale: {
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 1.5 },
              }
        }
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#030616]/95 via-[#030616]/75 to-[#030616]/20 lg:from-[#030616]/95 lg:via-[#030616]/55 lg:to-transparent" />

      {/* TOP AND BOTTOM FADES */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030616]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030616]/85 to-transparent" />

      {/* SLOW AMBIENT GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.55, 0.25],
                scale: [1, 1.18, 1],
                x: [0, -35, 0],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TWINKLING STARS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {stars.map((star, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-blue-100"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 7px rgba(160,200,255,0.65)",
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.15, 0.85, 0.15],
                    scale: [0.8, 1.4, 0.8],
                  }
            }
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col justify-center px-5 pb-12 pt-[132px] sm:px-9 sm:pb-14 sm:pt-[145px] lg:min-h-[650px] lg:px-12 lg:pb-12 lg:pt-[135px] xl:px-16">
        <div className="max-w-[670px]">

          {/* EYEBROW */}
          <motion.div
            {...reveal(0.08)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="relative h-[2px] w-9 bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              <motion.span
                className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#d946ef]"
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, 28, 0] }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-200">
              Our Services / XTACH
            </span>

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, 12, -12, 0],
                      scale: [1, 1.15, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={14} className="text-cyan-400" />
            </motion.span>
          </motion.div>

          {/* ANIMATED HEADING */}
          <h1
            id="services-hero-title"
            className="text-[clamp(2.5rem,4.15vw,4.25rem)] font-bold leading-[1.13] tracking-[-0.055em]"
          >
            <motion.span
              {...reveal(0.18)}
              className="block"
            >
              Technology
            </motion.span>

            <motion.span
              {...reveal(0.3)}
              className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Without Limits.
            </motion.span>

            <motion.span
              {...reveal(0.42)}
              className="block"
            >
              Endless Possibilities.
            </motion.span>
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.54)}
            className="mt-5 max-w-[540px] text-[13px] leading-[1.85] text-slate-300 sm:text-[14px] lg:text-[15px]"
          >
            We turn ambitious ideas into powerful digital
            experiences, intelligent AI solutions, and
            future-ready technology that helps businesses grow.
          </motion.p>

          {/* ANIMATED BUTTONS */}
          <motion.div
            {...reveal(0.65)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={
                reduceMotion ? undefined : { y: -3, scale: 1.025 }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#services"
                className="group inline-flex min-h-[46px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-500 to-cyan-500 px-6 text-[12px] font-semibold text-white shadow-[0_12px_30px_rgba(123,58,237,0.25)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(123,58,237,0.45)] sm:text-[13px]"
              >
                Explore Our Services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={
                reduceMotion ? undefined : { y: -3, scale: 1.025 }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[46px] items-center justify-center gap-4 rounded-full border border-purple-400/40 bg-[#080b22]/55 px-6 text-[12px] font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/60 hover:bg-purple-500/15 sm:text-[13px]"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="text-purple-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* EXPERTISE LABELS */}
          <motion.div
            {...reveal(0.76)}
            className="mt-9 flex max-w-[600px] flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -2, x: 2 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: [0.7, 1, 0.7],
                          }
                    }
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="text-cyan-400"
                    />
                  </motion.span>

                  <span className="text-[11px] font-medium text-slate-300">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.a
            {...reveal(0.85)}
            href="#services"
            className="mt-7 inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-cyan-300"
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 5, 0] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={15} />
            </motion.span>

            Scroll to Explore
          </motion.a>
        </div>
      </div>

      {/* BOTTOM NEON LINE */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-cyan-400/25" />
    </section>
  );
}
