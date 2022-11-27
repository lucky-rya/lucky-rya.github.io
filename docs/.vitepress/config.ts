// export default {
//   title: 'VitePress',
//   description: 'Just playing around.'
// }

import MarkdownIt from "markdown-it";
import { linkToCardPlugin } from "@luckrya/markdown-it-link-to-card";
import type { LinkToCardPluginOptions } from "@luckrya/markdown-it-link-to-card";

// const md = MarkdownIt({ html: true }).use<LinkToCardPluginOptions>(
//   linkToCardPlugin,
//   {
//     // options
//     size: "small",
//   }
// );
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    nav: [{ text: "Home", link: "/index" }],
  },

  markdown: {
    config: (md) => {
      md.use<LinkToCardPluginOptions>(linkToCardPlugin, {
        size: "small",
      });
    },
  },

  // ...
});