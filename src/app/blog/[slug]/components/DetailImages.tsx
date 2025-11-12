import Image from "next/image";
import { getBlogDetail } from "@/lib/data";

  const Bd = getBlogDetail();
export default function DetailImages() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-[264px] pb-8 max-w-full">
      
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full">
        
        <div className="relative w-full md:w-[668px] h-[300px] sm:h-[400px] md:h-[508px] rounded-[40px] overflow-hidden">
          <Image
            src={Bd.mainImage}
            alt=""
            fill
            className="object-cover bg-gray-200"
          />
        </div>

        <div className="md:flex grid grid-cols-3 md:flex-col gap-4 w-full md:w-auto overflow-x-auto md:overflow-x-visible">
          {Bd.subImages.map((img, index) => (
            <div
              key={index}
              className="relative shrink-0 w-full md:w-[220px] md:h-40 rounded-[40px] aspect-square md:aspect-auto overflow-hidden"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover bg-gray-200"
              />
            </div>
          ))}
        </div>

      </div>

      <p className="text-sm sm:text-base text-right w-full">
        {Bd.imageCaptionKey}
      </p>

    </div>
  );
}
