const fs = require('fs');
let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// Strip all </TransportationProvider>
del = del.replace(/<\/TransportationProvider>/g, '');
del = del.replace(/<TransportationProvider>/g, '');

// Re-wrap manually
del = del.replace('return (\n    <div className="flex flex-col min-h-screen w-full"', 'return (\n    <TransportationProvider><div className="flex flex-col min-h-screen w-full"');
del = del.replace('    </div>\n  );\n}', '    </div></TransportationProvider>\n  );\n}');

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);
