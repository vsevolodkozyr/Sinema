import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { cn } from "cn";

export interface FormFieldProps {
  label?: string;
  description?: string;
  children?: React.ReactNode;
  isValidationError?: boolean;
  errorMessage?: string;
  renderNextToDesc?: React.ReactNode;
  htmlFor?: string;
}

export function FormField({
  label = "Label",
  isValidationError = false,
  errorMessage = "error",
  description = "",
  renderNextToDesc,
  htmlFor,
  children,
}: FormFieldProps) {
  return (
    <Field className="">
      <FieldLabel
        htmlFor={htmlFor}
        className="font-manrope text-[16px] font-medium leading-none normal-case "
      >
        {label}
      </FieldLabel>
      {children}
      {!isValidationError && (
        <div className="flex gap-1 justify-between items-center min-w-0">
          <FieldDescription
            className={cn(
              "font-manrope font-regular text-[12px] leading-[1.4] text-neutral-300 whitespace-normal grow p-0 m-0",
              !description && "invisible",
            )}
          >
            {description || "Desc"}
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
