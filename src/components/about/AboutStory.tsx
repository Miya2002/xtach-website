
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Globe2,
  UsersRound,
  Rocket,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Global Perspective",
    description:
      "We think beyond boundaries to create opportunities worldwide.",
    icon: Globe2,
    color: "#38bdf8",
    border: "border-cyan-400/30",
    background: "bg-cyan-500/10",
    glow: "shadow-[0_0_30px_rgba(56,189,248,0.12)]",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your goals drive our strategy and innovation.",
    icon: UsersRound,
    color: "#d66aff",
    border: "border-purple-400/30",
    background: "bg-purple-500/10",
    glow: "shadow-[0_0_30px_rgba(192,80,255,0.12)]",
  },
  {
    title: "Future-Ready Solutions",
    description:
      "We build with tomorrow in mind, leveraging the latest technology.",
    icon: Rocket,
    color: "#eb63ff",
    border: "border-fuchsia-400/30",
    background: "bg-fuchsia-500/10",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.12)]",
  },
];

export default function AboutStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[#030617] text-white"
    >
      {/* BACKGROUND VIDEO */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source
            src="/videos/about-story.mp4"
            type="video/mp4"
          />
        </video>

        {/* Left and right dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030617]/90 via-[#030617]/10 to-[#030617]/100" />

        {/* Vertical cinematic shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030617]/20 via-transparent to-[#030617]/50" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[490px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-8 lg:px-12 lg:py-12 xl:min-h-[520px] xl:px-16">
        {/* LEFT: OUR STORY */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, x: -25 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-[450px]"
        >
          {/* Small label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
              Our Story
            </span>

            <Sparkles
              size={15}
              className="text-purple-400"
            />
          </div>

          {/* Main heading */}
          <h2
            id="our-story-heading"
            className="text-[clamp(2.4rem,3.3vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-0.05em]"
          >
            From Ideas
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-[#ec66ff] via-[#a87cff] to-[#38cfff] bg-clip-text text-transparent">
              Real Impact.
            </span>
          </h2>

          {/* Story description */}
          <div className="mt-5 space-y-3 text-[14px] leading-[1.75] text-slate-300 sm:text-[15px]">
            <p>
              XTACH was founded with a simple belief — that
              technology should empower people, inspire
              creativity, and solve real-world challenges.
            </p>

            <p>
              What started as a vision has grown into a team
              of innovators, strategists, and creators
              working together to build digital experiences
              that matter.
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={
              reduceMotion ? undefined : { y: -3 }
            }
            whileTap={
              reduceMotion ? undefined : { scale: 0.97 }
            }
            className="group mt-7 inline-flex min-h-[46px] items-center justify-center gap-7 rounded-full border border-purple-400/40 bg-gradient-to-r from-[#a42af4] via-[#8d48f6] to-[#338fff] px-7 text-[13px] font-bold text-white shadow-[0_0_30px_rgba(145,60,255,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(145,60,255,0.5)]"
          >
            Start Your Project

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* CENTER: SPACE FOR GALAXY VIDEO */}
        <div
          className="hidden min-h-[300px] lg:block"
          aria-hidden="true"
        />

        {/* RIGHT: FEATURES */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, x: 25 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 grid grid-cols-1 gap-7 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-start gap-4"
              >
                {/* Feature icon */}
                <div
                  className={`flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border ${feature.border} ${feature.background} ${feature.glow} backdrop-blur-md transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Feature text */}
                <div className="min-w-0 pt-1">
                  <h3 className="text-[15px] font-bold leading-snug text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.65] text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
