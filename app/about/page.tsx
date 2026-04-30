import Image from "next/image";

export const metadata = {
  title: "About Pythogen",
  description: "Pythogen builds focused software for calmer screens.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-12 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <Image
          src="/macbook screen with pythogen logo.png"
          alt="Pythogen"
          width={1200}
          height={630}
          className="w-full object-cover"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>Pythogen builds focused software for calmer screens.</h1>

        <p>
          Pythogen is a small independent software brand creating clean, useful apps that feel at home on the devices people already use. The goal is simple: build software that solves real problems without turning every feature into a subscription, dashboard, account system, or distraction.
        </p>

        <p>
          The first Pythogen app is <strong>Canvas for Mac</strong>, a wallpaper app for macOS built around a simple idea: your desktop should feel personal, calm, and easy to refresh. Canvas lets users browse wallpapers, import their own images, save favorites, use auto rotation, and experiment with live wallpapers while keeping the experience local and private.
        </p>

        <h2>Pythogen’s approach is shaped around a few core principles.</h2>

        <p>
          <strong>Apps should be useful before they are paid.</strong> The main experience should feel complete, not like a locked demo. If extra features are added later, they should add real value instead of blocking the basic purpose of the app.
        </p>

        <p>
          <strong>Apps should be private by default.</strong> Canvas for Mac does not need accounts, ads, or tracking to work. Preferences and imported wallpapers are stored locally on the user’s Mac. Pythogen apps are designed to avoid unnecessary data collection whenever possible.
        </p>

        <p>
          <strong>Apps should feel native and polished.</strong> A Mac app should feel like it belongs on macOS. A student app should feel like it understands the way students actually plan, study, and manage pressure. A delivery app should feel fast, clear, and useful for real customers and local businesses. Pythogen focuses on small details because small details are what make software feel trustworthy.
        </p>

        <p>
          <strong>Apps should stay simple without feeling empty.</strong> Good software does not need to overwhelm users with ten menus before it becomes useful. Pythogen products aim to be clean on the surface, but thoughtful underneath.
        </p>
      </div>
    </div>
  );
}
