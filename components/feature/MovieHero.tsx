"use client";

import { Clapperboard, Ticket } from "lucide-react";
import { Container } from "../layouts/Container";
import { Button } from "../ui/button";
import { Hero } from "./Hero";
import { Trailer } from "./Trailer";
import { useTrailerModal } from "@/lib/store/useTrailerModal";

export function MovieHero() {
  const onOpen = useTrailerModal((state) => state.openTrailer);

  return (
    <Hero
      dark
      backImageSrc="https://img.youtube.com/vi/22w7z_lT6YM/maxresdefault.jpg"
    >
      <Container className="h-[calc(100dvh-var(--spacing-header))] pb-2 pt-0 min-[450px]:h-auto min-[450px]:pt-[clamp(40px,6vw,100px)] min-[450px]:pb-0">
        <div className="w-full h-full grid grid-cols-1 grid-rows-[1fr_auto] min-[450px]:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2.5fr] gap-4 items-start">
          <div className="relative z-0 h-full max-h-full max-w-full mx-auto min-[450px]:w-full  min-[450px]:self-end aspect-[27/40] md:aspect-[3/4] overflow-hidden rounded-lg rounded-b-none">
            <div className="absolute inset-0 z-10 bg-black/20" />
            <img
              src="/images/movie.jpg"
              alt="Movie poster"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="md:block hidden">
            <Trailer />
          </div>
          <div className="md:hidden flex flex-col gap-2 justify-between h-full min-w-0">
            <p className="max-[450px]:hidden typo-body-xl text-[clamp(20px,6vw,40px)] font-manrope font-semibold leading-[1.4] word-break">
              How to train your dragon
            </p>
            <div className="flex flex-col gap-2 ">
              <Button iconLeft={Ticket} size={"xl-3"} className="w-full">
                Get Ticket
              </Button>
              <Button
                onClick={() => onOpen("22w7z_lT6YM")}
                iconLeft={Clapperboard}
                className={"w-full"}
                size={"xl-3"}
                variant={"outline"}
                color={"base"}
              >
                Watch trailer
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Hero>
  );
}
