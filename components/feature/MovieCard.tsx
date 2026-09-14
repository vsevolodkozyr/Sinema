import { ClockFading, Star } from "lucide-react";
import Image from "next/image";
import { Duration } from "../ui/Duration";
import { PGRating } from "../ui/PGRating";
import { Rating } from "../ui/Rating";
import { Button } from "../ui/button";
import { cn } from "cn";

export function MovieCard({ released = true }: { released?: boolean }) {
  return (
    <div className="group/card border border-neutral-800 rounded-sm p-1 max-w-[225px]">
      <img
        alt="movie poster"
        width={217}
        height={316}
        src={
          "https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-trefl-1000-pieces-premium-plus-jurassic-park-movie-poster.webp"
        }
        className="w-full aspect-217/316 object-cover rounded-sm"
      />
      <div className="px-2 pt-[10px] pb-[6px] flex flex-col">
        <div className="group-hover/card:hidden flex flex-col gap-2 py-0.5 h-[64px]">
          <div className={"flex justify-between gap-[10px] items-start"}>
            <div className="truncate">
              <h6 className="truncate">The Dark Knight</h6>
              <Genres />
            </div>
            {released ? <Rating /> : <Duration className="pt-1" />}
          </div>
          {released ? (
            <div className="flex justify-between items-center">
              <Duration />
              <PGRating>PG-13</PGRating>
            </div>
          ) : (
            <div>
              <p className="text-primary-200 font-manrope text-[10.5px] leading-[1.4]">
                Releases March 15, 2025
              </p>
            </div>
          )}
        </div>
        <div
          className={cn(
            "group-hover/card:flex hidden flex-col items-stretch gap-2",
            !released && "flex-col-reverse",
          )}
        >
          <Button variant={released ? "primary" : "text"} disabled={!released}>
            Book Now
          </Button>
          <Button
            variant={released ? "text" : "primary"}
            color={released ? "base" : "primary"}
          >
            Watch trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

function Genres() {
  return (
    <p className="text-[10.5px] leading-[1.4] font-manrope text-neutral-200 truncate">
      Action, Drama
    </p>
  );
}
