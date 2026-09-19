import { Hero } from "@/components/feature/Hero";
import { MoviesSection } from "@/components/feature/MoviesSection";
import { Container } from "@/components/layouts/Container";

export default function page() {
  return (
    <div>
      <Hero />
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
