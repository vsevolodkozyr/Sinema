import { MainHero } from "@/components/feature/MainHero";
import { MoviesSection } from "@/components/feature/MoviesSection";
import { Container } from "@/components/layouts/Container";

export default function page() {
  return (
    <div>
      <MainHero />
      <Container>
        <div className="flex flex-col gap-[100px] pt-10">
          <MoviesSection />
          <MoviesSection />
          <MoviesSection />
        </div>
      </Container>
    </div>
  );
}
