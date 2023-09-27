module.exports = {
  siteUrl: process.env.baseURL || "http://localhost:3000",
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
