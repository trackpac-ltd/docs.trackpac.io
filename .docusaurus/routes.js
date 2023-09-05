import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '684'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6ec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ca3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '575'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '315'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2bf'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '531'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c6d'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'eab'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'db0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '01a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '638'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '90b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'a6f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'fe7'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'a2b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '352'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '586'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '553'),
    routes: [
      {
        path: '/docs/add-a-contact',
        component: ComponentCreator('/docs/add-a-contact', 'd4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/add-a-geofence',
        component: ComponentCreator('/docs/add-a-geofence', '6e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/add-an-action',
        component: ComponentCreator('/docs/add-an-action', '7d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started-guide',
        component: ComponentCreator('/docs/getting-started-guide', 'fe2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/managing-a-device',
        component: ComponentCreator('/docs/managing-a-device', '189'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/organisations',
        component: ComponentCreator('/docs/organisations', '8e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/rak-sticker-guide',
        component: ComponentCreator('/docs/rak-sticker-guide', '553'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8b3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
