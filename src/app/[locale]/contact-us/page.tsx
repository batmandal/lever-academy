import ContactUs from "./ContactUsClient";

import { generatePageMetadata } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata({
    locale: locale,
    namespace: "ContactUs",
    path: "/contact-us",
  });
}

const Page = () => {
  return <ContactUs />;
};
export default Page;
