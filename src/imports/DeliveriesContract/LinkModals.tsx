import React, { useState } from 'react';
import { Btn } from './ui';

export interface ContractInfo {
  id: string;
  type: 'CASH SALE' | 'RTO';
  customer: string;
  phone: string;
  building: string;
  serial: string;
  balance: number;
}

const MOCK_CONTRACTS: ContractInfo[] = [
  { id: 'CS-24-0417', type: 'CASH SALE', customer: 'Dennis Sartain', phone: '(540) 555-0134', building: '10×12 Utility shed', serial: 'SN-927711', balance: 4250 },
  { id: 'CS-24-0389', type: 'CASH SALE', customer: 'Marisol Reyes', phone: '(540) 555-0176', building: '12×16 Garden shed', serial: 'SN-927718', balance: 0 },
  { id: 'CS-24-0452', type: 'CASH SALE', customer: 'Grant Whitfield', phone: '(540) 555-0198', building: '8×10 Lean-to shed', serial: 'SN-927725', balance: 1875.5 },
  { id: 'CS-24-0468', type: 'CASH SALE', customer: 'Sandra Koenig', phone: '(540) 555-0110', building: '10×10 Studio shed', serial: 'SN-927844', balance: 2400 },
  { id: 'CS-24-0471', type: 'CASH SALE', customer: 'Chidi Okonkwo', phone: '(540) 555-0155', building: '12×16 Barn shed', serial: 'SN-928135', balance: 0 },
];

export function LinkContractModal({ isOpen, onClose, onLink }: { isOpen: boolean, onClose: () => void, onLink: (c: ContractInfo) => void }) {
  const [tab, setTab] = useState<'CASH SALE' | 'RTO'>('CASH SALE');
  const [search, setSearch] = useState('');
  const [confirming, setConfirming] = useState<ContractInfo | null>(null);

  if (!isOpen) return null;

  const filtered = MOCK_CONTRACTS.filter(c => c.type === tab && (c.customer.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)));

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4">
      {confirming ? (
        <div className="bg-white rounded-[10px] w-[400px] shadow-xl p-6 relative">
          <h3 className="text-[#2b3b63] font-bold text-[18px] mb-2">Link Contract?</h3>
          <p className="text-[#5e6578] text-[14px] mb-6">
            This will overwrite the Customer, Phone, and Amount due fields. Do you want to proceed?
          </p>
          <div className="flex justify-end gap-3">
            <Btn variant="outline" onClick={() => setConfirming(null)}>Cancel</Btn>
            <Btn variant="primary" onClick={() => { onLink(confirming); setConfirming(null); onClose(); }}>Yes, Link</Btn>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[10px] w-[600px] h-[80vh] flex flex-col shadow-xl">
          <div className="p-6 border-b border-[#e0e0e0] flex justify-between items-start shrink-0">
            <div>
              <h2 className="text-[#2b3b63] font-bold text-[20px]">Link a Contract</h2>
              <p className="text-[#787e90] text-[14px] mt-1">Search Cash Sales & RTO agreements</p>
            </div>
            <button onClick={onClose} className="w-[28px] h-[28px] bg-[#f5f5f7] flex items-center justify-center rounded-[6px] hover:bg-[#e0e0e0] transition-colors cursor-pointer text-[#5e6578]">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          
          <div className="px-6 pt-4 flex gap-2 shrink-0">
            <button className={`px-4 py-2 rounded-[6px] font-bold text-[14px] ${tab === 'CASH SALE' ? 'bg-[#2b3b63] text-white' : 'bg-[#f5f5f7] text-[#5e6578]'}`} onClick={() => setTab('CASH SALE')}>Cash Sales</button>
            <button className={`px-4 py-2 rounded-[6px] font-bold text-[14px] ${tab === 'RTO' ? 'bg-[#2b3b63] text-white' : 'bg-[#f5f5f7] text-[#5e6578]'}`} onClick={() => setTab('RTO')}>RTO</button>
          </div>

          <div className="px-6 py-4 shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-2.5 text-[#a0a4b0]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.667 14.667l-3.23-3.23m1.23-4.103a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input type="text" placeholder="Search by contract ID, customer, phone..." value={search} onChange={e => setSearch(e.target.value)} className="w-full border border-[#d8dadf] rounded-[6px] h-[36px] pl-9 pr-3 text-[14px] focus:border-[#2b3b63] outline-none" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-3">
            {filtered.map(c => (
              <div key={c.id} className="border border-[#e0e0e0] rounded-[6px] p-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[#2b3b63] text-[14px]">{c.id}</span>
                    <span className="bg-[#f5f5f7] text-[#5e6578] text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase">{c.type}</span>
                  </div>
                  <div className="text-[14px] mb-1"><strong className="text-[#2b3b63]">{c.customer}</strong> <span className="text-[#787e90]">· {c.phone}</span></div>
                  <div className="text-[12px] text-[#787e90]">{c.building} · {c.serial}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-[#a0a4b0] uppercase">Balance Due</div>
                    <div className={`font-bold text-[16px] ${c.balance > 0 ? 'text-[#e53e3e]' : 'text-[#16a34a]'}`}>
                      ${c.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}
                    </div>
                  </div>
                  <button onClick={() => setConfirming(c)} className="bg-[#ff7048] hover:bg-[#e05b36] text-white px-4 h-[36px] flex items-center justify-center rounded-[6px] font-sans font-bold text-[14px] transition-colors cursor-pointer">
                    Link
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-[#e0e0e0] flex justify-end shrink-0">
            <Btn variant="outline" onClick={onClose}>Cancel</Btn>
          </div>
        </div>
      )}
    </div>
  );
}

export interface InventoryInfo {
  id: string; // SN
  building: string;
  lot: string;
  status: 'IN STOCK' | 'ON DISPLAY';
  price: number;
  size: string;
  type: string;
}

const MOCK_INVENTORY: InventoryInfo[] = [
  { id: 'SN-930114', building: '10×12 Utility shed', type: 'Utility shed', size: '10x12', lot: 'Rose Lot A', status: 'IN STOCK', price: 4250 },
  { id: 'SN-930127', building: '12×16 Garden shed', type: 'Garden shed', size: '12x16', lot: 'Rose Lot A', status: 'IN STOCK', price: 5890 },
  { id: 'SN-930188', building: '10×16 Barn shed', type: 'Barn shed', size: '10x16', lot: 'Rose Lot B', status: 'ON DISPLAY', price: 6740 },
  { id: 'SN-930205', building: '10×14 Cabin shed', type: 'Cabin shed', size: '10x14', lot: 'Rose Lot B', status: 'IN STOCK', price: 7320 },
  { id: 'SN-930241', building: '12×20 Garage shed', type: 'Garage shed', size: '12x20', lot: 'ShedPro Plant', status: 'IN STOCK', price: 8990 },
  { id: 'SN-930266', building: '10×10 Studio shed', type: 'Studio shed', size: '10x10', lot: 'Rose Lot C', status: 'ON DISPLAY', price: 5110 },
  { id: 'SN-930302', building: '12×24 Warehouse shed', type: 'Warehouse shed', size: '12x24', lot: 'ShedPro Plant', status: 'IN STOCK', price: 10480 },
  { id: 'SN-930347', building: '8×10 Lean-to shed', type: 'Lean-to shed', size: '8x10', lot: 'Rose Lot C', status: 'IN STOCK', price: 2980 },
];

export function LinkInventoryModal({ isOpen, onClose, onLink }: { isOpen: boolean, onClose: () => void, onLink: (i: InventoryInfo) => void }) {
  const [search, setSearch] = useState('');
  const [confirming, setConfirming] = useState<InventoryInfo | null>(null);

  if (!isOpen) return null;

  const filtered = MOCK_INVENTORY.filter(c => c.building.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4">
      {confirming ? (
        <div className="bg-white rounded-[10px] w-[400px] shadow-xl p-6 relative">
          <h3 className="text-[#2b3b63] font-bold text-[18px] mb-2">Link Building?</h3>
          <p className="text-[#5e6578] text-[14px] mb-6">
            This will overwrite the Building Type, Size, and Serial Number fields. Do you want to proceed?
          </p>
          <div className="flex justify-end gap-3">
            <Btn variant="outline" onClick={() => setConfirming(null)}>Cancel</Btn>
            <Btn variant="primary" onClick={() => { onLink(confirming); setConfirming(null); onClose(); }}>Yes, Link</Btn>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[10px] w-[600px] h-[80vh] flex flex-col shadow-xl">
          <div className="p-6 border-b border-[#e0e0e0] flex justify-between items-start shrink-0">
            <div>
              <h2 className="text-[#2b3b63] font-bold text-[20px]">Link a Building</h2>
              <p className="text-[#787e90] text-[14px] mt-1">Search available inventory</p>
            </div>
            <button onClick={onClose} className="w-[28px] h-[28px] bg-[#f5f5f7] flex items-center justify-center rounded-[6px] hover:bg-[#e0e0e0] transition-colors cursor-pointer text-[#5e6578]">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>

          <div className="px-6 py-4 shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-2.5 text-[#a0a4b0]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.667 14.667l-3.23-3.23m1.23-4.103a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input type="text" placeholder="Search by serial, type, size, lot..." value={search} onChange={e => setSearch(e.target.value)} className="w-full border border-[#d8dadf] rounded-[6px] h-[36px] pl-9 pr-3 text-[14px] focus:border-[#2b3b63] outline-none" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-3">
            {filtered.map(c => (
              <div key={c.id} className="border border-[#e0e0e0] rounded-[6px] p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-[#2b3b63] text-[14px] mb-1">{c.building}</div>
                  <div className="text-[12px] text-[#787e90]">{c.id} · {c.lot}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase ${c.status === 'IN STOCK' ? 'bg-[#e6f4ea] text-[#16a34a]' : 'bg-[#fef1e8] text-[#c25e1a]'}`}>
                    {c.status}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-[#a0a4b0] uppercase">Price</div>
                    <div className="font-bold text-[16px] text-[#2b3b63]">
                      ${c.price.toLocaleString('en-US', {minimumFractionDigits: 0})}
                    </div>
                  </div>
                  <button onClick={() => setConfirming(c)} className="bg-[#2b3b63] hover:bg-[#1a233b] text-white px-4 h-[36px] flex items-center justify-center rounded-[6px] font-sans font-bold text-[14px] transition-colors cursor-pointer">
                    Link
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-[#e0e0e0] flex justify-end shrink-0">
            <Btn variant="outline" onClick={onClose}>Cancel</Btn>
          </div>
        </div>
      )}
    </div>
  );
}
