
"use client";

import { useId, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Plus,
  HelpCircle,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services does XTACH offer?",
    answer:
      "XTACH provides logo and brand design, website design and development, application development, digital marketing, portals and CRM systems, AI model development, AI voice overs, AI automation, and SaaS development.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope, complexity, and requirements. Smaller projects may take a few weeks, while larger applications and custom platforms can require several months. We'll discuss an estimated timeline during the initial consultation.",
  },
  {
    question:
      "Do you offer ongoing support after the project is completed?",
    answer:
      "We can discuss ongoing maintenance, updates, optimization, and technical support based on your project's requirements. Support arrangements are defined as part of the project agreement.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. XTACH can collaborate with your internal developers, designers, marketers, and project managers. We aim to integrate smoothly into your workflow while maintaining clear communication throughout the project.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply complete the project inquiry form on our Contact page. Share your goals, preferred services, and requirements so we can discuss the next steps and explore a suitable solution.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <motion.div
            key={faq.question}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease,
            }}
            className={`group relative overflow-hidden rounded-[14px] border transition-colors duration-300 ${
              isOpen
                ? "border-purple-500/55 bg-[#0b102c]"
                : "border-[#293254]/85 bg-[#080d23]/85 hover:border-violet-400/45"
            }`}
          >
            {/* Active glow */}
            {isOpen && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/[0.08] via-transparent to-cyan-400/[0.025]" />
            )}

            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
                className="relative z-10 flex min-h-[43px] w-full items-center justify-between gap-4 px-4 py-2.5 text-left sm:min-h-[46px] sm:px-5"
              >
                <span
                  className={`text-[12px] font-medium leading-[1.5] transition-colors sm:text-[13px] ${
                    isOpen
                      ? "text-white"
                      : "text-[#e0e5f5] group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                  }}
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen
                      ? "bg-purple-500/15 text-purple-300"
                      : "text-slate-200 group-hover:text-cyan-300"
                  }`}
                >
                  <Plus size={17} strokeWidth={1.8} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.32,
                    ease,
                  }}
                  className="overflow-hidden"
                >
                  <div className="relative px-4 pb-4 sm:px-5">
                    <div className="mb-3 h-px w-full bg-gradient-to-r from-purple-500/35 via-[#293254] to-transparent" />

                    <p className="max-w-[680px] text-[12px] leading-[1.85] text-[#aeb8d4] sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ContactFAQ() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-faq"
      className="relative isolate overflow-hidden bg-[#030615] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_55%,rgba(89,28,178,0.14),transparent_45%),radial-gradient(ellipse_at_85%_40%,rgba(18,66,138,0.06),transparent_50%)]" />

      {/* Fine top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-10 xl:gap-14">

          {/* LEFT: Illustration */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px] lg:h-[350px]">

              <Image
                src="/images/contact/contact-faq-tech.png"
                alt="Futuristic glowing question mark hologram"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-contain object-center"
              />

              {/* Blend illustration into background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030615]/15 via-transparent to-[#030615]/15" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030615] to-transparent" />

              {/* Animated ambient lighting */}
              {!reduceMotion && (
                <motion.div
                  animate={{
                    opacity: [0.25, 0.6, 0.25],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute bottom-[8%] left-[20%] h-24 w-44 rounded-full bg-purple-500/15 blur-[45px]"
                />
              )}
            </div>
          </motion.div>

          {/* RIGHT: FAQ content */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease,
            }}
            className="min-w-0"
          >
            {/* Header */}
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[6px] w-[6px] rounded-full bg-fuchsia-500 shadow-[0_0_9px_#d946ef]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                    Frequently Asked Questions
                  </span>
                </div>

                <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-[-0.045em]">
                  Got Questions?
                </h2>

                <p className="mt-2 max-w-[500px] text-[12px] leading-[1.7] text-[#aeb8d4] sm:text-[13px]">
                  Here are some of the most common questions we get from clients.
                </p>
              </div>

              {/* Scrolls to the FAQ accordion */}
              <a
                href="#faq-list"
                className="group inline-flex h-[37px] shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#30395f] bg-[#0a1028]/70 px-4 text-[11px] font-medium text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10 sm:self-auto"
              >
                View All FAQ

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Accordion */}
            <div id="faq-list">
              <FAQAccordion />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
