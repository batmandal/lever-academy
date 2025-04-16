import Features from "./FeaturesClient";
import { generatePageMetadata } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata({
    locale: locale,
    namespace: "Features",
    path: "/features",
  });
}
const Page = () => {
  return <Features />;
};
export default Page;
