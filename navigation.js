const navBar = {
  title: "MongoDB Realm Docs",
  logo: {
    alt: "Realm Logo",
    src: "/img/realm-logo.png",
  },
  items: [
    {
      label: "Get Started",
      href: "/get-started/introduction-mobile",
    },
    {
      type: "dropdown",
      label: "SDKs",
      position: "left",
      items: [
        {
          href: "/sdk/flutter/intro",
          label: "Alpha",
        },
        {
          href: "/sdk/flutter-2/intro",
          label: "Beta",
        },
      ],
    },
    {
      type: "dropdown",
      label: "More",
      position: "left",
      items: [
        {
          href: "/studio",
          label: "Realm Studio",
        },
        {
          href: "https://docs.mongodb.com/realm-legacy/docs/",
          label: "Realm (Legacy)",
        },
        {
          href: "http://stitch-docs-old.s3-website-us-east-1.amazonaws.com/",
          label: "MongoDB Stitch (Legacy)",
        },
        {
          href: "/release-notes",
          label: "Release Notes",
        },
      ],
    },
    {
      label: "App Services",
      position: "left",
      href: "https://docs.mongodb.com/realm/cloud/",
    },
    {
      type: "docsVersionDropdown",
      docsPluginId: "flutter",
    },
    {
      href: "https://github.com/mongodben/flutter-sdk-docs",
      label: "GitHub",
      position: "right",
    },
  ],
};

module.exports = navBar;
