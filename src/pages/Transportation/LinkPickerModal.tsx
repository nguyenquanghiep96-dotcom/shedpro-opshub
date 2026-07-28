import React, { useState } from 'react';
import { ContractItem, InventoryItem } from './types';
import { MOCK_CONTRACTS, MOCK_INVENTORY } from './mockData';

interface LinkPickerModalProps {
  type: 'contract' | 'inventory';
  isOpen: boolean;
  onClose: () => void;
  onSelectContract: (contract: ContractItem) => void;
  onSelectInventory: (inventory: InventoryItem) => void;
}

export default function LinkPickerModal({
  type,
  isOpen,
  onClose,
  onSelectContract,
  onSelectInventory
}: LinkPickerModalProps) {
  const [activeTab, setActiveTab] = useState<'cash' | 'rto'>( 'cash' );
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredContracts = MOCK_CONTRACTS.filter(c => {
    const matchesTab = activeTab === 'cash' ? c.type === 'Cash Sales' : c.type === 'RTO';
    const matchesSearch = c.id.toLowerCase().includes(search.toLowerCase()) || 
                          c.customerName.toLowerCase().includes(search.toLowerCase()) ||
                          c.serialNumber.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredInventory = MOCK_INVENTORY.filter(i => {
    return i.id.toLowerCase().includes(search.toLowerCase()) ||
           i.serialNumber.toLowerCase().includes(search.toLowerCase()) ||
           i.buildingType.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden border border-[#d8dadf] flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e0e0e0] flex items-center justify-between bg-[#fafafa]">
          <h3 className="font-['Proxima_Nova:Bold',sans-serif] text-[18px] text-[#2b3b63]">
            {type === 'contract' ? 'Link Contract' : 'Link Inventory Unit'}
          </h3>
          <button 
            onClick={onClose}
            className="text-[#959db1] hover:text-[#2b3b63] text-[20px] font-bold leading-none p-1"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto flex-1">
          {type === 'contract' && (
            <div className="flex gap-2 border-b border-[#e0e0e0] pb-2">
              <button
                onClick={() => setActiveTab('cash')}
                className={`px-4 py-2 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'cash' 
                    ? 'bg-[#2b3b63] text-white' 
                    : 'bg-[#f3f4f6] text-[#5e6578] hover:bg-[#e5e7eb]'
                }`}
              >
                Cash Sales Contracts
              </button>
              <button
                onClick={() => setActiveTab('rto')}
                className={`px-4 py-2 rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] transition-colors ${
                  activeTab === 'rto' 
                    ? 'bg-[#2b3b63] text-white' 
                    : 'bg-[#f3f4f6] text-[#5e6578] hover:bg-[#e5e7eb]'
                }`}
              >
                RTO Contracts
              </button>
            </div>
          )}

          {/* Search Input */}
          <div className="relative">
            <input 
              type="text"
              placeholder={type === 'contract' ? "Search by Contract ID, Customer or Serial..." : "Search Inventory ID, Serial or Type..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 border border-[#d8dadf] rounded-lg px-3 pl-9 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]"
            />
            <svg className="w-4 h-4 text-[#959db1] absolute left-3 top-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* List items */}
          <div className="flex flex-col gap-2 mt-2">
            {type === 'contract' ? (
              filteredContracts.length > 0 ? (
                filteredContracts.map(item => (
                  <div 
                    key={item.id}
                    onClick={() => { onSelectContract(item); onClose(); }}
                    className="p-3 border border-[#d8dadf] rounded-lg hover:border-[#ff7048] hover:bg-[#fff0eb] cursor-pointer transition-all flex justify-between items-center group"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#ff7048]">#{item.id}</span>
                        <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#2b3b63]">{item.customerName}</span>
                      </div>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#5e6578]">
                        {item.buildingSize} {item.buildingType} ({item.serialNumber})
                      </span>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#959db1]">
                        {item.address}, {item.city} {item.state}
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-white border border-[#ff7048] text-[#ff7048] rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] group-hover:bg-[#ff7048] group-hover:text-white transition-colors">
                      Select
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-[#959db1] font-['Proxima_Nova:Semibold',sans-serif] text-[14px]">
                  No matching contracts found.
                </div>
              )
            ) : (
              filteredInventory.length > 0 ? (
                filteredInventory.map(item => (
                  <div 
                    key={item.id}
                    onClick={() => { onSelectInventory(item); onClose(); }}
                    className="p-3 border border-[#d8dadf] rounded-lg hover:border-[#ff7048] hover:bg-[#fff0eb] cursor-pointer transition-all flex justify-between items-center group"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#2b3b63]">{item.id}</span>
                        <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#ff7048]">{item.serialNumber}</span>
                        <span className="px-2 py-0.5 bg-[#e5e7eb] text-[#374151] rounded text-[11px] font-bold">{item.status}</span>
                      </div>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[13px] text-[#5e6578]">
                        {item.buildingSize} {item.buildingType} - {item.color}
                      </span>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#959db1]">
                        Location: {item.location}
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-white border border-[#ff7048] text-[#ff7048] rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] group-hover:bg-[#ff7048] group-hover:text-white transition-colors">
                      Select
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-[#959db1] font-['Proxima_Nova:Semibold',sans-serif] text-[14px]">
                  No matching inventory units found.
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#e0e0e0] flex justify-end bg-[#fafafa]">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-[#d8dadf] rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578] hover:bg-[#f3f4f6]"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
