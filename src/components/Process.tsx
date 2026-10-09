
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals and requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description: "Create the right strategy and solution.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description: "Bring ideas to life with stunning designs.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description: "Build with modern technologies.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description: "Test, deploy and help you grow.",
    icon: Rocket,
  },
];

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =====================================
   ANIMATED NUMBER COUNTER
===================================== */

function Counter({
  value,
  suffix,
  duration = 2200,
  delay = 0,
  start,
}: {
  value: number;
  suffix: string;
  duration?: number;
  delay?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    setCount(0);

    const animate = (timestamp: number) => {
      if (cancelled) return;

      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.min(
        value,
        Math.floor(eased * value)
      );

      setCount(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    timeout = setTimeout(() => {
      if (!cancelled) {
        frame = requestAnimationFrame(animate);
      }
    }, delay);

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [start, value, duration, delay, reduceMotion]);

  return (
    <span className="inline-flex tabular-nums">
      <span>{count}</span>
      <span className="text-white">{suffix}</span>
    </span>
  );
}

/* =====================================
   PROCESS STEP CARD
===================================== */

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.div
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease,
      }}
      className="
        group relative flex gap-4
        pb-8 last:pb-0
        sm:block sm:pb-0
      "
    >
      {/* MOBILE VERTICAL CONNECTOR */}
      {index < steps.length - 1 && (
        <div
          aria-hidden="true"
          className="
            absolute left-[23px] top-[48px]
            h-[calc(100%-48px)] w-px
            bg-gradient-to-b
            from-[#a46aff]/70
            to-[#38caff]/20
            sm:hidden
          "
        />
      )}

      {/* ICON + DESKTOP CONNECTOR */}
      <div className="relative z-10 shrink-0">
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.13,
                  rotate: 8,
                }
          }
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}
          className="
            relative flex h-[48px] w-[48px]
            items-center justify-center
            rounded-full
            border border-[#ad70ff]/80
            bg-[#080d24]/90
            shadow-[0_0_18px_rgba(145,85,255,0.15)]
            backdrop-blur-md
            transition-all duration-500
            group-hover:border-[#54caff]
            group-hover:bg-[#a46aff]/20
            group-hover:shadow-[0_0_30px_rgba(145,85,255,0.45)]
          "
        >
          <Icon
            size={21}
            strokeWidth={1.7}
            className="
              text-[#d0a2ff]
              transition-colors duration-300
              group-hover:text-[#65d6ff]
            "
          />

          {/* Small hover glow */}
          <div
            className="
              pointer-events-none absolute inset-0
              rounded-full bg-[#9b65ff]/15
              opacity-0 blur-md
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />
        </motion.div>

        {/* DESKTOP ARROW CONNECTOR */}
        {index < steps.length - 1 && (
          <div
            aria-hidden="true"
            className="
              absolute left-[58px] right-[-2px]
              top-[24px] hidden
              items-center lg:flex
            "
          >
            <div className="relative h-px min-w-0 flex-1 overflow-hidden bg-white/25">
              {!reduceMotion && (
                <motion.div
                  className="
                    absolute inset-y-0 left-0 w-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#bc80ff]
                    to-[#55caff]
                  "
                  animate={{ x: ["-100%", "250%"] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: index * 0.15,
                    ease: "linear",
                  }}
                />
              )}
            </div>

            <ArrowRight
              size={14}
              className="shrink-0 text-white/65"
            />
          </div>
        )}
      </div>

      {/* STEP TEXT */}
      <div className="min-w-0 pt-0.5 sm:mt-5">
        <span
          className="
            text-[10px] font-bold
            tracking-[0.14em]
            text-[#b27cff]
          "
        >
          {step.number}
        </span>

        <h3
          className="
            mt-1 text-[15px]
            font-semibold leading-[1.35]
            text-white
            transition-colors duration-300
            group-hover:text-[#c99aff]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-2 max-w-[200px]
            text-[12px] leading-[1.7]
            text-white/60
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =====================================
   IMPACT STATISTICS
===================================== */

function ImpactSection() {
  const reduceMotion = useReducedMotion();

  const impactRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(impactRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <div
      ref={impactRef}
      className="
        relative isolate overflow-hidden
        border-y border-[#8b6cff]/25
        bg-[#030817]
      "
    >
      {/* EARTH BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-[url('/images/process/earth-horizon.jfif')]
          bg-cover bg-center
        "
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-[#020512]/55
        "
      />

      {/* CINEMATIC GRADIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#020512]/80
          via-[#020512]/20
          to-[#020512]/75
        "
      />

      {/* ANIMATED TOP LIGHT */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.4, 1, 0.4] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-px bg-gradient-to-r
          from-transparent
          via-[#b76cff]
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative mx-auto grid
          w-full max-w-[1600px]
          grid-cols-1 items-center
          gap-8 px-5 py-12
          sm:px-8 sm:py-14
          lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.5fr)]
          lg:gap-10 lg:px-12
          xl:px-16
        "
      >
        {/* LEFT TITLE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -30 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease,
          }}
        >
          <p
            className="
              text-[10px] font-semibold
              uppercase tracking-[0.3em]
              text-white/70
            "
          >
            Our Impact
          </p>

          <h2
            className="
              mt-3
              text-[clamp(1.8rem,2.6vw,2.6rem)]
              font-semibold
              leading-[1.15]
              tracking-[-0.035em]
            "
          >
            In Numbers
          </h2>
        </motion.div>

        {/* STATISTICS */}
        <div
          className="
            grid grid-cols-2 gap-y-8
            sm:grid-cols-4 sm:gap-y-0
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease,
              }}
              className="
                group relative
                border-l border-white/30
                pl-4 sm:pl-5 xl:pl-7
              "
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.035,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
              >
                {/* COUNTING NUMBER */}
                <div
                  className="
                    text-[clamp(2rem,3vw,3.3rem)]
                    font-semibold
                    leading-none
                    tracking-[-0.04em]
                    text-white
                    transition-colors duration-300
                    group-hover:text-[#cda5ff]
                  "
                >
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2200}
                    delay={index * 180}
                    start={isInView}
                  />
                </div>

                <p
                  className="
                    mt-3
                    text-[11px] leading-[1.5]
                    text-white/80
                    sm:text-[12px]
                  "
                >
                  {stat.label}
                </p>

                {/* HOVER ACCENT */}
                <div
                  className="
                    mt-3 h-[2px] w-0
                    bg-gradient-to-r
                    from-[#b76cff]
                    to-[#4bcaff]
                    transition-all duration-500
                    group-hover:w-16
                  "
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-px bg-gradient-to-r
          from-transparent
          via-[#8d6cff]/45
          to-transparent
        "
      />
    </div>
  );
}

/* =====================================
   MAIN PROCESS COMPONENT
===================================== */

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#030817]
        text-white
      "
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_50%_30%,rgba(35,55,110,0.16),transparent_70%)]
        "
      />

      {/* PROCESS SECTION */}
      <div
        className="
          relative mx-auto w-full
          max-w-[1600px]
          px-5 py-12
          sm:px-8 sm:py-14
          lg:px-12 lg:py-16
          xl:px-16
        "
      >
        <div
          className="
            grid grid-cols-1 gap-10
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.5fr)]
            lg:items-start lg:gap-10
          "
        >
          {/* LEFT HEADING */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease,
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span
                className="
                  h-px w-7
                  bg-gradient-to-r
                  from-[#c16cff]
                  to-[#48caff]
                "
              />

              <span
                className="
                  text-[10px] font-semibold
                  uppercase tracking-[0.3em]
                  text-white/65
                "
              >
                Our Process
              </span>
            </div>

            <h2
              id="process-heading"
              className="
                max-w-[340px]
                text-[clamp(2rem,3vw,3rem)]
                font-semibold
                leading-[1.1]
                tracking-[-0.045em]
              "
            >
              From Strategy
              <br />
              to{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#c16cff]
                  to-[#52caff]
                  bg-clip-text
                  text-transparent
                "
              >
                Success.
              </span>
            </h2>

            <p
              className="
                mt-4 max-w-[290px]
                text-[13px]
                leading-[1.75]
                text-white/60
              "
            >
              A simple, proven process to bring your
              project to life.
            </p>
          </motion.div>

          {/* PROCESS TIMELINE */}
          <div
            className="
              relative grid grid-cols-1
              gap-0
              sm:grid-cols-2
              sm:gap-x-6 sm:gap-y-8
              lg:grid-cols-5
              lg:gap-3
              xl:gap-5
            "
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* IMPACT SECTION */}
      <ImpactSection />
    </section>
  );
}
