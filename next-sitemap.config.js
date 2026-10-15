module.exports = {
  siteUrl: "https://www.gshomesolutions.com.br/",
  generateRobotsTxt: true,
  changefreq: "monthly",
  exclude: ["/server-sitemap.xml", "/admin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin",
      },
    ],
    additionalSitemaps: [
      "https://www.gshomesolutions.com.br/server-sitemap.xml",
    ],
  },
  priority: 0.7,
  sitemapSize: 5000,
};
