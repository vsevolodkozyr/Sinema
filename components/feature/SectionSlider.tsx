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
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function SectionSlider({ title = "", children, description }: Props) {
  return (
    <div>
      <div className="flex gap-2 justify-between items-end mb-4">
        <div className="flex gap-3">
          <h4 className="truncate">{title}</h4>
          {description && (
            <h5 className="text-neutral-100 truncate">{description}</h5>
          )}
        </div>
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
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export function SectionSliderItem({
  children,
  ...props
}: {
  children?: React.ReactNode;
}) {
  return (
    <CarouselItem className="basis-auto" {...props}>
      {children}
    </CarouselItem>
  );
}
