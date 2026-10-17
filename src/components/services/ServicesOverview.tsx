
"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Palette,
  Code2,
  Smartphone,
  ChartNoAxesCombined,
  Database,
  BrainCircuit,
  Mic2,
  Workflow,
  Cloud,
  Sparkles,
  Check,
  Zap,
  Globe2,
  ShieldCheck,
  Layers3,
  type LucideIcon,
} from "lucide-react";

type VisualType =
  | "brand"
  | "web"
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
    title: "Logo & Brand Design",
    description:
      "Distinctive brand identities that capture attention and create lasting impressions.",
    features: ["Visual Identity", "Brand Strategy", "Creative Guidelines"],
    icon: Palette,
    visual: "brand",
    accent: "168,85,247",
  },
  {
    number: "02",
    title: "Website Design & Development",
    description:
      "Modern, responsive digital experiences engineered for performance and growth.",
    features: ["Custom Websites", "Full-Stack Development", "CMS Integration"],
    icon: Code2,
    visual: "web",
    accent: "34,211,238",
  },
  {
    number: "03",
    title: "Application Development",
    description:
      "Powerful mobile and web applications built around real user experiences.",
    features: ["Mobile Applications", "Web Applications", "Cross-Platform"],
    icon: Smartphone,
    visual: "app",
    accent: "168,85,247",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Creative, data-driven strategies that connect brands with the right audience.",
    features: ["Social Media", "SEO & Advertising", "Content Strategy"],
    icon: ChartNoAxesCombined,
    visual: "marketing",
    accent: "217,70,239",
  },
  {
    number: "05",
    title: "Portals & CRM Systems",
    description:
      "Smart business platforms that simplify operations and customer management.",
    features: ["Custom CRM", "Business Portals", "Reporting Dashboards"],
    icon: Database,
    visual: "crm",
    accent: "99,102,241",
  },
  {
    number: "06",
    title: "AI Model Development",
    description:
      "Intelligent AI solutions designed to solve complex business challenges.",
    features: ["Custom AI Models", "Machine Learning", "AI Integration"],
    icon: BrainCircuit,
    visual: "ai",
    accent: "34,211,238",
  },
  {
    number: "07",
    title: "AI Voice Overs",
    description:
      "Expressive, natural-sounding AI voices for content and digital experiences.",
    features: ["Voice Generation", "Multilingual Audio", "Content Production"],
    icon: Mic2,
    visual: "voice",
    accent: "217,70,239",
  },
  {
    number: "08",
    title: "AI Automation",
    description:
      "Connected intelligent workflows that eliminate repetitive tasks.",
    features: ["Workflow Automation", "AI Agents", "System Integrations"],
    icon: Workflow,
    visual: "automation",
    accent: "168,85,247",
  },
  {
    number: "09",
    title: "SaaS Development",
    description:
      "Scalable cloud software platforms built for businesses ready to grow.",
    features: ["Cloud Applications", "SaaS Platforms", "API Integrations"],
    icon: Cloud,
    visual: "saas",
    accent: "34,211,238",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ----------------------------------------------------
   01 — BRAND IDENTITY VISUAL
---------------------------------------------------- */

function BrandVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute h-36 w-36 rounded-full bg-fuchsia-500/15 blur-[45px]" />

      <div className="relative h-[155px] w-[235px]">
        <div className="absolute left-3 top-5 h-[112px] w-[135px] -rotate-12 rounded-xl border border-purple-300/30 bg-gradient-to-br from-[#6030a1] to-[#181735] shadow-[0_18px_40px_rgba(98,35,190,0.3)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:-rotate-[16deg]">
          <div className="flex h-full flex-col justify-between p-4">
            <Layers3 size={29} className="text-white/90" />
            <div>
              <div className="h-2 w-14 rounded-full bg-white/70" />
              <div className="mt-2 h-1 w-20 rounded-full bg-white/25" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 h-[112px] w-[137px] rotate-12 rounded-xl border border-cyan-300/25 bg-gradient-to-br from-[#162c52] to-[#10122d] shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:translate-y-1 group-hover:rotate-[16deg]">
          <div className="flex h-full flex-col justify-between p-4">
            <Palette size={28} className="text-cyan-300" />
            <div className="flex gap-2">
              {["#c084fc", "#e879f9", "#22d3ee"].map((color) => (
                <span
                  key={color}
                  className="h-5 w-5 rounded-full border border-white/15"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   02 — WEBSITE VISUAL
---------------------------------------------------- */

function WebVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-[245px] max-w-full overflow-hidden rounded-xl border border-cyan-400/25 bg-[#0a122c] shadow-[0_18px_45px_rgba(34,211,238,0.12)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#171b3c] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <div className="ml-auto h-2 w-20 rounded-full bg-white/10" />
        </div>

        <div className="grid grid-cols-[60px_1fr] gap-3 p-3">
          <div className="space-y-2 rounded-md bg-white/[0.035] p-2">
            {[65, 90, 70, 80, 50].map((w, i) => (
              <div
                key={i}
                className="h-1 rounded-full bg-purple-300/35"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          <div className="space-y-2">
            <div className="relative h-16 overflow-hidden rounded-md bg-gradient-to-br from-purple-700/75 via-indigo-600/60 to-cyan-600/50">
              <div className="absolute right-3 top-2 h-12 w-12 rounded-full border border-cyan-300/40" />
              <div className="absolute bottom-3 left-3 h-2 w-16 rounded bg-white/65" />
              <div className="absolute bottom-1.5 left-3 h-1 w-24 rounded bg-white/25" />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((n) => (
                <div
                  key={n}
                  className="h-8 rounded bg-gradient-to-br from-purple-500/25 to-cyan-400/10"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease }}
          />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   03 — APPLICATION VISUAL
---------------------------------------------------- */

function AppVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute h-36 w-36 rounded-full bg-purple-600/15 blur-3xl" />

      <div className="relative h-[160px] w-[220px]">
        {[0, 1, 2].map((n) => (
          <div
            key={n}
            className="absolute top-1 h-[152px] w-[83px] overflow-hidden rounded-[16px] border-[3px] border-[#514878] bg-[#0c1531] shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-transform duration-700"
            style={{
              left: `${n * 67 + 3}px`,
              zIndex: n === 1 ? 3 : 2,
              transform: `rotate(${n === 0 ? -10 : n === 2 ? 10 : 0}deg)`,
            }}
          >
            <div className="mx-auto mt-1.5 h-[3px] w-7 rounded-full bg-white/20" />

            <div className="mx-2 mt-3 h-12 rounded-lg bg-gradient-to-br from-purple-500/90 to-cyan-500/60" />

            <div className="mx-2 mt-3 h-1.5 w-10 rounded bg-white/55" />
            <div className="mx-2 mt-2 h-1 w-12 rounded bg-white/20" />

            <div className="mx-2 mt-3 grid grid-cols-2 gap-1">
              <div className="h-5 rounded bg-purple-500/25" />
              <div className="h-5 rounded bg-cyan-500/20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   04 — MARKETING VISUAL
---------------------------------------------------- */

function MarketingVisual() {
  const bars = [28, 45, 38, 62, 54, 78, 69, 95];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[245px] max-w-full rounded-xl border border-fuchsia-400/25 bg-[#10132f] p-4 shadow-[0_15px_40px_rgba(120,40,180,0.15)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium text-slate-300">
            Growth Analytics
          </span>
          <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[9px] text-cyan-300">
            ↗ Growth
          </span>
        </div>

        <div className="flex h-[95px] items-end gap-2 border-b border-white/10 pb-2">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                delay: i * 0.08,
                ease,
              }}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-700 via-fuchsia-500 to-cyan-400"
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between">
          <div className="h-1.5 w-16 rounded-full bg-white/20" />
          <div className="h-1.5 w-10 rounded-full bg-cyan-400/40" />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   05 — CRM VISUAL
---------------------------------------------------- */

function CRMVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[245px] max-w-full overflow-hidden rounded-xl border border-indigo-400/25 bg-[#101631] shadow-[0_15px_40px_rgba(60,60,180,0.16)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
          <span className="text-[9px] font-medium text-indigo-200">
            Business Dashboard
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>

        <div className="grid grid-cols-3 gap-2 p-3">
          {["Clients", "Projects", "Reports"].map((name) => (
            <div
              key={name}
              className="rounded-md border border-white/5 bg-white/[0.04] p-2"
            >
              <p className="text-[7px] text-slate-400">{name}</p>
              <div className="mt-2 h-2 w-7 rounded bg-gradient-to-r from-indigo-400 to-cyan-400" />
            </div>
          ))}
        </div>

        <div className="space-y-1.5 px-3 pb-3">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="flex items-center gap-2 rounded bg-white/[0.035] px-2 py-1.5"
            >
              <span className="h-3 w-3 rounded-full bg-indigo-400/30" />
              <span className="h-1 flex-1 rounded bg-white/15" />
              <Check size={10} className="text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   06 — AI NETWORK VISUAL
---------------------------------------------------- */

function AIVisual() {
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
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative h-[175px] w-[245px]">
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
              strokeOpacity=".6"
              strokeDasharray="2 2"
              animate={{ strokeDashoffset: [0, -16] }}
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
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5 + i * 0.12,
                repeat: Infinity,
              }}
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-[#10213b] shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <BrainCircuit size={34} className="text-cyan-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   07 — VOICE WAVEFORM
---------------------------------------------------- */

function VoiceVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-[110px] items-center justify-center gap-[3px]">
        {Array.from({ length: 31 }, (_, i) => {
          const height =
            15 + Math.abs(Math.sin(i * 0.58) * Math.cos(i * 0.2)) * 75;

          return (
            <motion.span
              key={i}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      height: [
                        `${height * 0.5}%`,
                        `${height}%`,
                        `${height * 0.5}%`,
                      ],
                    }
              }
              transition={{
                duration: 1.2 + (i % 5) * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[4px] rounded-full bg-gradient-to-t from-purple-700 via-fuchsia-500 to-cyan-300"
              style={{
                height: `${height}%`,
              }}
            />
          );
        })}
      </div>

      <div className="mt-3 flex w-[225px] max-w-full items-center justify-between rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2">
        <span className="flex items-center gap-2 text-[10px] text-purple-200">
          <Mic2 size={12} />
          AI Voice Engine
        </span>

        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   08 — AUTOMATION WORKFLOW
---------------------------------------------------- */

function AutomationVisual() {
  const steps = [
    { icon: Zap, label: "Trigger" },
    { icon: BrainCircuit, label: "AI" },
    { icon: Check, label: "Action" },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute left-[15%] right-[15%] h-px bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500" />

      <div className="relative z-10 flex w-full max-w-[255px] items-center justify-between gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className="flex h-[92px] w-[75px] flex-col items-center justify-center gap-3 rounded-xl border border-purple-400/30 bg-[#141a39] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Icon size={23} className="text-cyan-300" />
              <span className="text-[9px] font-medium text-slate-300">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   09 — CLOUD / SAAS VISUAL
---------------------------------------------------- */

function SaaSVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[160px] w-[160px] rounded-full border border-dashed border-cyan-400/30"
      />

      <div className="absolute h-[125px] w-[125px] rounded-full border border-purple-400/25" />

      <div className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-2xl border border-cyan-400/35 bg-[#10213c] shadow-[0_0_45px_rgba(34,211,238,0.2)]">
        <Cloud size={43} className="text-cyan-300" />
      </div>

      <div className="absolute left-[18%] top-[15%] rounded-lg border border-purple-400/25 bg-[#15152f] p-2">
        <Database size={16} className="text-purple-300" />
      </div>

      <div className="absolute bottom-[15%] right-[18%] rounded-lg border border-cyan-400/25 bg-[#101b31] p-2">
        <Globe2 size={16} className="text-cyan-300" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   VISUAL SELECTOR
---------------------------------------------------- */

function ServiceVisual({ type }: { type: VisualType }) {
  switch (type) {
    case "brand":
      return <BrandVisual />;
    case "web":
      return <WebVisual />;
    case "app":
      return <AppVisual />;
    case "marketing":
      return <MarketingVisual />;
    case "crm":
      return <CRMVisual />;
    case "ai":
      return <AIVisual />;
    case "voice":
      return <VoiceVisual />;
    case "automation":
      return <AutomationVisual />;
    case "saas":
      return <SaaSVisual />;
  }
}

/* ----------------------------------------------------
   SERVICE CARD
---------------------------------------------------- */

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 30,
  });

  const cursorGlow = useMotionTemplate`
    radial-gradient(
      260px circle at ${smoothX}px ${smoothY}px,
      rgba(${service.accent},0.15),
      transparent 75%
    )
  `;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 28 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : (index % 3) * 0.08,
        ease,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#0c1027] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-purple-400/45 hover:shadow-[0_18px_55px_rgba(89,40,175,0.18)]"
    >
      {/* Ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 85% 85%,rgba(${service.accent},0.10),transparent 65%),linear-gradient(145deg,#10132d,#090e20)`,
        }}
      />

      {/* Cursor light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
        style={{ background: cursorGlow }}
      />

      {/* Top border glow */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg,transparent,rgba(${service.accent},0.8),transparent)`,
        }}
      />

      <div className="relative z-10 flex h-full min-h-[465px] flex-col p-6 sm:p-7">

        {/* Icon + number */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-purple-400/25 bg-gradient-to-br from-purple-500/25 to-cyan-500/5 text-purple-300 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-300/45 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]">
            <Icon size={24} strokeWidth={1.8} />
          </div>

          <span className="text-[15px] font-semibold tracking-[0.08em] text-purple-300/55">
            {service.number}
          </span>
        </div>

        {/* Fixed content area */}
        <div className="min-h-[175px]">
          <h3 className="text-[19px] font-bold leading-[1.28] tracking-[-0.025em] text-white sm:text-[20px]">
            {service.title}
          </h3>

          <p className="mt-3 text-[12px] leading-[1.75] text-slate-400 sm:text-[13px]">
            {service.description}
          </p>

          <ul className="mt-4 space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-[11px] text-slate-300"
              >
                <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-fuchsia-400 shadow-[0_0_7px_rgba(217,70,239,0.45)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Equal-sized visual area */}
        <div className="relative mt-5 h-[190px] w-full shrink-0 overflow-hidden rounded-[15px] border border-white/[0.065] bg-[#080d20]/75">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(100,55,210,0.13),transparent_70%)]" />

          <div className="relative h-full w-full">
            <ServiceVisual type={service.visual} />
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-cyan-300 transition-colors duration-300 hover:text-white"
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
            className="text-purple-400/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
          />
        </div>
      </div>

      {/* Hover underline */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

/* ----------------------------------------------------
   MAIN SECTION
---------------------------------------------------- */

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services-overview"
      aria-labelledby="services-overview-title"
      className="relative isolate overflow-hidden bg-[#050819] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Galaxy ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_18%,rgba(90,30,180,0.10),transparent_40%),radial-gradient(ellipse_at_92%_75%,rgba(0,120,180,0.08),transparent_40%)]" />

      {/* Subtle stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25px 30px,#c4b5fd 99%,transparent),radial-gradient(1px 1px at 150px 105px,#67e8f9 99%,transparent),radial-gradient(1px 1px at 260px 195px,#e879f9 99%,transparent)",
          backgroundSize: "320px 270px",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-9 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="mb-11 grid items-end gap-6 lg:mb-12 lg:grid-cols-[1.5fr_0.7fr] lg:gap-12">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200">
                Our Expertise
              </span>
              <Sparkles size={14} className="text-purple-400" />
            </motion.div>

            <motion.h2
              id="services-overview-title"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="max-w-[850px] text-[clamp(2rem,3.6vw,3.65rem)] font-bold leading-[1.13] tracking-[-0.05em]"
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
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[380px] text-[13px] leading-[1.9] text-slate-400 sm:text-[14px]"
          >
            From creative design to intelligent automation,
            XTACH brings technology, innovation, and strategy
            together to create extraordinary digital solutions.
          </motion.p>
        </div>

        {/* Perfectly aligned cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
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
