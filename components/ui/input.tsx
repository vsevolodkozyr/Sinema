import * as React from "react";
import { cn } from "cn";
import { cva, VariantProps } from "class-variance-authority";
import { Input as InputPrimitive } from "@base-ui/react/input";

const inputVariants = cva(
  `border w-full border-neutral-400 
        bg-neutral-900 
        font-normal font-manrope 
        rounded-sm 
        leading-[1.4]
        transition-[color,border-color] 
        placeholder:text-neutral-300 
        aria-disabled:pointer-events-none 
        aria-disabled:cursor-not-allowed 
        aria-disabled:bg-neutral-700 
        aria-invalid:border-error-500 
        aria-invalid:placeholder-error-500 
        disabled:pointer-events-none
        disabled:cursor-not-allowed 
        disabled:bg-neutral-700 
        file:inline-flex 
        file:h-7 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        file:text-foreground
        focus-visible:ring-0
        focus-visible:outline-none
        focus-visible:border-neutral-100
        `,
  {
    variants: {
      hSize: {
        "40": "h-10 px-6 py-1",
        "48": "h-[48px] px-6 py-1",
        "56": "h-[56px] px-6 py-1",
      },
    },
    defaultVariants: {
      hSize: "40",
    },
  },
);

function Input({
  className,
  type,
  hSize = "40",
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      className={cn(
        inputVariants({ hSize }),
        "text-[14px]",
        "[&:-webkit-autofill]:[transition:background-color_50000000s_ease-in-out_0s]",
        "[&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:font-manrope",
        className,
      )}
      type={type}
      {...props}
    />
  );
}

export { Input, inputVariants };
