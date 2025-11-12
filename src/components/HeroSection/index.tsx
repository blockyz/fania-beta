
import { PlayIcon } from "@/assets/icon";
import { ArrowDownDoubleIcon } from "@/assets/icon/arrow-down";
import { translate } from "@/lib/helper";
import { ArrowDownDoubleFreeIcons, PlaneIcon, PlayFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#D9D9E0] flex flex-col justify-center items-center overflow-hidden rounded-4xl">
      <div className="absolute bottom-0 left-0 right-0 h-[104px] bg-linear-to-t from-black via-gray-800/60 to-[#D9D9E0]" />

      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-start justify-between px-6 md:px-12 lg:px-16 gap-10 md:gap-6 pt-16 md:pt-0">
        <div className="flex flex-col gap-4 text-right">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black">
            {translate('HeroSloganLine1')}<br />
            {translate('HeroSloganLine2')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">
            {translate('HeroDescriptionLine1')}<br />
            {translate('HeroDescriptionLine2')}
          </p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-3 self-center pt-[70px] pb-[197px] md:pt-0 md:pb-0">
        <p className="text-sm md:text-base text-white font-medium">
          {translate('HeroPlayVideo')}
        </p>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-white flex items-center justify-center rounded-full shadow-md hover:scale-105 transition-transform">
          <HugeiconsIcon icon={PlayFreeIcons} className="text-black fill-black stroke-black" />
        </div>
      </div>



      <div className="absolute bottom-10 w-full flex gap-2 items-center justify-center text-center text-white">
        <HugeiconsIcon icon={ArrowDownDoubleFreeIcons} />
        <p className="text-sm md:text-base font-medium mb-1">
          {translate('HeroScrollDown')}
        </p>
        <HugeiconsIcon icon={ArrowDownDoubleFreeIcons} />

      </div>
    </section>
  );
}
