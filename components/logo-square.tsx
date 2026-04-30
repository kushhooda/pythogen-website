import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center bg-transparent",
        {
          "h-[40px] w-[40px]": !size,
          "h-[30px] w-[30px]": size === "sm",
        },
      )}
    >
      <Image
        src="/pythogen logos/Pythogen_Logo-removebg-preview.png"
        alt="Pythogen Logo"
        width={size === "sm" ? 30 : 40}
        height={size === "sm" ? 30 : 40}
        className="object-contain"
      />
    </div>
  );
}
