"use client";

import { Controller, useForm } from "react-hook-form";
import { FieldSet } from "../ui/field";
import { FormField } from "./FormField";
import { InputGroup, InputGroupInput } from "../ui/input-group";
import { PasswordInput } from "./PasswordInput";
import { Button } from "../ui/button";

export interface RegisterForm {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}
export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterForm) => {
    console.log("Form Data Submitted:", data);

    reset();

    setTimeout(() => {}, 3000);
  };
  const passwordValue = watch("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full`}>
      <FieldSet className="gap-2">
        <Controller
          control={control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <FormField
                label="Username"
                htmlFor="username"
                isValidationError={fieldState.invalid}
                errorMessage={fieldState.error?.message}
              >
                <InputGroup
                  hSize={"56"}
                  aria-disabled={field.disabled}
                  aria-invalid={fieldState.invalid}
                >
                  <InputGroupInput
                    id="username"
                    type={"text"}
                    placeholder="Enter your name"
                    {...field}
                  />
                </InputGroup>
              </FormField>
            );
          }}
        />
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <FormField
                label="Email"
                htmlFor="email"
                errorMessage={fieldState.error?.message}
                isValidationError={fieldState.invalid}
              >
                <InputGroup
                  hSize={"56"}
                  aria-disabled={field.disabled}
                  aria-invalid={fieldState.invalid}
                >
                  <InputGroupInput
                    id="email"
                    type={"email"}
                    placeholder="Enter your email"
                    {...field}
                  />
                </InputGroup>
              </FormField>
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <PasswordInput
                field={field}
                fieldState={fieldState}
                label="Password"
                placeholder="Create a password"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          }}
          render={({ field, fieldState }) => {
            return (
              <PasswordInput
                field={field}
                fieldState={fieldState}
                label="Confirm Password"
                placeholder="Confirm your password"
                hideDescription
              />
            );
          }}
        />
        <Button type="submit" size={"xl-3"} className={"w-full mb-3"}>
          Sign up
        </Button>
      </FieldSet>
    </form>
  );
}
