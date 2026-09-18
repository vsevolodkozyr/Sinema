import { LoginForm } from "@/components/feature/LoginForm";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className=" flex justify-center flex-col items-center mb-6">
        <Logo className="mb-4" />
        <h6 className="text-[24px]">Welcome back</h6>
      </div>
      <LoginForm />
      <div className="typo-label-l flex gap-2">
        <p>Don’t have an account?</p>
        <Link className="text-primary-500" href="/signup">
          Sign Up
        </Link>
      </div>
    </>
  );
}
