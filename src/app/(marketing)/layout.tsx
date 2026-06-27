import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/common/DemoModal";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-1">
        {children}
      </div>
      <Footer />
      <DemoModal />
    </>
  );
}
