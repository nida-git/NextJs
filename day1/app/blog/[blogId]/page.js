export default async function blogPage({ params }) {
  const { blogId } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`,
    { cache: "no-store" },
  );

  const data = response.ok ? await response.json() : null;
  const post = data || {
    title: "Post not found",
    body: "The requested blog post could not be loaded. Please try again later.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium text-indigo-700">
          <span className="rounded-full bg-indigo-100 px-3 py-1">
            Blog Post
          </span>
          <span className="text-slate-500">#{blogId}</span>
        </div>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_60px_-30px_rgba(79,70,229,0.35)]">
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 px-6 py-10 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
              Featured story
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                Read time: 4 min
              </span>
              <span>Author: City Explorer</span>
              <span>Updated today</span>
            </div>

            <div className="prose prose-slate max-w-none text-lg leading-8 text-slate-700">
              <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-indigo-600">
                {post.body}
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Highlights
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• Built for easy reading and strong visual hierarchy.</li>
                <li>• Designed to feel premium and modern using Tailwind.</li>
                <li>
                  • Responsive across mobile, tablet, and desktop screens.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Back to home
              </a>
              <a
                href="/blog"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Explore more posts
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
