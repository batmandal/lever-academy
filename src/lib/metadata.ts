import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generatePageMetadata({
  locale,
  namespace,
  path,
}: {
  locale: string;
  namespace: string;
  path: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  const title = t("meta.title");
  const description = t("meta.description");

  return {
    title,
    description,
    // icons: {
    //   icon: "/favicon.ico",
    // },
    openGraph: {
      title,
      description,
      url: `https://lever-academy.vercel.app/${locale}${path}`,
      siteName: "Lever Academy",
      locale,
      type: "website",
      images: [
        {
          url: `https://lever-academy.vercel.app/og-${path.replace(
            /\//g,
            ""
          )}.jpg`,
          width: 1200,
          height: 630,
          alt: `Lever Academy ${namespace}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `https://lever-academy.vercel.app/og-${path.replace(/\//g, "")}.jpg`,
      ],
    },
  };
}
