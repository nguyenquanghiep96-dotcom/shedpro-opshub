import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Btn, StatusBadge } from './ui';
import { useTransportation } from './TransportationContext';

export default function WOViewPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { workOrders } = useTransportation();
  const wo = workOrders.find(w => w.id === id);

  if (!wo) {
    return (
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <h2 className="text-[#2b3b63] text-xl font-bold mb-4">Work Order {id} Not Found</h2>
        <Btn variant="primary" onClick={() => navigate('/transportation/workorders')}>Back to Work Orders</Btn>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center overflow-y-auto bg-[#F9FAFB]">
      <div className="w-full px-[24px] pt-[10px] pb-[24px]">
        <div className="bg-white rounded-[12px] px-8 py-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e8eaed]">
          <div className="max-w-[1248px] mx-auto">
            {/* Title Bar */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate('/transportation/workorders')} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-[#5e6578] hover:text-[#2b3b63] cursor-pointer transition-colors" title="Back">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <h1 className="text-[24px] font-bold text-[#2b3b63] leading-tight">
                  Work Order {wo.id}
                </h1>
                <StatusBadge status={wo.status} />
              </div>
              <div className="flex items-center gap-3">
                <Btn variant="primary" onClick={() => navigate(`/transportation/workorders/${wo.id}/edit`)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mr-2"><path d="M7 2.333h3.5c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C13.7 3.853 13.7 4.413 13.7 5.533v3.934c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H3.5c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C.3 11.147.3 10.587.3 9.467V5.533c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C1.82 2.333 2.38 2.333 3.5 2.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.85 1.5l1.65 1.65-8.25 8.25H2.6v-1.65l8.25-8.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Edit
                </Btn>
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-bold text-[#2b3b63] mb-3">Work Order</h3>
              <div className="border border-[#d8dadf] rounded-[6px] mb-6 p-[24px]">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {/* Row 1 */}
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Type of Work Order</label>
                    <p className="text-[#2b3b63] font-medium">{wo.type}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Owner</label>
                    <p className="text-[#2b3b63] font-medium">{wo.assignee || '—'}</p>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Customer</label>
                    <p className="text-[#2b3b63] font-medium">{wo.customer}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Phone</label>
                    <p className="text-[#2b3b63] font-medium">{wo.phone}</p>
                  </div>

                  {/* Row 3 - Serial Number (Full width) */}
                  <div className="col-span-2">
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Serial Number</label>
                    <p className="text-[#2b3b63] font-medium">{wo.serial || '—'}</p>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Building Type</label>
                    <p className="text-[#2b3b63] font-medium">{wo.buildingType}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Building Size</label>
                    <p className="text-[#2b3b63] font-medium">{wo.buildingSize || '—'}</p>
                  </div>
                </div>

                {/* PICKUP & DROP OFF Section */}
                <h4 className="text-[14px] font-bold text-[#2b3b63] mt-8 mb-3 uppercase tracking-wide">PICKUP & DROP OFF</h4>
                <div className="border-t border-[#f0f0f0] pt-4 mb-2"></div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Pickup Address</label>
                    <p className="text-[#2b3b63] font-medium">{wo.pickup || '—'}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Drop Off Address</label>
                    <p className="text-[#2b3b63] font-medium">{wo.dropoff || '—'}</p>
                  </div>
                </div>

                {/* DETAILS Section */}
                <h4 className="text-[14px] font-bold text-[#2b3b63] mt-8 mb-3 uppercase tracking-wide">DETAILS</h4>
                <div className="border-t border-[#f0f0f0] pt-4 mb-2"></div>
                <div className="flex flex-col gap-4">
                  <div className="w-1/2 pr-3">
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Amount Due</label>
                    <p className="text-[#2b3b63] font-medium">${wo.amountDue.toFixed(2)}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Note</label>
                    <p className="text-[#2b3b63] font-medium whitespace-pre-wrap">{wo.note || '—'}</p>
                  </div>
                  <div>
                    <label className="block font-sans font-bold text-[#5e6578] text-[12px] uppercase mb-1">Attachments</label>
                    <div className="flex flex-col gap-2 mt-2">
                       <span className="text-[#5e6578] italic text-sm">No attachments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
