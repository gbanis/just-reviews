module.exports = {
  siteTitle: "Just.reviews", // Site title.
  siteTitleShort: "Just.reviews", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Just Reviews", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://just.reviews", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Just reviews: doing all the research so you don't have to.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "907976829372678", // FB Application ID for using app insights
  googleAnalyticsID: "UA-126209878-1", // GA tracking ID.
  disqusShortname: "just-reviews", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "George Banis", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Cambridge, MA", // User location to display in the author segment.
  userAvatar: "http://gbanis.com/assets/george-banis.jpg", // User avatar to display in the author segment.
  userDescription:
    "I spend endless hours on the interwebs researching what to buy. And I'd love to share that research with you by writing reviews, so you can make choices you won't regret!",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/gbanis",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: `Copyright © ${(new Date()).getFullYear()}. Just.reviews`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FF9A00", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};
