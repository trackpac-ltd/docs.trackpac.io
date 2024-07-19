import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2de'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '402'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5d2'),
            routes: [
              {
                path: '/docs/advanced-guides/introduction',
                component: ComponentCreator('/docs/advanced-guides/introduction', '45a'),
                exact: true
              },
              {
                path: '/docs/api-guides/',
                component: ComponentCreator('/docs/api-guides/', 'c02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-guides/authenticating',
                component: ComponentCreator('/docs/api-guides/authenticating', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-guides/importing-into-postman',
                component: ComponentCreator('/docs/api-guides/importing-into-postman', '23b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-guides/location-engine',
                component: ComponentCreator('/docs/api-guides/location-engine', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chirpstack-guides/migrating-from-helium-console',
                component: ComponentCreator('/docs/chirpstack-guides/migrating-from-helium-console', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device-guides/',
                component: ComponentCreator('/docs/device-guides/', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device-guides/browan-tabs-object-locator-guide',
                component: ComponentCreator('/docs/device-guides/browan-tabs-object-locator-guide', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device-guides/rak-sticker-guide',
                component: ComponentCreator('/docs/device-guides/rak-sticker-guide', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device-guides/sensecap-t1000',
                component: ComponentCreator('/docs/device-guides/sensecap-t1000', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/device-guides/supported-devices',
                component: ComponentCreator('/docs/device-guides/supported-devices', '1b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/',
                component: ComponentCreator('/docs/getting-started/', '474'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/add-a-contact',
                component: ComponentCreator('/docs/getting-started/add-a-contact', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/add-a-device',
                component: ComponentCreator('/docs/getting-started/add-a-device', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/add-a-geofence',
                component: ComponentCreator('/docs/getting-started/add-a-geofence', '1c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/add-an-action',
                component: ComponentCreator('/docs/getting-started/add-an-action', 'a93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/manage-organisations',
                component: ComponentCreator('/docs/getting-started/manage-organisations', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/managing-a-device',
                component: ComponentCreator('/docs/getting-started/managing-a-device', '07d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
