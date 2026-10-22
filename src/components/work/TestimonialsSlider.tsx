
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/*
  SAMPLE TESTIMONIALS

  Replace these demonstration quotes, names and photos
  with actual client-approved feedback before publishing.

  Place photos in public/images/work/testimonials/
*/

const testimonials = [
  {
    id: 1,
    quote:
      "XTACH understood our vision and transformed it into a beautiful digital experience. Their creativity, attention to detail, and dedication made the entire process exceptional.",
    name: "Client Name 01",
    role: "Brand Identity Project",
    image: "/images/work/testimonials/client-1.PNG",
  },
  {
    id: 2,
    quote:
      "The team brought fresh ideas, thoughtful design, and a professional approach to our project. The final experience was modern, intuitive, and aligned with our goals.",
    name: "Client Name 02",
    role: "Website Development Project",
    image: "/images/work/testimonials/client-2.PNG",
  },
  {
    id: 3,
    quote:
      "From the first conversation to the final delivery, the experience was collaborative and well organized. The team understood what we wanted to achieve.",
    name: "Client Name 03",
    role: "Digital Solutions Project",
    image: "/images/work/testimonials/client-3.PNG",
  },
];

function ClientPhoto({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#121735]">
      {!failed ? (
        <Image
          src={src}
          alt={`Portrait of ${name}`}
          fill
          sizes="(max-width: 768px) 280px, 340px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.3),transparent_70%)] p-5 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/15 text-3xl font-bold text-purple-200">
            {name.charAt(0)}
          </div>

          <span className="mt-4 text-xs text-slate-400">
            Client photo
          </span>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  function goTo(index: number) {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function next() {
    setDirection(1);
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  }

  function previous() {
    setDirection(-1);
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  }

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : direction * 35,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: reduceMotion ? 0 : direction * -35,
    }),
  };

  return (
    <>
      {/* TESTIMONIAL SLIDER */}
      <section
        aria-label="Client testimonials"
        className="relative isolate overflow-hidden bg-[#090c21] py-14 text-white sm:py-16 lg:py-20"
      >
        {/* BACKGROUND EFFECTS */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-600/[0.08] blur-[110px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-[1250px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-12 lg:gap-20">
            {/* LEFT: TESTIMONIAL CONTENT */}
            <div className="min-w-0">
              <motion.div
                initial={
                  reduceMotion ? false : { opacity: 0, y: 15 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <Quote
                  size={52}
                  strokeWidth={1.5}
                  className="mb-5 fill-purple-500/20 text-purple-400"
                />

                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-[11px]">
                  Client Experiences
                </p>
              </motion.div>

              <div
                aria-live="polite"
                aria-atomic="true"
                className="relative min-h-[205px] sm:min-h-[180px] md:min-h-[225px]"
              >
                <AnimatePresence
                  mode="wait"
                  custom={direction}
                >
                  <motion.div
                    key={activeTestimonial.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease }}
                  >
                    <blockquote className="max-w-[670px] text-[clamp(1.1rem,1.8vw,1.6rem)] font-medium leading-[1.7] tracking-[-0.02em] text-slate-100">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>

                    <div className="mt-6">
                      <p className="text-[15px] font-bold text-white">
                        {activeTestimonial.name}
                      </p>

                      <p className="mt-1 text-[12px] text-slate-400">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* NAVIGATION */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={previous}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-purple-500/25"
                >
                  <ArrowLeft size={18} />
                </button>

                <div
                  className="flex items-center gap-2"
                  aria-label="Choose testimonial"
                >
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Show testimonial ${index + 1}`}
                      aria-current={
                        activeIndex === index ? "true" : undefined
                      }
                      onClick={() => goTo(index)}
                      className={`h-[9px] rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-8 bg-gradient-to-r from-purple-400 to-cyan-400"
                          : "w-[9px] bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-purple-500/25"
                >
                  <ArrowRight size={18} />
                </button>

                <span className="ml-auto text-[11px] font-medium tracking-[0.15em] text-slate-400 sm:ml-4">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="mx-2 text-purple-400">/</span>
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* RIGHT: CLIENT PHOTO */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 25 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="relative mx-auto w-full max-w-[350px] md:max-w-none"
            >
              {/* PHOTO GLOW */}
              <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/15 blur-[28px]" />

              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[22px] border border-purple-400/30 bg-[#11162c] p-[4px] shadow-[0_20px_65px_rgba(0,0,0,0.35)]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0"
                    >
                      <ClientPhoto
                        src={activeTestimonial.image}
                        name={activeTestimonial.name}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06091c]/45 via-transparent to-transparent" />
                </div>
              </div>

              {/* DECORATIVE CORNER ACCENT */}
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-[24px] border-b-2 border-r-2 border-cyan-400/70" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative isolate overflow-hidden bg-[#050817] py-20 text-white sm:py-24 lg:py-28">
        {/* BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.12, 1],
                    opacity: [0.12, 0.2, 0.12],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]"
          />

          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(160,145,255,0.65) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(ellipse at center, black, transparent 75%)",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 22 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2">
              <Sparkles
                size={14}
                className="text-cyan-300"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-200">
                Let's Build Something Extraordinary
              </span>
            </div>

            <h2 className="text-[clamp(2.3rem,5vw,4.8rem)] font-extrabold leading-[1.12] tracking-[-0.055em]">
              Your{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              Starts Right Here.
            </h2>

            <p className="mx-auto mt-6 max-w-[580px] text-[13px] leading-[1.85] text-slate-300 sm:text-[15px]">
              Have an idea in mind? Let's transform it into
              something exceptional with creative design,
              intelligent technology, and digital innovation.
            </p>

            <motion.div
              whileHover={
                reduceMotion ? undefined : { y: -3 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="mt-9 inline-flex"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full border border-purple-400/40 bg-gradient-to-r from-[#a52bf5] via-[#8053f6] to-[#24b9ed] px-8 text-[13px] font-bold text-white shadow-[0_12px_40px_rgba(139,92,246,0.25)] transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(139,92,246,0.45)]"
              >
                Start Your Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

            {/* SMALL ACCENT */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
