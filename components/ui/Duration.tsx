import { cn } from "cn";
import { ClockFading } from "lucide-react";

interface Props {
  duration?: number; // seconds
  className?: string;
}

export function Duration({ duration = 0, className = "" }: Props) {
  return (
    <div className={cn("flex items-center gap-[6px] text-foreground shrink-0", className)}>
      <ClockFading className="size-[14px]" />
      <p className="font-manrope text-[10.5px] leading-[1.4]">2h 2m</p>
    </div>
  );
}
