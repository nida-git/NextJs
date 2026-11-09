export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-4 py-16">
      <div className="w-full max-w-4xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80 md:p-12">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            Explore the best of India
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Welcome to CityExplorer
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Discover vibrant stories, iconic destinations, and local culture
            from the cities that inspire your next journey.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              City
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Hyderabad
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A blend of heritage, food, and modern innovation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              City
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Mumbai</h2>
            <p className="mt-2 text-sm text-slate-600">
              The financial capital buzzing with energy and culture.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Get started
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Join us</h2>
            <p className="mt-2 text-sm text-slate-600">
              Create your account and unlock your next adventure.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
