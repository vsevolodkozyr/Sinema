"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";
import { DoorOpen, Lock, Menu, Search, User } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { cn } from "cn";

const nav = [
  { name: "Movies", href: "/movies" },
  { name: "Cinemas", href: "/cinemas" },
];

export function Header() {
  const user = false;

  return (
    <header className="w-full shrink-0 fixed pt-6 z-100">
      <Container>
        <div className="rounded-lg flex min-h-[55px] sm:min-h-[65px] items-stretch">
          <div className="rounded-[inherit] sm:grow-3 bg-black pl-[16px] pr-[16px] sm:pl-[85px] sm:pr-[32px] flex gap-[60px] items-center">
            <Logo className="sm:[&>*:last-child]:block [&>*:last-child]:hidden" />
            <div className="lg:block hidden">
              <ul className="flex gap-4">
                {nav.map(({ href, name }) => {
                  return (
                    <li key={href}>
                      <Button
                        className={"font-[400]"}
                        size={"xl"}
                        variant={"text"}
                        color={"base"}
                        render={<Link href={href} />}
                      >
                        {name}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex min-w-0 rounded-[inherit] grow bg-black px-2 md:px-[24px] justify-end sm:justify-center items-center">
            <div className="flex min-w-0 items-center">
              <Button size={"icon-xl-2"} variant={"text"} color={"base"}>
                <Search />
              </Button>
              <div className="px-[8px] sm:px-[32px] h-[26px] ">
                <div className="h-full w-px bg-neutral-400"></div>
              </div>
              <div className={cn("flex shrink min-w-0", user && "gap-3")}>
                {!user && <NoUser />}
                {user && <IsUser />}
                <div className="lg:hidden">
                  <Drawer showSwipeHandle>
                    <DrawerTrigger
                      render={
                        <Button
                          className={" font-normal relative items-center -mt-2"}
                          variant={"text"}
                          color={"base"}
                          size={"icon-xl-2"}
                        >
                          <Menu />
                          <p className="absolute bottom-0 typo-button-xs">
                            Menu
                          </p>
                        </Button>
                      }
                    >
                      Open
                    </DrawerTrigger>
                    <DrawerContent className={"h-[75dvh]"}>
                      <DrawerHeader>
                        <Logo />
                      </DrawerHeader>
                      <div className="p-4">
                        {
                          <ul className="flex flex-col items-center gap-4">
                            {nav.map(({ href, name }) => {
                              return (
                                <li key={href}>
                                  <Link href={href}>
                                    <Button
                                      className={"font-[400]"}
                                      size={"xl"}
                                      aria-hidden
                                      variant={"text"}
                                      color={"base"}
                                    >
                                      {name}
                                    </Button>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        }
                      </div>
                      <DrawerFooter>
                        <p className="typo-label-s text-neutral-200">
                          This made by Seva
                        </p>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

function NoUser() {
  return (
    <div>
      <div className="hidden lg:flex">
        <Button
          className={"font-normal"}
          iconLeft={Lock}
          variant={"text"}
          color={"base"}
          size={"xl"}
          render={<Link href={"/login"} />}
        >
          <p>Login</p>
        </Button>
        <Button
          className={"font-normal"}
          iconLeft={DoorOpen}
          variant={"text"}
          render={<Link href={"/signup"} />}
          size={"xl"}
        >
          <p>Sign Up</p>
        </Button>
      </div>
      <div className="lg:hidden flex gap-4">
        <Button
          className={" font-normal relative items-center -mt-2"}
          variant={"text"}
          color={"base"}
          size={"icon-xl-2"}
          render={<Link href={"/login"} />}
        >
          <User />
          <p className="absolute bottom-0 typo-button-xs">Login</p>
        </Button>
      </div>
    </div>
  );
}

function IsUser() {
  return (
    <div className="flex gap-4 items-center min-w-0 max-w-[200px] ml-2">
      <Avatar className={"flex-none size-8 sm:size-10"}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="truncate typo-button-l font-normal shrink min-w-0 hidden sm:block">
        Seva UserSeva UserSeva UserSeva UserSeva UserSeva UserSeva User
      </p>
    </div>
  );
}
