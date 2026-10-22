
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
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

const cards = [
  {
    id: "email",
    title: "Email Our Team",
    description:
      "For general inquiries, project details, or partnership opportunities.",
    icon: Mail,
    accent: "cyan",
    action: "Send an Email",
  },
  {
    id: "phone",
    title: "Call or WhatsApp",
    description:
      "Speak directly with our team for immediate assistance.",
    icon: Phone,
    accent: "purple",
    action: "Request a Consultation",
  },
  {
    id: "office",
    title: "Visit Our Office",
    description:
      "We'd love to meet you in person at our headquarters.",
    icon: MapPin,
    accent: "purple",
    action: "Arrange a Visit",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function ContactCard({
  card,
  index,
  reduceMotion,
}: {
  card: (typeof cards)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = card.icon;
  const cyan = card.accent === "cyan";

  const detail =
    card.id === "email"
      ? CONTACT.email
      : card.id === "phone"
        ? CONTACT.phone || "Let's discuss your project"
        : CONTACT.address || "Office visits by appointment";

  const href =
    card.id === "email"
      ? `mailto:${CONTACT.email}`
      : card.id === "phone"
        ? CONTACT.whatsapp
          ? `https://wa.me/${CONTACT.whatsapp}`
          : CONTACT.phone
            ? `tel:${CONTACT.phone}`
            : `mailto:${CONTACT.email}?subject=Consultation%20Request`
        : CONTACT.mapsUrl ||
          `mailto:${CONTACT.email}?subject=Office%20Visit%20Request`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  }

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 35, scale: 0.96 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.14,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -7, transition: { duration: 0.3 } }
      }
      className="group relative min-w-0"
    >
      {/* ANIMATED NEON BORDER */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-purple-500/50 bg-[#080b22]/95 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]">

        {/* CARD GLOWS */}
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.3, 0.65, 0.3],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.6,
          }}
          className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-fuchsia-600/30 blur-[45px]"
        />

        <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[55px]" />

        {/* MOVING LIGHT BEAM */}
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-130%", "380%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
              delay: index,
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-purple-300/[0.07] to-transparent"
          />
        )}

        {/* DECORATIVE ENERGY LINES */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 220"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        >
          <path
            d="M0 220 Q45 155 36 126 T95 52"
            fill="none"
            stroke="#a855f7"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <path
            d="M0 195 Q36 158 60 180 T135 105"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="0.7"
            opacity="0.35"
          />
          <path
            d="M12 220 L55 170 L86 190 L145 120"
            fill="none"
            stroke="#e879f9"
            strokeWidth="0.7"
            opacity="0.45"
          />
        </svg>

        {/* FLOATING PARTICLES */}
        {!reduceMotion &&
          [0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="pointer-events-none absolute h-[3px] w-[3px] rounded-full bg-purple-300 shadow-[0_0_9px_#c084fc]"
              style={{
                left: `${15 + i * 18}%`,
                bottom: `${12 + (i % 2) * 18}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [8, -15, -25],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.7 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* CARD CONTENT */}
        <div className="relative z-10 flex min-h-[225px] items-start gap-4 px-5 py-8 sm:min-h-[215px] lg:min-h-[235px] lg:gap-3 lg:px-4 xl:min-h-[225px] xl:gap-5 xl:px-6">

          {/* ICON */}
          <div className="relative shrink-0">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      boxShadow: cyan
                        ? [
                            "0 0 12px rgba(34,211,238,0.25)",
                            "0 0 30px rgba(34,211,238,0.6)",
                            "0 0 12px rgba(34,211,238,0.25)",
                          ]
                        : [
                            "0 0 12px rgba(168,85,247,0.3)",
                            "0 0 30px rgba(168,85,247,0.65)",
                            "0 0 12px rgba(168,85,247,0.3)",
                          ],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              className={`flex h-[64px] w-[64px] items-center justify-center rounded-full border ${
                cyan
                  ? "border-cyan-400 bg-cyan-500/15"
                  : "border-purple-400 bg-purple-500/20"
              } lg:h-[58px] lg:w-[58px] xl:h-[70px] xl:w-[70px]`}
            >
              <Icon
                size={28}
                strokeWidth={2}
                className="text-white drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion ? undefined : { rotate: 360 }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`pointer-events-none absolute -inset-[7px] rounded-full border border-dashed ${
                cyan
                  ? "border-cyan-400/30"
                  : "border-purple-400/30"
              }`}
            />
          </div>

          {/* TEXT */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="text-[15px] font-semibold tracking-tight text-white lg:text-[13px] xl:text-[15px]">
              {card.title}
            </h3>

            <p className="mt-2 min-h-[45px] text-[12px] leading-[1.7] text-slate-300/85 lg:text-[11px] xl:text-[12px]">
              {card.description}
            </p>

            {/* CONTACT DETAIL */}
            <div className="mt-4 flex min-h-[30px] items-center gap-2">
              {card.id === "email" ? (
                <>
                  <Mail
                    size={14}
                    className="shrink-0 text-purple-300"
                  />

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="min-w-0 break-all text-[12px] font-semibold text-cyan-300 hover:text-white"
                  >
                    {detail}
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={
                      copied ? "Email copied" : "Copy email"
                    }
                    className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {copied ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </>
              ) : (
                <>
                  {card.id === "phone" && CONTACT.phone ? (
                    <Phone
                      size={14}
                      className="shrink-0 text-purple-300"
                    />
                  ) : card.id === "office" ? (
                    <MapPin
                      size={14}
                      className="shrink-0 text-purple-300"
                    />
                  ) : null}

                  <span className="text-[12px] leading-relaxed text-slate-300">
                    {detail}
                  </span>
                </>
              )}
            </div>

            {/* ACTION */}
            <a
              href={href}
              className="group/link mt-4 inline-flex w-fit items-center gap-2 text-[12px] font-semibold text-cyan-300 transition-colors hover:text-white"
            >
              {card.action}

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/link:translate-x-1.5"
              />
            </a>
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
      id="contact-hero"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#050719] text-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_80%,rgba(91,33,182,0.13),transparent_48%),radial-gradient(ellipse_at_90%_20%,rgba(109,40,217,0.12),transparent_50%)]" />

      {/* AMBIENT ANIMATION */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-35, 35, -35],
                y: [10, -25, 10],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-1/2 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px]"
      />

      {/* MAIN CONTAINER - FIXED NAVBAR SPACING */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-20 pt-[145px] sm:px-8 sm:pb-24 sm:pt-[150px] lg:px-12 lg:pb-24 lg:pt-[155px] xl:px-16">

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-[750px] text-center">
          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: -15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-[11px]"
          >
            Other Ways to Reach Us
          </motion.p>

          <motion.h1
            id="contact-heading"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease,
            }}
            className="mt-5 text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-tight tracking-[-0.045em]"
          >
            Our Contact{" "}
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Channels
            </span>
          </motion.h1>

          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.22,
              ease,
            }}
            className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[1.8] text-slate-300 sm:text-[14px]"
          >
            Prefer a different way to connect? Here are more
            ways to get in touch with our team.
          </motion.p>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => (
            <ContactCard
              key={card.id}
              card={card}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
