import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Download Canvas | Pythogen",
  description: "Download Canvas for Mac.",
};

export default function DownloadPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <Image
        src="/Canvas Icon White.png"
        alt="Canvas Logo"
        width={96}
        height={96}
        className="mb-8 hidden dark:block"
      />
      <Image
        src="/Canvas Icon Black.png"
        alt="Canvas Logo"
        width={96}
        height={96}
        className="mb-8 block dark:hidden"
      />
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
        Download Canvas
      </h1>
      <p className="mb-10 text-xl text-neutral-500 dark:text-neutral-400">
        v0.04 &middot; macOS 13.0 or later
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="/downloads/Canvas-Intel.dmg"
          className="rounded-full bg-blue-500 px-8 py-3 font-medium text-white transition-transform hover:scale-105"
          download
        >
          Download for Intel Mac
        </a>
        <a
          href="/downloads/Canvas.dmg"
          className="rounded-full bg-blue-500 px-8 py-3 font-medium text-white transition-transform hover:scale-105"
          download
        >
          Download for Apple Silicon
        </a>
      </div>

      <div className="mt-12 text-sm text-neutral-500">
        By downloading, you agree to our <Link href="/terms" className="underline">Terms of Use</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </div>
    </div>
  );
}
