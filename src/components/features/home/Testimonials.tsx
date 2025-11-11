"use client";

//Custom Components
import ReviewsButton from "@/components/shared/buttons/ReviewsButton";
import Heading from "@/components/shared/ui-common/Heading";
import Heading3 from "@/components/shared/ui-common/Heading3";
import { CarouselTestimonials } from "@/components/features/home/CarouselTestimonials";
import MarqueeTestimonials from "@/components/features/home/MarqueeTestimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header and Carousel */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Left Section - Header and CTA */}
          <div className="w-full lg:w-7/12 space-y-4 md:space-y-6">
            <div className="space-y-3">
              <Heading>Testimonials</Heading>
              <Heading3>What Customers Are Saying</Heading3>
            </div>
            <div className="pt-2">
              <ReviewsButton>Leave a Review</ReviewsButton>
            </div>
          </div>

          {/* Right Section - Carousel */}
          <div className="w-full lg:w-5/12">
            <CarouselTestimonials />
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="w-full">
          <MarqueeTestimonials />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
