const fs = require('fs');
let content = fs.readFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', 'utf8');

// Imports
content = content.replace("import React, { useState, useMemo, useEffect } from 'react';", "import React, { useState, useMemo, useEffect, useRef } from 'react';");
content = content.replace("import { \n  MOCK_WORK_ORDERS, \n  WorkOrder,", "import { \n  WorkOrder,");
content = content.replace("import { StatusBadge, FilterTabGroup, TypeBadge, type FilterTab } from './ui';", "import { StatusBadge, FilterTabGroup, TypeBadge, type FilterTab } from './ui';\nimport { useTransportation } from './TransportationContext';");

// Use Context
content = content.replace("const [workOrders, setWorkOrders] = useState<WorkOrder[]>(MOCK_WORK_ORDERS);", "const { workOrders, addWorkOrder, updateWorkOrder, deleteWorkOrder } = useTransportation();");

// Delete WO
content = content.replace("setWorkOrders(prev => prev.filter(w => w.id !== deletingWOId));", "deleteWorkOrder(deletingWOId);");

// Save handler
const saveFn = `
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    
    // Validation
    const type = data.type as WOType;
    const isMove = isMoveType(type);
    
    const requiredFields = ['customerName', 'buildingType'];
    if (isMove) {
      requiredFields.push('pickupAddress', 'dropoffAddress');
    } else {
      requiredFields.push('visitAddress');
    }
    
    // Phone or Customer check
    if (!data.customerName || !data.customerPhone || !data.buildingType || (isMove && (!data.pickupAddress || !data.dropoffAddress)) || (!isMove && !data.visitAddress)) {
      alert('Please fill in Building Type, Building Size, Pickup & Dropoff (or Visit Address), Customer Name, and Phone.');
      return;
    }

    if (editingWO) {
      updateWorkOrder({
        ...editingWO,
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
      });
    } else {
      addWorkOrder({
        id: 'WO-' + Math.floor(Math.random() * 10000),
        status: 'Open',
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
        route: '',
        assignee: '',
        contract: ''
      });
    }
    closeModal();
  };
`;
content = content.replace("const closeModal = () => {", saveFn + "\n  const closeModal = () => {");

// Form Tag
content = content.replace('<div className="p-6 space-y-5">', '<form onSubmit={handleSave} className="p-6 space-y-5" id="wo-form">');
content = content.replace('</button>\n              <button \n                onClick={closeModal}', '</button>\n              <button \n                type="submit" form="wo-form"');
content = content.replace('className="p-6 space-y-5" id="wo-form">\n              {/* Type', 'className="p-6 space-y-5" id="wo-form">\n              {/* Type');

// Fix input height and names
content = content.replace(/className="w-full border/g, 'className="h-[40px] w-full border');
content = content.replace(/className="flex-1 border/g, 'className="h-[40px] flex-1 border');
content = content.replace(/className="flex-1 bg-gray-50/g, 'className="h-[40px] flex-1 bg-gray-50');
content = content.replace(/className="bg-\[#eaecf0\] text-\[#5e6578\] rounded-\[4px\] px-\[16px\] py-\[8px\] font-bold text-\[14px\] opacity-50 cursor-not-allowed"/g, 'className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed"');

// Names
content = content.replace('name="type" value={formWOType}', 'name="type" value={formWOType}'); // Will inject name manually below
content = content.replace('<select \n                  className="h-[40px] w-full border', '<select name="type" \n                  className="h-[40px] w-full border');
content = content.replace('defaultValue={editingWO?.customerName} />', 'name="customerName" defaultValue={editingWO?.customerName} />');
content = content.replace('defaultValue={editingWO?.customerPhone} />', 'name="customerPhone" defaultValue={editingWO?.customerPhone} />');
content = content.replace('defaultValue={editingWO?.buildingType} />', 'name="buildingType" defaultValue={editingWO?.buildingType} />');
content = content.replace('placeholder="e.g. 10x12" />', 'name="buildingSize" defaultValue={editingWO?.buildingSize} placeholder="e.g. 10x12" />');
content = content.replace('defaultValue={editingWO?.serialNumber} />', 'name="serialNumber" defaultValue={editingWO?.serialNumber} />');
content = content.replace('defaultValue={editingWO?.pickupAddress}></textarea>', 'name="pickupAddress" defaultValue={editingWO?.pickupAddress}></textarea>');
content = content.replace('defaultValue={editingWO?.dropoffAddress}></textarea>', 'name="dropoffAddress" defaultValue={editingWO?.dropoffAddress}></textarea>');
content = content.replace('defaultValue={editingWO?.visitAddress}></textarea>', 'name="visitAddress" defaultValue={editingWO?.visitAddress}></textarea>');
content = content.replace('placeholder="0.00" />', 'name="amountDue" defaultValue={editingWO?.amountDue} placeholder="0.00" />');
content = content.replace('placeholder="Add any special instructions..."></textarea>', 'name="note" defaultValue={editingWO?.note} placeholder="Add any special instructions..."></textarea>');

// End form
content = content.replace('</div>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">', '</form>\n            \n            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">');


fs.writeFileSync('src/imports/DeliveriesContract/WorkOrdersContainer.tsx', content);
