import { printLog, timesFive } from "./helper.js";
import { root } from "./elements.js";
console.log("5 x 5 = ", timesFive(5));

document.addEventListener("DOMContentLoaded", () => {
  root.innerHTML = "i have changed";

  const createNewNode = (htmlTag, className, innerText) => {
    const newNode = document.createElement(htmlTag);
    if (className) {
      newNode.className = className;
    }
    if (innerText) {
      let text = document.createTextNode(innerText);
      newNode.appendChild(text);
    }
    return newNode;
  };

  const header = createNewNode("h1", "blue", "Friedi");
  root.appendChild(header);
});
