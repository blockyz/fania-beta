import { getEvents } from "@/lib/data";
import { translate } from "@/lib/helper";
import { ArrowUpLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

const data = getEvents();

export default function EventsPage() {
  return (
    <section className="w-full pb-[74px]">
      {/* Section Title */}
      <div className="text-center text-[24px] pt-44 pb-12 text-[#333]">
        <h2 className=" font-semibold whitespace-pre-line leading-[1.6]">
          {translate("AllExhibitionsAndAwards")}
        </h2>
        <p className="text-sm mt-1 opacity-80 whitespace-pre-line">
          {translate("AcrossAllFields")}
        </p>
      </div>

      {data.map((item) => (
        <div key={item.id} className="px-6 md:px-24 pb-14 w-full">
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-[1fr_auto_1fr]
              items-center
              text-[#333]
            "
          >
            {/* title */}
            <div className="
              font-semibold 
              text-right 
              md:order-1 order-1 
              whitespace-pre-line 
              text-[24px] 
              text-nowrap 
              pb-5 md:mb-0
              flex flex-col md:justify-start md:items-start items-center justify-center
            ">
              <h3>
                {item.title}
              </h3>
              <h3>
                {item.location}

              </h3>
            </div>

            {/* image */}
            <div className="
              flex justify-center 
              md:order-2 order-2 
              pb-3 md:mb-0
            ">
              <div className="w-[325px] bg-[#D9D9D9] h-[260px] rounded-[40px] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={325}
                  height={260}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* description */}
            <div className="
              md:order-3 order-3 
              md:pr-[84px] 
              text-right
              flex flex-col md:justify-start md:items-start items-center justify-center pr-4
            ">
              <p dir="rtl" className="leading-6     block md:inline
    text-center md:text-justify
    line-clamp-3 md:line-clamp-none text-[#333]">
                {item.describe}
                <span className="inline-flex items-center gap-1 whitespace-nowrap pr-1">
                  {translate("ReadMore")}
                  <HugeiconsIcon
                    icon={ArrowUpLeft01Icon}
                    className="w-4 h-4 inline-block align-middle"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
