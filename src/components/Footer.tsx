"use client";

import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";

type SocialName = "linkedin" | "twitter" | "youtube" | "instagram";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SocialIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: SocialName }) {
  const paths = {
    linkedin: <><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M6 10v8M6 6v.1M11 18v-8h4v1.5c.8-1.2 2-1.8 3.3-1.8 2.3 0 3.2 1.5 3.2 4V18" /></>,
    twitter: <path d="M4 3h3.7L20 21h-3.7L4 3Zm16 0L4 21" />,
    youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="6" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  };
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks: { name: string; href: string; icon: SocialName }[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "X", href: "https://x.com/", icon: "twitter" },
  { name: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    if (reduceMotion) {
      video.pause();
      return;
    }
    const playVideo = () => {
      if (document.hidden) return;
      void video.play().catch(() => {
        // Autoplay may be restricted by the browser.
      });
    };
    const handleVisibility = () => {
      if (document.hidden) video.pause();
      else playVideo();
    };
    playVideo();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [reduceMotion]);

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#020612] text-white">
      <section aria-labelledby="footer-cta-heading" className="relative isolate overflow-hidden border-t border-[#9564ff]/25 bg-[#020612]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(56,35,115,0.09),transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1920px] grid-cols-1 items-center gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)_minmax(0,0.85fr)] lg:gap-5 lg:px-10 lg:py-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.75fr)_minmax(0,0.9fr)] xl:gap-7 xl:px-16 2xl:min-h-[500px]">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -45, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, ease }} className="relative z-10 min-w-0 lg:pr-2">
            <div className="mb-4 flex items-center gap-3"><span className="h-px w-8 shrink-0 bg-gradient-to-r from-[#b86cff] to-[#4bcaff]" /><span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75">Let&apos;s Build</span></div>
            <h2 id="footer-cta-heading" className="max-w-[490px] text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-white">Something <span className="bg-gradient-to-r from-white via-[#c7a2ff] to-[#62d4ff] bg-clip-text text-transparent">Extraordinary</span> Together.</h2>
            <p className="mt-5 max-w-[430px] text-[13px] leading-[1.8] text-white/70 sm:text-[14px]">Have a project in mind? We&apos;d love to hear from you. Let&apos;s transform your ideas into exceptional digital experiences.</p>
            <motion.div aria-hidden="true" className="mt-7 h-px w-24 bg-gradient-to-r from-[#b86cff]/70 to-transparent" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} style={{ transformOrigin: "left" }} transition={{ duration: 0.9, delay: 0.3 }} />
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.1, ease }} className="relative z-0 flex min-w-0 items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-xl bg-[#020612]">
              {!videoFailed ? (
                <video ref={videoRef} autoPlay={!reduceMotion} muted loop playsInline preload="auto" aria-label="XTACH digital innovation showcase" onError={() => setVideoFailed(true)} className="block h-auto w-full object-contain">
                  <source src="/videos/xtach-footer.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,#18265a,#020612)]"><span className="bg-gradient-to-r from-[#b879ff] to-[#4bcaff] bg-clip-text text-4xl font-bold tracking-[0.2em] text-transparent">XTACH</span></div>
              )}
            </div>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 40, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.85, delay: 0.2, ease }} className="relative z-10 flex min-w-0 flex-row flex-wrap items-center justify-start gap-3 lg:flex-col lg:items-stretch lg:justify-center xl:gap-4">
            <motion.a href="mailto:hello@xtach.com?subject=New%20Project%20Inquiry" whileHover={reduceMotion ? undefined : { y: -4, scale: 1.035, boxShadow: "0 12px 35px rgba(174,113,255,0.3)" }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="group inline-flex min-h-[48px] items-center justify-center gap-5 whitespace-nowrap rounded-full bg-white px-5 py-3 text-[12px] font-semibold text-[#071024] shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-colors duration-300 hover:bg-[#eee7ff] sm:text-[13px] lg:w-full">Get Started <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" /></motion.a>
            <motion.a href="mailto:hello@xtach.com?subject=Contact%20XTACH" whileHover={reduceMotion ? undefined : { y: -4, scale: 1.035 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} className="group inline-flex min-h-[48px] items-center justify-center gap-5 whitespace-nowrap rounded-full border border-white/45 bg-white/[0.035] px-5 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:border-[#bd8aff] hover:bg-[#9c69ff]/15 sm:text-[13px] lg:w-full">Contact Us <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" /></motion.a>
          </motion.div>
        </div>
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ad72ff] to-transparent" animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      </section>

      <div className="relative border-t border-white/10 bg-[#020916]">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-6 lg:px-12 xl:px-16">
          <div>
            <a href="#home" aria-label="XTACH Home" className="inline-flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#071022]"><span className="text-[27px] font-black tracking-[-0.1em] text-white">X</span></div><span className="text-[19px] font-bold tracking-[0.22em] text-white">XTACH</span></a>
            <p className="mt-3 text-[11px] text-white/50">© {year} XTACH. All rights reserved.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:justify-center lg:gap-x-7">{navigation.map((item) => <a key={item.name} href={item.href} className="relative text-[12px] text-white/65 transition-colors duration-300 hover:text-[#c493ff]">{item.name}</a>)}</nav>
          <div className="flex flex-col gap-3 md:items-end"><div className="flex items-center gap-3">{socialLinks.map((social) => <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.1 }} whileTap={reduceMotion ? undefined : { scale: 0.95 }} className="group flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-white/65 transition-all duration-300 hover:border-[#9c69ff]/40 hover:bg-[#9c69ff]/15 hover:text-[#c18aff]"><SocialIcon name={social.icon} /></motion.a>)}</div><p className="text-[11px] font-medium text-white/50">Build Smarter. Together.</p></div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9b66ff]/45 to-transparent" />
    </footer>
  );
}
