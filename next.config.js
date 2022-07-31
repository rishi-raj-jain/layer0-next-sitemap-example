// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0 } = require('@layer0/next/config')

module.exports = withLayer0({
  // Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
  // the logs in the Layer0 developer console.
  layer0SourceMaps: false,
})
