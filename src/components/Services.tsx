
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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
  MoveUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Logo & Brand Design",
    description:
      "Memorable identities that make your brand stand out.",
    icon: Palette,
    image: "/images/services/logo-branding.jfif",
    accent: "#bd78ff",
    category: "CREATIVE",
  },
  {
    number: "02",
    title: "Website Design & Development",
    description:
      "Beautiful, fast and responsive websites built to perform.",
    icon: Code2,
    image: "/images/services/web-development.jfif",
    accent: "#38caff",
    category: "DEVELOPMENT",
  },
  {
    number: "03",
    title: "Application Development",
    description:
      "Powerful mobile and web apps for modern businesses.",
    icon: Smartphone,
    image: "/images/services/app-development.jfif",
    accent: "#aa7cff",
    category: "DEVELOPMENT",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Creative, data-driven strategies that accelerate growth.",
    icon: ChartNoAxesCombined,
    image: "/images/services/digital-marketing.jfif",
    accent: "#38caff",
    category: "GROWTH",
  },
  {
    number: "05",
    title: "Portals & CRM Systems",
    description:
      "Smart platforms that streamline your business operations.",
    icon: Database,
    image: "/images/services/crm-portals.jfif",
    accent: "#bd78ff",
    category: "ENTERPRISE",
  },
  {
    number: "06",
    title: "AI Model Development",
    description:
      "Custom AI models designed for intelligent business solutions.",
    icon: BrainCircuit,
    image: "/images/services/ai-models.jfif",
    accent: "#38caff",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    number: "07",
    title: "AI Voice Overs",
    description:
      "Natural-sounding AI voices for content and communication.",
    icon: Mic2,
    image: "/images/services/ai-voiceovers.jfif",
    accent: "#bd78ff",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    number: "08",
    title: "AI Automation",
    description:
      "Intelligent workflows that save time and boost productivity.",
    icon: Bot,
    image: "/images/services/ai-automation.jfif",
    accent: "#38caff",
    category: "AUTOMATION",
  },
  {
    number: "09",
    title: "SaaS Development",
    description:
      "Scalable cloud-based software products built for growth.",
    icon: CloudCog,
    image: "/images/services/saas-development.jfif",
    accent: "#bd78ff",
    category: "CLOUD SOLUTIONS",
  },
];

const AUTOPLAY_DELAY = 4500;

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
      data-service-card
      aria-label={`Explore ${service.title}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 45 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index, 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-[440px] w-full flex-col overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#0b1025] transition-[border-color,box-shadow] duration-500 hover:border-purple-400/60 hover:shadow-[0_25px_70px_rgba(96,49,200,0.22)] sm:h-[475px]"
    >
      {/* Animated card border */}
      <div className="pointer-events-none absolute inset-0 z-30 rounded-[26px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[26px] border border-purple-400/40" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent shadow-[0_0_18px_#b76aff]" />
      </div>

      {/* Image */}
      <div className="relative h-[245px] shrink-0 overflow-hidden sm:h-[265px]">
        {!imageError ? (
          <img
            src={service.image}
            alt={`${service.title} illustration`}
            loading={index < 3 ? "eager" : "lazy"}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#19244c] via-[#28144c] to-[#071329]">
            <Icon
              size={78}
              strokeWidth={1}
              style={{ color: service.accent }}
            />
          </div>
        )}

        {/* Image gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1025] via-[#0b1025]/10 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-purple-500/0 transition-colors duration-700 group-hover:bg-purple-500/[0.07]" />

        {/* Moving light sweep */}
        <div className="pointer-events-none absolute inset-y-0 -left-[100%] w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-[left] duration-1000 group-hover:left-[150%]" />

        {/* Icon */}
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#070b1d]/75 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:border-purple-400/60">
          <Icon
            size={23}
            strokeWidth={1.7}
            style={{ color: service.accent }}
          />
        </div>

        {/* Number */}
        <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-[#050817]/70 px-3 py-1.5 text-[11px] font-medium tracking-wider text-white/80 backdrop-blur-xl">
          {service.number} / 09
        </span>

        {/* Category */}
        <div className="absolute bottom-5 left-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#080d21]/70 px-3 py-1.5 text-[9px] font-semibold tracking-[0.17em] text-white/80 backdrop-blur-xl">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: service.accent,
                boxShadow: `0 0 10px ${service.accent}`,
              }}
            />
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6">
        <h3 className="max-w-[95%] text-[19px] font-semibold leading-[1.25] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-purple-200 sm:text-[21px]">
          {service.title}
        </h3>

        <p className="mt-3 max-w-[95%] text-[13px] leading-[1.7] text-slate-400 sm:text-[14px]">
          {service.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 group-hover:text-purple-300">
            Explore Service
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/[0.05] text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-purple-400 group-hover:bg-purple-500 group-hover:shadow-[0_0_25px_rgba(170,100,255,0.5)]">
            <ArrowUpRight size={19} />
          </span>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-500 transition-all duration-500 group-hover:w-[80%]" />
    </motion.a>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const total = services.length;
  const maxIndex = Math.max(0, total - visibleCount);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const cards = slider.querySelectorAll<HTMLElement>(
        "[data-service-card]"
      );

      const targetIndex = Math.max(
        0,
        Math.min(index, cards.length - 1)
      );

      const card = cards[targetIndex];
      if (!card) return;

      slider.scrollTo({
        left: card.offsetLeft - slider.offsetLeft,
        behavior,
      });

      setActiveIndex(targetIndex);
    },
    []
  );

  const pauseTemporarily = useCallback(() => {
    setInteracting(true);

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      setInteracting(false);
    }, 6500);
  }, []);

  const next = useCallback(() => {
    const nextIndex =
      activeIndex >= maxIndex ? 0 : activeIndex + 1;

    scrollToIndex(nextIndex);
  }, [activeIndex, maxIndex, scrollToIndex]);

  const previous = useCallback(() => {
    const previousIndex =
      activeIndex <= 0 ? maxIndex : activeIndex - 1;

    scrollToIndex(previousIndex);
  }, [activeIndex, maxIndex, scrollToIndex]);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      const count = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
      setVisibleCount(count);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(slider);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      reduceMotion ||
      paused ||
      interacting ||
      !inView ||
      maxIndex === 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const target = current >= maxIndex ? 0 : current + 1;

        const slider = sliderRef.current;
        const cards = slider?.querySelectorAll<HTMLElement>(
          "[data-service-card]"
        );

        const card = cards?.[target];

        if (slider && card) {
          slider.scrollTo({
            left: card.offsetLeft - slider.offsetLeft,
            behavior: "smooth",
          });
        }

        return target;
      });
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [
    reduceMotion,
    paused,
    interacting,
    inView,
    maxIndex,
  ]);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      scrollToIndex(maxIndex, "instant");
    }
  }, [activeIndex, maxIndex, scrollToIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - slider.offsetLeft - slider.scrollLeft
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(Math.min(nearestIndex, maxIndex));
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#050817] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-700/[0.12] blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.10] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,120,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(150,120,255,.15) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section top */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-9 bg-gradient-to-r from-purple-500 to-cyan-400" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-200">
            Our Expertise
          </span>

          <Sparkles
            size={14}
            className="text-purple-400"
          />
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,2.2fr)] lg:gap-9 xl:gap-14">
          {/* Left content */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200">
                Digital Innovation Studio
              </span>
            </div>

            <h2 className="max-w-[570px] text-[clamp(2.5rem,4vw,4.6rem)] font-bold leading-[1.06] tracking-[-0.055em]">
              We Build
              <span className="block">Digital</span>

              <span className="block bg-gradient-to-r from-[#c27aff] via-[#9c6dff] to-[#53d5ff] bg-clip-text text-transparent">
                Experiences
              </span>

              <span className="block">That Matter.</span>
            </h2>

            <div className="mt-7 h-[2px] w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

            <p className="mt-7 max-w-[430px] text-[14px] leading-[1.9] text-slate-400 sm:text-[15px]">
              From bold branding to intelligent AI-powered
              platforms, we combine creativity, technology,
              and strategy to turn ambitious ideas into
              powerful digital solutions.
            </p>

            <motion.a
              href="#contact"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.035 }
              }
              whileTap={{ scale: 0.97 }}
              className="group relative mt-9 inline-flex items-center gap-6 overflow-hidden rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-600/20 to-blue-500/10 px-6 py-4 text-[13px] font-semibold text-white transition-all duration-300 hover:border-purple-300 hover:shadow-[0_0_35px_rgba(146,75,255,0.25)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">
                Start Your Project
              </span>

              <ArrowUpRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

           
          </motion.div>

          {/* Right carousel */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(180,100,255,0.8)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-[11px]">
                  Explore Our Services
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    pauseTemporarily();
                    previous();
                  }}
                  aria-label="Previous services"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    pauseTemporarily();
                    next();
                  }}
                  aria-label="Next services"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/15 text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(150,75,255,0.35)]"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null
                  )
                ) {
                  setPaused(false);
                }
              }}
              onPointerDown={pauseTemporarily}
              onTouchStart={pauseTemporarily}
              className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
              style={{ scrollPaddingLeft: 0 }}
              aria-label="XTACH services carousel"
            >
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="w-full min-w-0 shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                >
                  <ServiceCard
                    service={service}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Carousel progress */}
            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {Array.from(
                  { length: maxIndex + 1 },
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        pauseTemporarily();
                        scrollToIndex(index);
                      }}
                      aria-label={`Go to service slide ${index + 1}`}
                      aria-current={
                        activeIndex === index
                          ? "true"
                          : undefined
                      }
                      className={`h-[4px] rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "w-9 bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(160,90,255,0.6)]"
                          : "w-4 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  )
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2 text-[12px] font-medium tracking-wider">
                <span className="text-purple-300">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="text-white/30">/</span>

                <span className="text-white/60">
                  {String(total).padStart(2, "0")}
                </span>

                <MoveUpRight
                  size={14}
                  className="ml-1 text-white/40"
                />
              </div>
            </div>

            <p className="mt-5 text-[11px] text-white/35">
              Swipe or use the arrows to explore our expertise.
            </p>
          </div>
        </div>

        {/* Bottom decorative divider */}
        <div className="mt-20 flex items-center gap-4 sm:mt-24">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
            Imagine · Innovate · Inspire
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
