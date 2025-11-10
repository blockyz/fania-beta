import ProductsCategory from "./components/products-category";
import ExhibitionsSection from "./components/exhibitions-section";
import { Statistics } from "@/components/statistics/statistics";

export default function Home() {
  return (<>
    <div className="lg:w-[1360px] w-[390px] mx-auto py-4">
      <Statistics />
    </div>
    <div className="lg:w-[1360px] w-[390px] mx-auto py-4">
      <ExhibitionsSection />
    </div>
    <div className="lg:w-[1360px] w-[390px] mx-auto py-4">
      <ProductsCategory />
    </div>
  </>
  );
}
