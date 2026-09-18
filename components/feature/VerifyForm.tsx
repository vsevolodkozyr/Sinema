"use client";

import { useForm } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";

export interface VerifyForm {
  code: string;
}

export function VerifyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<VerifyForm>({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: VerifyForm) => {
    console.log("Form Data Submitted:", data);
    reset();
    setTimeout(() => {}, 3000);
  };
  const code = watch("code");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <p className="typo-body-m font-manrope text-neutral-100 text-center">
          We sent a 6-digit code to your email. Enter it below to verify your
          account.
        </p>
        <p className="typo-label-l text-neutral-100 font-manrope flex justify-center gap-1">
          Your code expires in <span>5:00</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <InputOTP maxLength={5}>
            <InputOTPGroup className="gap-1 justify-between grow">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>
          <Button
            disabled={code.length === 5}
            size={"xl-3"}
            className={"w-full"}
          >
            Verify
          </Button>
        </form>
      </div>
      <div className="flex leading-none justify-between items-center text-neutral-300 typo-button-s">
        <p>Didn’t receive the code?</p>
        <div className="flex items-center">
          <p>4:35</p>
          <Button variant={"text"} disabled>
            Resend
          </Button>
        </div>
      </div>
    </div>
  );
}
