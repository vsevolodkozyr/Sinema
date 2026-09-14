import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-dvh">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between">
        <div className="flex gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <Button size={"default"}>Button</Button>
              <Button size="default" disabled>
                Button
              </Button>
              <Button size="default" color="base">
                Button
              </Button>

              <Button size={"m"}>Button</Button>
              <Button size="m" disabled>
                Button
              </Button>
              <Button size="m" color="base">
                Button
              </Button>

              <Button size={"xl"}>Button</Button>
              <Button size="xl" disabled>
                Button
              </Button>
              <Button size="xl" color="base">
                Button
              </Button>

              <Button size={"xl-2"}>Button</Button>
              <Button size="xl-2" disabled>
                Button
              </Button>
              <Button size="xl-2" color="base">
                Button
              </Button>

              <Button size={"xl-3"}>Button</Button>
              <Button size="xl-3" disabled>
                Button
              </Button>
              <Button size="xl-3" color="base">
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
              <Button size="icon" color="base">
                <Search />
              </Button>

              <Button size={"icon-m"}>
                <Search />
              </Button>
              <Button size="icon-m" disabled>
                <Search />
              </Button>
              <Button size="icon-m" color="base">
                <Search />
              </Button>

              <Button size={"icon-xl"}>
                <Search />
              </Button>
              <Button size="icon-xl" disabled>
                <Search />
              </Button>
              <Button size="icon-xl" color="base">
                <Search />
              </Button>

              <Button size={"icon-xl-2"}>
                <Search />
              </Button>
              <Button size="icon-xl-2" disabled>
                <Search />
              </Button>
              <Button size="icon-xl-2" color="base">
                <Search />
              </Button>

              <Button size={"icon-xl-3"}>
                <Search />
              </Button>
              <Button size="icon-xl-3" disabled>
                <Search />
              </Button>
              <Button size="icon-xl-3" color="base">
                <Search />
              </Button>
            </div>
          </div>

          {/* OUTLINE BUTTONS */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <Button variant="outline" size={"default"}>
                Button
              </Button>
              <Button variant="outline" size="default" disabled>
                Button
              </Button>
              <Button variant="outline" size="default" color="base">
                Button
              </Button>

              <Button variant="outline" size={"m"}>
                Button
              </Button>
              <Button variant="outline" size="m" disabled>
                Button
              </Button>
              <Button variant="outline" size="m" color="base">
                Button
              </Button>

              <Button variant="outline" size={"xl"}>
                Button
              </Button>
              <Button variant="outline" size="xl" disabled>
                Button
              </Button>
              <Button variant="outline" size="xl" color="base">
                Button
              </Button>

              <Button variant="outline" size={"xl-2"}>
                Button
              </Button>
              <Button variant="outline" size="xl-2" disabled>
                Button
              </Button>
              <Button variant="outline" size="xl-2" color="base">
                Button
              </Button>

              <Button variant="outline" size={"xl-3"}>
                Button
              </Button>
              <Button variant="outline" size="xl-3" disabled>
                Button
              </Button>
              <Button variant="outline" size="xl-3" color="base">
                Button
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size={"icon"}>
                <Search />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <Search />
              </Button>
              <Button variant="outline" size="icon" color="base">
                <Search />
              </Button>

              <Button variant="outline" size={"icon-m"}>
                <Search />
              </Button>
              <Button variant="outline" size="icon-m" disabled>
                <Search />
              </Button>
              <Button variant="outline" size="icon-m" color="base">
                <Search />
              </Button>

              <Button variant="outline" size={"icon-xl"}>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl" disabled>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl" color="base">
                <Search />
              </Button>

              <Button variant="outline" size={"icon-xl-2"}>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl-2" disabled>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl-2" color="base">
                <Search />
              </Button>

              <Button variant="outline" size={"icon-xl-3"}>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl-3" disabled>
                <Search />
              </Button>
              <Button variant="outline" size="icon-xl-3" color="base">
                <Search />
              </Button>
            </div>
          </div>

          {/* TEXT BUTTONS */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <Button variant="text" size={"default"}>
                Button
              </Button>
              <Button variant="text" size="default" disabled>
                Button
              </Button>
              <Button variant="text" size="default" color="base">
                Button
              </Button>

              <Button variant="text" size={"m"}>
                Button
              </Button>
              <Button variant="text" size="m" disabled>
                Button
              </Button>
              <Button variant="text" size="m" color="base">
                Button
              </Button>

              <Button variant="text" size={"xl"}>
                Button
              </Button>
              <Button variant="text" size="xl" disabled>
                Button
              </Button>
              <Button variant="text" size="xl" color="base">
                Button
              </Button>

              <Button variant="text" size={"xl-2"}>
                Button
              </Button>
              <Button variant="text" size="xl-2" disabled>
                Button
              </Button>
              <Button variant="text" size="xl-2" color="base">
                Button
              </Button>

              <Button variant="text" size={"xl-3"}>
                Button
              </Button>
              <Button variant="text" size="xl-3" disabled>
                Button
              </Button>
              <Button variant="text" size="xl-3" color="base">
                Button
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="text" size={"icon"}>
                <Search />
              </Button>
              <Button variant="text" size="icon" disabled>
                <Search />
              </Button>
              <Button variant="text" size="icon" color="base">
                <Search />
              </Button>

              <Button variant="text" size={"icon-m"}>
                <Search />
              </Button>
              <Button variant="text" size="icon-m" disabled>
                <Search />
              </Button>
              <Button variant="text" size="icon-m" color="base">
                <Search />
              </Button>

              <Button variant="text" size={"icon-xl"}>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl" disabled>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl" color="base">
                <Search />
              </Button>

              <Button variant="text" size={"icon-xl-2"}>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl-2" disabled>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl-2" color="base">
                <Search />
              </Button>

              <Button variant="text" size={"icon-xl-3"}>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl-3" disabled>
                <Search />
              </Button>
              <Button variant="text" size="icon-xl-3" color="base">
                <Search />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
