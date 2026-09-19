import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
