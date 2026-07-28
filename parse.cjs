const fs = require('fs');

const file = 'src/imports/DeliveriesContract/DeliveriesContract.tsx';
let content = fs.readFileSync(file, 'utf8');

function extractFunction(name) {
  let startIndex = content.search(new RegExp(`function\\s+${name}\\b`));
  if (startIndex === -1) return null;

  // Find the opening '(' of the function parameters
  let paramOpenIndex = content.indexOf('(', startIndex);
  if (paramOpenIndex === -1) return null;

  // Track parentheses to find the closing ')'
  let parens = 0;
  let paramCloseIndex = -1;
  for (let i = paramOpenIndex; i < content.length; i++) {
    if (content[i] === '(') parens++;
    else if (content[i] === ')') parens--;
    
    if (parens === 0) {
      paramCloseIndex = i;
      break;
    }
  }

  // Find the opening '{' of the function body AFTER the closing ')'
  let bodyOpenIndex = content.indexOf('{', paramCloseIndex);
  if (bodyOpenIndex === -1) return null;

  // Track braces to find the end of the function body
  let braces = 0;
  let endIndex = -1;
  for (let i = bodyOpenIndex; i < content.length; i++) {
    if (content[i] === '{') braces++;
    else if (content[i] === '}') braces--;
    
    if (braces === 0) {
      endIndex = i;
      break;
    }
  }

  if (endIndex !== -1) {
    return content.substring(startIndex, endIndex + 1);
  }
  return null;
}

const headerDeps = [
  'Group', 'Layer', 'Layer1', 'Frame4', 'Frame1', 'Frame2', 'Frame', 
  'Frame10', 'Frame3', 'Frame8', 'Frame9', 'Frame5', 'Frame6', 'Frame7',
  'Frame11', 'Frame12', 'Frame13'
];

let headerCode = `import React from 'react';\nimport { useNavigate } from 'react-router-dom';\nimport svgPaths from "../../imports/DeliveriesContract/svg-er6yqlh6e7";\nimport imgAvatar from "../../imports/DeliveriesContract/12feda209762e1e7724cd2a5b74ccb79e72d6570.png";\n\n`;

for (const dep of headerDeps) {
  const block = extractFunction(dep);
  if (block) {
    headerCode += block + '\n\n';
    content = content.replace(block, '');
  }
}

// Add export statement for Frame7 and Frame13
headerCode += `export { Frame7 as TopHeader, Frame13 as Navbar, Group, Layer, Layer1 };\n`;

fs.mkdirSync('src/components/layout', { recursive: true });
fs.writeFileSync('src/components/layout/HeaderNav.tsx', headerCode);

content = `import { TopHeader, Navbar, Group, Layer, Layer1 } from '../../components/layout/HeaderNav';\n` + content;
content = content.replace(/<Frame7 \/>/g, '<TopHeader />');
content = content.replace(/<Frame13([^>]*)\/>/g, '<Navbar$1/>');

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', content);

console.log("Successfully refactored!");
