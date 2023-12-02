import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '351'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a14'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9cb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e2e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '270'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3b6'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7ce'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '561'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '675'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '7fb'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '6da'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e5d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a07'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '687'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '6c4'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '089'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '7ae'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b80'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a6b'),
    routes: [
      {
        path: '/docs/advanced-guides/introduction',
        component: ComponentCreator('/docs/advanced-guides/introduction', '019'),
        exact: true
      },
      {
        path: '/docs/api-guides/',
        component: ComponentCreator('/docs/api-guides/', '363'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-guides/authenticating',
        component: ComponentCreator('/docs/api-guides/authenticating', 'bc1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-guides/importing-into-postman',
        component: ComponentCreator('/docs/api-guides/importing-into-postman', '9ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api-guides/location-engine',
        component: ComponentCreator('/docs/api-guides/location-engine', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/chirpstack-guides/migrating-from-helium-console',
        component: ComponentCreator('/docs/chirpstack-guides/migrating-from-helium-console', '9c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/device-guides/',
        component: ComponentCreator('/docs/device-guides/', '9ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/device-guides/browan-tabs-object-locator-guide',
        component: ComponentCreator('/docs/device-guides/browan-tabs-object-locator-guide', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/device-guides/rak-sticker-guide',
        component: ComponentCreator('/docs/device-guides/rak-sticker-guide', 'b82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/device-guides/sensecap-t1000',
        component: ComponentCreator('/docs/device-guides/sensecap-t1000', 'b35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/device-guides/supported-devices',
        component: ComponentCreator('/docs/device-guides/supported-devices', '9fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/',
        component: ComponentCreator('/docs/getting-started/', 'cd1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/add-a-base',
        component: ComponentCreator('/docs/getting-started/add-a-base', '636'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/add-a-contact',
        component: ComponentCreator('/docs/getting-started/add-a-contact', '099'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/add-a-device',
        component: ComponentCreator('/docs/getting-started/add-a-device', '167'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/add-a-geofence',
        component: ComponentCreator('/docs/getting-started/add-a-geofence', '868'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/add-an-action',
        component: ComponentCreator('/docs/getting-started/add-an-action', '8f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/manage-organisations',
        component: ComponentCreator('/docs/getting-started/manage-organisations', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/managing-a-device',
        component: ComponentCreator('/docs/getting-started/managing-a-device', 'e2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '457'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction 2',
        component: ComponentCreator('/docs/introduction 2', '1ad'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9e2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
