
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  MessageCircle,
  MessageSquare,
  Send,
  X,
  ArrowLeft,
  Sparkles,
  Bot,
  ChevronDown,
  Headphones,
  ArrowRight,
} from "lucide-react";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

type Screen = "home" | "chat";

const WELCOME_MESSAGE =
  "Welcome to XTACH! 👋 I'm your virtual assistant. How can I help you today?";

const FAQS = [
  {
    id: 1,
    question: "What services does XTACH offer?",
    answer:
      "XTACH provides brand design, website and application development, digital marketing, CRM systems, AI model development, AI voice overs, AI automation, and SaaS development.",
  },
  {
    id: 2,
    question: "How can I start a project?",
    answer:
      "Starting a project is easy! Visit our Contact page, tell us about your idea and requirements, and our team can discuss the next steps with you.",
  },
  {
    id: 3,
    question: "Does XTACH provide AI solutions?",
    answer:
      "Absolutely! XTACH offers AI model development, intelligent automation, AI agents, workflow integrations, and AI voice solutions to help businesses work smarter.",
  },
];

export default function XTACHChatbot() {
  const reduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: WELCOME_MESSAGE },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageIdRef = useRef(2);

  useEffect(() => {
    if (isOpen && screen === "chat") {
      messagesEndRef.current?.scrollIntoView({
        behavior: reduceMotion ? "instant" : "smooth",
        block: "end",
      });
    }
  }, [messages, isTyping, screen, isOpen, reduceMotion]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) {
        clearTimeout(replyTimerRef.current);
      }
    };
  }, []);

  function handleQuestion(id: number) {
    if (isTyping || selectedQuestions.includes(id)) return;

    const faq = FAQS.find((item) => item.id === id);
    if (!faq) return;

    setScreen("chat");
    setSelectedQuestions((previous) => [...previous, id]);

    setMessages((previous) => [
      ...previous,
      {
        id: messageIdRef.current++,
        sender: "user",
        text: faq.question,
      },
    ]);

    setIsTyping(true);

    replyTimerRef.current = setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: messageIdRef.current++,
          sender: "bot",
          text: faq.answer,
        },
      ]);

      setIsTyping(false);
      replyTimerRef.current = null;
    }, 850);
  }

  function resetChat() {
    if (replyTimerRef.current) {
      clearTimeout(replyTimerRef.current);
      replyTimerRef.current = null;
    }

    setMessages([
      { id: 1, sender: "bot", text: WELCOME_MESSAGE },
    ]);

    messageIdRef.current = 2;
    setSelectedQuestions([]);
    setIsTyping(false);
    setScreen("home");
  }

  const remainingQuestions = FAQS.filter(
    (faq) => !selectedQuestions.includes(faq.id)
  );

  return (
    <>
      {/* FLOATING BUTTON — ALWAYS BOTTOM RIGHT */}
      <div
        className="fixed bottom-5 right-5 z-[9999] sm:bottom-7 sm:right-7"
        style={{ left: "auto" }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {!reduceMotion && (
                <motion.div
                  className="pointer-events-none absolute -inset-2 rounded-full border border-purple-400/40"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                aria-label="Open XTACH support chat"
                aria-expanded={false}
                className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-500 text-white shadow-[0_10px_35px_rgba(139,92,246,0.45)] sm:h-[64px] sm:w-[64px]"
              >
                <MessageCircle size={27} strokeWidth={2} />

                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#050819] bg-rose-500 text-[11px] font-bold">
                  1
                </span>
              </motion.button>

              <motion.div
                animate={
                  reduceMotion ? undefined : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[78px] right-0 whitespace-nowrap rounded-xl border border-purple-400/20 bg-[#11142c] px-4 py-2.5 text-[12px] font-medium text-white shadow-xl"
              >
                <span className="mr-2">👋</span>
                Need help? Chat with us!

                <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-purple-400/20 bg-[#11142c]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CHAT WINDOW — ALWAYS BOTTOM RIGHT */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30, scale: 0.94 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{
              type: "spring",
              stiffness: 270,
              damping: 27,
            }}
            aria-label="XTACH customer support"
            className="fixed bottom-3 right-3 z-[9999] flex h-[min(590px,calc(100dvh-24px))] w-[calc(100vw-24px)] max-w-[390px] flex-col overflow-hidden rounded-[22px] border border-purple-400/25 bg-[#090d20] text-white shadow-[0_20px_90px_rgba(0,0,0,0.65)] sm:bottom-7 sm:right-7 sm:h-[570px]"
            style={{ left: "auto" }}
          >
            {/* HEADER */}
            <div className="relative shrink-0 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#29114e] via-[#151039] to-[#071c34] px-5 pb-5 pt-5">
              <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-purple-500/20 blur-[50px]" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {screen === "chat" && (
                    <button
                      type="button"
                      onClick={() => setScreen("home")}
                      aria-label="Back to welcome screen"
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      <ArrowLeft size={19} />
                    </button>
                  )}

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/20">
                    <Sparkles size={21} className="text-cyan-300" />
                  </div>

                  <div>
                    <h2 className="text-[15px] font-bold tracking-wide">
                      XTACH Support
                    </h2>

                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close support chat"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              {screen === "home" && (
                <motion.div
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative mt-8"
                >
                  <h3 className="text-[28px] font-bold tracking-tight">
                    Hi there 👋
                  </h3>

                  <p className="mt-3 max-w-[290px] text-[13px] leading-6 text-slate-300">
                    Welcome to XTACH. Have a question?
                    We&apos;re here to help you explore
                    what&apos;s possible.
                  </p>
                </motion.div>
              )}
            </div>

            {/* HOME SCREEN */}
            {screen === "home" && (
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-5">
                <motion.button
                  type="button"
                  onClick={() => setScreen("chat")}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-purple-400/25 bg-[#141a35] p-4 text-left transition-colors hover:border-purple-400/60 hover:bg-[#1b2144]"
                >
                  <div>
                    <h4 className="text-[14px] font-semibold">
                      Start a Conversation
                    </h4>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Get instant answers to common questions
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500">
                    <Send size={17} />
                  </div>
                </motion.button>

                <div className="mt-7">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                    How can we help?
                  </p>

                  <div className="space-y-2">
                    {FAQS.map((faq) => (
                      <button
                        key={faq.id}
                        type="button"
                        onClick={() => handleQuestion(faq.id)}
                        disabled={isTyping || selectedQuestions.includes(faq.id)}
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-[12px] text-slate-200 transition-all hover:border-cyan-400/35 hover:bg-white/[0.07] disabled:opacity-50"
                      >
                        {faq.question}
                        <ArrowRight
                          size={15}
                          className="shrink-0 text-cyan-300"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 text-center">
                  <p className="text-[10px] text-slate-500">
                    Powered by XTACH Digital Innovation
                  </p>
                </div>
              </div>
            )}

            {/* CHAT SCREEN */}
            {screen === "chat" && (
              <>
                <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 [scrollbar-width:thin] [scrollbar-color:#45376d_transparent]">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, y: 12 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/20">
                          <Bot size={16} className="text-purple-300" />
                        </div>
                      )}

                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-[12px] leading-[1.75] ${
                          message.sender === "user"
                            ? "rounded-br-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                            : "rounded-bl-md border border-white/10 bg-[#171c36] text-slate-200"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                        <Bot size={16} className="text-purple-300" />
                      </div>

                      <div className="flex gap-1 rounded-2xl bg-[#171c36] px-4 py-3">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-purple-300"
                            animate={
                              reduceMotion
                                ? undefined
                                : { y: [0, -4, 0] }
                            }
                            transition={{
                              duration: 0.8,
                              delay: i * 0.15,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* SUGGESTED QUESTIONS */}
                <div className="shrink-0 border-t border-white/10 bg-[#0d1228] px-4 py-3">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Suggested questions
                  </p>

                  <div className="flex max-h-[110px] flex-col gap-2 overflow-y-auto">
                    {remainingQuestions.map((faq) => (
                      <button
                        key={faq.id}
                        type="button"
                        disabled={isTyping}
                        onClick={() => handleQuestion(faq.id)}
                        className="w-full rounded-lg border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-left text-[11px] text-purple-200 transition-colors hover:border-purple-400/50 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {faq.question}
                      </button>
                    ))}

                    {remainingQuestions.length === 0 && (
                      <p className="py-2 text-[11px] text-slate-400">
                        You&apos;ve explored all three questions.
                      </p>
                    )}
                  </div>
                </div>

                {/* CHAT FOOTER */}
                <div className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#090d20] px-4 py-3">
                  

                  <button
                    type="button"
                    onClick={resetChat}
                    className="text-[11px] font-medium text-purple-300 transition-colors hover:text-white"
                  >
                    Restart Chat
                  </button>
                </div>
              </>
            )}

            {/* BOTTOM NAVIGATION */}
            <div className="flex shrink-0 items-center justify-around border-t border-white/10 bg-[#0c1025] py-3">
              <button
                type="button"
                onClick={() => setScreen("home")}
                className={`flex flex-col items-center gap-1 text-[10px] ${
                  screen === "home"
                    ? "text-cyan-300"
                    : "text-slate-500"
                }`}
              >
                <Sparkles size={18} />
                Home
              </button>

              <button
                type="button"
                onClick={() => setScreen("chat")}
                className={`flex flex-col items-center gap-1 text-[10px] ${
                  screen === "chat"
                    ? "text-cyan-300"
                    : "text-slate-500"
                }`}
              >
                <MessageSquare size={18} />
                Messages
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-1 text-[10px] text-slate-500 transition-colors hover:text-white"
              >
                <ChevronDown size={18} />
                Minimize
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
