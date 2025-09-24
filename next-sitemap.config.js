/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ismadesignbuild.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ismadesignbuild.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority for pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/projects': 0.8,
      '/about': 0.7,
      '/contact': 0.9,
    };

    return {
      loc: path, 
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};