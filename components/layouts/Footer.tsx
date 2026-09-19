import { FooterNav } from "../feature/FooterNav";
import { Logo } from "../ui/Logo";
import { Rights } from "../ui/Rights";
import { Socials } from "../ui/Socials";
import { Container } from "./Container";

export function Footer() {
  return (
    // px-[80px]
    <footer className="w-full shrink-0">
      <div className="pt-[100px]">
        <Container>
          <div className="flex justify-between items-center gap-10 flex-wrap">
            <div className="flex flex-col gap-8 max-w-[467px]">
              <div className="flex flex-col gap-8">
                <Logo />
                <p className="typo-label-l text-neutral-200">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Socials />
                <Rights />
              </div>
            </div>
            <div className="max-w-[575px] grow">
              <FooterNav />
            </div>
          </div>
        </Container>
        <img
          className="w-full max-h-[351px] object-cover"
          src="/images/footer.png"
          alt=""
        />
      </div>
    </footer>
  );
}
