import { MovieCard } from "@/components/feature/MovieCard";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-dvh">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between">
        <div className="flex gap-5">
            <MovieCard />
            <MovieCard released={false} />
        </div>
      </main>
    </div>
  );
}
