import React, { useState, useEffect } from 'react';
import { Route, WorkOrder, Stop, StopRole } from './types';
import { DRIVERS, DISPATCHERS, MOCK_LOCATIONS, getWorkOrderTypeBadge } from './mockData';

interface RouteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveRoute: (routeData: Partial<Route>) => void;
  initialRoute?: Route | null;
  availableWorkOrders: WorkOrder[]; // Unscheduled / available to add
}

export default function RouteBuilderModal({
  isOpen,
  onClose,
  onSaveRoute,
  initialRoute,
  availableWorkOrders
}: RouteBuilderModalProps) {
  const [routeName, setRouteName] = useState('');
  const [driver, setDriver] = useState('');
  const [dispatchedBy, setDispatchedBy] = useState('');
  const [ownerEntity, setOwnerEntity] = useState('');
  const [supportPhone, setSupportPhone] = useState('');
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [backToStart, setBackToStart] = useState(true);
  const [scheduledAt, setScheduledAt] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<Route['status']>('draft');

  // Work Orders selected on this route
  const [routeWorkOrders, setRouteWorkOrders] = useState<WorkOrder[]>([]);
  const [showWoPicker, setShowWoPicker] = useState(false);

  useEffect(() => {
    if (initialRoute) {
      setRouteName(initialRoute.name || '');
      setDriver(initialRoute.driver || DRIVERS[0]);
      setDispatchedBy(initialRoute.dispatchedBy || DISPATCHERS[0]);
      setOwnerEntity(initialRoute.ownerEntity || 'Rose MNF (Demo Dev)');
      setSupportPhone(initialRoute.supportPhone || '(540) 555-0110');
      setStartAddress(initialRoute.startAddress || MOCK_LOCATIONS.plant.addr);
      setEndAddress(initialRoute.endAddress || '');
      setBackToStart(initialRoute.backToStart ?? true);
      setScheduledAt(initialRoute.scheduledAt || '2026-07-25T07:00');
      setNote(initialRoute.note || '');
      setStatus(initialRoute.status || 'draft');

      // Extract work orders from initial route stops
      const woIds = new Set<string>();
      initialRoute.stops.forEach(s => s.workOrders.forEach(w => woIds.add(w.woId)));
      // Match available or dummy
      const existingWos = availableWorkOrders.filter(w => woIds.has(w.id));
      setRouteWorkOrders(existingWos);
    } else {
      setRouteName('New Route');
      setDriver(DRIVERS[0]);
      setDispatchedBy(DISPATCHERS[0]);
      setOwnerEntity('Rose MNF (Demo Dev)');
      setSupportPhone('(540) 555-0110');
      setStartAddress(MOCK_LOCATIONS.plant.addr);
      setEndAddress('');
      setBackToStart(true);
      setScheduledAt('2026-07-25T07:00');
      setNote('');
      setStatus('draft');
      setRouteWorkOrders([]);
    }
  }, [initialRoute, isOpen, availableWorkOrders]);

  if (!isOpen) return null;

  // Auto-generate Stops from routeWorkOrders
  const generateStopsFromWOs = (): Stop[] => {
    const locationMap = new Map<string, { address: string; name: string; refs: { woId: string; role: StopRole }[] }>();

    routeWorkOrders.forEach(wo => {
      if (wo.category === 'move') {
        if (wo.pickupAddress) {
          const addr = wo.pickupAddress;
          if (!locationMap.has(addr)) {
            locationMap.set(addr, { address: addr, name: addr.split(',')[0], refs: [] });
          }
          locationMap.get(addr)!.refs.push({ woId: wo.id, role: 'pickup' });
        }
        if (wo.dropoffAddress) {
          const addr = wo.dropoffAddress;
          if (!locationMap.has(addr)) {
            locationMap.set(addr, { address: addr, name: addr.split(',')[0], refs: [] });
          }
          locationMap.get(addr)!.refs.push({ woId: wo.id, role: 'dropoff' });
        }
      } else {
        if (wo.visitAddress) {
          const addr = wo.visitAddress;
          if (!locationMap.has(addr)) {
            locationMap.set(addr, { address: addr, name: addr.split(',')[0], refs: [] });
          }
          locationMap.get(addr)!.refs.push({ woId: wo.id, role: 'visit' });
        }
      }
    });

    const generatedStops: Stop[] = [];
    let seq = 1;
    locationMap.forEach((val, addr) => {
      generatedStops.push({
        id: `stop-${seq}`,
        sequence: seq,
        locationName: val.name,
        address: addr,
        status: 'pending',
        workOrders: val.refs
      });
      seq++;
    });

    return generatedStops;
  };

  const currentStops = generateStopsFromWOs();

  const handleAddWOToRoute = (wo: WorkOrder) => {
    if (!routeWorkOrders.some(w => w.id === wo.id)) {
      setRouteWorkOrders([...routeWorkOrders, wo]);
    }
  };

  const handleRemoveWOFromRoute = (woId: string) => {
    setRouteWorkOrders(routeWorkOrders.filter(w => w.id !== woId));
  };

  const handleSave = (publish: boolean) => {
    onSaveRoute({
      id: initialRoute ? initialRoute.id : undefined,
      code: initialRoute ? initialRoute.code : `RT-${Math.floor(1000 + Math.random() * 9000)}`,
      name: routeName,
      driver,
      dispatchedBy,
      ownerEntity,
      supportPhone,
      startAddress,
      endAddress: backToStart ? startAddress : endAddress,
      backToStart,
      scheduledAt,
      note,
      status: publish ? 'scheduled' : status,
      stops: currentStops
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden border border-[#d8dadf] flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e0e0e0] flex items-center justify-between bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <h3 className="font-['Proxima_Nova:Bold',sans-serif] text-[18px] text-[#2b3b63]">
              {initialRoute ? `Edit Route: ${initialRoute.code}` : 'Route Builder'}
            </h3>
            <span className={`px-2.5 py-0.5 rounded-full text-[12px] font-['Proxima_Nova:Bold',sans-serif] ${
              status === 'draft' ? 'bg-[#fef3c7] text-[#b45309]' : 'bg-[#e0f2fe] text-[#0369a1]'
            }`}>
              {status.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSave(false)}
              className="px-4 py-2 border border-[#d8dadf] rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578] hover:bg-[#f3f4f6]"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSave(true)}
              className="px-4 py-2 bg-[#ff7048] text-white rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] hover:bg-[#e05b35] transition-colors"
            >
              Publish Route
            </button>
            <button 
              onClick={onClose}
              className="text-[#959db1] hover:text-[#2b3b63] text-[20px] font-bold leading-none p-1 ml-2"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-6 overflow-y-auto flex-1">
          
          {/* General Route Details */}
          <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0] grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
                Route Name / Code
              </label>
              <input
                type="text"
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
                Assigned Driver *
              </label>
              <select
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none"
              >
                {DRIVERS.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
                Scheduled Start Date & Time
              </label>
              <input
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none"
              />
            </div>

            <div className="col-span-2 flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
                Starting Location Address *
              </label>
              <input
                type="text"
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="backToStart"
                checked={backToStart}
                onChange={(e) => setBackToStart(e.target.checked)}
                className="w-4 h-4 accent-[#ff7048] rounded cursor-pointer"
              />
              <label htmlFor="backToStart" className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#2b3b63] cursor-pointer">
                Return to start address
              </label>
            </div>
          </div>

          {/* Work Orders Selection & Stops Sequence */}
          <div className="flex flex-col gap-4">
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-['Proxima_Nova:Bold',sans-serif] text-[16px] text-[#2b3b63]">
                  Work Orders & Sequence of Stops ({currentStops.length} Stops)
                </h4>
                <p className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#64748b]">
                  Add work orders to this route. Addresses will automatically sequence into physical stops.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowWoPicker(!showWoPicker)}
                className="bg-[#2b3b63] text-white px-3.5 py-1.5 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[13px] flex items-center gap-1.5 hover:bg-[#1e293b]"
              >
                <span>+ Add Work Orders</span>
              </button>
            </div>

            {/* Work Orders Picker Drawer */}
            {showWoPicker && (
              <div className="bg-[#fff0eb] p-4 rounded-xl border border-[#ff7048] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#ff7048]">
                    Available Unscheduled Work Orders ({availableWorkOrders.filter(w => !routeWorkOrders.some(rw => rw.id === w.id)).length})
                  </span>
                  <button 
                    onClick={() => setShowWoPicker(false)}
                    className="text-[#ff7048] font-bold text-[14px]"
                  >
                    Close
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto">
                  {availableWorkOrders
                    .filter(w => !routeWorkOrders.some(rw => rw.id === w.id))
                    .map(wo => {
                      const badge = getWorkOrderTypeBadge(wo.type);
                      return (
                        <div 
                          key={wo.id}
                          onClick={() => handleAddWOToRoute(wo)}
                          className="bg-white p-2.5 rounded-lg border border-[#d8dadf] hover:border-[#ff7048] cursor-pointer flex justify-between items-center group transition-colors"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#2b3b63]">{wo.id}</span>
                              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${badge.bg} ${badge.text}`}>
                                {badge.label}
                              </span>
                            </div>
                            <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#5e6578]">
                              {wo.customerName} - {[wo.buildingSize, wo.buildingType].filter(Boolean).join(' ')}
                            </span>
                          </div>
                          <button className="px-2.5 py-1 bg-[#ff7048] text-white rounded text-[12px] font-bold">
                            + Add
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Attached Work Orders Badges */}
            <div className="flex flex-wrap gap-2 p-3 bg-white border border-[#d8dadf] rounded-xl">
              <span className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578] self-center mr-2">
                Attached WOs ({routeWorkOrders.length}):
              </span>
              {routeWorkOrders.length > 0 ? (
                routeWorkOrders.map(wo => (
                  <div key={wo.id} className="bg-[#f1f5f9] border border-[#cbd5e1] px-3 py-1 rounded-lg flex items-center gap-2">
                    <span className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#2b3b63]">{wo.id}</span>
                    <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#64748b]">({wo.customerName})</span>
                    <button 
                      onClick={() => handleRemoveWOFromRoute(wo.id)}
                      className="text-[#94a3b8] hover:text-[#ef4444] font-bold text-[14px] leading-none ml-1"
                    >
                      &times;
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-[#94a3b8] font-['Proxima_Nova:Regular',sans-serif] text-[13px] self-center">
                  No work orders attached yet. Click "+ Add Work Orders" above.
                </span>
              )}
            </div>

            {/* Auto-Generated Sequence of Stops */}
            <div className="flex flex-col gap-3">
              {currentStops.map((stop, idx) => (
                <div 
                  key={stop.id}
                  className="bg-white border border-[#d8dadf] rounded-xl p-4 flex gap-4 items-start shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2b3b63] text-white flex items-center justify-center font-['Proxima_Nova:Bold',sans-serif] text-[14px] shrink-0">
                    {idx + 1}
                  </div>

                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[15px] text-[#2b3b63]">
                        {stop.locationName}
                      </span>
                    </div>
                    <span className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#64748b]">
                      {stop.address}
                    </span>

                    {/* Linked WO Actions at this stop */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stop.workOrders.map(ref => {
                        const wo = routeWorkOrders.find(w => w.id === ref.woId);
                        if (!wo) return null;
                        const roleColor = ref.role === 'pickup' ? 'bg-[#dcfce7] text-[#15803d]' : 
                                         ref.role === 'dropoff' ? 'bg-[#e0f2fe] text-[#0369a1]' : 
                                         'bg-[#fef3c7] text-[#b45309]';
                        return (
                          <div key={ref.woId + ref.role} className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 rounded-md flex items-center gap-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${roleColor}`}>
                              {ref.role}
                            </span>
                            <span className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#2b3b63]">{wo.id}</span>
                            <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#64748b]">({wo.customerName})</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
