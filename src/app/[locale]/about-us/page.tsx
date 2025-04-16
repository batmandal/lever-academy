import AboutUsClient from "./AboutUsClient";

import { generatePageMetadata } from "@/lib";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return generatePageMetadata({
    locale: locale,
    namespace: "AboutUs",
    path: "/about-us",
  });
}

export default function Page() {
  return <AboutUsClient />;
}
