import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className,
  imageClassName = "h-9 w-auto",
  priority = false,
}: BrandLogoProps) {
  return (
    <Link href="/" aria-label="SYNAPTO SYSTEMS home" className={className}>
      <Image
        src="/synapto_logo.png?v=2"
        alt="SYNAPTO SYSTEMS"
        width={220}
        height={67}
        className={imageClassName}
        priority={priority}
      />
    </Link>
  );
}