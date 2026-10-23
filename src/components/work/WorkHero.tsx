
"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Globe2,
  Sparkles,
  MoveDown,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    icon: Code2,
    label: "Web Experiences",
    color: "text-cyan-400",
  },
  {
    icon: Layers3,
    label: "Brand & Design",
    color: "text-purple-400",
  },
  {
    icon: Globe2,
    label: "Digital Innovation",
    color: "text-fuchsia-400",
  },
];

function CosmicBackground({
  reduced,
}: {
  reduced: boolean | null;
}) {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        left: `${(i * 71.93 + 13) % 100}%`,
        top: `${(i * 39.47 + 19) % 100}%`,
        size: i % 12 === 0 ? 2.4 : i % 4 === 0 ? 1.6 : 1,
        duration: 3 + (i % 7) * 0.7,
        delay: (i % 15) * 0.25,
        color:
          i % 8 === 0
            ? "#67e8f9"
            : i % 5 === 0
              ? "#c4b5fd"
              : "#ffffff",
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* BASE */}
      <div className="absolute inset-0 bg-[#050616]" />

      {/* NEBULA CLOUDS */}
      <motion.div
        className="absolute left-1/2 top-[8%] h-[560px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(95,40,178,0.24),rgba(52,25,112,0.09)_48%,transparent_75%)] blur-[55px]"
        animate={
          reduced
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.7, 1, 0.7],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-[18%] top-[20%] h-[450px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(24,130,215,0.14),transparent_72%)] blur-[65px]"
        animate={
          reduced ? undefined : { x: [0, 40, 0] }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-[18%] top-[10%] h-[480px] w-[650px] rounded-full bg-[radial-gradient(ellipse,rgba(180,65,220,0.14),transparent_72%)] blur-[65px]"
        animate={
          reduced ? undefined : { x: [0, -40, 0] }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* STAR FIELD */}
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow:
              star.size > 2
                ? `0 0 10px 2px ${star.color}55`
                : `0 0 5px ${star.color}44`,
          }}
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.15, 0.9, 0.15],
                  scale: [0.8, 1.25, 0.8],
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

      {/* COSMIC MOON */}
      <motion.div
        className="absolute left-1/2 top-[7%] h-[340px] w-[340px] -translate-x-1/2 sm:h-[440px] sm:w-[440px] lg:h-[530px] lg:w-[530px]"
        animate={
          reduced ? undefined : { y: [0, -9, 0] }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* HALO */}
        <div className="absolute inset-[1%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_25%,rgba(124,58,237,0.055)_55%,transparent_75%)] blur-[22px]" />

        {/* MOON BODY */}
        <div className="absolute inset-[16%] rounded-full border border-purple-300/10 bg-[radial-gradient(circle_at_32%_28%,rgba(160,135,230,0.28),rgba(57,40,113,0.17)_45%,rgba(5,6,22,0.02)_75%)] shadow-[inset_-35px_-30px_65px_rgba(1,2,10,0.9),0_0_65px_rgba(139,92,246,0.13)]" />

        {/* CRESCENT HIGHLIGHT */}
        <div className="absolute inset-[16%] rounded-full border-r border-t border-purple-300/25 shadow-[inset_-12px_0_25px_rgba(145,94,245,0.05)]" />

        {/* CRATERS */}
        <div className="absolute left-[31%] top-[31%] h-[13%] w-[13%] rounded-full border border-purple-200/[0.06] bg-purple-200/[0.025]" />

        <div className="absolute right-[28%] top-[42%] h-[8%] w-[8%] rounded-full border border-purple-200/[0.05]" />

        <div className="absolute bottom-[29%] left-[44%] h-[11%] w-[11%] rounded-full border border-purple-200/[0.04]" />

        {/* ROTATING ORBIT 1 */}
        <motion.div
          className="absolute inset-[3%] rounded-full border border-purple-300/[0.11]"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
        </motion.div>

        {/* ROTATING ORBIT 2 */}
        <motion.div
          className="absolute inset-[9%] rounded-full border border-dashed border-purple-300/[0.09]"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* DIAGONAL SATURN RING */}
        <div className="absolute left-[1%] top-[39%] h-[23%] w-[98%] -rotate-[19deg] rounded-[50%] border border-purple-300/[0.13] shadow-[0_0_18px_rgba(139,92,246,0.06)]" />
      </motion.div>

      {/* LEFT CINEMATIC LIGHT */}
      <motion.div
        className="absolute -left-[10%] top-[34%] h-[190px] w-[48%] -rotate-[12deg] bg-[linear-gradient(90deg,rgba(105,92,220,0.26),rgba(139,120,250,0.09)_50%,transparent)] blur-[32px]"
        animate={
          reduced
            ? undefined
            : { opacity: [0.45, 0.9, 0.45] }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* RIGHT CINEMATIC LIGHT */}
      <motion.div
        className="absolute -right-[10%] top-[34%] h-[190px] w-[48%] rotate-[12deg] bg-[linear-gradient(270deg,rgba(70,145,230,0.22),rgba(145,105,245,0.09)_50%,transparent)] blur-[32px]"
        animate={
          reduced
            ? undefined
            : { opacity: [0.5, 1, 0.5] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* THIN ENERGY LINES */}
      <div className="absolute -left-[8%] top-[34%] h-px w-[40%] -rotate-[12deg] bg-gradient-to-r from-transparent via-purple-300/35 to-transparent shadow-[0_0_18px_rgba(165,130,255,0.5)]" />

      <div className="absolute -right-[8%] top-[34%] h-px w-[40%] rotate-[12deg] bg-gradient-to-l from-transparent via-cyan-300/30 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.4)]" />

      {/* CONSTELLATION */}
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M160 200 L260 135 L350 215 L455 155"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="0.6"
          strokeDasharray="4 8"
        />

        <path
          d="M1050 160 L1145 220 L1270 135 L1350 195"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="0.6"
          strokeDasharray="4 8"
        />

        {[160, 260, 350, 455].map((x, i) => (
          <circle
            key={`l-${i}`}
            cx={x}
            cy={[200, 135, 215, 155][i]}
            r="2"
            fill="#c4b5fd"
          />
        ))}

        {[1050, 1145, 1270, 1350].map((x, i) => (
          <circle
            key={`r-${i}`}
            cx={x}
            cy={[160, 220, 135, 195][i]}
            r="2"
            fill="#67e8f9"
          />
        ))}
      </svg>

      {/* SHOOTING STARS */}
      {!reduced && (
        <>
          <motion.div
            className="absolute right-[15%] top-[18%] h-px w-20 -rotate-[32deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-white"
            animate={{
              opacity: [0, 0, 0.9, 0],
              x: [0, 0, -140, -190],
              y: [0, 0, 95, 125],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute left-[22%] top-[14%] h-px w-16 -rotate-[32deg] bg-gradient-to-r from-transparent via-purple-300/60 to-white/80"
            animate={{
              opacity: [0, 0, 0.75, 0],
              x: [0, 0, -110, -150],
              y: [0, 0, 75, 100],
            }}
            transition={{
              duration: 9,
              delay: 4,
              repeat: Infinity,
              repeatDelay: 9,
              ease: "easeOut",
            }}
          />
        </>
      )}

      {/* CENTRAL READABILITY */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,22,0.5)_0%,rgba(5,6,22,0.2)_50%,transparent_85%)]" />

      {/* TOP/BOTTOM FADE */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050616]/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050616] to-transparent" />
    </div>
  );
}

export default function WorkHero() {
  const reduced = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="work-hero"
      aria-labelledby="work-hero-title"
      className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-[#050616] text-white sm:min-h-[700px] lg:min-h-[740px]"
    >
      {/* ANIMATED COSMIC BACKGROUND */}
      <CosmicBackground reduced={reduced} />

      {/* HERO CONTENT — EXTRA SPACE BELOW NAVBAR */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 pb-16 pt-[175px] text-center sm:px-8 sm:pb-16 sm:pt-[195px] lg:px-12 lg:pb-20 lg:pt-[205px] xl:pt-[215px]">
        {/* TOP LABEL */}
        <motion.div
          {...reveal(0.05)}
          className="mb-5 inline-flex items-center gap-3"
        >
          <span className="h-px w-7 bg-gradient-to-r from-purple-400 to-cyan-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-purple-200 sm:text-[11px]">
            Selected Work / XTACH
          </span>

          <Sparkles size={14} className="text-purple-400" />

          <span className="h-px w-7 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          {...reveal(0.15)}
          id="work-hero-title"
          className="max-w-[800px] text-[clamp(2.15rem,4vw,4.1rem)] font-semibold leading-[1.12] tracking-[-0.055em]"
        >
          Ideas Made{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-[#e879f9] via-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent"
            animate={
              reduced
                ? undefined
                : {
                    filter: [
                      "brightness(1)",
                      "brightness(1.18)",
                      "brightness(1)",
                    ],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Extraordinary.
          </motion.span>

          <br />
          Results Made Real.
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.27)}
          className="mt-5 max-w-[570px] text-[12px] leading-[1.85] text-slate-400 sm:text-[13px] lg:text-[14px]"
        >
          Explore the ideas we&apos;ve transformed into meaningful
          digital experiences. From distinctive identities to
          intelligent solutions, every project is designed to
          make an impact.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          {...reveal(0.4)}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div
            whileHover={reduced ? undefined : { y: -3 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
          >
            <Link
              href="#featured-work"
              className="group inline-flex min-h-[44px] items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#9254e9] to-[#5a6bf0] px-6 text-[12px] font-semibold text-white shadow-[0_8px_30px_rgba(115,70,215,0.25)] transition-shadow hover:shadow-[0_12px_40px_rgba(115,70,215,0.4)] sm:text-[13px]"
            >
              Explore Our Work

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={reduced ? undefined : { y: -3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.045] px-6 text-[12px] font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-purple-400/40 hover:bg-white/[0.08] sm:text-[13px]"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="text-purple-300"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* CAPABILITIES */}
        <motion.div
          {...reveal(0.53)}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-5"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-[11px] text-slate-400"
              >
                <Icon size={15} className={item.color} />
                {item.label}
              </div>
            );
          })}
        </motion.div>

        {/* SCROLL CUE */}
        <motion.a
          {...reveal(0.65)}
          href="#featured-work"
          className="group mt-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-300"
        >
          Explore projects

          <motion.span
            animate={
              reduced ? undefined : { y: [0, 4, 0] }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MoveDown size={13} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
