import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  WorkOrder, 
  WOType, 
  WOStatus, 
  WO_TYPE_OPTIONS, 
  WO_TYPE_COLORS, 
  WO_STATUS_COLORS, 
  ASSIGNEE_OPTIONS, 
  isMoveType 
} from './transportationData';
import { StatusBadge, FilterTabGroup, TypeBadge, type FilterTab } from './ui';
import { useTransportation } from './TransportationContext';
import { useTransportation } from './TransportationContext';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.33331V12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 12.5V13.3333C17.5 14.2616 17.5 14.7257 17.3193 15.0805C17.1594 15.3926 16.8926 15.6594 16.5805 15.8193C16.2257 16 15.7616 16 14.8333 16H5.16667C4.2384 16 3.77427 16 3.41946 15.8193C3.10738 15.6594 2.84056 15.3926 2.68065 15.0805C2.5 14.7257 2.5 14.2616 2.5 13.3333V12.5" stroke="#787e90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83337 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="#787e90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="#2b3b63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="#2b3b63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9452 1.59129C12.1741 1.49653 12.4197 1.44775 12.6667 1.44775C12.9138 1.44775 13.1594 1.49653 13.3882 1.59129C13.6171 1.68605 13.825 1.82494 14.0001 2.00004C14.1752 2.17513 14.3141 2.383 14.4088 2.61186C14.5036 2.84073 14.5524 3.08638 14.5524 3.33337C14.5524 3.58036 14.5036 3.82602 14.4088 4.05488C14.3141 4.28375 14.1752 4.49162 14.0001 4.66671L4.33341 14.3334L1.33341 14.6667L1.66675 11.6667L11.3334 2.00004Z" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4H3.33333H14" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33337 4.00008V2.66675C5.33337 2.31313 5.47385 1.97399 5.7239 1.72394C5.97395 1.47389 6.31309 1.33341 6.66671 1.33341H9.33337C9.68699 1.33341 10.0261 1.47389 10.2762 1.72394C10.5262 1.97399 10.6667 2.31313 10.6667 2.66675V4.00008M12.6667 4.00008V13.3334C12.6667 13.687 12.5262 14.0262 12.2762 14.2762C12.0261 14.5263 11.687 14.6667 11.3334 14.6667H4.66671C4.31309 14.6667 3.97395 14.5263 3.7239 14.2762C3.47385 14.0262 3.33337 13.687 3.33337 13.3334V4.00008H12.6667Z" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66663 7.33341V11.3334" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33337 7.33341V11.3334" stroke="#5e6578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FilePlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V12" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15H15" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

type FilterStatus = 'All' | 'Open' | 'Scheduled' | 'Completed';

export default function WorkOrdersContainer() {
  const { workOrders, addWorkOrder, updateWorkOrder, deleteWorkOrder } = useTransportation();
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('All');
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  
  // Advanced search states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<string>('All types');
  const [searchAssignee, setSearchAssignee] = useState<string>('All assignees');
  
  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingWO, setEditingWO] = useState<WorkOrder | null>(null);
  const [deletingWOId, setDeletingWOId] = useState<string | null>(null);

  // Form states
  const [formWOType, setFormWOType] = useState<WOType>('Delivery');
  
  // Compute counts
  const counts = useMemo(() => {
    return {
      All: workOrders.length,
      Open: workOrders.filter(w => w.status === 'Open').length,
      Scheduled: workOrders.filter(w => w.status === 'Scheduled').length,
      Completed: workOrders.filter(w => w.status === 'Completed').length,
    };
  }, [workOrders]);

  // Filter and search logic
  const filteredWO = useMemo(() => {
    return workOrders.filter(wo => {
      // Status filter
      if (filterStatus !== 'All' && wo.status !== filterStatus) return false;
      
      // Advanced search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesId = wo.id.toLowerCase().includes(query);
        const matchesName = wo.customerName.toLowerCase().includes(query);
        if (!matchesId && !matchesName) return false;
      }
      
      if (searchType !== 'All types' && wo.type !== searchType) return false;
      if (searchAssignee !== 'All assignees' && wo.assignee !== searchAssignee) return false;
      
      return true;
    });
  }, [workOrders, filterStatus, searchQuery, searchType, searchAssignee]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus, searchQuery, searchType, searchAssignee]);

  const totalPages = Math.ceil(filteredWO.length / itemsPerPage) || 1;
  const paginatedWO = filteredWO.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const clearAdvancedSearch = () => {
    setSearchQuery('');
    setSearchType('All types');
    setSearchAssignee('All assignees');
  };

  const handleEdit = (wo: WorkOrder) => {
    setEditingWO(wo);
    setFormWOType(wo.type);
    setIsCreateModalOpen(true);
  };
  
  const handleCreate = () => {
    setEditingWO(null);
    setFormWOType('Delivery');
    setIsCreateModalOpen(true);
  };

  const handleDelete = () => {
    if (deletingWOId) {
      deleteWorkOrder(deletingWOId);
      setDeletingWOId(null);
    }
  };

  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    
    // Validation
    const type = data.type as WOType;
    const isMove = isMoveType(type);
    
    const requiredFields = ['customerName', 'buildingType'];
    if (isMove) {
      requiredFields.push('pickupAddress', 'dropoffAddress');
    } else {
      requiredFields.push('visitAddress');
    }
    
    // Phone or Customer check
    if (!data.customerName || !data.customerPhone || !data.buildingType || (isMove && (!data.pickupAddress || !data.dropoffAddress)) || (!isMove && !data.visitAddress)) {
      alert('Please fill in Building Type, Building Size, Pickup & Dropoff (or Visit Address), Customer Name, and Phone.');
      return;
    }

    if (editingWO) {
      updateWorkOrder({
        ...editingWO,
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
      });
    } else {
      addWorkOrder({
        id: 'WO-' + Math.floor(Math.random() * 10000),
        status: 'Open',
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
        route: '',
        assignee: '',
        contract: ''
      });
    }
    closeModal();
  };

  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    
    // Validation
    const type = data.type as WOType;
    const isMove = isMoveType(type);
    
    const requiredFields = ['customerName', 'buildingType'];
    if (isMove) {
      requiredFields.push('pickupAddress', 'dropoffAddress');
    } else {
      requiredFields.push('visitAddress');
    }
    
    // Phone or Customer check
    if (!data.customerName || !data.customerPhone || !data.buildingType || (isMove && (!data.pickupAddress || !data.dropoffAddress)) || (!isMove && !data.visitAddress)) {
      alert('Please fill in Building Type, Building Size, Pickup & Dropoff (or Visit Address), Customer Name, and Phone.');
      return;
    }

    if (editingWO) {
      updateWorkOrder({
        ...editingWO,
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
      });
    } else {
      addWorkOrder({
        id: 'WO-' + Math.floor(Math.random() * 10000),
        status: 'Open',
        type,
        customerName: data.customerName as string,
        customerPhone: data.customerPhone as string,
        buildingType: data.buildingType as string,
        buildingSize: data.buildingSize as string,
        serialNumber: data.serialNumber as string,
        pickupAddress: (data.pickupAddress as string) || '',
        dropoffAddress: (data.dropoffAddress as string) || '',
        visitAddress: (data.visitAddress as string) || '',
        amountDue: Number(data.amountDue) || 0,
        note: (data.note as string) || '',
        route: '',
        assignee: '',
        contract: ''
      });
    }
    closeModal();
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setEditingWO(null);
  };

  const woFilterTabs: FilterTab[] = [
    { label: 'All', value: 'All', count: counts.All },
    { label: 'Open', value: 'Open', count: counts.Open },
    { label: 'Scheduled', value: 'Scheduled', count: counts.Scheduled },
    { label: 'Completed', value: 'Completed', count: counts.Completed },
  ];

  return (
    <div className="font-sans min-h-screen bg-[#f8f9fa] p-6">
      
      {/* 1. Action Bar */}
      <div className="bg-white rounded-[10px] p-[16px] border border-[#e0e0e0] mb-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={handleCreate}
            className="flex items-center gap-2 bg-[#ff7048] hover:bg-[#e65a32] text-white rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
          >
            <PlusIcon />
            Add Work Order
          </button>
          
          <div className="h-6 w-px bg-[#e0e0e0] mx-2 hidden sm:block"></div>
          
          <FilterTabGroup
            tabs={woFilterTabs}
            active={filterStatus}
            onChange={(v) => setFilterStatus(v as FilterStatus)}
          />
        </div>

        <button 
          onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
          className={`flex items-center gap-2 px-[16px] py-[10px] rounded-[4px] text-[14px] font-bold transition-colors ${
            isAdvancedSearchOpen 
              ? 'bg-[#5e6578] text-white' 
              : 'bg-[#eaecf0] text-[#5e6578] hover:bg-gray-200'
          }`}
        >
          <SearchIcon />
          Advanced Search
        </button>
      </div>

      {/* 2. Advanced Search Panel */}
      {isAdvancedSearchOpen && (
        <div className="bg-white rounded-[10px] border border-[#e0e0e0] p-4 mb-4 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Search</label>
              <input 
                type="text" 
                placeholder="Search by Work Order ID or customer name"
                className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] placeholder-[#787e90] focus:outline-none focus:border-[#ff7048]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Type</label>
              <select 
                className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048] bg-white"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="All types">All types</option>
                {WO_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Assignee</label>
              <select 
                className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048] bg-white"
                value={searchAssignee}
                onChange={(e) => setSearchAssignee(e.target.value)}
              >
                <option value="All assignees">All assignees</option>
                {ASSIGNEE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={clearAdvancedSearch}
              className="text-[#ff7048] text-[14px] font-bold hover:underline"
            >
              Clear Criteria
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="bg-white rounded-[10px] border border-[#e0e0e0] shadow-sm flex flex-col">
        
        {/* 3. Table Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-3">
            <h2 className="text-[#2b3b63] text-[32px] font-bold leading-none">Work Orders</h2>
            <div className="bg-[#2b3b63] text-white text-[18px] font-bold rounded-[6px] min-w-[30px] px-[6px] py-[4px] text-center inline-flex items-center justify-center">
              {filteredWO.length}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
              <DownloadIcon />
            </button>
            <span className="text-[#5e6578] text-[14px]">Page {currentPage} of {totalPages}</span>
            <div className="flex gap-1">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="p-1 hover:bg-gray-100 rounded-[4px] transition-colors cursor-pointer disabled:opacity-50"
              >
                <ChevronLeft />
              </button>
              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="p-1 hover:bg-gray-100 rounded-[4px] transition-colors cursor-pointer disabled:opacity-50"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 px-4 w-[58px] text-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#D8DADF] text-[#ff7048] focus:ring-[#ff7048]" />
                </th>
                <th className="py-4 px-4 w-[100px] text-[#2b3b63] text-[14px] font-bold">ID</th>
                <th className="py-4 px-4 flex-1 text-[#2b3b63] text-[14px] font-bold">Type</th>
                <th className="py-4 px-4 flex-[1.2] text-[#2b3b63] text-[14px] font-bold">Customer</th>
                <th className="py-4 px-4 flex-[1.2] text-[#2b3b63] text-[14px] font-bold">Building</th>
                <th className="py-4 px-4 flex-[1.5] text-[#2b3b63] text-[14px] font-bold">Stops</th>
                <th className="py-4 px-4 flex-[0.8] text-[#2b3b63] text-[14px] font-bold">Status</th>
                <th className="py-4 px-4 w-[90px] text-[#2b3b63] text-[14px] font-bold">Route</th>
                <th className="py-4 px-4 flex-1 text-[#2b3b63] text-[14px] font-bold">Assignee</th>
                <th className="py-4 px-4 w-[80px] text-[#2b3b63] text-[14px] font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedWO.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-[#5e6578]">No work orders found.</td>
                </tr>
              ) : (
                paginatedWO.map(wo => (
                  <tr key={wo.id} className="border-b border-[#e0e0e0] hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-center">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#D8DADF] text-[#ff7048] focus:ring-[#ff7048]" />
                    </td>
                    <td className="py-4 px-4 text-[#5e6578] text-[14px] font-normal font-mono">{wo.id}</td>
                    <td className="py-4 px-4">
                      <TypeBadge type={wo.type} />
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-[#5e6578] text-[14px] font-bold">{wo.customerName}</div>
                      <div className="text-[#787e90] text-[12px] mt-0.5">{wo.customerPhone}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-[#5e6578] text-[14px]">{wo.buildingType || '-'}</div>
                      <div className="text-[#787e90] text-[12px] mt-0.5">{wo.serialNumber || '-'}</div>
                    </td>
                    <td className="py-4 px-4">
                      {isMoveType(wo.type) ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#2F6FB0] font-bold text-[10px] uppercase bg-[#E6F0F9] px-1.5 py-0.5 rounded">Pickup</span>
                            <span className="text-[#5e6578] text-[13px] truncate max-w-[150px]" title={wo.pickupAddress}>{wo.pickupAddress || '-'}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#F15A2B] font-bold text-[10px] uppercase bg-[#FDEEE9] px-1.5 py-0.5 rounded">Dropoff</span>
                            <span className="text-[#5e6578] text-[13px] truncate max-w-[150px]" title={wo.dropoffAddress}>{wo.dropoffAddress || '-'}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#12897E] font-bold text-[10px] uppercase bg-[#E7F3F2] px-1.5 py-0.5 rounded">Visit</span>
                          <span className="text-[#5e6578] text-[13px] truncate max-w-[200px]" title={wo.visitAddress}>{wo.visitAddress || '-'}</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <StatusBadge status={wo.status} />
                    </td>
                    <td className="py-4 px-4 text-[#2F6FB0] text-[14px] font-bold">
                      {wo.routeId || '-'}
                    </td>
                    <td className="py-4 px-4 text-[#5e6578] text-[14px]">
                      {wo.assignee || 'Unassigned'}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => handleEdit(wo)}
                          className="hover:opacity-70 transition-opacity" title="Edit"
                        >
                          <PencilIcon />
                        </button>
                        <button 
                          onClick={() => setDeletingWOId(wo.id)}
                          className="hover:opacity-70 transition-opacity" title="Delete"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Create/Edit Work Order Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#e0e0e0] sticky top-0 bg-white z-10">
              <h3 className="text-[#2b3b63] text-[24px] font-bold">
                {editingWO ? 'Edit Work Order' : 'New Work Order'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-[#5e6578] hover:text-[#2b3b63] text-[24px] leading-none"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-5" id="wo-form">
              {/* Type */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Type *</label>
                <select name="type" 
                  className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048] bg-white"
                  value={formWOType}
                  onChange={(e) => setFormWOType(e.target.value as WOType)}
                >
                  {WO_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Customer */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Customer Name *</label>
                  <input type="text" className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="customerName" name="customerName" defaultValue={editingWO?.customerName} />
                </div>
                <div>
                  <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Phone</label>
                  <input type="text" className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="customerPhone" name="customerPhone" defaultValue={editingWO?.customerPhone} />
                </div>
              </div>

              {/* Contract */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Contract</label>
                <div className="flex gap-2">
                  <input type="text" readOnly className="h-[40px] flex-1 bg-gray-50 border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#5e6578]" placeholder="No contract linked" />
                  <button disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Contract</button>
                </div>
              </div>

              {/* Building Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Building Type *</label>
                  <input type="text" className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="buildingType" name="buildingType" defaultValue={editingWO?.buildingType} />
                </div>
                <div>
                  <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Building Size</label>
                  <input type="text" className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="buildingSize" defaultValue={editingWO?.buildingSize} name="buildingSize" defaultValue={editingWO?.buildingSize} placeholder="e.g. 10x12" />
                </div>
              </div>

              {/* Serial & Inventory */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Serial Number</label>
                <div className="flex gap-2">
                  <input type="text" className="h-[40px] flex-1 border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="serialNumber" name="serialNumber" defaultValue={editingWO?.serialNumber} />
                  <button disabled className="h-[40px] bg-[#eaecf0] text-[#5e6578] rounded-[4px] px-[16px] font-bold text-[14px] opacity-50 cursor-not-allowed flex items-center justify-center">Link Inventory</button>
                </div>
              </div>

              {/* Addresses depending on type */}
              {isMoveType(formWOType) ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Pickup Address</label>
                    <textarea rows={2} className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="pickupAddress" name="pickupAddress" defaultValue={editingWO?.pickupAddress}></textarea>
                  </div>
                  <div>
                    <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Dropoff Address</label>
                    <textarea rows={2} className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="dropoffAddress" name="dropoffAddress" defaultValue={editingWO?.dropoffAddress}></textarea>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Visit Address</label>
                  <textarea rows={2} className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="visitAddress" name="visitAddress" defaultValue={editingWO?.visitAddress}></textarea>
                </div>
              )}

              {/* Amount Due */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Amount Due</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-[#5e6578]">$</span>
                  <input type="number" className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] pl-7 pr-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="amountDue" defaultValue={editingWO?.amountDue} name="amountDue" defaultValue={editingWO?.amountDue} placeholder="0.00" />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-1">Detail / Note</label>
                <textarea rows={3} className="h-[40px] w-full border border-[#D8DADF] rounded-[4px] px-3 py-2 text-[14px] text-[#2b3b63] focus:outline-none focus:border-[#ff7048]" name="note" defaultValue={editingWO?.note} name="note" defaultValue={editingWO?.note} placeholder="Add any special instructions..."></textarea>
              </div>

              {/* Attachments */}
              <div>
                <label className="block text-[#5E6578] text-[14px] font-bold mb-2">Attachments</label>
                <div className="bg-[#f8f9fa] border-2 border-dashed border-[#D8DADF] rounded-[8px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <FilePlusIcon />
                  <p className="mt-2 text-[#2b3b63] text-[14px] font-bold">Click or drag files to upload</p>
                  <p className="mt-1 text-[#787e90] text-[12px]">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>

            </form>
            
            <div className="flex justify-end gap-3 p-6 border-t border-[#e0e0e0] sticky bottom-0 bg-white z-10">
              <button 
                onClick={closeModal}
                className="bg-[#eaecf0] text-[#5e6578] hover:bg-gray-200 rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" form="wo-form"
                className="bg-[#ff7048] hover:bg-[#e65a32] text-white rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                {editingWO ? 'Save Changes' : 'Create Work Order'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Delete Confirmation Modal */}
      {deletingWOId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#2b3b63] text-[20px] font-bold mb-2">Delete Work Order?</h3>
            <p className="text-[#5e6578] text-[14px] mb-6">
              Are you sure you want to delete {deletingWOId}? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setDeletingWOId(null)}
                className="bg-[#eaecf0] text-[#5e6578] hover:bg-gray-200 rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
