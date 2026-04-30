import Link from "next/link";
import { NewsletterForm } from "components/newsletter-form";

export const metadata = {
  title: "Blog | Pythogen",
  description: "Latest news, guides, and tutorials for Mac users.",
};

const posts = [
  {
    id: 1,
    slug: "introducing-canvas-for-mac",
    title: "Introducing Canvas for Mac",
    date: "April 29, 2026",
    category: "News",
    summary: "Today we are excited to announce our first product, Canvas for Mac. A native wallpaper app built for simpler desktop customization.",
  },
  {
    id: 2,
    slug: "why-we-build-native-macos-apps",
    title: "Why we build native macOS apps",
    date: "April 15, 2026",
    category: "Developer",
    summary: "Our philosophy on software development and why we chose to focus on building apps that feel right at home on your Mac.",
  },
  {
    id: 3,
    slug: "top-5-hidden-features-macos-sonoma",
    title: "Top 5 hidden features in macOS Sonoma",
    date: "March 10, 2026",
    category: "Guides",
    summary: "Discover some of the lesser-known features in the latest macOS update that can boost your productivity.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 md:px-6">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Pythogen Blog
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          Latest news, guides, and tutorials for Mac users.
        </p>
      </div>

      <div className="mb-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-md">
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">Subscribe to our newsletter</h2>
            <p className="text-neutral-500 dark:text-neutral-400">Get the latest news, tutorials, and exclusive deals delivered right to your inbox.</p>
          </div>
          <NewsletterForm 
            className="flex w-full md:w-auto flex-col sm:flex-row gap-2"
            inputClassName="rounded-md border border-neutral-300 px-4 py-2 min-w-[250px] focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-black dark:text-white"
            buttonClassName="rounded-md bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            buttonText="Subscribe"
          />
        </div>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group flex flex-col gap-2 border-b border-neutral-200 pb-12 dark:border-neutral-800 last:border-0 last:pb-0">
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-black dark:bg-neutral-800 dark:text-white">
                {post.category}
              </span>
              <time>{post.date}</time>
            </div>
            <h2 className="text-2xl font-bold text-black group-hover:text-blue-500 dark:text-white">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              {post.summary}
            </p>
            <Link href={`/blog/${post.slug}`} className="mt-2 font-medium text-blue-500 hover:underline">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
