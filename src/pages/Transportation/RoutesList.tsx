import React, { useState } from 'react';
import { Route, RouteStatus } from './types';
import { DRIVERS, DISPATCHERS } from './mockData';

interface RoutesListProps {
  routes: Route[];
  onOpenCreateRoute: () => void;
  onEditRoute: (route: Route) => void;
  onDeleteRoute: (id: string) => void;
}

export default function RoutesList({
  routes,
  onOpenCreateRoute,
  onEditRoute,
  onDeleteRoute
}: RoutesListProps) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dispatcherFilter, setDispatcherFilter] = useState<string>('all');
  const [driverFilter, setDriverFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredRoutes = routes.filter(r => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (dispatcherFilter !== 'all' && r.dispatchedBy !== dispatcherFilter) return false;
    if (driverFilter !== 'all' && r.driver !== driverFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchCode = r.code.toLowerCase().includes(q);
      const matchName = r.name.toLowerCase().includes(q);
      const matchDriver = r.driver.toLowerCase().includes(q);
      const matchAddr = r.startAddress.toLowerCase().includes(q);
      if (!matchCode && !matchName && !matchDriver && !matchAddr) return false;
    }
    return true;
  });

  const getRouteStatusBadge = (status: RouteStatus) => {
    switch (status) {
      case 'draft':
        return { label: 'Draft', bg: 'bg-[#fef3c7]', text: 'text-[#b45309]' };
      case 'scheduled':
        return { label: 'Scheduled', bg: 'bg-[#e0f2fe]', text: 'text-[#0369a1]' };
      case 'en_route':
        return { label: 'In Progress (En Route)', bg: 'bg-[#fef08a]', text: 'text-[#854d0e]' };
      case 'completed':
        return { label: 'Completed', bg: 'bg-[#dcfce7]', text: 'text-[#15803d]' };
    }
  };

  const statusTabs = [
    { id: 'all', label: 'All Routes', count: routes.length },
    { id: 'draft', label: 'Draft', count: routes.filter(r => r.status === 'draft').length },
    { id: 'scheduled', label: 'Scheduled', count: routes.filter(r => r.status === 'scheduled').length },
    { id: 'en_route', label: 'In Progress', count: routes.filter(r => r.status === 'en_route').length },
    { id: 'completed', label: 'Completed', count: routes.filter(r => r.status === 'completed').length }
  ];

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Top Action Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="font-['Proxima_Nova:Bold',sans-serif] text-[22px] text-[#2b3b63]">
            Routes Management
          </h2>
          <span className="bg-[#e2e8f0] text-[#475569] font-['Proxima_Nova:Bold',sans-serif] text-[13px] px-2.5 py-0.5 rounded-full">
            {filteredRoutes.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* List vs Map View Toggle */}
          <div className="bg-[#e2e8f0] p-1 rounded-lg flex items-center gap-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] transition-all ${
                viewMode === 'list' ? 'bg-white text-[#2b3b63] shadow-xs' : 'text-[#64748b] hover:text-[#2b3b63]'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] transition-all ${
                viewMode === 'map' ? 'bg-white text-[#2b3b63] shadow-xs' : 'text-[#64748b] hover:text-[#2b3b63]'
              }`}
            >
              Map View
            </button>
          </div>

          <button
            onClick={onOpenCreateRoute}
            className="bg-[#ff7048] hover:bg-[#e05b35] text-white px-4 py-2 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center gap-2 shadow-sm transition-all"
          >
            <span className="text-[18px] leading-none">+</span>
            <span>New Route</span>
          </button>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center border-b border-[#e0e0e0] gap-2 overflow-x-auto">
        {statusTabs.map(tab => {
          const isActive = statusFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`py-3 px-4 font-['Proxima_Nova:Bold',sans-serif] text-[14px] whitespace-nowrap border-b-2 transition-all flex items-center gap-2 ${
                isActive 
                  ? 'border-[#ff7048] text-[#ff7048]' 
                  : 'border-transparent text-[#5e6578] hover:text-[#2b3b63]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[12px] px-2 py-0.5 rounded-full ${
                isActive ? 'bg-[#fff0eb] text-[#ff7048]' : 'bg-[#f1f5f9] text-[#64748b]'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search & Filters Controls */}
      <div className="bg-white p-4 rounded-xl border border-[#d8dadf] flex items-center gap-4 shadow-xs">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Route code, name, driver..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 border border-[#d8dadf] rounded-lg pl-9 pr-4 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
          />
          <svg className="w-4 h-4 text-[#959db1] absolute left-3 top-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <select
          value={dispatcherFilter}
          onChange={(e) => setDispatcherFilter(e.target.value)}
          className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63] outline-none"
        >
          <option value="all">All Dispatchers</option>
          {DISPATCHERS.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          value={driverFilter}
          onChange={(e) => setDriverFilter(e.target.value)}
          className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63] outline-none"
        >
          <option value="all">All Drivers</option>
          {DRIVERS.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Main Content (List View or Map View) */}
      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map(route => {
              const statusBadge = getRouteStatusBadge(route.status);
              const totalWos = route.stops.reduce((acc, s) => acc + s.workOrders.length, 0);

              return (
                <div 
                  key={route.id}
                  className="bg-white rounded-xl border border-[#d8dadf] p-5 shadow-xs hover:shadow-md transition-all flex flex-col gap-4"
                >
                  {/* Route Header Card */}
                  <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[18px] text-[#2b3b63]">
                        {route.code}
                      </span>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[15px] text-[#5e6578]">
                        {route.name}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[12px] font-['Proxima_Nova:Bold',sans-serif] ${statusBadge.bg} ${statusBadge.text}`}>
                        {statusBadge.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onEditRoute(route)}
                        className="px-3.5 py-1.5 bg-[#2b3b63] text-white rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[13px] hover:bg-[#1e293b] transition-colors"
                      >
                        Edit / Sequence Stops
                      </button>
                      <button
                        onClick={() => onDeleteRoute(route.id)}
                        className="text-[#94a3b8] hover:text-[#ef4444] font-['Proxima_Nova:Bold',sans-serif] text-[13px] p-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Route Meta Details */}
                  <div className="grid grid-cols-4 gap-4 text-[13px]">
                    <div>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#94a3b8] uppercase text-[11px] block">Assigned Driver</span>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#2b3b63]">{route.driver}</span>
                    </div>
                    <div>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#94a3b8] uppercase text-[11px] block">Scheduled Window</span>
                      <span className="font-['Proxima_Nova:Semibold',sans-serif] text-[#475569]">
                        {new Date(route.scheduledAt).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#94a3b8] uppercase text-[11px] block">Stops & Work Orders</span>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#ff7048]">
                        {route.stops.length} Stops ({totalWos} WOs)
                      </span>
                    </div>
                    <div>
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[#94a3b8] uppercase text-[11px] block">Starting Address</span>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[#64748b] truncate block" title={route.startAddress}>
                        {route.startAddress}
                      </span>
                    </div>
                  </div>

                  {/* Sequence Preview of Stops */}
                  {route.stops.length > 0 && (
                    <div className="bg-[#f8fafc] p-3 rounded-lg border border-[#e2e8f0] flex items-center gap-2 overflow-x-auto">
                      <span className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#64748b] shrink-0">Stops:</span>
                      {route.stops.map((s, idx) => (
                        <React.Fragment key={s.id}>
                          <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[#cbd5e1] shrink-0">
                            <span className="w-5 h-5 rounded-full bg-[#2b3b63] text-white text-[10px] font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#2b3b63]">
                              {s.locationName}
                            </span>
                          </div>
                          {idx < route.stops.length - 1 && (
                            <span className="text-[#cbd5e1] font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-xl border border-[#d8dadf] p-12 text-center text-[#94a3b8] font-['Proxima_Nova:Semibold',sans-serif] text-[14px]">
              No Routes found matching your filters. Click "+ New Route" to create one.
            </div>
          )}
        </div>
      ) : (
        /* Interactive Map Preview Placeholder */
        <div className="bg-white rounded-xl border border-[#d8dadf] p-8 flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#fff0eb] text-[#ff7048] flex items-center justify-center text-[24px]">
            🗺️
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <h3 className="font-['Proxima_Nova:Bold',sans-serif] text-[18px] text-[#2b3b63]">
              Route Map Overview
            </h3>
            <p className="font-['Proxima_Nova:Regular',sans-serif] text-[14px] text-[#64748b]">
              Interactive geographic route mapping and GPS sequence tracing for {filteredRoutes.length} active routes.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
