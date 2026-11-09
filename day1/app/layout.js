import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hyderabad", label: "Hyderabad" },
  { href: "/mumbai", label: "Mumbai" },
  { href: "/signin", label: "Sign in" },
  { href: "/signup", label: "Sign up" },
];

export const metadata = {
  title: "City Explorer",
  description: "Travel and city discovery website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-100 text-slate-900">
        <header className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-indigo-700"
            >
              CityExplorer
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/auth/signin"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-200">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-lg font-bold text-white">CityExplorer</h2>
              <p className="mt-3 text-sm text-slate-400">
                Discover amazing places, stories, and experiences across vibrant
                cities.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Explore
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/hyderabad" className="hover:text-white">
                    Hyderabad
                  </Link>
                </li>
                <li>
                  <Link href="/mumbai" className="hover:text-white">
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className="hover:text-white">
                    Create account
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Contact
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>hello@cityexplorer.com</li>
                <li>+91 98765 43210</li>
                <li>India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
            © 2026 CityExplorer. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
