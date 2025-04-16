import PrivacyPolicy from "./PrivacyPolicyClient";
import { generatePageMetadata } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata({
    locale: locale,
    namespace: "PrivacyPolicy",
    path: "/privacy-policy",
  });
}

const Page = () => {
  return <PrivacyPolicy />;
};
export default Page;
