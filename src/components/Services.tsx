
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Palette,
  Code2,
  Smartphone,
  Megaphone,
  Database,
  BrainCircuit,
  Mic,
  Workflow,
  Cloud,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand design and development",
    description: "Memorable identities that make your brand stand out.",
    
    image: "/images/services/brand-design.png",
    icon: Palette,
    color: "#bf78ff",
  },
  
  {
    number: "02",
    title: "Application Development",
    description: "Powerful mobile and web apps for modern businesses.",
   
    image: "/images/services/app-development1.png",
    icon: Smartphone,
    color: "#bb7aff",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description: "Creative strategies that help your business grow online.",
    
    image: "/images/services/digital-marketing1.png",
    icon: Megaphone,
    color: "#f17ab9",
  },
  {
    number: "04",
    title: "Portals & CRM Systems",
    description: "Smart platforms that streamline your business operations.",
    
    image: "/images/services/crm-portals1.png",
    icon: Database,
    color: "#b679ff",
  },
  {
    number: "05",
    title: "AI Model Development",
    description: "Custom AI models designed for intelligent business solutions.",
    
    image: "/images/services/ai-models1.png",
    icon: BrainCircuit,
    color: "#3cd7f5",
  },
  {
    number: "06",
    title: "AI Voice Overs",
    description: "Natural AI-powered voices for engaging digital content.",
    
    image: "/images/services/ai-voiceovers.png",
    icon: Mic,
    color: "#b579ff",
  },
  {
    number: "07",
    title: "AI Automation",
    description: "Automate repetitive tasks and improve business efficiency.",
    
    image: "/images/services/ai-automation.jfif",
    icon: Workflow,
    color: "#35cfff",
  },
  {
    number: "08",
    title: "SaaS Development",
    description: "Scalable cloud software built for growing businesses.",
    
    image: "/images/services/saas-development.jfif",
    icon: Cloud,
    color: "#b47aff",
  },
];

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group relative flex h-[420px] w-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/[0.15] bg-[#0b1025] transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_16px_40px_rgba(100,55,200,0.15)]">
      {/* IMAGE */}
      <div className="relative h-[190px] shrink-0 overflow-hidden bg-[#11152c]">
        {!imageFailed ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            unoptimized
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => {
              console.error(
                "Service image failed to load:",
                service.image
              );
              setImageFailed(true);
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900/40 via-[#0d1530] to-cyan-950/30">
            <Icon
              size={60}
              className="text-purple-300/50"
            />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060918]/10 via-transparent to-[#0b1025]" />

        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[#090d23]/85 backdrop-blur-md">
          <Icon
            size={21}
            style={{ color: service.color }}
          />
        </div>

        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#070b1d]/85 px-3 py-2 text-[11px] font-semibold tracking-wider text-white/80 backdrop-blur-md">
          {service.number} / 08
        </span>

       
      </div>

      {/* CARD CONTENT */}
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5">
        <h3 className="text-[19px] font-bold leading-[1.3] tracking-[-0.035em] text-white sm:text-[20px]">
          {service.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.7] text-slate-400">
          {service.description}
        </p>

        <a
          href="#contact"
          aria-label={`Explore ${service.title}`}
          className="mt-auto flex items-center justify-between gap-3 pt-5"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/50 transition-colors group-hover:text-purple-300">
            Explore Service
          </span>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.05] text-white transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);

  const total = services.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // RESPONSIVE CARD COUNT
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);

  // SCROLL TO SERVICE
  const scrollToIndex = useCallback(
    (index: number, instant = false) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const safeIndex = Math.max(
        0,
        Math.min(index, maxIndex)
      );

      const firstCard =
        slider.firstElementChild as HTMLElement | null;

      if (!firstCard) return;

      const styles = window.getComputedStyle(slider);

      const gap =
        parseFloat(styles.columnGap || styles.gap) || 0;

      const cardWidth =
        firstCard.getBoundingClientRect().width;

      slider.scrollTo({
        left: safeIndex * (cardWidth + gap),
        behavior:
          instant || reduceMotion ? "instant" : "smooth",
      });

      setActiveIndex(safeIndex);
    },
    [maxIndex, reduceMotion]
  );

  const handleNext = useCallback(() => {
    scrollToIndex(
      activeIndex >= maxIndex ? 0 : activeIndex + 1
    );
  }, [activeIndex, maxIndex, scrollToIndex]);

  const handlePrevious = useCallback(() => {
    scrollToIndex(
      activeIndex <= 0 ? maxIndex : activeIndex - 1
    );
  }, [activeIndex, maxIndex, scrollToIndex]);

  // AUTOMATIC SLIDER
  useEffect(() => {
    if (paused || reduceMotion) return;

    const interval = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const firstCard =
        slider.firstElementChild as HTMLElement | null;

      if (!firstCard) return;

      const styles = window.getComputedStyle(slider);

      const gap =
        parseFloat(styles.columnGap || styles.gap) || 0;

      const cardWidth =
        firstCard.getBoundingClientRect().width;

      const currentIndex = Math.max(
        0,
        Math.min(
          Math.round(
            slider.scrollLeft / (cardWidth + gap)
          ),
          maxIndex
        )
      );

      const next =
        currentIndex >= maxIndex ? 0 : currentIndex + 1;

      slider.scrollTo({
        left: next * (cardWidth + gap),
        behavior: "smooth",
      });

      setActiveIndex(next);
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused, reduceMotion, maxIndex]);

  // KEEP CARDS ALIGNED ON RESIZE
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new ResizeObserver(() => {
      const firstCard =
        slider.firstElementChild as HTMLElement | null;

      if (!firstCard) return;

      const styles = window.getComputedStyle(slider);

      const gap =
        parseFloat(styles.columnGap || styles.gap) || 0;

      const cardWidth =
        firstCard.getBoundingClientRect().width;

      slider.scrollTo({
        left:
          Math.min(activeIndex, maxIndex) *
          (cardWidth + gap),
        behavior: "instant",
      });
    });

    observer.observe(slider);

    return () => observer.disconnect();
  }, [visibleCount, maxIndex, activeIndex]);

  // UPDATE ACTIVE INDEX WHEN SWIPING
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card =
      slider.firstElementChild as HTMLElement | null;

    if (!card) return;

    const styles = window.getComputedStyle(slider);

    const gap =
      parseFloat(styles.columnGap || styles.gap) || 0;

    const width =
      card.getBoundingClientRect().width + gap;

    if (width > 0) {
      const index = Math.round(
        slider.scrollLeft / width
      );

      setActiveIndex(
        Math.max(0, Math.min(index, maxIndex))
      );
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden border-t border-purple-400/10 bg-[#060719] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[550px] w-[550px] rounded-full bg-purple-700/[0.07] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-16">
        {/* SECTION LABEL */}
        <div className="mb-9 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-purple-500 to-cyan-400" />

          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-200">
            Our Expertise
          </span>

          <Sparkles
            size={16}
            className="text-purple-400"
          />
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(290px,0.32fr)_minmax(0,0.68fr)] lg:gap-7 xl:grid-cols-[minmax(340px,0.30fr)_minmax(0,0.70fr)] xl:gap-9">
          {/* LEFT CONTENT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:pt-2"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-purple-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-purple-100 sm:text-[11px]">
                Digital Innovation Studio
              </span>
            </div>

            <h2
              id="services-heading"
              className="max-w-[470px] text-[clamp(2.4rem,3.5vw,4rem)] font-bold leading-[1.12] tracking-[-0.055em]"
            >
              We Build
              <br />
              Digital
              <br />
              <span className="bg-gradient-to-r from-[#ca83ff] via-[#ad86ff] to-[#57cfff] bg-clip-text text-transparent">
                Experiences
              </span>
              <br />
              That Matter.
            </h2>

            <div className="mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

            <p className="mt-7 max-w-[430px] text-[15px] leading-[1.85] text-slate-400">
              From bold branding to intelligent AI-powered
              platforms, we combine creativity, technology,
              and strategy to turn ambitious ideas into
              powerful digital solutions.
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
              className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-7 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-600/30 to-blue-600/15 px-6 text-[13px] font-semibold text-white transition-all hover:border-purple-300 hover:bg-purple-500/30"
            >
              Start Your Project

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* RIGHT CAROUSEL */}
          <div className="min-w-0">
            <div className="mb-5 flex min-h-[44px] items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-[12px]">
                  Explore Our Services
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="Previous service"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-white transition-all hover:border-purple-400 hover:bg-purple-500/20"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/15 text-white transition-all hover:bg-purple-500"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>

            {/* CARDS */}
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
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              className="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="XTACH services carousel"
            >
              {services.map((service) => (
                <div
                  key={service.number}
                  className="w-full min-w-0 shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {Array.from(
                  { length: maxIndex + 1 },
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollToIndex(index)}
                      aria-label={`Go to service ${index + 1}`}
                      aria-current={
                        activeIndex === index
                          ? "true"
                          : undefined
                      }
                      className={`h-[4px] rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-9 bg-gradient-to-r from-purple-500 to-cyan-400"
                          : "w-4 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  )
                )}
              </div>

              <div className="flex shrink-0 items-center gap-2 text-[12px] tracking-wider">
                <span className="font-semibold text-purple-300">
                  {String(activeIndex + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="text-white/30">/</span>

                <span className="text-white/60">
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-white/35">
              Swipe or use the arrows to explore our
              expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
