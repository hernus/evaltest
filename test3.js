var files = {};
files.helloWorld = `
  module.exports = function helloWorld() {
     return "Hello World  !!!!!!"
  }
`;

var require = (name) => {
  var code = `
    (function() {
      var module = {};
      module.exports = {};
      ${files[name]}
      return module.exports;
    })();
  `;
  return eval(code);
}

var helloWorld = require("helloWorld");
console.log(helloWorld());
