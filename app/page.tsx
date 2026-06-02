import { Cpu, Sigma, ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#020617] font-sans text-slate-200">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <header className="relative z-10 mb-12 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 shadow-lg shadow-indigo-500/5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">
              Minia University • Faculty of Science
            </span>
          </div>
          <h1 className="text-balance bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl">
            Smart Exam Portal
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 md:text-base">
            Choose the subject you want to study and practice past exams in an interactive system
            with instant grading, scores, and model solutions. Each subject has its own portal with
            the same premium experience.
          </p>
        </header>

        <section className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Computer Science card */}
          <a
            href="/comp102.html"
            className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md">
                <Cpu className="h-7 w-7" />
              </div>
              <span className="rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                COMP102
              </span>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-bold tracking-tight text-slate-50">Computer Science</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                C++ exams: loops, functions, recursion, and arrays — true/false, multiple choice,
                and output-tracing questions.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-indigo-400 transition-colors group-hover:text-indigo-300">
              <span>Enter Portal</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>

          {/* Mathematics card */}
          <a
            href="/math102.html"
            className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md">
                <Sigma className="h-7 w-7" />
              </div>
              <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                MATH102
              </span>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl font-bold tracking-tight text-slate-50">Mathematics</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Limits & continuity, differentiation, integration & its applications, and series —
                with beautifully typeset equations and model solutions.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-emerald-400 transition-colors group-hover:text-emerald-300">
              <span>Enter Portal</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 border-t border-slate-800/40 bg-slate-900/40 px-6 py-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 shadow-lg">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300 md:text-xs">
              Minia University • Faculty of Science
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400 opacity-80">
              Made With Passion By
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 md:flex-row md:gap-6">
              <h2 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-2xl font-black tracking-wide text-transparent md:text-4xl">
                ENG: ABO ANWER
              </h2>
              <span className="hidden text-2xl font-light text-slate-500 md:block">|</span>
              <h2 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-black tracking-wide text-transparent md:text-4xl">
                ENG: HAMZA KAFAFI
              </h2>
            </div>
          </div>
          <div className="my-2 h-[2px] w-40 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 opacity-70">
            © 2026 Premium Portal • First Level IT
          </p>
        </div>
      </footer>
    </main>
  )
}
