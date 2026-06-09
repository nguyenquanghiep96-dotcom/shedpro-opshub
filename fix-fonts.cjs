const fs = require('fs');
const file = 'src/imports/DeliveriesContract/DeliveriesContract.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/font-\['Proxima_Nova:Regular',sans-serif\]/g, 'font-sans font-normal');
content = content.replace(/font-\['Proxima_Nova:Semibold',sans-serif\]/g, 'font-sans font-semibold');
content = content.replace(/font-\['Proxima_Nova:Bold',sans-serif\]/g, 'font-sans font-bold');

fs.writeFileSync(file, content);
console.log('Fonts replaced');
