import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StartIcon from "../icons/StartIcon";
import { ReviewsProps } from "@/lib/interfaces";
import QuotationMarksLeft from "../icons/QuotationMarksLeft";

export const Stars = () => (
  <div className="flex space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <StartIcon key={i} />
    ))}
  </div>
);

export const reviewsArray: ReviewsProps[] = [
  {
    comment:
      "Marlon is the most professional and friendly driver I've ever had the pleasure of working with in years of being in the travel industry for groups of people. His dedication towards customer experience is unrivaled. We had Marlon assist us twice last weekend and when my guests saw him pull up on the 2nd day they were beyond ecstatic. I have to give a shout out to Rudy as well, who helped all of us get from the airport to our hotel. These two are great!",
    stars: <Stars />,
    name: "James Dooney",
  },
  {
    comment:
      "A wonderful experience from beginning until end. Our chauffeur, Edgar, was extremely courteous and punctual. As a professional and extremely competent driver, he kept us all at ease through the entire experience. The transportation itself was spotless and the interior was immaculate. Our choice of your company added extra value to our entire experience while in the Miami area. We will definitely use your services again. We will also be recommending you to our associates as they travel to your area. Thank you so much for your services. Donna Ezzell Shepherd",
    stars: <Stars />,
    name: "Donna Shepherd",
  },
  {
    comment:
      "Armando was AMAZING!!!! He was early, incredibly kind, funny, reassuring, made finding him easy, had no problem stopping for food for our kids on the way home. Booking with American was super fast and easy, too! Plus they were super fast and sweet when addressing any concerns I emailed. Thank you for an AWESOME experience ❤️",
    stars: <Stars />,
    name: "Bernadette Kogut",
  },
  {
    comment:
      "Thank you to our driver Diego and American Transportation & Limo. We celebrated our daughters 15th birthday with her friends. Went to an Escape Room, went for Ice Cream and drove around Winwood and City Center. Had a great time. Diego was prompt and made sure we had a great time. Thank you.",
    stars: <Stars />,
    name: "A. Acosta",
  },
  {
    comment:
      "We received great service with this company from the beginning to the end. We have several trips planned with them. We did our first trip today and were more than satisfied. Definitely a five star rating. They worked with us and kept in complete contact with us and letting us know where when and how to be picked up, extremely great company. Thank you very much for all your help.",
    stars: <Stars />,
    name: "Mark Trivellini",
  },
];

export function CarouselTestimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full">
      <QuotationMarksLeft />
      <Carousel
        plugins={[plugin.current as any]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {reviewsArray.map((review, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col aspect-auto justify-center pt-[4vh]">
                  <p className="mb-2 truncate">{review.comment}</p>
                  <div className="flex items-center gap-2">
                    <span>{review.name}</span>
                    {review.stars}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
