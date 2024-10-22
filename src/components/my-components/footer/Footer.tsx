import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black flex">
      <div>
        <Image src="/logo.webp" alt="Logo" width="1000" height="1000" />
      </div>
    </footer>
  );
};

export default Footer;
