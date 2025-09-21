import { sidebar } from "vuepress-theme-hope";
import { algorithm } from "./algorithm.js";
import { program } from "./program.js";
import { openProject } from "./open-project.js";
import { framework } from "./framework.js";
import { architecture } from "./architecture.js";
import { computer } from "./computer.js";

export default sidebar({
  // 应该把更精准的路径放前面
  "/program/": program,
  "/computer/": computer,
  "/open-project/": openProject,
  "/framework/": framework,
  "/architecture/": architecture,
  "/algorithm/": algorithm,
});
