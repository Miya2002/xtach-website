
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Lightbulb,
  UsersRound,
  ShieldCheck,
  Gem,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We embrace new ideas and technology to create what's next.",
    icon: Lightbulb,
    color: "#c35cff",
  },
  {
    number: "02",
    title: "Collaboration",
    description:
      "We work together with our clients and within our team to achieve greater results.",
    icon: UsersRound,
    color: "#c76aff",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and doing what's right.",
    icon: ShieldCheck,
    color: "#ba63ff",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We are committed to delivering high-quality solutions in everything we do.",
    icon: Gem,
    color: "#d277ff",
  },
];

export default function AboutValues() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-values"
      aria-labelledby="values-heading"
      className="relative isolate w-full overflow-hidden border-y border-white/10 bg-[#050718] py-14 text-white sm:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(270px,1fr)_minmax(0,3fr)] lg:gap-9 xl:gap-12">
          {/* Left heading */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="max-w-[440px]"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                Our Values
              </span>

              <Sparkles
                size={15}
                className="text-purple-400"
              />
            </div>

            <h2
              id="values-heading"
              className="text-[clamp(2.3rem,3.2vw,3.6rem)] font-extrabold leading-[1.1] tracking-[-0.05em]"
            >
              The Principles
              <br />
              That Drive Us
              <br />
              <span className="bg-gradient-to-r from-[#e46bff] via-[#a681ff] to-[#39d1ff] bg-clip-text text-transparent">
                Forward.
              </span>
            </h2>

            <div className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

            <p className="mt-6 max-w-[390px] text-[14px] leading-[1.8] text-slate-400 sm:text-[15px]">
              Our values guide everything we do. They inspire
              our team, shape our decisions, and help us deliver
              meaningful results for our clients.
            </p>
          </motion.div>

          {/* Four value cards */}
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -8 }
                  }
                  className="group relative flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/15 bg-gradient-to-br from-[#10132b] via-[#090d22] to-[#080b1d] p-5 transition-[border-color,box-shadow] duration-300 hover:border-purple-400/50 hover:shadow-[0_16px_45px_rgba(120,55,220,0.16)] xl:min-h-[300px]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-purple-500/0 blur-[65px] transition-colors duration-500 group-hover:bg-purple-500/20" />

                  {/* Icon */}
                  <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[15px] border border-purple-400/30 bg-purple-500/10 transition-all duration-300 group-hover:border-purple-400/60 group-hover:bg-purple-500/20">
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                      style={{ color: value.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title and description */}
                  <div className="relative mt-5">
                    <h3 className="text-[18px] font-bold tracking-tight text-white">
                      {value.title}
                    </h3>

                    <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-500 group-hover:w-20" />

                    <p className="mt-5 text-[13px] leading-[1.75] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Card footer */}
                  <div className="relative mt-auto flex items-center justify-between pt-5">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-white/30">
                      {value.number} / 04
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-purple-400/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
