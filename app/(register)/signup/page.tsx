import { Logo } from "@/components/ui/Logo";

import Link from "next/link";
import { SignUpForm } from "@/components/feature/SignUpForm";

export default function page() {
  return (
    <>
      <div className=" flex justify-center flex-col items-center mb-6">
        <Logo className="mb-4" />
        <h6 className="text-[24px]">Create your account</h6>
      </div>
      <SignUpForm />
      <div className="typo-label-l flex gap-2">
        <p>Already have an account?</p>
        <Link className="text-primary-500" href="/login">
          Log in
        </Link>
      </div>
    </>
  );
}
