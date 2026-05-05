import { sidebar } from "vuepress-theme-hope";
import { ai } from "./ai.js";
import { program } from "./program.js";
import { architecture } from "./architecture.js";
import { technology } from "./technology.js";
import { algorithm } from "./algorithm.js";
import { backend } from "./backend.js";

export default sidebar({
  "/ai/": ai,
  "/program/": program,
  "/architecture/": architecture,
  "/computer/technology/": technology,
  "/computer/algorithm/": algorithm,
  "/computer/backend/": backend,
});
