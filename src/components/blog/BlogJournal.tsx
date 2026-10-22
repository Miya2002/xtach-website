
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  X,
  SlidersHorizontal,
  BookOpen,
} from "lucide-react";

type Category =
  | "AI & Automation"
  | "Web Development"
  | "Design & UX"
  | "Digital Marketing"
  | "Technology"
  | "Business"
  | "Tutorials";

type Article = {
  id: number;
  title: string;
  category: Category;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  featured?: boolean;
};

const categories = [
  "All",
  "AI & Automation",
  "Web Development",
  "Design & UX",
  "Digital Marketing",
  "Technology",
  "Business",
  "Tutorials",
] as const;

type FilterCategory = (typeof categories)[number];

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    category: "Web Development",
    image: "/images/blog/web-development.png",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    excerpt:
      "Explore modern architectures, tools, and best practices for building high-performance web applications.",
    slug: "building-scalable-web-applications",
  },
  {
    id: 2,
    title: "The Rise of AI Agents in Business",
    category: "AI & Automation",
    image: "/images/blog/ai-agents.png",
    date: "Jan 08, 2025",
    readTime: "7 min read",
    excerpt:
      "Discover how autonomous AI agents are transforming workflows and changing the way businesses operate.",
    slug: "rise-of-ai-agents-in-business",
  },
  {
    id: 3,
    title: "Designing Digital Experiences That Matter",
    category: "Design & UX",
    image: "/images/blog/design-ux.png",
    date: "Jan 05, 2025",
    readTime: "5 min read",
    excerpt:
      "Understand the principles behind intuitive, user-centered digital products that people love.",
    slug: "designing-digital-experiences",
  },
  {
    id: 4,
    title: "Data-Driven Marketing Strategies for Growth",
    category: "Digital Marketing",
    image: "/images/blog/digital-marketing.png",
    date: "Jan 02, 2025",
    readTime: "6 min read",
    excerpt:
      "Learn how analytics, automation, and intelligent campaigns can drive measurable business growth.",
    slug: "data-driven-marketing-strategies",
  },
  {
    id: 5,
    title: "Essential Tech Stack for Modern Startups",
    category: "Technology",
    image: "/images/blog/tech-stack.png",
    date: "Dec 28, 2024",
    readTime: "5 min read",
    excerpt:
      "A practical look at the technologies that help ambitious startups build, launch, and scale.",
    slug: "essential-tech-stack-startups",
  },
  {
    id: 6,
    title: "The Future of Cloud Computing",
    category: "Technology",
    image: "/images/blog/cloud-computing.png",
    date: "Dec 24, 2024",
    readTime: "6 min read",
    excerpt:
      "Explore how cloud infrastructure is evolving to support intelligent and connected digital systems.",
    slug: "future-of-cloud-computing",
  },
  {
    id: 7,
    title: "Creating High-Performance Mobile Applications",
    category: "Web Development",
    image: "/images/blog/mobile-apps.png",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    excerpt:
      "From responsive interfaces to performance optimization, discover what makes a great mobile app.",
    slug: "high-performance-mobile-applications",
  },
  {
    id: 8,
    title: "Cybersecurity in the Digital Age",
    category: "Business",
    image: "/images/blog/cybersecurity.png",
    date: "Dec 18, 2024",
    readTime: "6 min read",
    excerpt:
      "Learn the security principles every modern organization should consider in a connected world.",
    slug: "cybersecurity-digital-age",
  },
  {
    id: 9,
    title: "A Practical Guide to AI Automation",
    category: "Tutorials",
    image: "/images/blog/ai-automation-guide.png",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    excerpt:
      "A beginner-friendly introduction to building intelligent workflows and automating repetitive tasks.",
    slug: "practical-guide-ai-automation",
  },
  {
    id: 10,
    title: "How Strong Branding Builds Digital Trust",
    category: "Design & UX",
    image: "/images/blog/branding.png",
    date: "Dec 08, 2024",
    readTime: "4 min read",
    excerpt:
      "Discover how a consistent brand identity helps businesses create memorable digital experiences.",
    slug: "branding-builds-digital-trust",
  },
  {
    id: 11,
    title: "Understanding SaaS Product Development",
    category: "Business",
    image: "/images/blog/saas-development.png",
    date: "Dec 04, 2024",
    readTime: "7 min read",
    excerpt:
      "Explore the product decisions, technical foundations, and growth considerations behind SaaS platforms.",
    slug: "understanding-saas-development",
  },
  {
    id: 12,
    title: "Getting Started with Next.js",
    category: "Tutorials",
    image: "/images/blog/nextjs-guide.png",
    date: "Nov 29, 2024",
    readTime: "9 min read",
    excerpt:
      "Learn the fundamentals of building modern web experiences with Next.js and React.",
    slug: "getting-started-nextjs",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      layout={!reduceMotion}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25, scale: 0.97 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={
        reduceMotion
          ? undefined
          : { opacity: 0, y: -12, scale: 0.97 }
      }
      transition={{
        duration: 0.48,
        delay: reduceMotion ? 0 : Math.min(index, 7) * 0.045,
        ease,
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[17px] border border-[#25264d] bg-[#090e22] transition-colors duration-300 hover:border-purple-400/50 hover:bg-[#0d122a]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#10142e]">
        {!imageFailed ? (
          <img
            src={article.image}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#342069,#10142e_65%)]">
            <BookOpen
              size={40}
              strokeWidth={1}
              className="text-purple-300/70"
            />
          </div>
        )}

        {/* Image gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090e22]/55 via-transparent to-transparent" />

        

        {/* Corner arrow */}
        <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-[#090e22]/75 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      </div>

      {/* Article details */}
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={12} />
            {article.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={12} />
            {article.readTime}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 min-h-[3.15rem] text-[17px] font-semibold leading-[1.4] tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-cyan-200">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-[12px] leading-[1.75] text-slate-400">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={`/blog/${article.slug}`}
            aria-label={`Read article: ${article.title}`}
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-cyan-300 transition-colors hover:text-fuchsia-300"
          >
            Read More
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Hover bottom light */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}

export default function BlogJournal() {
  const reduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All");

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const searchableText = [
        article.title,
        article.category,
        article.excerpt,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (!query || searchableText.includes(query))
      );
    });
  }, [activeCategory, search]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  function changeCategory(category: FilterCategory) {
    setActiveCategory(category);
    setVisibleCount(8);
  }

  function changeSearch(value: string) {
    setSearch(value);
    setVisibleCount(8);
  }

  function clearFilters() {
    setActiveCategory("All");
    setSearch("");
    setVisibleCount(8);
  }

  return (
    <section
      id="blog-articles"
      aria-labelledby="blog-journal-heading"
      className="relative isolate overflow-hidden bg-[#040716] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_15%,rgba(80,35,155,0.07),transparent_40%),radial-gradient(ellipse_at_90%_75%,rgba(0,130,210,0.055),transparent_45%)]" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-9 lg:px-12 xl:px-16">

        {/* Section header */}
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex shrink-0 items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-fuchsia-400" />

              <h2
                id="blog-journal-heading"
                className="text-[22px] font-bold tracking-[-0.035em] text-white sm:text-[25px]"
              >
                Explore the Journal
              </h2>
            </motion.div>

            <p className="max-w-[540px] text-[12px] leading-[1.75] text-slate-400 sm:text-[13px]">
              Discover articles, guides, and insights across technology,
              design, and innovation.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full shrink-0 lg:w-[275px]">
            <Search
              size={17}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => changeSearch(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search blog articles"
              className="h-[45px] w-full rounded-full border border-[#252b4d] bg-[#0a1025] py-2 pl-5 pr-11 text-[12px] text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-purple-400/65 focus:ring-2 focus:ring-purple-500/10"
            />
          </div>
        </div>

        {/* Filters */}
        <div
          id="blog-categories"
          aria-label="Filter articles by category"
          className="mb-8 flex flex-wrap gap-2.5"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                aria-pressed={active}
                className={`relative min-h-[39px] overflow-hidden rounded-full border px-4 text-[11px] font-medium transition-all duration-300 sm:px-5 sm:text-[12px] ${
                  active
                    ? "border-transparent text-white shadow-[0_7px_25px_rgba(116,58,237,0.23)]"
                    : "border-[#2a2c52] bg-[#0a0f24] text-slate-300 hover:border-purple-400/50 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-blog-category"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <p
            aria-live="polite"
            className="text-[11px] text-slate-500"
          >
            Showing{" "}
            <span className="font-semibold text-slate-300">
              {visibleArticles.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-300">
              {filteredArticles.length}
            </span>{" "}
            articles
          </p>

          {(activeCategory !== "All" || search) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-purple-300 transition-colors hover:text-cyan-300"
            >
              <X size={13} />
              Clear Filters
            </button>
          )}
        </div>

        {/* Article grid */}
        <AnimatePresence mode="popLayout">
          {visibleArticles.length > 0 ? (
            <motion.div
              key="article-grid"
              layout={!reduceMotion}
              className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {visibleArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex min-h-[280px] flex-col items-center justify-center rounded-[20px] border border-[#252b4d] bg-[#0a1025] px-5 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-300">
                <SlidersHorizontal size={24} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                No matching articles
              </h3>

              <p className="mt-2 max-w-[350px] text-[13px] leading-relaxed text-slate-400">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-purple-400/35 px-5 py-2.5 text-[12px] font-medium text-purple-200 transition-colors hover:bg-purple-500/15"
              >
                Reset Filters
                <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load more */}
        {visibleCount < filteredArticles.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 4)}
              className="group inline-flex min-h-[46px] items-center gap-3 rounded-full border border-purple-400/40 bg-[#0b1028] px-7 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-purple-500/10"
            >
              Load More Articles
              <ArrowRight
                size={15}
                className="text-cyan-300 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
