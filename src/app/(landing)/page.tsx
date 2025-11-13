import ProductsCategory from "./components/product-category";
import ExhibitionsSection from "./components/exhibitions";
import { Statistics } from "./components/statistics";
import HeroSection from "@/app/(landing)/components/hero-section";
import Innovation from "./components/innovation";

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
    <div>
      <Innovation />
    </div>
  </>
  );
}
