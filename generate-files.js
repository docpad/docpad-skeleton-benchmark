// generate basic eco test documents in the ./src/documents folder
var fs = require('fs');
var template = fs.readFileSync('./template.html.jade');

for(var index=0; index<1000; index++) {
  fs.writeFile("./src/documents/test-"+index+".html.jade", template.toString().replace(/[%]/g, index), function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
