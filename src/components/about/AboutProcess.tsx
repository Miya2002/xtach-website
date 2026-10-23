
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Search,
  FileText,
  Box,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals and challenges.",
    icon: Search,
    color: "#73C7FF",
  },
  {
    number: "02",
    title: "Plan",
    description: "Create the right strategy and solution.",
    icon: FileText,
    color: "#D28AFF",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Bring ideas to life with stunning designs and modern technology.",
    icon: Box,
    color: "#CB8BFF",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "Deploy, support, and help you grow further.",
    icon: Rocket,
    color: "#91A5FF",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutProcess() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about-process"
      aria-labelledby="about-process-title"
      className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#050719] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(72,35,150,0.13),transparent_65%)]" />

        <div className="absolute -right-32 top-[-180px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[100px]" />

        <div className="absolute bottom-[-220px] left-[30%] h-[420px] w-[420px] rounded-full bg-purple-700/[0.08] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(#9AAEFF 0.75px, transparent 0.75px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[370px_minmax(0,1fr)] xl:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reducedMotion ? false : { opacity: 0, x: -28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="relative z-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                Our Process
              </span>

              <Sparkles
                size={15}
                className="text-purple-400"
              />
            </div>

            <h2
              id="about-process-title"
              className="max-w-[400px] text-[clamp(2.5rem,3.2vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.055em]"
            >
              Turning Vision
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-[#E05DFF] via-[#AD7DFF] to-[#60BFFF] bg-clip-text text-transparent">
                Reality.
              </span>
            </h2>

            <p className="mt-6 max-w-[350px] text-[14px] leading-[1.85] text-slate-400 sm:text-[15px]">
              A simple, proven process to bring your ideas to
              life.
            </p>

            <motion.a
              href="#contact"
              whileHover={
                reducedMotion ? undefined : { y: -3 }
              }
              whileTap={
                reducedMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="group mt-8 inline-flex min-h-[49px] items-center gap-7 rounded-full border border-purple-300/30 bg-gradient-to-r from-[#982FE8] via-[#8850F5] to-[#378CFF] px-7 text-[13px] font-bold shadow-[0_10px_35px_rgba(132,64,255,0.23)] transition-shadow duration-300 hover:shadow-[0_15px_45px_rgba(132,64,255,0.4)]"
            >
              Our Process

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <div className="relative min-w-0">
            {/* DESKTOP CONNECTING LINE */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[47px] hidden h-[2px] lg:block"
            >
              {/* Soft glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 opacity-60 blur-[8px]" />

              {/* Main line */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#35C8FF] via-[#C05CFF] to-[#5E9BFF] opacity-80" />

              {/* Moving highlight */}
              {!reducedMotion && (
                <motion.div
                  className="absolute -top-[1px] h-[4px] w-[75px] rounded-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_14px_rgba(173,125,255,0.8)]"
                  animate={{
                    left: ["-8%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.7,
                  }}
                />
              )}
            </div>

            {/* STEPS GRID */}
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-4 xl:gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={
                      reducedMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 24,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: reducedMotion
                        ? 0
                        : index * 0.12,
                      ease,
                    }}
                    className="group relative min-w-0 rounded-[18px] border border-white/[0.09] bg-white/[0.025] px-5 py-6 transition-colors duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.05] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:hover:bg-transparent"
                  >
                    {/* CIRCLE ROW */}
                    <div className="relative flex h-[94px] items-center lg:justify-center">
                      {/* CIRCLE */}
                      <motion.div
                        whileHover={
                          reducedMotion
                            ? undefined
                            : {
                                scale: 1.09,
                                y: -3,
                              }
                        }
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 18,
                        }}
                        className="relative z-10 flex h-[94px] w-[94px] shrink-0 items-center justify-center rounded-full border border-purple-400/35 bg-[#090C26] shadow-[0_0_25px_rgba(135,70,255,0.12)] transition-colors duration-300 group-hover:border-purple-300/70"
                      >
                        <div className="absolute inset-[7px] rounded-full border border-white/[0.06]" />

                        <div className="absolute inset-[13px] rounded-full bg-[radial-gradient(circle,rgba(100,60,200,0.1),transparent_75%)]" />

                        <Icon
                          size={30}
                          strokeWidth={1.8}
                          style={{ color: step.color }}
                          className="relative z-10 drop-shadow-[0_0_9px_rgba(170,120,255,0.35)]"
                        />

                        {/* PULSE */}
                        {!reducedMotion && (
                          <motion.span
                            className="pointer-events-none absolute inset-[-4px] rounded-full border border-purple-400/30"
                            animate={{
                              scale: [1, 1.16, 1],
                              opacity: [0.35, 0, 0.35],
                            }}
                            transition={{
                              duration: 3.6,
                              repeat: Infinity,
                              delay: index * 0.55,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="mt-6 lg:mt-7">
                      <span className="bg-gradient-to-r from-[#E58BFF] to-[#8ABAFF] bg-clip-text text-[19px] font-extrabold tracking-tight text-transparent">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-[16px] font-bold leading-[1.4] tracking-tight text-white xl:text-[17px]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[220px] text-[13px] leading-[1.8] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                        {step.description}
                      </p>
                    </div>

                    {/* MOBILE CONNECTOR */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-5 left-[52px] h-5 w-px bg-gradient-to-b from-purple-500 to-cyan-400 sm:hidden"
                      />
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
