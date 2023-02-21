import { createNewNode } from "./helper.js";
import { root } from "./elements.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = createNewNode("h1", "blue", "Friedi");
  root.appendChild(header);
});
