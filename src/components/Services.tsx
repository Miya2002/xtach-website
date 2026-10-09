
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ChevronRight,
  Palette,
  Code2,
  Smartphone,
  ChartNoAxesCombined,
  Database,
  BrainCircuit,
  Mic2,
  Bot,
  CloudCog,
  Sparkles,
} from "lucide-react";

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    number: "01",
    title: "Logo & Brand Design",
    description: "Memorable identities that make your brand stand out.",
    icon: Palette,
    image: "/images/services/logo-branding.jfif",
    accent: "#bd78ff",
  },
  {
    number: "02",
    title: "Website Design & Development",
    description: "Beautiful, fast and responsive websites built to perform.",
    icon: Code2,
    image: "/images/services/web-development.jfif",
    accent: "#38caff",
  },
  {
    number: "03",
    title: "Application Development",
    description: "Powerful mobile and web apps for modern businesses.",
    icon: Smartphone,
    image: "/images/services/app-development.jfif",
    accent: "#aa7cff",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Creative, data-driven strategies that accelerate growth.",
    icon: ChartNoAxesCombined,
    image: "/images/services/digital-marketing.jfif",
    accent: "#38caff",
  },
  {
    number: "05",
    title: "Portals & CRM Systems",
    description: "Smart platforms that streamline your business operations.",
    icon: Database,
    image: "/images/services/crm-portals.jfif",
    accent: "#bd78ff",
  },
  {
    number: "06",
    title: "AI Model Development",
    description: "Custom AI models designed for intelligent business solutions.",
    icon: BrainCircuit,
    image: "/images/services/ai-models.jfif",
    accent: "#38caff",
  },
  {
    number: "07",
    title: "AI Voice Overs",
    description: "Natural-sounding AI voices for content and communication.",
    icon: Mic2,
    image: "/images/services/ai-voiceovers.jfif",
    accent: "#bd78ff",
  },
  {
    number: "08",
    title: "AI Automation",
    description: "Intelligent workflows that save time and boost productivity.",
    icon: Bot,
    image: "/images/services/ai-automation.jfif",
    accent: "#38caff",
  },
  {
    number: "09",
    title: "SaaS Development",
    description: "Scalable cloud-based software products built for growth.",
    icon: CloudCog,
    image: "/images/services/saas-development.jfif",
    accent: "#bd78ff",
  },
];

const brands = [
  { name: "Microsoft", symbol: "⊞" },
  { name: "Google", symbol: "G" },
  { name: "aws", symbol: "↗" },
  { name: "Meta", symbol: "∞" },
  { name: "Adobe", symbol: "▲" },
  { name: "shopify", symbol: "◈" },
];

const AUTOPLAY_DELAY = 3500;

/* =========================================
   SERVICE CARD
========================================= */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  const Icon = service.icon;

  return (
    <motion.a
      href="#contact"
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 35, scale: 0.96 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index, 4) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.015,
            }
      }
      className="
        group relative flex h-[390px]
        w-full flex-col overflow-hidden
        rounded-[20px] border
        border-[#34446b]/70
        bg-[#071126]
        transition-[border-color,box-shadow]
        duration-500
        hover:border-[#a67cff]/80
        hover:shadow-[0_20px_55px_rgba(95,65,200,0.3)]
        sm:h-[410px]
      "
    >
      {/* Ambient hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          bg-gradient-to-b
          from-[#a36cff]/10
          via-transparent
          to-[#38caff]/10
          opacity-0 transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Image area */}
      <div className="relative h-[205px] shrink-0 overflow-hidden sm:h-[220px]">
        {!imageError ? (
          <img
            src={service.image}
            alt={`${service.title} illustration`}
            loading={index < 3 ? "eager" : "lazy"}
            onError={() => setImageError(true)}
            className="
              h-full w-full object-cover
              transition-transform duration-700
              ease-out group-hover:scale-110
            "
          />
        ) : (
          <div
            className="
              flex h-full w-full items-center
              justify-center bg-gradient-to-br
              from-[#152755] via-[#24134c]
              to-[#061329]
            "
          >
            <Icon
              size={70}
              strokeWidth={1}
              style={{ color: service.accent }}
            />
          </div>
        )}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#071126]
            via-[#071126]/10
            to-transparent
          "
        />

        {/* Floating icon */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -5, 0] }
          }
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-4 top-4
            flex h-11 w-11 items-center
            justify-center rounded-full
            border border-white/25
            bg-[#030817]/75
            shadow-[0_0_20px_rgba(120,90,255,0.2)]
            backdrop-blur-lg
          "
        >
          <Icon
            size={21}
            strokeWidth={1.8}
            style={{ color: service.accent }}
          />
        </motion.div>

        <span
          className="
            absolute right-4 top-4
            rounded-full border
            border-white/15
            bg-[#030817]/70
            px-3 py-1 text-[11px]
            font-medium text-white/70
            backdrop-blur-md
          "
        >
          {service.number}
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-20 flex flex-1 flex-col px-5 pb-4 pt-2">
        <h3
          className="
            text-[16px] font-semibold
            leading-[1.35]
            tracking-[-0.025em]
            text-white
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-2 text-[12px]
            leading-[1.65]
            text-white/60
          "
        >
          {service.description}
        </p>

        <div className="mt-auto flex justify-end pt-4">
          <span
            className="
              flex h-9 w-9 items-center
              justify-center rounded-full
              border border-white/40
              bg-white/[0.04]
              transition-all duration-300
              group-hover:border-[#b27cff]
              group-hover:bg-[#9d65f0]
              group-hover:shadow-[0_0_22px_rgba(170,110,255,0.4)]
            "
          >
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </div>
      </div>

      {/* Neon bottom line */}
      <div
        className="
          absolute bottom-0 left-0 z-30
          h-[2px] w-0
          bg-gradient-to-r
          from-[#bd6cff] to-[#38caff]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </motion.a>
  );
}

/* =========================================
   MAIN SERVICES SECTION
========================================= */

export default function Services() {
  const reduceMotion = useReducedMotion();

  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const getStep = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return 0;

    const card = slider.querySelector<HTMLElement>(
      "[data-service-card]"
    );

    if (!card) return 0;

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 16;

    return card.getBoundingClientRect().width + gap;
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const normalized =
        ((index % services.length) + services.length) %
        services.length;

      const step = getStep();

      slider.scrollTo({
        left: normalized * step,
        behavior: reduceMotion ? "instant" : behavior,
      });

      setActiveIndex(normalized);
    },
    [getStep, reduceMotion]
  );

  const nextSlide = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getStep();
    if (!step) return;

    const current = Math.round(slider.scrollLeft / step);

    if (current >= services.length - 1) {
      scrollToIndex(0);
    } else {
      scrollToIndex(current + 1);
    }
  }, [getStep, scrollToIndex]);

  const previousSlide = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getStep();
    if (!step) return;

    const current = Math.round(slider.scrollLeft / step);

    if (current <= 0) {
      scrollToIndex(services.length - 1);
    } else {
      scrollToIndex(current - 1);
    }
  }, [getStep, scrollToIndex]);

  const pauseTemporarily = useCallback(() => {
    setIsInteracting(true);

    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
    }

    resumeRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5500);
  }, []);

  const handleNext = () => {
    pauseTemporarily();
    nextSlide();
  };

  const handlePrevious = () => {
    pauseTemporarily();
    previousSlide();
  };

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getStep();
    if (!step) return;

    const index = Math.round(slider.scrollLeft / step);

    setActiveIndex(
      Math.max(0, Math.min(services.length - 1, index))
    );
  }, [getStep]);

  /* Observe section visibility */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(slider);

    return () => observer.disconnect();
  }, []);

  /* Autoplay */
  useEffect(() => {
    if (
      reduceMotion ||
      isPaused ||
      isInteracting ||
      !isInView
    ) {
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [
    reduceMotion,
    isPaused,
    isInteracting,
    isInView,
    nextSlide,
  ]);

  /* Cleanup */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, []);

  return (
    <section
      id="services"
      className="
        relative isolate w-full
        overflow-hidden bg-[#030817]
        text-white
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_70%_35%,rgba(55,40,125,0.2),transparent_65%)]
        "
      />

      {/* =====================================
          TRUSTED TECHNOLOGY STRIP
      ===================================== */}

      <div
        className="
          relative overflow-hidden
          border-y border-[#9870ff]/20
          bg-[#020614]/95
        "
      >
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : { x: ["-100%", "100%"] }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none absolute left-0 top-0
            h-px w-full
            bg-gradient-to-r
            from-transparent
            via-[#a36aff]
            to-transparent
          "
        />

        <div
          className="
            mx-auto flex max-w-[1600px]
            flex-col gap-5 px-5 py-5
            sm:px-8 lg:flex-row
            lg:items-center lg:gap-8
            lg:px-12 xl:px-16
          "
        >
          <div className="flex shrink-0 items-center gap-3">
            <div
              className="
                flex h-10 w-10 items-center
                justify-center rounded-xl
                border border-[#9b6dff]/35
                bg-[#9b6dff]/10
              "
            >
              <Sparkles
                size={19}
                className="text-[#b77cff]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a879ff]">
                Digital Innovation
              </p>
              <p className="mt-1 text-[12px] font-semibold text-white/85">
                Inspired by Technology
              </p>
            </div>
          </div>

          {/* Moving brand marquee */}
          <div
            className="
              relative min-w-0 flex-1 overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            "
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { x: ["0%", "-50%"] }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-10 py-2"
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="
                    flex shrink-0 items-center gap-2
                    whitespace-nowrap text-white/55
                    transition-colors hover:text-white
                  "
                >
                  <span className="text-[22px] font-bold text-[#9b8bc4]">
                    {brand.symbol}
                  </span>

                  <span className="text-[18px] font-semibold">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.a
            href="#contact"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.04 }
            }
            className="
              group hidden shrink-0
              items-center gap-4 rounded-full
              border border-[#aa7cff]/40
              bg-[#aa7cff]/10 px-5 py-3
              text-[11px] font-semibold
              transition-all
              hover:border-[#aa7cff]
              hover:bg-[#aa7cff]/20
              lg:inline-flex
            "
          >
            Let's Build Your Next Project
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>

      {/* =====================================
          MAIN SERVICES CONTENT
      ===================================== */}

      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-5 py-16 sm:px-8 sm:py-20
          lg:px-12 lg:py-24 xl:px-16
        "
      >
        <div
          className="
            grid grid-cols-1 gap-10
            lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,2.5fr)]
            lg:items-center lg:gap-10
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -40 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:self-center"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  h-px w-7
                  bg-gradient-to-r
                  from-[#c16cff]
                  to-[#45caff]
                "
              />
              <span
                className="
                  text-[10px] font-semibold
                  uppercase tracking-[0.32em]
                  text-white/65
                "
              >
                Our Services
              </span>
            </div>

            <h2
              className="
                max-w-[460px]
                text-[clamp(2.2rem,3.1vw,3.6rem)]
                font-semibold leading-[1.1]
                tracking-[-0.045em]
              "
            >
              Complete Digital Solutions for a{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#c16cff]
                  via-[#a57aff]
                  to-[#4ccaff]
                  bg-clip-text text-transparent
                "
              >
                Smarter Tomorrow.
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-[400px]
                text-[14px] leading-[1.8]
                text-white/65 sm:text-[15px]
              "
            >
              From creative branding and websites to advanced
              AI, automation and SaaS platforms, XTACH delivers
              complete digital solutions to help businesses
              innovate, scale and succeed.
            </p>

            <motion.a
              href="#contact"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, scale: 1.02 }
              }
              whileTap={{ scale: 0.97 }}
              className="
                group mt-8 inline-flex min-h-[45px]
                items-center gap-7 rounded-full
                border border-white/40
                bg-white/[0.025]
                px-6 py-3 text-[12px]
                font-medium text-white
                transition-all
                hover:border-[#a978ff]
                hover:bg-[#a978ff]/10
              "
            >
              View All Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* =====================================
              RIGHT CAROUSEL
          ===================================== */}

          <div className="min-w-0">
            {/* Slider header */}
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#a56dff] shadow-[0_0_14px_#a56dff]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Explore Our Expertise
                </span>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous service"
                  className="
                    group flex h-10 w-10
                    items-center justify-center
                    rounded-full border
                    border-white/25
                    bg-white/[0.04]
                    transition-all duration-300
                    hover:border-[#a978ff]
                    hover:bg-[#a978ff]/20
                    hover:shadow-[0_0_20px_rgba(169,120,255,0.25)]
                  "
                >
                  <ArrowLeft
                    size={17}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service"
                  className="
                    group flex h-10 w-10
                    items-center justify-center
                    rounded-full border
                    border-[#a978ff]/60
                    bg-[#a978ff]/15
                    transition-all duration-300
                    hover:bg-[#a978ff]
                    hover:shadow-[0_0_22px_rgba(169,120,255,0.4)]
                  "
                >
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Slider viewport */}
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setIsPaused(false);
                }
              }}
              onTouchStart={pauseTemporarily}
            >
              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="
                  flex snap-x snap-mandatory
                  gap-4 overflow-x-auto
                  scroll-smooth
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                {services.map((service, index) => (
                  <div
                    key={service.number}
                    data-service-card
                    className="
                      min-w-0 shrink-0 snap-start
                      basis-[85%]
                      sm:basis-[calc((100%-16px)/2)]
                      xl:basis-[calc((100%-32px)/3)]
                    "
                  >
                    <ServiceCard
                      service={service}
                      index={index}
                    />
                  </div>
                ))}
              </div>

              {/* Right-edge gradient */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  inset-y-0 right-0 w-10
                  bg-gradient-to-l
                  from-[#030817]/70
                  to-transparent
                "
              />
            </div>

            {/* Progress and pagination */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                {services.map((service, index) => (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => {
                      pauseTemporarily();
                      scrollToIndex(index);
                    }}
                    aria-label={`Go to service ${index + 1}: ${service.title}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className="flex h-8 items-center justify-center px-0.5"
                  >
                    <span
                      className={`
                        block h-[3px] rounded-full
                        transition-all duration-500
                        ${
                          activeIndex === index
                            ? "w-7 bg-gradient-to-r from-[#bd6cff] to-[#38caff]"
                            : "w-3 bg-white/20 hover:bg-white/50"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[12px] font-medium">
                <span className="text-[#b77cff]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-white/30">/</span>
                <span className="text-white/55">
                  {String(services.length).padStart(2, "0")}
                </span>
                <ChevronRight
                  size={14}
                  className="ml-1 text-white/35"
                />
              </div>
            </div>

            <p className="mt-2 text-[11px] text-white/35">
              Swipe or use the arrows to explore our services.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0 h-px
          bg-gradient-to-r
          from-transparent
          via-[#986bff]/40
          to-transparent
        "
      />
    </section>
  );
}
