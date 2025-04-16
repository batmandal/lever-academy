// import { defineRouting } from "next-intl/routing";
// import { createNavigation } from "next-intl/navigation";

// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ["en", "mn"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });

// // Lightweight wrappers around Next.js' navigation APIs
// // that will consider the routing configuration
// export const { Link, redirect, usePathname, useRouter, getPathname } =
//   createNavigation(routing);

import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// ✅ Статик literal төрлөөр тодорхойлно
export const routing = defineRouting({
  locales: ["en", "mn"] as const,
  defaultLocale: "en" as const,
});

// ✅ Төрлийн хувилбар
export type Locale = (typeof routing.locales)[number];

// ✅ Navigation wrappers
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
