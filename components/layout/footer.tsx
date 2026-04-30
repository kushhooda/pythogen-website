import Link from "next/link";
import { NewsletterForm } from "components/newsletter-form";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-100 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 md:px-4 min-[1320px]:px-0">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h2 className="mb-2 text-lg font-bold text-black dark:text-white">Newsletter</h2>
              <p className="text-neutral-500 max-w-xs">Be the first to know about Pythogen sales and new app releases.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl border-t border-neutral-200 px-6 py-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Store</h3>
            <Link href="/store" className="hover:underline">Store</Link>
            <Link href="/canvas/download" className="hover:underline">Download Canvas</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Canvas</h3>
            <Link href="/canvas" className="hover:underline">Overview</Link>
            <Link href="/canvas/download" className="hover:underline">Download</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Applications</h3>
            <Link href="/canvas" className="hover:underline">Canvas</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Company</h3>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Support</h3>
            <Link href="/support" className="hover:underline">Support Center</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-black dark:text-white">Blog</h3>
            <Link href="/blog" className="hover:underline">Pythogen Blog</Link>
            <Link href="/blog" className="hover:underline">News</Link>
            <Link href="/blog" className="hover:underline">Developer</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-xs dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-4 min-[1320px]:px-0">
          <p>Copyright &copy; 2026 Pythogen. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/license" className="hover:underline">License</Link>
            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
