const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/imports/DeliveriesContract/DeliveriesContract.tsx');

// The functions we want to extract
const targetFunctions = ['Frame7', 'Frame13'];

// A set to store all dependencies we need to extract
const dependencies = new Set(targetFunctions);

// Helper to find all function calls and JSX tags inside a function body
function findDependencies(functionName) {
  const funcDecl = sourceFile.getFunction(functionName);
  if (!funcDecl) return;
  
  // Find JSX elements (e.g. <Frame4 />)
  funcDecl.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement).forEach(node => {
    const tagName = node.getTagNameNode().getText();
    if (!dependencies.has(tagName) && sourceFile.getFunction(tagName)) {
      dependencies.add(tagName);
      findDependencies(tagName);
    }
  });
  
  funcDecl.getDescendantsOfKind(SyntaxKind.JsxOpeningElement).forEach(node => {
    const tagName = node.getTagNameNode().getText();
    if (!dependencies.has(tagName) && sourceFile.getFunction(tagName)) {
      dependencies.add(tagName);
      findDependencies(tagName);
    }
  });

  // Find direct function calls
  funcDecl.getDescendantsOfKind(SyntaxKind.CallExpression).forEach(node => {
    const expr = node.getExpression().getText();
    if (!dependencies.has(expr) && sourceFile.getFunction(expr)) {
      dependencies.add(expr);
      findDependencies(expr);
    }
  });
}

// Recursively find all dependencies for TopHeader (Frame7)
targetFunctions.forEach(findDependencies);

// Now extract the code for TopHeader and Navbar
let sharedCode = `import React from 'react';\nimport { useNavigate } from 'react-router-dom';\nimport svgPaths from "../../imports/DeliveriesContract/svg-er6yqlh6e7";\nimport imgAvatar from "../../imports/DeliveriesContract/12feda209762e1e7724cd2a5b74ccb79e72d6570.png";\n\n`;

// Also extract any imports from the original file that might be needed, but we hardcoded above.
Array.from(dependencies).forEach(dep => {
  const func = sourceFile.getFunction(dep);
  if (func) {
    sharedCode += func.getText() + '\n\n';
  }
});

fs.mkdirSync('src/components/layout', { recursive: true });
fs.writeFileSync('src/components/layout/HeaderNav.tsx', sharedCode);

// Now remove them from DeliveriesContract.tsx
Array.from(dependencies).forEach(dep => {
  const func = sourceFile.getFunction(dep);
  if (func) {
    func.remove();
  }
});

// Save modified DeliveriesContract
sourceFile.saveSync();

console.log('Successfully extracted:', Array.from(dependencies).join(', '));
