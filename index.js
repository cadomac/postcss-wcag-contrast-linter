module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-wcag-contrast-linter',
    Rule(rule) {
      console.log(rule)
    }
  }
}

module.exports.postcss = true
