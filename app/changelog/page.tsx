import { NewsletterForm } from "components/newsletter-form";

export const metadata = {
  title: "What's New | Pythogen",
  description: "Latest Pythogen releases, improvements, and fixes.",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          What’s New
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          Stay up to date with the latest Pythogen releases, improvements, and fixes.
        </p>
      </div>

      <div className="mb-16 border-b border-neutral-200 pb-16 dark:border-neutral-800">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Canvas for Mac
          </h2>
          <div className="flex gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-800">macOS</span>
            <span className="rounded-md bg-blue-100 px-2 py-1 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Early release</span>
          </div>
        </div>

        <p className="mb-8 font-medium text-neutral-600 dark:text-neutral-300">
          Latest version: 1.0.0
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h3>Highlights</h3>
          <ul>
            <li>Added a clean wallpaper browsing experience.</li>
            <li>Added support for imported wallpapers.</li>
            <li>Added live wallpaper preview support.</li>
            <li>Improved layout handling for large, vertical, and ultra-wide images.</li>
            <li>Added a dedicated Live Wallpapers section.</li>
            <li>Improved preview cards with title, file details, and format information.</li>
            <li>Improved app stability and visual polish.</li>
          </ul>

          <h3>Recent improvements</h3>
          <ul>
            <li>Better handling for imported static images.</li>
            <li>More reliable wallpaper preview sizing.</li>
            <li>Cleaner selected wallpaper details.</li>
            <li>Improved live wallpaper thumbnail generation.</li>
            <li>Better organization for local app assets.</li>
          </ul>

          <h3>Coming next</h3>
          <ul>
            <li>More wallpaper customization options.</li>
            <li>Improved live wallpaper controls.</li>
            <li>Better first-launch experience.</li>
            <li>More polished settings and app preferences.</li>
            <li>Additional stability improvements.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">Want updates?</h2>
        <p className="mb-6 text-neutral-500 dark:text-neutral-400">
          Subscribe to Pythogen updates to receive release notes, new app announcements, and important product news.
        </p>
        <NewsletterForm 
          className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
          inputClassName="w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-black dark:text-white"
          buttonClassName="rounded-md bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          buttonText="Subscribe"
        />
        <div className="mt-6 text-sm text-neutral-500">
          Contact: <a href="mailto:updates@pythogen.dev" className="text-blue-500 hover:underline">updates@pythogen.dev</a>
        </div>
      </div>
    </div>
  );
}
