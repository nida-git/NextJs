export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#312e81_0%,#0f172a_35%,#020617_100%)] px-4 py-8 text-slate-900 md:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-indigo-950/40 backdrop-blur-md lg:grid-cols-[1.1fr_0.9fr]">
        <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-600 p-8 text-white md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_35%)]" />

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-100">
              Limited time
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Save 40% on your first premium plan
            </h1>
            <p className="mt-4 max-w-md text-base text-violet-50/90 md:text-lg">
              Join today and unlock exclusive tools, priority support, and a
              faster workflow for your team.
            </p>
          </div>

          <div className="relative z-10 mt-8 space-y-5 rounded-2xl border border-white/15 bg-slate-950/10 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-violet-100/80">Special offer</p>
                <p className="text-3xl font-bold">50% OFF</p>
              </div>
              <div className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-black text-slate-900 shadow-lg shadow-yellow-200/30">
                Code: WELCOME50
              </div>
            </div>
            <p className="text-sm text-violet-100/80">
              Use this offer before the end of this month and get instant access
              to your upgrade.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center bg-slate-50 p-6 md:p-10">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </div>
  );
}
