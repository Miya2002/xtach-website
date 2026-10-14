
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <footer className="w-full bg-[#030615] text-white">

      {/* VIDEO SECTION - SLIGHTLY INCREASED HEIGHT */}
      <section
        aria-labelledby="footer-cta-title"
        className="relative isolate flex min-h-[480px] flex-col overflow-hidden border-t border-purple-400/20 sm:min-h-[520px] lg:min-h-[610px]"
      >
        {/* BACKGROUND VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        >
          <source
            src="/videos/xtach-footer-new.mp4"
            type="video/mp4"
          />
        </video>

        {/* LIGHT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#030615]/65 via-[#030615]/5 to-[#030615]/65" />

        {/* HEADING */}
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-7 sm:px-10 sm:pt-8 lg:px-16 lg:pt-9 xl:px-20">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[650px]"
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="h-px w-7 bg-cyan-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200 sm:text-[11px]">
                Let&apos;s Build The Future
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_9px_#22d3ee]" />
            </div>

            <h2
              id="footer-cta-title"
              className="text-[28px] font-bold leading-[1.13] tracking-[-0.045em] sm:text-[35px] lg:text-[40px]"
            >
              Have a Vision?{" "}
              <span className="bg-gradient-to-r from-[#e2b6ff] via-[#b48cff] to-[#65d7ff] bg-clip-text text-transparent">
                Let&apos;s Make It Extraordinary.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* SPACE RESERVED FOR HANDS AND SPARK */}
        <div className="min-h-[145px] flex-1" />

        {/* CENTERED BUTTONS */}
        <div className="relative z-10 mx-auto flex w-full flex-wrap items-center justify-center gap-3 px-5 pb-6 sm:pb-7 lg:pb-8">
          <motion.a
            href="#contact"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2 }
            }
            whileTap={
              reduceMotion
                ? undefined
                : { scale: 0.97 }
            }
            className="group inline-flex h-[42px] min-w-[190px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#913cf0] to-[#497cf5] px-5 text-[12px] font-semibold shadow-[0_7px_22px_rgba(130,60,245,0.3)] transition-shadow hover:shadow-[0_9px_26px_rgba(130,60,245,0.5)]"
          >
           
            Start Your Project

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2 }
            }
            whileTap={
              reduceMotion
                ? undefined
                : { scale: 0.97 }
            }
            className="group inline-flex h-[42px] min-w-[190px] items-center justify-center gap-4 rounded-full border border-white/40 bg-[#090a20]/55 px-5 text-[12px] font-medium backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            Explore Our Services

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
      </section>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10 bg-[#030615]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-5 px-5 py-5 sm:px-10 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1.5fr_1fr] lg:px-16 xl:px-20">

          {/* SAME LOGO AS NAVBAR */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              aria-label="XTACH Home"
              className="relative block h-[54px] w-[225px] max-w-full"
            >
              <Image
                src="/images/xtach-navbar-logo1.png"
                alt="XTACH - Redefining The Matrix"
                fill
                sizes="225px"
                className="object-contain object-left"
              />
            </a>

           
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[12px] text-white/60 transition-colors hover:text-purple-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* TAGLINE */}
          <p className="text-center text-[11px] tracking-[0.04em] text-white/50 md:text-right">
            Redefining The Matrix
          </p>
        </div>
      </div>
    </footer>
  );
}
