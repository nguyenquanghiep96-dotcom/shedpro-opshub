import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Btn, Input, Select, Textarea, FormLabel } from './ui';
import { WO_TYPE_OPTIONS, OWNER_OPTIONS } from './transportationData';

export default function WODetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isNew = !id;

  // Form State
  const [woType, setWoType] = useState('Delivery');
  const [owner, setOwner] = useState('');
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('+1');
  const [serial, setSerial] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [buildingSize, setBuildingSize] = useState('');
  const [pickupAddr, setPickupAddr] = useState('');
  const [dropOffAddr, setDropOffAddr] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/transportation/workorders');
  };

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
                  {isNew ? 'New Work Order' : `Edit Work Order ${id}`}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Btn variant="outline" onClick={() => navigate('/transportation/workorders')}>Cancel</Btn>
                <Btn variant="primary" onClick={handleSubmit}>
                  {isNew ? 'Create Work Order' : 'Save Changes'}
                </Btn>
              </div>
            </div>

            <form id="wo-detail-form" onSubmit={handleSubmit}>
              <h3 className="text-[16px] font-bold text-[#2b3b63] mb-3">Work Order</h3>
              <div className="border border-[#d8dadf] rounded-[6px] mb-6 p-[24px]">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {/* Row 1 */}
                  <div>
                    <FormLabel required>Type of Work Order</FormLabel>
                    <Select value={woType} onChange={e => setWoType(e.target.value)}>
                      {WO_TYPE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </Select>
                  </div>
                  <div>
                    <FormLabel required>Owner</FormLabel>
                    <Select value={owner} onChange={e => setOwner(e.target.value)}>
                      <option value="">Select owner...</option>
                      {OWNER_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </Select>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <FormLabel required>Customer</FormLabel>
                    <Input placeholder="Customer name" value={customer} onChange={e => setCustomer(e.target.value)} />
                  </div>
                  <div>
                    <FormLabel>Phone</FormLabel>
                    <Input placeholder="+1" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>

                  {/* Row 3 - Serial Number (Full width) */}
                  <div className="col-span-2">
                    <FormLabel>Serial Number</FormLabel>
                    <Input placeholder="Serial number" value={serial} onChange={e => setSerial(e.target.value)} />
                  </div>

                  {/* Row 4 */}
                  <div>
                    <FormLabel>Building Type</FormLabel>
                    <Input placeholder="e.g. Barn, Garage" value={buildingType} onChange={e => setBuildingType(e.target.value)} />
                  </div>
                  <div>
                    <FormLabel>Building Size</FormLabel>
                    <Input placeholder="e.g. 12x24" value={buildingSize} onChange={e => setBuildingSize(e.target.value)} />
                  </div>
                </div>

                {/* PICKUP & DROP OFF Section */}
                <h4 className="text-[14px] font-bold text-[#2b3b63] mt-8 mb-3 uppercase tracking-wide">PICKUP & DROP OFF</h4>
                <div className="border-t border-[#f0f0f0] pt-4 mb-2"></div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <FormLabel required>Pickup Address</FormLabel>
                    <Input placeholder="Start typing an address..." value={pickupAddr} onChange={e => setPickupAddr(e.target.value)} />
                  </div>
                  <div>
                    <FormLabel required>Drop Off Address</FormLabel>
                    <Input placeholder="Start typing an address..." value={dropOffAddr} onChange={e => setDropOffAddr(e.target.value)} />
                  </div>
                </div>

                {/* DETAILS Section */}
                <h4 className="text-[14px] font-bold text-[#2b3b63] mt-8 mb-3 uppercase tracking-wide">DETAILS</h4>
                <div className="border-t border-[#f0f0f0] pt-4 mb-2"></div>
                <div className="flex flex-col gap-4">
                  <div className="w-1/2 pr-3">
                    <FormLabel>Amount Due</FormLabel>
                    <div className="relative">
                      <span className="absolute left-[12px] top-[10px] font-sans text-[14px] text-[#A0A4B0]">$</span>
                      <Input type="number" placeholder="0.00" className="pl-[24px]" value={amountDue} onChange={e => setAmountDue(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <FormLabel>Note</FormLabel>
                    <Textarea rows={3} placeholder="Optional notes..." value={note} onChange={e => setNote(e.target.value)} />
                  </div>
                  <div>
                    <FormLabel>Attachments</FormLabel>
                    <div className="w-full border-2 border-dashed border-[#d8dadf] rounded-[8px] bg-[#F9FAFB] flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-2">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18V12" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 15H15" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#5e6578] font-sans text-[14px] font-medium">Click or drag files here to upload</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-[12px] text-[#A0A4B0]">
                      <span>Maximum 3 files · Max 10 MB each · Images, PDF, DOC, DOCX</span>
                      <span className="font-medium text-[#2b3b63]">0 / 3 files</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
