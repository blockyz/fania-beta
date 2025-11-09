import { getEventDetail } from "@/lib/data";

export default function DetailImages() {
  const Ed = getEventDetail();

  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-[264px] pb-8 max-w-full">
      
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full">
        
        <div className="flex flex-col w-full md:w-[668px] h-[300px] sm:h-[400px] md:h-[508px] rounded-[40px] bg-gray-200 overflow-hidden">
          <img src={Ed.mainImage} className="w-full h-full object-cover" />
        </div>

        <div className="md:flex grid grid-cols-3 md:flex-col gap-4 w-full md:w-auto overflow-x-auto md:overflow-x-visible">
          {Ed.subImages.map((img, index) => (
            <div
              key={index}
              className="shrink-0 w-full md:w-[220px] md:h-40 rounded-[40px] aspect-square md:aspect-auto bg-gray-200 overflow-hidden"
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      <p className="text-sm sm:text-base text-right  w-full md:w-full">
        {Ed.imageCaptionKey}
      </p>

    </div>
  );
}
