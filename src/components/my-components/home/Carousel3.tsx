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
import { featuredVehiclesImages3 } from "@/lib/utils";
import Image from "next/image";

export function Carousel3() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) as any
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {featuredVehiclesImages3.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent>
                <Image
                  src={image}
                  alt={`carousel-image-${index}`}
                  width={500}
                  height={500}
                  priority={false}
                  className="object-cover w-full h-[150px]"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
