const fs = require('fs');
let content = fs.readFileSync('src/imports/DeliveriesContract/CalendarView.tsx', 'utf8');

// Imports
content = content.replace("import { MOCK_ROUTES, RouteData, ASSIGNEE_OPTIONS, ROUTE_STATUS_COLORS } from './transportationData';", "import { RouteData, ASSIGNEE_OPTIONS, ROUTE_STATUS_COLORS } from './transportationData';\nimport { useTransportation } from './TransportationContext';");

// Use Context
content = content.replace("export default function CalendarView() {", "export default function CalendarView() {\n  const { routes: MOCK_ROUTES, updateRouteDate } = useTransportation();");

// Fix Date Parsing
content = content.replace("const rDate = new Date(r.scheduledDate);", "const rDate = new Date(r.scheduledDate.replace('·', ''));");

// Day cell drop zone
content = content.replace(/className={`min-h-\[140px\] rounded-\[10px\] p-\[8px\] border shadow-sm \${isToday \? 'border-\[#ff7048\] bg-\[#FFF6F2\]' : 'border-\[#e0e0e0\] bg-white'}`}/, "className={`min-h-[140px] rounded-[10px] p-[8px] border shadow-sm ${isToday ? 'border-[#ff7048] bg-[#FFF6F2]' : 'border-[#e0e0e0] bg-white'}`} \n                  onDragOver={(e) => e.preventDefault()} \n                  onDrop={(e) => { const routeId = e.dataTransfer.getData('routeId'); if(routeId) updateRouteDate(routeId, dayObj.date); }}");

// Route Card draggable
content = content.replace(/className={`bg-white rounded-\[6px\] border p-\[8px\] cursor-pointer hover:shadow-md relative overflow-hidden flex flex-col gap-\[4px\] \${selectedRoute\?\.id === route.id \? 'border-\[#ff7048\] shadow-md ring-1 ring-\[#ff7048\]' : 'border-\[#e0e0e0\]'}`}/, "draggable\n                          onDragStart={(e) => e.dataTransfer.setData('routeId', route.id)}\n                          className={`bg-white rounded-[6px] border p-[8px] cursor-pointer hover:shadow-md relative overflow-hidden flex flex-col gap-[4px] ${selectedRoute?.id === route.id ? 'border-[#ff7048] shadow-md ring-1 ring-[#ff7048]' : 'border-[#e0e0e0]'}`}");

fs.writeFileSync('src/imports/DeliveriesContract/CalendarView.tsx', content);
