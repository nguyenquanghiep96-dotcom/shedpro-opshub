const fs = require('fs');
let content = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// 1. Add imports at top
content = `import React, { useState } from 'react';\nimport RoutesContainer from './RoutesContainer';\n` + content;

// 2. Modify Frame13 definition
content = content.replace(
  'function Frame13() {\n  return (\n    <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Frame 13">',
  'function Frame13({ activeTab, setActiveTab }: { activeTab?: string, setActiveTab?: (tab: string) => void }) {\n  return (\n    <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Frame 13">'
);

// 3. Modify Contracts and Routes tabs inside Frame13
// This replaces the two Tabs with state-aware ones
const tabSearch = `<div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-[#ff7048] border-b-3 border-solid inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Contracts</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>`;

const tabReplace = `<div onClick={() => setActiveTab?.('Contracts')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={\`absolute border-b-3 border-solid inset-0 pointer-events-none \${activeTab === 'Contracts' ? 'border-[#ff7048]' : 'border-white'}\`} />
              <div className={\`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap \${activeTab === 'Contracts' ? 'text-[#ff7048]' : 'text-[#5e6578]'}\`}>
                <p className="leading-[normal]">Contracts</p>
              </div>
            </div>
            <div onClick={() => setActiveTab?.('Routes')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={\`absolute border-b-3 border-solid inset-0 pointer-events-none \${activeTab === 'Routes' ? 'border-[#ff7048]' : 'border-white'}\`} />
              <div className={\`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap \${activeTab === 'Routes' ? 'text-[#ff7048]' : 'text-[#5e6578]'}\`}>
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>`;

content = content.replace(tabSearch, tabReplace);

// 4. Update DeliveriesContract component
const compSearch = `export default function DeliveriesContract() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(43, 59, 99, 0.05) 0%, rgba(43, 59, 99, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Deliveries - Contract">
      <div className="content-stretch flex flex-col items-start w-full shrink-0" data-name="Navbar">
        <Frame7 />
        <Frame13 />
      </div>
      <div className="flex-1 w-full flex flex-col items-center">
        <Container />
      </div>`;

const compReplace = `export default function DeliveriesContract() {
  const [activeTab, setActiveTab] = useState('Contracts');
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(43, 59, 99, 0.05) 0%, rgba(43, 59, 99, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Deliveries - Contract">
      <div className="content-stretch flex flex-col items-start w-full shrink-0" data-name="Navbar">
        <Frame7 />
        <Frame13 activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1 w-full flex flex-col items-center">
        {activeTab === 'Contracts' ? <Container /> : <RoutesContainer />}
      </div>`;

content = content.replace(compSearch, compReplace);

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', content);
