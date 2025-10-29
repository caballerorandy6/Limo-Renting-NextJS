"use client";

//Custom Components
import ReviewsButton from "@/components/shared/buttons/ReviewsButton";
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import { CarouselTestimonials } from "@/components/features/home/CarouselTestimonials";
import MarqueeTestimonials from "@/components/features/home/MarqueeTestimonials";

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
