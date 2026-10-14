
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (label: string) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#050817]/90 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "border-b border-white/[0.06] bg-[#050817]/25 backdrop-blur-sm"
      }`}
    >
      {/* Subtle navbar gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="absolute -top-20 left-[8%] h-32 w-52 rounded-full bg-purple-600/[0.08] blur-3xl" />
      </div>

      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-7 lg:h-[88px] lg:px-10 xl:px-14"
      >
        {/* ================= BRAND LOGO ================= */}
        <motion.a
          href="#home"
          onClick={() => handleNavigation("Home")}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
          aria-label="XTACH homepage"
          className="group relative z-50 flex min-w-0 shrink-0 items-center"
        >
          {/* Hover glow behind logo */}
          <span className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-500/0 to-cyan-400/0 blur-xl transition-all duration-500 group-hover:from-purple-600/20 group-hover:via-fuchsia-500/15 group-hover:to-cyan-400/15" />

          <span className="relative flex flex-col items-start">
            <span className="relative block h-[38px] w-[152px] sm:h-[44px] sm:w-[177px] xl:h-[48px] xl:w-[194px]">
              <Image
                src="/images/xtach-navbar-logo.png"
                alt="XTACH — Your Vision, Our Technology"
                fill
                priority
                sizes="(max-width: 640px) 152px, (max-width: 1280px) 177px, 194px"
                className="object-contain object-left drop-shadow-[0_0_9px_rgba(172,105,255,0.20)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(179,102,255,0.65)]"
              />
            </span>

            {/* Decorative animated line */}
            <span className="mt-1 flex h-[2px] w-full items-center overflow-hidden rounded-full bg-white/[0.07]">
              <motion.span
                className="h-full w-[55%] rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(183,100,255,0.75)]"
                animate={{
                  x: ["-100%", "190%", "-100%"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </span>
          </span>
        </motion.a>

        {/* ================= DESKTOP NAV ================= */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleNavigation(link.label)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`group relative whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-300 xl:text-[14px] ${
                  isActive
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}

                {isActive ? (
                  <motion.span
                    layoutId="xtach-active-navigation"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_14px_rgba(188,92,255,0.9)]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* ================= DESKTOP CTA ================= */}
        <motion.a
          href="#contact"
          onClick={() => handleNavigation("Contact")}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 28px rgba(169,91,255,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative hidden shrink-0 items-center gap-4 overflow-hidden rounded-full border border-white/40 bg-white/[0.04] px-5 py-3 text-[13px] font-medium text-white transition-colors duration-300 hover:border-purple-400/70 hover:bg-white/10 lg:inline-flex xl:px-6"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative z-10">Get Started</span>

          <span className="relative z-10 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </motion.a>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="xtach-mobile-menu"
          className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] text-white backdrop-blur-md transition-colors hover:border-purple-400/70 lg:hidden"
        >
          <span className="relative block h-5 w-5">
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -6 }
              }
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
            />

            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 6 }
              }
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
            />
          </span>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-x-0 top-[76px] z-30 h-[calc(100dvh-76px)] bg-[#02040c]/75 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              id="xtach-mobile-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="absolute inset-x-3 top-[80px] z-40 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-[24px] border border-white/15 bg-[#080b21]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:inset-x-8 lg:hidden"
            >
              <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-purple-600/20 blur-[65px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-cyan-500/15 blur-[65px]" />

              <div className="relative flex flex-col">
                <div className="mb-3 border-b border-white/10 px-3 pb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                    Explore XTACH
                  </p>
                </div>

                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.label;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavigation(link.label)}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.055,
                        duration: 0.3,
                      }}
                      className={`flex items-center justify-between border-b border-white/10 px-3 py-4 text-[16px] font-medium transition-colors ${
                        isActive
                          ? "text-[#d4a4ff]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>

                      <span
                        className={
                          isActive
                            ? "text-purple-400"
                            : "text-white/30"
                        }
                      >
                        ↗
                      </span>
                    </motion.a>
                  );
                })}

                <motion.a
                  href="#contact"
                  onClick={() => handleNavigation("Contact")}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8d43e9] via-[#a855f7] to-[#5475ff] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)]"
                >
                  Get Started <span>→</span>
                </motion.a>

                <p className="mt-5 text-center text-[10px] uppercase tracking-[0.26em] text-white/35">
                  XTACH · Digital Innovation
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
