const fs = require('fs');
let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// Strip all </TransportationProvider>
del = del.replace(/<\/TransportationProvider>/g, '');
del = del.replace(/<TransportationProvider>/g, '');

// Strip the import if it's there, to add it cleanly
del = del.replace('import { TransportationProvider } from "./TransportationContext";\n', '');

// Re-add correctly
del = `import { TransportationProvider } from "./TransportationContext";\n` + del;

del = del.replace('return (\n    <div className="flex flex-col min-h-screen w-full"', 'return (\n    <TransportationProvider>\n      <div className="flex flex-col min-h-screen w-full"');
del = del.replace('    </div>\n  );\n}', '      </div>\n    </TransportationProvider>\n  );\n}');

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);
