"use client";

//Custom Components
import ReviewsButton from "@/components/my-components/buttons/ReviewsButton";
import Heading from "@/components/my-components/global-components/Heading";
import Heading3 from "@/components/my-components/global-components/Heading3";
import { CarouselTestimonials } from "@/components/my-components/home/CarouselTestimonials";
import MarqueeTestimonials from "@/components/my-components/home/MarqueeTestimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="w-10/12 mx-auto mb-14 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-7/12">
          <Heading>Testimonials</Heading>
          <Heading3>What Customers Are Saying</Heading3>
          <div className="flex">
            <ReviewsButton>Leave a Review</ReviewsButton>
          </div>
        </div>
        <div className="lg:w-5/12">
          <CarouselTestimonials />
        </div>
      </div>
      <MarqueeTestimonials />
    </section>
  );
};

export default Testimonials;
