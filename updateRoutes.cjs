const fs = require('fs');
let content = fs.readFileSync('src/imports/DeliveriesContract/RoutesContainer.tsx', 'utf8');

// Imports
content = content.replace("import React, { useState, useMemo, useEffect } from 'react';", "import React, { useState, useMemo, useEffect } from 'react';");
content = content.replace("import { MOCK_ROUTES, RouteData } from './transportationData';", "import { RouteData } from './transportationData';\nimport { useTransportation } from './TransportationContext';");

// Use Context
content = content.replace("const [routes, setRoutes] = useState<RouteData[]>(MOCK_ROUTES);", "const { routes } = useTransportation();");

fs.writeFileSync('src/imports/DeliveriesContract/RoutesContainer.tsx', content);
