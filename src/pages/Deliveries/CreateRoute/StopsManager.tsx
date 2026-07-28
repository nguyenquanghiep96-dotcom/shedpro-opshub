import React, { useState, useRef, useEffect } from 'react';
import imgAvatar from "./87b552f8867f96fa4d2ca833ef943c5aa1ab172b.png";

// =======================
// MOCK DATA
// =======================
export interface Contract {
  id: string;
  customerName: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  thumbnail: string;
}

const mockContracts: Contract[] = [
  {
    id: "2-24756",
    customerName: "Dennis Sartain",
    description: "Storage Building - 36' W x 36' L x 8' H - ShedPro MFR",
    address: "202 Delivery Rd",
    city: "Dallas",
    state: "TX",
    zip: "75204",
    phone: "(842)-028-8849",
    thumbnail: imgAvatar
  },
  {
    id: "2-24757",
    customerName: "Alice Wonderland",
    description: "Custom Shed - 10' W x 12' L x 8' H",
    address: "101 Maple St",
    city: "Austin",
    state: "TX",
    zip: "73301",
    phone: "(512)-555-1234",
    thumbnail: imgAvatar
  },
  {
    id: "3-10023",
    customerName: "Bob Builder",
    description: "Barn - 40' W x 60' L x 14' H",
    address: "500 Farm Rd",
    city: "Waco",
    state: "TX",
    zip: "76701",
    phone: "(254)-555-9876",
    thumbnail: imgAvatar
  },
  {
    id: "4-55555",
    customerName: "Charlie Chaplin",
    description: "Garage - 24' W x 24' L x 9' H",
    address: "777 Cinema Ln",
    city: "Houston",
    state: "TX",
    zip: "77001",
    phone: "(713)-555-5555",
    thumbnail: imgAvatar
  },
  {
    id: "5-99999",
    customerName: "Diana Prince",
    description: "Greenhouse - 12' W x 16' L x 8' H",
    address: "888 Amazon Way",
    city: "San Antonio",
    state: "TX",
    zip: "78201",
    phone: "(210)-555-8888",
    thumbnail: imgAvatar
  }
];

export interface Stop {
  id: string;
  isExpanded: boolean;
  stopType: string;
  deliveryName: string;
  address1: string;
  city: string;
  state: string;
  zipCode: string;
  contractId: string | null;
  note: string;
  isAutofilled: boolean; // Tracks if address matches the autofilled contract
}

// =======================
// ICONS
// =======================
const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 4.5 6 7.5 9 4.5"></polyline>
  </svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#959db1]">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff7048" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// =======================
// COMPONENTS
// =======================
function ContractCard({ contract, onRemove }: { contract: Contract, onRemove: () => void }) {
  return (
    <div className="bg-[#f8f9fa] border border-[#d8dadf] rounded-[8px] p-[16px] relative flex gap-[16px] mt-[12px] w-full items-start">
      <div className="absolute top-[12px] right-[12px] cursor-pointer text-[#959db1] hover:text-[#5e6578]" onClick={onRemove}>
        <CloseIcon />
      </div>
      <div className="w-[80px] h-[60px] rounded-[6px] overflow-hidden shrink-0 border border-[#d8dadf]">
        <img src={contract.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-[4px] flex-1">
        <div className="flex items-center gap-[8px]">
          <span className="text-[#ff7048] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] flex items-center gap-[4px]">
            #{contract.id} <ExternalLinkIcon />
          </span>
          <span className="text-[#2b3b63] font-['Proxima_Nova:Bold',sans-serif] text-[14px]">{contract.customerName}</span>
        </div>
        <span className="text-[#5e6578] font-['Proxima_Nova:Regular',sans-serif] text-[13px]">{contract.description}</span>
        
        <div className="flex items-end justify-between mt-[8px]">
          <div className="flex flex-col gap-[2px]">
            <span className="text-[#5e6578] font-['Proxima_Nova:Regular',sans-serif] text-[13px]">{contract.address}, {contract.city} {contract.state}</span>
            <span className="text-[#22c55e] font-['Proxima_Nova:Semibold',sans-serif] text-[12px] flex items-center gap-[4px]">
              <CheckIcon /> Address auto-filled from contract
            </span>
          </div>
          <span className="text-[#ff7048] font-['Proxima_Nova:Semibold',sans-serif] text-[13px] flex items-center gap-[6px]">
            <PhoneIcon /> {contract.phone}
          </span>
        </div>
      </div>
    </div>
  );
}

function StopAccordion({ stop, index, updateStop, removeStop }: { stop: Stop, index: number, updateStop: (id: string, updates: Partial<Stop>) => void, removeStop: (id: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedContract = mockContracts.find(c => c.id === stop.contractId);

  const handleContractSelect = (contract: Contract) => {
    updateStop(stop.id, {
      contractId: contract.id,
      address1: contract.address,
      city: contract.city,
      state: contract.state,
      zipCode: contract.zip,
      isAutofilled: true
    });
    setSearchQuery("");
    setIsDropdownOpen(false);
  };

  const handleAddressChange = (field: keyof Stop, value: string) => {
    updateStop(stop.id, {
      [field]: value,
      // If they manually edit an autofilled address, we drop the autofilled green badge
      isAutofilled: false 
    });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredContracts = mockContracts.filter(c => 
    c.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full border border-[#d8dadf] rounded-[8px] bg-white overflow-hidden transition-all duration-300">
      {/* Header */}
      <div 
        className="flex items-center gap-[12px] p-[16px] cursor-pointer hover:bg-[#f8f9fa] select-none"
        onClick={() => updateStop(stop.id, { isExpanded: !stop.isExpanded })}
      >
        <div className="w-[24px] h-[24px] rounded-full bg-[#2b3b63] text-white flex items-center justify-center font-['Proxima_Nova:Bold',sans-serif] text-[12px] shrink-0">
          {index + 1}
        </div>
        <div className="flex-1 flex items-center gap-[12px] truncate">
          <span className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#2b3b63] truncate">
            {stop.address1 ? `${stop.address1}, ${stop.city}, ${stop.state} ${stop.zipCode}` : "New Stop"}
          </span>
          <span className="bg-[#e8e9ec] px-[8px] py-[2px] rounded-[4px] font-['Proxima_Nova:Semibold',sans-serif] text-[#5e6578] text-[12px]">
            {stop.stopType}
          </span>
          {selectedContract && (
            <span className="bg-[#fff0eb] text-[#ff7048] px-[8px] py-[2px] rounded-[4px] font-['Proxima_Nova:Semibold',sans-serif] text-[12px] flex items-center gap-[4px]">
              Repo #{selectedContract.id} <ExternalLinkIcon />
            </span>
          )}
        </div>
        <div className="text-[#959db1] hover:text-[#f41e1e] p-[4px]" onClick={(e) => { e.stopPropagation(); removeStop(stop.id); }}>
          <CloseIcon />
        </div>
      </div>

      {/* Body */}
      <div className={`overflow-hidden transition-all duration-300 ${stop.isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-[16px] border-t border-[#d8dadf] flex flex-col gap-[20px]">
          
          <div className="flex gap-[16px]">
            <div className="flex-1 flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Stop Type *</label>
              <div className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] flex items-center justify-between">
                <span className="font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578]">{stop.stopType}</span>
                <ChevronDownIcon />
              </div>
            </div>
            <div className="flex-1" />
          </div>

          <div className="flex gap-[16px]">
            <div className="flex-1 flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Delivery Name *</label>
              <input 
                type="text" 
                value={stop.deliveryName}
                onChange={(e) => updateStop(stop.id, { deliveryName: e.target.value })}
                placeholder="Delivery"
                className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Delivery Address 1 *</label>
              <input 
                type="text" 
                value={stop.address1}
                onChange={(e) => handleAddressChange('address1', e.target.value)}
                className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
              />
            </div>
          </div>

          <div className="flex gap-[16px]">
            <div className="flex-[2] flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">City *</label>
              <input 
                type="text" 
                value={stop.city}
                onChange={(e) => handleAddressChange('city', e.target.value)}
                className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">State *</label>
              <input 
                type="text" 
                value={stop.state}
                onChange={(e) => handleAddressChange('state', e.target.value)}
                className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
              />
            </div>
            <div className="flex-1 flex flex-col gap-[6px]">
              <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Zip Code *</label>
              <input 
                type="text" 
                value={stop.zipCode}
                onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                className="h-[40px] border border-[#d8dadf] rounded-[6px] px-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
              />
            </div>
          </div>

          {/* Linked Item */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Linked Item</label>
            <div className="bg-[#2b3b63] text-white rounded-full px-[16px] py-[6px] inline-flex items-center justify-center font-['Proxima_Nova:Semibold',sans-serif] text-[12px] w-max">
              Contract
            </div>
            
            <div className="relative" ref={dropdownRef}>
              <div className="flex flex-col gap-[6px]">
                <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Search Contract</label>
                <div className="relative">
                  <div className="absolute left-[12px] top-[12px]">
                    <SearchIcon />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search by ID or Name..."
                    value={selectedContract ? `${selectedContract.id} - ${selectedContract.customerName}` : searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsDropdownOpen(true);
                      if (selectedContract) {
                         // Clear selection if typing
                         updateStop(stop.id, { contractId: null });
                      }
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    className="w-full h-[40px] border border-[#d8dadf] rounded-[6px] pl-[36px] pr-[12px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63]" 
                  />
                </div>
              </div>

              {/* Dropdown Results */}
              {isDropdownOpen && !selectedContract && (
                <div className="absolute z-10 w-full mt-[4px] bg-white border border-[#d8dadf] rounded-[6px] shadow-lg max-h-[200px] overflow-y-auto">
                  {filteredContracts.length > 0 ? filteredContracts.map(c => (
                    <div 
                      key={c.id} 
                      className="px-[16px] py-[10px] hover:bg-[#f8f9fa] cursor-pointer flex flex-col gap-[2px] border-b border-[#f0f0f0] last:border-0"
                      onClick={() => handleContractSelect(c)}
                    >
                      <span className="font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#2b3b63]">
                        {c.id} - {c.customerName}
                      </span>
                      <span className="font-['Proxima_Nova:Regular',sans-serif] text-[12px] text-[#959db1]">
                        {c.description}
                      </span>
                    </div>
                  )) : (
                    <div className="px-[16px] py-[10px] font-['Proxima_Nova:Regular',sans-serif] text-[14px] text-[#959db1]">
                      No contracts found.
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Selected Contract Card */}
            {selectedContract && (
              <>
                <ContractCard 
                  contract={selectedContract} 
                  onRemove={() => updateStop(stop.id, { contractId: null })} 
                />
                {!stop.isAutofilled && (
                  <div className="text-[#f41e1e] font-['Proxima_Nova:Regular',sans-serif] text-[12px] mt-[4px]">
                    * Note: Address was manually modified after auto-fill.
                  </div>
                )}
              </>
            )}

          </div>

          <div className="flex flex-col gap-[6px]">
            <label className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#5e6578]">Stop Note</label>
            <textarea 
              value={stop.note}
              onChange={(e) => updateStop(stop.id, { note: e.target.value })}
              placeholder="Optional notes visible to driver."
              className="min-h-[80px] p-[12px] border border-[#d8dadf] rounded-[6px] font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] outline-none focus:border-[#2b3b63] resize-y"
            ></textarea>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function StopsManager() {
  const [stops, setStops] = useState<Stop[]>([]);

  const handleAddStop = () => {
    const newStop: Stop = {
      id: Math.random().toString(36).substr(2, 9),
      isExpanded: true,
      stopType: "Delivery",
      deliveryName: "",
      address1: "",
      city: "",
      state: "",
      zipCode: "",
      contractId: null,
      note: "",
      isAutofilled: false
    };
    // Collapse all other stops
    const updatedStops = stops.map(s => ({ ...s, isExpanded: false }));
    setStops([...updatedStops, newStop]);
  };

  const updateStop = (id: string, updates: Partial<Stop>) => {
    setStops(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const removeStop = (id: string) => {
    setStops(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="w-full shrink-0 flex flex-col gap-[16px] mb-[48px]">
      <div className="flex items-center justify-between w-full pb-[12px] border-b border-[#e0e0e0]">
        <h3 className="font-['Proxima_Nova:Bold',sans-serif] text-[16px] text-[#5e6578]">
          Stops {stops.length > 0 && `(${stops.length})`}
        </h3>
        <button 
          onClick={handleAddStop}
          className="font-['Proxima_Nova:Bold',sans-serif] text-[14px] text-[#ff7048] flex items-center gap-[4px] hover:opacity-80"
        >
          <span className="text-[18px] leading-none mb-[2px]">+</span> Add Stop
        </button>
      </div>

      <div className="flex flex-col gap-[16px] w-full">
        {stops.length === 0 ? (
          <div className="bg-[#f5f5f5] w-full rounded-[10px] p-[24px] border border-[#f5f5f5] flex flex-col items-center justify-center text-center">
            <p className="font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578] mb-0">No stops added yet.</p>
            <p className="font-['Proxima_Nova:Semibold',sans-serif] text-[14px] text-[#5e6578]">Click "+ Add Stop" to begin building your route.</p>
          </div>
        ) : (
          stops.map((stop, index) => (
            <StopAccordion 
              key={stop.id} 
              stop={stop} 
              index={index} 
              updateStop={updateStop} 
              removeStop={removeStop} 
            />
          ))
        )}
      </div>
    </div>
  );
}
