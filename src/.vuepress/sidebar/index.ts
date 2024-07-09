import { sidebar } from "vuepress-theme-hope";
import {algorithm} from "./algorithm.js";
import {information} from "./information.js";
import {program} from "./program.js";
import {openSourceProject} from "./open-source-project.js";

export default sidebar({
  // 应该把更精准的路径放前面
  "/information/": information,
  "/program/": program,
  "/algorithm/": algorithm,
  "/open-source-project/": openSourceProject,

  // 必须放在最后面
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
