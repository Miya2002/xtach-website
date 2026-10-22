
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const reduceMotion = useReducedMotion();

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
        void video.play().catch(() => {});
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    playVideo();

    video.addEventListener("loadeddata", playVideo);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", playVideo);

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
      window.removeEventListener("pageshow", playVideo);
    };
  }, [reduceMotion]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative isolate flex w-full
        min-h-[640px] flex-col overflow-hidden
        bg-[#030717]
        sm:min-h-[680px]
        lg:min-h-[680px]
        xl:min-h-[720px]
      "
    >
      {/* GALAXY VIDEO BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,#29115d_0%,#0b1640_35%,#030717_78%)]" />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          onCanPlay={() => setVideoError(false)}
          onError={() => setVideoError(true)}
          className="
            absolute inset-0 h-full w-full
            object-cover object-[68%_center]
            lg:object-center
          "
        >
          <source
            src="/videos/xtach-hero22222.mp4"
            type="video/mp4"
          />
        </video>

        {videoError && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,#29115d_0%,#0b1640_35%,#030717_78%)]" />
        )}
      </div>

      {/* DARK OVERLAYS FOR TEXT READABILITY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[#020512]/25"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[2]
          bg-gradient-to-r
          from-[#020512]/80 via-[#020512]/35 to-transparent
          lg:from-[#020512]/70 lg:via-[#020512]/20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[2]
          bg-gradient-to-b
          from-[#020512]/25 via-transparent to-[#020512]/30
        "
      />

      {/* SUBTLE AMBIENT GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40
          top-[20%] z-[3]
          h-[350px] w-[350px]
          rounded-full bg-[#7442e8]/10 blur-[100px]
        "
      />

      {/* HERO CONTENT - SPACED BELOW FIXED NAVBAR */}
   <div
  className="
    relative z-10 mx-auto flex w-full
    max-w-[1440px] flex-1 items-start
    px-5 pt-[145px] pb-16
    sm:px-8 sm:pt-[160px]
    md:px-10 md:pt-[165px]
    lg:px-12 lg:pt-[170px] lg:pb-20
    xl:px-16
  "
>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.1,
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
            transition={{ duration: 0.55 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-7 shrink-0 bg-gradient-to-r from-[#b875ff] to-[#48baff]" />

            <span
              className="
                text-[10px] font-semibold uppercase
                tracking-[0.2em] text-white/90
                sm:text-[11px] sm:tracking-[0.25em]
              "
            >
              Digital Innovation Company
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            id="hero-heading"
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="
              text-[clamp(2.5rem,5.5vw,4.5rem)]
              font-bold leading-[1.08]
              tracking-[-0.045em] text-white
              lg:text-[clamp(2.8rem,4vw,4.2rem)]
            "
          >
            We Turn
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#c063f6] via-[#aa7dfd] to-[#56d5ff]
                bg-clip-text text-transparent
              "
            >
              Bold Ideas
            </span>

            <br />
            Into Digital
            <br />
            Reality.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="
              mt-5 max-w-[480px]
              text-[14px] leading-[1.7] text-white/90
              sm:text-[15px]
            "
          >
            XTACH crafts powerful digital products, AI solutions
            and marketing strategies that help businesses grow,
            innovate and lead in the digital era.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="
              mt-7 flex flex-wrap items-center
              gap-4 sm:gap-6
            "
          >
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -2, scale: 1.02 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
            >
              <Link
                href="/services"
                className="
                  group inline-flex min-h-[46px]
                  items-center justify-center gap-5
                  rounded-full bg-white
                  px-6 py-3
                  text-[12px] font-semibold text-[#0a0d20]
                  shadow-[0_8px_30px_rgba(255,255,255,0.12)]
                  transition-colors hover:bg-[#f0eaff]
                  sm:text-[13px]
                "
              >
                Explore Our Services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.a
              href="#showreel"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.03 }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              className="
                group inline-flex min-h-[46px]
                items-center gap-3
                text-[12px] font-medium text-white/90
                transition-colors hover:text-white
                sm:text-[13px]
              "
            >
              <span
                className="
                  flex h-11 w-11 items-center
                  justify-center rounded-full
                  border border-white/60
                  bg-white/[0.04] backdrop-blur-sm
                  transition-all duration-300
                  group-hover:border-[#b67cff]
                  group-hover:bg-[#b67cff]/20
                "
              >
                <Play size={15} fill="currentColor" />
              </span>

              Watch Showreel
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0 z-10 h-px
          bg-gradient-to-r
          from-transparent via-[#9b66ff]/50 to-transparent
        "
      />
    </section>
  );
}
