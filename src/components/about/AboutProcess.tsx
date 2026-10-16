
"use client";

import { useId } from "react";
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
    color: "#82b9ff",
  },
  {
    number: "02",
    title: "Plan",
    description: "Create the right strategy and solution.",
    icon: FileText,
    color: "#cf82ff",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Bring ideas to life with stunning designs and modern technology.",
    icon: Box,
    color: "#c789ff",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Deploy, support, and help you grow further.",
    icon: Rocket,
    color: "#9b9dff",
  },
];

export default function AboutProcess() {
  const reduceMotion = useReducedMotion();
  const gradientId = useId().replace(/:/g, "");

  return (
    <section
      id="about-process"
      aria-labelledby="about-process-title"
      className="relative isolate w-full overflow-hidden border-y border-white/[0.08] bg-[#040718] py-14 text-white sm:py-16 lg:py-20"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(32,29,96,0.15),transparent_65%)]" />

        <div className="absolute -right-48 top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[110px]" />

        <div className="absolute left-[35%] bottom-[-250px] h-[420px] w-[420px] rounded-full bg-purple-700/[0.09] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#93a8ff 0.7px, transparent 0.7px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(270px,0.95fr)_minmax(0,3.05fr)] lg:gap-8 xl:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-[410px]"
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
              className="text-[clamp(2.4rem,3.3vw,3.7rem)] font-extrabold leading-[1.1] tracking-[-0.055em]"
            >
              Turning Vision
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-[#e05dff] via-[#ad7dff] to-[#60bfff] bg-clip-text text-transparent">
                Reality.
              </span>
            </h2>

            <p className="mt-5 max-w-[350px] text-[14px] leading-[1.8] text-slate-400 sm:text-[15px]">
              A simple, proven process to bring your
              ideas to life.
            </p>

            <motion.a
              href="#contact"
              whileHover={
                reduceMotion ? undefined : { y: -3 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="group mt-7 inline-flex min-h-[47px] items-center justify-center gap-7 rounded-full border border-purple-300/40 bg-gradient-to-r from-[#982fe8] via-[#8850f5] to-[#378cff] px-6 text-[13px] font-bold text-white shadow-[0_8px_35px_rgba(132,64,255,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_45px_rgba(132,64,255,0.45)]"
            >
              Our Process

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>

          {/* RIGHT PROCESS TIMELINE */}
          <div className="relative min-w-0">
            {/* Animated neon connecting wave - desktop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-[43px] hidden h-[100px] lg:block"
            >
              <svg
                viewBox="0 0 1000 130"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id={gradientId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#35c8ff"
                    />
                    <stop
                      offset="35%"
                      stopColor="#a04bff"
                    />
                    <stop
                      offset="70%"
                      stopColor="#e068ff"
                    />
                    <stop
                      offset="100%"
                      stopColor="#31bfff"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 50 C125 -5 145 125 270 70 S435 0 540 52 S710 130 810 68 S930 10 1000 35"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="17"
                  opacity="0.13"
                  className="blur-[9px]"
                />

                <path
                  d="M0 50 C125 -5 145 125 270 70 S435 0 540 52 S710 130 810 68 S930 10 1000 35"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="3"
                  opacity="0.85"
                />

                {!reduceMotion && (
                  <motion.path
                    d="M0 50 C125 -5 145 125 270 70 S435 0 540 52 S710 130 810 68 S930 10 1000 35"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="22 110"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{
                      strokeDashoffset: -528,
                    }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.75"
                    style={{
                      filter:
                        "drop-shadow(0 0 6px #9d6aff)",
                    }}
                  />
                )}
              </svg>
            </div>

            {/* Process steps */}
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-5 xl:gap-7">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 35,
                            scale: 0.94,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion
                        ? 0
                        : index * 0.15,
                      ease: "easeOut",
                    }}
                    className="group relative min-w-0 rounded-[20px] border border-white/[0.09] bg-white/[0.025] px-5 py-6 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.07] sm:min-h-[240px] lg:min-h-[260px] lg:border-transparent lg:bg-transparent lg:px-2 lg:py-0 lg:hover:border-transparent lg:hover:bg-transparent"
                  >
                    {/* Icon circle */}
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.12,
                              rotate: 5,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                      }}
                      className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-purple-400/40 bg-[#0a0d28] shadow-[0_0_25px_rgba(135,70,255,0.13)] transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-[0_0_35px_rgba(165,80,255,0.35)] lg:mx-auto lg:h-[82px] lg:w-[82px]"
                    >
                      <div className="absolute inset-[5px] rounded-full border border-white/[0.04]" />

                      <Icon
                        size={30}
                        strokeWidth={1.8}
                        style={{
                          color: step.color,
                        }}
                        className="relative z-10 drop-shadow-[0_0_8px_rgba(170,120,255,0.45)]"
                      />

                      {/* Pulsing ring */}
                      {!reduceMotion && (
                        <motion.span
                          className="pointer-events-none absolute inset-[-4px] rounded-full border border-purple-400/40"
                          animate={{
                            scale: [1, 1.18, 1],
                            opacity: [0.45, 0, 0.45],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.45,
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Text */}
                    <div className="relative z-10 mt-6 lg:mt-7">
                      <span className="bg-gradient-to-r from-[#e58bff] to-[#8abaff] bg-clip-text text-[20px] font-extrabold tracking-tight text-transparent">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-[17px] font-bold leading-[1.35] tracking-tight text-white xl:text-[18px]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[220px] text-[13px] leading-[1.75] text-slate-400 transition-colors duration-300 group-hover:text-slate-300 xl:text-[14px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-5 left-[57px] h-5 w-px bg-gradient-to-b from-purple-500 to-cyan-400 sm:hidden"
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
