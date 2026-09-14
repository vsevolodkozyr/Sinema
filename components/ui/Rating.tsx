import { Star } from "lucide-react";

interface Props {
  rating?: number;
}

export function Rating({ rating = 0 }: Props) {
  return (
    <div className="py-1 flex gap-[6px] items-center shrink-0">
      <Star className="size-[14px] text-primary-500 fill-primary-500" />
      <p className="typo-label-s">8.5</p>
    </div>
  );
}
