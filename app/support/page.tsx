import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Support | Pythogen",
  description: "Get help and learn how to use Pythogen apps.",
};

const articles = [
  {
    slug: "how-to-install",
    title: "How to install Canvas for Mac",
    description: "Steps to download and install Canvas on your macOS device.",
  },
  {
    slug: "macos-security-warning",
    title: "How to open Canvas if macOS blocks it",
    description: "What to do if macOS says Apple could not verify this app is free of malware.",
  },
  {
    slug: "how-to-add-imported-wallpapers",
    title: "How to add imported wallpapers",
    description: "Learn how to import and manage your custom wallpapers in Canvas.",
  },
  {
    slug: "how-to-use-live-wallpapers",
    title: "How to use live wallpapers",
    description: "Guide to setting up and running animated wallpapers on your desktop.",
  },
  {
    slug: "how-to-uninstall",
    title: "How to uninstall Canvas for Mac",
    description: "Completely remove Canvas and its local data from your Mac.",
  },
  {
    slug: "where-canvas-stores-imported-files",
    title: "Where Canvas stores imported files",
    description: "Information about local data storage and privacy.",
  },
  {
    slug: "why-imported-images-may-crop",
    title: "Why imported images may crop in preview",
    description: "Understanding aspect ratios and how Canvas formats images.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 md:px-6">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
          Support Center
        </h1>
        <p className="mb-6 text-xl text-neutral-500 dark:text-neutral-400">
          Guides and articles to help you get the most out of Pythogen apps.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Contact Us
        </Link>
      </div>

      <div className="mb-12 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <Image
          src="/support.png"
          alt="Support"
          width={1200}
          height={600}
          className="w-full object-cover"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/support/${article.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-500"
          >
            <div>
              <h2 className="mb-2 text-xl font-semibold text-black dark:text-white group-hover:text-blue-500">
                {article.title}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400">
                {article.description}
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-blue-500">
              Read article &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
