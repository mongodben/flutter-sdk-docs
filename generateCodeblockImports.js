const fs = require("fs");
const path = require("path");

const importsArr = [];
fs.readdirSync(path.join(__dirname, "docs/snippets")).forEach((snippet) => {
  console.log(snippet);
  const snippetComponentName = snippet
    .split(/\.|-|_/)
    .map((segment) => {
      return segment[0].toUpperCase() + segment.substring(1);
    })
    .join("");
  const importStatement = `import ${snippetComponentName} from '!!raw-loader!./snippets/${snippet}';`;
  importsArr.push(importStatement);
});
console.log(`

import statements for the docs:

`);
console.log(importsArr.join("\n"));
