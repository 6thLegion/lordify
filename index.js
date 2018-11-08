const replace = require('lodash/replace')
module.exports = lordify

function lordify (string) {
  const lordified = replace(string, 'm', 'K')
  return lordified
}
