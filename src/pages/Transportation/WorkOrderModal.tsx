import React, { useState, useEffect } from 'react';
import { WorkOrder, WorkOrderType, WorkOrderCategory, ContractItem, InventoryItem } from './types';
import LinkPickerModal from './LinkPickerModal';

interface WorkOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (wo: Partial<WorkOrder>) => void;
  initialData?: WorkOrder | null;
}

export default function WorkOrderModal({
  isOpen,
  onClose,
  onSave,
  initialData
}: WorkOrderModalProps) {
  const [type, setType] = useState<WorkOrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [buildingSize, setBuildingSize] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [visitAddress, setVisitAddress] = useState('');
  const [amountDue, setAmountDue] = useState<number | ''>('');
  const [detail, setDetail] = useState('');
  const [contractId, setContractId] = useState('');
  const [inventoryId, setInventoryId] = useState('');

  const [linkPickerOpen, setLinkPickerOpen] = useState(false);
  const [linkPickerType, setLinkPickerType] = useState<'contract' | 'inventory'>('contract');

  useEffect(() => {
    if (initialData) {
      setType(initialData.type || 'delivery');
      setCustomerName(initialData.customerName || '');
      setPhone(initialData.phone || '');
      setBuildingType(initialData.buildingType || '');
      setBuildingSize(initialData.buildingSize || '');
      setSerialNumber(initialData.serialNumber || '');
      setPickupAddress(initialData.pickupAddress || '');
      setDropoffAddress(initialData.dropoffAddress || '');
      setVisitAddress(initialData.visitAddress || '');
      setAmountDue(initialData.amountDue ?? '');
      setDetail(initialData.detail || '');
      setContractId(initialData.contractId || '');
      setInventoryId(initialData.inventoryId || '');
    } else {
      setType('delivery');
      setCustomerName('');
      setPhone('');
      setBuildingType('');
      setBuildingSize('');
      setSerialNumber('');
      setPickupAddress('');
      setDropoffAddress('');
      setVisitAddress('');
      setAmountDue('');
      setDetail('');
      setContractId('');
      setInventoryId('');
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const isMoveCategory = ['delivery', 'repo', 'lot_transfer', 'private_move'].includes(type);

  const handleSelectContract = (c: ContractItem) => {
    setContractId(c.id);
    setCustomerName(c.customerName);
    setPhone(c.phone);
    setBuildingType(c.buildingType);
    setBuildingSize(c.buildingSize);
    setSerialNumber(c.serialNumber);
    if (isMoveCategory) {
      setDropoffAddress(`${c.address}, ${c.city} ${c.state} ${c.zip}`);
    } else {
      setVisitAddress(`${c.address}, ${c.city} ${c.state} ${c.zip}`);
    }
  };

  const handleSelectInventory = (inv: InventoryItem) => {
    setInventoryId(inv.id);
    setBuildingType(inv.buildingType);
    setBuildingSize(inv.buildingSize);
    setSerialNumber(inv.serialNumber);
    if (isMoveCategory && !pickupAddress) {
      setPickupAddress(inv.location);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialData ? initialData.id : undefined,
      type,
      category: isMoveCategory ? 'move' : 'service',
      customerName: customerName || 'N/A',
      phone,
      buildingType,
      buildingSize,
      serialNumber,
      pickupAddress: isMoveCategory ? pickupAddress : undefined,
      dropoffAddress: isMoveCategory ? dropoffAddress : undefined,
      visitAddress: !isMoveCategory ? visitAddress : undefined,
      amountDue: typeof amountDue === 'number' ? amountDue : 0,
      detail,
      contractId,
      inventoryId
    });
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-[#d8dadf] flex flex-col max-h-[90vh]">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#e0e0e0] flex items-center justify-between bg-[#fafafa]">
            <h3 className="font-['Proxima_Nova:Bold',sans-serif] text-[18px] text-[#2b3b63]">
              {initialData ? `Edit Work Order ${initialData.id}` : 'Create New Work Order'}
            </h3>
            <button 
              onClick={onClose}
              className="text-[#959db1] hover:text-[#2b3b63] text-[20px] font-bold leading-none p-1"
            >
              &times;
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 overflow-y-auto flex-1">
            
            {/* Type selector */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                Work Order Type *
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as WorkOrderType)}
                className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
              >
                <optgroup label="Move Jobs (2 Stops: Pickup → Dropoff)">
                  <option value="delivery">Delivery</option>
                  <option value="repo">Repo (Repossession)</option>
                  <option value="lot_transfer">Lot Transfer</option>
                  <option value="private_move">Private Move</option>
                </optgroup>
                <optgroup label="Service Jobs (1 Stop: Visit)">
                  <option value="repair">Repair</option>
                  <option value="welfare">Welfare Check</option>
                  <option value="payment">Payment Collection</option>
                </optgroup>
              </select>
            </div>

            {/* Quick Action Buttons to Link Contract or Inventory */}
            <div className="flex gap-3 bg-[#f8f9fa] p-3 rounded-lg border border-[#e5e7eb] items-center">
              <span className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">Auto-fill options:</span>
              <button
                type="button"
                onClick={() => { setLinkPickerType('contract'); setLinkPickerOpen(true); }}
                className="px-3 py-1.5 bg-white border border-[#ff7048] text-[#ff7048] rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] hover:bg-[#ff7048] hover:text-white transition-colors"
              >
                + Link Contract {contractId && `(#${contractId})`}
              </button>
              <button
                type="button"
                onClick={() => { setLinkPickerType('inventory'); setLinkPickerOpen(true); }}
                className="px-3 py-1.5 bg-white border border-[#2b3b63] text-[#2b3b63] rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] hover:bg-[#2b3b63] hover:text-white transition-colors"
              >
                + Link Inventory {inventoryId && `(${inventoryId})`}
              </button>
            </div>

            {/* Customer & Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Dennis Sartain"
                  required
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(540) 555-0100"
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>
            </div>

            {/* Building / Unit Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Building Type
                </label>
                <input
                  type="text"
                  value={buildingType}
                  onChange={(e) => setBuildingType(e.target.value)}
                  placeholder="e.g. Utility shed"
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Building Size
                </label>
                <input
                  type="text"
                  value={buildingSize}
                  onChange={(e) => setBuildingSize(e.target.value)}
                  placeholder="e.g. 10×12"
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Serial Number
                </label>
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="SN-XXXXXX"
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>
            </div>

            {/* Conditional Addresses based on Move vs Service category */}
            {isMoveCategory ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="Where to pick up shed..."
                    required
                    className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                    Dropoff Address *
                  </label>
                  <input
                    type="text"
                    value={dropoffAddress}
                    onChange={(e) => setDropoffAddress(e.target.value)}
                    placeholder="Where to deliver shed..."
                    required
                    className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Visit Address *
                </label>
                <input
                  type="text"
                  value={visitAddress}
                  onChange={(e) => setVisitAddress(e.target.value)}
                  placeholder="Where the service/visit happens..."
                  required
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>
            )}

            {/* Amount Due & Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Amount Due ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={amountDue}
                  onChange={(e) => setAmountDue(e.target.value ? parseFloat(e.target.value) : '')}
                  placeholder="0.00"
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">
                  Details / Notes
                </label>
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder="Additional instructions or notes for driver..."
                  className="h-10 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63] outline-none focus:border-[#2b3b63]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4 pt-4 border-t border-[#e0e0e0] flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 border border-[#d8dadf] rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578] hover:bg-[#f3f4f6]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#ff7048] text-white rounded-lg font-['Proxima_Nova:Bold',sans-serif] text-[14px] hover:bg-[#e05b35] transition-colors"
              >
                {initialData ? 'Save Changes' : 'Create Work Order'}
              </button>
            </div>

          </form>
        </div>
      </div>

      <LinkPickerModal
        type={linkPickerType}
        isOpen={linkPickerOpen}
        onClose={() => setLinkPickerOpen(false)}
        onSelectContract={handleSelectContract}
        onSelectInventory={handleSelectInventory}
      />
    </>
  );
}
