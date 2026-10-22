
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  "All",
  "Logos",
  "Websites",
  "Video",
  "Stationery",
  "Illustration",
  "Mobile Apps",
] as const;

type Category = (typeof categories)[number];

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
};

/*
  IMPORTANT:
  These are portfolio content slots, not claims about
  completed XTACH client projects.

  Put your real project images in:
  public/images/work/

  Then update the titles, descriptions and filenames.
*/

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Showcase",
    category: "Logos",
    description: "Creative brand identity and visual design.",
    image: "/images/work/logo-2.jfif",
  },
  {
    id: 2,
    title: "Modern Digital Platform",
    category: "Websites",
    description: "Responsive website design and development.",
    image: "/images/work/website-1.avif",
  },
  {
    id: 3,
    title: "Creative Motion Design",
    category: "Video",
    description: "Engaging visual storytelling and motion graphics.",
    image: "/images/work/video-1.jpg",
  },
  {
    id: 4,
    title: "Corporate Brand Identity",
    category: "Stationery",
    description: "Professional business stationery and branding.",
    image: "/images/work/stationery-1.jfif",
  },
  {
    id: 5,
    title: "Digital Illustration",
    category: "Illustration",
    description: "Distinctive artwork and digital illustrations.",
    image: "/images/work/illustration-1.png",
  },
  {
    id: 6,
    title: "Mobile App Experience",
    category: "Mobile Apps",
    description: "Intuitive mobile application interface design.",
    image: "/images/work/app-1.webp",
  },
  {
    id: 7,
    title: "Visual Identity Concept",
    category: "Logos",
    description: "Memorable logo and identity design.",
    image: "/images/work/logo-222.jfif",
  },
  {
    id: 8,
    title: "Business Website Experience",
    category: "Websites",
    description: "Modern and conversion-focused web experience.",
    image: "/images/work/website-2.jfif",
  },
  {
    id: 9,
    title: "Motion Graphics Showcase",
    category: "Video",
    description: "Dynamic content and visual communication.",
    image: "/images/work/video-2.jpg",
  },
  {
    id: 10,
    title: "Premium Stationery Design",
    category: "Stationery",
    description: "Consistent branding across printed materials.",
    image: "/images/work/stationery-2.webp",
  },
  {
    id: 11,
    title: "Creative Artwork",
    category: "Illustration",
    description: "Original illustrations and creative concepts.",
    image: "/images/work/illustration-2.webp",
  },
  {
    id: 12,
    title: "Application UI Design",
    category: "Mobile Apps",
    description: "Beautiful and functional app interfaces.",
    image: "/images/work/app-222.webp",
  },
];

function ProjectImage({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#101633]">
      {!failed ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.22),transparent_65%)] p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10">
            <Sparkles size={25} className="text-cyan-300" />
          </div>

          <p className="text-sm font-semibold text-white">
            {project.title}
          </p>

          <p className="text-xs text-slate-400">
            Add image: {project.image}
          </p>
        </div>
      )}
    </div>
  );
}

export default function RecentWork() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex(
        (project) => project.id === selectedProject.id
      )
    : -1;

  function changeCategory(category: Category) {
    setActiveCategory(category);
    setVisibleCount(6);
    setSelectedProject(null);
  }

  function navigateProject(direction: -1 | 1) {
    if (selectedIndex < 0) return;

    const nextIndex =
      (selectedIndex + direction + filteredProjects.length) %
      filteredProjects.length;

    setSelectedProject(filteredProjects[nextIndex]);
  }

  return (
    <section
      id="featured-work"
      aria-labelledby="recent-work-title"
      className="relative isolate overflow-hidden bg-[#050817] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-16 h-[430px] w-[430px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-600/[0.07] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,130,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(150,130,255,0.45) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="max-w-[900px]"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-gradient-to-r from-purple-500 to-cyan-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-300">
              Our Recent Work
            </span>

            <Sparkles size={15} className="text-cyan-400" />
          </div>

          <h2
            id="recent-work-title"
            className="text-[clamp(2rem,3.5vw,3.3rem)] font-bold leading-[1.15] tracking-[-0.045em]"
          >
            Creative Solutions.
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Real Digital Impact.
            </span>
          </h2>

          <p className="mt-5 max-w-[750px] text-[13px] leading-[1.85] text-slate-300 sm:text-[14px]">
            Explore our creative capabilities across branding,
            websites, digital experiences, and technology.
            Discover how thoughtful design and innovative
            solutions can bring ambitious ideas to life.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5 sm:mt-12"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                aria-pressed={active}
                className={`relative rounded-full border px-4 py-2.5 text-[12px] font-semibold transition-all duration-300 sm:px-5 sm:text-[13px] ${
                  active
                    ? "border-purple-400/50 bg-purple-500/15 text-white shadow-[0_0_22px_rgba(139,92,246,0.13)]"
                    : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-purple-400/30 hover:bg-purple-500/[0.07] hover:text-white"
                }`}
              >
                {category}

                {active && (
                  <motion.span
                    layoutId="active-work-filter"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                    className="absolute inset-x-5 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* PROJECT GALLERY */}
        <motion.div
          layout
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                layout
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 22, scale: 0.97 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96 }
                }
                transition={{
                  duration: 0.45,
                  delay: Math.min(index, 5) * 0.055,
                  ease,
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[1.4/1] w-full overflow-hidden rounded-[16px] border border-white/10 bg-[#101633] text-left shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition-colors duration-300 hover:border-purple-400/50"
              >
                <ProjectImage
                  project={project}
                  priority={index < 3}
                />

                {/* HOVER GRADIENT */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030514]/95 via-[#030514]/25 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* CATEGORY LABEL */}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#06091c]/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-lg">
                  {project.category}
                </span>

                {/* HOVER ARROW */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-purple-500/20 text-white backdrop-blur-lg transition-all duration-300 group-hover:rotate-45 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20">
                  <ArrowUpRight size={17} />
                </div>

                {/* PROJECT DETAILS */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-[16px] font-bold text-white sm:text-[18px]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-300 sm:text-[12px]">
                    {project.description}
                  </p>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {visibleProjects.length === 0 && (
          <div className="py-20 text-center text-sm text-slate-400">
            No projects available in this category yet.
          </div>
        )}

        {/* LOAD MORE */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => count + 6)
              }
              className="group inline-flex min-h-[48px] items-center gap-3 rounded-full border border-purple-400/40 bg-purple-500/10 px-7 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-purple-500/20"
            >
              Load More Projects
              <ArrowUpRight
                size={16}
                className="text-cyan-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        )}
      </div>

      {/* PROJECT PREVIEW MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02030c]/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.94, y: 20 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[1050px] overflow-hidden rounded-2xl border border-purple-400/25 bg-[#090d23] shadow-[0_25px_100px_rgba(0,0,0,0.55)]"
            >
              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close project preview"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#050817]/80 text-white backdrop-blur-md transition-colors hover:bg-purple-600"
              >
                <X size={20} />
              </button>

              {/* LARGE IMAGE */}
              <div className="group relative aspect-[16/9] max-h-[65vh] overflow-hidden bg-[#101633]">
                <ProjectImage project={selectedProject} />
              </div>

              {/* MODAL FOOTER */}
              <div className="flex flex-wrap items-center justify-between gap-5 p-5 sm:p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {selectedProject.category}
                  </p>

                  <h3 className="mt-2 text-[18px] font-bold text-white sm:text-[22px]">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-1 text-[12px] text-slate-400">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => navigateProject(-1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-purple-400/50 hover:bg-purple-500/20"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => navigateProject(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-purple-400/50 hover:bg-purple-500/20"
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
