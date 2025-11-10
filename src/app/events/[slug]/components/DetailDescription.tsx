import { getEventDetail } from "@/lib/data";
import { translate } from "@/lib/helper";

export default function DetailDescription() {
  const Ed = getEventDetail();

  return (
    <div className="flex flex-col space-y-4 md:space-y-6 text-right px-4 md:px-0 max-w-full md:max-w-full">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold pb-2 md:pb-6">
        {Ed.detailTitleKey}
      </h2>

      <p className="text-[13px] text-justify sm:text-sm md:text-base leading-6 md:leading-7 font-medium text-[#60646C] pb-2 md:pb-4 w-full md:w-full">
        {Ed.detailTextKey}
      </p>

      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-full">
        <p className="text-[#80838D] text-[13px] sm:text-sm md:text-base font-semibold">
          {translate('Written')} :
        </p>

        {Ed.texts.map((text, index) => (
          <p
            key={index}
            className="flex items-start gap-2 text-[13px] sm:text-sm md:text-base leading-5 md:leading-6 w-full"
          >
            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 md:mt-2.5 shrink-0" />
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
