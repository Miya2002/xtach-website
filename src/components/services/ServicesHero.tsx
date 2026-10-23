
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
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
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

      {/* Responsive spacing below the fixed navbar */}
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-[115px] sm:px-9 sm:pb-14 sm:pt-[125px] lg:grid-cols-[47%_53%] lg:gap-0 lg:px-12 lg:pb-14 lg:pt-[125px] xl:px-16 xl:pt-[130px]">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-[660px] lg:pr-6">

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

          <motion.p
            {...reveal(0.44)}
            className="mt-5 max-w-[510px] text-[13px] leading-[1.85] text-[#b7c3dc] sm:text-[14px]"
          >
            From creative ideas to intelligent digital solutions,
            we help businesses build, grow, and lead in the
            modern digital era.
          </motion.p>

          <motion.div
            {...reveal(0.54)}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-[48px] items-center justify-center gap-6 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-500 to-sky-400 px-7 text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(115,46,220,0.2)] transition-all hover:brightness-110 sm:text-[13px]"
            >
              Start a Project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/work"
              className="group inline-flex min-h-[48px] items-center justify-center gap-6 rounded-full border border-purple-400/40 bg-purple-500/[0.06] px-7 text-[12px] font-semibold text-white transition-colors hover:bg-purple-500/15 sm:text-[13px]"
            >
              View Our Work
              <ArrowUpRight
                size={17}
                className="text-purple-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* STATS */}
          <motion.div
            {...reveal(0.64)}
            className="mt-9 grid max-w-[580px] grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="bg-gradient-to-r from-fuchsia-400 to-violet-300 bg-clip-text text-[25px] font-extrabold leading-none tracking-tight text-transparent sm:text-[34px]">
                  {stat.value}
                </div>

                <p className="mt-3 text-[10px] leading-snug text-slate-400 sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.a
            {...reveal(0.72)}
            href="#services"
            className="mt-9 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-300 sm:text-[11px]"
          >
            <ChevronDown size={16} />
            Explore Services
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          {...reveal(0.25)}
          className="relative z-10 min-w-0 lg:pl-5"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative aspect-[1.5/1] overflow-hidden rounded-[24px] border border-purple-400/35 bg-[#080b21] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/services/services-hero.png"
                alt="XTACH digital technology solutions across web, mobile and cloud platforms"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 53vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030511]/25 via-transparent to-transparent" />

              {/* Top badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#060a1d]/85 px-3 py-2 backdrop-blur-md sm:left-5 sm:top-5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white sm:text-[10px]">
                  Digital Innovation
                </span>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-[#060a1d]/85 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:right-5">
                <Code2 size={15} className="text-cyan-300" />
                <span className="text-[10px] font-medium text-white sm:text-[11px]">
                  Building What&apos;s Next
                </span>
              </div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute -left-3 top-[20%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/35 bg-[#10102b] text-purple-300 shadow-xl lg:flex">
              <Cpu size={22} />
            </div>

            <div className="absolute -right-3 top-[38%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/35 bg-[#08152b] text-cyan-300 shadow-xl lg:flex">
              <Layers3 size={22} />
            </div>

            <div className="absolute -bottom-3 left-[18%] hidden items-center gap-2 rounded-full border border-purple-400/30 bg-[#110d29] px-4 py-2 text-[11px] text-purple-200 shadow-xl sm:flex">
              <Orbit size={16} />
              Future-Ready Technology
              <Zap size={14} className="text-cyan-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-cyan-400/50" />
    </section>
  );
}

          