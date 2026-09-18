import * as React from "react";
import { cn } from "cn";
import { InputGroup, InputGroupInput } from "./input-group";

function Input({
  className,
  inputClassName,
  type,
  disabled,
  "aria-invalid": ariaInvalid,
  ...props
}: React.ComponentProps<"input"> & { inputClassName?: string }) {
  return (
    <InputGroup
      aria-disabled={disabled}
      aria-invalid={ariaInvalid}
      className={cn(className)}
    >
      <InputGroupInput
        disabled={disabled}
        className={inputClassName}
        type={type}
        {...props}
      />
    </InputGroup>
  );
}

export { Input };
