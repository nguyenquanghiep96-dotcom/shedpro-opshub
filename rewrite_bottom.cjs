const fs = require('fs');
let code = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// Strip any </TransportationProvider> tags that might have been accidentally added
code = code.replace(/<\/TransportationProvider>/g, '');
code = code.replace(/<TransportationProvider>/g, '');
code = code.replace('import { TransportationProvider } from "./TransportationContext";\n', '');

// Clean up weird whitespace
code = code.trim();

// Ensure import is at the top
code = 'import { TransportationProvider } from "./TransportationContext";\n' + code;

// Replace return statement to wrap cleanly
code = code.replace(
  'return (\n    <div className="flex flex-col min-h-screen w-full"',
  'return (\n    <TransportationProvider>\n      <div className="flex flex-col min-h-screen w-full"'
);

// Append the closing tag right before the final `);\n}`
code = code.replace(
  '    </div>\n  );\n}',
  '      </div>\n    </TransportationProvider>\n  );\n}'
);

// Fallback if the strict indentation matching above didn't work:
if (!code.includes('</TransportationProvider>')) {
  // Just append it
  let lastIndex = code.lastIndexOf('</div>');
  if (lastIndex !== -1) {
     code = code.substring(0, lastIndex + 6) + '\n    </TransportationProvider>' + code.substring(lastIndex + 6);
  }
}

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', code);
