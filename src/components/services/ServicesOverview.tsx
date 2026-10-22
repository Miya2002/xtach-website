
"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Smartphone,
  ChartNoAxesCombined,
  Database,
  BrainCircuit,
  Mic2,
  Workflow,
  Cloud,
  Sparkles,
  Layers3,
  Check,
  Zap,
  Globe2,
  type LucideIcon,
} from "lucide-react";

type VisualType =
  | "brand"
  | "app"
  | "marketing"
  | "crm"
  | "ai"
  | "voice"
  | "automation"
  | "saas";

type Service = {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  visual: VisualType;
  accent: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Brand Design and Development",
    description:
      "Distinctive brand identities that capture attention and create lasting impressions.",
    features: [
      "Visual Identity",
      "Brand Strategy",
      "Creative Guidelines",
    ],
    icon: Palette,
    visual: "brand",
    accent: "168,85,247",
  },
  {
    number: "02",
    title: "Application Development",
    description:
      "Powerful mobile and web applications built around real user experiences.",
    features: [
      "Mobile Applications",
      "Web Applications",
      "Cross-Platform",
    ],
    icon: Smartphone,
    visual: "app",
    accent: "99,102,241",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Creative, data-driven strategies that connect brands with the right audience.",
    features: [
      "Social Media",
      "SEO & Advertising",
      "Content Strategy",
    ],
    icon: ChartNoAxesCombined,
    visual: "marketing",
    accent: "217,70,239",
  },
  {
    number: "04",
    title: "Portals & CRM Systems",
    description:
      "Smart business platforms that simplify operations and customer management.",
    features: [
      "Custom CRM",
      "Business Portals",
      "Reporting Dashboards",
    ],
    icon: Database,
    visual: "crm",
    accent: "99,102,241",
  },
  {
    number: "05",
    title: "AI Model Development",
    description:
      "Intelligent AI solutions designed to solve complex business challenges.",
    features: [
      "Custom AI Models",
      "Machine Learning",
      "AI Integration",
    ],
    icon: BrainCircuit,
    visual: "ai",
    accent: "34,211,238",
  },
  {
    number: "06",
    title: "AI Voice Overs",
    description:
      "Expressive, natural-sounding AI voices for content and digital experiences.",
    features: [
      "Voice Generation",
      "Multilingual Audio",
      "Content Production",
    ],
    icon: Mic2,
    visual: "voice",
    accent: "217,70,239",
  },
  {
    number: "07",
    title: "AI Automation",
    description:
      "Connected intelligent workflows that eliminate repetitive tasks.",
    features: [
      "Workflow Automation",
      "AI Agents",
      "System Integrations",
    ],
    icon: Workflow,
    visual: "automation",
    accent: "168,85,247",
  },
  {
    number: "08",
    title: "SaaS Development",
    description:
      "Scalable cloud software platforms built for businesses ready to grow.",
    features: [
      "Cloud Applications",
      "SaaS Platforms",
      "API Integrations",
    ],
    icon: Cloud,
    visual: "saas",
    accent: "34,211,238",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------
   ANIMATED SERVICE VISUALS
------------------------------------ */

function BrandVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative h-28 w-44">
        <div className="absolute left-2 top-2 flex h-24 w-28 -rotate-12 flex-col justify-between rounded-xl border border-purple-300/30 bg-gradient-to-br from-purple-600/70 to-[#171536] p-3 shadow-xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-[18deg]">
          <Layers3 size={22} className="text-white" />
          <div className="space-y-1">
            <div className="h-1.5 w-12 rounded bg-white/70" />
            <div className="h-1 w-16 rounded bg-white/25" />
          </div>
        </div>

        <div className="absolute bottom-0 right-2 flex h-24 w-28 rotate-12 flex-col justify-between rounded-xl border border-cyan-300/30 bg-gradient-to-br from-[#19355a] to-[#11132c] p-3 shadow-xl transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:rotate-[18deg]">
          <Palette size={22} className="text-cyan-300" />
          <div className="flex gap-1.5">
            {["#c084fc", "#e879f9", "#22d3ee"].map(
              (color) => (
                <span
                  key={color}
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppVisual() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-24 w-24 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="relative -ml-2 first:ml-0 h-[115px] w-[67px] overflow-hidden rounded-[13px] border-[3px] border-[#59517f] bg-[#0b1430] shadow-xl transition-transform duration-700 group-hover:-translate-y-2"
            style={{
              transform: `rotate(${(i - 1) * 7}deg)`,
              zIndex: i === 1 ? 3 : 2,
              transitionDelay: `${i * 70}ms`,
            }}
          >
            <div className="mx-auto mt-1 h-1 w-6 rounded bg-white/20" />
            <div className="mx-2 mt-2 h-11 rounded-md bg-gradient-to-br from-purple-500 to-cyan-500/70" />
            <div className="mx-2 mt-2 h-1.5 w-8 rounded bg-white/60" />
            <div className="mx-2 mt-1.5 h-1 w-10 rounded bg-white/20" />
            <div className="mx-2 mt-2 flex gap-1">
              <div className="h-4 flex-1 rounded bg-purple-500/25" />
              <div className="h-4 flex-1 rounded bg-cyan-500/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketingVisual({
  reduced,
}: {
  reduced: boolean | null;
}) {
  const bars = [25, 44, 34, 60, 50, 72, 65, 94];

  return (
    <div className="flex h-full items-center justify-center p-3">
      <div className="w-full max-w-[230px] rounded-xl border border-fuchsia-400/20 bg-[#10142e] p-3 shadow-xl transition-transform duration-700 group-hover:-translate-y-2">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] text-slate-300">
            Growth Analytics
          </span>
          <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[8px] text-cyan-300">
            ↗ Growth
          </span>
        </div>

        <div className="flex h-[76px] items-end gap-1.5 border-b border-white/10 pb-2">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-700 via-fuchsia-500 to-cyan-400"
              initial={
                reduced
                  ? false
                  : { height: "4%" }
              }
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: i * 0.07,
                ease,
              }}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between">
          <div className="h-1 w-16 rounded bg-white/20" />
          <div className="h-1 w-10 rounded bg-cyan-400/40" />
        </div>
      </div>
    </div>
  );
}

function CRMVisual() {
  return (
    <div className="flex h-full items-center justify-center p-3">
      <div className="w-full max-w-[230px] overflow-hidden rounded-xl border border-indigo-400/25 bg-[#101631] shadow-xl transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
          <span className="text-[9px] text-indigo-200">
            Business Dashboard
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>

        <div className="grid grid-cols-3 gap-1.5 p-2.5">
          {["Clients", "Projects", "Reports"].map(
            (name) => (
              <div
                key={name}
                className="rounded border border-white/5 bg-white/[0.04] p-1.5"
              >
                <p className="text-[7px] text-slate-400">
                  {name}
                </p>
                <div className="mt-2 h-1.5 w-7 rounded bg-gradient-to-r from-indigo-400 to-cyan-400" />
              </div>
            )
          )}
        </div>

        <div className="space-y-1 px-2.5 pb-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded bg-white/[0.04] px-2 py-1.5 transition-colors duration-500 group-hover:bg-white/[0.07]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-400/30" />
              <span className="h-1 flex-1 rounded bg-white/15" />
              <Check size={10} className="text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIVisual({
  reduced,
}: {
  reduced: boolean | null;
}) {
  const nodes = [
    [50, 50],
    [17, 25],
    [80, 20],
    [15, 72],
    [84, 75],
    [50, 10],
    [50, 90],
    [10, 50],
    [92, 48],
  ];

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-28 w-28 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative h-[140px] w-[220px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {nodes.slice(1).map(([x, y], i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={i % 2 ? "#a855f7" : "#22d3ee"}
              strokeWidth=".45"
              strokeOpacity=".65"
              strokeDasharray="2 2"
              animate={
                reduced
                  ? undefined
                  : { strokeDashoffset: [0, -16] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {nodes.map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={i === 0 ? 4.5 : 2}
              fill={i % 2 ? "#a855f7" : "#22d3ee"}
              animate={
                reduced
                  ? undefined
                  : { opacity: [0.4, 1, 0.4] }
              }
              transition={{
                duration: 2 + i * 0.15,
                repeat: Infinity,
              }}
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-[#10213b] shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <BrainCircuit
              size={29}
              className="text-cyan-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceVisual({
  reduced,
}: {
  reduced: boolean | null;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex h-[82px] items-center justify-center gap-[3px]">
        {Array.from({ length: 27 }, (_, i) => {
          const height =
            16 +
            Math.abs(
              Math.sin(i * 0.58) *
                Math.cos(i * 0.2)
            ) *
              75;

          return (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-purple-700 via-fuchsia-500 to-cyan-300"
              style={{ height: `${height}%` }}
              animate={
                reduced
                  ? undefined
                  : {
                      scaleY: [0.55, 1, 0.55],
                    }
              }
              transition={{
                duration: 1.1 + (i % 5) * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="mt-3 flex w-[185px] items-center justify-between rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-2">
        <span className="flex items-center gap-2 text-[9px] text-purple-200">
          <Mic2 size={12} />
          AI Voice Engine
        </span>

        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
      </div>
    </div>
  );
}

function AutomationVisual({
  reduced,
}: {
  reduced: boolean | null;
}) {
  const steps = [
    { icon: Zap, label: "Trigger" },
    { icon: BrainCircuit, label: "AI" },
    { icon: Check, label: "Action" },
  ];

  return (
    <div className="relative flex h-full items-center justify-center px-3">
      <motion.div
        className="absolute left-[16%] right-[16%] h-px bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500"
        animate={
          reduced
            ? undefined
            : { opacity: [0.3, 1, 0.3] }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 flex w-full max-w-[225px] justify-between gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.label}
              className="flex h-[77px] min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-[#141a39] shadow-xl"
              animate={
                reduced
                  ? undefined
                  : { y: [0, -5, 0] }
              }
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon
                size={20}
                className="text-cyan-300"
              />
              <span className="text-[9px] text-slate-300">
                {step.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SaaSVisual({
  reduced,
}: {
  reduced: boolean | null;
}) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div
        className="absolute h-[130px] w-[130px] rounded-full border border-dashed border-cyan-400/30"
        animate={
          reduced
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute h-[105px] w-[105px] rounded-full border border-purple-400/25" />

      <motion.div
        className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-cyan-400/35 bg-[#10213c] shadow-[0_0_35px_rgba(34,211,238,0.2)]"
        animate={
          reduced
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cloud size={36} className="text-cyan-300" />
      </motion.div>

      <div className="absolute left-[19%] top-[15%] rounded-lg border border-purple-400/25 bg-[#15152f] p-2">
        <Database
          size={14}
          className="text-purple-300"
        />
      </div>

      <div className="absolute bottom-[15%] right-[19%] rounded-lg border border-cyan-400/25 bg-[#101b31] p-2">
        <Globe2
          size={14}
          className="text-cyan-300"
        />
      </div>
    </div>
  );
}

function ServiceVisual({
  type,
  reduced,
}: {
  type: VisualType;
  reduced: boolean | null;
}) {
  switch (type) {
    case "brand":
      return <BrandVisual />;
    case "app":
      return <AppVisual />;
    case "marketing":
      return <MarketingVisual reduced={reduced} />;
    case "crm":
      return <CRMVisual />;
    case "ai":
      return <AIVisual reduced={reduced} />;
    case "voice":
      return <VoiceVisual reduced={reduced} />;
    case "automation":
      return <AutomationVisual reduced={reduced} />;
    case "saas":
      return <SaaSVisual reduced={reduced} />;
  }
}

/* ------------------------------------
   INTERACTIVE SERVICE CARD
------------------------------------ */

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const reduced = useReducedMotion();
  const Icon = service.icon;

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const smoothX = useSpring(mouseX, {
    stiffness: 160,
    damping: 28,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 160,
    damping: 28,
  });

  const cursorGlow = useMotionTemplate`
    radial-gradient(
      230px circle at ${smoothX}px ${smoothY}px,
      rgba(${service.accent},0.18),
      transparent 75%
    )
  `;

  function handleMouseMove(
    event: MouseEvent<HTMLElement>
  ) {
    if (reduced) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  return (
    <motion.article
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 42,
              scale: 0.96,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        delay: reduced ? 0 : (index % 4) * 0.11,
        ease,
      }}
      whileHover={
        reduced
          ? undefined
          : {
              y: -7,
              transition: { duration: 0.3 },
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#0d1128] transition-[border-color,box-shadow] duration-500 hover:border-purple-400/50 hover:shadow-[0_22px_65px_rgba(95,45,180,0.19)]"
    >
      {/* CARD BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 85% 85%,rgba(${service.accent},0.11),transparent 65%),linear-gradient(145deg,#10132d,#090e20)`,
        }}
      />

      {/* CURSOR FOLLOWING LIGHT */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
        style={{ background: cursorGlow }}
      />

      {/* TOP LIGHT */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg,transparent,rgba(${service.accent},0.8),transparent)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 xl:p-5 2xl:p-6">
        {/* ICON AND NUMBER */}
        <div className="mb-5 flex items-center justify-between">
          <motion.div
            whileHover={
              reduced
                ? undefined
                : { rotate: -8, scale: 1.12 }
            }
            transition={{
              type: "spring",
              stiffness: 280,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-purple-400/30 bg-gradient-to-br from-purple-500/25 to-cyan-500/5 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.07)]"
          >
            <Icon size={22} strokeWidth={1.8} />
          </motion.div>

          <span className="text-[13px] font-semibold tracking-[0.12em] text-purple-300/55">
            {service.number}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="min-h-[48px] text-[17px] font-bold leading-[1.35] tracking-[-0.025em] text-white 2xl:text-[18px]">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 min-h-[66px] text-[12px] leading-[1.7] text-slate-400">
          {service.description}
        </p>

        {/* FEATURES */}
        <ul className="mt-3 min-h-[79px] space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-[11px] text-slate-300"
            >
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-fuchsia-400 shadow-[0_0_7px_rgba(217,70,239,0.5)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* ANIMATED VISUAL */}
        <div className="relative mt-4 h-[165px] w-full shrink-0 overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#080d20]/80">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(100,55,210,0.2),transparent_70%)]"
            animate={
              reduced
                ? undefined
                : {
                    opacity: [0.45, 1, 0.45],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="relative h-full w-full"
            whileHover={
              reduced
                ? undefined
                : { scale: 1.05 }
            }
            transition={{ duration: 0.6, ease }}
          >
            <ServiceVisual
              type={service.visual}
              reduced={reduced}
            />
          </motion.div>
        </div>

        {/* BOTTOM LINK */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-cyan-300 transition-colors duration-300 hover:text-white"
            aria-label={`Enquire about ${service.title}`}
          >
            Explore Service
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <ArrowUpRight
            size={17}
            className="text-purple-400/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
          />
        </div>
      </div>

      {/* ANIMATED BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

/* ------------------------------------
   MAIN SERVICES SECTION
------------------------------------ */

export default function ServicesOverview() {
  const reduced = useReducedMotion();

  return (
    <section
      id="services-overview"
      aria-labelledby="services-overview-title"
      className="relative isolate overflow-hidden bg-[#050819] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* GALAXY AMBIENCE */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_18%,rgba(90,30,180,0.12),transparent_40%),radial-gradient(ellipse_at_92%_75%,rgba(0,120,180,0.09),transparent_40%)]" />

      {/* STAR FIELD */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25px 30px,#c4b5fd 99%,transparent),radial-gradient(1px 1px at 150px 105px,#67e8f9 99%,transparent),radial-gradient(1px 1px at 260px 195px,#e879f9 99%,transparent)",
          backgroundSize: "320px 270px",
        }}
        animate={
          reduced
            ? undefined
            : {
                backgroundPosition: [
                  "0px 0px",
                  "35px 55px",
                  "0px 0px",
                ],
                opacity: [0.2, 0.38, 0.2],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* MOVING PURPLE GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 -z-10 h-[350px] w-[350px] rounded-full bg-purple-700/10 blur-[100px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 100, 0],
                y: [0, 80, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* SECTION HEADING */}
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div>
            <motion.div
              initial={
                reduced
                  ? false
                  : { opacity: 0, x: -20 }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200">
                Our Expertise
              </span>

              <Sparkles
                size={14}
                className="text-purple-400"
              />
            </motion.div>

            <motion.h2
              id="services-overview-title"
              initial={
                reduced
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      filter: "blur(8px)",
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease,
              }}
              className="max-w-[850px] text-[clamp(1.9rem,3.3vw,3.4rem)] font-bold leading-[1.13] tracking-[-0.045em]"
            >
              Complete Digital Solutions
              <br />
              Under{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                One Roof.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={
              reduced
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-[410px] text-[13px] leading-[1.9] text-slate-400 sm:text-[14px]"
          >
            From creative design to intelligent automation,
            XTACH brings technology, innovation, and
            strategy together to create extraordinary
            digital solutions.
          </motion.p>
        </div>

        {/* RESPONSIVE GRID: 1 / 2 / 4 COLUMNS */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
