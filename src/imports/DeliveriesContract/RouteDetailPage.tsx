import React, { useState, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  MOCK_ROUTES, MOCK_WORK_ORDERS, WorkOrder,
  ASSIGNEE_OPTIONS, OWNER_OPTIONS, WO_TYPE_COLORS, isMoveType, resolveAddress,
} from './transportationData';
import RouteMap, { MapStop } from './RouteMap';
import { Btn, Icons, CloseBtn, Input, Select, Textarea, FormLabel, Checkbox, StatusBadge, TypeBadge } from './ui';

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

// ============================================================
// ROLE COLORS
// ============================================================
const ROLE_COLORS: Record<string, { seq: string; pill: string }> = {
  START:   { seq: '#2FA301', pill: '#2FA301' },
  PICKUP:  { seq: '#2B3B63', pill: '#2B3B63' },
  DROPOFF: { seq: '#FF7048', pill: '#FF7048' },
  VISIT:   { seq: '#3B82F6', pill: '#3B82F6' },
  END:     { seq: '#4B5563', pill: '#4B5563' },
};

// ── Role Label ── dot + text, full-pill shape ──────────────
function RoleLabel({ role, color }: { role: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-[4px] px-[8px] whitespace-nowrap"
      style={{
        color,
        backgroundColor: `${color}20`,
        border: `1px solid ${color}60`,
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        height: 20,
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: color, display: 'inline-block', flexShrink: 0 }} />
      <span style={{ lineHeight: 1, letterSpacing: '0.02em' }}>{role.toUpperCase()}</span>
    </span>
  );
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
          <Btn variant="stroke" onClick={onClose}>Close</Btn>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ADD WORK ORDERS MODAL
// ============================================================
function AddWorkOrdersModal({ isOpen, onClose, onAdd, alreadyAdded }: {
  isOpen: boolean; onClose: () => void; onAdd: (wo: WorkOrder) => void; alreadyAdded: string[];
}) {
  if (!isOpen) return null;
  const allWOs = MOCK_WORK_ORDERS;
  const availableCount = allWOs.filter(wo => !alreadyAdded.includes(wo.id)).length;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white rounded-[10px] w-full max-w-[680px] max-h-[85vh] overflow-hidden shadow-xl mx-4 flex flex-col" onClick={e => e.stopPropagation()}>
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
            const pickupAddr = wo.pickup ? getFullAddress(wo.pickup) : '';
            const dropoffAddr = wo.dropoff ? getFullAddress(wo.dropoff) : '';
            return (
              <div key={wo.id} className="flex items-center gap-4 px-6 py-4 border-b border-[#f0f0f0] hover:bg-[#fafafa] transition-colors">
                <div className="shrink-0 w-[100px]"><TypeBadge type={wo.type} /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1">
                    <span className="font-sans font-bold text-[#2b3b63] text-[14px]">{wo.buildingSize} {wo.buildingType}</span>
                    <span className="font-sans text-[#787e90] text-[13px]"> · {wo.customer}</span>
                  </div>
                  <p className="font-sans text-[#787e90] text-[12px] mt-[2px] truncate">
                    {isMoveType(wo.type)
                      ? `PICKUP: ${pickupAddr || wo.pickup} • DROPOFF: ${dropoffAddr || wo.dropoff}`
                      : `VISIT: ${dropoffAddr || wo.dropoff}`}
                  </p>
                </div>
                <span className="shrink-0 font-sans text-[#787e90] text-[13px] w-[70px] text-right">{wo.id}</span>
                <div className="shrink-0 w-[90px] text-right">
                  {isAdded ? (
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#16A34A] border border-[#16A34A] rounded-[6px] px-[10px] py-[4px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Added
                    </span>
                  ) : wo.route ? (
                    <span className="inline-block text-[12px] font-semibold text-[#2B3B63] border border-[#2B3B63] rounded-[6px] px-[10px] py-[4px] cursor-pointer hover:bg-[#2B3B63] hover:text-white transition-colors" onClick={() => onAdd(wo)}>On {wo.route}</span>
                  ) : (
                    <button onClick={() => onAdd(wo)} className="cursor-pointer text-[12px] font-semibold text-[#2B3B63] border border-[#2B3B63] rounded-[6px] px-[10px] py-[4px] hover:bg-[#2B3B63] hover:text-white transition-colors">Add</button>
                  )}
                </div>
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
export default function RouteDetailPage() {
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
      <div
        key={`${stop.role}-${stop.location}-${idx}`}
        onDragEnter={(e) => handleDragEnter(e, stopKey)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Card */}
        <div
          draggable={!isStart}
          onDragStart={(e) => handleDragStart(e, stopKey)}
          onDragEnd={handleDragEnd}
          className="rounded-[10px] border overflow-hidden transition-all duration-150"
          style={{
            backgroundColor: cardBg,
            borderColor: isDragging ? rc.seq : '#e0e0e0',
            boxShadow: isDragging ? `0 0 0 2px ${rc.seq}40` : undefined,
            opacity: isDragging ? 0.7 : 1,
          }}
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
              {!isStart && (
                <>
                  <button
                    onClick={() => handleMoveStop(idx, -1)}
                    disabled={!canMoveUp}
                    className="w-[22px] h-[18px] flex items-center justify-center rounded hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    title="Move up"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    onClick={() => handleMoveStop(idx, 1)}
                    disabled={!canMoveDown}
                    className="w-[22px] h-[18px] flex items-center justify-center rounded hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    title="Move down"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <DragHandle />
                </>
              )}
            </div>

            {/* ── RIGHT: content ── */}
            <div className="flex-1 px-4 py-3 min-w-0">
              {/* Header */}
              <div className="flex items-center gap-2 mb-[2px]">
                <RoleLabel role={stop.role} color={rc.pill} />
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
                        <button onClick={() => handleRemoveWO(wo.id)} className="cursor-pointer text-[#787e90] hover:text-[#E53E3E] p-[2px] transition-colors" title="Remove">
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
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

            {/* Back */}
            <button onClick={() => navigate('/transportation/routes')} className="flex items-center gap-1 text-[#5e6578] hover:text-[#2b3b63] cursor-pointer font-sans text-[14px] font-medium mb-5 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back
            </button>

            {/* Title */}
            <div className="flex items-start justify-between mb-5">
              <h1 className="text-[24px] font-bold text-[#2b3b63] leading-tight">{isNew ? 'Create New Route' : `Edit Route ${routeId}`}</h1>
              <div className="flex items-center gap-3">
                <Btn variant="stroke">Save Draft</Btn>
                <Btn variant="primary" onClick={() => navigate('/transportation/routes')}>{isNew ? 'Create Route' : 'Save'}</Btn>
              </div>
            </div>

            {/* Stats Box */}
            <div className="border border-[#d8dadf] rounded-[6px] px-[24px] py-[16px] mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-[#2b3b63] text-[18px] font-bold">{routeId}</span>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-[6px] border border-[#e0e0e0] rounded-[6px] px-3 py-[6px]">
                    <span className="text-[#787e90] text-[13px]">Stops</span>
                    <span className="text-[#2b3b63] text-[14px] font-bold">{stops.length}</span>
                  </div>
                  <div className="flex items-center gap-[6px] border border-[#e0e0e0] rounded-[6px] px-3 py-[6px]">
                    <span className="text-[#787e90] text-[13px]">Total Distance</span>
                    <span className="text-[#2b3b63] text-[14px] font-bold">{totalDistance}</span>
                  </div>
                  <div className="flex items-center gap-[6px] border border-[#e0e0e0] rounded-[6px] px-3 py-[6px]">
                    <span className="text-[#787e90] text-[13px]">Status</span>
                    <select value={formStatus} onChange={e => setFormStatus(e.target.value)} className="text-[14px] font-bold text-[#2b3b63] bg-transparent border-none outline-none cursor-pointer mr-1">
                      <option value="Draft">Draft</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="En Route">En Route</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <StatusBadge status={formStatus} />
                  </div>
                </div>
              </div>
            </div>

            {/* Route Information */}
            <h3 className="text-[16px] font-bold text-[#2b3b63] mb-3">Route Information</h3>
            <div className="border border-[#d8dadf] rounded-[6px] p-[24px] mb-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div><FormLabel required>Owner Entity</FormLabel><Select value={formOwner} onChange={e => setFormOwner(e.target.value)}>{OWNER_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}</Select></div>
                <div><FormLabel required>Assignee</FormLabel><Select value={formAssignee} onChange={e => setFormAssignee(e.target.value)}><option value="">Select driver...</option>{ASSIGNEE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}</Select></div>
                <div><FormLabel>Support Phone Number</FormLabel><Input type="text" value={formPhone} onChange={e => setFormPhone(e.target.value)} placeholder="(540) 555-0110" /></div>
                <div><FormLabel>Scheduled Date &amp; Time</FormLabel><Input type="datetime-local" value={formDate} onChange={e => setFormDate(e.target.value)} /></div>
                <div><FormLabel>Start Address</FormLabel><Input type="text" value={formStartAddr} onChange={e => { setFormStartAddr(e.target.value); if (backToStart) setFormEndAddr(e.target.value); }} /></div>
                <div>
                  <FormLabel>End Address</FormLabel>
                  <Input type="text" value={backToStart ? formStartAddr : formEndAddr} onChange={e => setFormEndAddr(e.target.value)} disabled={backToStart} />
                  <div className="mt-2"><Checkbox checked={backToStart} onChange={handleBackToStartChange} label="Back to Start Address" /></div>
                </div>
              </div>
              <div className="mt-4"><FormLabel>Route Note</FormLabel><Textarea value={formNote} onChange={e => setFormNote(e.target.value)} placeholder="Optional notes visible to dispatcher..." style={{ height: 80 }} /></div>
            </div>

            {/* Stops header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[16px] font-bold text-[#2b3b63]">Stops</h3>
              <Btn variant="primary" icon={Icons.Add} onClick={() => setShowAddWOModal(true)}>Add Work Orders</Btn>
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
                            <RoleLabel role="END" color={ROLE_COLORS['END'].pill} />
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

      <AddWorkOrdersModal isOpen={showAddWOModal} onClose={() => setShowAddWOModal(false)} onAdd={handleAddWO} alreadyAdded={routeWOs.map(w => w.id)} />
      {viewingWO && <WODetailPopup wo={viewingWO} onClose={() => setViewingWO(null)} />}
    </div>
  );
}
