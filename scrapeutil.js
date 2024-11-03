export { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
export { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
export { CSV } from "https://code4fukui.github.io/CSV/CSV.js";
export { sleep } from "https://js.sabae.cc/sleep.js";
export { table2json } from "https://codeforkosen.github.io/kosenconf-opendata/table2json.js";
export { table2csv } from "https://codeforkosen.github.io/kosenconf-opendata/table2csv.js";
export { dl2json } from "./dl2json.js";

export const nextTag = (tag) => {
  const nodes = tag.parentNode.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] == tag) return nodes[i + 1];
  }
  return null;
};
export const prevTag = (tag) => {
  const nodes = tag.parentNode.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] == tag) return nodes[i - 1];
  }
  return null;
};
