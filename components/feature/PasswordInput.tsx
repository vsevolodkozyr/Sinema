"use client";

import { useState } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { FormField } from "./FormField";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  hideDescription?: boolean;
  label: string;
  placeholder?: string;
}

export function PasswordInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  field,
  fieldState,
  hideDescription = false,
  label = "",
}: PasswordInputProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      label={label}
      htmlFor={field.name}
      isValidationError={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      description={
        hideDescription
          ? undefined
          : "Use 8+ characters with a mix of letters, numbers & symbols"
      }
    >
      <InputGroup
        hSize={"56"}
        aria-disabled={field.disabled}
        aria-invalid={fieldState.invalid}
      >
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          placeholder="Search..."
          {...field}
        />
        <InputGroupAddon align={"inline-end"}>
          <InputGroupButton
            variant={"text"}
            color={"base"}
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((state) => !state);
            }}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </FormField>
  );
}
