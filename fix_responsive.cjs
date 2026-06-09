const fs = require('fs');

// 1. DeliveriesContract.tsx fixes
let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// Fix TableList width
del = del.replace(/data-name="Table-List"/g, 'data-name="Table-List" style={{ minWidth: "1200px" }}');

// Remove horizontal scroll from Nav and center it naturally, let it wrap if needed
del = del.replace(/className="bg-white content-stretch flex items-center overflow-x-auto relative shrink-0 w-full flex-1 md:justify-center flex-nowrap hide-scrollbar"/g, 'className="bg-white content-stretch flex flex-wrap items-center justify-center relative shrink-0 w-full flex-1"');

// Fix padding mismatch: 
// Remove the weird appended px-4 lg:px-6 from Action Bar
del = del.replace(/px-4 lg:px-6/g, ''); 
// Add px-[24px] equivalent to DeliveriesTableContainer to match ActionBar
del = del.replace(/data-name="Deliveries Table Container"/g, 'data-name="Deliveries Table Container" style={{ margin: "0 24px", width: "calc(100% - 48px)" }}');
// Wait, using padding is better for w-full:
// Instead of modifying the container's margin, let's wrap it or add padding to the parent.
del = del.replace(/function Container\(\) \{\n  return \(\n    <div className="content-stretch flex flex-col items-center w-full" data-name="Container">/g, 
'function Container() {\n  return (\n    <div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="Container">');

// Then remove the px-[24px] from Action Bar 1 so it doesn't double pad
del = del.replace(/flex flex-col items-start px-\[24px\] py-\[10px\] relative shrink-0 w-full/g, 'flex flex-col items-start py-[10px] relative shrink-0 w-full');

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);

// 2. RoutesContainer.tsx fixes
let route = fs.readFileSync('src/imports/DeliveriesContract/RoutesContainer.tsx', 'utf8');

// The main container in RoutesContainer
route = route.replace(/<div className="content-stretch flex flex-col items-center w-full" data-name="Routes Container">/g, 
'<div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="Routes Container">');

// Remove the px-[24px] from RoutesActionBar to prevent double padding
route = route.replace(/flex flex-col items-start px-\[24px\] py-\[10px\] relative shrink-0 w-full/g, 'flex flex-col items-start py-[10px] relative shrink-0 w-full');

// Remove px-4 lg:px-6 if it got added here too
route = route.replace(/px-4 lg:px-6/g, '');

fs.writeFileSync('src/imports/DeliveriesContract/RoutesContainer.tsx', route);

console.log("Fixes applied.");
