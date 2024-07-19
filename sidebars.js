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
  tutorialSidebar: [
    {
      type: "doc",
      id: "introduction",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/index",
        "getting-started/add-a-device",
        "getting-started/add-a-contact",
        "getting-started/add-an-action",
        "getting-started/add-a-geofence",
        "getting-started/manage-organisations",
        "getting-started/managing-a-device",
      ],
    },
    {
      type: "category",
      label: "Device Guides",
      items: [
        "device-guides/index",
        "device-guides/supported-devices",
        "device-guides/rak-sticker-guide",
        "device-guides/sensecap-t1000",
        "device-guides/browan-tabs-object-locator-guide",
      ],
    },
    {
      type: "category",
      label: "API Guides",
      items: [
        "api-guides/index",
        "api-guides/authenticating",
        "api-guides/importing-into-postman",
        "api-guides/location-engine",
      ],
    },
    {
      type: "category",
      label: "ChirpStack Guides",
      items: ["chirpstack-guides/migrating-from-helium-console"],
    },
  ],
};

module.exports = sidebars;
