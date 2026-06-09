const fs = require('fs');

const origFile = 'src/imports/DeliveriesContract/DeliveriesContract.tsx';
const extractedFile = 'src/imports/DeliveriesContract/DeliveriesTable.tsx';

let origContent = fs.readFileSync(origFile, 'utf8');
let origLines = origContent.split('\n');

// 1. Remove the import line
const importIndex = origLines.findIndex(l => l.includes("import DeliveriesTableContainer from './DeliveriesTable'"));
if (importIndex !== -1) {
  origLines.splice(importIndex, 1);
}

// 2. Extract contents from DeliveriesTable.tsx
let extractedContent = fs.readFileSync(extractedFile, 'utf8');
let extractedLines = extractedContent.split('\n');

// Find start (function NumberContainer())
const startIdx = extractedLines.findIndex(l => l.startsWith('function NumberContainer()'));
// Find end (end of function DeliveriesTableContainer())
let endIdx = -1;
const containerStartIdx = extractedLines.findIndex(l => l.startsWith('function DeliveriesTableContainer()'));
for (let i = containerStartIdx + 1; i < extractedLines.length; i++) {
  if (extractedLines[i].startsWith('}')) {
    endIdx = i;
    break;
  }
}

const linesToRestore = extractedLines.slice(startIdx, endIdx + 1);

// 3. Insert them back right before function Container()
const containerIndexOrig = origLines.findIndex(l => l.startsWith('function Container()'));

if (containerIndexOrig !== -1) {
  origLines.splice(containerIndexOrig, 0, ...linesToRestore, '');
  
  fs.writeFileSync(origFile, origLines.join('\n'));
  fs.unlinkSync(extractedFile);
  console.log('Revert successful!');
} else {
  console.log('Could not find function Container()');
}
