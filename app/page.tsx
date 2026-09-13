import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Primary */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            <Button size={"default"}>Button</Button>
            <Button size="default" disabled>
              Button
            </Button>
            <Button size={"m"}>Button</Button>
            <Button size="m" disabled>
              Button
            </Button>
            <Button size={"xl"}>Button</Button>
            <Button size="xl" disabled>
              Button
            </Button>
            <Button size={"xl-2"}>Button</Button>
            <Button size="xl-2" disabled>
              Button
            </Button>
            <Button size={"xl-3"}>Button</Button>
            <Button size="xl-3" disabled>
              Button
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button size={"icon"}>
              <Search />
            </Button>
            <Button size="icon" disabled>
              <Search />
            </Button>
            <Button size={"icon-m"}>
              <Search />
            </Button>
            <Button size="icon-m" disabled>
              <Search />
            </Button>
            <Button size={"icon-xl"}>
              <Search />
            </Button>
            <Button size="icon-xl" disabled>
              <Search />
            </Button>
            <Button size={"icon-xl-2"}>
              <Search />
            </Button>
            <Button size="icon-xl-2" disabled>
              <Search />
            </Button>
            <Button size={"icon-xl-3"}>
              <Search />
            </Button>
            <Button size="icon-xl-3" disabled>
              <Search />
            </Button>
          </div>
        </div>
        {/* Outline */}

        {/* Text */}

        {/* Icon size (primary, outline, text only) */}
      </main>
    </div>
  );
}
