const fs = require('fs');

const file = 'src/pages/Deliveries/CreateRoute/index.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Box and Content width/padding
content = content.replace(/w-\[1872px\]/g, 'w-full');
// Box py-[10px] -> pt-[24px] pb-[24px]
content = content.replace(/px-\[24px\] py-\[10px\]/g, 'px-[24px] pt-[24px] pb-[24px]');

// 2. Top center alignment
content = content.replace(/px-\[376px\] py-\[16px\] relative size-full/g, 'max-w-[1120px] w-full mx-auto py-[16px] relative');

// 3. Font and Text changes
// Change Medium to Semibold
content = content.replace(/font-\['Proxima_Nova:Medium',sans-serif\]/g, "font-['Proxima_Nova:Semibold',sans-serif]");
// Change Regular placeholder to Semibold with #5E6578
content = content.replace(/font-\['Proxima_Nova:Regular',sans-serif\]/g, "font-['Proxima_Nova:Semibold',sans-serif]");
content = content.replace(/text-\[#959db1\]/g, "text-[#5e6578]");

// 4. Input Field borders and paddings
content = content.replace(/border-\[#e0e0e0\]/g, "border-[#d8dadf]");
content = content.replace(/px-\[10px\]/g, "px-[12px]");

fs.writeFileSync(file, content);
console.log("Replaced styles in CreateRoute/index.tsx");
