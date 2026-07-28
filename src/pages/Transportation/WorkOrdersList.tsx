import React, { useState } from 'react';
import { WorkOrder, WorkOrderType, WorkOrderStatus } from './types';
import { getWorkOrderTypeBadge, getWorkOrderStatusBadge, DRIVERS } from './mockData';

interface WorkOrdersListProps {
  workOrders: WorkOrder[];
  onOpenCreateModal: () => void;
  onOpenEditModal: (wo: WorkOrder) => void;
  onDeleteWorkOrder: (id: string) => void;
  onCreateRouteFromSelected: (selectedWoIds: string[]) => void;
}

export default function WorkOrdersList({
  workOrders,
  onOpenCreateModal,
  onOpenEditModal,
  onDeleteWorkOrder,
  onCreateRouteFromSelected
}: WorkOrdersListProps) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [driverFilter, setDriverFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Filtering
  const filteredWorkOrders = workOrders.filter(wo => {
    // Status filter
    if (statusFilter !== 'all' && wo.status !== statusFilter) return false;
    // Type filter
    if (typeFilter !== 'all' && wo.type !== typeFilter) return false;
    // Driver filter
    if (driverFilter !== 'all') {
      if (driverFilter === 'unassigned' && wo.driver) return false;
      if (driverFilter !== 'unassigned' && wo.driver !== driverFilter) return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchId = wo.id.toLowerCase().includes(q);
      const matchCustomer = wo.customerName.toLowerCase().includes(q);
      const matchUnit = (wo.serialNumber || '').toLowerCase().includes(q) || (wo.buildingType || '').toLowerCase().includes(q);
      const matchAddress = (wo.pickupAddress || '').toLowerCase().includes(q) || 
                           (wo.dropoffAddress || '').toLowerCase().includes(q) ||
                           (wo.visitAddress || '').toLowerCase().includes(q);
      if (!matchId && !matchCustomer && !matchUnit && !matchAddress) return false;
    }
    return true;
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredWorkOrders.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredWorkOrders.map(wo => wo.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleCreateRouteFromSelected = () => {
    if (selectedIds.length > 0) {
      onCreateRouteFromSelected(selectedIds);
    }
  };

  const statusTabs: { id: string; label: string; count: number }[] = [
    { id: 'all', label: 'All Work Orders', count: workOrders.length },
    { id: 'open', label: 'Open (Unscheduled)', count: workOrders.filter(w => w.status === 'open').length },
    { id: 'scheduled', label: 'Scheduled', count: workOrders.filter(w => w.status === 'scheduled').length },
    { id: 'in_progress', label: 'In Progress', count: workOrders.filter(w => w.status === 'in_progress').length },
    { id: 'completed', label: 'Completed', count: workOrders.filter(w => w.status === 'completed').length },
    { id: 'cancelled', label: 'Cancelled', count: workOrders.filter(w => w.status === 'cancelled').length }
  ];

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Top Action Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="font-['Proxima_Nova:Bold',sans-serif] text-[22px] text-[#2b3b63]">
            Work Orders
          </h2>
          <span className="bg-[#e2e8f0] text-[#475569] font-['Proxima_Nova:Bold',sans-serif] text-[13px] px-2.5 py-0.5 rounded-full">
            {filteredWorkOrders.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {selectedIds.length > 0 && (
            <button
              onClick={handleCreateRouteFromSelected}
              className="bg-[#2b3b63] hover:bg-[#1e293b] text-white px-4 py-2 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center gap-2 shadow-sm transition-all"
            >
              <span>+ Create New Route</span>
              <span className="bg-[#ff7048] px-2 py-0.5 rounded-full text-[12px]">
                {selectedIds.length} selected
              </span>
            </button>
          )}

          <button
            onClick={onOpenCreateModal}
            className="bg-[#ff7048] hover:bg-[#e05b35] text-white px-4 py-2 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] flex items-center gap-2 shadow-sm transition-all"
          >
            <span className="text-[18px] leading-none">+</span>
            <span>Add Work Order</span>
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
              onClick={() => { setStatusFilter(tab.id); setSelectedIds([]); }}
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

      {/* Search & Filter Controls */}
      <div className="bg-white p-4 rounded-xl border border-[#d8dadf] flex flex-col gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by ID, customer name, serial, address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 border border-[#d8dadf] rounded-lg pl-9 pr-4 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
            />
            <svg className="w-4 h-4 text-[#959db1] absolute left-3 top-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`h-10 px-4 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] border flex items-center gap-2 transition-all ${
              showAdvanced || typeFilter !== 'all' || driverFilter !== 'all'
                ? 'bg-[#2b3b63] text-white border-[#2b3b63]' 
                : 'bg-white text-[#5e6578] border-[#d8dadf] hover:bg-[#f8f9fa]'
            }`}
          >
            <span>Filters</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
          </button>
        </div>

        {/* Advanced Filters Drawer */}
        {showAdvanced && (
          <div className="pt-3 border-t border-[#e2e8f0] grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#5e6578] uppercase tracking-wider">
                Work Order Type
              </label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63] outline-none"
              >
                <option value="all">All Types</option>
                <option value="delivery">Delivery</option>
                <option value="repo">Repo</option>
                <option value="lot_transfer">Lot Transfer</option>
                <option value="private_move">Private Move</option>
                <option value="repair">Repair</option>
                <option value="welfare">Welfare Check</option>
                <option value="payment">Payment Collection</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[12px] text-[#5e6578] uppercase tracking-wider">
                Driver / Assignee
              </label>
              <select
                value={driverFilter}
                onChange={(e) => setDriverFilter(e.target.value)}
                className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63] outline-none"
              >
                <option value="all">All Drivers</option>
                <option value="unassigned">Unassigned</option>
                {DRIVERS.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end justify-end">
              <button
                onClick={() => { setTypeFilter('all'); setDriverFilter('all'); setSearchQuery(''); }}
                className="text-[#ff7048] hover:underline font-['Proxima_Nova:Bold',sans-serif] text-[13px]"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Work Orders Table */}
      <div className="bg-white rounded-xl border border-[#d8dadf] overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8f9fa] border-b border-[#e0e0e0] font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
                <th className="py-3.5 px-4 w-10">
                  <input
                    type="checkbox"
                    checked={filteredWorkOrders.length > 0 && selectedIds.length === filteredWorkOrders.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 accent-[#ff7048] rounded cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4">WO ID</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Unit / Inventory</th>
                <th className="py-3.5 px-4">Pickup / Origin</th>
                <th className="py-3.5 px-4">Dropoff / Destination</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Driver</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {filteredWorkOrders.length > 0 ? (
                filteredWorkOrders.map(wo => {
                  const typeBadge = getWorkOrderTypeBadge(wo.type);
                  const statusBadge = getWorkOrderStatusBadge(wo.status);
                  const isSelected = selectedIds.includes(wo.id);

                  return (
                    <tr 
                      key={wo.id}
                      className={`hover:bg-[#f8fafc] transition-colors ${isSelected ? 'bg-[#fff5f2]' : ''}`}
                    >
                      <td className="py-3.5 px-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectOne(wo.id)}
                          className="w-4 h-4 accent-[#ff7048] rounded cursor-pointer"
                        />
                      </td>

                      <td className="py-3.5 px-4 font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#2b3b63]">
                        {wo.id}
                      </td>

                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-md text-[12px] font-['Proxima_Nova:Bold',sans-serif] inline-block ${typeBadge.bg} ${typeBadge.text}`}>
                          {typeBadge.label}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#2b3b63]">
                            {wo.customerName}
                          </span>
                          {wo.phone && (
                            <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#64748b]">
                              {wo.phone}
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63]">
                            {[wo.buildingSize, wo.buildingType].filter(Boolean).join(' ') || 'N/A'}
                          </span>
                          {wo.serialNumber && (
                            <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#94a3b8]">
                              {wo.serialNumber}
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 max-w-[200px] truncate">
                        <span className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#475569] truncate block" title={wo.pickupAddress || 'N/A'}>
                          {wo.pickupAddress || 'N/A'}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 max-w-[200px] truncate">
                        <span className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#475569] truncate block" title={wo.dropoffAddress || wo.visitAddress || 'N/A'}>
                          {wo.dropoffAddress || wo.visitAddress || 'N/A'}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[12px] font-['Proxima_Nova:Bold',sans-serif] inline-block ${statusBadge.bg} ${statusBadge.text}`}>
                          {statusBadge.label}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#334155]">
                        {wo.driver ? wo.driver : <span className="text-[#94a3b8] italic">Unassigned</span>}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onOpenEditModal(wo)}
                            className="p-1 text-[#5e6578] hover:text-[#ff7048] transition-colors font-['Proxima_Nova:Bold',sans-serif] text-[13px]"
                            title="Edit Work Order"
                          >
                            Edit
                          </button>
                          <span className="text-[#cbd5e1]">|</span>
                          <button
                            onClick={() => onDeleteWorkOrder(wo.id)}
                            className="p-1 text-[#94a3b8] hover:text-[#ef4444] transition-colors font-['Proxima_Nova:Bold',sans-serif] text-[13px]"
                            title="Delete"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-[#94a3b8] font-['Proxima_Nova:Semibold',sans-serif] text-[14px]">
                    No Work Orders found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
