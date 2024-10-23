import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.webp"
        alt="logo"
        width={400}
        height={400}
        priority
        className="w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;