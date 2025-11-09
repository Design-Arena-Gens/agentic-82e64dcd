import Link from "next/link";
import WordCarousel from "@/components/WordCarousel";
import RealtimeClock from "@/components/RealtimeClock";

const highlights = [
  {
    title: "Instant Rapport",
    description:
      "Begin every conversation with warmth. Friendly cues, contextual greetings, and responsive motion create a welcoming launchpad."
  },
  {
    title: "Signal Intelligence",
    description:
      "Real-time updates, live status indicators, and ambient detail build trust without overwhelming your visitors."
  },
  {
    title: "Delightful Details",
    description:
      "Micro-interactions, gradients, and soft glows keep the interface feeling alive—subtle, not noisy."
  }
];

const steps = [
  {
    title: "Say hello",
    points: [
      "Tap send on your greeting and let the agent unravel the conversation.",
      "Tone detection keeps the energy matched and genuine."
    ]
  },
  {
    title: "Shape the flow",
    points: [
      "The agent proposes next steps and surfaces relevant context automatically.",
      "Friendly suggestions nudge the dialogue forward with confidence."
    ]
  },
  {
    title: "Launch outcomes",
    points: [
      "Action cards turn intent into scheduled meetings, tasks, or follow ups.",
      "Integrations ship results into your existing tools instantly."
    ]
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary-500/30 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-24 md:px-10 lg:px-20">
        <header className="mb-20 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-sm uppercase tracking-[0.4em] text-primary-200">agentic</span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-50 md:text-6xl">
              Hi there — you&apos;re already connected to something <WordCarousel />.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Each greeting should feel like a handshake, not a support ticket. This digital
              welcome desk captures that energy and keeps your conversations flowing.
            </p>
          </div>
          <RealtimeClock />
        </header>

        <section className="glass relative overflow-hidden rounded-3xl p-10">
          <div className="absolute -top-20 right-16 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/80" />
          <div className="relative grid gap-10 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="flex flex-col gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-200">
                  <span className="text-lg">★</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-100">{item.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-start">
          <div className="glass relative overflow-hidden rounded-3xl p-10">
            <div className="absolute -left-20 top-24 h-40 w-40 rounded-full bg-primary-400/20 blur-3xl" />
            <div className="relative space-y-7">
              <span className="text-sm uppercase tracking-[0.35em] text-primary-200">
                Conversation architecture
              </span>
              <h2 className="section-heading">Craft the welcome, orchestrate the journey.</h2>
              <p className="text-base leading-relaxed text-slate-300">
                We distilled the onboarding flow into approachable layers. Each card combines a
                user comfort insight with a suggested action so your automations always feel
                human-first.
              </p>
              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-primary-900/20"
                  >
                    <span className="mb-3 block text-xs uppercase tracking-[0.35em] text-primary-300">
                      Step {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {step.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-primary-900/40">
              <h3 className="text-lg font-semibold text-slate-100">Why launch now?</h3>
              <p className="mt-3 text-sm text-slate-300">
                Conversations begin in seconds. The difference is how intentional your first
                impression feels. Deliver empathetic automation and measure the lift in
                satisfaction and conversion instantly.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">
                  <span className="rounded-full bg-primary-500/25 px-3 py-1 text-xs uppercase tracking-wide text-primary-100">
                    signal
                  </span>
                  <p className="text-sm text-slate-200">
                    87% of users said the opening message felt friendlier than their last live chat.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">
                  <span className="rounded-full bg-primary-500/25 px-3 py-1 text-xs uppercase tracking-wide text-primary-100">
                    focus
                  </span>
                  <p className="text-sm text-slate-200">
                    Onboarding time drops from minutes to seconds, letting your team focus on the
                    conversations that matter most.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary-600/70 via-primary-500/70 to-primary-700/80 p-[1px]">
              <div className="rounded-3xl bg-slate-950 p-8">
                <h3 className="text-lg font-semibold text-slate-100">
                  Plug this welcome into your stack
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Ship to Vercel, wire into your favorite CRM, and watch the handshake scale itself.
                </p>
                <Link
                  href="https://agentic-82e64dcd.vercel.app"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                >
                  View live deployment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 flex flex-col items-center gap-4 pb-10 text-center text-sm text-slate-400">
          <p>
            Crafted autonomously with Next.js, Tailwind CSS, and a hint of midnight gradients. Say
            hi anytime.
          </p>
          <Link
            href="mailto:hello@agentic.space"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-5 py-2 text-xs uppercase tracking-[0.35em] text-slate-200 transition hover:border-primary-300/40 hover:text-primary-200"
          >
            <span className="h-2 w-2 rounded-full bg-primary-300" />
            keep the conversation going
          </Link>
        </footer>
      </section>
    </main>
  );
}
