
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  UserRound,
  Mail,
  Phone,
  Building2,
  BriefcaseBusiness,
  Wallet,
  MessageSquare,
  LockKeyhole,
  ChevronDown,
} from "lucide-react";

type ContactData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const emptyForm: ContactData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Logo & Brand Design",
  "Website Design & Development",
  "Application Development",
  "Digital Marketing",
  "Portals & CRM Systems",
  "AI Model Development",
  "AI Voice Overs",
  "AI Automation",
  "SaaS Development",
  "Other",
];

const budgets = [
  "Not decided yet",
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Let's discuss",
];

const fieldClass =
  "h-[40px] w-full rounded-md border border-[#263150] bg-[#080e24]/85 pl-9 pr-3 text-[11px] text-white outline-none transition-all duration-300 placeholder:text-[#7f8baa] focus:border-cyan-400/70 focus:bg-[#0c1630] focus:shadow-[0_0_14px_rgba(34,211,238,0.08)] sm:text-[12px]";

const labelClass =
  "mb-[6px] block text-[11px] font-medium text-[#c9d0e4]";

export default function ContactForm() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState<ContactData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof ContactData,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend UI demo only.
    // No information is sent or stored.
    setSubmitted(true);
  }

  return (
    <section
      id="project-inquiry"
      className="relative isolate overflow-hidden bg-[#030615] py-8 text-white sm:py-12 lg:py-14"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_5%_55%,rgba(79,22,158,0.17),transparent_48%),radial-gradient(ellipse_at_90%_45%,rgba(0,143,220,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-5 xl:gap-8">

          {/* LEFT SIDE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -24 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-w-0"
          >
            <div className="grid items-center gap-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] sm:gap-4 lg:gap-3 xl:gap-6">

              {/* Image with no visible card border */}
              <div className="relative order-2 h-[280px] min-w-0 overflow-hidden sm:order-1 sm:h-[390px] lg:h-[415px] xl:h-[450px]">

                <Image
                  src="/images/contact/contact-form-tech.png"
                  alt="XTACH futuristic digital contact workstation"
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-cover object-[29%_center]"
                />

                {/* Fade image into section background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030615]/85" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030615]/65 via-transparent to-[#030615]/25" />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-[#030615]/50 to-transparent" />

                {/* Light effect */}
                <div className="pointer-events-none absolute bottom-0 left-[12%] h-24 w-44 rounded-full bg-blue-600/15 blur-[45px]" />
              </div>

              {/* Text content */}
              <div className="relative z-10 order-1 sm:order-2">

                <div className="mb-3 flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">
                    Get in Touch
                  </span>
                </div>

                <h2 className="text-[clamp(1.65rem,2.5vw,2.55rem)] font-bold leading-[1.12] tracking-[-0.045em]">
                  Tell Us About
                  <br />

                  <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Your Project.
                  </span>
                </h2>

                <p className="mt-4 max-w-[345px] text-[11px] leading-[1.85] text-slate-400 sm:text-[12px]">
                  Share a few details about your goals, and our
                  team will get back to you with the right
                  strategy, timeline, and next steps.
                </p>

                <div className="mt-6 space-y-3.5">
                  {[
                    "Free consultation",
                    "Custom solutions for your needs",
                    "Personalized project guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border border-cyan-400/65 bg-cyan-400/5">
                        <Check
                          size={12}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </span>

                      <span className="text-[11px] text-slate-200 sm:text-[12px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 24 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative min-w-0"
          >
            {/* Outer neon glow */}
            <div className="pointer-events-none absolute -inset-[3px] rounded-[19px] bg-gradient-to-br from-fuchsia-500/15 via-transparent to-cyan-400/15 blur-lg" />

            {/* Gradient border */}
            <div className="relative rounded-[18px] bg-gradient-to-br from-fuchsia-500 via-violet-500/25 to-cyan-400 p-[1px]">

              <div className="relative overflow-hidden rounded-[17px] bg-[#080c20]/95 p-4 sm:p-5 xl:p-6">

                {/* Top light */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500 via-violet-500/60 to-cyan-400" />

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-x-3 gap-y-3.5 sm:grid-cols-2">

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="xtach-name"
                        className={labelClass}
                      >
                        Full Name{" "}
                        <span className="text-fuchsia-400">*</span>
                      </label>

                      <div className="relative">
                        <UserRound
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <input
                          id="xtach-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) =>
                            updateField("name", e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="xtach-email"
                        className={labelClass}
                      >
                        Email Address{" "}
                        <span className="text-fuchsia-400">*</span>
                      </label>

                      <div className="relative">
                        <Mail
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <input
                          id="xtach-email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) =>
                            updateField("email", e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="xtach-phone"
                        className={labelClass}
                      >
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <input
                          id="xtach-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+92 300 1234567"
                          value={form.phone}
                          onChange={(e) =>
                            updateField("phone", e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="xtach-company"
                        className={labelClass}
                      >
                        Company (Optional)
                      </label>

                      <div className="relative">
                        <Building2
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <input
                          id="xtach-company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={(e) =>
                            updateField("company", e.target.value)
                          }
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="xtach-service"
                        className={labelClass}
                      >
                        Service Interest{" "}
                        <span className="text-fuchsia-400">*</span>
                      </label>

                      <div className="relative">
                        <BriefcaseBusiness
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <select
                          id="xtach-service"
                          required
                          value={form.service}
                          onChange={(e) =>
                            updateField("service", e.target.value)
                          }
                          className={`${fieldClass} appearance-none pr-8`}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-3 top-3 text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="xtach-budget"
                        className={labelClass}
                      >
                        Project Budget
                      </label>

                      <div className="relative">
                        <Wallet
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <select
                          id="xtach-budget"
                          value={form.budget}
                          onChange={(e) =>
                            updateField("budget", e.target.value)
                          }
                          className={`${fieldClass} appearance-none pr-8`}
                        >
                          <option value="">
                            Select budget
                          </option>

                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-3 top-3 text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="xtach-message"
                        className={labelClass}
                      >
                        Tell Us About Your Project{" "}
                        <span className="text-fuchsia-400">*</span>
                      </label>

                      <div className="relative">
                        <MessageSquare
                          size={15}
                          className="pointer-events-none absolute left-3 top-3 text-slate-400"
                        />

                        <textarea
                          id="xtach-message"
                          required
                          minLength={10}
                          rows={4}
                          placeholder="Share your goals, requirements, or any specific details..."
                          value={form.message}
                          onChange={(e) =>
                            updateField("message", e.target.value)
                          }
                          className="min-h-[92px] w-full resize-y rounded-md border border-[#263150] bg-[#080e24]/85 py-2.5 pl-9 pr-3 text-[11px] leading-relaxed text-white outline-none transition-all duration-300 placeholder:text-[#7f8baa] focus:border-cyan-400/70 focus:bg-[#0c1630] sm:text-[12px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Demo success */}
                  {submitted && (
                    <div
                      role="status"
                      className="mt-3 flex items-center gap-2 rounded-md border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-[11px] text-cyan-200"
                    >
                      <CheckCircle2 size={14} />
                      UI preview complete. No message was sent.
                    </div>
                  )}

                  {/* Button */}
                  <motion.button
                    type="submit"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.01 }
                    }
                    whileTap={
                      reduceMotion ? undefined : { scale: 0.99 }
                    }
                    className="group mt-4 flex h-[43px] w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#a31ff1] via-[#6b57f5] to-[#06bfe9] text-[12px] font-semibold text-white shadow-[0_8px_25px_rgba(91,48,217,0.17)] transition-shadow hover:shadow-[0_10px_28px_rgba(38,153,244,0.24)]"
                  >
                    Send Message

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>

                  {/* Privacy */}
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[9px] leading-relaxed text-slate-400 sm:text-[10px]">
                    <LockKeyhole size={11} className="shrink-0 text-purple-300" />
                    UI preview only. No information is submitted.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
