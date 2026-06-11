const fs = require('fs');

const file = 'src/imports/DeliveriesContract/RoutesContainer.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetBlock = `<div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
                    <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="var(--fill-0, #5E6578)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
                    <path d="M1.57224 8L6.66667 3.05327L11.7611 8L13.3333 6.47339L6.66667 0L0 6.47339L1.57224 8Z" fill="var(--fill-0, #5E6578)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>`;

const newBlock = `<div className="content-stretch flex items-center relative shrink-0" data-name="Page Control Group">
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Button/Single">
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center rotate-90" data-name="Icon / Interface / Arrow-Left-Bold">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Button/Single">
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center -rotate-90" data-name="Icon / Interface / Arrow-Right-Bold">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </div>
          </div>`;

if (content.includes(targetBlock)) {
  content = content.replace(targetBlock, newBlock);
  fs.writeFileSync(file, content);
  console.log('Replaced block exactly.');
} else {
  console.log('Target block not found, trying regex...');
  // Fallback regex to capture the whole block roughly
  const regex = /<div className="content-stretch flex items-center relative shrink-0">\s*<div className="bg-white content-stretch flex gap-\[6px\].*?fill="var\(--fill-0, #5E6578\)" \/>\s*<\/svg>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/s;
  if(regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content);
    console.log('Replaced block via regex.');
  } else {
    console.log('Regex also failed.');
  }
}
