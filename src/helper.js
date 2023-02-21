export const createNewNode = (htmlTag, className, innerText) => {
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
