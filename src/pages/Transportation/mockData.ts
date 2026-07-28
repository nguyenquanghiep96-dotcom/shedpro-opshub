import { WorkOrder, Route, ContractItem, InventoryItem, WorkOrderType, WorkOrderStatus } from './types';

export const DRIVERS = [
  'Miguel Ortiz',
  'Deshawn Miller',
  'Priya Rao',
  'Cole Jansen',
  'Sam Okafor'
];

export const DISPATCHERS = [
  'Dana Cole',
  'Shedpro Test'
];

export const MOCK_LOCATIONS = {
  plant: { name: 'ShedPro Plant', addr: '3210 S Main St, Harrisonburg, VA 22801' },
  lotA: { name: 'Rose Lot A', addr: '1790 E Market St, Harrisonburg, VA 22801' },
  lotB: { name: 'Rose Lot B', addr: '125 Main St, Dayton, VA 22821' },
  maple: { name: 'Cedar Grove Lot', addr: '212 N Main St, Bridgewater, VA 22812' },
  hillcrest: { name: 'Whitfield residence', addr: '116 W Beverley St, Staunton, VA 24401' },
  lakeview: { name: 'Koenig residence', addr: '400 Dogwood Ave, Grottoes, VA 24441' },
  sycamore: { name: 'Banks residence', addr: '173 W Spotswood Trail, Elkton, VA 22827' },
  orchard: { name: 'Fontaine (old site)', addr: '125 Main St, Mount Crawford, VA 22841' },
  ridgeway: { name: 'Fontaine (new site)', addr: '234 Cave Hill Rd, Weyers Cave, VA 24486' },
  brookside: { name: 'Nair residence', addr: '68 Lee Hwy, Verona, VA 24482' },
  willow: { name: 'Okonkwo residence', addr: '89 Willow Creek Rd, Harrisonburg, VA 22801' },
  pinehurst: { name: 'Vance residence', addr: '512 Pinehurst Ave, Staunton, VA 24401' },
  meadow: { name: 'Ferreira residence', addr: '34 Meadow Dr, Bridgewater, VA 22812' },
  summit: { name: 'Rae residence', addr: '780 Summit Ridge Rd, Harrisonburg, VA 22802' },
  birch: { name: 'Cortez residence', addr: '14 Birch St, Dayton, VA 22821' }
};

export const INITIAL_WORK_ORDERS: WorkOrder[] = [
  {
    id: 'WO-1042',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Dennis Sartain',
    phone: '(540) 555-9812',
    buildingSize: '10×12',
    buildingType: 'Utility shed',
    serialNumber: 'SN-927711',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.maple.addr,
    routeId: 'rA',
    driver: 'Miguel Ortiz',
    ownerEntity: 'Rose MNF (Demo Dev)',
    amountDue: 0
  },
  {
    id: 'WO-1043',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Marisol Reyes',
    phone: '(540) 555-8734',
    buildingSize: '12×16',
    buildingType: 'Garden shed',
    serialNumber: 'SN-927718',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.maple.addr,
    routeId: 'rA',
    driver: 'Miguel Ortiz',
    ownerEntity: 'Rose MNF (Demo Dev)',
    amountDue: 0
  },
  {
    id: 'WO-1051',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Grant Whitfield',
    phone: '(540) 555-3412',
    buildingSize: '8×10',
    buildingType: 'Lean-to shed',
    serialNumber: 'SN-927774',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.hillcrest.addr,
    routeId: 'rA',
    driver: 'Miguel Ortiz',
    ownerEntity: 'Rose MNF (Demo Dev)',
    amountDue: 0
  },
  {
    id: 'WO-1067',
    type: 'delivery',
    category: 'move',
    status: 'completed',
    customerName: 'Sandra Koenig',
    phone: '(540) 555-6670',
    buildingSize: '10×10',
    buildingType: 'Studio shed',
    serialNumber: 'SN-927886',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.lakeview.addr,
    routeId: 'rD',
    driver: 'Cole Jansen',
    ownerEntity: 'Rose MNF (Demo Dev)',
    amountDue: 0
  },
  {
    id: 'WO-1070',
    type: 'repo',
    category: 'move',
    status: 'open',
    customerName: 'Tyrell Banks',
    phone: '(540) 555-4389',
    buildingSize: '10×16',
    buildingType: 'Barn shed',
    serialNumber: 'SN-927907',
    pickupAddress: MOCK_LOCATIONS.sycamore.addr,
    dropoffAddress: MOCK_LOCATIONS.plant.addr,
    detail: '2 payments past due · repossession approved',
    ownerEntity: 'Rose Store - Staunton',
    amountDue: 0
  },
  {
    id: 'WO-1074',
    type: 'lot_transfer',
    category: 'move',
    status: 'open',
    customerName: 'Internal Inventory',
    buildingSize: '12×20',
    buildingType: 'Garage',
    serialNumber: 'SN-927935',
    pickupAddress: MOCK_LOCATIONS.lotA.addr,
    dropoffAddress: MOCK_LOCATIONS.lotB.addr,
    detail: 'Rebalancing display stock between lots',
    ownerEntity: 'Rose Store - Staunton',
    amountDue: 0
  },
  {
    id: 'WO-1080',
    type: 'private_move',
    category: 'move',
    status: 'completed',
    customerName: 'Angela Fontaine',
    phone: '(540) 555-2190',
    buildingSize: '10×14',
    buildingType: 'Cabin shed',
    serialNumber: 'SN-927977',
    pickupAddress: MOCK_LOCATIONS.orchard.addr,
    dropoffAddress: MOCK_LOCATIONS.ridgeway.addr,
    detail: 'Customer relocating within county',
    routeId: 'rJ',
    driver: 'Deshawn Miller',
    ownerEntity: 'Rose Store - Harrisonburg',
    amountDue: 450
  },
  {
    id: 'WO-1088',
    type: 'repair',
    category: 'service',
    status: 'scheduled',
    customerName: 'Priya Nair',
    phone: '(540) 555-7761',
    buildingSize: '12×24',
    buildingType: 'Warehouse shed',
    serialNumber: 'SN-928033',
    visitAddress: MOCK_LOCATIONS.brookside.addr,
    detail: 'Roof panel seam leaking after storm',
    flag: 'Warranty',
    routeId: 'rG',
    driver: 'Priya Rao',
    ownerEntity: 'ShedPro Co.',
    amountDue: 0
  },
  {
    id: 'WO-1091',
    type: 'welfare',
    category: 'service',
    status: 'scheduled',
    customerName: 'Carefree Rentals, LLC',
    phone: '(540) 555-1100',
    buildingSize: '8×12',
    buildingType: 'Utility shed',
    serialNumber: 'SN-928054',
    visitAddress: MOCK_LOCATIONS.lotA.addr,
    detail: 'Quarterly check · 6-point condition checklist',
    flag: 'Photos required',
    routeId: 'rG',
    driver: 'Priya Rao',
    ownerEntity: 'ShedPro Co.',
    amountDue: 0
  },
  {
    id: 'WO-1096',
    type: 'payment',
    category: 'service',
    status: 'completed',
    customerName: 'Marcus Delgado',
    phone: '(540) 555-8821',
    buildingSize: '10×12',
    buildingType: 'Barn shed',
    serialNumber: 'SN-928089',
    visitAddress: MOCK_LOCATIONS.lotB.addr,
    detail: '$312.50 past due',
    flag: 'Cash / card',
    routeId: 'rD',
    driver: 'Cole Jansen',
    ownerEntity: 'Rose MNF (Demo Dev)',
    amountDue: 312.50
  },
  {
    id: 'WO-1101',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Chidi Okonkwo',
    phone: '(540) 555-9012',
    buildingSize: '12×16',
    buildingType: 'Barn shed',
    serialNumber: 'SN-928124',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.willow.addr,
    routeId: 'rF',
    driver: 'Miguel Ortiz',
    ownerEntity: 'Rose Store - Harrisonburg',
    amountDue: 0
  },
  {
    id: 'WO-1104',
    type: 'delivery',
    category: 'move',
    status: 'in_progress',
    customerName: 'Lauren Vance',
    phone: '(540) 555-4433',
    buildingSize: '10×20',
    buildingType: 'Garage shed',
    serialNumber: 'SN-928145',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.pinehurst.addr,
    routeId: 'rC',
    driver: 'Priya Rao',
    ownerEntity: 'Rose Store - Staunton',
    amountDue: 0
  },
  {
    id: 'WO-1108',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Bianca Ferreira',
    phone: '(540) 555-6122',
    buildingSize: '8×12',
    buildingType: 'Utility shed',
    serialNumber: 'SN-928173',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.meadow.addr,
    routeId: 'rE',
    driver: 'Sam Okafor',
    ownerEntity: 'Rose Store - Harrisonburg',
    amountDue: 0
  },
  {
    id: 'WO-1112',
    type: 'delivery',
    category: 'move',
    status: 'in_progress',
    customerName: 'Devon Rae',
    phone: '(540) 555-3390',
    buildingSize: '12×24',
    buildingType: 'Warehouse shed',
    serialNumber: 'SN-928201',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.summit.addr,
    routeId: 'rC',
    driver: 'Priya Rao',
    ownerEntity: 'Rose Store - Staunton',
    amountDue: 0
  },
  {
    id: 'WO-1115',
    type: 'delivery',
    category: 'move',
    status: 'scheduled',
    customerName: 'Hector Cortez',
    phone: '(540) 555-7721',
    buildingSize: '10×14',
    buildingType: 'Cabin shed',
    serialNumber: 'SN-928222',
    pickupAddress: MOCK_LOCATIONS.plant.addr,
    dropoffAddress: MOCK_LOCATIONS.birch.addr,
    routeId: 'rE',
    driver: 'Sam Okafor',
    ownerEntity: 'Rose Store - Harrisonburg',
    amountDue: 0
  }
];

export const INITIAL_ROUTES: Route[] = [
  {
    id: 'rA',
    code: 'RT-1001',
    name: 'Route A',
    driver: 'Miguel Ortiz',
    dispatchedBy: 'Dana Cole',
    ownerEntity: 'Rose MNF (Demo Dev)',
    supportPhone: '(540) 555-0110',
    startAddress: MOCK_LOCATIONS.plant.addr,
    endAddress: MOCK_LOCATIONS.plant.addr,
    backToStart: true,
    scheduledAt: '2026-07-25T07:00',
    note: '',
    status: 'scheduled',
    stops: [
      {
        id: 'stop-rA-1',
        sequence: 1,
        locationName: 'ShedPro Plant',
        address: MOCK_LOCATIONS.plant.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1042', role: 'pickup' },
          { woId: 'WO-1043', role: 'pickup' },
          { woId: 'WO-1051', role: 'pickup' }
        ]
      },
      {
        id: 'stop-rA-2',
        sequence: 2,
        locationName: 'Cedar Grove Lot',
        address: MOCK_LOCATIONS.maple.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1042', role: 'dropoff' },
          { woId: 'WO-1043', role: 'dropoff' }
        ]
      },
      {
        id: 'stop-rA-3',
        sequence: 3,
        locationName: 'Whitfield residence',
        address: MOCK_LOCATIONS.hillcrest.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1051', role: 'dropoff' }
        ]
      }
    ]
  },
  {
    id: 'rB',
    code: 'RT-1002',
    name: 'Route B',
    driver: 'Deshawn Miller',
    dispatchedBy: 'Dana Cole',
    ownerEntity: 'Rose Store - Harrisonburg',
    supportPhone: '(540) 555-0142',
    startAddress: MOCK_LOCATIONS.lotA.addr,
    endAddress: MOCK_LOCATIONS.lotA.addr,
    backToStart: true,
    scheduledAt: '2026-07-26T08:30',
    note: 'Pending final driver confirmation',
    status: 'draft',
    stops: []
  },
  {
    id: 'rC',
    code: 'RT-1003',
    name: 'Route C',
    driver: 'Priya Rao',
    dispatchedBy: 'Dana Cole',
    ownerEntity: 'Rose Store - Staunton',
    supportPhone: '(540) 555-0187',
    startAddress: MOCK_LOCATIONS.plant.addr,
    endAddress: MOCK_LOCATIONS.plant.addr,
    backToStart: true,
    scheduledAt: '2026-07-23T06:30',
    note: 'Two deliveries + roof repair on the way back',
    status: 'en_route',
    stops: [
      {
        id: 'stop-rC-1',
        sequence: 1,
        locationName: 'ShedPro Plant',
        address: MOCK_LOCATIONS.plant.addr,
        status: 'completed',
        workOrders: [
          { woId: 'WO-1104', role: 'pickup' },
          { woId: 'WO-1112', role: 'pickup' }
        ]
      },
      {
        id: 'stop-rC-2',
        sequence: 2,
        locationName: 'Vance residence',
        address: MOCK_LOCATIONS.pinehurst.addr,
        status: 'en_route',
        workOrders: [
          { woId: 'WO-1104', role: 'dropoff' }
        ]
      },
      {
        id: 'stop-rC-3',
        sequence: 3,
        locationName: 'Rae residence',
        address: MOCK_LOCATIONS.summit.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1112', role: 'dropoff' }
        ]
      }
    ]
  },
  {
    id: 'rD',
    code: 'RT-1004',
    name: 'Route D',
    driver: 'Cole Jansen',
    dispatchedBy: 'Shedpro Test',
    ownerEntity: 'Rose MNF (Demo Dev)',
    supportPhone: '(540) 555-0110',
    startAddress: MOCK_LOCATIONS.plant.addr,
    endAddress: MOCK_LOCATIONS.plant.addr,
    backToStart: true,
    scheduledAt: '2026-07-18T07:00',
    note: '',
    status: 'completed',
    stops: [
      {
        id: 'stop-rD-1',
        sequence: 1,
        locationName: 'ShedPro Plant',
        address: MOCK_LOCATIONS.plant.addr,
        status: 'completed',
        workOrders: [
          { woId: 'WO-1067', role: 'pickup' }
        ]
      },
      {
        id: 'stop-rD-2',
        sequence: 2,
        locationName: 'Koenig residence',
        address: MOCK_LOCATIONS.lakeview.addr,
        status: 'completed',
        workOrders: [
          { woId: 'WO-1067', role: 'dropoff' }
        ]
      },
      {
        id: 'stop-rD-3',
        sequence: 3,
        locationName: 'Delgado residence',
        address: MOCK_LOCATIONS.lotB.addr,
        status: 'completed',
        workOrders: [
          { woId: 'WO-1096', role: 'visit' }
        ]
      }
    ]
  },
  {
    id: 'rE',
    code: 'RT-1005',
    name: 'Route E',
    driver: 'Sam Okafor',
    dispatchedBy: 'Dana Cole',
    ownerEntity: 'Rose Store - Harrisonburg',
    supportPhone: '(540) 555-0142',
    startAddress: MOCK_LOCATIONS.lotB.addr,
    endAddress: MOCK_LOCATIONS.lotB.addr,
    backToStart: true,
    scheduledAt: '2026-07-27T09:00',
    note: '',
    status: 'scheduled',
    stops: [
      {
        id: 'stop-rE-1',
        sequence: 1,
        locationName: 'ShedPro Plant',
        address: MOCK_LOCATIONS.plant.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1108', role: 'pickup' },
          { woId: 'WO-1115', role: 'pickup' }
        ]
      },
      {
        id: 'stop-rE-2',
        sequence: 2,
        locationName: 'Ferreira residence',
        address: MOCK_LOCATIONS.meadow.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1108', role: 'dropoff' }
        ]
      },
      {
        id: 'stop-rE-3',
        sequence: 3,
        locationName: 'Cortez residence',
        address: MOCK_LOCATIONS.birch.addr,
        status: 'pending',
        workOrders: [
          { woId: 'WO-1115', role: 'dropoff' }
        ]
      }
    ]
  }
];

export const MOCK_CONTRACTS: ContractItem[] = [
  {
    id: '2-24756',
    customerName: 'Dennis Sartain',
    type: 'Cash Sales',
    buildingType: 'Utility shed',
    buildingSize: '10×12',
    serialNumber: 'SN-927711',
    address: '212 N Main St',
    city: 'Bridgewater',
    state: 'VA',
    zip: '22812',
    phone: '(842)-028-8849',
    amount: 3450
  },
  {
    id: '2-24757',
    customerName: 'Alice Wonderland',
    type: 'RTO',
    buildingType: 'Garden shed',
    buildingSize: '12×16',
    serialNumber: 'SN-927718',
    address: '101 Maple St',
    city: 'Harrisonburg',
    state: 'VA',
    zip: '22801',
    phone: '(512)-555-1234',
    amount: 4200
  },
  {
    id: '3-10023',
    customerName: 'Tyrell Banks',
    type: 'RTO',
    buildingType: 'Barn shed',
    buildingSize: '10×16',
    serialNumber: 'SN-927907',
    address: '173 W Spotswood Trail',
    city: 'Elkton',
    state: 'VA',
    zip: '22827',
    phone: '(540) 555-4389',
    amount: 5100
  },
  {
    id: '4-55555',
    customerName: 'Angela Fontaine',
    type: 'Cash Sales',
    buildingType: 'Cabin shed',
    buildingSize: '10×14',
    serialNumber: 'SN-927977',
    address: '234 Cave Hill Rd',
    city: 'Weyers Cave',
    state: 'VA',
    zip: '24486',
    phone: '(540) 555-2190',
    amount: 4800
  }
];

export const MOCK_INVENTORY: InventoryItem[] = [
  {
    id: 'INV-9280',
    buildingType: 'Utility shed',
    buildingSize: '10×12',
    serialNumber: 'SN-927711',
    color: 'Barn Red / White',
    location: 'ShedPro Plant',
    status: 'Available',
    price: 3450
  },
  {
    id: 'INV-9281',
    buildingType: 'Garden shed',
    buildingSize: '12×16',
    serialNumber: 'SN-927718',
    color: 'Charcoal / Black',
    location: 'Rose Lot A',
    status: 'Reserved',
    price: 4200
  },
  {
    id: 'INV-9282',
    buildingType: 'Barn shed',
    buildingSize: '10×16',
    serialNumber: 'SN-927907',
    color: 'Chestnut / Tan',
    location: 'Rose Lot B',
    status: 'Available',
    price: 5100
  },
  {
    id: 'INV-9283',
    buildingType: 'Garage shed',
    buildingSize: '12×20',
    serialNumber: 'SN-927935',
    color: 'White / Gray',
    location: 'ShedPro Plant',
    status: 'Available',
    price: 6800
  }
];

export function getWorkOrderTypeBadge(type: WorkOrderType): { label: string; bg: string; text: string } {
  switch (type) {
    case 'delivery':
      return { label: 'Delivery', bg: 'bg-[#e0f2fe]', text: 'text-[#0369a1]' };
    case 'repo':
      return { label: 'Repo', bg: 'bg-[#ffe4e6]', text: 'text-[#e11d48]' };
    case 'lot_transfer':
      return { label: 'Lot Transfer', bg: 'bg-[#f3e8ff]', text: 'text-[#6b21a8]' };
    case 'private_move':
      return { label: 'Private Move', bg: 'bg-[#fef3c7]', text: 'text-[#b45309]' };
    case 'repair':
      return { label: 'Repair', bg: 'bg-[#dcfce7]', text: 'text-[#15803d]' };
    case 'welfare':
      return { label: 'Welfare Check', bg: 'bg-[#ccfbf1]', text: 'text-[#0f766e]' };
    case 'payment':
      return { label: 'Payment Collection', bg: 'bg-[#ffedd5]', text: 'text-[#c2410c]' };
    default:
      return { label: type, bg: 'bg-[#f3f4f6]', text: 'text-[#4b5563]' };
  }
}

export function getWorkOrderStatusBadge(status: WorkOrderStatus): { label: string; bg: string; text: string } {
  switch (status) {
    case 'open':
      return { label: 'Open (Unscheduled)', bg: 'bg-[#fef3c7]', text: 'text-[#b45309]' };
    case 'scheduled':
      return { label: 'Scheduled', bg: 'bg-[#e0f2fe]', text: 'text-[#0369a1]' };
    case 'in_progress':
      return { label: 'In Progress', bg: 'bg-[#fef08a]', text: 'text-[#854d0e]' };
    case 'completed':
      return { label: 'Completed', bg: 'bg-[#dcfce7]', text: 'text-[#15803d]' };
    case 'cancelled':
      return { label: 'Cancelled', bg: 'bg-[#f3f4f6]', text: 'text-[#9ca3af]' };
  }
}
