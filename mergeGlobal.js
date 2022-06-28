const fs = require("fs");

const localPackageJson = require("path-to-local-project/package.json");
const sharedPackageJson = require("./package.json");

Object.assign(
  localPackageJson.dependencies,
  sharedPackageJson.globalDependencies
);

fs.writeFileSync(
  "path-to-local-project/package.json",
  JSON.stringify(localPackageJson, null, 2)
);
