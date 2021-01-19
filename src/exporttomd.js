let parts = require('./ovlett2.json');

let mdString = '';

for(let part of parts) {
    mdString += `### ${part.label}\n`;
    for(let translation of part.translations) {
        mdString += `${translation[0]}\n`;
        mdString += `> ${translation[1]}\n\n`
    }
}

require('fs').writeFileSync('./src/OVlett2.md', mdString);