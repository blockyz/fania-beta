'use client';

import { ArrowUpLeft01Icon } from "@/assets/icons/ArrowUpLeft";
import { getEvents } from "@/lib/data/Events/inexs";
import { translate } from "@/lib/helper";
import Image from "next/image";

export default function EventsPage() {
  const data = getEvents();
  return (
    <section className="w-full pb-[74px]">

      {/* Section Title */}
      <div className="text-center pt-44 pb-12 text-[#333]">
        <h2 className="text-2xl font-semibold whitespace-pre-line leading-[1.6]">
          {translate("All_Exhibitions_And_Awards")}
        </h2>
        <p className="text-sm mt-1 opacity-80 whitespace-pre-line">
          {translate("Across_All_Fields")}
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
            <div className="flex gap-2.5">
              <p className="
              text-sm leading-6 text-right
              md:order-1
              order-3
              md:mr-[84px]
              
            ">
                {translate(item.describe)}
                <div className="flex gap-">
                <ArrowUpLeft01Icon/>

                <a className="" href="">ادامه مطلب</a>


                </div>
                
                      

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
              font-semibold text-lg text-right
              md:order-3
              order-1
              whitespace-pre-line
              md:ml-[199px]
            ">
              {translate(item.title)}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
}
