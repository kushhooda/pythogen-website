export const metadata = {
  title: "Security | Pythogen",
  description: "Pythogen Security Information",
};

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Security
        </h1>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Pythogen takes download safety and product security seriously. This page explains how to download our apps safely, how to verify official releases, and how to report security concerns.
        </p>

        <h3>1. Official downloads</h3>
        <p>
          Only download Pythogen apps from our official website: pythogen.dev
        </p>
        <p>
          Downloads from other websites may be outdated, modified, unsafe, or unofficial.
        </p>
        <p>
          If you find a Pythogen app being hosted somewhere else, please treat it carefully and report it to us.
        </p>

        <h3>2. Official Pythogen domains</h3>
        <p>
          Our official domain is: pythogen.dev
        </p>
        <p>
          Any other website claiming to provide official Pythogen downloads should not be trusted unless it is clearly linked from pythogen.dev.
        </p>

        <h3>3. Download safety</h3>
        <p>
          Before installing a Pythogen app, check that:
        </p>
        <ul>
          <li>The download came from pythogen.dev.</li>
          <li>The app name and version match the release page.</li>
          <li>The file size looks correct.</li>
          <li>The app has not been renamed or repackaged by another website.</li>
          <li>The download page looks like an official Pythogen page.</li>
        </ul>

        <h3>4. Checksums</h3>
        <p>
          For important releases, we may provide a SHA-256 checksum.
        </p>
        <p>
          A checksum helps confirm that the file you downloaded matches the official file released by Pythogen.
        </p>
        <p>
          If the checksum does not match, do not open the file. Delete it and download the app again from pythogen.dev.
        </p>

        <h3>5. macOS security warnings</h3>
        <p>
          Some macOS apps may show a warning such as:
        </p>
        <p>
          “Apple could not verify this app is free of malware.”
        </p>
        <p>
          This can happen when an app is new, not yet notarized, or downloaded outside the Mac App Store.
        </p>
        <p>
          Only continue if you downloaded the app directly from pythogen.dev and you trust the release.
        </p>

        <h3>6. Reporting security issues</h3>
        <p>
          If you find a security issue, suspicious download, fake website, modified app, or possible vulnerability, please report it to: <a href="mailto:security@pythogen.dev">security@pythogen.dev</a>
        </p>
        <p>
          Please include:
        </p>
        <ul>
          <li>The app name.</li>
          <li>The app version.</li>
          <li>A clear description of the issue.</li>
          <li>Steps to reproduce the issue if possible.</li>
          <li>Screenshots or links if relevant.</li>
          <li>Your contact email if you want a reply.</li>
        </ul>

        <h3>7. Responsible disclosure</h3>
        <p>
          Please do not publicly share security vulnerabilities before giving us a reasonable chance to investigate and fix the issue.
        </p>
        <p>
          We appreciate responsible reports that help keep users safe.
        </p>

        <h3>8. What not to send</h3>
        <p>
          Please do not send harmful files, malware, stolen data, private user information, or anything illegal.
        </p>
        <p>
          If your report involves a suspicious file, describe it clearly instead of attaching dangerous content.
        </p>

        <h3>9. Security updates</h3>
        <p>
          When needed, we may release updates to fix security or stability issues. Users should always keep Pythogen apps updated to the latest official version.
        </p>

        <h3>10. Contact</h3>
        <p>
          For security concerns, contact: <a href="mailto:security@pythogen.dev">security@pythogen.dev</a>
        </p>
      </div>
    </div>
  );
}
