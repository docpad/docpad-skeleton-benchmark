/* eslint no-var:0, indent:0, no-console:0, no-sync:0 */

// move these to argv
if ( process.argv.length !== 4 ) {
	throw new Error('Not enough arguments were passed to me')
}
var template = process.argv.pop()
var total = process.argv.pop()

// read the file
var safefs = require('safefs')
var templateSource = null
switch ( template ) {
    case 'jade':
        templateSource = safefs.readFileSync('./templates/template.html.jade')
        break

    default:
        throw new Error('Unknown template: ' + template)
}

// prepare
function logError (err) {
	if ( err )  console.log(err.stack)
}

// ensure path
safefs.ensurePath('./src/documents', function (err) {
	if ( err )  throw err

	// write files
	for ( var index = 0; index < total; index++ ) {
		var templateOutPath = './src/documents/test-' + index + '.html.jade'
		var templateOutSource = templateSource.toString().replace(/[%]/g, index)
		safefs.writeFile(templateOutPath, templateOutSource, logError)
	}
})
