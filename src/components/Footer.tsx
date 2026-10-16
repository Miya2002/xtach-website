
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030615] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-5 px-5 py-5 sm:px-10 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_1.5fr_1fr] lg:px-16 xl:px-20">
        {/* XTACH LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            aria-label="XTACH Home"
            className="relative block h-[54px] w-[225px] max-w-full"
          >
            <Image
              src="/images/xtach-navbar-logo1.png"
              alt="XTACH - Redefining The Matrix"
              fill
              sizes="225px"
              className="object-contain object-left"
            />
          </Link>
        </div>

        {/* FOOTER NAVIGATION */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[12px] text-white/60 transition-colors duration-300 hover:text-purple-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* TAGLINE */}
        <p className="text-center text-[11px] tracking-[0.04em] text-white/50 md:text-right">
          Redefining The Matrix
        </p>
      </div>
    </footer>
  );
}
