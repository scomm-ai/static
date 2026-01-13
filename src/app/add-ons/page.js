import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function AddOnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}



