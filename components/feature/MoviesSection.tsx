"use client";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MovieCard } from "./MovieCard";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
  mb?: string;
}

export function MoviesSection({}: Props) {
  return (
    <div>
      <h4 className="mb-2 truncate">Currently In Cinemas</h4>
      <div className="flex gap-3 justify-between items-center mb-4">
        <h5 className="text-neutral-100 truncate">
          Discover the latest movies now playing in cinemas — Book your tickets
          today!
        </h5>

        <Button
          iconRight={ChevronRight}
          variant={"text"}
          color={"base"}
          size={"xl"}
          className={"font-medium"}
          render={<Link href="#" />}
        >
          View all
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {[0, 5, 3, 1, 2, 23, 34, 45, 56, 10].map((item) => {
            return (
              <CarouselItem key={item} className="basis-auto">
                <MovieCard />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
