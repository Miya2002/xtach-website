
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
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
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#050817]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-12 xl:px-16"
      >
        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={() => handleNavigation("Home")}
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-50 flex shrink-0 items-center gap-3"
          aria-label="XTACH homepage"
        >
          {/* <Image
            src="/images/logo.png"
            alt="XTACH"
            width={48}
            height={48}
            priority
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          /> */}

          <span className="text-[18px] font-semibold tracking-[0.26em] text-white sm:text-[21px]">
            XTACH
          </span>
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-9">
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
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="desktop-active-link"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#b95cff] via-[#e17bff] to-[#4bbcff] shadow-[0_0_14px_rgba(188,92,255,0.9)]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#b95cff] transition-all duration-300 group-hover:w-full" />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <motion.a
          href="#contact"
          onClick={() => handleNavigation("Contact")}
          whileHover={{
            scale: 1.045,
            boxShadow: "0 0 28px rgba(169, 91, 255, 0.28)",
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative hidden items-center gap-4 overflow-hidden rounded-full border border-white/65 bg-white/[0.035] px-6 py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:border-[#c18aff] hover:bg-white/10 lg:inline-flex"
        >
          <span className="relative z-10">Get Started</span>

          <motion.span
            className="relative z-10 text-lg leading-none"
            whileHover={{ x: 4 }}
          >
            →
          </motion.span>
        </motion.a>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="xtach-mobile-menu"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-purple-400 lg:hidden"
        >
          <span className="relative block h-5 w-5">
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -6 }
              }
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
              transition={{ duration: 0.25 }}
            />

            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
              transition={{ duration: 0.15 }}
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 6 }
              }
              className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-white"
              transition={{ duration: 0.25 }}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-[76px] z-30 h-[calc(100dvh-76px)] bg-[#02040c]/75 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              id="xtach-mobile-menu"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
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
                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.label;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() =>
                        handleNavigation(link.label)
                      }
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
