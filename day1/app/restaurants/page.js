"use client";

import { useEffect, useState } from "react";

export default function RestaurantsPage() {
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);

  const onClickHandler = () => {
    setData("Hello World");
  };

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-30px_rgba(79,70,229,0.35)] sm:p-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Dining
          </span>
          <span className="text-sm text-slate-500">
            {time !== null
              ? `Updated: ${new Date(time).toLocaleTimeString()}`
              : "Loading..."}
          </span>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Restaurants
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Welcome to the restaurants page. Explore the best dining options in
          your area and discover new favorites for every mood and occasion.
        </p>

        <button
          onClick={onClickHandler}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Explore Restaurants
        </button>

        {data !== null && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {data}
          </div>
        )}
      </div>
    </main>
  );
}
