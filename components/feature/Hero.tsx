import { ArrowRight } from "lucide-react";
import { Container } from "../layouts/Container";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 size-full -z-1">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 top-1/2 bg-linear-to-t from-0% from-black to-transparent to-100%"></div>
        <img className="size-full object-cover" src={"/images/hero.png"} />
      </div>
      <div className="min-h-dvh pt-header flex items-center">
        <Container className="flex flex-col items-center">
          <p className="typo-display-xl text-[40px] sm:text-[60px] lg:text-[84px] text-center mb-[37px]">
            Book Your Movie <br /> Tickets Now!
          </p>
          <p className="max-w-[300px] sm:max-w-[400px] typo-body-xl text-[16px] sm:text-[20px] font-bold mb-[66px] text-center font-manrope">
            Watch the latest movies at your favorite cinemas
          </p>
          <div className="mb-[124px] flex gap-2 flex-wrap">
            <Button className={"w-full sm:w-auto"} size={"xl-2"} iconRight={ArrowRight}>
              Explore Movies
            </Button>
            <Button className={"w-full sm:w-auto"} size={"xl-2"} variant={"outline"} color={"base"}>
              Find Cinema
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
