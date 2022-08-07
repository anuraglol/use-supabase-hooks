const fs = require("fs");

const rootReadmeContents = fs.readFileSync("README.md");
const packageReadmeContents = fs.readFileSync("package/README.md");

if (rootReadmeContents !== packageReadmeContents) {
  fs.writeFileSync("README.md", packageReadmeContents, "utf-8");
}
