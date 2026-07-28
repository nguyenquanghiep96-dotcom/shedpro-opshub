const fs = require('fs');

const file = 'src/pages/Deliveries/CreateRoute/StopsManager.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/className="w-\[1120px\] shrink-0 flex flex-col gap-\[16px\] mx-auto mt-\[32px\] mb-\[48px\]"/g, 'className="w-full shrink-0 flex flex-col gap-[16px] mb-[48px]"');

fs.writeFileSync(file, content);
console.log("Replaced StopsManager wrapper class");
