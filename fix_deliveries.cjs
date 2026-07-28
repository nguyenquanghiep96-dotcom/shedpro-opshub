const fs = require('fs');

let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// 1. Ensure imports
const imports = `import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RoutesContainer from './RoutesContainer';
import WorkOrdersContainer from './WorkOrdersContainer';
import CalendarView from './CalendarView';
import RouteDetailPage from './RouteDetailPage';
`;
del = del.replace(/import React[^;]*;/, imports);
del = del.replace("import { useNavigate, useLocation } from 'react-router';", "");

// 2. Fix Frame13 (Tabs navigation)
del = del.replace(/function Frame13\(\)\s*\{/g, "function Frame13({ activeTab }: { activeTab?: string }) {\n  const navigate = useNavigate();");

const tabContracts = `<div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-[#ff7048] border-b-3 border-solid inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Contracts</p>
              </div>
            </div>`;
const newTabContracts = `<div onClick={() => navigate('/deliveries/contracts')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={\`absolute border-b-3 border-solid inset-0 pointer-events-none \${activeTab === 'Contracts' ? 'border-[#ff7048]' : 'border-white'}\`} />
              <div className={\`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap \${activeTab === 'Contracts' ? 'text-[#ff7048]' : 'text-[#5e6578]'}\`}>
                <p className="leading-[normal]">Work Orders</p>
              </div>
            </div>`;
del = del.replace(tabContracts, newTabContracts);

const tabRoutes = `<div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>`;
const newTabRoutes = `<div onClick={() => navigate('/deliveries/routes')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={\`absolute border-b-3 border-solid inset-0 pointer-events-none \${activeTab === 'Routes' || activeTab === 'RouteDetail' ? 'border-[#ff7048]' : 'border-white'}\`} />
              <div className={\`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap \${activeTab === 'Routes' || activeTab === 'RouteDetail' ? 'text-[#ff7048]' : 'text-[#5e6578]'}\`}>
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>
            <div onClick={() => navigate('/deliveries/calendar')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={\`absolute border-b-3 border-solid inset-0 pointer-events-none \${activeTab === 'Calendar' ? 'border-[#ff7048]' : 'border-white'}\`} />
              <div className={\`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap \${activeTab === 'Calendar' ? 'text-[#ff7048]' : 'text-[#5e6578]'}\`}>
                <p className="leading-[normal]">Calendar</p>
              </div>
            </div>`;
del = del.replace(tabRoutes, newTabRoutes);

// 3. Fix main component
const mainSearch = `export default function DeliveriesContract() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(43, 59, 99, 0.05) 0%, rgba(43, 59, 99, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Deliveries - Contract">
      <div className="content-stretch flex flex-col items-start w-full shrink-0" data-name="Navbar">
        <Frame7 />
        <Frame13 />
      </div>
      <div className="flex-1 w-full flex flex-col items-center">
        <Container />
      </div>`;
      
const mainReplace = `export default function DeliveriesContract({ defaultTab = 'Contracts' }: { defaultTab?: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(43, 59, 99, 0.05) 0%, rgba(43, 59, 99, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Deliveries - Contract">
      <div className="content-stretch flex flex-col items-start w-full shrink-0" data-name="Navbar">
        <Frame7 />
        <Frame13 activeTab={activeTab} />
      </div>
      <div className="flex-1 w-full flex flex-col items-center">
        {activeTab === 'Calendar' ? <CalendarView /> : activeTab === 'RouteDetail' ? <RouteDetailPage /> : activeTab === 'Contracts' ? <WorkOrdersContainer /> : <RoutesContainer />}
      </div>`;

del = del.replace(mainSearch, mainReplace);

// 4. Remove monolithic Container component since it's extracted
del = del.replace(/function Container\(\) \{[\s\S]*?(?=function Frame13)/, '');
// Wait, the Container might be at the bottom.
// Let's just rely on the fact that I replaced its usage. We can just leave the unused Container function in the file, it won't break anything.

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);

