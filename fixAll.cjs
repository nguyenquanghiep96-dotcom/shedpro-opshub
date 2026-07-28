const fs = require('fs');

// 1. Fix TransportationContext
let ctx = fs.readFileSync('src/imports/DeliveriesContract/TransportationContext.tsx', 'utf8');
// No change needed here, the format is fine.

// 2. Fix WorkOrdersContainer
let wo = fs.readFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', 'utf8');
// Add type="button" to Link Contract / Link Inventory
wo = wo.replace(/<button disabled className="h-\[40px\] bg-\[#eaecf0\] text-\[#5e6578\] rounded-\[4px\] px-\[16px\] font-bold text-\[14px\] opacity-50 cursor-not-allowed flex items-center justify-center">Link Contract<\/button>/g, '<button type="button" disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Contract</button>');
wo = wo.replace(/<button disabled className="h-\[40px\] bg-\[#eaecf0\] text-\[#5e6578\] rounded-\[4px\] px-\[16px\] font-bold text-\[14px\] opacity-50 cursor-not-allowed flex items-center justify-center">Link Inventory<\/button>/g, '<button type="button" disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Inventory</button>');
// Add required
wo = wo.replace('name="customerName" defaultValue', 'required name="customerName" defaultValue');
wo = wo.replace('name="buildingType" defaultValue', 'required name="buildingType" defaultValue');

// Wrap entire modal in form to ensure onSubmit is caught properly
wo = wo.replace('<form onSubmit={handleSave} className="p-6 space-y-5" id="wo-form">', '<div className="p-6 space-y-5">');
wo = wo.replace('</form>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">', '</div>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">');
wo = wo.replace('<div className="bg-white rounded-[10px] shadow-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto">', '<form id="wo-form" onSubmit={handleSave} className="bg-white rounded-[10px] shadow-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto flex flex-col">');
wo = wo.replace(/<\/div>\n        <\/div>\n      \)}\n\n      {\/\* 6\. Delete Confirmation Modal \*\//s, '</form>\n        </div>\n      )}\n\n      {/* 6. Delete Confirmation Modal */');
fs.writeFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', wo);

// 3. Fix CalendarView
let cal = fs.readFileSync('src/imports/DeliveriesContract/CalendarView.tsx', 'utf8');
// Use text/plain for drag and drop
cal = cal.replace(/e\.dataTransfer\.setData\('routeId'/g, "e.dataTransfer.setData('text/plain'");
cal = cal.replace(/e\.dataTransfer\.getData\('routeId'\)/g, "e.dataTransfer.getData('text/plain')");
fs.writeFileSync('src/imports/DeliveriesContract/CalendarView.tsx', cal);

// 4. Fix DeliveriesContract (Remove dummy ActionBar that confuses user)
let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');
// The user sees the dummy ActionBar. We should hide it or just not render it, because WorkOrdersContainer has its own ActionBar.
// DeliveriesContract renders <ActionBar /> in Frame9 and others.
// We can just make ActionBar return null
del = del.replace('function ActionBar({ onAddNew }: { onAddNew?: () => void }) {', 'function ActionBar({ onAddNew }: { onAddNew?: () => void }) {\n  return null;');
fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);

