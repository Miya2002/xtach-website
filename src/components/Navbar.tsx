
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        w-full bg-transparent
      "
    >
      <div
        className="
          mx-auto flex h-[72px]
          w-full max-w-[1500px]
          items-center justify-between
          gap-5 px-5
          sm:h-[80px] sm:px-8
          lg:h-[90px] lg:px-12
          xl:px-16
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="XTACH Home"
          onClick={() => setMenuOpen(false)}
          className="
            relative z-20 block
            w-[165px] shrink-0
            sm:w-[195px]
            lg:w-[220px]
          "
        >
          <Image
            src="/images/xtach-navbar-logo1.png"
            alt="XTACH - Redefining The Matrix"
            width={300}
            height={110}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="
            hidden items-center gap-6
            lg:flex xl:gap-9
          "
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  active ? "page" : undefined
                }
                className={`
                  relative py-3
                  text-[14px] font-medium
                  transition-colors duration-200
                  ${
                    active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }
                `}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="xtach-active-nav"
                    className="
                      absolute bottom-1
                      left-0 right-0 h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#b65cff]
                      to-[#3dd9ff]
                    "
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }
                    }
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/contact"
          className="
            group hidden h-[44px]
            shrink-0 items-center
            gap-5 rounded-full
            border border-white/40
            bg-transparent px-6
            text-[13px] font-medium
            text-white
            transition-all duration-200
            hover:border-[#a96cff]
            hover:bg-white/10
            lg:inline-flex
          "
        >
          Get Started

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="xtach-mobile-menu"
          className="
            relative z-20 flex
            h-10 w-10 items-center
            justify-center rounded-lg
            border border-white/25
            bg-white/10 text-white
            backdrop-blur-sm
            lg:hidden
          "
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
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
                : { opacity: 0, y: -10 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -10 }
            }
            transition={{
              duration: reduceMotion
                ? 0
                : 0.22,
            }}
            className="
              absolute left-4 right-4
              top-[72px] z-40
              max-h-[calc(100dvh-85px)]
              overflow-y-auto
              rounded-2xl
              border border-white/15
              bg-[#080c25]/95 p-4
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              sm:left-8 sm:right-8
              sm:top-[80px]
              lg:hidden
            "
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActive(
                  link.href
                );

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`
                      relative flex
                      min-h-[46px]
                      items-center
                      border-b border-white/10
                      px-4 text-[14px]
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="xtach-mobile-active-nav"
                        className="
                          absolute bottom-2
                          left-0 top-2
                          w-[2px] rounded-full
                          bg-gradient-to-b
                          from-[#b65cff]
                          to-[#3dd9ff]
                        "
                        transition={{
                          duration: 0.2,
                        }}
                      />
                    )}

                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  mt-5 flex h-[44px]
                  items-center
                  justify-center gap-3
                  rounded-full
                  border border-white/40
                  bg-white/10
                  text-[13px] font-medium
                  text-white
                  transition-colors
                  hover:bg-white/15
                "
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
