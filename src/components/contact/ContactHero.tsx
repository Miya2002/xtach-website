
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

const CONTACT = {
  email: "hello@xtach.com",
  phone: "",
  whatsapp: "",
  address: "",
  mapsUrl: "",
};

// Add your actual contact details above.
// WhatsApp format: country code + number, without + or spaces.

const ease = [0.22, 1, 0.36, 1] as const;

type CardType = "email" | "phone" | "office";

const cards = [
  {
    id: "email" as CardType,
    title: "Email Our Team",
    description:
      "For general inquiries, project details, or partnership opportunities.",
    Icon: Mail,
    color: "cyan",
  },
  {
    id: "phone" as CardType,
    title: "Call or WhatsApp",
    description:
      "Speak directly with our team for immediate assistance.",
    Icon: Phone,
    color: "purple",
  },
  {
    id: "office" as CardType,
    title: "Visit Our Office",
    description:
      "We'd love to meet you in person at our headquarters.",
    Icon: MapPin,
    color: "violet",
  },
];

function EnergyEffect({ color }: { color: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[13px]">
      {/* Atmospheric glow */}
      <div
        className={`absolute -bottom-16 -left-14 h-44 w-44 rounded-full blur-[35px] ${
          color === "cyan"
            ? "bg-fuchsia-600/35"
            : "bg-violet-600/40"
        }`}
      />

      <div className="absolute -bottom-12 left-10 h-24 w-32 rounded-full bg-fuchsia-500/15 blur-[28px]" />

      {/* Electrical rays */}
      <svg
        viewBox="0 0 400 210"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-75"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`electric-${color}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#e879f9" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>

          <filter id={`glow-${color}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 5 210 Q 40 160 35 130 T 85 70"
          fill="none"
          stroke={`url(#electric-${color})`}
          strokeWidth="1.1"
          filter={`url(#glow-${color})`}
        />

        <path
          d="M 18 210 Q 60 165 70 135 T 120 85"
          fill="none"
          stroke="#a855f7"
          strokeOpacity="0.35"
          strokeWidth="0.7"
        />

        <path
          d="M 0 180 Q 40 140 55 175 T 135 125"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.2"
          strokeWidth="0.7"
        />

        <path
          d="M 0 210 L 50 165 L 85 190 L 130 135"
          fill="none"
          stroke="#c084fc"
          strokeOpacity="0.22"
          strokeWidth="0.8"
        />
      </svg>

      {/* Animated particles */}
      {!reduceMotion &&
        Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-purple-300 shadow-[0_0_8px_#c084fc]"
            style={{
              left: `${8 + i * 12}%`,
              bottom: `${8 + (i % 3) * 13}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              y: [0, -13, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
    </div>
  );
}

function ContactCard({
  card,
  index,
}: {
  card: (typeof cards)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const isCyan = card.color === "cyan";

  const phoneAvailable = Boolean(CONTACT.phone);
  const whatsappAvailable = Boolean(CONTACT.whatsapp);
  const locationAvailable = Boolean(CONTACT.address && CONTACT.mapsUrl);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  }

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -5, transition: { duration: 0.3 } }
      }
      className="group relative min-w-0"
    >
      {/* Neon border */}
      <div className="relative h-full min-h-[210px] rounded-[14px] bg-gradient-to-br from-cyan-400/70 via-purple-500/60 to-violet-600/35 p-[1px] shadow-[0_0_24px_rgba(101,48,191,0.07)] transition-shadow duration-500 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] sm:min-h-[205px] lg:min-h-[205px]">

        <div className="relative h-full overflow-hidden rounded-[13px] bg-[#080b23]">
          <EnergyEffect color={card.color} />

          {/* Glass highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#13113b]/70 via-transparent to-[#07132e]/60" />

          {/* Vertical neon line */}
          <div className="pointer-events-none absolute left-0 top-5 h-14 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent shadow-[0_0_15px_#a855f7]" />

          {/* Main content: horizontal arrangement */}
          <div className="relative z-10 flex h-full min-h-[208px] items-start gap-4 px-4 py-7 sm:px-5 lg:gap-4 lg:px-4 xl:gap-5 xl:px-5">

            {/* Glowing icon */}
            <div className="relative -mt-3 shrink-0">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: isCyan
                          ? [
                              "0 0 14px rgba(6,182,212,.45),0 0 28px rgba(6,182,212,.18)",
                              "0 0 24px rgba(6,182,212,.85),0 0 45px rgba(6,182,212,.4)",
                              "0 0 14px rgba(6,182,212,.45),0 0 28px rgba(6,182,212,.18)",
                            ]
                          : [
                              "0 0 14px rgba(168,85,247,.45),0 0 28px rgba(168,85,247,.18)",
                              "0 0 24px rgba(168,85,247,.85),0 0 45px rgba(168,85,247,.4)",
                              "0 0 14px rgba(168,85,247,.45),0 0 28px rgba(168,85,247,.18)",
                            ],
                      }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className={`flex h-[62px] w-[62px] items-center justify-center rounded-full border ${
                  isCyan
                    ? "border-cyan-300 bg-cyan-500/15"
                    : "border-fuchsia-300 bg-purple-600/20"
                } sm:h-[68px] sm:w-[68px] lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px]`}
              >
                <card.Icon
                  size={29}
                  strokeWidth={2.2}
                  className={`${
                    isCyan ? "text-cyan-100" : "text-white"
                  } drop-shadow-[0_0_10px_rgba(192,132,252,0.85)]`}
                />
              </motion.div>

              <motion.div
                animate={
                  reduceMotion ? undefined : { rotate: 360 }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`pointer-events-none absolute -inset-[7px] rounded-full border border-dashed ${
                  isCyan
                    ? "border-cyan-400/25"
                    : "border-purple-400/25"
                }`}
              />
            </div>

            {/* Right-side content */}
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px] lg:text-[13px] xl:text-[15px]">
                {card.title}
              </h3>

              <p className="mt-2 min-h-[42px] text-[11px] leading-[1.65] text-slate-300/85 sm:text-[12px] lg:text-[11px] xl:text-[12px]">
                {card.description}
              </p>

              {/* Contact detail */}
              <div className="mt-4 flex min-h-[32px] items-center gap-2">
                {card.id === "email" && (
                  <>
                    <Mail size={14} className="shrink-0 text-purple-300" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="min-w-0 truncate text-[11px] font-semibold text-cyan-300 hover:text-white sm:text-[12px]"
                    >
                      {CONTACT.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      type="button"
                      aria-label="Copy email"
                      className="shrink-0 rounded p-1 text-slate-400 transition-colors hover:text-white"
                    >
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                    </button>
                  </>
                )}

                {card.id === "phone" && (
                  phoneAvailable ? (
                    <a
                      href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-2 text-[11px] text-slate-200 hover:text-white sm:text-[12px]"
                    >
                      <Phone size={14} className="text-purple-300" />
                      {CONTACT.phone}
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      Let's discuss your project
                    </span>
                  )
                )}

                {card.id === "office" && (
                  <div className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-200 sm:text-[12px]">
                    <MapPin
                      size={14}
                      className="mt-0.5 shrink-0 text-purple-300"
                    />
                    <span>
                      {CONTACT.address || "Office visits by appointment"}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-4">
                {card.id === "email" && (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-cyan-300 transition-colors hover:text-white sm:text-[12px]"
                  >
                    Send an Email
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                )}

                {card.id === "phone" && (
                  <a
                    href={
                      whatsappAvailable
                        ? `https://wa.me/${CONTACT.whatsapp}`
                        : `mailto:${CONTACT.email}?subject=Project%20Consultation`
                    }
                    target={whatsappAvailable ? "_blank" : undefined}
                    rel={whatsappAvailable ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-cyan-300 transition-colors hover:text-white sm:text-[12px]"
                  >
                    {whatsappAvailable && (
                      <MessageCircle size={14} className="text-green-400" />
                    )}
                    {whatsappAvailable
                      ? "Chat on WhatsApp"
                      : "Request a Consultation"}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                )}

                {card.id === "office" && (
                  <a
                    href={
                      locationAvailable
                        ? CONTACT.mapsUrl
                        : `mailto:${CONTACT.email}?subject=Office%20Visit`
                    }
                    target={locationAvailable ? "_blank" : undefined}
                    rel={locationAvailable ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-cyan-300 transition-colors hover:text-white sm:text-[12px]"
                  >
                    {locationAvailable
                      ? "Get Directions"
                      : "Arrange a Visit"}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ContactHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-channels"
      className="relative isolate overflow-hidden bg-[#030615] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Dark futuristic background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_85%,rgba(73,24,144,0.18),transparent_45%),radial-gradient(ellipse_at_90%_25%,rgba(22,31,95,0.15),transparent_40%)]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-600/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[90px]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-14">

        <div className="mx-auto mb-11 max-w-[760px] text-center sm:mb-12">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-purple-300"
          >
            Other Ways to Reach Us
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-[clamp(1.8rem,3vw,2.65rem)] font-bold tracking-[-0.045em] text-white"
          >
            Our Contact Channels
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-2.5 text-[12px] leading-relaxed text-slate-400 sm:text-[13px]"
          >
            Prefer a different way to connect? Here are more ways to get in
            touch with our team.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6">
          {cards.map((card, index) => (
            <ContactCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom section border */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}
