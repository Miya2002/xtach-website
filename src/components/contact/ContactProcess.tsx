
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MessageSquareHeart,
  FileText,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your project, goals, and requirements.",
    Icon: MessageSquareHeart,
  },
  {
    number: "02",
    title: "Strategy & Consultation",
    description:
      "Our experts analyze your needs and propose the best solution.",
    Icon: FileText,
  },
  {
    number: "03",
    title: "Let's Build",
    description:
      "Once aligned, we get to work and turn your vision into reality.",
    Icon: Rocket,
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

function ProcessNode({
  step,
  index,
  reduceMotion,
}: {
  step: ProcessStep;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = step.Icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.16,
        ease: easing,
      }}
      className="group relative flex min-w-0 flex-col items-center text-center"
    >
      {/* Number and icon */}
      <div className="relative flex h-[82px] w-full items-center justify-center sm:h-[90px]">
        {/* Step number */}
        <div className="absolute left-[calc(50%-79px)] top-1/2 z-10 -translate-y-1/2 rounded-full border border-violet-400/20 bg-[#090b22] px-2 py-1 shadow-[0_0_15px_rgba(109,57,236,0.12)]">
          <span className="text-[13px] font-semibold tracking-wide text-white sm:text-[14px]">
            {step.number}
          </span>
        </div>

        {/* Soft glow behind circle */}
        <div className="pointer-events-none absolute h-[85px] w-[85px] rounded-full bg-violet-600/10 blur-[22px] transition-all duration-500 group-hover:bg-fuchsia-500/20" />

        {/* Outer circular neon border */}
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : { scale: 1.1, rotate: 5 }
          }
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 17,
          }}
          className="relative z-10 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 p-[1.5px] shadow-[0_0_17px_rgba(130,65,255,0.35),0_0_35px_rgba(112,43,255,0.14)] sm:h-[70px] sm:w-[70px]"
        >
          {/* Inner circle */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#09091f]">
            {/* Inner lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(151,75,255,0.17),transparent_68%)]" />

            <Icon
              size={25}
              strokeWidth={1.7}
              className="relative z-10 text-[#b776ff] drop-shadow-[0_0_9px_rgba(177,101,255,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 sm:h-[27px] sm:w-[27px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="mt-3 max-w-[240px] px-2 sm:mt-4">
        <h3 className="text-[14px] font-bold tracking-[-0.025em] text-white sm:text-[15px]">
          {step.title}
        </h3>

        <p className="mx-auto mt-2 max-w-[235px] text-[12px] leading-[1.7] text-[#b5bdd4] sm:text-[13px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function ProcessConnector({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="relative mt-[44px] hidden h-[3px] min-w-0 flex-1 md:block">
      {/* Static dotted line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right,#a94dff 45%,transparent 45%)",
          backgroundSize: "5px 2px",
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* Moving energy light */}
      {!reduceMotion && (
        <motion.div
          animate={{
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 0.4,
          }}
          className="absolute -top-[2px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_3px_rgba(34,211,238,0.65)]"
        />
      )}

      {/* Center glowing dot */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.35, 1],
                opacity: [0.65, 1, 0.65],
              }
        }
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[-2px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_9px_rgba(34,211,238,0.9)]"
      />
    </div>
  );
}

export default function ContactProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-process"
      className="relative isolate overflow-hidden bg-[#030615] py-14 text-white sm:py-16 lg:py-20"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(82,36,166,0.16),transparent_60%),radial-gradient(ellipse_at_10%_65%,rgba(29,35,110,0.08),transparent_50%)]" />

      {/* Top subtle border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div className="relative mx-auto max-w-[1150px] px-5 sm:px-8">

        {/* Section heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: easing,
          }}
          className="text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-[4px] w-[4px] rounded-full bg-cyan-400 shadow-[0_0_9px_#22d3ee]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#93baff]">
              Our Process
            </span>
          </div>

          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.045em] text-white">
            What Happens Next?
          </h2>

          <p className="mx-auto mt-2 max-w-[490px] text-[12px] leading-[1.7] text-[#b6bdd1] sm:text-[13px]">
            A simple and transparent process to turn your idea into reality.
          </p>
        </motion.div>

        {/* Desktop process timeline */}
        <div className="mt-10 hidden items-start md:flex lg:mt-12">
          <div className="w-[245px] shrink-0 lg:w-[275px]">
            <ProcessNode
              step={steps[0]}
              index={0}
              reduceMotion={reduceMotion}
            />
          </div>

          <ProcessConnector reduceMotion={reduceMotion} />

          <div className="w-[245px] shrink-0 lg:w-[275px]">
            <ProcessNode
              step={steps[1]}
              index={1}
              reduceMotion={reduceMotion}
            />
          </div>

          <ProcessConnector reduceMotion={reduceMotion} />

          <div className="w-[245px] shrink-0 lg:w-[275px]">
            <ProcessNode
              step={steps[2]}
              index={2}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="relative mx-auto mt-10 flex max-w-[350px] flex-col gap-12 md:hidden">
          {/* Vertical line */}
          <div className="pointer-events-none absolute bottom-[90px] left-1/2 top-[36px] w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-500/70 via-violet-500/45 to-cyan-400/60" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10"
            >
              <ProcessNode
                step={step}
                index={index}
                reduceMotion={reduceMotion}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
