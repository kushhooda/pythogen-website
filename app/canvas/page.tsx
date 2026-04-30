import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Canvas for Mac | Pythogen",
  description: "A native macOS wallpaper app by Pythogen.",
};

export default function CanvasPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center min-[1320px]:px-0">
        <Image
          src="/Canvas Icon White.png"
          alt="Canvas Logo"
          width={128}
          height={128}
          className="mb-8 hidden dark:block"
        />
        <Image
          src="/Canvas Icon Black.png"
          alt="Canvas Logo"
          width={128}
          height={128}
          className="mb-8 block dark:hidden"
        />
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl dark:text-white">
          Canvas for Mac
        </h1>
        <p className="mb-10 max-w-2xl text-xl text-neutral-500 dark:text-neutral-400">
          Your desktop should feel personal, calm, and easy to refresh. Browse, import, and set beautiful wallpapers natively.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/canvas/download"
            className="rounded-full bg-blue-500 px-8 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            Download Canvas
          </Link>
          <Link
            href="/changelog"
            className="rounded-full bg-neutral-100 px-8 py-3 font-medium text-black transition-transform hover:scale-105 dark:bg-neutral-800 dark:text-white"
          >
            What's New
          </Link>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="w-full bg-neutral-100 py-24 dark:bg-neutral-900">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black md:text-5xl dark:text-white">
                Natively simple.
              </h2>
              <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
                Canvas uses macOS controls to apply static wallpapers. This means your wallpaper is set through the system instead of through a messy workaround.
              </p>
              <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-3">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Support for bundled & imported wallpapers
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Local storage for privacy
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Experimental live wallpapers
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[500px]">
              <Image
                src="/macbook screen with canvas logo.png"
                alt="Canvas App Interface"
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
