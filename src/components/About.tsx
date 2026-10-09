
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Orbit,
  Layers3,
  Globe2,
  Sparkles,
} from "lucide-react";

/* ==========================================
   XTACH UNIVERSE FEATURES
========================================== */

const features = [
  {
    number: "01",
    title: "AI-Powered Innovation",
    description: "Smarter solutions for a brighter future.",
    icon: BrainCircuit,
    color: "#c084fc",
  },
  {
    number: "02",
    title: "Creative Technology",
    description: "Stunning design. Real impact.",
    icon: Orbit,
    color: "#60caff",
  },
  {
    number: "03",
    title: "Scalable Solutions",
    description: "Built to grow with you.",
    icon: Layers3,
    color: "#b88aff",
  },
  {
    number: "04",
    title: "Global Perspective",
    description: "Ideas that reach beyond borders.",
    icon: Globe2,
    color: "#67d6ff",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ==========================================
   MAIN ABOUT COMPONENT
========================================== */

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const reduceMotion = useReducedMotion();

  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  /* ==========================================
     VIDEO PLAYBACK
  ========================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const startVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Keep fallback background if playback is blocked.
        });
      }
    };

    if (video.readyState >= 2) {
      setVideoReady(true);
    }

    startVideo();

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        startVideo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, [reduceMotion]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#030817]
        text-white
      "
    >
      {/* ======================================
          BACKGROUND VIDEO
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
      >
        {/* Fallback when video is loading */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_52%_50%,#25165c_0%,#0b1740_42%,#030817_85%)]
          "
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/about/xtach-universe-poster.webp"
          aria-hidden="true"
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`
            absolute inset-0
            h-full w-full
            object-cover object-center
            transition-opacity duration-1000
            ${
              (videoReady && !videoFailed) || reduceMotion
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <source
            src="/videos/xtach-universe.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ======================================
          CINEMATIC DARK OVERLAYS
      ====================================== */}

      {/* Overall darkness */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[1]
          bg-[#020512]/5
        "
      />

      {/* Left and right readability */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-r
          from-[#020512]/90
          via-[#020512]/25
          to-[#020512]/85
          lg:from-[#020512]/85
          lg:via-[#020512]/15
          lg:to-[#020512]/80
        "
      />

      {/* Top and bottom fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-b
          from-[#020512]/50
          via-transparent
          to-[#020512]/65
        "
      />

      {/* ======================================
          AMBIENT ANIMATED GLOW
      ====================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-[28%] top-[10%]
          z-[2] h-[280px] w-[280px]
          rounded-full bg-[#854bff]/10
          blur-[110px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 45, 0],
                y: [0, -20, 0],
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto grid w-full
          max-w-[1600px]
          grid-cols-1
          items-center gap-10
          px-5 py-16
          sm:px-8 sm:py-20
          lg:min-h-[420px]
          lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.43fr)]
          lg:gap-12
          lg:px-12 lg:py-16
          xl:px-16
        "
      >
        {/* ======================================
            LEFT TEXT CONTENT
        ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -35 }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="max-w-[480px]"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              className="
                h-px w-7
                bg-gradient-to-r
                from-[#b56cff]
                to-[#48caff]
              "
              initial={
                reduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              style={{
                transformOrigin: "left",
              }}
            />

            <span
              className="
                text-[10px]
                font-semibold uppercase
                tracking-[0.3em]
                text-white/75
              "
            >
              The XTACH Universe
            </span>
          </div>

          {/* Main heading */}
          <motion.h2
            id="about-heading"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 22 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease,
            }}
            className="
              max-w-[480px]
              text-[clamp(2rem,3vw,3.25rem)]
              font-semibold
              leading-[1.12]
              tracking-[-0.045em]
              text-white
            "
          >
            Where Technology
            <br />
            Meets{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#b56cff]
                via-[#a28cff]
                to-[#48caff]
                bg-clip-text
                text-transparent
              "
            >
              Creativity.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.22,
              ease,
            }}
            className="
              mt-5 max-w-[410px]
              text-[13px]
              leading-[1.85]
              text-white/75
              sm:text-[14px]
            "
          >
            We combine the power of AI, modern engineering
            and human creativity to build digital products
            that solve real problems and create meaningful
            experiences.
          </motion.p>

          {/* Learn more button */}
          <motion.a
            href="#contact"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease,
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    scale: 1.025,
                    boxShadow:
                      "0 10px 35px rgba(160,105,255,0.22)",
                  }
            }
            whileTap={{ scale: 0.97 }}
            className="
              group mt-7 inline-flex
              min-h-[44px]
              items-center justify-center
              gap-7 rounded-full
              border border-white/50
              bg-[#050b20]/35
              px-6 py-3
              text-[12px]
              font-semibold
              text-white
              backdrop-blur-md
              transition-colors duration-300
              hover:border-[#b87cff]
              hover:bg-[#a878ff]/15
            "
          >
            Learn More

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </motion.a>
        </motion.div>

        {/* ======================================
            RIGHT FEATURES
        ====================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 35 }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease,
          }}
          className="
            relative
            border-t border-white/20
            pt-7
            lg:border-l
            lg:border-t-0
            lg:py-3
            lg:pl-7
            xl:pl-9
          "
        >
          {/* Decorative vertical glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-0 top-[10%]
              hidden h-[80%] w-px
              bg-gradient-to-b
              from-transparent
              via-[#a878ff]/60
              to-transparent
              lg:block
            "
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 20,
                          y: 10,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.2 + index * 0.11,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { x: 5 }
                  }
                  className="
                    group relative flex
                    items-center gap-4
                  "
                >
                  {/* Feature icon */}
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 12,
                            scale: 1.1,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="
                      relative flex h-11 w-11
                      shrink-0 items-center
                      justify-center
                      rounded-full
                      border border-white/25
                      bg-[#030817]/65
                      shadow-[0_0_15px_rgba(125,80,255,0.12)]
                      backdrop-blur-md
                      transition-all duration-300
                      group-hover:border-[#a878ff]/70
                      group-hover:bg-[#a878ff]/15
                      group-hover:shadow-[0_0_22px_rgba(168,120,255,0.25)]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.65}
                      style={{
                        color: feature.color,
                      }}
                    />
                  </motion.div>

                  {/* Feature text */}
                  <div className="min-w-0">
                    <h3
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.4]
                        text-white/95
                        transition-colors duration-300
                        group-hover:text-[#c69aff]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1 text-[11px]
                        leading-[1.6]
                        text-white/60
                        sm:text-[12px]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ======================================
          BOTTOM DECORATIVE LINE
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          z-20 h-px
          bg-gradient-to-r
          from-transparent
          via-[#a36aff]/45
          to-transparent
        "
      />
    </section>
  );
}
