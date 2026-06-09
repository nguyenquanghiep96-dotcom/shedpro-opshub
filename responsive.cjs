const fs = require('fs');
const files = [
  'src/imports/DeliveriesContract/DeliveriesContract.tsx',
  'src/imports/DeliveriesContract/RoutesContainer.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Replace 1920px wrappers with full width and responsive padding
  content = content.replace(/w-\[1920px\]/g, 'w-full px-4 lg:px-6');
  
  // 2. Replace 1872px with full width
  content = content.replace(/w-\[1872px\]/g, 'w-full');
  
  // 3. Make Nav responsive (remove fixed 640px, add overflow-x-auto)
  content = content.replace(/justify-center overflow-clip relative shrink-0 w-\[640\.333px\]/g, 'overflow-x-auto relative shrink-0 w-full flex-1 md:justify-center flex-nowrap hide-scrollbar');
  // Add flex-nowrap just in case
  content = content.replace(/className="bg-white content-stretch flex items-center overflow-x-auto/g, 'className="bg-white content-stretch flex items-center overflow-x-auto flex-nowrap');

  // 4. Update Header fixed widths
  content = content.replace(/w-\[874\.5px\]/g, 'w-full lg:w-auto flex-1');
  
  // 5. Add flex-wrap to Action Bar / Header containers so they don't break on small screens
  // e.g., 'items-center relative shrink-0 w-full" data-name="Actions"'
  content = content.replace(/items-center relative shrink-0 w-full" data-name="Actions"/g, 'items-center flex-wrap gap-y-4 relative shrink-0 w-full" data-name="Actions"');
  
  // e.g. <div className="bg-white content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="Table Header">
  content = content.replace(/items-center justify-between py-\[16px\] relative shrink-0 w-full/g, 'items-center justify-between flex-wrap gap-y-4 py-[16px] relative shrink-0 w-full');

  // 6. Make Table containers scrollable horizontally
  content = content.replace(/data-name="Deliveries Table">/g, 'data-name="Deliveries Table" style={{ overflowX: "auto", maxWidth: "100%" }}>');
  content = content.replace(/data-name="Routes Table">/g, 'data-name="Routes Table" style={{ overflowX: "auto", maxWidth: "100%" }}>');

  // 7. Make Table Rows / Headers wide enough so they don't squish (min-w-[1200px])
  content = content.replace(/data-name="Table Title">/g, 'data-name="Table Title" style={{ minWidth: "1200px" }}>');
  content = content.replace(/data-name="Table Entry">/g, 'data-name="Table Entry" style={{ minWidth: "1200px" }}>');
  content = content.replace(/data-name="Table Header Row">/g, 'data-name="Table Header Row" style={{ minWidth: "1200px" }}>');
  
  // 8. Fix Search/Filter Section to wrap if needed
  content = content.replace(/items-center justify-end relative shrink-0 w-\[400px\]/g, 'items-center justify-end relative shrink-0 w-full md:w-auto flex-1 md:flex-none flex-wrap');

  fs.writeFileSync(file, content);
});
console.log("Responsive changes applied.");
