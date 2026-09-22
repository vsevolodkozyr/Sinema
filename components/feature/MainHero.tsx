import { ArrowRight } from "lucide-react";
import { Container } from "../layouts/Container";
import { Button } from "../ui/button";
import { Hero } from "./Hero";

export function MainHero() {
  return (
    <div>
      <Hero contentContainerClass="items-center min-h-dvh">
        <Container className="flex flex-col items-center">
          <p className="typo-display-xl text-[40px] sm:text-[60px] lg:text-[84px] text-center mb-[37px] mt-10">
            Book Your Movie <br /> Tickets Now!
          </p>
          <p className="max-w-[300px] sm:max-w-[400px] typo-body-xl text-[16px] sm:text-[20px] font-bold mb-[66px] text-center font-manrope">
            Watch the latest movies at your favorite cinemas
          </p>
          <div className="mb-[124px] flex gap-2 flex-wrap">
            <Button
              className={"w-full sm:w-auto"}
              size={"xl-2"}
              iconRight={ArrowRight}
            >
              Explore Movies
            </Button>
            <Button
              className={"w-full sm:w-auto"}
              size={"xl-2"}
              variant={"outline"}
              color={"base"}
            >
              Find Cinema
            </Button>
          </div>
        </Container>
      </Hero>
    </div>
  );
}
