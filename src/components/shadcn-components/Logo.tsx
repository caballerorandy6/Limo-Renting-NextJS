import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.webp" alt="logo" width={400} height={400} />
    </div>
  );
};

export default Logo;
