import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { RouteData, ASSIGNEE_OPTIONS, ROUTE_STATUS_COLORS } from './transportationData';
import { useTransportation } from './TransportationContext';
import { StatusBadge, Btn } from './ui';

// WO data attached to each route for calendar card display
const ROUTE_WO_DATA: Record<string, Array<{woId: string, woType: string, building: string, serial: string}>> = {
  'RT-1001': [
    { woId: 'WO-1042', woType: 'Delivery', building: '10×12 Utility shed', serial: 'SN-927711' },
    { woId: 'WO-1043', woType: 'Delivery', building: '12×16 Garden shed', serial: 'SN-927718' },
    { woId: 'WO-1051', woType: 'Lot Transfer', building: '8×10 Lean-to shed', serial: 'SN-927774' },
  ],
  'RT-1003': [
    { woId: 'WO-1088', woType: 'Repair', building: '12×24 Warehouse shed', serial: 'SN-928201' },
    { woId: 'WO-1091', woType: 'Welfare Check', building: '8×12 Utility shed', serial: 'SN-928340' },
  ],
  'RT-1004': [
    { woId: 'WO-1067', woType: 'Delivery', building: '10×10 Studio shed', serial: 'SN-927886' },
    { woId: 'WO-1096', woType: 'Payment', building: '10×12 Barn shed', serial: 'SN-928450' },
  ],
  'RT-1009': [
    { woId: 'WO-1070', woType: 'Repo', building: '10×16 Barn shed', serial: 'SN-927907' },
  ],
  'RT-1012': [
    { woId: 'WO-1101', woType: 'Delivery', building: '12×20 Garage shed', serial: 'SN-928501' },
    { woId: 'WO-1102', woType: 'Delivery', building: '10×14 Garden shed', serial: 'SN-928522' },
    { woId: 'WO-1105', woType: 'Lot Transfer', building: '8×12 Lean-to shed', serial: 'SN-928560' },
    { woId: 'WO-1108', woType: 'Delivery', building: '14×24 Warehouse shed', serial: 'SN-928615' },
  ],
};

const MOCK_STOPS: Record<string, Array<{seq: number, role: string, location: string, address: string, woId?: string, woType?: string, building?: string, serial?: string}>> = {
  'RT-1001': [
    { seq: 1, role: 'START', location: 'Start address', address: '3210 S Main St, Harrisonburg, VA 22801' },
    { seq: 2, role: 'PICKUP', location: 'ShedPro Plant', address: '3210 S Main St, Harrisonburg, VA 22801', woId: 'WO-1042', woType: 'Delivery', building: '10×12 Utility shed', serial: 'SN-927711' },
    { seq: 3, role: 'DROPOFF', location: 'Koenig residence', address: '4148 Ridgewood Pkwy, VA 22305', woId: 'WO-1042', woType: 'Delivery', building: '10×12 Utility shed', serial: 'SN-927711' },
  ],
  'RT-1003': [
    { seq: 1, role: 'START', location: 'Rose Store', address: '101 Commerce Rd, Staunton, VA 24401' },
    { seq: 2, role: 'VISIT', location: 'Nair residence', address: '445 Oak Hill Dr, Staunton, VA', woId: 'WO-1088', woType: 'Repair', building: '12×24 Warehouse shed', serial: 'SN-928201' },
    { seq: 3, role: 'VISIT', location: 'Carefree unit', address: '800 Greendale Ave, Staunton, VA', woId: 'WO-1091', woType: 'Welfare Check', building: '8×12 Utility shed', serial: 'SN-928340' },
  ],
  'RT-1004': [
    { seq: 1, role: 'START', location: 'ShedPro Plant', address: '3210 S Main St, Harrisonburg, VA 22801' },
    { seq: 2, role: 'DROPOFF', location: 'Koenig residence', address: '210 Valley View Ln, Elkton, VA', woId: 'WO-1067', woType: 'Delivery', building: '10×10 Studio shed', serial: 'SN-927886' },
    { seq: 3, role: 'VISIT', location: 'Delgado residence', address: '1822 Maple St, Harrisonburg, VA', woId: 'WO-1096', woType: 'Payment', building: '10×12 Barn shed', serial: 'SN-928450' },
  ],
};

const ROLE_COLORS: Record<string, string> = {
  START: '#22c55e',
  PICKUP: '#2B3B63',
  DROPOFF: '#ff7048',
  VISIT: '#16A34A',
};

const TYPE_COLORS: Record<string, string> = {
  'Delivery': '#2B3B63',
  'Repo': '#9333ea',
  'Lot Transfer': '#0891b2',
  'Repair': '#dc2626',
  'Payment': '#059669',
  'Welfare Check': '#16A34A',
};

export default function CalendarView() {
  const { routes: MOCK_ROUTES, updateRouteDate } = useTransportation();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);
  
  const [assigneeFilter, setAssigneeFilter] = useState<string[]>(['All']);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [dragConfirm, setDragConfirm] = useState<{routeId: string, date: Date} | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterRef]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const toggleAssignee = (name: string) => {
    if (name === 'All') {
      setAssigneeFilter(['All']);
    } else {
      let newFilter = assigneeFilter.filter(a => a !== 'All');
      if (newFilter.includes(name)) {
        newFilter = newFilter.filter(a => a !== name);
        if (newFilter.length === 0) newFilter = ['All'];
      } else {
        newFilter.push(name);
      }
      setAssigneeFilter(newFilter);
    }
  };

  const filteredRoutes = useMemo(() => {
    return MOCK_ROUTES.filter(route => {
      if (!assigneeFilter.includes('All')) {
        if (!assigneeFilter.includes(route.assignee || '')) return false;
      }
      return true;
    });
  }, [assigneeFilter]);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => ({
      date: new Date(year, month - 1, daysInPrevMonth - firstDay + i + 1),
      isCurrentMonth: false
    }));
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
      date: new Date(year, month, i + 1),
      isCurrentMonth: true
    }));
    const nextMonthDaysLength = 42 - (prevMonthDays.length + currentMonthDays.length);
    const nextMonthDays = Array.from({ length: nextMonthDaysLength }, (_, i) => ({
      date: new Date(year, month + 1, i + 1),
      isCurrentMonth: false
    }));
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentDate]);

  const todayStr = new Date().toDateString();

  return (
    <div className="flex h-full w-full overflow-hidden" style={{ padding: '10px 24px', gap: '24px' }}>
      <div className="flex-1 flex flex-col min-w-0 bg-white rounded-[10px] overflow-hidden px-[12px] py-[20px] shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-[12px] pb-[16px] bg-white border-b border-[#e0e0e0] shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-[#2b3b63] text-[20px] font-bold min-w-[150px]">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-2">
              <button onClick={handlePrevMonth} className="flex items-center justify-center bg-white border border-[#e0e0e0] rounded-[6px] w-[36px] h-[36px] hover:bg-gray-50 cursor-pointer">
                ‹
              </button>
              <button onClick={handleNextMonth} className="flex items-center justify-center bg-white border border-[#e0e0e0] rounded-[6px] w-[36px] h-[36px] hover:bg-gray-50 cursor-pointer">
                ›
              </button>
            </div>
            <button onClick={handleToday} className="bg-[#eaecf0] text-[#5e6578] rounded-[6px] px-[16px] py-[8px] text-[14px] hover:bg-gray-200 cursor-pointer font-semibold">
              Today
            </button>
          </div>
          
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
              className="bg-white border border-[#e0e0e0] text-[#2b3b63] rounded-[6px] px-4 py-2 text-[14px] flex items-center gap-2 cursor-pointer font-semibold"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.25 3.5H1.75M10.5 7H3.5M8.75 10.5H5.25" stroke="#2b3b63" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Assignee: {assigneeFilter.includes('All') ? 'All' : assigneeFilter.length + ' Selected'}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="#5E6578" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            
            {filterDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-[#e0e0e0] rounded-[8px] shadow-lg z-10 overflow-hidden">
                <div className="p-3 flex flex-col gap-1">
                  {['All', ...ASSIGNEE_OPTIONS].map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer text-[#5e6578] text-[14px] px-2 py-1.5 rounded-[4px] hover:bg-[#f5f5f5]">
                      <input 
                        type="checkbox" 
                        checked={assigneeFilter.includes(opt)}
                        onChange={() => toggleAssignee(opt)}
                        className="rounded border-[#e0e0e0] text-[#2B3B63] focus:ring-[#2B3B63] cursor-pointer"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto bg-white flex flex-col gap-[16px] pt-[16px]">
          <div className="grid grid-cols-7 gap-[4px] px-[12px]">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-[#787e90] text-[12px] font-semibold uppercase text-center">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 flex-1 px-[12px] pb-[12px]" style={{ borderCollapse: 'collapse' }}>
            {days.map((dayObj, i) => {
              const dateStr = dayObj.date.toDateString();
              const isToday = dateStr === todayStr;
              
              const dayRoutes = filteredRoutes.filter(r => {
                if (!r.scheduledDate) return false;
                const rDate = new Date(r.scheduledDate.replace('·', ''));
                return rDate.toDateString() === dateStr;
              });

              return (
                <div 
                  key={i} 
                  className={`min-h-[140px] p-[8px] border-r border-b ${i % 7 === 0 ? 'border-l' : ''} ${i < 7 ? 'border-t' : ''} ${isToday ? 'border-[#ff7048] bg-[#FFF6F2]' : 'border-[#e0e0e0] bg-white'}`} 
                  onDragOver={(e) => e.preventDefault()} 
                  onDrop={(e) => { const routeId = e.dataTransfer.getData('routeId'); if(routeId) { updateRouteDate(routeId, dayObj.date); } }}
                >
                  <div className={`mb-2 text-right ${isToday ? 'text-[#ff7048] font-bold' : (dayObj.isCurrentMonth ? 'text-[#5e6578]' : 'text-[#c0c0c0]')} text-[13px] font-semibold`}>
                    {dayObj.date.getDate()}
                  </div>
                  <div className="flex flex-col gap-2">
                    {dayRoutes.map(route => {
                      const woData = ROUTE_WO_DATA[route.id] || [];
                      const brandColor = ROUTE_STATUS_COLORS[route.status] || '#5e6578';
                      return (
                        <div 
                          key={route.id}
                          onClick={() => setSelectedRoute(route)}
                          draggable
                          onDragStart={(e) => e.dataTransfer.setData('routeId', route.id)}
                          className={`bg-white rounded-[6px] border p-[8px] cursor-pointer hover:shadow-md relative overflow-hidden flex flex-col gap-[4px] ${selectedRoute?.id === route.id ? 'border-[#ff7048] shadow-md ring-1 ring-[#ff7048]' : 'border-[#e0e0e0]'}`}
                        >
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-[4px]"
                            style={{ backgroundColor: brandColor }}
                          />
                          <div className="pl-[6px] flex justify-between items-center mb-1">
                            <span className="text-[#2b3b63] text-[12px] font-bold">{route.id}</span>
                            <StatusBadge status={route.status} className="!text-[9px] !px-[4px] !py-[2px]" />
                          </div>
                          <div className="pl-[6px] text-[#787e90] text-[11px] truncate font-medium">{route.assignee || 'Unassigned'}</div>
                          {/* WO badges */}
                          <div className="pl-[6px] flex flex-col gap-[2px]">
                            {woData.slice(0, 3).map(wo => (
                              <div key={wo.woId} className="flex items-center gap-[3px] text-[9px]">
                                <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: TYPE_COLORS[wo.woType] || '#5e6578', flexShrink: 0 }} />
                                <span className="font-semibold text-[#2b3b63] text-[11px]">{wo.woId}</span>
                                <span className="text-[#787e90] truncate text-[11px]">{wo.building}</span>
                              </div>
                            ))}
                            {woData.length > 3 && (
                              <span className="pl-[7px] text-[9px] text-[#787e90]">+{woData.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Side Panel */}
      {selectedRoute && (
        <div className="w-[380px] bg-white rounded-[6px] flex flex-col h-full shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-[#e0e0e0]">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-[20px] font-bold text-[#2b3b63]">{selectedRoute.id}</h3>
                <StatusBadge status={selectedRoute.status} />
              </div>
              <button 
                onClick={() => setSelectedRoute(null)}
                className="text-[#787e90] hover:text-[#2b3b63] cursor-pointer p-1"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <p className="text-[#787e90] text-[13px] mb-4">Route D · {selectedRoute.assignee || 'Unassigned'}</p>
            
            <div className="flex flex-col gap-[10px] text-[13px]">
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Scheduled</span>
                <span className="text-[#2b3b63] font-medium">{selectedRoute.scheduledDate?.split(' ').slice(0, 3).join(' ')}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Dispatched by</span>
                <span className="text-[#2b3b63] font-medium">Shagiras Yusif</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Owner Entity</span>
                <span className="text-[#2b3b63] font-medium">Rose Mfrd (Roses Duo)</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Support Phone</span>
                <span className="text-[#2b3b63] font-medium">(540) 555-0113</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Start Address</span>
                <span className="text-[#2b3b63] font-medium">3210 S Main St, Harrisonburg, VA 22801</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Distance</span>
                <span className="text-[#2b3b63] font-medium">{selectedRoute.distance || '0 mi'}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[#94a3b8] w-[120px] shrink-0">Stops</span>
                <span className="text-[#2b3b63] font-medium">{selectedRoute.stops} stops · {(ROUTE_WO_DATA[selectedRoute.id] || []).length} WOs</span>
              </div>
            </div>
          </div>

          {/* Stops */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col">
              {(MOCK_STOPS[selectedRoute.id] || []).map((stop, idx) => {
                const roleColor = ROLE_COLORS[stop.role] || '#5e6578';
                const isStart = stop.role === 'START';
                const attachedWOs = stop.woId ? [{ woId: stop.woId, woType: stop.woType, building: stop.building, serial: stop.serial }] : [];
                return (
                  <div key={idx}>
                    {/* Stop card — compact */}
                    <div className="rounded-[8px] border border-[#e0e0e0] overflow-hidden bg-white px-3 py-[10px]">
                      <div className="flex items-center gap-[6px] mb-[3px]">
                        <span className="w-[20px] h-[20px] rounded-[5px] flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: roleColor }}>{stop.seq}</span>
                        <span className="text-[10px] font-bold uppercase px-[5px] py-[1px] rounded-[3px]" style={{ color: roleColor, backgroundColor: `${roleColor}15` }}>{stop.role}</span>
                        {!isStart && (
                          <div className="ml-auto shrink-0"><StatusBadge status={selectedRoute.status} /></div>
                        )}
                      </div>
                      <div className="text-[13px] font-bold text-[#2b3b63] truncate">{stop.location}</div>
                      <div className="text-[#787e90] text-[12px] truncate">{stop.address}</div>
                      {attachedWOs.length > 0 && (
                        <div className="flex flex-col gap-[4px] mt-[6px] pt-[6px] border-t border-dashed border-[#e0e0e0]">
                          {attachedWOs.map(wo => (
                            <div key={wo.woId} className="flex items-center rounded-[5px] py-[4px] px-[8px] border border-[#e8eaed] gap-[6px] min-w-0">
                              <span className="px-[5px] py-[1px] rounded-[3px] text-[10px] font-semibold text-white shrink-0" style={{ backgroundColor: '#2B3B63' }}>{wo.woType}</span>
                              <span className="text-[#2b3b63] text-[12px] font-medium truncate">{wo.building} · {wo.serial}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Connector */}
                    {idx < (MOCK_STOPS[selectedRoute.id] || []).length - 1 && (
                      <div className="py-[3px] ml-[12px]">
                        <div className="w-[2px] h-[10px] bg-[#e0e0e0] mx-auto" />
                      </div>
                    )}
                  </div>
                );
              })}
              {(!MOCK_STOPS[selectedRoute.id] || MOCK_STOPS[selectedRoute.id].length === 0) && (
                <div className="text-center text-[#787e90] py-4 text-[14px]">
                  No stops detailed for this route.
                </div>
              )}
            </div>
          </div>

          {/* Edit Route button */}
          <div className="px-6 py-4 border-t border-[#e0e0e0]">
            <button 
              onClick={() => navigate(`/transportation/routes/${selectedRoute.id}`)}
              className="w-full bg-[#ff7048] hover:bg-[#e5603a] text-white font-bold py-[10px] rounded-[6px] transition-colors cursor-pointer text-[14px] flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.917 1.75a1.856 1.856 0 0 1 2.625 2.625L4.958 11.958l-3.5.875.875-3.5L9.917 1.75z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Edit Route
            </button>
          </div>
        </div>
      )}

      {/* Drag Confirm Modal */}
      {dragConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#2b3b63] text-[20px] font-bold mb-2">Move Route?</h3>
            <p className="text-[#5e6578] text-[14px] mb-6">
              Are you sure you want to move <span className="font-bold">{dragConfirm.routeId}</span> to <span className="font-bold">{dragConfirm.date.toDateString()}</span>?
            </p>
            <div className="flex justify-end gap-3">
              <Btn variant="outline" onClick={() => setDragConfirm(null)}>Cancel</Btn>
              <Btn variant="primary" onClick={() => {
                updateRouteDate(dragConfirm.routeId, dragConfirm.date);
                setDragConfirm(null);
              }}>Confirm</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
