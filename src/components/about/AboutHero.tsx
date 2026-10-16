
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Play,
  Sparkles,
  UsersRound,
  Star,
  Settings,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Turning ideas into digital success stories.",
    icon: UsersRound,
  },
  {
    value: "30+",
    label: "Happy Clients",
    description: "Trusted by businesses across industries.",
    icon: Star,
  },
  {
    value: "5+",
    label: "Years of Experience",
    description: "Building innovative solutions with impact.",
    icon: Settings,
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    description: "Driven by excellence in everything we do.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || reduceMotion || videoFailed) return;

    video.muted = true;
    video.play().catch(() => {
      // The poster image remains visible.
    });
  }, [reduceMotion, videoFailed]);

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-[#030617] text-white lg:h-[calc(100svh-80px)] lg:min-h-[620px]"
    >
      {/* BACKGROUND VIDEO */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-[65%_center] lg:bg-center"
          style={{
            backgroundImage:
              "url('/images/about/about-hero.png')",
          }}
        />

        {!reduceMotion && !videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/about/about-hero.png"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-center"
          >
            <source
              src="/videos/about-hero.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Dark left side for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030617]/95 via-[#030617]/75 to-[#030617]/10" />

        {/* Subtle top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030617]/20 via-transparent to-[#030617]/80" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-5 pb-5 pt-8 sm:px-8 sm:pb-7 lg:min-h-0 lg:px-12 lg:pb-7 lg:pt-9 xl:px-16">
        {/* MAIN HERO CONTENT */}
        <div className="flex flex-1 items-center py-5 lg:min-h-0 lg:py-3">
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[530px]"
          >
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-gradient-to-r from-cyan-400 to-purple-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-[11px]">
                About XTACH
              </span>

              <Sparkles
                size={15}
                className="text-purple-400"
              />
            </div>

            {/* Heading */}
            <h1
              id="about-hero-heading"
              className="text-[clamp(2.5rem,3.7vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.05em]"
            >
              More Than
              <br />
              A Company.
              <br />

              <span className="bg-gradient-to-r from-[#ec65ff] via-[#b68aff] to-[#36d7ff] bg-clip-text text-transparent">
                A Force for
                <br />
                What&apos;s Next.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[480px] text-[13px] leading-[1.8] text-slate-300 sm:text-[14px] xl:text-[15px]">
              At XTACH, we blend creativity, technology, and
              strategy to build digital solutions that create
              real impact. We&apos;re not just a service
              provider — we&apos;re your innovation partner
              for a smarter, more connected future.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a
                href="#our-story"
                whileHover={
                  reduceMotion ? undefined : { y: -2 }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.97 }
                }
                className="group inline-flex min-h-[44px] items-center justify-center gap-6 rounded-full border border-purple-400/50 bg-gradient-to-r from-[#a52bf5] to-[#348cff] px-6 text-[12px] font-bold text-white shadow-[0_0_25px_rgba(142,65,255,0.25)] transition-all hover:shadow-[0_0_35px_rgba(142,65,255,0.4)] sm:text-[13px]"
              >
                Our Story

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#our-journey"
                whileHover={
                  reduceMotion ? undefined : { y: -2 }
                }
                className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/30 bg-[#05091c]/60 px-4 text-[12px] font-semibold text-white backdrop-blur-md transition-colors hover:border-purple-400 hover:bg-purple-500/15 sm:text-[13px]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50">
                  <Play size={13} className="ml-0.5" />
                </span>

                Watch Our Journey
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* COMPACT STATS PANEL */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 w-full overflow-hidden rounded-[20px] border border-purple-400/20 bg-[#070b20]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex min-w-0 items-start gap-3 px-4 py-4 transition-colors hover:bg-purple-500/[0.06] xl:px-5 ${
                    index % 2 === 1
                      ? "sm:border-l sm:border-white/10"
                      : ""
                  } ${
                    index >= 2
                      ? "sm:border-t sm:border-white/10 lg:border-t-0"
                      : ""
                  } ${
                    index === 2
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  } ${
                    index > 0
                      ? "max-sm:border-t max-sm:border-white/10"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-purple-400/40 bg-purple-500/10">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#c86cff]"
                    />
                  </div>

                  {/* Stat content */}
                  <div className="min-w-0">
                    <div className="bg-gradient-to-r from-[#ed6dff] via-[#c58cff] to-[#48cfff] bg-clip-text text-[27px] font-extrabold leading-none tracking-tight text-transparent xl:text-[30px]">
                      {stat.value}
                    </div>

                    <h3 className="mt-1.5 text-[11px] font-bold leading-snug text-white xl:text-[12px]">
                      {stat.label}
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.5] text-slate-400">
                      {stat.description}
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
