"use client";

import { Container } from "@/components/layouts/Container";
import { useParams } from "next/navigation";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  useForm,
} from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { EyeOff } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Input } from "@/components/ui/input";
export default function Page() {
  const params = useParams<{ state?: "login" | "register" }>();

  return (
    <div className="">
      <Container className="h-dvh items-center flex">
        <div>
          <div className=" flex justify-center flex-col items-center mb-8">
            <Logo />
            <h6 className="text-[24px]">Create your account</h6>
          </div>
          <RegForm />
        </div>
      </Container>
      <div className="fixed right-0 top-0 max-w-[816px] h-dvh w-full z-0 opacity-35">
        <div className="absolute inset-0 bg-linear-to-r from-[#010108] to-[#010108]/0 to-78% z-1"></div>
        <img
          className="absolute inset-0 object-cover -z-1"
          src="/images/reg.png"
          alt=""
        />
      </div>
    </div>
  );
}

function RegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);

    reset();

    setTimeout(() => {}, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`max-w-[364px] w-full`}>
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid password address",
          },
        }}
        render={({ field, fieldState }) => {
          return <PasswordInput field={field} fieldState={fieldState} />;
        }}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Password is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid password address",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <Input
              placeholder="Email..."
              {...field}
              aria-invalid={fieldState.invalid}
            />
          );
        }}
      />
    </form>
  );
}
interface RegisterForm {
  email: string;
  password: string;
}
interface PasswordInputProps {
  field: ControllerRenderProps<RegisterForm>;
  fieldState: ControllerFieldState;
}

function PasswordInput({ field, fieldState }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      isValidationError={fieldState.invalid}
      description="Use 8+ characters with a mix of letters, numbers & symbols"
    >
      <InputGroup
        aria-disabled={field.disabled}
        aria-invalid={fieldState.invalid}
      >
        <InputGroupAddon align={"inline-start"} className="h-full py-2">
          <div className="w-px self-stretch bg-neutral-300 group-aria-invalid/input-group:bg-error-500 group-has-[[data-slot=input-group-control]:focus-visible]/input-group:bg-white"></div>
        </InputGroupAddon>
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          placeholder="Search..."
          {...field}
        />
        <InputGroupAddon align={"inline-end"}>
          <InputGroupButton
            variant={"text"}
            color={"base"}
            onClick={() => setShowPassword((state) => !state)}
          >
            <EyeOff />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </FormField>
  );
}

interface FormFieldProps {
  label?: string;
  description?: string;
  children?: React.ReactNode;
  isValidationError?: boolean;
  errorMessage?: string;
  renderNextToDesc?: React.ReactNode;
}

function FormField({
  label = "Label",
  isValidationError = false,
  errorMessage = "error",
  description = "Description",
  renderNextToDesc,
  children,
}: FormFieldProps) {
  return (
    <Field>
      <FieldLabel
        htmlFor="password"
        className="font-manrope text-[16px] font-medium leading-none mb-2 normal-case"
      >
        {label}
      </FieldLabel>
      {children}
      {!isValidationError && (
        <div className="flex gap-1 justify-between items-center">
          <FieldDescription className="font-manrope font-regular text-[12px] leading-[1.4] text-neutral-300 truncate grow p-0 m-0">
            {description}
          </FieldDescription>
          {renderNextToDesc && (
            <FieldDescription className="font-manrope font-regular text-[12px] leading-[1.4] shrink-0 p-0 m-0">
              {renderNextToDesc}
            </FieldDescription>
          )}
        </div>
      )}
      {isValidationError && (
        <FieldError className="font-manrope font-regular text-[12px] leading-[1.4] text-error-500">
          {errorMessage}
        </FieldError>
      )}
    </Field>
  );
}
