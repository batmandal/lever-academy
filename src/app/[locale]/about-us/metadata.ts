import { generatePageMetadata } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return generatePageMetadata({
    locale: params.locale,
    namespace: "AboutUs.meta",
    path: "/about-us",
  });
}
