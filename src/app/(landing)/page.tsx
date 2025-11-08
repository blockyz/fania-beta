import ProductsCategory from "./components/products-category";
import ExhibitionsSection from "./components/exhibitions-section";

export default function Home() {
  return (<>
    <div>
      <ExhibitionsSection />
    </div>
    <div className="flex flex-col gap-4"  >
      <ProductsCategory />
    </div>
  </>
  );
}

