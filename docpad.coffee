# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    progress: false
    plugins:
        cpuprofiler:
            events: [
                {start: "generateBefore",               stop: "writeAfter", recordSamples: true},
                {start: 'generateBefore',               stop:'generateAfter', recordSamples: true},
                {start: 'parseBefore',                  stop:'parseAfter', recordSamples: true},
                {start: 'populateCollectionsBefore',    stop:'populateCollections', recordSamples: true},
                {start: 'contextualizeBefore',          stop:'contextualizeAfter', recordSamples: true},
                {start: 'renderBefore',                 stop:'renderAfter', recordSamples: true},
                {start: 'renderCollectionBefore',       stop:'renderCollectionAfter', recordSamples: true},
                {start: 'writeBefore',                  stop:'writeAfter', recordSamples: true},
                {start: 'serverBefore',                 stop:'serverAfter', recordSamples: true}
            ]
}

# Export the DocPad Configuration
module.exports = docpadConfig
