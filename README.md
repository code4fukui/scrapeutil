# scrapeutil

## sample

```js
import { fetchOrLoad, HTMLParser, CSV, nextTag, prevTag, table2json, table2csv, sleep } from "./scrapeutil.js";

const fn = "q-league-index.csv";
const url = "https://q-league.net/div/";

const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);

const divs = dom.querySelectorAll(".item div.title a,h4");
console.log(divs.length);
```
