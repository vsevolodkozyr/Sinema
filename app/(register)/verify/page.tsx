import { VerifyForm } from "@/components/feature/VerifyForm";
import { Logo } from "@/components/ui/Logo";

export default function page() {
  return (
    <>
      <div className=" flex justify-center flex-col items-center mb-6">
        <Logo className="mb-4" />
        <h6 className="text-[24px] mb-6">Email Verification Code</h6>
        <VerifyForm />
      </div>
    </>
  );
}
