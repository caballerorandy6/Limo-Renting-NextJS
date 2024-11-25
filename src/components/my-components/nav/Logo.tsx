import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.webp"
        alt="logo"
        width={1000}
        height={1000}
        priority
        className="w-[40vh] h-auto"
      />
    </Link>
  );
};

export default Logo;
