import { notFound } from "next/navigation";
import Link from "next/link";

const blogData: Record<string, { title: string; date: string; category: string; content: React.ReactNode }> = {
  "introducing-canvas-for-mac": {
    title: "Introducing Canvas for Mac",
    date: "April 29, 2026",
    category: "News",
    content: (
      <>
        <p>Today we are excited to announce Canvas for Mac — the first app from Pythogen.</p>
        <p>Canvas is a native macOS wallpaper app built around a simple idea: your desktop should feel personal, calm, and easy to refresh. No accounts, no subscriptions, no tracking. Just wallpapers.</p>
        <p>With Canvas, you can browse a built-in gallery of curated wallpapers, import your own images (JPG, PNG, HEIC), save favorites, and even set up auto rotation so your desktop stays fresh without any effort.</p>
        <p>Canvas uses macOS system controls to apply wallpapers — no hacks, no workarounds. Static wallpapers are applied through the system and persist even after you close the app. For live wallpapers, Canvas includes an experimental engine that runs while the app is open.</p>
        <p>Everything stays local. Your imported wallpapers are stored in Canvas's Application Support folder on your Mac. Nothing is uploaded, nothing is tracked.</p>
        <p>Canvas for Mac is available now. Head over to the <a href="/canvas/download" className="text-blue-500 hover:underline">download page</a> to get started.</p>
      </>
    ),
  },
  "why-we-build-native-macos-apps": {
    title: "Why we build native macOS apps",
    date: "April 15, 2026",
    category: "Developer",
    content: (
      <>
        <p>When we started Pythogen, we had a choice to make: build cross-platform apps that run everywhere, or build native apps that feel right on one platform first.</p>
        <p>We chose native. Here is why.</p>
        <p>Cross-platform frameworks are great for shipping fast, but they come with tradeoffs. Animations feel slightly off. System integrations are limited. The app never quite feels like it belongs. For a wallpaper app that interacts directly with your desktop, those tradeoffs matter.</p>
        <p>macOS has excellent APIs for wallpaper management, file handling, and local storage. By building native, we can use these APIs directly instead of working around them. The result is an app that feels like it was made by Apple — not ported from somewhere else.</p>
        <p>Native also means better performance, smaller app size, and tighter integration with system preferences. Canvas launches fast, uses minimal memory, and respects your Mac's resources.</p>
        <p>We believe software should feel at home on the platform it runs on. That is why every Pythogen app starts native.</p>
      </>
    ),
  },
  "top-5-hidden-features-macos-sonoma": {
    title: "Top 5 hidden features in macOS Sonoma",
    date: "March 10, 2026",
    category: "Guides",
    content: (
      <>
        <p>macOS Sonoma brought a lot of headline features, but some of the best ones are easy to miss. Here are five hidden features worth trying.</p>
        <h3>1. Desktop Widgets</h3>
        <p>Sonoma lets you place widgets directly on your desktop. Click anywhere on the desktop, then select Edit Widgets from the context menu. Widgets fade into the background when you open an app, so they stay useful without getting in the way.</p>
        <h3>2. Game Mode</h3>
        <p>When you launch a full-screen game, macOS automatically enters Game Mode. This prioritizes GPU and CPU resources for the game and reduces latency for wireless controllers and AirPods.</p>
        <h3>3. Safari Profiles</h3>
        <p>You can now create separate Safari profiles for work and personal browsing. Each profile gets its own history, cookies, extensions, and tab groups. Go to Safari → Settings → Profiles to set them up.</p>
        <h3>4. Presenter Overlay</h3>
        <p>During video calls, Presenter Overlay places you in front of your shared screen. There are two modes: a small floating window or a large overlay where your content appears behind you.</p>
        <h3>5. Slow Motion Screen Savers</h3>
        <p>Sonoma added beautiful slow-motion video screen savers shot in locations around the world. These play when your Mac is locked and transition smoothly into your desktop wallpaper when you log in.</p>
      </>
    ),
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return {
      title: "Not Found | Pythogen",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Pythogen`,
    description: post.title,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-8">
        <Link href="/blog" className="text-sm font-medium text-blue-500 hover:text-blue-600">
          &larr; Back to Blog
        </Link>
      </div>
      <div className="mb-6 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-black dark:bg-neutral-800 dark:text-white">
          {post.category}
        </span>
        <time>{post.date}</time>
      </div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post.title}
      </h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}
