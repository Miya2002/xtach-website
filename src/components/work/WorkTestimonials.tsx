
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkTestimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work-testimonials"
      aria-labelledby="work-testimonials-title"
      className="relative isolate overflow-hidden bg-[#050817] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 h-[380px] w-[380px] rounded-full bg-purple-600/[0.09] blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.07] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
          {/* LEFT SIDE */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-gradient-to-r from-purple-500 to-cyan-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-300">
                Testimonials
              </span>

              <Sparkles
                size={15}
                className="text-cyan-400"
              />
            </div>

            <h2
              id="work-testimonials-title"
              className="max-w-[680px] text-[clamp(2.2rem,4vw,4.3rem)] font-extrabold leading-[1.12] tracking-[-0.05em]"
            >
              Our Clients Simply
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Love What We Do.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="lg:pt-7"
          >
            <p className="max-w-[570px] text-[clamp(1.05rem,1.65vw,1.5rem)] font-medium leading-[1.65] tracking-[-0.02em] text-slate-200">
              Explore client testimonials that reflect our{" "}
              <span className="font-semibold text-purple-300">
                commitment to excellence
              </span>
              , creativity, and meaningful digital outcomes.
            </p>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scaleX: 0 }
              }
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease,
              }}
              className="mt-7 h-[2px] w-28 origin-left bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
