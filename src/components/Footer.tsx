
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Globe2,
  Heart,
  ExternalLink,
} from "lucide-react";

// ============================================
// NAVIGATION LINKS
// ============================================

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// ============================================
// SERVICES
// ============================================

const serviceLinks = [
  { label: "Website Development", href: "/services" },
  { label: "App Development", href: "/services" },
  { label: "AI & Automation", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "Brand Identity", href: "/services" },
  { label: "SaaS Development", href: "/services" },
];

// ============================================
// CONTACT DETAILS
// Add your actual company information here.
// Blank values are hidden automatically.
// ============================================

const contactInfo = {
  email: "",
  phone: "",
  address: "",
};

// ============================================
// SOCIAL MEDIA
// Add your actual profile URLs.
// Blank links are hidden automatically.
// ============================================

const socialLinks = [
  {
    label: "Instagram",
    href: "",
    short: "IG",
  },
  {
    label: "LinkedIn",
    href: "",
    short: "IN",
  },
  {
    label: "Facebook",
    href: "",
    short: "FB",
  },
  {
    label: "YouTube",
    href: "",
    short: "YT",
  },
];

// ============================================
// FOOTER COMPONENT
// ============================================

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#040615] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(110,45,210,0.13),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(0,175,255,0.08),transparent_40%)]" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-16 xl:px-20">

        {/* =====================================
            TOP CTA BANNER
        ===================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-purple-400/20 bg-[#10112a] px-6 py-10 sm:px-10 lg:mt-20 lg:px-14 lg:py-12"
        >
          {/* Banner glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_40%,rgba(110,60,230,0.3),transparent_55%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-[650px]">

              <div className="mb-4 flex items-center gap-2 text-purple-300">
                <Sparkles size={16} />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Let's Create Something Great
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
                Have a Vision?
                <br />

                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Make It Extraordinary.
                </span>
              </h2>

              <p className="mt-4 max-w-[550px] text-sm leading-7 text-slate-400 sm:text-base">
                From ambitious ideas to powerful digital
                experiences, let's build something that
                makes a real impact.
              </p>

            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-5 self-start rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(115,60,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(115,60,235,0.4)]"
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </motion.div>

        {/* =====================================
            MAIN FOOTER GRID
        ===================================== */}

        <div className="grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr] lg:gap-x-10 lg:py-20">

          {/* =====================================
              COLUMN 1 - COMPANY
          ===================================== */}

          <div>

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/xtach-navbar-logo1.png"
                alt="XTACH Digital Innovation Company"
                width={190}
                height={65}
                className="h-auto w-[175px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[310px] text-[14px] leading-7 text-slate-400">
              A digital innovation company transforming
              bold ideas into meaningful experiences
              through design, technology, and
              intelligent solutions.
            </p>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
              Redefining The Matrix
            </p>

            {/* Social Media */}

            {socialLinks.some((social) => social.href) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">

                {socialLinks
                  .filter((social) => social.href)
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                    >
                      <span className="text-xs font-bold tracking-wide">
                        {social.short}
                      </span>
                    </a>
                  ))}

              </div>
            )}

          </div>

          {/* =====================================
              COLUMN 2 - QUICK LINKS
          ===================================== */}

          <div>

            <h3 className="text-[15px] font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-purple-500 to-cyan-400" />

            <ul className="mt-7 space-y-4">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-slate-400 transition-colors hover:text-purple-300"
                  >
                    <ArrowRight
                      size={13}
                      className="text-purple-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />

                    <span className="transition-transform group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================
              COLUMN 3 - SERVICES
          ===================================== */}

          <div>

            <h3 className="text-[15px] font-bold text-white">
              Our Expertise
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-purple-500 to-cyan-400" />

            <ul className="mt-7 space-y-4">

              {serviceLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-slate-400 transition-colors hover:text-purple-300"
                  >
                    <ArrowRight
                      size={13}
                      className="text-purple-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />

                    <span className="transition-transform group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================
              COLUMN 4 - CONTACT
          ===================================== */}

          <div>

            <h3 className="text-[15px] font-bold text-white">
              Get in Touch
            </h3>

            <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-purple-500 to-cyan-400" />

            <p className="mt-7 text-[13px] leading-7 text-slate-400">
              Have a question or a project idea?
              We'd love to hear from you.
            </p>

            <div className="mt-6 space-y-5">

              {/* Email */}
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-purple-300"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10 text-purple-300">
                    <Mail size={17} />
                  </span>

                  <span className="min-w-0 break-all pt-2 text-[13px]">
                    {contactInfo.email}
                  </span>
                </a>
              )}

              {/* Phone */}
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-purple-300"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10 text-purple-300">
                    <Phone size={17} />
                  </span>

                  <span className="pt-2 text-[13px]">
                    {contactInfo.phone}
                  </span>
                </a>
              )}

              {/* Address */}
              {contactInfo.address && (
                <div className="flex items-start gap-3 text-slate-400">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10 text-purple-300">
                    <MapPin size={17} />
                  </span>

                  <span className="pt-2 text-[13px] leading-6">
                    {contactInfo.address}
                  </span>

                </div>
              )}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-purple-300 transition-colors hover:text-cyan-300"
              >
                Contact Our Team

                <ExternalLink
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* =====================================
            DIVIDER
        ===================================== */}

        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/25 to-transparent" />

        {/* =====================================
            BOTTOM FOOTER
        ===================================== */}

        <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-slate-500">

            <span>
  © 2026 XTACH. All Rights Reserved.
</span>

            <span className="hidden text-purple-400/50 sm:inline">
              |
            </span>

            <span className="inline-flex items-center gap-1">
              Crafted with

              <Heart
                size={12}
                className="fill-purple-400 text-purple-400"
              />

              for innovation.
            </span>

          </div>

          {/* Legal links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">

            <Link
              href="/privacy-policy"
              className="text-[12px] text-slate-500 transition-colors hover:text-purple-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-[12px] text-slate-500 transition-colors hover:text-purple-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cookie-policy"
              className="text-[12px] text-slate-500 transition-colors hover:text-purple-300"
            >
              Cookie Policy
            </Link>

          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-slate-500">
            <Globe2
              size={14}
              className="text-purple-400"
            />

            Digital Without Limits
          </div>

        </div>

      </div>
    </footer>
  );
}
