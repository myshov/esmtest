const fs = require('fs');
const path = require('path');
const letters = require('./letters');

const PREFIX = 'h2file';
const ITERATIONS_NUM = letters.length;
let htmlContent = '';

for (let i = 1; i <= ITERATIONS_NUM; i++) {
    const nextI = i + 1;
    const nextName = `${PREFIX + nextI}`;
    const currentName = `${PREFIX + i}`;
    const char = letters[i - 1];
    const content =
        `import './${nextName}.mjs';\n` + 
        `const el = document.getElementById('${currentName}');\n` +
        `el.innerText = '${char}';\n`;
    const lastContent =
        `const el = document.getElementById('${currentName}');\n` +
        `el.innerText = '${char}...';\n`;
    htmlContent += `<span id="${currentName}"></span>`;
    

    if (i !== ITERATIONS_NUM) {
        fs.writeFileSync(path.join('modules', `${currentName}.mjs`), content);
    } else {
        fs.writeFileSync(path.join('modules', `${currentName}.mjs`), lastContent);
    }
}

fs.writeFileSync('htmlContent.html', htmlContent);
