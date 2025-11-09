
import { getEvents } from "@/lib/data";
import { translate } from "@/lib/helper";
import { ArrowUpLeft01Icon } from "hugeicons-react";
import Image from "next/image";

export default function EventsPage() {
  const data = getEvents();
  return (
    <section className="w-full pb-[74px]">

      {/* Section Title */}
      <div className="text-center pt-44 pb-12 text-[#333]">
        <h2 className="text-2xl font-semibold whitespace-pre-line leading-[1.6]">
          {translate("AllExhibitionsAndAwards")}
        </h2>
        <p className="text-sm mt-1 opacity-80 whitespace-pre-line">
          {translate("AcrossAllFields")}
        </p>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className="px-24 mb-8 w-full"
        >
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[1fr_auto_1fr]
              items-center
              text-[#333]
            "
          >
            <div className="md:order-1 order-3 md:pr-[84px] text-right">
              <p dir="rtl" className=" leading-6 text-[#333]  inline">
                {item.describe}
                <span className="inline-flex items-center gap-2 pr-2 text-xs font-medium text-[#7C7C7C] ml-1">
                  <span>{translate("More")}</span>
                  <ArrowUpLeft01Icon />
                </span>
              </p>


            </div>




            <div className="flex justify-center md:order-2 order-2 my-4 md:my-0">
              <div className="w-[325px] bg-[#D9D9D9] h-[260px] rounded-[40px] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={'uj'}
                  width={325}
                  height={260}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <h3 className="
              font-semibold text-right
              md:order-3
              order-1
              whitespace-pre-line
              text-[24px]
              text-nowrap
            ">
              {item.title} <br/>
              {item.location}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
}
