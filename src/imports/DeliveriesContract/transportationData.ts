// ============================================================
// Shared Types & Mock Data for Transportation Module
// Synced with Transportation-20260719.html reference
// ============================================================

export type WOType = 'Delivery' | 'Repo' | 'Lot Transfer' | 'Private Move' | 'Repair' | 'Welfare Check' | 'Payment Collection';
export type WOStatus = 'Open' | 'Scheduled' | 'Completed';
export type RouteStatus = 'Draft' | 'Scheduled' | 'En Route' | 'Completed';

export interface WorkOrder {
  id: string;
  type: WOType;
  customer: string;
  phone: string;
  buildingType: string;
  buildingSize: string;
  serial: string;
  // Move-type WOs (Delivery, Repo, Lot Transfer, Private Move)
  pickup: string;
  dropoff: string;
  // Service-type WOs (Repair, Welfare Check, Payment Collection)
  visit?: string;
  status: WOStatus;
  route: string;
  assignee: string;
  amountDue: number;
  note: string;
  contract: string;
  flag?: string;
}

export interface RouteData {
  id: string;
  assignee: string;
  workOrders: number;
  stops: number;
  distance: string;
  scheduledDate: string;
  dispatched: string;
  status: RouteStatus;
  ownerEntity: string;
  supportPhone: string;
  startAddress: string;
  endAddress: string;
  note: string;
}

export const WO_TYPE_OPTIONS: WOType[] = ['Delivery', 'Repo', 'Lot Transfer', 'Private Move', 'Repair', 'Welfare Check', 'Payment Collection'];
export const ASSIGNEE_OPTIONS = ['Miguel Ortiz', 'Deshawn Miller', 'Priya Rao', 'Cole Jansen', 'Sam Okafor'];
export const DISPATCHER_OPTIONS = ['Dana Cole', 'Shedpro Test'];
export const OWNER_OPTIONS = ['Rose MNF (Demo Dev)', 'Rose Store - Harrisonburg', 'Rose Store - Staunton', 'ShedPro Co.'];

export const WO_TYPE_COLORS: Record<WOType, string> = {
  'Delivery':           '#F15A2B',
  'Repo':               '#B4472E',
  'Lot Transfer':       '#2F6FB0',
  'Private Move':       '#6B4FA0',
  'Repair':             '#12897E',
  'Welfare Check':      '#B07A00',
  'Payment Collection': '#2E9E5B',
};

export const ROUTE_STATUS_COLORS: Record<RouteStatus, string> = {
  'Draft':     '#f59e0b',
  'Scheduled': '#32b6fd',
  'En Route':  '#f97316',
  'Completed': '#22c55e',
};

export const WO_STATUS_COLORS: Record<WOStatus, string> = {
  'Open':      '#f59e0b',
  'Scheduled': '#32b6fd',
  'Completed': '#22c55e',
};

export function isMoveType(type: WOType): boolean {
  return ['Delivery', 'Repo', 'Lot Transfer', 'Private Move'].includes(type);
}

// ============================================================
// Named Location table — synced with reference LOC dictionary
// key → { name, addr }
// ============================================================
export const LOC: Record<string, { name: string; addr: string }> = {
  'ShedPro Plant':          { name: 'ShedPro Plant',         addr: '3210 S Main St, Harrisonburg, VA 22801' },
  'Rose Lot A':             { name: 'Rose Lot A',            addr: '1790 E Market St, Harrisonburg, VA 22801' },
  'Rose Lot B':             { name: 'Rose Lot B',            addr: '125 Main St, Dayton, VA 22821' },
  'Cedar Grove Lot':        { name: 'Cedar Grove Lot',       addr: '212 N Main St, Bridgewater, VA 22812' },
  'Whitfield residence':    { name: 'Whitfield residence',   addr: '116 W Beverley St, Staunton, VA 24401' },
  'Koenig residence':       { name: 'Koenig residence',      addr: '400 Dogwood Ave, Grottoes, VA 24441' },
  'Banks residence':        { name: 'Banks residence',       addr: '173 W Spotswood Trail, Elkton, VA 22827' },
  'Fontaine (old site)':    { name: 'Fontaine (old site)',   addr: '125 Main St, Mount Crawford, VA 22841' },
  'Fontaine (new site)':    { name: 'Fontaine (new site)',   addr: '234 Cave Hill Rd, Weyers Cave, VA 24486' },
  'Nair residence':         { name: 'Nair residence',        addr: '68 Lee Hwy, Verona, VA 24482' },
  'Carefree unit':          { name: 'Carefree unit',         addr: '1041 S High St, Harrisonburg, VA 22801' },
  'Delgado residence':      { name: 'Delgado residence',     addr: '70 Woodlee Rd, Fishersville, VA 22939' },
  'Okonkwo residence':      { name: 'Okonkwo residence',     addr: '126 Timber Way, Broadway, VA 22815' },
  'Vance residence':        { name: 'Vance residence',       addr: '115 Church St, Timberville, VA 22853' },
  'Ferreira residence':     { name: 'Ferreira residence',    addr: '9448 Resort Dr, McGaheysville, VA 22840' },
  'Rae residence':          { name: 'Rae residence',         addr: '4192 Spotswood Trail, Penn Laird, VA 22846' },
  'Cortez residence':       { name: 'Cortez residence',      addr: '35 Mount Sidney Rd, Mount Sidney, VA 24467' },
  'Ivanov residence':       { name: 'Ivanov residence',      addr: '2825 Stuarts Draft Hwy, Stuarts Draft, VA 24477' },
};

/** Resolve a location name to its full street address */
export function resolveAddress(locationName: string): string {
  return LOC[locationName]?.addr || locationName;
}

// ============================================================
// Mock Work Orders — synced with reference WOS array
// ============================================================
export const MOCK_WORK_ORDERS: WorkOrder[] = [
  // ── RT-1001: Miguel Ortiz ────────────────────────────────
  {
    id: 'WO-1042', type: 'Delivery', customer: 'Dennis Sartain', phone: '(540) 555-0134',
    buildingType: 'Utility shed', buildingSize: '10×12', serial: 'SN-927711',
    pickup: 'ShedPro Plant', dropoff: 'Cedar Grove Lot',
    status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz',
    amountDue: 0, note: '', contract: 'CS-24-0417',
  },
  {
    id: 'WO-1043', type: 'Delivery', customer: 'Marisol Reyes', phone: '(540) 555-0176',
    buildingType: 'Garden shed', buildingSize: '12×16', serial: 'SN-927718',
    pickup: 'ShedPro Plant', dropoff: 'Cedar Grove Lot',
    status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz',
    amountDue: 0, note: '', contract: 'RTO-24-1180',
  },
  {
    id: 'WO-1051', type: 'Delivery', customer: 'Grant Whitfield', phone: '(540) 555-0198',
    buildingType: 'Lean-to shed', buildingSize: '8×10', serial: 'SN-927774',
    pickup: 'ShedPro Plant', dropoff: 'Whitfield residence',
    status: 'Scheduled', route: 'RT-1001', assignee: 'Miguel Ortiz',
    amountDue: 0, note: '', contract: '',
  },
  // ── RT-1004: Cole Jansen (Completed) ────────────────────
  {
    id: 'WO-1067', type: 'Delivery', customer: 'Sandra Koenig', phone: '(540) 555-0110',
    buildingType: 'Studio shed', buildingSize: '10×10', serial: 'SN-927886',
    pickup: 'ShedPro Plant', dropoff: 'Koenig residence',
    status: 'Completed', route: 'RT-1004', assignee: 'Cole Jansen',
    amountDue: 0, note: '', contract: 'CS-24-0512',
  },
  // ── RT-1009: Sam Okafor ──────────────────────────────────
  {
    id: 'WO-1070', type: 'Repo', customer: 'Tyrell Banks', phone: '(540) 555-0182',
    buildingType: 'Barn shed', buildingSize: '10×16', serial: 'SN-927907',
    pickup: 'Banks residence', dropoff: 'ShedPro Plant',
    status: 'Open', route: 'RT-1009', assignee: 'Sam Okafor',
    amountDue: 312.50, note: 'Repossession approved', contract: 'RTO-24-1205',
  },
  {
    id: 'WO-1074', type: 'Lot Transfer', customer: '—', phone: '(540) 555-0125',
    buildingType: 'Garage', buildingSize: '12×20', serial: 'SN-927935',
    pickup: 'Rose Lot A', dropoff: 'Rose Lot B',
    status: 'Open', route: 'RT-1009', assignee: 'Sam Okafor',
    amountDue: 0, note: 'Rebalancing display stock between lots', contract: '',
  },
  // ── RT-1010: Deshawn Miller (Completed) ─────────────────
  {
    id: 'WO-1080', type: 'Private Move', customer: 'Angela Fontaine', phone: '(540) 555-0163',
    buildingType: 'Cabin shed', buildingSize: '10×14', serial: 'SN-927977',
    pickup: 'Fontaine (old site)', dropoff: 'Fontaine (new site)',
    status: 'Completed', route: 'RT-1010', assignee: 'Deshawn Miller',
    amountDue: 450, note: 'Customer relocating within county', contract: '',
  },
  // ── RT-1007: Priya Rao ───────────────────────────────────
  {
    id: 'WO-1088', type: 'Repair', customer: 'Priya Nair', phone: '(540) 555-0144',
    buildingType: 'Warehouse shed', buildingSize: '12×24', serial: 'SN-928033',
    pickup: '', dropoff: '',
    visit: 'Nair residence',                    // ← Service WO uses 'visit' field
    status: 'Scheduled', route: 'RT-1007', assignee: 'Priya Rao',
    amountDue: 275, note: 'Roof panel seam leaking after storm', contract: '',
    flag: 'Warranty',
  },
  {
    id: 'WO-1091', type: 'Welfare Check', customer: 'Carefree Rentals, LLC', phone: '(540) 555-0191',
    buildingType: 'Utility shed', buildingSize: '8×12', serial: 'SN-928054',
    pickup: '', dropoff: '',
    visit: 'Carefree unit',                     // ← Service WO uses 'visit' field
    status: 'Scheduled', route: 'RT-1007', assignee: 'Priya Rao',
    amountDue: 0, note: 'Quarterly check · 6-point condition checklist', contract: 'RTO-24-1302',
    flag: 'Photos required',
  },
  {
    id: 'WO-1096', type: 'Payment Collection', customer: 'Marcus Delgado', phone: '(540) 555-0128',
    buildingType: 'Barn shed', buildingSize: '10×12', serial: 'SN-928089',
    pickup: '', dropoff: '',
    visit: 'Delgado residence',                 // ← Service WO uses 'visit' field
    status: 'Completed', route: 'RT-1004', assignee: 'Cole Jansen',
    amountDue: 189.99, note: '$312.50 past due', contract: 'RTO-24-1188',
    flag: 'Cash / card',
  }
];

// ============================================================
// Mock Routes (10)
// ============================================================
export const MOCK_ROUTES: RouteData[] = [
  { id: 'RT-1001', assignee: 'Miguel Ortiz',   workOrders: 3, stops: 4, distance: '64.2 mi', scheduledDate: 'Jul 21, 2026 · 7:00 AM',  dispatched: 'Dana Cole',    status: 'Scheduled', ownerEntity: 'Rose MNF (Demo Dev)',          supportPhone: '(540) 555-0110', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1002', assignee: 'Deshawn Miller', workOrders: 0, stops: 0, distance: '0 mi',    scheduledDate: 'Jul 22, 2026 · 8:30 AM',  dispatched: 'Dana Cole',    status: 'Draft',     ownerEntity: 'Rose Store - Harrisonburg',    supportPhone: '(540) 555-0142', startAddress: '1790 E Market St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1003', assignee: 'Priya Rao',      workOrders: 3, stops: 3, distance: '58.6 mi', scheduledDate: 'Jul 23, 2026 · 6:30 AM',  dispatched: 'Dana Cole',    status: 'En Route',  ownerEntity: 'Rose Store - Staunton',        supportPhone: '(540) 555-0187', startAddress: '101 Commerce Rd, Staunton, VA 24401', endAddress: '', note: '' },
  { id: 'RT-1004', assignee: 'Cole Jansen',    workOrders: 2, stops: 2, distance: '41.1 mi', scheduledDate: 'Jul 18, 2026 · 7:00 AM',  dispatched: 'Shedpro Test', status: 'Completed', ownerEntity: 'Rose MNF (Demo Dev)',          supportPhone: '(540) 555-0110', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1005', assignee: 'Sam Okafor',     workOrders: 3, stops: 3, distance: '73.8 mi', scheduledDate: 'Jul 24, 2026 · 9:00 AM',  dispatched: 'Dana Cole',    status: 'Scheduled', ownerEntity: 'Rose Store - Harrisonburg',    supportPhone: '(540) 555-0142', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: 'Load heaviest units last' },
  { id: 'RT-1006', assignee: 'Miguel Ortiz',   workOrders: 2, stops: 2, distance: '36.4 mi', scheduledDate: 'Jul 28, 2026 · 7:30 AM',  dispatched: 'Dana Cole',    status: 'Scheduled', ownerEntity: 'Rose MNF (Demo Dev)',          supportPhone: '(540) 555-0110', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1007', assignee: 'Priya Rao',      workOrders: 2, stops: 2, distance: '28.9 mi', scheduledDate: 'Jul 29, 2026 · 8:00 AM',  dispatched: 'Shedpro Test', status: 'Scheduled', ownerEntity: 'ShedPro Co.',                  supportPhone: '(540) 555-0187', startAddress: '1790 E Market St, Harrisonburg, VA 22801', endAddress: '', note: 'Repair + welfare check' },
  { id: 'RT-1008', assignee: 'Cole Jansen',    workOrders: 2, stops: 2, distance: '49.5 mi', scheduledDate: 'Jul 30, 2026 · 6:45 AM',  dispatched: 'Dana Cole',    status: 'En Route',  ownerEntity: 'Rose MNF (Demo Dev)',          supportPhone: '(540) 555-0110', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1009', assignee: 'Sam Okafor',     workOrders: 2, stops: 2, distance: '52.1 mi', scheduledDate: 'Jul 31, 2026 · 9:15 AM',  dispatched: 'Dana Cole',    status: 'Draft',     ownerEntity: 'Rose Store - Harrisonburg',    supportPhone: '(540) 555-0142', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
  { id: 'RT-1010', assignee: 'Deshawn Miller', workOrders: 3, stops: 3, distance: '61.3 mi', scheduledDate: 'Jul 17, 2026 · 7:00 AM',  dispatched: 'Shedpro Test', status: 'Completed', ownerEntity: 'Rose MNF (Demo Dev)',          supportPhone: '(540) 555-0110', startAddress: '3210 S Main St, Harrisonburg, VA 22801', endAddress: '', note: '' },
];
