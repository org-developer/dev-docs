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
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],
  cs: [
    'cs-intro',
    {
      type: 'category',
      label: '컴퓨터공학',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'cs/network',
        'cs/http',
        'cs/https',
        'cs/database',
        'cs/oop',
      ]
    },
  ],

  setup: [
    'setup-intro',
    {
      type: 'category',
      label: '개발환경',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'setup/basic',
        'setup/mysql',
        'setup/jdk',
      ]
    },
  ],

  ue4: [
    'ue4-intro',
    {
      type: 'category',
      label: '언리얼4',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'ue4/ue4',
      ]
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
