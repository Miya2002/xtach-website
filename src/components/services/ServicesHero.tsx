
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
  Orbit,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support & Guidance" },
];

const stars = Array.from({ length: 65 }, (_, i) => ({
  left: `${(i * 73.7 + 11) % 100}%`,
  top: `${(i * 41.3 + 17) % 100}%`,
  size: i % 9 === 0 ? 2 : 1,
  delay: (i % 11) * 0.35,
  duration: 2.4 + (i % 6) * 0.55,
}));

function GalaxyBackground({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#040615]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_24%,rgba(93,38,170,0.23),transparent_45%),radial-gradient(ellipse_at_78%_42%,rgba(25,72,180,0.18),transparent_48%),radial-gradient(ellipse_at_52%_100%,rgba(133,34,176,0.12),transparent_55%)]" />

      {/* Animated galaxy clouds */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-25, 25, -25],
                y: [-12, 18, -12],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[12%] -top-[35%] h-[650px] w-[650px] rounded-full bg-[conic-gradient(from_70deg,transparent_0deg,rgba(94,31,194,0.2)_55deg,transparent_115deg,rgba(25,106,232,0.13)_200deg,transparent_290deg)] blur-[90px]"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [20, -25, 20],
                y: [15, -20, 15],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[10%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[conic-gradient(from_160deg,transparent_0deg,rgba(0,184,240,0.13)_70deg,transparent_145deg,rgba(159,45,244,0.17)_230deg,transparent_320deg)] blur-[90px]"
      />

      {/* Starfield */}
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#c5d5ff]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 5px rgba(165,180,252,0.5)",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.15, 0.8, 0.15],
                  scale: [0.7, 1.2, 0.7],
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

      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(104,120,230,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(104,120,230,0.3) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#030511]/35 via-transparent to-[#030511]/10" />
    </div>
  );
}

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 25]
  );

  const reveal = (delay: number) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      ref={sectionRef}
      id="services-hero"
      aria-labelledby="services-title"
      className="relative isolate overflow-hidden bg-[#040615] text-white"
    >
      <div className="absolute inset-0 -z-10">
        <GalaxyBackground reduceMotion={reduceMotion} />
      </div>

      {/* Orbital background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[170px] -top-[330px] hidden h-[650px] w-[650px] rounded-full border border-violet-400/[0.07] lg:block"
      >
        <div className="absolute inset-[80px] rounded-full border border-cyan-400/[0.06]" />
        <div className="absolute inset-[160px] rounded-full border border-purple-400/[0.07]" />
      </div>

      {/* 
        IMPORTANT LAYOUT FIX:
        - Removed min-h-[690px] / min-h-[750px]
        - Removed large desktop vertical padding
        - Changed items-center to items-start
        - Reduced top padding to lg:pt-10
      */}
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-9 px-5 pb-12 pt-10 sm:px-9 sm:pb-14 sm:pt-12 lg:grid-cols-[47%_53%] lg:gap-0 lg:px-12 lg:pb-14 lg:pt-10 xl:px-16 xl:pt-12">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-[660px] lg:pr-6">

          {/* Eyebrow */}
          <motion.div
            {...reveal(0.05)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="relative h-[2px] w-9 bg-gradient-to-r from-purple-500 to-fuchsia-400">
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, 36, 0] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_14px_#d946ef]"
              />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300">
              Our Services
            </span>

            <Sparkles size={14} className="text-purple-400" />
          </motion.div>

          {/* Heading */}
          <h1
            id="services-title"
            className="text-[clamp(2.3rem,4vw,4.25rem)] font-bold leading-[1.12] tracking-[-0.055em] lg:text-[clamp(2.45rem,3.55vw,4.05rem)]"
          >
            <motion.span {...reveal(0.13)} className="block">
              Technology
            </motion.span>

            <motion.span {...reveal(0.23)} className="block">
              Solutions for a
            </motion.span>

            <motion.span
              {...reveal(0.33)}
              className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent"
            >
              Smarter Tomorrow.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            {...reveal(0.44)}
            className="mt-5 max-w-[510px] text-[13px] leading-[1.85] text-[#b7c3dc] sm:text-[14px]"
          >
            From creative ideas to intelligent digital solutions,
            we help businesses build, grow, and lead in the
            modern digital era.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...reveal(0.55)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group relative inline-flex min-h-[46px] items-center justify-center gap-5 overflow-hidden rounded-full bg-gradient-to-r from-[#a020f0] via-[#7559f5] to-[#20bff5] px-6 text-[12px] font-semibold shadow-[0_8px_30px_rgba(116,55,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(116,55,235,0.5)]"
            >
              <span className="relative z-10">
                Start a Project
              </span>

              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <Link
              href="/work"
              className="group inline-flex min-h-[46px] items-center justify-center gap-4 rounded-full border border-purple-400/40 bg-white/[0.035] px-6 text-[12px] font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/70 hover:bg-purple-500/10"
            >
              View Our Work

              <ArrowUpRight
                size={16}
                className="text-purple-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            {...reveal(0.65)}
            className="relative mt-8 grid max-w-[500px] grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-5"
          >
            <div className="absolute -top-px left-0 h-px w-[38%] bg-gradient-to-r from-fuchsia-500/75 to-transparent" />

            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-[clamp(1.4rem,2.2vw,2rem)] font-bold tracking-tight text-transparent">
                  {stat.value}
                </div>

                <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            {...reveal(0.8)}
            href="#services-overview"
            className="mt-7 hidden w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-cyan-300 lg:flex"
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 4, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={15} />
            </motion.span>

            Explore Services
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 40, scale: 0.97 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="relative min-w-0 lg:pl-5 lg:pt-2"
        >
          {/* Ambient image glow */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.4, 0.75, 0.4],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-br from-fuchsia-600/20 via-violet-600/10 to-cyan-500/20 blur-[50px]"
          />

          {/* Image frame */}
          <motion.div
            style={{ y: imageY }}
            className="relative rounded-[22px] bg-gradient-to-br from-fuchsia-400/65 via-violet-400/20 to-cyan-400/55 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="group relative aspect-[1.25/1] overflow-hidden rounded-[21px] bg-[#090d25] sm:aspect-[1.6/1] lg:aspect-[1.3/1] xl:aspect-[1.48/1]">
              <Image
                src="/images/xtach-services-workstation1.png"
                alt="XTACH futuristic digital innovation workspace"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 53vw"
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />

              {/* Image shading */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040615]/50 via-transparent to-transparent" />

              {/* Scanning line */}
              {!reduceMotion && (
                <motion.div
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent shadow-[0_0_20px_5px_rgba(34,211,238,0.1)]"
                />
              )}

              {/* Status badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#05091b]/75 px-3 py-2 backdrop-blur-xl">
                <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                  Digital Innovation
                </span>
              </div>

              {/* Bottom status */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -5, 0] }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-[#060b1b]/80 px-3 py-2.5 text-[10px] font-medium text-white backdrop-blur-xl"
              >
                <Code2 size={15} className="text-cyan-300" />
                Building What&apos;s Next
              </motion.div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -9, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 top-[20%] hidden h-11 w-11 items-center justify-center rounded-xl border border-purple-400/40 bg-[#10112b]/90 text-purple-300 backdrop-blur-xl xl:flex"
          >
            <Cpu size={20} />
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, 9, 0] }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-[35%] hidden h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-[#10112b]/90 text-cyan-300 backdrop-blur-xl xl:flex"
          >
            <Layers3 size={20} />
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -7, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-4 left-[20%] hidden items-center gap-2 rounded-full border border-fuchsia-400/25 bg-[#0b102a]/90 px-4 py-2 text-[10px] text-purple-200 backdrop-blur-xl lg:flex"
          >
            <Orbit size={14} className="text-fuchsia-300" />
            Future-Ready Technology
            <Zap size={12} className="text-cyan-300" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-cyan-400/35" />
    </section>
  );
}
