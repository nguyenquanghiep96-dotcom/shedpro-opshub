const fs = require('fs');
const file = 'src/imports/DeliveriesContract/DeliveriesContract.tsx';
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');

// Find start line: function NumberContainer()
const startIndex = lines.findIndex(line => line.startsWith('function NumberContainer()'));

// Find end line: end of function DeliveriesTableContainer()
const containerStartIndex = lines.findIndex(line => line.startsWith('function DeliveriesTableContainer()'));
let endIndex = -1;
for (let i = containerStartIndex + 1; i < lines.length; i++) {
  if (lines[i].startsWith('}')) {
    endIndex = i;
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  const extractedLines = lines.slice(startIndex, endIndex + 1);
  
  // Create new file
  let newFileContent = `import React from 'react';\nimport svgPaths from './svg-er6yqlh6e7';\n\n`;
  newFileContent += extractedLines.join('\n');
  newFileContent += `\n\nexport default DeliveriesTableContainer;\n`;
  
  fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesTable.tsx', newFileContent);
  console.log('Extracted to DeliveriesTable.tsx');
  
  // Remove extracted lines from original
  lines.splice(startIndex, endIndex - startIndex + 1);
  
  // Add import to original
  lines.splice(1, 0, `import DeliveriesTableContainer from './DeliveriesTable';`);
  
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Updated DeliveriesContract.tsx');
} else {
  console.log('Could not find bounds', startIndex, containerStartIndex, endIndex);
}
