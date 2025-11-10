import Image from "next/image";
import { translate } from "@/lib/helper";
import { getCertifications } from "@/lib/data";

export default function Certification() {
  const certifications = getCertifications();

  return (
    <section className="w-full px-10 py-10">
      <h2 className="text-2xl text-center font-semibold pt-40 pb-12">
        {translate("CertificatesAndLicenses")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-24">
        {certifications.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="w-full h-[200px] md:h-[317px] bg-[#FAFAFA] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={translate(item.title)}
                width={663}
                height={317}
                className="w-full h-full object-cover"
              />
            </div>

            <h6 className="pt-4 font-medium">
              {translate(item.title)}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
}
