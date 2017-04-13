var babel = require("babel-core");
var babelOptions = { presets: ['es2015'], "plugins": ["transform-remove-strict-mode"] };

var code = `
  const helloWorld = () => {
    return "hello World";
  }
`;

var result = babel.transform(code, babelOptions);

process.stdout.write(result.code);
