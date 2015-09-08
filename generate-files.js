/* eslint no-var:0, indent:0, no-console:0, no-sync:0 */

// move these to argv
console.log(process.argv.length, process.argv)
var total = 1000  // move to process.argv
var template = 'jade'

// read the file
var fsUtil = require('fs')
var templateSource = null
switch ( template ) {
    case 'jade':
        templateSource = fsUtil.readFileSync('./template.html.jade')
        break

    default:
        throw new Error('Unknown template: ' + template)
}

// prepare
function logError (err) {
	if ( err )  console.log(err.stack)
}

// write files
for ( var index = 0; index < total; index++ ) {
	var templateOutPath = './src/documents/test-' + index + '.html.jade'
	var templateOutSource = templateSource.toString().replace(/[%]/g, index)
	fsUtil.writeFile(templateOutPath, templateOutSource, logError)
}
