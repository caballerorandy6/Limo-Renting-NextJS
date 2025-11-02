import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center flex-shrink-0 transition-opacity hover:opacity-80"
    >
      <Image
        src="/logo/logo.webp"
        alt="Limo Rental Logo"
        width={200}
        height={60}
        priority
        className="h-8 sm:h-10 xl:h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
