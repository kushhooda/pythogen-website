import Link from "next/link";

export const metadata = {
  title: "Contact Us | Pythogen",
  description: "Get in touch with the Pythogen team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
          Contact Us
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          Get in touch with the Pythogen team. We are here to help.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
              User Support
            </h2>
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
              For user help, bug reports, and app questions.
            </p>
          </div>
          <a
            href="mailto:support@pythogen.dev"
            className="text-blue-500 hover:underline font-medium"
          >
            support@pythogen.dev
          </a>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
              Founder
            </h2>
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
              For contacting the founder directly.
            </p>
          </div>
          <a
            href="mailto:founder@pythogen.dev"
            className="text-blue-500 hover:underline font-medium"
          >
            founder@pythogen.dev
          </a>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
              Privacy
            </h2>
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
              For privacy related issues and data requests.
            </p>
          </div>
          <a
            href="mailto:privacy@pythogen.dev"
            className="text-blue-500 hover:underline font-medium"
          >
            privacy@pythogen.dev
          </a>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-black dark:text-white">
              Legal
            </h2>
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
              For legal, copyright, and policy questions.
            </p>
          </div>
          <a
            href="mailto:legal@pythogen.dev"
            className="text-blue-500 hover:underline font-medium"
          >
            legal@pythogen.dev
          </a>
        </div>
      </div>
    </div>
  );
}
