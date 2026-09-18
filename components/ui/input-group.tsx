"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Input, inputVariants } from "./input";

function InputGroup({
  className,
  hSize = "40",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputVariants>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        inputVariants({ hSize }),
        `group/input-group
         relative text-white flex w-full min-w-0 items-center border 
         transition-[color,border-color] outline-none  
         in-data-[slot=combobox-content]:focus-within:border-inherit 
         in-data-[slot=combobox-content]:focus-within:ring-0 
         has-data-[align=block-end]:rounded-none 
         has-data-[align=block-start]:rounded-none 
         has-[[data-slot=input-group-control]:focus-visible]:border-neutral-100 
         has-[[data-slot=input-group-control]:focus-visible]:text-white 
         has-[[data-slot][aria-invalid=true]]:border-error-500
         has-[textarea]:rounded-none 
         has-[>[data-align=block-end]]:h-auto 
         has-[>[data-align=block-end]]:flex-col 
         has-[>[data-align=block-start]]:h-auto 
         has-[>[data-align=block-start]]:flex-col 
         has-[>textarea]:h-auto  
         has-[>[data-align=block-end]]:[&>input]:pt-3 
         has-[>[data-align=block-start]]:[&>input]:pb-3`,
        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-none **:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      align: {
        "inline-start": "order-first",
        "inline-end": "order-last",
        "block-start":
          "order-first w-full justify-start pt-3 group-has-[>input]/input-group:pt-3.5 [.border-b]:pb-3.5",
        "block-end":
          "order-last w-full justify-start pb-3 group-has-[>input]/input-group:pb-3.5 [.border-t]:pt-3.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 rounded-none text-sm shadow-none",
  {
    variants: {
      size: {
        icon: "size-6 p-0 has-[>svg]:p-0 [&>svg:not([class*='size-'])]:size-6 disabled:text-neutral-300",
        "icon-md":
          "size-7 p-0 has-[>svg]:p-0 [&>svg:not([class*='size-'])]:size-7 disabled:text-neutral-300",
        "icon-lg":
          "size-8 p-0 has-[>svg]:p-0 [&>svg:not([class*='size-'])]:size-8 disabled:text-neutral-300",
      },
    },
    defaultVariants: {
      size: "icon",
    },
  },
);

function InputGroupButton({
  className,
  type = "button",
  variant = "outline",
  size = "icon",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset";
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      size={"icon"}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2  text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        `flex-1 h-auto group-aria-invalid/input-group:placeholder:text-error-500
          border-0 p-0 bg-transparent 
          ring-0 
          outline-none
          group-has-[>[data-align=inline-end]]/input-group:pr-2 
          group-has-[>[data-align=inline-start]]/input-group:pl-2 
          focus-visible:ring-0 aria-invalid:ring-0`,
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none border-0 bg-transparent py-2.5 ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
