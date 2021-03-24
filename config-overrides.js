const { override, babelExclude } = require('customize-cra')
const path = require('path');

// module.exports = override(
//     addBabelPlugins(
//         '@babel/plugin-proposal-nullish-coalescing-operator',
//         '@babel/plugin-syntax-optional-chaining'
//     )
// )
module.exports = override(babelExclude([path.resolve("node_modules")]));
