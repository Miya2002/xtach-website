
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoError, setVideoError] = useState(false);

  const reduceMotion = useReducedMotion();

  // ========================================
  // RELIABLE VIDEO PLAYBACK
  // ========================================

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const playVideo = () => {
      if (video.paused) {
        video.play().catch((error) => {
          console.warn(
            "XTACH hero video autoplay:",
            error
          );
        });
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    const handlePageShow = () => {
      playVideo();
    };

    // Try immediately.
    playVideo();

    // Retry when enough video data is available.
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);

    // Resume when returning to the tab.
    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      video.removeEventListener(
        "loadeddata",
        playVideo
      );

      video.removeEventListener(
        "canplay",
        playVideo
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      window.removeEventListener(
        "pageshow",
        handlePageShow
      );
    };
  }, [reduceMotion]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative isolate flex w-full flex-col
        min-h-[100svh] overflow-hidden
        bg-[#030717]
        lg:h-[100svh] lg:min-h-[560px]
      "
    >
      {/* ========================================
          BACKGROUND VIDEO
      ======================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          z-0 overflow-hidden
        "
      >
        {/* Fallback background */}

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_75%_40%,#29115d_0%,#0b1640_35%,#030717_78%)]
          "
        />

        {/* Main background video */}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          onCanPlay={() => {
            setVideoError(false);
          }}
          onError={(event) => {
            setVideoError(true);

            console.error(
              "XTACH background video error:",
              event.currentTarget.error
            );
          }}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[68%_center]
            lg:object-center
          "
        >
          <source
            src="/videos/xtach-hero2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Optional error fallback */}

        {videoError && (
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_75%_40%,#29115d_0%,#0b1640_35%,#030717_78%)]
            "
          />
        )}
      </div>

      {/* ========================================
          MAIN DARK OVERLAY
          20% BACKGROUND DARKNESS
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[1]
          bg-[#020512]/25
        "
      />

      {/* ========================================
          EXTRA DARKNESS BEHIND LEFT TEXT
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-r
          from-[#020512]/75
          via-[#020512]/35
          to-transparent
          lg:from-[#020512]/65
          lg:via-[#020512]/25
          lg:to-transparent
        "
      />

      {/* ========================================
          TOP AND BOTTOM CINEMATIC SHADOW
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          bg-gradient-to-b
          from-[#020512]/25
          via-transparent
          to-[#020512]/30
        "
      />

      {/* ========================================
          SOFT PURPLE AMBIENT GLOW
      ======================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 top-[20%] z-[3]
          h-[350px] w-[350px]
          rounded-full
          bg-[#7442e8]/10
          blur-[100px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.45, 0.25],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <div
        className="
          relative z-10
          mx-auto flex w-full
          max-w-[1440px] flex-1
          items-center
          px-5 pt-28 pb-20
          sm:px-8 sm:pt-32
          md:px-10
          lg:px-12 lg:pt-24 lg:pb-16
          xl:px-16
        "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.15,
          }}
          className="
            w-full max-w-[540px]
            lg:max-w-[510px]
            xl:max-w-[570px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={reveal}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="mb-4 flex items-center gap-3"
          >
            <span
              className="
                h-px w-7 shrink-0
                bg-gradient-to-r
                from-[#b875ff]
                to-[#48baff]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold uppercase
                tracking-[0.23em]
                text-white/90
                sm:text-[11px]
                sm:tracking-[0.3em]
              "
            >
              Digital Innovation Company
            </span>
          </motion.div>

          {/* ========================================
              MAIN HEADING
          ======================================== */}

          <motion.h1
            id="hero-heading"
            variants={reveal}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              text-[clamp(2.5rem,5.5vw,4.5rem)]
              font-bold
              leading-[1.08]
              tracking-[-0.045em]
              text-white
              lg:text-[clamp(2.8rem,4vw,4.2rem)]
            "
          >
            We Turn
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#c063f6]
                via-[#aa7dfd]
                to-[#56d5ff]
                bg-clip-text
                text-transparent
              "
            >
              Bold Ideas
            </span>

            <br />

            Into Digital
            <br />
            Reality.
          </motion.h1>

          {/* ========================================
              DESCRIPTION
          ======================================== */}

          <motion.p
            variants={reveal}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="
              mt-5 max-w-[480px]
              text-[14px]
              leading-[1.7]
              text-white/90
              sm:text-[15px]
              lg:mt-5
              lg:text-[15px]
            "
          >
            XTACH crafts powerful digital products, AI
            solutions and marketing strategies that help
            businesses grow, innovate and lead in the
            digital era.
          </motion.p>

          {/* ========================================
              ACTION BUTTONS
          ======================================== */}

          <motion.div
            variants={reveal}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="
              mt-7 flex flex-wrap
              items-center gap-4
              sm:gap-6
            "
          >
            {/* PRIMARY BUTTON */}

            <motion.a
              href="#services"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.025,
                      boxShadow:
                        "0 12px 35px rgba(169,120,255,0.25)",
                    }
              }
              whileTap={{ scale: 0.97 }}
              className="
                group inline-flex
                min-h-[46px]
                items-center
                justify-center gap-5
                rounded-full
                bg-white
                px-6 py-3
                text-[12px]
                font-semibold
                text-[#0a0d20]
                shadow-[0_8px_30px_rgba(255,255,255,0.12)]
                transition-colors
                hover:bg-[#f0eaff]
                sm:text-[13px]
              "
            >
              Explore Our Services

              <span
                className="
                  text-lg leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </motion.a>

            {/* SHOWREEL BUTTON */}

            <motion.a
              href="#showreel"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.04 }
              }
              whileTap={{ scale: 0.97 }}
              className="
                group inline-flex
                min-h-[46px]
                items-center gap-3
                text-[12px]
                font-medium
                text-white/90
                transition-colors
                hover:text-white
                sm:text-[13px]
              "
            >
              <span
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/60
                  bg-white/[0.04]
                  backdrop-blur-sm
                  transition-all duration-300
                  group-hover:border-[#b67cff]
                  group-hover:bg-[#b67cff]/20
                  group-hover:shadow-[0_0_22px_rgba(175,100,255,0.35)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              Watch Showreel
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================
          SCROLL INDICATOR
      ======================================== */}

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.1,
          duration: 0.7,
        }}
        className="
          absolute bottom-5 left-5
          z-10 hidden items-center
          gap-3 text-white/65
          transition-colors
          hover:text-white
          sm:left-8
          md:flex
          lg:bottom-7
          lg:left-12
          xl:left-16
        "
        aria-label="Scroll down to learn about XTACH"
      >
        <span
          className="
            relative flex h-9 w-[20px]
            items-start justify-center
            rounded-full
            border border-white/65
            pt-[7px]
          "
        >
          <motion.span
            className="
              h-[6px] w-[3px]
              rounded-full bg-white
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 10, 0],
                    opacity: [1, 0.35, 1],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>

        <span
          className="
            text-[10px]
            font-semibold uppercase
            tracking-[0.14em]
          "
        >
          Scroll Down
        </span>
      </motion.a>

      {/* ========================================
          BOTTOM BORDER
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          z-10 h-px
          bg-gradient-to-r
          from-transparent
          via-[#9b66ff]/50
          to-transparent
        "
      />
    </section>
  );
}
