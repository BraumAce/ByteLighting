import { sidebar } from "vuepress-theme-hope";
import { algorithm } from "./algorithm.js";
import { information } from "./information.js";
import { program } from "./program.js";
import { openSourceProject } from "./open-source-project.js";

export default sidebar({
  // 应该把更精准的路径放前面
  "/information/": information,
  "/program/": program,
  "/algorithm/": algorithm,
  "/open-source-project/": openSourceProject,
});
