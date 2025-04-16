import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const redirects = async () => [
  {
    source: "/en",
    destination: "/en/home",
    permanent: true,
  },
  {
    source: "/mn",
    destination: "/mn/home",
    permanent: true,
  },
  {
    source: "/",
    destination: "/mn/home",
    permanent: true,
  },
];

const nextConfig = {
  redirects,
};

export default withNextIntl(nextConfig);
