const fs = require('fs');

let wo = fs.readFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', 'utf8');

// Reverse Link Contract/Inventory type="button"
wo = wo.replace(/<button type="button" disabled className="h-\[40px\] bg-\[#eaecf0\] text-\[#5e6578\] rounded-\[4px\] px-\[16px\] font-bold text-\[14px\] opacity-50 cursor-not-allowed flex items-center justify-center">Link Contract<\/button>/g, '<button disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Contract</button>');
wo = wo.replace(/<button type="button" disabled className="h-\[40px\] bg-\[#eaecf0\] text-\[#5e6578\] rounded-\[4px\] px-\[16px\] font-bold text-\[14px\] opacity-50 cursor-not-allowed flex items-center justify-center">Link Inventory<\/button>/g, '<button disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Inventory</button>');

// Reverse required
wo = wo.replace('required name="customerName" defaultValue', 'name="customerName" defaultValue');
wo = wo.replace('required name="buildingType" defaultValue', 'name="buildingType" defaultValue');

// Reverse the form wrapper
wo = wo.replace('<form id="wo-form" onSubmit={handleSave} className="bg-white rounded-[10px] shadow-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto flex flex-col">', '<div className="bg-white rounded-[10px] shadow-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto">');
wo = wo.replace('</div>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">', '</form>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">');
wo = wo.replace('<div className="p-6 space-y-5">', '<form onSubmit={handleSave} className="p-6 space-y-5" id="wo-form">');
wo = wo.replace('</form>\n        </div>\n      )}\n\n      {/* 6. Delete Confirmation Modal */', '</div>\n        </div>\n      )}\n\n      {/* 6. Delete Confirmation Modal */');

fs.writeFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', wo);

// Reverse CalendarView.tsx (text/plain back to routeId)
let cal = fs.readFileSync('src/imports/DeliveriesContract/CalendarView.tsx', 'utf8');
cal = cal.replace(/e\.dataTransfer\.setData\('text\/plain'/g, "e.dataTransfer.setData('routeId'");
cal = cal.replace(/e\.dataTransfer\.getData\('text\/plain'\)/g, "e.dataTransfer.getData('routeId')");
fs.writeFileSync('src/imports/DeliveriesContract/CalendarView.tsx', cal);

