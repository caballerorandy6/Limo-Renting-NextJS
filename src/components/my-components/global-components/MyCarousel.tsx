"use client";

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
import Image from "next/image";

import { CarouselProps } from "@/lib/interfaces";

export function MyCarousel({ images }: CarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) as any
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-3/12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none">
              <CardContent>
                <Image
                  src={image}
                  alt={`carousel-image-${index}`}
                  width={500}
                  height={500}
                  priority={false}
                  className="object-cover w-full h-[25vh]"
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
