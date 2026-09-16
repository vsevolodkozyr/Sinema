import { Container } from "@/components/layouts/Container";
import { Header } from "@/components/layouts/Header";

export default function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-dvh">
      <main className="flex w-full flex-col items-center justify-between bg-neutral-400 py-20">
        <Header />
      </main>
    </div>
  );
}
