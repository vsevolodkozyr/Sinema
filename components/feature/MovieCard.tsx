import { Duration } from "../ui/Duration";
import { PGRating } from "../ui/PGRating";
import { Rating } from "../ui/Rating";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MovieCard({ released = true }: { released?: boolean }) {
  return (
    <div className="group/card border border-neutral-800 rounded-sm p-1 max-w-[225px]">
      <Link
        href={"/movie"}
        className="w-full aspect-217/316 rounded-sm overflow-hidden relative block"
      >
        <img
          alt="The Dark Knight movie poster"
          src={
            "https://puzzlemania-154aa.kxcdn.com/products/2024/puzzle-trefl-1000-pieces-premium-plus-jurassic-park-movie-poster.webp"
          }
          className="size-full object-cover rounded-sm group-hover/card:scale-[1.03] transition-transform duration-300"
        />
      </Link>

      <div className="px-2 mt-[10px] pb-[6px] flex flex-col relative min-h-[64px]">
        <div className="transition-opacity duration-200 group-hover/card:opacity-0 group-focus-within/card:opacity-0 opacity-100 flex flex-col gap-2 py-0.5 h-[64px]">
          <div className={"flex justify-between gap-[10px] items-start"}>
            <div className="truncate">
              <Link href={"/movie"} className="hover:underline">
                <h6 className="truncate">The Dark Knight</h6>
              </Link>
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
            "transition-opacity duration-200 opacity-0 pointer-events-none group-hover/card:opacity-100 group-hover/card:pointer-events-auto group-focus-within/card:opacity-100 group-focus-within/card:pointer-events-auto flex flex-col items-stretch gap-2 absolute inset-0 px-2 justify-center",
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
