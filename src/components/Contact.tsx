
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  "Logo & Brand Design",
  "Website Design & Development",
  "Application Development",
  "Digital Marketing",
  "Portals & CRM Systems",
  "AI Model Development",
  "AI Voice Overs",
  "AI Automation",
  "SaaS Development",
  "Other / General Inquiry",
];

const inputClass =
  "h-10 w-full rounded-lg border border-white/20 bg-[#080720]/55 px-3.5 text-[12px] text-white outline-none backdrop-blur-sm transition-all duration-200 placeholder:text-white/40 hover:border-white/35 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20";

const labelClass =
  "mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [preview, setPreview] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // UI preview only. No backend or email service connected.
    setPreview(true);
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#08041e] text-white"
    >
      {/* BACKGROUND IMAGE — NO CROPPING ON DESKTOP */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/contact-background1.jpeg')",
          backgroundSize: "100% 100%",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#07031c]/90 via-[#0a0527]/65 to-[#08031c]/10"
      />

      {/* ANIMATED GLOW */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.2, 0.38, 0.2],
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 top-1/3 -z-10 h-52 w-52 rounded-full bg-purple-600/20 blur-[80px]"
      />

      {/* TOP BORDER */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      {/* CONTENT CONTAINER */}
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center px-5 py-9 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,510px)_1fr] lg:px-14 lg:py-12 xl:px-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -25 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative z-10 w-full max-w-[510px]"
        >
          {/* SECTION LABEL */}
          <div className="mb-2 flex items-center gap-2.5">
            <span className="h-px w-7 bg-cyan-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
              Let&apos;s Collaborate
            </span>

            <Sparkles
              size={13}
              className="text-purple-300"
            />
          </div>

          {/* HEADING */}
          <h2 className="text-[29px] font-bold leading-[1.15] tracking-[-0.045em] sm:text-[35px] lg:text-[38px]">
            Have an Idea?{" "}
            <span className="bg-gradient-to-r from-[#e2b5ff] to-[#71d8ff] bg-clip-text text-transparent">
              Let&apos;s Build It.
            </span>
          </h2>

          
         
          {/* BORDERLESS CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            onChange={() => setPreview(false)}
            className="mt-5 space-y-3"
          >
            {/* NAME AND EMAIL */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className={labelClass}
                >
                  Your Name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={labelClass}
                >
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* SERVICE DROPDOWN */}
            <div>
              <label
                htmlFor="contact-service"
                className={labelClass}
              >
                Select a Service *
              </label>

              <div className="relative">
                <select
                  id="contact-service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#11112c]"
                  >
                    Choose your service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-[#11112c] text-white"
                    >
                      {service}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-300"
                />
              </div>
            </div>

            {/* PROJECT DESCRIPTION */}
            <div>
              <label
                htmlFor="contact-description"
                className={labelClass}
              >
                Project Description *
              </label>

              <textarea
                id="contact-description"
                name="description"
                required
                rows={3}
                placeholder="Briefly describe your project..."
                className="block min-h-[76px] w-full resize-y rounded-lg border border-white/20 bg-[#080720]/55 px-3.5 py-2.5 text-[12px] text-white outline-none backdrop-blur-sm transition-all duration-200 placeholder:text-white/40 hover:border-white/35 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.015 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.985 }
              }
              className="group flex h-11 w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#8438ef] via-[#a04cf3] to-[#367af0] text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(127,65,255,0.25)] transition-shadow hover:shadow-[0_10px_30px_rgba(127,65,255,0.45)]"
            >
              Send Your Message

              <Send
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>

            {/* PREVIEW MESSAGE */}
            {preview && (
              <p
                role="status"
                className="text-center text-[11px] text-purple-200"
              >
                Preview only — your message was not sent.
              </p>
            )}
          </form>

          {/* BOTTOM SIGNATURE */}
          <div className="mt-4 flex items-center gap-2 text-[10px] text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            <span>Redefining The Matrix</span>

            <ArrowRight
              size={12}
              className="text-purple-300"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — IMAGE VISIBLE */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block"
        />
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
    </section>
  );
}
