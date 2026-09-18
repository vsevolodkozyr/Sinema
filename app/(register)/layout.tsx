import { Container } from "@/components/layouts/Container";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Container className="h-dvh items-center flex relative justify-center md:justify-start z-3">
        <div className="flex flex-col gap-2 max-w-[364px] w-full">
          {children}
        </div>
      </Container>
      <div className="fixed right-0 top-0 max-w-[816px] h-dvh w-full z-0 opacity-35">
        <div className="absolute inset-0 bg-linear-to-r from-[#010108] to-[#010108]/0 to-78% z-1"></div>
        <img
          className="absolute top-0 left-0 size-full object-cover object-center -z-1"
          src="/images/reg.png"
          alt=""
        />
      </div>
    </div>
  );
}
