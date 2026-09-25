import { cn } from "cn";
import Link from "next/link";

interface Props {
  className?: string;
}

export function CastCard({ className = "", ...props }: Props) {
  return (
    <div className={cn("@container", className)} {...props}>
      <Link href={"/"} className="w-full aspect-228/316 mb-4 block">
        <img
          src="/images/actor.jpg"
          alt=""
          className="size-full object-cover rounded-t-lg"
        />
      </Link>
      <div className="font-manrope truncate">
        <Link
          href={"/"}
          className="typo-body-s text-neutral-300 truncate text-[0.877em]"
        >
          Brad Pitt
        </Link>
        <h6 className="truncate text-[1em]">Sonny Hayes</h6>
      </div>
    </div>
  );
}
