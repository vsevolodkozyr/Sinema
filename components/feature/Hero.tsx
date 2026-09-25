import { cn } from "cn";

interface Props {
  backImageSrc?: string;
  children?: React.ReactNode;
  contentContainerClass?: string;
  dark?: boolean;
}

export function Hero({
  backImageSrc = "/images/hero.png",
  contentContainerClass = "",
  dark = false,
  children,
}: Props) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 size-full -z-1">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 top-1/2 bg-linear-to-t from-0% from-black to-transparent to-100%"></div>
        <img
          className={cn(
            "size-full object-cover relative -z-1",
            dark && "grayscale opacity-50",
          )}
          src={backImageSrc}
        />
      </div>
      <div className={cn("pt-header flex", contentContainerClass)}>
        {children}
      </div>
    </div>
  );
}
