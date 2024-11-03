export const dl2json = (dl) => {
  const res = [];
  let name = null;
  for (const c of dl.childNodes) {
    if (c.tagName == "DT") {
      name = c.text.trim();
    } else if (c.tagName == "DD") {
      res[name] = c.text.trim();
    }
  }
  return res;
};
