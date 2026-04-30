import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description: "Pythogen - Focused software for calmer screens",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center pb-24">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 text-center md:pt-32 min-[1320px]:px-0">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl dark:text-white">
          Focused software for <br className="hidden md:block" /> calmer screens.
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400">
          Pythogen is a small independent software brand creating clean, useful apps that feel at home on the devices you already use.
        </p>
        <div className="flex gap-4">
          <Link
            href="/canvas"
            className="rounded-full bg-black px-8 py-3 font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            Explore Canvas
          </Link>
          <Link
            href="/about"
            className="rounded-full bg-neutral-100 px-8 py-3 font-medium text-black transition-transform hover:scale-105 dark:bg-neutral-800 dark:text-white"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Featured Product */}
      <section className="mx-auto mt-32 w-full max-w-7xl px-4 min-[1320px]:px-0">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-12 md:p-20">
              <span className="mb-4 text-sm font-semibold text-blue-500">Featured</span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white">
                Canvas for Mac
              </h2>
              <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
                Browse wallpapers, import your own, save favorites, and set up auto rotation. Everything stays on your Mac.
              </p>
              <Link
                href="/canvas"
                className="inline-flex w-fit items-center gap-2 font-medium text-blue-500 hover:text-blue-600"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="relative min-h-[400px] w-full">
              <Image
                src="/macbook screen with canvas logo.png"
                alt="Canvas for Mac"
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
