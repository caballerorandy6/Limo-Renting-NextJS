"use client";

import ReviewsButton from "../buttons/ReviewsButton";
import Heading from "../global-components/Heading";
import Heading3 from "../global-components/Heading3";
import { CarouselTestimonials } from "./CarouselTestimonials";
import MarqueeTestimonials from "./MarqueeTestimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="w-10/12 mx-auto mb-14 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-7/12">
          <Heading>Testimonials</Heading>
          <Heading3>What Customers Are Saying</Heading3>
          <div className="flex flex-col md:flex-row md:justify-between lg:gap-8 items-center w-full">
            <ReviewsButton>More Reviews</ReviewsButton>
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
