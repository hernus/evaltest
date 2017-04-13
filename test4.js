var babel = require("babel-core");

var require = (name) => {
  var code = `
    (function() {
      var module = {};
      module.exports = {};
      ${files[name]}
      return module.exports;
    }
    )();
  `;
   return eval(code);
}

var files = {}

files.helloWorld =
  ` module.exports = function() {
      return "Hello Bappo World";
    };
  `;

files.go =
  ` var helloWorld = require("helloWorld");
    module.exports = function() {
      console.log("The message is " + helloWorld());
    };
  `;

var go = require('go');
go();
