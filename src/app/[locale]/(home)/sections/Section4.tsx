import { PriceCard } from "@/app/[locale]/(home)/components/PriceCard";
import { useTranslations } from "next-intl";

export const Section4 = () => {
  const t = useTranslations("Section4");
  return (
    <div>
      <div className="mb-16">
        <h2 className="text-textprimary text-[56px] font-bold mb-2">
          {t("maintext")}
        </h2>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        <PriceCard bgcolor="#f4f7ff" />
        <PriceCard bgcolor="#f9f9f9" />
        <PriceCard bgcolor="#fff2eb" />
      </div>
    </div>
  );
};
