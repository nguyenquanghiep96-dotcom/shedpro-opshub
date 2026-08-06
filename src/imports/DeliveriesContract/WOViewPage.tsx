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
        <div className="max-w-[1248px] mx-auto">
          {/* Title Bar */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/transportation/workorders')} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-[#5e6578] hover:text-[#2b3b63] cursor-pointer transition-colors" title="Back">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <h1 className="text-[24px] font-bold text-[#2b3b63] leading-tight flex items-center gap-2">
                Work Order {wo.id}
                <span className="text-[14px] font-medium text-[#787e90] mt-1">{wo.type}</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Btn variant="primary" onClick={() => navigate(`/transportation/workorders/${wo.id}/edit`)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mr-2"><path d="M7 2.333h3.5c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C13.7 3.853 13.7 4.413 13.7 5.533v3.934c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H3.5c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C.3 11.147.3 10.587.3 9.467V5.533c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C1.82 2.333 2.38 2.333 3.5 2.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.85 1.5l1.65 1.65-8.25 8.25H2.6v-1.65l8.25-8.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Edit
              </Btn>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* DETAILS CARD */}
            <div className="bg-white rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e8eaed]">
              <div className="px-6 py-4 border-b border-[#e8eaed]">
                <h3 className="text-[15px] font-bold text-[#2b3b63]">Details</h3>
              </div>
              <div className="px-6 pb-6">
                <div className="flex flex-col">
                  {/* Row 1 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Type</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.type}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Status</span>
                      <StatusBadge status={wo.status} />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Owner</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.assignee || '—'}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Customer</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.customer}</span>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Phone</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.phone || '—'}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Amount Due</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">${wo.amountDue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Serial Number</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.serial || '—'}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Building Type</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.buildingType || '—'}</span>
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Building Size</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.buildingSize || '—'}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Orientation</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">—</span>
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Description</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">—</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Route</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">{wo.route || '—'}</span>
                    </div>
                  </div>
                  {/* Row 7 */}
                  <div className="flex items-center border-b border-[#f0f0f0] py-4">
                    <div className="flex-1 flex items-center justify-between pr-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Created</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">Aug 4 2026, 3:03 PM</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between pl-4">
                      <span className="font-sans font-medium text-[#787e90] text-[13px]">Updated</span>
                      <span className="font-sans font-semibold text-[#2b3b63] text-[13px]">Aug 5 2026, 3:44 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block font-sans font-medium text-[#787e90] text-[13px] mb-2">Notes</span>
                  <p className="text-[#5e6578] font-normal text-[14px] whitespace-pre-wrap leading-relaxed">{wo.note || '—'}</p>
                </div>
              </div>
            </div>

            {/* STOPS CARD */}
            <div className="bg-white rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e8eaed]">
              <div className="px-6 py-4 flex items-center justify-between border-b border-[#e8eaed]">
                <h3 className="text-[15px] font-bold text-[#2b3b63]">Stops</h3>
                <button className="flex items-center gap-2 border border-[#d8dadf] rounded-[6px] px-3 py-[6px] hover:bg-gray-50 transition-colors text-[#2b3b63] text-[13px] font-semibold cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M14 4.667a4.667 4.667 0 0 0-9.333 0c0 3.333 4.666 8 4.666 8s4.667-4.667 4.667-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9.333" cy="4.667" r="1.333" stroke="currentColor" strokeWidth="1.5"/></svg>
                  Show map
                </button>
              </div>
              <div className="px-6 py-6 flex flex-col gap-3">
                {wo.pickup && (
                  <div className="flex items-center border border-[#e8eaed] rounded-[6px] px-4 py-3 bg-white shadow-sm">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#2E323D] text-white flex items-center justify-center text-[12px] font-bold shrink-0">1</div>
                    <div className="ml-3 px-2 py-0.5 rounded-[20px] bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">PICKUP</div>
                    <span className="ml-3 text-[14px] font-medium text-[#5e6578] truncate">{wo.pickup}</span>
                  </div>
                )}
                {wo.dropoff && (
                  <div className="flex items-center border border-[#e8eaed] rounded-[6px] px-4 py-3 bg-white shadow-sm">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#2E323D] text-white flex items-center justify-center text-[12px] font-bold shrink-0">{wo.pickup ? '2' : '1'}</div>
                    <div className="ml-3 px-2 py-0.5 rounded-[20px] bg-[#E53E3E] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">DROPOFF</div>
                    <span className="ml-3 text-[14px] font-medium text-[#5e6578] truncate">{wo.dropoff}</span>
                  </div>
                )}
                {wo.visit && (
                  <div className="flex items-center border border-[#e8eaed] rounded-[6px] px-4 py-3 bg-white shadow-sm">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#2E323D] text-white flex items-center justify-center text-[12px] font-bold shrink-0">1</div>
                    <div className="ml-3 px-2 py-0.5 rounded-[20px] bg-[#16A34A] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">VISIT</div>
                    <span className="ml-3 text-[14px] font-medium text-[#5e6578] truncate">{wo.visit}</span>
                  </div>
                )}
                {!wo.pickup && !wo.dropoff && !wo.visit && (
                  <div className="text-center py-4 text-[#787e90] text-[14px]">No stops assigned</div>
                )}
              </div>
            </div>

            {/* ATTACHMENTS CARD */}
            <div className="bg-white rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e8eaed]">
              <div className="px-6 py-4 border-b border-[#e8eaed]">
                <h3 className="text-[15px] font-bold text-[#2b3b63]">Attachments</h3>
              </div>
              <div className="px-6 py-6 flex flex-col gap-3">
                <div className="flex items-center justify-between border border-[#e8eaed] rounded-[6px] px-4 py-3 bg-white shadow-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <svg className="shrink-0 text-[#a0a4b0]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    <span className="text-[13px] font-semibold text-[#0EA5E9] truncate cursor-pointer hover:underline">AVIFFILE.avif</span>
                  </div>
                  <span className="text-[12px] font-medium text-[#787e90] shrink-0">66 KB</span>
                </div>
                <div className="flex items-center justify-between border border-[#e8eaed] rounded-[6px] px-4 py-3 bg-white shadow-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <svg className="shrink-0 text-[#a0a4b0]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    <span className="text-[13px] font-semibold text-[#0EA5E9] truncate cursor-pointer hover:underline">svgfile.svg</span>
                  </div>
                  <span className="text-[12px] font-medium text-[#787e90] shrink-0">576 B</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
