const fs = require('fs');

const file = 'src/pages/Deliveries/CreateRoute/index.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace px-[376px] relative size-full with mx-auto
content = content.replace(/px-\[376px\] relative size-full/g, 'max-w-[1120px] w-full mx-auto relative');

fs.writeFileSync(file, content);
console.log("Replaced Frame19 styles");
