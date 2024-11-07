"use client";

import ReviewsButton from "../buttons/ReviewsButton";
import Heading from "../global-components/Heading";
import Heading3 from "../global-components/Heading3";
import { CarouselTestimonials } from "./CarouselTestimonials";
import MarqueeTestimonials from "./MarqueeTestimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="w-8/12 mx-auto mb-10 flex">
        <div className="w-8/12">
          <Heading>Testimonials</Heading>
          <Heading3>What Customers Are Saying</Heading3>
          <div className="flex gap-8 items-center">
            <ReviewsButton>More Reviews</ReviewsButton>
            <ReviewsButton>Leave a Review</ReviewsButton>
          </div>
        </div>
        <div className="w-4/12">
          <CarouselTestimonials />
        </div>
      </div>
      <MarqueeTestimonials />
    </section>
  );
};

export default Testimonials;
