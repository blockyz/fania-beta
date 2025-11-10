import { translate } from '@/lib/helper';
import { getCategoriesList } from '@/lib/data';
import CardCategory from '@/components/cards/card-category';

const categories = getCategoriesList();

export default function ProductsCategory() {
  return (
    <div className="lg:w-[1360px] w-[390px] mt-10 ">
      <div className="mb-8 px-2">
        <h2 className=" lg:text-[24px] text-[16px] leading-11 text-black font-bold text-right mb-2">
          {translate('ProductsCategory')}
        </h2>
        <p className=" lg:text-[24px] text-[16px] font-bold tracking-num--0_18 text-darkgray text-right">
          {translate('ActivityFieldsDisplay')}
        </p>
      </div>


      <div className="flex gap-6 mx-auto justify-center flex-wrap">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            title={category.title}
            productsCount={category.productsCount}
          />
        ))}
      </div>
    </div>
  );
}

