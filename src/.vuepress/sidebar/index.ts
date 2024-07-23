import { sidebar } from "vuepress-theme-hope";
import { algorithm } from "./algorithm.js";
import { program } from "./program.js";
import { openSourceProject } from "./open-source-project.js";
import { framework } from "./framework.js";
import { architecture } from "./architecture.js";
import { computer } from "./computer.js";

export default sidebar({
  // 应该把更精准的路径放前面
  "/program/": program,
  "/algorithm/": algorithm,
  "/open-source-project/": openSourceProject,
  "/computer/": computer,
  "/framework/": framework,
  "/architecture/": architecture,
});
