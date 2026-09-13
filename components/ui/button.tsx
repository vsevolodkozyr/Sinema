import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const buttonVariants = cva(
  "font-inter group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding tracking-widest whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-primary-foreground rounded-[4px] hover:bg-primary-600 active:bg-primary-300 disabled:bg-neutral-400 disabled:text-neutral-600",
        outline:
          "border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30",
        text: "",
      },
      size: {
        default: "h-[28px] gap-2 px-4 typo-button-xs",
        m: "h-[32px] gap-2 px-4 typo-button-m",
        xl: "h-[40px] gap-2 px-4 typo-button-xl",
        "xl-2": "h-[48px] gap-2 px-4 typo-button-xl",
        "xl-3": "h-[56px] gap-2 px-4 typo-button-xl",
        //
        icon: "size-[28px] [&_svg:not([class*='size-'])]:size-4",
        "icon-m": "size-[32px] [&_svg:not([class*='size-'])]:size-5",
        "icon-xl": "size-[40px] [&_svg:not([class*='size-'])]:size-6",
        "icon-xl-2": "size-[48px] [&_svg:not([class*='size-'])]:size-6",
        "icon-xl-3": "size-[56px] [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const arrowStyle = {
  default: "size-[20px]",
  xl: "size-[24px]",
  "xl-2": "size-[24px]",
  "xl-3": "size-[24px]",
};

function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {!size?.includes("icon") && (
        <ChevronLeft className={arrowStyle[size] || arrowStyle["default"]} />
      )}
      {children}
      {!size?.includes("icon") && (
        <ChevronRight className={arrowStyle[size] || arrowStyle["default"]} />
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
