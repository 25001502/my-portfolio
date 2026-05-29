import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiBox,
  FiCreditCard,
  FiGrid,
  FiMessageSquare,
  FiMusic,
  FiTerminal,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { demos as demoRegistry } from "./registry";

export const metadata: Metadata = {
  title: "Interactive Demos | Thandululo Nengovhela",
  description:
    "Interactive frontend, AI, canvas, audio, and browser experience demos built by Thandululo Nengovhela.",
  alternates: {
    canonical: "/demos",
  },
  openGraph: {
    title: "Interactive Demos | Thandululo Nengovhela",
    description:
      "Interactive frontend, AI, canvas, audio, and browser experience demos built by Thandululo Nengovhela.",
    url: "/demos",
  },
};

type DemoItem = {
  slug: string;
  title: string;
  icon: IconType;
  iconWrapperClassName: string;
};

const demoCards: DemoItem[] = [
  {
    slug: "payment-integration",
    title: "Payment Integration",
    icon: FiCreditCard,
    iconWrapperClassName: "bg-emerald-500/20 text-emerald-300",
  },
  {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    icon: FiMessageSquare,
    iconWrapperClassName: "bg-sky-500/20 text-sky-300",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    icon: FiGrid,
    iconWrapperClassName: "bg-fuchsia-500/20 text-fuchsia-300",
  },
  {
    slug: "experience-3d",
    title: "3D Experience",
    icon: FiBox,
    iconWrapperClassName: "bg-orange-500/20 text-orange-300",
  },
  {
    slug: "particle-effects",
    title: "Particle Effects",
    icon: HiSparkles,
    iconWrapperClassName: "bg-amber-500/20 text-amber-300",
  },
  {
    slug: "audio-visualizer",
    title: "Audio Visualizer",
    icon: FiMusic,
    iconWrapperClassName: "bg-rose-500/20 text-rose-300",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    icon: HiSparkles,
    iconWrapperClassName: "bg-violet-500/20 text-violet-300",
  },
  {
    slug: "terminal-emulator",
    title: "Terminal Emulator",
    icon: FiTerminal,
    iconWrapperClassName: "bg-slate-500/20 text-slate-300",
  },
];

export default function DemosPage() {
  return (
    <section
      data-theme="black"
      className="relative isolate min-h-screen overflow-hidden bg-[#060913] py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-[#FF3154]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium tracking-wide text-indigo-400">Demos</p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">Interactive Playground</h1>
            <p className="mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
              A collection of live demos showcasing frontend interactions, AI experiences, and web experiments.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/5"
          >
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {demoCards.map((demoMeta) => {
            const config = demoRegistry.find((entry) => entry.slug === demoMeta.slug);
            if (!config) {
              return null;
            }

            const Icon = demoMeta.icon;

            return (
              <article
                key={config.slug}
                className="rounded-3xl border border-white/10 bg-black/45 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-black/60"
              >
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${demoMeta.iconWrapperClassName}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mb-3 text-2xl font-semibold leading-tight text-white">{config.title}</h2>

                <p className="min-h-[110px] text-base leading-relaxed text-gray-400">{config.description}</p>

                <div className="my-5 h-px bg-linear-to-r from-white/20 via-white/10 to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-lg font-medium text-emerald-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
                    Live
                  </span>

                  <Link
                    href={`/demos/${config.slug}`}
                    className="inline-flex items-center gap-2 text-lg font-medium text-white/80 transition hover:text-white"
                  >
                    Try it
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
