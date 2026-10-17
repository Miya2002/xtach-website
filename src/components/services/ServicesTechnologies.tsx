
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Code2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const technologies = [
  { name: "Next.js", logo: "nextdotjs", color: "FFFFFF" },
  { name: "React", logo: "react", color: "61DAFB" },
  { name: "Node.js", logo: "nodedotjs", color: "5FA04E" },
  { name: "TypeScript", logo: "typescript", color: "3178C6" },
  { name: "Python", logo: "python", color: "3776AB" },
  { name: "AWS", logo: "amazonaws", color: "FF9900" },
  { name: "Firebase", logo: "firebase", color: "FFCA28" },
  { name: "MongoDB", logo: "mongodb", color: "47A248" },
  { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
  { name: "Docker", logo: "docker", color: "2496ED" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function TechnologyTile({
  tech,
  index,
}: {
  tech: (typeof technologies)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay: reduceMotion ? 0 : index * 0.055,
        ease,
      }}
      className="group flex min-w-0 flex-col items-center gap-2.5"
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[13px] border border-[#27305a] bg-[#090f25] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-400/65 group-hover:bg-[#11132e] group-hover:shadow-[0_12px_35px_rgba(124,58,237,0.22),inset_0_0_22px_rgba(124,58,237,0.07)]">
        {/* Animated reflection */}
        {!reduceMotion && (
          <div className="pointer-events-none absolute -left-[160%] top-0 h-full w-[85%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[160%]" />
        )}

        {/* Soft center glow */}
        <div className="pointer-events-none absolute inset-3 rounded-full bg-purple-500/0 blur-xl transition-colors duration-500 group-hover:bg-purple-500/15" />

        {failed ? (
          <Code2
            size={36}
            className="relative z-10 text-purple-300"
          />
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${tech.logo}/${tech.color}`}
            alt={`${tech.name} logo`}
            width={54}
            height={54}
            loading="lazy"
            onError={() => setFailed(true)}
            className="relative z-10 h-[36px] w-[36px] object-contain transition-all duration-500 group-hover:scale-[1.14] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] sm:h-[46px] sm:w-[46px] xl:h-[50px] xl:w-[50px]"
          />
        )}

        {/* Small bottom highlight */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-500 group-hover:w-[65%]" />
      </div>

      <span className="text-center text-[11px] font-medium leading-snug text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-[12px]">
        {tech.name}
      </span>
    </motion.div>
  );
}

function VideoCTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="relative mt-12 overflow-hidden rounded-[22px] border border-purple-500/45 bg-[#101029] shadow-[0_15px_65px_rgba(90,35,170,0.15)] sm:mt-14"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source
          src="/videos/xtach-services-cta.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays for readable text */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09081e]/95 via-[#100c2c]/85 to-[#100b29]/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08071b]/50 via-transparent to-purple-900/10" />

      {/* Gradient edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500" />

      <div className="relative z-10 flex min-h-[290px] flex-col justify-center gap-7 px-6 py-11 sm:min-h-[320px] sm:px-10 lg:min-h-[300px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16">
        <div className="max-w-[720px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
              Let's Build Together
            </span>
          </div>

          <h3 className="text-[clamp(1.8rem,3vw,3.1rem)] font-bold leading-[1.15] tracking-[-0.045em] text-white">
            Turn Your Ideas Into
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Real-World Solutions.
            </span>
          </h3>

          <p className="mt-5 max-w-[590px] text-[13px] leading-[1.8] text-slate-200 sm:text-[15px]">
            Let's discuss your project and create something extraordinary.
          </p>
        </div>

        <Link
          href="/contact"
          className="group/cta inline-flex min-h-[49px] shrink-0 items-center justify-center gap-3 self-start rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 px-7 text-[13px] font-semibold text-white shadow-[0_10px_35px_rgba(110,55,220,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(110,55,220,0.4)]"
        >
          Start a Project
          <ArrowRight
            size={17}
            className="transition-transform group-hover/cta:translate-x-1"
          />
        </Link>
      </div>

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-purple-500/35"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-purple-500/35"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesTechnologies() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative overflow-hidden bg-[#040716] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_20%,rgba(100,40,190,0.08),transparent_40%),radial-gradient(ellipse_at_90%_75%,rgba(20,95,180,0.07),transparent_40%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-9 lg:px-12 xl:px-16">
        {/* Header matching reference */}
        <div className="mb-9 grid items-end gap-5 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200">
                Technologies We Work With
              </span>
            </motion.div>

            <motion.h2
              id="technologies-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.045em]"
            >
              Powered by
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Modern Technologies.
              </span>
            </motion.h2>
          </div>

          <p className="max-w-[420px] text-[13px] leading-[1.85] text-slate-400 sm:text-[14px]">
            We use industry-leading technologies to build secure,
            scalable, and future-ready solutions.
          </p>
        </div>

        {/* EXACT reference-style technology row */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 min-[420px]:grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 lg:gap-x-5">
          {technologies.map((tech, index) => (
            <TechnologyTile
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}
        </div>

        {/* Cinematic video banner */}
        <VideoCTA />
      </div>
    </section>
  );
}
