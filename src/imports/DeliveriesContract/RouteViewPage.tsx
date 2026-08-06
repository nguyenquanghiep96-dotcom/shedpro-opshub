import React, { useState, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  MOCK_ROUTES, MOCK_WORK_ORDERS, WorkOrder,
  ASSIGNEE_OPTIONS, OWNER_OPTIONS, WO_TYPE_COLORS, isMoveType, resolveAddress,
} from './transportationData';
import RouteMap, { MapStop } from './RouteMap';
import { Btn, Icons, CloseBtn, Input, Select, Textarea, FormLabel, Checkbox, StatusBadge, TypeBadge, RoleLabel, ROLE_COLORS } from './ui';

const getFullAddress = resolveAddress;

// ============================================================
// STOP INTERFACE & BUILDER
// ============================================================
interface RouteStop {
  seq: number;
  role: 'START' | 'PICKUP' | 'DROPOFF' | 'VISIT';
  location: string;
  address: string;
  woIds: string[];
  status?: string;
}

function buildStopsFromWOs(startAddr: string, workOrders: WorkOrder[]): RouteStop[] {
  const stops: RouteStop[] = [
    { seq: 1, role: 'START', location: 'Start address', address: startAddr || '', woIds: [] },
  ];
  if (workOrders.length === 0) return stops;
  const addressIndex = new Map<string, number>();
  let seq = 2;
  const getOrCreate = (role: 'PICKUP' | 'DROPOFF' | 'VISIT', loc: string, woId: string) => {
    const key = `${role}:${loc}`;
    if (addressIndex.has(key)) {
      stops[addressIndex.get(key)!].woIds.push(woId);
    } else {
      stops.push({ seq: seq++, role, location: loc, address: getFullAddress(loc), woIds: [woId], status: 'Pending' });
      addressIndex.set(key, stops.length - 1);
    }
  };
  workOrders.forEach(wo => {
    if (isMoveType(wo.type)) {
      getOrCreate('PICKUP',  wo.pickup  || 'ShedPro Plant',    wo.id);
      getOrCreate('DROPOFF', wo.dropoff || 'Customer Address', wo.id);
    } else {
      getOrCreate('VISIT', wo.visit || wo.dropoff || 'Service Address', wo.id);
    }
  });
  return stops;
}



// ── Drag handle 2×3 dots ───────────────────────────────────
function DragHandle() {
  return (
    <div className="cursor-grab flex flex-col gap-[3px] items-center select-none" title="Drag to reorder">
      {[0, 1, 2].map(r => (
        <div key={r} className="flex gap-[3px]">
          <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
          <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
        </div>
      ))}
    </div>
  );
}


// ============================================================
// WO VIEW-ONLY POPUP
// ============================================================
function WODetailPopup({ wo, onClose }: { wo: WorkOrder; onClose: () => void }) {
  const lbl = 'block font-sans font-medium text-[#5E6578] text-[13px] mb-[4px]';
  const val = 'font-sans text-[#2B3B63] text-[14px] font-semibold';
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white rounded-[10px] w-full max-w-[540px] max-h-[85vh] overflow-y-auto shadow-xl mx-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8eaed]">
          <div className="flex items-center gap-3">
            <span className={val}>{wo.id}</span>
            <TypeBadge type={wo.type} />
          </div>
          <CloseBtn onClick={onClose} />
        </div>
        <div className="px-6 py-5 grid grid-cols-2 gap-x-6 gap-y-4">
          <div><label className={lbl}>Customer</label><p className={val}>{wo.customerName}</p></div>
          <div><label className={lbl}>Phone</label><p className={val}>{wo.customerPhone || '—'}</p></div>
          <div><label className={lbl}>Building</label><p className={val}>{wo.buildingSize} {wo.buildingType}</p></div>
          <div><label className={lbl}>Serial</label><p className={val}>{wo.serial || '—'}</p></div>
          {isMoveType(wo.type) ? (
            <>
              <div><label className={lbl}>Pickup</label><p className={val}>{getFullAddress(wo.pickup || '') || wo.pickup || '—'}</p></div>
              <div><label className={lbl}>Dropoff</label><p className={val}>{getFullAddress(wo.dropoff || '') || wo.dropoff || '—'}</p></div>
            </>
          ) : (
            <div className="col-span-2"><label className={lbl}>Visit address</label><p className={val}>{getFullAddress(wo.dropoff || '') || wo.dropoff || '—'}</p></div>
          )}
          <div><label className={lbl}>Assignee</label><p className={val}>{wo.assignee || 'Unassigned'}</p></div>
          <div><label className={lbl}>Status</label><StatusBadge status={wo.status} /></div>
          {wo.note && <div className="col-span-2"><label className={lbl}>Note</label><p className={val}>{wo.note}</p></div>}
        </div>
        <div className="px-6 py-4 border-t border-[#e8eaed] flex justify-end">
          <Btn variant="outline" onClick={onClose}>Close</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ADD WORK ORDERS MODAL
// ============================================================
function AddWorkOrdersModal({ isOpen, onClose, onAdd, alreadyAdded, onViewWO }: {
  isOpen: boolean; onClose: () => void; onAdd: (wo: WorkOrder) => void; alreadyAdded: string[]; onViewWO: (wo: WorkOrder) => void;
}) {
  if (!isOpen) return null;
  const allWOs = MOCK_WORK_ORDERS;
  const availableCount = allWOs.filter(wo => !alreadyAdded.includes(wo.id) && !wo.route).length;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white rounded-[10px] w-full max-w-[720px] max-h-[85vh] overflow-hidden shadow-xl mx-4 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8eaed]">
          <div className="flex items-baseline gap-2">
            <h2 className="font-sans font-bold text-[#2b3b63] text-[20px]">Add Work Orders</h2>
            <span className="font-sans text-[#787e90] text-[14px]">{availableCount} available</span>
          </div>
          <CloseBtn onClick={onClose} />
        </div>
        <div className="flex-1 overflow-y-auto">
          {allWOs.map(wo => {
            const isAdded = alreadyAdded.includes(wo.id);
            const isOnOtherRoute = !isAdded && !!wo.route;
            const pickupAddr = wo.pickup ? getFullAddress(wo.pickup) : '';
            const dropoffAddr = wo.dropoff ? getFullAddress(wo.dropoff) : '';
            return (
              <div key={wo.id} className={`px-6 py-3 border-b border-[#f0f0f0] transition-colors ${isOnOtherRoute ? 'opacity-60' : 'hover:bg-[#fafafa]'}`}>
                {/* Row 1: Type badge + building + customer + WO ID + action */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-[120px]"><TypeBadge type={wo.type} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans font-bold text-[#2b3b63] text-[14px]">{wo.buildingSize} {wo.buildingType}</span>
                      <span className="font-sans text-[#787e90] text-[13px]"> · {wo.customer}</span>
                    </div>
                  </div>
                  <span className="shrink-0 font-sans font-semibold text-[#FF7048] text-[13px] w-[70px] text-right cursor-pointer hover:underline" onClick={() => onViewWO(wo)}>{wo.id}</span>
                  <div className="shrink-0 w-[100px] text-right">
                    {isAdded ? (
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#16A34A] border border-[#16A34A] rounded-[6px] px-[10px] py-[4px]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Added
                      </span>
                    ) : isOnOtherRoute ? (
                      <span className="inline-block text-[12px] font-semibold text-[#a0a4b0] border border-[#d8dadf] rounded-[6px] px-[10px] py-[4px] cursor-not-allowed" title={`Assigned to ${wo.route}`}>On {wo.route}</span>
                    ) : (
                      <button onClick={() => onAdd(wo)} className="cursor-pointer text-[12px] font-semibold text-white bg-[#2B3B63] hover:bg-[#1a233b] rounded-[6px] px-[14px] py-[4px] transition-colors">Add</button>
                    )}
                  </div>
                </div>
                {/* Row 2: Address info with colored labels */}
                {isMoveType(wo.type) ? (
                  <div className="mt-1 flex flex-col gap-[2px] pl-[136px]">
                    <div className="flex items-center gap-2">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#2B3B63] shrink-0" />
                      <span className="font-sans font-bold text-[#2B3B63] text-[11px] uppercase w-[60px] shrink-0">Pickup</span>
                      <span className="font-sans text-[#787e90] text-[12px] truncate">{pickupAddr || wo.pickup}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#FF7048] shrink-0" />
                      <span className="font-sans font-bold text-[#FF7048] text-[11px] uppercase w-[60px] shrink-0">Dropoff</span>
                      <span className="font-sans text-[#787e90] text-[12px] truncate">{dropoffAddr || wo.dropoff}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-2 pl-[136px]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#16a34a] shrink-0" />
                    <span className="font-sans font-bold text-[#16a34a] text-[11px] uppercase w-[60px] shrink-0">Visit</span>
                    <span className="font-sans text-[#787e90] text-[12px] truncate">{dropoffAddr || wo.visit || wo.dropoff}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-end px-6 py-4 border-t border-[#e8eaed]">
          <Btn variant="primary" onClick={onClose}>Done</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN: ROUTE DETAIL PAGE
// ============================================================
export default function RouteViewPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isNew = !id;
  const existingRoute = id ? MOCK_ROUTES.find(r => r.id === id) : null;

  const [formOwner,     setFormOwner]     = useState(existingRoute?.ownerEntity || OWNER_OPTIONS[0]);
  const [formAssignee,  setFormAssignee]  = useState(existingRoute?.assignee || '');
  const [formPhone,     setFormPhone]     = useState(existingRoute?.supportPhone || '');
  const [formDate,      setFormDate]      = useState('2026-07-27T07:00');
  const [formStartAddr, setFormStartAddr] = useState(existingRoute?.startAddress || '3210 S Main St, Harrisonburg, VA 22801');
  const [formEndAddr,   setFormEndAddr]   = useState(existingRoute?.endAddress   || '3210 S Main St, Harrisonburg, VA 22801');
  const [backToStart,   setBackToStart]   = useState(true);
  const [formNote,      setFormNote]      = useState(existingRoute?.note || '');
  const [formStatus,    setFormStatus]    = useState<string>(existingRoute?.status || 'Draft');

  const initialWOs = existingRoute ? MOCK_WORK_ORDERS.filter(w => w.route === existingRoute.id) : [];
  const [routeWOs,       setRouteWOs]       = useState<WorkOrder[]>(initialWOs);
  const [showAddWOModal, setShowAddWOModal] = useState(false);
  const [viewingWO,      setViewingWO]      = useState<WorkOrder | null>(null);
  const [stopOrder,      setStopOrder]      = useState<string[]>([]);

  // ── DnD state ──────────────────────────────────────────────
  const [draggedKey, setDraggedKey] = useState<string | null>(null);

  const stopsBase = useMemo(() => buildStopsFromWOs(formStartAddr, routeWOs), [formStartAddr, routeWOs]);

  const stops = useMemo(() => {
    const start = stopsBase.filter(s => s.role === 'START');
    const rest  = stopsBase.filter(s => s.role !== 'START');
    if (stopOrder.length === 0) return stopsBase;
    const ordered   = stopOrder.map(key => rest.find(s => `${s.role}:${s.location}` === key)).filter(Boolean) as typeof rest;
    const remaining = rest.filter(s => !stopOrder.includes(`${s.role}:${s.location}`));
    return [...start, ...ordered, ...remaining].map((s, i) => ({ ...s, seq: i + 1 }));
  }, [stopsBase, stopOrder]);

  // ── Arrow reorder ───────────────────────────────────────────
  const handleMoveStop = (idx: number, dir: -1 | 1) => {
    const nonStart = stops.filter(s => s.role !== 'START');
    const realIdx  = idx - 1;
    const target   = realIdx + dir;
    if (target < 0 || target >= nonStart.length) return;
    const keys = nonStart.map(s => `${s.role}:${s.location}`);
    const next = [...keys];
    [next[realIdx], next[target]] = [next[target], next[realIdx]];
    setStopOrder(next);
  };

  // ── Drag-and-drop live reorder ──────────────────────────────
  const handleDragStart = (e: React.DragEvent, key: string) => {
    setDraggedKey(key);
  };
  const handleDragEnter = (e: React.DragEvent, targetKey: string) => {
    e.preventDefault();
    if (!draggedKey || draggedKey === targetKey) return;
    if (targetKey.startsWith('START:')) return; // can't swap with START

    setStopOrder(prevOrder => {
      const nonStart = stopsBase.filter(s => s.role !== 'START');
      const allKeys = nonStart.map(s => `${s.role}:${s.location}`);
      const currentOrder = prevOrder.length > 0 ? prevOrder : allKeys;
      
      const fromIdx = currentOrder.indexOf(draggedKey);
      const toIdx = currentOrder.indexOf(targetKey);
      
      if (fromIdx === -1 || toIdx === -1) return currentOrder;
      
      const newOrder = [...currentOrder];
      newOrder.splice(fromIdx, 1);
      newOrder.splice(toIdx, 0, draggedKey);
      return newOrder;
    });
  };
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); };
  const handleDragEnd = () => { setDraggedKey(null); };

  const totalDistance = existingRoute?.distance || (routeWOs.length > 0 ? `${(routeWOs.length * 18.3).toFixed(1)} mi` : '0 mi');
  const routeId       = existingRoute?.id || 'RT-1018';

  const handleAddWO    = (wo: WorkOrder) => { setRouteWOs(prev => [...prev, wo]); setStopOrder([]); };
  const handleRemoveWO = (woId: string)  => { setRouteWOs(prev => prev.filter(w => w.id !== woId)); setStopOrder([]); };

  const mapStops = useMemo((): MapStop[] => {
    const result: MapStop[] = [{ seq: 1, role: 'START', label: 'Start address', address: formStartAddr }];
    stops.filter(s => s.seq > 1).forEach(s => result.push({ seq: s.seq, role: s.role, label: s.location, address: s.address }));
    if (backToStart) result.push({ seq: result.length + 1, role: 'END', label: 'Back to start', address: formStartAddr });
    return result;
  }, [stops, formStartAddr, backToStart]);

  const handleBackToStartChange = (val: boolean) => { setBackToStart(val); if (val) setFormEndAddr(formStartAddr); };

  // ── Render one stop card ────────────────────────────────────
  const renderStop = (stop: RouteStop, idx: number) => {
    const rc          = ROLE_COLORS[stop.role] || ROLE_COLORS['VISIT'];
    const attachedWOs = MOCK_WORK_ORDERS.filter(w => stop.woIds.includes(w.id));
    const canMoveUp   = stop.role !== 'START' && idx > 1;
    const canMoveDown = stop.role !== 'START' && idx < stops.length - 1;
    const isStart     = stop.role === 'START';
    const stopKey     = `${stop.role}:${stop.location}`;
    const isDragging  = draggedKey === stopKey;

    // Next stop color for connector dots
    const nextStop       = idx < stops.length - 1 ? stops[idx + 1] : null;
    const distanceMi     = ((idx + 1) * 12.5).toFixed(1);

    // START card gets a very subtle green tint
    const cardBg = isStart ? '#2FA30110' : 'white';

    return (
      <div key={`${stop.role}-${stop.location}-${idx}`}>
        {/* Card */}
        <div
          className="rounded-[10px] border border-[#e0e0e0] overflow-hidden transition-all duration-150"
          style={{ backgroundColor: cardBg }}
        >
          <div className="flex">
            {/* ── LEFT: seq + controls ── */}
            <div className={`flex flex-col items-center gap-[5px] px-[8px] py-[12px] w-[42px] shrink-0 border-r ${isStart ? 'border-[#2FA30130]' : 'bg-[#f8f9fa] border-[#e8eaed]'}`}>
              {/* Seq box - All dark gray #2E323D */}
              <div
                className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center text-[12px] font-bold text-white shrink-0"
                style={{ backgroundColor: '#2E323D' }}
              >
                {stop.seq}
              </div>

            </div>

            {/* ── RIGHT: content ── */}
            <div className="flex-1 px-4 py-3 min-w-0">
              {/* Header */}
              <div className="flex items-center gap-2 mb-[2px]">
                <RoleLabel role={stop.role} />
                <span className="text-[15px] font-bold text-[#2b3b63] leading-tight">{stop.location}</span>
                {stop.status && !isStart && (
                  <div className="ml-auto shrink-0"><StatusBadge status={stop.status} /></div>
                )}
              </div>
              <p className="text-[#787e90] text-[13px]">{stop.address}</p>

              {/* WO rows */}
              {attachedWOs.length > 0 && (
                <div className="flex flex-col gap-[5px] mt-[10px] pt-[10px] border-t border-dashed border-[#e0e0e0]">
                  {attachedWOs.map(wo => (
                    <div key={wo.id} className="flex items-center justify-between bg-white/60 rounded-[6px] px-3 py-[6px] border border-[#e8eaed] gap-2">
                      <div className="flex items-center gap-[6px] min-w-0 flex-wrap">
                        <TypeBadge type={wo.type} />
                        <span className="font-semibold text-[#2b3b63] text-[13px]">{wo.buildingSize} {wo.buildingType}</span>
                        <span className="text-[#787e90] text-[12px]">· {wo.serial}</span>
                        <span className="text-[#787e90] text-[12px]">{wo.customer}</span>
                      </div>
                      <div className="flex items-center gap-[6px] shrink-0">
                        <button
                          onClick={() => setViewingWO(wo)}
                          className="text-[11px] font-bold text-[#FF7048] hover:underline underline-offset-2 cursor-pointer transition-colors whitespace-nowrap"
                          title="View details"
                        >
                          {wo.id}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Connector to next stop */}
        {idx < stops.length - 1 && (
          <div className="py-[6px] ml-[21px]">
            <span className="text-[#787e90] text-[11px] font-medium">{distanceMi} mi to next stop</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center overflow-y-auto">
      <div className="w-full px-[24px] pt-[10px] pb-[24px]">
        <div className="bg-white rounded-[12px] px-8 py-6">
          <div className="max-w-[1248px] mx-auto">

            {/* Title + Status Badge */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate('/transportation/routes')} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-[#5e6578] hover:text-[#2b3b63] cursor-pointer transition-colors" title="Back">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <h1 className="text-[24px] font-bold text-[#2b3b63] leading-tight">{isNew ? 'Create New Route' : `Route ${routeId}`}</h1>
                <StatusBadge status={formStatus} />
              </div>
              <div className="flex items-center gap-3">
                <Btn variant="primary" onClick={() => navigate(`/transportation/routes/${routeId}/edit`)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mr-2"><path d="M7 2.333h3.5c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C13.7 3.853 13.7 4.413 13.7 5.533v3.934c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H3.5c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C.3 11.147.3 10.587.3 9.467V5.533c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C1.82 2.333 2.38 2.333 3.5 2.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.85 1.5l1.65 1.65-8.25 8.25H2.6v-1.65l8.25-8.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Edit
                </Btn>
              </div>
            </div>

            {/* Route Information */}
            <div className="border border-[#d8dadf] rounded-[6px] mb-6">
              <div className="px-[24px] py-[16px] border-b border-[#e8eaed]">
                <span className="text-[#2b3b63] text-[16px] font-bold">Details</span>
              </div>
              
              {/* Form fields */}
              <div className="px-[24px] pb-[24px]">
                <div className="flex flex-col">
                  {/* Row 1 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center pr-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Status</span>
                      <StatusBadge status={formStatus} />
                    </div>
                    <div className="flex-1 flex items-center pl-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Driver</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">{formAssignee || 'Unassigned'}</p>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center pr-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Scheduled</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">{formDate}</p>
                    </div>
                    <div className="flex-1 flex items-center pl-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Clients</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">Appalachian Storage <span className="text-[#787e90]">(Manufacturer)</span></p>
                    </div>
                  </div>
                  
                  {/* Row 3 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center pr-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Planned Distance</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">{totalDistance}</p>
                    </div>
                    <div className="flex-1 flex items-center pl-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">Start</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">{formStartAddr}</p>
                    </div>
                  </div>
                  
                  {/* Row 4 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center pr-3">
                      <span className="w-1/3 font-sans font-medium text-[#787e90] text-[12px] uppercase">End</span>
                      <p className="text-[#2b3b63] font-medium text-[14px]">{backToStart ? formStartAddr : formEndAddr}</p>
                    </div>
                    <div className="flex-1 flex items-center pl-3"></div>
                  </div>
                </div>
                
                <div className="mt-4 pt-2">
                  <span className="block font-sans font-medium text-[#787e90] text-[12px] uppercase mb-1">Note</span>
                  <p className="text-[#2b3b63] font-medium text-[14px] whitespace-pre-wrap">{formNote || '—'}</p>
                </div>
              </div>
            </div>

            {/* Stops header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#2b3b63]">Stops</h3>
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-6">
              {/* Stop list */}
              <div className="flex flex-col">
                {stops.map((stop, idx) => renderStop(stop, idx))}

                {/* END card */}
                {backToStart && (
                  <>
                    <div className="py-[6px] ml-[21px]">
                      <span className="text-[#787e90] text-[11px] font-medium">— mi to next stop</span>
                    </div>
                    <div className="rounded-[10px] border border-[#e0e0e0] overflow-hidden bg-[#f8f9fa]">
                      <div className="flex">
                        <div className="flex flex-col items-center justify-start px-[8px] py-[12px] w-[42px] shrink-0 border-r border-[#e8eaed]">
                          <div className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center text-white" style={{ backgroundColor: '#2E323D' }}>
                            <span className="material-symbols-rounded" style={{ fontSize: 15, lineHeight: 1, fontVariationSettings: "'FILL' 1, 'wght' 600" }}>flag</span>
                          </div>
                        </div>
                        <div className="flex-1 px-4 py-3 min-w-0">
                          <div className="flex items-center gap-2 mb-[2px]">
                            <RoleLabel role="END" />
                            <span className="text-[15px] font-bold text-[#2b3b63]">Back to start address</span>
                          </div>
                          <p className="text-[#787e90] text-[13px]">{formStartAddr}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Empty state */}
                {stops.length <= 1 && !backToStart && (
                  <div className="border-2 border-dashed border-[#D8DADF] rounded-[10px] p-8 text-center mt-2">
                    <svg className="mx-auto mb-3" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 5.333v21.334M5.333 16h21.334" stroke="#C0C4CC" strokeWidth="2" strokeLinecap="round"/></svg>
                    <p className="text-[#787e90] text-[16px] font-semibold mb-1">No work orders added yet</p>
                    <p className="text-[#94a3b8] text-[14px]">Click "+ Add Work Orders" to build your route stops.</p>
                  </div>
                )}
              </div>

              {/* Map */}
              <div className="sticky top-6">
                <RouteMap stops={mapStops} totalDistance={totalDistance} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <AddWorkOrdersModal isOpen={showAddWOModal} onClose={() => setShowAddWOModal(false)} onAdd={handleAddWO} alreadyAdded={routeWOs.map(w => w.id)} onViewWO={setViewingWO} />
      {viewingWO && <WODetailPopup wo={viewingWO} onClose={() => setViewingWO(null)} />}
    </div>
  );
}
