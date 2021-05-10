let parts1 = require('./ovlett1.json');
let parts2 = require('./ovlett2.json');
let parts3 = require('./ovlett3.json');

let parts = [...parts1, ...parts2, ...parts3]

let mdString = '';

for(let part of parts) {
    mdString += `### ${part.label}\n`;
    for(let translation of part.translations) {
        mdString += `> ${translation[0]}\n\n`;
        mdString += `${translation[1]}\n\n`
    }
}

require('fs').writeFileSync('./src/OVlett.md', mdString);