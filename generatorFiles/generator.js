const fs = require('fs');
const path = require('path');
const letters = require('./letters');

const PREFIX = 'file';
const ITERATIONS_NUM = letters.length;
let htmlContent = '';

for (let i = 1; i <= ITERATIONS_NUM; i++) {
    const currentName = `${PREFIX + i}`;
    const char = letters[i - 1];
    const content =
        `const el = document.getElementById('${currentName}');\n` +
        `el.innerText = '${char}${(i === ITERATIONS_NUM) ? '...' : ''}';\n`;
    htmlContent += `<span id="${currentName}"></span>`;

    fs.writeFileSync(path.join('modules', `${currentName}.mjs`), content);
}

fs.writeFileSync('htmlContent.html', htmlContent);
