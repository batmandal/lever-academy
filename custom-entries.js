const basePaths = [
  "/",
  "/about-us",
  "/contact-us",
  "/features",
  "/privacy-policy",
  "/terms-condition",
];

const locales = ["en", "mn"];

const pages = [];

for (const locale of locales) {
  for (const base of basePaths) {
    const path = base === "/" ? `/${locale}` : `/${locale}${base}`;
    pages.push(path);
  }
}

module.exports = pages;
