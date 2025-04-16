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

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://lever-academy.vercel.app/${locale}${path}`,
      siteName: "Lever Academy",
      images: [
        {
          url: `https://lever-academy.vercel.app/og-${
            path.replace(/\//g, "") || "home"
          }.jpg`,
          width: 1200,
          height: 630,
          alt: `Lever Academy ${namespace}`,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `https://lever-academy.vercel.app/og-${
          path.replace(/\//g, "") || "home"
        }.jpg`,
      ],
    },
  };
}
