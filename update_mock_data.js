const fs = require('fs');
const path = './src/imports/DeliveriesContract/transportationData.ts';

let code = fs.readFileSync(path, 'utf8');

const additionalMockData = `
  // ── Extra mock data to reach > 20 items ─────────────────
  { id: 'WO-1100', type: 'Delivery', customer: 'Alice Smith', phone: '(540) 555-0200', buildingType: 'Utility shed', buildingSize: '10×12', serial: 'SN-930001', pickup: 'ShedPro Plant', dropoff: 'Cedar Grove Lot', status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz', amountDue: 0, note: '', contract: 'CS-24-0417' },
  { id: 'WO-1101', type: 'Repair', customer: 'Bob Jones', phone: '(540) 555-0201', buildingType: 'Garden shed', buildingSize: '12×16', serial: 'SN-930002', pickup: '', dropoff: '', visit: 'Nair residence', status: 'Open', route: 'RT-1007', assignee: 'Priya Rao', amountDue: 150, note: 'Fix window', contract: '' },
  { id: 'WO-1102', type: 'Repo', customer: 'Charlie Brown', phone: '(540) 555-0202', buildingType: 'Lean-to shed', buildingSize: '8×10', serial: 'SN-930003', pickup: 'Banks residence', dropoff: 'ShedPro Plant', status: 'Completed', route: 'RT-1009', assignee: 'Sam Okafor', amountDue: 200, note: '', contract: '' },
  { id: 'WO-1103', type: 'Lot Transfer', customer: '—', phone: '(540) 555-0203', buildingType: 'Studio shed', buildingSize: '10×10', serial: 'SN-930004', pickup: 'Rose Lot A', dropoff: 'Rose Lot B', status: 'Open', route: 'RT-1009', assignee: 'Sam Okafor', amountDue: 0, note: '', contract: '' },
  { id: 'WO-1104', type: 'Delivery', customer: 'David Lee', phone: '(540) 555-0204', buildingType: 'Barn shed', buildingSize: '10×16', serial: 'SN-930005', pickup: 'ShedPro Plant', dropoff: 'Koenig residence', status: 'Scheduled', route: 'RT-1004', assignee: 'Cole Jansen', amountDue: 0, note: '', contract: 'CS-24-0512' },
  { id: 'WO-1105', type: 'Payment Collection', customer: 'Eve Davis', phone: '(540) 555-0205', buildingType: 'Garage', buildingSize: '12×20', serial: 'SN-930006', pickup: '', dropoff: '', visit: 'Delgado residence', status: 'Scheduled', route: 'RT-1004', assignee: 'Cole Jansen', amountDue: 500, note: '', contract: '' },
  { id: 'WO-1106', type: 'Welfare Check', customer: 'Frank Miller', phone: '(540) 555-0206', buildingType: 'Cabin shed', buildingSize: '10×14', serial: 'SN-930007', pickup: '', dropoff: '', visit: 'Carefree unit', status: 'Completed', route: 'RT-1007', assignee: 'Priya Rao', amountDue: 0, note: '', contract: '' },
  { id: 'WO-1107', type: 'Private Move', customer: 'Grace Wilson', phone: '(540) 555-0207', buildingType: 'Warehouse shed', buildingSize: '12×24', serial: 'SN-930008', pickup: 'Fontaine (old site)', dropoff: 'Fontaine (new site)', status: 'Open', route: 'RT-1010', assignee: 'Deshawn Miller', amountDue: 300, note: '', contract: '' },
  { id: 'WO-1108', type: 'Delivery', customer: 'Harry Taylor', phone: '(540) 555-0208', buildingType: 'Utility shed', buildingSize: '8×12', serial: 'SN-930009', pickup: 'ShedPro Plant', dropoff: 'Whitfield residence', status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz', amountDue: 0, note: '', contract: '' },
  { id: 'WO-1109', type: 'Repair', customer: 'Ivy Thomas', phone: '(540) 555-0209', buildingType: 'Barn shed', buildingSize: '10×12', serial: 'SN-930010', pickup: '', dropoff: '', visit: 'Nair residence', status: 'Completed', route: 'RT-1007', assignee: 'Priya Rao', amountDue: 100, note: '', contract: '' },
  { id: 'WO-1110', type: 'Delivery', customer: 'Jack White', phone: '(540) 555-0210', buildingType: 'Garden shed', buildingSize: '12×16', serial: 'SN-930011', pickup: 'ShedPro Plant', dropoff: 'Cedar Grove Lot', status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz', amountDue: 0, note: '', contract: '' },
  { id: 'WO-1111', type: 'Repo', customer: 'Karen Harris', phone: '(540) 555-0211', buildingType: 'Lean-to shed', buildingSize: '8×10', serial: 'SN-930012', pickup: 'Banks residence', dropoff: 'ShedPro Plant', status: 'Open', route: 'RT-1009', assignee: 'Sam Okafor', amountDue: 250, note: '', contract: '' }
`;

code = code.replace(
  /];\n\n\/\*+ *\n \* Mock Routes \(10\)/,
  additionalMockData + '\n];\n\n// ============================================================\n// Mock Routes (10)'
);

fs.writeFileSync(path, code);
