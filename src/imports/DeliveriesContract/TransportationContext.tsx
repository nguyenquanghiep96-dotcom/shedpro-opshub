import React, { createContext, useContext, useState, useMemo } from 'react';
import { MOCK_WORK_ORDERS, MOCK_ROUTES, WorkOrder, RouteData } from './transportationData';

interface TransportationContextType {
  workOrders: WorkOrder[];
  routes: RouteData[];
  addWorkOrder: (wo: WorkOrder) => void;
  updateWorkOrder: (wo: WorkOrder) => void;
  deleteWorkOrder: (id: string) => void;
  addRoute: (route: RouteData) => void;
  updateRoute: (route: RouteData) => void;
  updateRouteDate: (routeId: string, date: Date) => void;
}

const TransportationContext = createContext<TransportationContextType | undefined>(undefined);

export function TransportationProvider({ children }: { children: React.ReactNode }) {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(MOCK_WORK_ORDERS);
  const [routes, setRoutes] = useState<RouteData[]>(MOCK_ROUTES);

  const addWorkOrder = (wo: WorkOrder) => setWorkOrders(prev => [wo, ...prev]);
  const updateWorkOrder = (wo: WorkOrder) => setWorkOrders(prev => prev.map(w => w.id === wo.id ? wo : w));
  const deleteWorkOrder = (id: string) => setWorkOrders(prev => prev.filter(w => w.id !== id));

  const addRoute = (route: RouteData) => setRoutes(prev => [route, ...prev]);
  const updateRoute = (route: RouteData) => setRoutes(prev => prev.map(r => r.id === route.id ? route : r));
  
  const updateRouteDate = (routeId: string, date: Date) => {
    // Format: "Jul 21, 2026 · 7:00 AM"
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year} · 7:00 AM`; // Keep default time for simplicity
    
    setRoutes(prev => prev.map(r => 
      r.id === routeId 
        ? { ...r, scheduledDate: formattedDate } 
        : r
    ));
  };

  const value = useMemo(() => ({
    workOrders,
    routes,
    addWorkOrder,
    updateWorkOrder,
    deleteWorkOrder,
    addRoute,
    updateRoute,
    updateRouteDate,
  }), [workOrders, routes]);

  return (
    <TransportationContext.Provider value={value}>
      {children}
    </TransportationContext.Provider>
  );
}

export function useTransportation() {
  const context = useContext(TransportationContext);
  if (context === undefined) {
    throw new Error('useTransportation must be used within a TransportationProvider');
  }
  return context;
}
