
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

const CONTACT = {
  company: "XTACH",
  city: "iuwfjesb",
  addressLine1: "eikrjsvbwoikj",
  addressLine2: "oiwlrsjkfncwiskledfn",
  phone: "+1 (555) 123-94574895",
  email: "hello@xtach.com",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM",
  timezone: "(PST)",
  description:
    "We're based in the heart of iusedrhkjfn, working with clients across the globe.",
};

const ease = [0.22, 1, 0.36, 1] as const;

const mapRoads = [
  "M-30 52 L750 52",
  "M-30 140 L750 140",
  "M-30 240 L750 240",
  "M-30 340 L750 340",
  "M-30 430 L750 430",
  "M55 -30 L55 500",
  "M175 -30 L175 500",
  "M295 -30 L295 500",
  "M420 -30 L420 500",
  "M545 -30 L545 500",
  "M665 -30 L665 500",
  "M-50 400 L350 -50",
  "M120 510 L610 -50",
  "M350 510 L780 30",
  "M-30 210 L300 500",
  "M300 -40 L770 380",
];

const blocks = [
  { x: 60, y: 73, w: 78, h: 42 },
  { x: 191, y: 80, w: 66, h: 35 },
  { x: 323, y: 69, w: 71, h: 47 },
  { x: 465, y: 74, w: 59, h: 41 },
  { x: 570, y: 84, w: 68, h: 33 },
  { x: 65, y: 169, w: 72, h: 48 },
  { x: 195, y: 174, w: 67, h: 44 },
  { x: 325, y: 172, w: 63, h: 46 },
  { x: 456, y: 171, w: 68, h: 44 },
  { x: 578, y: 168, w: 62, h: 45 },
  { x: 66, y: 266, w: 74, h: 45 },
  { x: 194, y: 263, w: 64, h: 48 },
  { x: 324, y: 266, w: 70, h: 44 },
  { x: 452, y: 267, w: 71, h: 45 },
  { x: 576, y: 267, w: 65, h: 45 },
  { x: 64, y: 364, w: 76, h: 43 },
  { x: 192, y: 365, w: 67, h: 43 },
  { x: 322, y: 364, w: 72, h: 45 },
  { x: 452, y: 366, w: 73, h: 42 },
  { x: 573, y: 367, w: 67, h: 41 },
];

function FuturisticMap({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-[16px] border border-[#293258] bg-[#050b20] sm:h-[330px] lg:h-[335px]">
      {/* Deep map background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_45%,rgba(63,26,150,0.24),transparent_50%),linear-gradient(135deg,#07112c_0%,#04091c_55%,#080a26_100%)]" />

      {/* Detailed map */}
      <svg
        viewBox="0 0 720 460"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="xtach-map-grid"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M22 0H0V22"
              fill="none"
              stroke="#304378"
              strokeWidth="0.6"
              opacity="0.35"
            />
          </pattern>

          <linearGradient id="xtach-route" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <filter
            id="xtach-route-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="5" />
          </filter>

          <radialGradient id="xtach-pin-glow">
            <stop offset="0%" stopColor="#b026ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b026ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Fine city grid */}
        <rect
          width="720"
          height="460"
          fill="url(#xtach-map-grid)"
        />

        {/* City blocks */}
        {blocks.map((block, index) => (
          <rect
            key={index}
            x={block.x}
            y={block.y}
            width={block.w}
            height={block.h}
            rx="4"
            fill={index % 3 === 0 ? "#111e42" : "#0c1735"}
            stroke="#233967"
            strokeWidth="0.8"
            opacity="0.85"
          />
        ))}

        {/* Road network */}
        {mapRoads.map((road, index) => (
          <path
            key={index}
            d={road}
            fill="none"
            stroke="#39518a"
            strokeWidth={index % 4 === 0 ? 2.4 : 1.1}
            opacity={index % 3 === 0 ? 0.55 : 0.28}
          />
        ))}

        {/* Extra angled streets */}
        <g
          fill="none"
          stroke="#33467d"
          strokeWidth="1"
          opacity="0.4"
        >
          <path d="M-30 100L360 470" />
          <path d="M100 -30L600 460" />
          <path d="M390 -20L720 300" />
          <path d="M-20 330L340 -20" />
          <path d="M420 480L730 130" />
          <path d="M-30 270L260 -20" />
        </g>

        {/* Neon primary route glow */}
        <path
          d="M-30 310 C100 290 160 250 245 275 S385 345 470 225 S610 125 750 135"
          fill="none"
          stroke="#a855f7"
          strokeWidth="10"
          opacity="0.3"
          filter="url(#xtach-route-glow)"
        />

        {/* Primary neon route */}
        <motion.path
          d="M-30 310 C100 290 160 250 245 275 S385 345 470 225 S610 125 750 135"
          fill="none"
          stroke="url(#xtach-route)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="10 7"
          animate={
            reduceMotion
              ? undefined
              : { strokeDashoffset: [0, -68] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Secondary neon route */}
        <motion.path
          d="M80 490 C175 365 285 375 350 235 S480 85 660 -30"
          fill="none"
          stroke="#7953ff"
          strokeWidth="1.7"
          strokeDasharray="5 9"
          opacity="0.9"
          animate={
            reduceMotion
              ? undefined
              : { strokeDashoffset: [0, 56] }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* City label */}
        <text
          x="100"
          y="310"
          fill="#aeb9e8"
          fontSize="21"
          fontFamily="Arial, sans-serif"
          opacity="0.88"
        >
          ADDRESS eoriwjk
        </text>

        {/* Map pin lighting */}
        <circle
          cx="365"
          cy="216"
          r="95"
          fill="url(#xtach-pin-glow)"
          opacity="0.55"
        />

        {/* Expanding pulse */}
        <motion.circle
          cx="365"
          cy="216"
          r="22"
          fill="none"
          stroke="#b855ff"
          strokeWidth="2"
          animate={
            reduceMotion
              ? undefined
              : {
                  r: [22, 55, 85],
                  opacity: [0.85, 0.35, 0],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.circle
          cx="365"
          cy="216"
          r="22"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.2"
          animate={
            reduceMotion
              ? undefined
              : {
                  r: [22, 48, 75],
                  opacity: [0.65, 0.25, 0],
                }
          }
          transition={{
            duration: 3.2,
            delay: 1.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Location pin */}
        <g transform="translate(365 216)">
          <path
            d="M0 -30C-16 -30 -28 -18 -28 -3C-28 17 0 47 0 47S28 17 28 -3C28 -18 16 -30 0 -30Z"
            fill="#8b35ff"
            stroke="#f0d5ff"
            strokeWidth="3"
          />

          <circle
            cx="0"
            cy="-4"
            r="10"
            fill="#fff"
          />

          <circle
            cx="0"
            cy="-4"
            r="5"
            fill="#b45bff"
          />
        </g>
      </svg>

      {/* Floating XTACH location card */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 15, scale: 0.95 }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute left-[55%] top-[17%] z-10 rounded-lg bg-gradient-to-br from-purple-500/80 via-violet-500/40 to-cyan-400/80 p-[1px] shadow-[0_0_28px_rgba(121,67,255,0.25)] sm:left-[56%]"
      >
        <div className="flex items-start gap-2 rounded-[7px] bg-[#080d26]/95 px-3 py-2.5 backdrop-blur-xl">
          <Navigation
            size={15}
            className="mt-0.5 shrink-0 text-purple-300"
          />

          <div>
            <p className="text-[11px] font-bold tracking-wide text-white sm:text-[12px]">
              {CONTACT.company}
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[10px] text-slate-300 sm:text-[11px]">
              {CONTACT.city}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-[16px] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,5,17,0.45)_100%)]" />

      {/* Top border highlight */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </div>
  );
}

export default function ContactLocation() {
  const reduceMotion = useReducedMotion();

  const contactItems = [
    {
      Icon: MapPin,
      content: (
        <>
          {CONTACT.addressLine1}
          <br />
          {CONTACT.addressLine2}
        </>
      ),
    },
    {
      Icon: Phone,
      content: (
        <a
          href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
          className="transition-colors hover:text-cyan-300"
        >
          {CONTACT.phone}
        </a>
      ),
    },
    {
      Icon: Mail,
      content: (
        <a
          href={`mailto:${CONTACT.email}`}
          className="break-all transition-colors hover:text-cyan-300"
        >
          {CONTACT.email}
        </a>
      ),
    },
    {
      Icon: Clock3,
      content: (
        <>
          {CONTACT.hours}
          <br />
          {CONTACT.timezone}
        </>
      ),
    },
  ];

  return (
    <section
      id="our-location"
      className="relative isolate overflow-hidden bg-[#030615] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_42%,rgba(44,40,155,0.12),transparent_50%),radial-gradient(ellipse_at_5%_70%,rgba(86,22,143,0.1),transparent_45%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:gap-9 xl:gap-12">

          {/* LEFT: Location details */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="min-w-0"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[5px] w-[5px] rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94baff]">
                Our Location
              </span>
            </div>

            <h2 className="text-[clamp(1.85rem,3vw,2.6rem)] font-bold leading-tight tracking-[-0.045em] text-white">
              Find Us Here
            </h2>

            <p className="mt-2 max-w-[410px] text-[12px] leading-[1.75] text-[#b9c2da] sm:text-[13px]">
              {CONTACT.description}
            </p>

            {/* Contact information panel */}
            <div className="relative mt-5 max-w-[465px] overflow-hidden rounded-[13px] border border-[#453c87]/70 bg-[#0b0b27]/80 px-5 py-4 shadow-[0_0_35px_rgba(72,34,135,0.07)] sm:px-6 sm:py-5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/[0.05] via-transparent to-cyan-500/[0.025]" />

              <div className="relative space-y-4">
                {contactItems.map(({ Icon, content }, index) => (
                  <motion.div
                    key={index}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 12 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                      <Icon
                        size={20}
                        strokeWidth={2}
                        className="text-[#cb6cff] drop-shadow-[0_0_8px_rgba(184,76,255,0.5)] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="pt-0.5 text-[12px] leading-[1.55] text-[#d8ddf0] sm:text-[13px]">
                      {content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Optional link */}
            <a
              href={`#https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-cyan-300 transition-colors hover:text-white"
            >
              Get Directions
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* RIGHT: Animated map */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease,
            }}
            className="min-w-0"
          >
            <FuturisticMap reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
