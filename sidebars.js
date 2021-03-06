/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  getStarted: [{ type: "autogenerated", dirName: "get-started" }],

  flutter2: [
    {
      type: "doc",
      label: "Flutter SDK (Beta)",
      id: "sdk/flutter-2/intro",
    },
    {
      type: "doc",
      label: "Install Realm",
      id: "sdk/flutter-2/install",
    },
    {
      type: "doc",
      label: "Quick Start",
      id: "sdk/flutter-2/quick-start",
    },
    {
      type: "doc",
      label: "Realm Database",
      id: "sdk/flutter-2/realm-database",
    },
  ],
  studio: [
    {
      type: "doc",
      label: "Get Started",
      id: "studio/index",
    },
    { type: "doc", id: "release-notes/index" },
  ],
  releaseNotes: [
    {
      type: "doc",
      label: "Release Notes",
      id: "release-notes/index",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
