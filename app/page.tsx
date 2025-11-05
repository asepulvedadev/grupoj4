import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="relative h-screen overflow-hidden">
        <Hero />
        <Header />
      </div>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
