
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => ({
          name: link.name,
          element: document.getElementById(link.href.slice(1)),
        }))
        .filter(
          (
            item
          ): item is {
            name: string;
            element: HTMLElement;
          } => item.element !== null
        );

      let current = "Home";

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= 160) {
          current = section.name;
        }
      }

      setActiveLink(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = (name?: string) => {
    setMenuOpen(false);
    if (name) setActiveLink(name);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full border-b transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-white/10 bg-[#050719]/95 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-white/10 bg-[#050719]/90 backdrop-blur-xl"
      }`}
    >
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="relative mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:h-[82px] sm:px-8 lg:h-[100px] lg:px-14 xl:px-20">
        {/* LOGO */}
        <motion.a
          href="#home"
          aria-label="XTACH - Home"
          onClick={() => closeMenu("Home")}
          whileHover={reduceMotion ? undefined : { scale: 1.035 }}
          transition={{ duration: 0.3 }}
          className="group relative z-10 block w-[160px] shrink-0 sm:w-[195px] lg:w-[225px]"
        >
          <div className="relative">
            <Image
              src="/images/xtach-navbar-logo1.png"
              alt="XTACH - Redefining The Matrix"
              width={300}
              height={110}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.12)] transition-all duration-500 group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.5)]"
            />

            {/* Animated underline */}
            <div className="relative mt-1 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400"
                animate={
                  reduceMotion
                    ? undefined
                    : { x: ["0%", "200%", "0%"] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-3 text-[14px] font-medium transition-colors duration-300 xl:text-[15px] ${
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <motion.a
          href="#contact"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          className="group relative hidden h-[48px] items-center justify-center gap-5 overflow-hidden rounded-full border border-white/35 bg-white/[0.04] px-7 text-[13px] font-medium text-white transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/10 lg:inline-flex"
        >
          <span className="relative z-10">Get Started</span>
          <ArrowRight
            size={17}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="xtach-mobile-menu"
          className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/15 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="xtach-mobile-menu"
            aria-label="Mobile navigation"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -10, scale: 0.98 }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-3 right-3 top-full z-40 mt-2 max-h-[calc(100dvh-95px)] overflow-x-hidden overflow-y-auto rounded-[20px] border border-purple-400/20 bg-[#080a20]/98 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:left-6 sm:right-6 sm:p-5 lg:hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(20,12,47,0.98), rgba(5,9,28,0.99))",
            }}
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/15 blur-[70px]"
            />

            <div className="relative">
              {/* Menu heading */}
              <div className="mb-3 flex items-center gap-2 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-purple-300/85">
                  Explore XTACH
                </p>
              </div>

              {/* Navigation links - NO ARROWS */}
              <div className="border-t border-white/10">
                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.name;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => closeMenu(link.name)}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, x: -10 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: reduceMotion ? 0 : index * 0.035,
                      }}
                      className={`relative flex min-h-[48px] w-full items-center border-b border-white/10 px-3 py-2 text-[15px] font-medium transition-all duration-300 ${
                        isActive
                          ? "text-purple-300"
                          : "text-white/75 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />
                      )}

                      {link.name}
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => closeMenu("Contact")}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="group mt-5 flex h-[46px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#913cf1] via-[#a34ef5] to-[#4976fa] text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.25)] transition-shadow hover:shadow-[0_10px_35px_rgba(124,58,237,0.45)]"
              >
                Get Started
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Bottom tagline */}
              <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.17em] text-white/35">
                XTACH · Digital Innovation
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
