import { getEventDetail } from "@/lib/data";
import { translate } from "@/lib/helper";


const Ed = getEventDetail();
export default function SecondDescription() {

  return (
    <div className="flex flex-col max-auto justify-center px-4 md:px-[264px] space-y-4 md:space-y-6 text-right max-w-full md:max-w-full">

      <h2 className="text-lg sm:text-xl md:text-2xl font-bold pb-2 md:pb-6 text-justify">{Ed.detailTitleKey}</h2>
      <p className="text-[13px] sm:text-sm md:text-base leading-6 md:leading-7 font-medium text-[#60646C] pb-2 md:pb-4  ">
        {Ed.detailTextKey}
        </p>

    </div>
  );
}
