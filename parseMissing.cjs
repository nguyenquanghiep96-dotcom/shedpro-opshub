const fs = require('fs');

const file = 'src/imports/DeliveriesContract/DeliveriesContract.tsx';
let content = fs.readFileSync(file, 'utf8');

function extractFunction(name) {
  let startIndex = content.search(new RegExp(`function\\s+${name}\\b`));
  if (startIndex === -1) return null;

  let paramOpenIndex = content.indexOf('(', startIndex);
  if (paramOpenIndex === -1) return null;

  let parens = 0;
  let paramCloseIndex = -1;
  for (let i = paramOpenIndex; i < content.length; i++) {
    if (content[i] === '(') parens++;
    else if (content[i] === ')') parens--;
    if (parens === 0) { paramCloseIndex = i; break; }
  }

  let bodyOpenIndex = content.indexOf('{', paramCloseIndex);
  if (bodyOpenIndex === -1) return null;

  let braces = 0;
  let endIndex = -1;
  for (let i = bodyOpenIndex; i < content.length; i++) {
    if (content[i] === '{') braces++;
    else if (content[i] === '}') braces--;
    if (braces === 0) { endIndex = i; break; }
  }

  if (endIndex !== -1) {
    return content.substring(startIndex, endIndex + 1);
  }
  return null;
}

const missing = ['Group6', 'Layer5', 'Layer6'];
let addedCode = '';

for (let name of missing) {
  const code = extractFunction(name);
  if (code) {
    content = content.replace(code, '');
    addedCode += code + '\n\n';
    console.log(`Moved ${name}`);
  } else {
    console.log(`${name} not found`);
  }
}

fs.writeFileSync(file, content);

let headerNavContent = fs.readFileSync('src/components/layout/HeaderNav.tsx', 'utf8');
headerNavContent = headerNavContent.replace('export {', addedCode + '\n\nexport {');
fs.writeFileSync('src/components/layout/HeaderNav.tsx', headerNavContent);
