import LogoIcon from "../../public/icons/logo.svg";
import LogoText from "../../public/icons/logoText.svg";

export function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <LogoIcon className={"w-[34px]"} />
      <LogoText className={"w-[123px]"} />
    </div>
  );
}
