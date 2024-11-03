import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative">
      <Image
        src="/dark.avif"
        alt="dark"
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />
    </section>
  );
};

export default WhyChooseUs;
