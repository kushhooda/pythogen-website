import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Pythogen",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-500 dark:text-neutral-400"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-white">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
        Page Not Found
      </h2>
      <p className="mb-10 max-w-md text-neutral-500 dark:text-neutral-400">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-black px-8 py-3 font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
        >
          Go back Home
        </Link>
        <Link
          href="/support"
          className="rounded-full bg-neutral-100 px-8 py-3 font-medium text-black transition-transform hover:scale-105 dark:bg-neutral-800 dark:text-white"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
