import { notFound } from "next/navigation";
import Link from "next/link";

const articleData: Record<string, { title: string; description?: string; content: React.ReactNode }> = {
  "how-to-install": {
    title: "How to install Canvas for Mac",
    description: "Steps to download and install Canvas on your macOS device.",
    content: (
      <>
        <p>Installing Canvas for Mac is simple and only takes a few seconds.</p>
        <ol>
          <li>Download the latest version of Canvas from our <a href="/canvas/download" className="text-blue-500 hover:underline">official download page</a>.</li>
          <li>Once the download finishes, open the downloaded <strong>.dmg</strong> file (e.g., <code>Canvas-1.0.0.dmg</code>).</li>
          <li>A window will appear showing the Canvas app icon and an Applications folder shortcut.</li>
          <li><strong>Drag the Canvas icon</strong> into the Applications folder.</li>
          <li>You can now close the installer window and eject the DMG file from your desktop.</li>
          <li>Open Finder, go to Applications, and double-click <strong>Canvas</strong> to launch it.</li>
        </ol>
        <p>If you see a security warning when opening the app for the first time, please see our guide on <Link href="/support/macos-security-warning" className="text-blue-500 hover:underline">how to open Canvas if macOS blocks it</Link>.</p>
      </>
    )
  },
  "macos-security-warning": {
    title: "How to open Canvas if macOS blocks it",
    description: "What to do if macOS says Apple could not verify this app is free of malware.",
    content: (
      <>
        <p>If macOS shows a warning when opening Canvas for Mac, it usually means the app could not be fully verified by Apple at the time you opened it.</p>
        <p>Important: only continue if you downloaded the app directly from the official Pythogen website: <a href="https://pythogen.dev" className="text-blue-500 hover:underline">pythogen.dev</a>.</p>
        
        <h3>How to open the app on macOS</h3>
        <p>If you trust the app and downloaded it from pythogen.dev:</p>
        <ol>
          <li>Open <strong>System Settings</strong>.</li>
          <li>Go to <strong>Privacy & Security</strong>.</li>
          <li>Scroll down to the security message about the app.</li>
          <li>Click <strong>Open Anyway</strong>.</li>
          <li>Confirm that you want to open it.</li>
        </ol>
        <p>You can also try right-clicking the app icon in Finder and choosing <strong>Open</strong>. macOS may then show an option to open the app anyway.</p>
      </>
    ),
  },
  "how-to-add-imported-wallpapers": {
    title: "How to add imported wallpapers",
    description: "Learn how to import and manage your custom wallpapers in Canvas.",
    content: (
      <>
        <p>Canvas for Mac lets you bring your own wallpapers into the app so you can keep your desktop library organized locally on your Mac.</p>
        <p>To import a wallpaper, open Canvas and click the <strong>Import</strong> button from the gallery. Choose an image file from your Mac (supported formats include JPG, PNG, and HEIC). After importing, the wallpaper appears in your gallery under the <em>Imported</em> category.</p>
        <p>When you import a wallpaper, Canvas securely copies it into its own local folder so it doesn't get lost if you delete the original download.</p>
      </>
    )
  },
  "how-to-use-live-wallpapers": {
    title: "How to use live wallpapers",
    description: "Guide to setting up and running animated wallpapers on your desktop.",
    content: (
      <>
        <p>Canvas includes an experimental live wallpaper engine that brings animated backgrounds to your Mac.</p>
        <p>To use a live wallpaper, simply select any wallpaper with the "Live" tag in the Canvas gallery and click <strong>Set as Wallpaper</strong>.</p>
        <p><strong>Note:</strong> Live wallpapers require Canvas to stay open in the background while they are running. If you quit Canvas, the live wallpaper will stop and revert to a static image or your previous system wallpaper. Static wallpapers, however, do not require Canvas to stay open.</p>
      </>
    )
  },
  "how-to-uninstall": {
    title: "How to uninstall Canvas for Mac",
    description: "Completely remove Canvas and its local data from your Mac.",
    content: (
      <>
        <p>Deleting the app removes the application itself. Deleting the Application Support folder removes local Canvas data too.</p>
        
        <h3>Uninstall Steps:</h3>
        <ol>
          <li>Quit Canvas for Mac.</li>
          <li>Open Finder.</li>
          <li>Go to Applications.</li>
          <li>Drag Canvas for Mac to Trash.</li>
          <li>Optional: remove local app data by opening Finder → Go → Go to Folder and entering:<br />
            <code>~/Library/Application Support/CanvasForMac/</code>
          </li>
          <li>Delete that folder only if you want to remove saved Canvas local data, imported assets, thumbnails, and preferences.</li>
        </ol>
      </>
    )
  },
  "where-canvas-stores-imported-files": {
    title: "Where Canvas stores imported files",
    description: "Information about local data storage and privacy.",
    content: (
      <>
        <p>Canvas for Mac is a privacy-first app. We do not upload your wallpapers or track your usage.</p>
        <p>When you import a wallpaper, Canvas copies it into a secure, hidden local directory so it can manage your gallery safely. The exact storage locations are:</p>
        <ul>
          <li><strong>Imported Wallpapers & Data:</strong> <code>~/Library/Application Support/CanvasForMac/</code></li>
          <li><strong>Live Wallpaper Thumbnails:</strong> <code>~/Library/Application Support/CanvasForMac/LiveWallpaperThumbnails/</code></li>
        </ul>
        <p>If you ever want to clear up space, you can delete files from these folders, though doing so will remove them from your Canvas gallery.</p>
      </>
    )
  },
  "why-imported-images-may-crop": {
    title: "Why imported images may crop in preview",
    description: "Understanding aspect ratios and how Canvas formats images.",
    content: (
      <>
        <p>If an imported wallpaper looks cropped or slightly zoomed in on the Canvas preview panel or your desktop, it is because of aspect ratio differences.</p>
        <p>Mac displays usually have a 16:10 aspect ratio (like MacBook screens). If you import an ultra-wide image (like 21:9) or a vertical image (like 9:16 from a phone), macOS will automatically scale and crop the image so it covers your entire screen without leaving black bars.</p>
        <p>Canvas previews this cropping accurately so you know exactly how the wallpaper will look before you apply it. For the best results, try to import wallpapers that closely match your screen's resolution and aspect ratio.</p>
      </>
    )
  }
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return {
      title: "Article Not Found | Pythogen",
      description: "This support article does not exist.",
    };
  }

  return {
    title: `${article.title} | Pythogen Support`,
    description: article.description || article.title,
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-8">
        <Link href="/support" className="text-sm font-medium text-blue-500 hover:text-blue-600">
          &larr; Back to Support
        </Link>
      </div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {article.title}
      </h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {article.content}
      </div>
    </article>
  );
}
