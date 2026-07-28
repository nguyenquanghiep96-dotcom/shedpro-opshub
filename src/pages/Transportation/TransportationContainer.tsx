import React, { useState } from 'react';
import HeaderNav from '../../components/layout/HeaderNav';
import { WorkOrder, Route } from './types';
import { INITIAL_WORK_ORDERS, INITIAL_ROUTES } from './mockData';

import WorkOrdersList from './WorkOrdersList';
import RoutesList from './RoutesList';
import DriverScheduleCalendar from './DriverScheduleCalendar';
import WorkOrderModal from './WorkOrderModal';
import RouteBuilderModal from './RouteBuilderModal';

interface TransportationContainerProps {
  defaultTab?: 'work-orders' | 'routes' | 'calendar' | 'map-views';
}

export default function TransportationContainer({
  defaultTab = 'work-orders'
}: TransportationContainerProps) {
  const [activeTab, setActiveTab] = useState<'work-orders' | 'routes' | 'calendar' | 'map-views'>(defaultTab);

  // Shared State
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(INITIAL_WORK_ORDERS);
  const [routes, setRoutes] = useState<Route[]>(INITIAL_ROUTES);

  // Modals
  const [woModalOpen, setWoModalOpen] = useState(false);
  const [editingWo, setEditingWo] = useState<WorkOrder | null>(null);

  const [routeBuilderOpen, setRouteBuilderOpen] = useState(false);
  const [editingRoute, setEditingRoute] = useState<Route | null>(null);

  // Handlers for Work Orders
  const handleSaveWorkOrder = (woData: Partial<WorkOrder>) => {
    if (woData.id) {
      // Edit
      setWorkOrders(prev => prev.map(w => w.id === woData.id ? { ...w, ...woData } as WorkOrder : w));
    } else {
      // Create new
      const newId = `WO-${Math.floor(1150 + Math.random() * 8500)}`;
      const newWo: WorkOrder = {
        id: newId,
        type: woData.type || 'delivery',
        category: woData.category || 'move',
        status: 'open',
        customerName: woData.customerName || 'N/A',
        phone: woData.phone,
        buildingType: woData.buildingType,
        buildingSize: woData.buildingSize,
        serialNumber: woData.serialNumber,
        pickupAddress: woData.pickupAddress,
        dropoffAddress: woData.dropoffAddress,
        visitAddress: woData.visitAddress,
        amountDue: woData.amountDue || 0,
        detail: woData.detail,
        contractId: woData.contractId,
        inventoryId: woData.inventoryId
      };
      setWorkOrders([newWo, ...workOrders]);
    }
  };

  const handleDeleteWorkOrder = (id: string) => {
    if (confirm(`Are you sure you want to delete Work Order ${id}?`)) {
      setWorkOrders(prev => prev.filter(w => w.id !== id));
    }
  };

  // Create Route from selected Work Orders
  const handleCreateRouteFromSelected = (selectedWoIds: string[]) => {
    const selectedWos = workOrders.filter(w => selectedWoIds.includes(w.id));
    setEditingRoute(null);
    setRouteBuilderOpen(true);
  };

  // Handlers for Routes
  const handleSaveRoute = (routeData: Partial<Route>) => {
    if (routeData.id) {
      // Edit
      setRoutes(prev => prev.map(r => r.id === routeData.id ? { ...r, ...routeData } as Route : r));
    } else {
      // Create new
      const newRoute: Route = {
        id: `r_${Date.now()}`,
        code: routeData.code || `RT-${Math.floor(1000 + Math.random() * 9000)}`,
        name: routeData.name || 'New Route',
        driver: routeData.driver || 'Miguel Ortiz',
        dispatchedBy: routeData.dispatchedBy || 'Dana Cole',
        ownerEntity: routeData.ownerEntity || 'Rose MNF (Demo Dev)',
        supportPhone: routeData.supportPhone || '(540) 555-0110',
        startAddress: routeData.startAddress || '',
        endAddress: routeData.endAddress || '',
        backToStart: routeData.backToStart ?? true,
        scheduledAt: routeData.scheduledAt || '2026-07-25T07:00',
        note: routeData.note || '',
        status: routeData.status || 'draft',
        stops: routeData.stops || []
      };
      setRoutes([newRoute, ...routes]);
    }
  };

  const handleDeleteRoute = (id: string) => {
    if (confirm(`Are you sure you want to delete this route?`)) {
      setRoutes(prev => prev.filter(r => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col font-['Proxima_Nova:Regular',sans-serif]">
      
      {/* Universal HeaderNav */}
      <HeaderNav />

      {/* Transportation Sub-Navigation Bar */}
      <div className="bg-white border-b border-[#ededed] px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[49px]">
          
          <div className="flex items-center gap-2">
            <span className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#5e6578] tracking-[0.72px] uppercase">
              TRANSPORTATION MANAGEMENT
            </span>
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center justify-center gap-1 h-full">
            <button
              onClick={() => setActiveTab('work-orders')}
              className={`px-5 h-full font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center border-b-3 transition-colors ${
                activeTab === 'work-orders'
                  ? 'border-[#ff7048] text-[#ff7048]'
                  : 'border-transparent text-[#5e6578] hover:text-[#2b3b63]'
              }`}
            >
              Work Orders
            </button>

            <button
              onClick={() => setActiveTab('routes')}
              className={`px-5 h-full font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center border-b-3 transition-colors ${
                activeTab === 'routes'
                  ? 'border-[#ff7048] text-[#ff7048]'
                  : 'border-transparent text-[#5e6578] hover:text-[#2b3b63]'
              }`}
            >
              Routes
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-5 h-full font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center border-b-3 transition-colors ${
                activeTab === 'calendar'
                  ? 'border-[#ff7048] text-[#ff7048]'
                  : 'border-transparent text-[#5e6578] hover:text-[#2b3b63]'
              }`}
            >
              Driver Schedule
            </button>

            <button
              onClick={() => setActiveTab('map-views')}
              className={`px-5 h-full font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center border-b-3 transition-colors opacity-70 ${
                activeTab === 'map-views'
                  ? 'border-[#ff7048] text-[#ff7048]'
                  : 'border-transparent text-[#5e6578] hover:text-[#2b3b63]'
              }`}
            >
              Map Views
            </button>
          </div>

          <div className="w-[120px]" />
        </div>
      </div>

      {/* Main Tab Content */}
      <main className="max-w-[1280px] w-full mx-auto p-6 flex-1">
        {activeTab === 'work-orders' && (
          <WorkOrdersList
            workOrders={workOrders}
            onOpenCreateModal={() => { setEditingWo(null); setWoModalOpen(true); }}
            onOpenEditModal={(wo) => { setEditingWo(wo); setWoModalOpen(true); }}
            onDeleteWorkOrder={handleDeleteWorkOrder}
            onCreateRouteFromSelected={handleCreateRouteFromSelected}
          />
        )}

        {activeTab === 'routes' && (
          <RoutesList
            routes={routes}
            onOpenCreateRoute={() => { setEditingRoute(null); setRouteBuilderOpen(true); }}
            onEditRoute={(r) => { setEditingRoute(r); setRouteBuilderOpen(true); }}
            onDeleteRoute={handleDeleteRoute}
          />
        )}

        {activeTab === 'calendar' && (
          <DriverScheduleCalendar
            routes={routes}
            onSelectRoute={(r) => { setEditingRoute(r); setRouteBuilderOpen(true); }}
          />
        )}

        {activeTab === 'map-views' && (
          <div className="bg-white rounded-xl border border-[#d8dadf] p-12 text-center text-[#5e6578] font-['Proxima_Nova:Semibold',sans-serif] text-[15px]">
            🗺️ Interactive Map Views & Live Fleet GPS Tracking (Module Preview)
          </div>
        )}
      </main>

      {/* Modals */}
      <WorkOrderModal
        isOpen={woModalOpen}
        onClose={() => setWoModalOpen(false)}
        onSave={handleSaveWorkOrder}
        initialData={editingWo}
      />

      <RouteBuilderModal
        isOpen={routeBuilderOpen}
        onClose={() => setRouteBuilderOpen(false)}
        onSaveRoute={handleSaveRoute}
        initialRoute={editingRoute}
        availableWorkOrders={workOrders.filter(w => w.status === 'open' || (editingRoute && editingRoute.stops.some(s => s.workOrders.some(ref => ref.woId === w.id))))}
      />

    </div>
  );
}
