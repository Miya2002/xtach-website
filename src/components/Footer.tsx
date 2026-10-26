
"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

// UPDATE YOUR BUSINESS DETAILS HERE
const CONTACT = {
  email: "hello@xtach.com",
  phone: "",
  address: "",
};

// UPDATE YOUR SOCIAL MEDIA LINKS HERE
const SOCIAL = {
  instagram: "",
  linkedin: "",
  facebook: "",
  youtube: "",
};

const services = [
  "Brand Design and Development",
  
  "Application Development",
  "Digital Marketing",
  "Portals & CRM Systems",
  "AI Model Development",
  "AI Voice Overs",
  "AI Automation",
  "SaaS Development",
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Portfolio", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

type SocialIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function InstagramIcon({
  size = 18,
  ...props
}: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({
  size = 18,
  ...props
}: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.56 1.96 3.56 4.51v5.27Z" />
    </svg>
  );
}

function FacebookIcon({
  size = 18,
  ...props
}: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function YoutubeIcon({
  size = 18,
  ...props
}: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.5 6.2a2.94 2.94 0 0 0-2.07-2.08C19.6 3.63 12 3.63 12 3.63s-7.6 0-9.43.49A2.94 2.94 0 0 0 .5 6.2 30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.94 2.94 0 0 0 2.07 2.08c1.83.49 9.43.49 9.43.49s7.6 0 9.43-.49a2.94 2.94 0 0 0 2.07-2.08A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.6 15.54V8.46L15.84 12 9.6 15.54Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: SOCIAL.instagram,
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: SOCIAL.linkedin,
    Icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    href: SOCIAL.facebook,
    Icon: FacebookIcon,
  },
  {
    name: "YouTube",
    href: SOCIAL.youtube,
    Icon: YoutubeIcon,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

// MAIN FOOTER COMPONENT
export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[#030615] text-white">

      {/* GALAXY BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(74,32,148,0.18),transparent_55%),radial-gradient(ellipse_at_85%_30%,rgba(16,74,136,0.17),transparent_55%)]" />

        <motion.div
          className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 60, 0],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -60, 0],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* NEON TOP BORDER */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-cyan-400/40" />

      <div className="mx-auto max-w-[1500px] px-5 pb-5 pt-14 sm:px-9 lg:px-12 lg:pt-20 xl:px-16">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.3fr_0.85fr_1fr] xl:gap-x-14">

          {/* BRAND SECTION */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              href="/"
              aria-label="XTACH Home"
              className="relative block h-[65px] w-[235px] max-w-full"
            >
              <Image
                src="/images/xtach-navbar-logo11.png"
                alt="XTACH - Redefining The Matrix"
                fill
                sizes="235px"
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-[340px] text-[13px] leading-[1.9] text-slate-400">
              XTACH is a digital innovation company
              transforming ambitious ideas into meaningful
              digital experiences. We combine creativity,
              intelligent technology, and forward-thinking
              solutions to help brands grow in the digital era.
            </p>

            <h4 className="mb-4 mt-7 text-[13px] font-semibold text-white">
              Follow Us On
            </h4>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ name, href, Icon }) =>
                href ? (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4, scale: 1.08 }
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                ) : (
                  <span
                    key={name}
                    title={`${name} link coming soon`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/15 bg-purple-500/5 text-slate-500"
                  >
                    <Icon size={18} />
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* SERVICES SECTION */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <h3 className="mb-7 text-[17px] font-semibold">
              Our Services
            </h3>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="group inline-flex items-start gap-3 text-[12px] leading-[1.6] text-slate-400 transition-colors hover:text-cyan-300 sm:text-[13px]"
                  >
                    <ArrowRight
                      size={15}
                      className="mt-0.5 shrink-0 text-purple-400 transition-transform group-hover:translate-x-1"
                    />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COMPANY SECTION */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <h3 className="mb-7 text-[17px] font-semibold">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-3 text-[13px] text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-purple-400 transition-transform group-hover:translate-x-1"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT SECTION */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <h3 className="mb-7 text-[17px] font-semibold">
              Get in Touch
            </h3>

            <p className="mb-6 text-[12px] leading-[1.8] text-slate-400">
              Have a project in mind? Connect with our team
              and let's build something extraordinary.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-cyan-400">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[12px] font-semibold">
                    Email Address
                  </p>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all text-[12px] text-slate-400 hover:text-cyan-300"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-cyan-400">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="mb-1 text-[12px] font-semibold">
                    Phone / WhatsApp
                  </p>

                  {CONTACT.phone ? (
                    <a
                      href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                      className="text-[12px] text-slate-400 hover:text-cyan-300"
                    >
                      {CONTACT.phone}
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-[12px] text-slate-400 hover:text-cyan-300"
                    >
                      Request a callback
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-cyan-400">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="mb-1 text-[12px] font-semibold">
                    Office Location
                  </p>

                  <p className="text-[12px] leading-[1.7] text-slate-400">
                    {CONTACT.address || "Visits by appointment"}
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-7 inline-block"
              whileHover={
                reduceMotion ? undefined : { y: -3 }
              }
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-3 text-[12px] font-semibold transition-colors hover:border-cyan-400/60 hover:bg-purple-500/20"
              >
                Start a Project
                <ArrowUpRight
                  size={15}
                  className="text-cyan-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-purple-400/35 to-transparent" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-slate-500">
            © 2026 XTACH. All Rights Reserved.  
            <span className="text-[11px] text-slate-500">
              Designed by :  
               <Link
              href="https://www.tasmiyaportfolio.com/"
              className="text-[11px] text-slate-400 hover:text-cyan-300"
            >
               TA
            </Link>
            </span>  
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="/Privacy"
              className="text-[11px] text-slate-400 hover:text-cyan-300"
            >
              Privacy Policy
            </Link>
             <Link
              href="/privacy"
              className="text-[11px] text-slate-400 hover:text-cyan-300"
            >
              Refund Policy
            </Link>
             <Link
              href="/Condition"
              className="text-[11px] text-slate-400 hover:text-cyan-300"
            >
              Terms & Condition
            </Link>

            
          </div>
        </div>

       
      </div>
    </footer>
  );
}
