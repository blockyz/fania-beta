import ProductsCategory from "./components/product-category";
import ExhibitionsSection from "./components/exhibitions";
import { Statistics } from "@/components/sections/statistics/statistics";

export default function Home() {
  return (<>
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
