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
  },
  priority: 0.7,
  sitemapSize: 5000,
};
