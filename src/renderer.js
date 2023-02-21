// imports must have .js extention included in path
import { links } from "./db/data.js";
import {
  createNewNode,
  createUnorderedList,
  addAttributes,
} from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");

  const header = createNewNode("h1", "header", "Welcome");
  root.appendChild(header);

  const ul = createUnorderedList(links, "list");
  root.appendChild(ul);
});
