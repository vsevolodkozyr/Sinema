import { FooterNav } from "../feature/FooterNav";
import { Logo } from "../ui/Logo";
import { Rights } from "../ui/Rights";
import { Socials } from "../ui/Socials";

export function Footer() {
  return (
    <div className="pt-[100px] px-[80px] w-full mx-auto">
      <div className="flex justify-between items-center gap-10 flex-wrap">
        <div className="flex flex-col gap-8 max-w-[467px]">
          <div className="flex flex-col gap-8">
            <Logo />
            <p className="typo-label-l text-neutral-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an
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
      <img
        className="w-full max-h-[351px] object-cover"
        src="/images/footer.png"
        alt=""
      />
    </div>
  );
}
