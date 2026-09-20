import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LaunchStrip } from "@/components/LaunchStrip";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LaunchStrip />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
