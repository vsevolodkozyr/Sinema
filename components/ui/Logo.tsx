import { cn } from "cn";
import LogoIcon from "../../public/icons/logo.svg";
import LogoText from "../../public/icons/logoText.svg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex gap-3 items-center", className)}>
      <LogoIcon
        className={"w-[34px] aspect-34/23"}
      />
      <LogoText className={"w-[123px]"} />
    </div>
  );
}
