import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
// import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }] // 指向 public 目录下的 style.css
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    searchProPlugin({
      autoSuggestions:false,
      indexContent: true,
    }),
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 设置为简体中文
    }
  },
  title: "Axolotland wiki",
  description: "Axolotland 维基百科",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    // author: "McaxDev",
    // authorAvatar: "/head.png",
    docsRepo: "https://github.com/McaxDev/axo-wiki",
    docsBranch: "master",
    docsDir: "/docs/",
    lastUpdatedText: "最近更新",
    primaryColor: '#28abce',
    catalogTitle: '本页内容',
    // autoSetSeries: true,
    // series 为原 sidebar
    // algolia: {
    //   appId: 'XVG4Q0JUB9',
    //   apiKey: '53f4527b9b2b8c05d0b0f04c7ef022ee',
    //   indexName: 'axowiki_index',
    //   inputSelector: '<div></div>',
    //   algoliaOptions: { 'facetFilters': ["lang:zh-CN"] },
    //   debug: false // Set debug to true if you want to inspect the dropdown
    // },
    series: {
      "/docs/": [
        {
          text: "游戏支持",
          children: ["/docs/games/list"],
        },
        {
          text: "常见问题",
          children: ["/docs/help/geyser","/docs/help/java","/docs/help/mod"],
          // collapsible:true
        },
        {
          text: "其他文档",
          children: ["/docs/others/command"],
          // collapsible:true
        },
        {
          text: "网站",
          children: ["/docs/webs/gpt"],
          // collapsible:true
        },
        {
          text: "隐私协议与我们",
          children: ["/docs/eula/about","/docs/eula/privacy","/docs/eula/disclaimers","/docs/eula/useage"],
          // collapsible:true
        },
        {
          text: "其他",
          children: ["/docs/others/donate"],
          // collapsible:true
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      {
        text: "进入文档",
        children: [
          { text: "游戏支持", link: "/docs/games/list" },
          { text: "常见问题", link: "/docs/help/geyser" },
          { text: "其他文档", link: "/docs/others/command" },
          { text: "网站", link: "/docs/webs/gpt" },
          { text: "隐私协议与我们", link: "/docs/eula/about" },
        ],
      },
      {
        text: '更多网站',
        children: [
          {text:'官网',link:'https://www.mcax.cn/',icon:'Earth'},
          {text:'Axo-GPT',link:'https://gpt.mcax.cn/#/',icon:'Chat'},
          {text:'文件站',link:'https://cloud.mcax.cn/login',icon:'FileStorage'},
          {text:'数据可视化',link:'https://datahub.mcax.cn/#/',icon:'ChartLineData'},
          {text:'论坛',link:'https://bbs.mcax.cn/',icon:'Forum'},
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `您好，这里是Axolotland的全新wiki站。如有编写错误，请到<a href="https://github.com/McaxDev/axo-wiki/issues">Issues<a/>提交反馈。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>Axolotland：514928673</li>
            <li>Axolotland-java：433267459</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "更多链接",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/McaxDev">GitHub<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "赞助",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
  }),
  // debug: true,
});
