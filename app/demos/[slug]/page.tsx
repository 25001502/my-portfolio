import Link from "next/link";
import { notFound } from "next/navigation";
import { demos, getDemoBySlug } from "../registry";
import DemoRenderer from "./renderer";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return (
    <section
      data-theme="black"
      className="relative isolate min-h-screen overflow-hidden bg-[#060913] py-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_56px]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-[#FF3154]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium tracking-wide text-indigo-400">Live Demo</p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{demo.title}</h1>
            <p className="mt-3 max-w-3xl text-sm text-gray-300 sm:text-base">{demo.description}</p>
          </div>

          <Link
            href="/demos"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/5"
          >
            Back To Demos
          </Link>
        </div>

        <DemoRenderer slug={demo.slug} />
      </div>
    </section>
  );
}
