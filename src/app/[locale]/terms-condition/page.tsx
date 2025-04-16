import { generatePageMetadata } from "@/lib";
import TermsCondition from "./TermsConditionClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata({
    locale: locale,
    namespace: "TermsAndConditions",
    path: "/terms-condition",
  });
}

const Page = () => {
  return <TermsCondition />;
};
export default Page;
