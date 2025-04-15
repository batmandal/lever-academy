/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lever-academy.vercel.app || "http://localhost:3000',
  generateRobotsTxt: true, //
  generateIndexSitemap: true, //
  changefreq: "daily",
  priority: 0.7,
  outDir: "public",
  sitemapSize: 5000,
  exclude: ["/admin/*"],
  alternateRefs: [
    {
      href: "https://lever-academy.vercel.app/en" || "http://localhost:3000/en",
      hreflang: "en",
    },
    {
      href: "https://lever.academy/mn" || "http://localhost:3000/mn",
      hreflang: "mn",
    },
  ],
};
