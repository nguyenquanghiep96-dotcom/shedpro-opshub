export type WorkOrderType = 
  | 'delivery'
  | 'repo'
  | 'lot_transfer'
  | 'private_move'
  | 'repair'
  | 'welfare'
  | 'payment';

export type WorkOrderCategory = 'move' | 'service';

export type WorkOrderStatus = 'open' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface WorkOrder {
  id: string; // e.g. "WO-1042"
  type: WorkOrderType;
  category: WorkOrderCategory;
  status: WorkOrderStatus;
  customerName: string;
  phone?: string;
  buildingSize?: string;
  buildingType?: string;
  serialNumber?: string;
  contractId?: string;
  inventoryId?: string;
  pickupAddress?: string;
  dropoffAddress?: string;
  visitAddress?: string;
  amountDue?: number;
  detail?: string;
  flag?: string; // e.g. "Warranty", "Photos required", "Cash / card"
  attachments?: string[];
  routeId?: string;
  driver?: string;
  ownerEntity?: string;
  createdAt?: string;
}

export type RouteStatus = 'draft' | 'scheduled' | 'en_route' | 'completed';

export type StopRole = 'pickup' | 'dropoff' | 'visit';

export type StopStatus = 'pending' | 'en_route' | 'arrived' | 'completed';

export interface StopWOReference {
  woId: string;
  role: StopRole;
}

export interface Stop {
  id: string; // e.g. "stop-1"
  sequence: number;
  locationName: string;
  address: string;
  status: StopStatus;
  workOrders: StopWOReference[];
}

export interface Route {
  id: string; // e.g. "rA"
  code: string; // e.g. "RT-1001"
  name: string;
  driver: string;
  dispatchedBy: string;
  ownerEntity: string;
  supportPhone: string;
  startAddress: string;
  endAddress?: string;
  backToStart: boolean;
  scheduledAt: string; // ISO / datetime string
  note?: string;
  status: RouteStatus;
  stops: Stop[];
}

export interface ContractItem {
  id: string; // e.g. "2-24756"
  customerName: string;
  type: 'Cash Sales' | 'RTO';
  buildingType: string;
  buildingSize: string;
  serialNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  amount: number;
}

export interface InventoryItem {
  id: string; // e.g. "INV-9280"
  buildingType: string;
  buildingSize: string;
  serialNumber: string;
  color: string;
  location: string;
  status: 'Available' | 'Reserved' | 'In Transit';
  price: number;
}
