
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  UsersRound,
  Star,
  Settings2,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: UsersRound,
  },
  {
    value: "30+",
    label: "Happy Clients",
    icon: Star,
  },
  {
    value: "5+",
    label: "Years of Experience",
    icon: Settings2,
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 23 + 9) % 85}%`,
  delay: (i % 6) * 0.5,
}));

/* COMPACT NEON PORTAL */

function NeonPortal({
  reduced,
}: {
  reduced: boolean | null;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto h-[190px] w-full max-w-[920px] overflow-hidden sm:h-[220px] lg:h-[245px]"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute bottom-[-55px] left-1/2 h-[230px] w-[440px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[70px] sm:w-[560px]"
        animate={
          reduced
            ? undefined
            : {
                opacity: [0.55, 0.9, 0.55],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-[1.5px] w-[1.5px] rounded-full bg-purple-200/70"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.15, 0.8, 0.15],
                  y: [0, -5, 0],
                }
          }
          transition={{
            duration: 4 + (index % 3),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Portal SVG */}
      <svg
        viewBox="0 0 1000 260"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="about-portal-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#36D8FF" />
            <stop offset="28%" stopColor="#985BFF" />
            <stop offset="50%" stopColor="#F5CBFF" />
            <stop offset="72%" stopColor="#A35EFF" />
            <stop offset="100%" stopColor="#36D8FF" />
          </linearGradient>

          <linearGradient id="about-horizon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A45AFF" stopOpacity="0" />
            <stop offset="28%" stopColor="#985BFF" />
            <stop offset="50%" stopColor="#F8E7FF" />
            <stop offset="72%" stopColor="#985BFF" />
            <stop offset="100%" stopColor="#A45AFF" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="about-portal-fill">
            <stop offset="0%" stopColor="#A35CFF" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#6A2FC5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#080719" stopOpacity="0" />
          </radialGradient>

          <filter
            id="about-portal-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Orbital lines */}
        <path
          d="M305 215 A195 195 0 0 1 695 215"
          stroke="#A66CFF"
          strokeWidth="1"
          opacity="0.15"
        />

        <path
          d="M340 215 A160 160 0 0 1 660 215"
          stroke="#A66CFF"
          strokeWidth="1"
          opacity="0.18"
        />

        {/* Inner glow */}
        <path
          d="M405 215 A95 95 0 0 1 595 215 Z"
          fill="url(#about-portal-fill)"
        />

        {/* Glowing outer arc */}
        <path
          d="M375 215 A125 125 0 0 1 625 215"
          stroke="#A05CFF"
          strokeWidth="23"
          opacity="0.75"
          filter="url(#about-portal-glow)"
        />

        <path
          d="M375 215 A125 125 0 0 1 625 215"
          stroke="url(#about-portal-arc)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Inner rings */}
        <path
          d="M392 215 A108 108 0 0 1 608 215"
          stroke="#E3BCFF"
          strokeWidth="4"
          opacity="0.9"
        />

        <path
          d="M410 215 A90 90 0 0 1 590 215"
          stroke="#9B60FF"
          strokeWidth="2"
          opacity="0.85"
        />

        {/* Horizon glow */}
        <path
          d="M120 215 H880"
          stroke="#A05CFF"
          strokeWidth="15"
          opacity="0.6"
          filter="url(#about-portal-glow)"
        />

        {/* Horizon line */}
        <path
          d="M120 215 H880"
          stroke="url(#about-horizon)"
          strokeWidth="2.5"
        />

        {/* Reflection */}
        <ellipse
          cx="500"
          cy="235"
          rx="160"
          ry="18"
          fill="#985BFF"
          opacity="0.2"
          filter="url(#about-portal-glow)"
        />
      </svg>
    </div>
  );
}

/* MAIN ABOUT HERO */

export default function AboutHero() {
  const reduced = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease,
    },
  });

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden bg-[#050719] text-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(83,35,155,0.13),transparent_65%)]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(180,166,255,0.7) 0.7px,transparent 0.7px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 pb-10 pt-[115px] sm:px-8 sm:pt-[125px] lg:px-12 lg:pt-[135px] xl:px-16">
        {/* Centered content */}
        <div className="mx-auto flex max-w-[850px] flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            {...reveal(0)}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-[#11102B]/80 px-3.5 py-1.5"
          >
            <Sparkles
              size={12}
              className="text-purple-300"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-purple-100 sm:text-[10px]">
              About XTACH · Redefining the Matrix
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...reveal(0.1)}
            id="about-hero-heading"
            className="mt-5 max-w-[820px] text-[clamp(2rem,3.2vw,3.25rem)] font-extrabold leading-[1.13] tracking-[-0.045em]"
          >
            We Don&apos;t Just Build Digital.
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              We Shape What&apos;s Next.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...reveal(0.2)}
            className="mt-4 max-w-[620px] text-[12px] leading-[1.8] text-slate-400 sm:text-[13px] lg:text-[14px]"
          >
            At XTACH, creativity meets technology to turn ambitious
            ideas into meaningful digital experiences. We combine
            strategy, design, and innovation to help brands grow,
            evolve, and stand out in a connected world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...reveal(0.3)}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#our-story"
              className="group inline-flex min-h-[42px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-5 text-[11px] font-semibold text-white shadow-[0_8px_25px_rgba(120,70,240,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(120,70,240,0.4)] sm:text-[12px]"
            >
              Discover Our Story

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#our-journey"
              className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-purple-400/30 bg-[#10112D]/75 px-5 text-[11px] font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-purple-500/10 sm:text-[12px]"
            >
              Our Journey

              <ArrowUpRight
                size={14}
                className="text-cyan-400"
              />
            </a>
          </motion.div>
        </div>

        {/* Portal immediately after buttons */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.25,
            ease,
          }}
          className="mt-0"
        >
          <NeonPortal reduced={reduced} />
        </motion.div>

        {/* Compact stats panel */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="relative mx-auto -mt-1 max-w-[1030px] overflow-hidden rounded-xl border border-white/10 bg-[#0C0D24]/90"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 px-3 py-4 transition-colors duration-300 hover:bg-purple-500/[0.06] sm:px-5 ${
                    index % 2 === 1
                      ? "border-l border-white/10"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-white/10 lg:border-t-0"
                      : ""
                  } ${
                    index === 2
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-purple-300">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="bg-gradient-to-r from-fuchsia-300 to-blue-300 bg-clip-text text-[21px] font-bold leading-none text-transparent sm:text-[24px]">
                      {stat.value}
                    </p>

                    <p className="mt-1.5 text-[9px] font-medium leading-snug text-slate-300 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
