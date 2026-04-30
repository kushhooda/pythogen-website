import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Store | Pythogen",
  description: "Browse all Pythogen products.",
};

const products = [
  {
    id: "canvas",
    name: "Canvas for Mac",
    description: "A native macOS wallpaper app. Your desktop should feel personal, calm, and easy to refresh.",
    image: "/macbook screen with canvas logo.png",
    price: "Free",
    link: "/canvas",
  },
];

export default function StorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 min-[1320px]:px-0">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Pythogen Store
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Clean, useful apps that feel at home on the devices you already use.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.link}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-blue-500 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-500"
          >
            <div className="relative aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-500">
                  {product.name}
                </h2>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-black dark:bg-neutral-800 dark:text-white">
                  {product.price}
                </span>
              </div>
              <p className="mb-6 flex-1 text-neutral-500 dark:text-neutral-400">
                {product.description}
              </p>
              <div className="font-medium text-blue-500">
                View details &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
