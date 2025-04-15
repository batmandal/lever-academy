/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "daily",
  priority: 0.7,
  outDir: "public",
  sitemapSize: 5000,
  exclude: ["/admin/*", "/404", "/500"],
  alternateRefs: [
    {
      href: "https://lever-academy.vercel.app/en",
      hreflang: "en",
    },
    {
      href: "https://lever-academy.vercel.app/mn",
      hreflang: "mn",
    },
  ],
};
