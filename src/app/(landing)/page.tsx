import ProductsCategory from "./components/product-category";
import ExhibitionsSection from "./components/exhibitions";
import { Statistics } from "./components/statistics";
import HeroSection from "@/components/content/hero-section";

export default function Home() {
  return (<>
    <div className="px-4 py-4">
      <HeroSection />
    </div>
    <div className="lg:w-[1360px] w-[390px] mx-auto">
      <Statistics />
    </div>
    <div className="lg:w-[1360px] w-[390px] mx-auto">
      <ProductsCategory />
    </div>
    <div className="lg:w-[1360px] w-[390px] mx-auto">
      <ExhibitionsSection />
    </div>
  </>
  );
}
