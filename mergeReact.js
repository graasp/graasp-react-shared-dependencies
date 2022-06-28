// ref: https://stackoverflow.com/questions/39385269/how-to-create-shared-package-json-for-multiple-npm-repositories

const fs = require('fs')

const localPackageJson = require('../../package.json')
const sharedPackageJson = require('./package.json')

Object.assign(localPackageJson.dependencies, sharedPackageJson.reactDependencies)

fs.writeFileSync('../../package.json', JSON.stringify(localPackageJson, null, 2))
