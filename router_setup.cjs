const fs = require('fs');

// 1. Update App.tsx
const appTsx = `import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DeliveriesContract from "../imports/DeliveriesContract/DeliveriesContract.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deliveries/contracts" element={<DeliveriesContract defaultTab="Contracts" />} />
        <Route path="/deliveries/routes" element={<DeliveriesContract defaultTab="Routes" />} />
        <Route path="/" element={<Navigate to="/deliveries/contracts" replace />} />
        <Route path="/deliveries" element={<Navigate to="/deliveries/contracts" replace />} />
        <Route path="*" element={<Navigate to="/deliveries/contracts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
`;
fs.writeFileSync('src/app/App.tsx', appTsx);

// 2. Update DeliveriesContract.tsx
let del = fs.readFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', 'utf8');

// Add useNavigate and useLocation imports
if (!del.includes('useNavigate')) {
  del = del.replace(/import React, \{ useState \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useNavigate, useLocation } from 'react-router-dom';");
}

// Modify Frame13 props
del = del.replace(/function Frame13\(\{\s*activeTab,\s*setActiveTab\s*\}\s*:\s*\{\s*activeTab\?:\s*string,\s*setActiveTab\?:\s*\(tab:\s*string\)\s*=>\s*void\s*\}\)\s*\{/g, 
"function Frame13({ activeTab }: { activeTab?: string }) {");

// Inject useNavigate into Frame13
del = del.replace(/function Frame13\(\{ activeTab \}: \{ activeTab\?: string \}\) \{/g, 
"function Frame13({ activeTab }: { activeTab?: string }) {\n  const navigate = useNavigate();");

// Replace setActiveTab in Frame13 with navigate
del = del.replace(/onClick=\{\(\) => setActiveTab\?\.\('Contracts'\)\}/g, "onClick={() => navigate('/deliveries/contracts')}");
del = del.replace(/onClick=\{\(\) => setActiveTab\?\.\('Routes'\)\}/g, "onClick={() => navigate('/deliveries/routes')}");

// Update main export function signature
del = del.replace(/export default function DeliveriesContract\(\) \{/g, "export default function DeliveriesContract({ defaultTab = 'Contracts' }: { defaultTab?: string }) {");

// Replace activeTab state with reading defaultTab
del = del.replace(/const \[activeTab, setActiveTab\] = useState\('Contracts'\);/g, `const [activeTab, setActiveTab] = useState(defaultTab);
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);`);

// Remove setActiveTab={setActiveTab} from Frame13 usage
del = del.replace(/<Frame13 activeTab=\{activeTab\} setActiveTab=\{setActiveTab\} \/>/g, '<Frame13 activeTab={activeTab} />');

fs.writeFileSync('src/imports/DeliveriesContract/DeliveriesContract.tsx', del);

console.log("Router setup applied.");
