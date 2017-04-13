var code = `
  function helloWorld() {
     return "Hello World!!!!!"
  }
`;

var code2 = `
  var message = helloWorld();
  console.log( message );
`;

eval(code);
eval(code2);
