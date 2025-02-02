//Custom Components
import AboutUs from "@/components/my-components/about/AboutUs";
import BookUsAbout from "@/components/my-components/about/BookUsAbout";
import WhyChooseUpAbout from "@/components/my-components/about/WhyChooseUpAbout";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <AboutUs />
      <BookUsAbout />
      <WhyChooseUpAbout />
    </section>
  );
};

export default About;
