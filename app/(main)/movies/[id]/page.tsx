import { CastCard } from "@/components/feature/CastCard";
import { MovieHero } from "@/components/feature/MovieHero";
import {
  SectionSlider,
  SectionSliderItem,
} from "@/components/feature/SectionSlider";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { Heart, Ticket } from "lucide-react";

export default function page() {
  return (
    <div>
      <MovieHero />
      <Container>
        <div className="py-6 lg:py-8">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-[1fr_minmax(220px,290px)] lg:gap-16 xl:gap-[120px] w-full">
            <div className="grow">
              <p className="typo-display-l text-[clamp(28px,4vw,60px)] font-manrope font-semibold leading-[1.3] md:leading-[1.4] mb-6 md:mb-8">
                How to train your dragon
              </p>

              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h5>Summary</h5>
                  <p className="typo-body-m text-neutral-100">
                    Dubbed “the greatest that never was,” Sonny Hayes (Brad
                    Pitt) was FORMULA 1’s most promising phenom of the 1990s
                    until an accident on the track nearly ended his career.
                    Thirty years later, he’s a nomadic racer-for-hire when he’s
                    approached by his former teammate Ruben Cervantes (Javier
                    Bardem), owner of a struggling FORMULA 1 team that is on the
                    verge of collapse. Ruben convinces Sonny to come back to
                    FORMULA 1 for one last shot at saving the team and being the
                    best in the world. He’ll drive alongside Joshua Pearce
                    (Damson Idris), the team&apos;s hotshot rookie intent on
                    setting his own pace.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-12 w-full md:max-w-[75%]">
                  <div className="flex flex-col gap-2 min-w-[140px]">
                    <h6>Director</h6>
                    <p className="typo-body-m text-neutral-100">
                      Joseph Kosinski
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[140px]">
                    <h6>Writers</h6>
                    <p className="typo-body-m text-neutral-100">
                      Ehren Kruger - Joseph Kosinski
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:sticky lg:top-[var(--spacing-header)] lg:self-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                <Button
                  iconLeft={Ticket}
                  size={"xl-3"}
                  className="w-full hidden md:inline-flex"
                >
                  Get Ticket
                </Button>
                <Button
                  iconLeft={Heart}
                  size={"xl-3"}
                  variant={"outline"}
                  className="w-full"
                >
                  Add to favorite
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <SectionSlider title="Cast">
            {[0, 5, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17].map((item) => {
              return (
                <SectionSliderItem key={item}>
                  <CastCard className="w-[clamp(170px,15vw,216px)]" />
                </SectionSliderItem>
              );
            })}
          </SectionSlider>
        </div>
      </Container>
    </div>
  );
}
