import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Btn, Icons, StatusBadge, FilterTabGroup, TypeBadge, Input, Select, Textarea, FormLabel, type FilterTab } from './ui';
import {
  WorkOrder,
  WOType,
  WOStatus,
  WO_TYPE_OPTIONS,
  ASSIGNEE_OPTIONS,
  isMoveType,
  resolveAddress
} from './transportationData';
import { useTransportation } from './TransportationContext';
import svgPaths from "./svg-er6yqlh6e7";

/* ─── Shed thumbnail images ─────────────────────────────────── */
const SHED_THUMBS = [
  '/images/img_7d08a5bc.png',
  '/images/img_0335ef59.png',
  '/images/img_088ee007.png',
  '/images/img_345c6647.png',
  '/images/img_56f0a94c.png',
  '/images/img_9235fc9d.png',
  '/images/img_d5e1e80a.png',
  '/images/img_d8d013f4.png',
  '/images/img_e6371094.png',
  '/images/img_e6e8ba55.png',
  '/images/img_f3eef0f2.png',
  '/images/img_c71c0a0c.png',
  '/images/img_d6d8ab05.png',
  '/images/img_fc41163f.png',
  '/images/img_b6fff652.png',
  '/images/img_f4eb988f.png',
  '/images/img_860d4085.png',
  '/images/img_a3e8c3ee.png',
  '/images/img_7f2e7b17.png',
  '/images/img_2063d903.png',
];
function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

/* ─── Shared Figma primitives (same as RoutesContainer) ────── */

function Checkbox() {
  return (
    <div className="h-full relative shrink-0 w-[58px]" data-name="Checkbox">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="Selections Icon">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[31.13%] flex items-center justify-center left-1/4 right-[24.88%] top-[18.75%]" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[hypot(-61.6715cqw,61.6715cqh)] rotate-45 w-[hypot(-38.3285cqw,-38.3285cqh)]">
                  <div className="relative size-full" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.89062 7.86914">
                      <path d={svgPaths.p1af9e080} fill="var(--fill-0, white)" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#5e6578] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
      <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="01 align center">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
              <g id="01 align center">
                <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const FilePlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V12" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15H15" stroke="#787E90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Action Bar ────────────────────────────────────────────── */

function WOActionBar({ filterTabs, activeFilter, onFilterChange, onAddNew }: {
  filterTabs: FilterTab[];
  activeFilter: string;
  onFilterChange: (v: string) => void;
  onAddNew: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full ">
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex items-center flex-wrap gap-y-4 relative shrink-0 w-full" data-name="Actions">
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-auto" data-name="Buttons Container">
            <Btn variant="primary" icon={Icons.Add} onClick={onAddNew} className="whitespace-nowrap">
              Add Work Order
            </Btn>
          </div>
          <FilterTabGroup
            tabs={filterTabs}
            active={activeFilter}
            onChange={onFilterChange}
          />
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full md:w-auto flex-1 md:flex-none flex-wrap">
            <Btn variant="secondary" icon={Icons.Filter}>
              Advanced Search
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Table Header ──────────────────────────────────────────── */

const WO_COLUMNS = [
  { label: 'ID',        flex: 'shrink-0 w-[100px]' },
  { label: 'Type',      flex: 'flex-[1_0_0]' },
  { label: 'Customer',  flex: 'flex-[1_0_0]' },
  { label: 'Building',  flex: 'flex-[1.5_0_0]' },
  { label: 'Stops',     flex: 'flex-[2.5_0_0]' },
  { label: 'Status',    flex: 'flex-[1_0_0]' },
  { label: 'Route',     flex: 'flex-[0.8_0_0]' },
  { label: 'Assignee',  flex: 'flex-[1_0_0]' },
];

function WOTableHeader() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header Row" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <Checkbox />
      {WO_COLUMNS.map(col => (
        <div key={col.label} className={`${col.flex} flex flex-row items-center self-stretch`}>
          <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
              <p className="leading-[normal]">{col.label}</p>
            </div>
            <ArrowDown />
          </div>
        </div>
      ))}
      <div className="h-full relative shrink-0 w-[80px]" />
    </div>
  );
}

/* ─── Table Row ─────────────────────────────────────────────── */

function WOTableItem({ wo, onEdit, onDelete }: { wo: WorkOrder; onEdit: () => void; onDelete: () => void }) {
  // Build stops text from pickup/dropoff/visit addresses
  const stops: string[] = [];
  if (wo.pickup) stops.push(wo.pickup);
  if (wo.dropoff) stops.push(wo.dropoff);
  if (wo.visit) stops.push(wo.visit);

  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Checkbox />

      {/* ID */}
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative shrink-0 w-[100px]">
        <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{wo.id}</p>
      </div>

      {/* Type */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <TypeBadge type={wo.type} />
        </div>
      </div>

      {/* Customer */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-semibold text-[#5e6578] text-[14px] leading-[normal]">{wo.customer}</p>
          <p className="font-sans font-normal text-[#787e90] text-[12px] leading-[normal]">{wo.phone || '\u2014'}</p>
        </div>
      </div>

      {/* Building — thumbnail + name + serial */}
      <div className="flex flex-[1.5_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={SHED_THUMBS[Math.abs(hashCode(wo.id)) % SHED_THUMBS.length]} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="font-sans font-semibold text-[#5e6578] text-[14px] leading-[normal] truncate">{wo.buildingType || '\u2014'}{wo.buildingSize ? ` ${wo.buildingSize}` : ''}</p>
            <p className="font-sans font-normal text-[#787e90] text-[12px] leading-[normal]">{wo.serial || '\u2014'}</p>
          </div>
        </div>
      </div>

      {/* Stops — Pickup + dots + Dropoff */}
      <div className="flex flex-[2.5_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-0 items-start justify-center px-[10px] py-[12px] relative size-full">
          {wo.pickup ? (
            <div className="flex items-start gap-[6px] w-full">
              <div className="w-[6px] h-[6px] rounded-full bg-[#2B3B63] shrink-0 mt-[6px]" />
              <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">
                <span className="font-bold text-[#2B3B63]">Pickup: </span>
                {resolveAddress(wo.pickup)}
              </p>
            </div>
          ) : null}
          {wo.pickup && wo.dropoff ? (
            <div className="flex flex-col gap-[2px] items-center py-[2px]" style={{ width: '6px' }}>
              <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
              <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
              <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
            </div>
          ) : null}
          {wo.dropoff ? (
            <div className="flex items-start gap-[6px] w-full">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ff7048] shrink-0 mt-[6px]" />
              <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">
                <span className="font-bold text-[#ff7048]">Dropoff: </span>
                {resolveAddress(wo.dropoff)}
              </p>
            </div>
          ) : null}
          {wo.visit ? (
            <div className="flex items-start gap-[6px] w-full">
              <span className="material-symbols-rounded shrink-0 text-[#16a34a]" style={{ fontSize: '16px', lineHeight: '20px' }}>stop_circle</span>
              <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">
                <span className="font-bold text-[#16a34a]">Visit: </span>
                {resolveAddress(wo.visit)}
              </p>
            </div>
          ) : null}
          {!wo.pickup && !wo.dropoff && !wo.visit && (
            <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">\u2014</p>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <StatusBadge status={wo.status} />
        </div>
      </div>

      {/* Route — bold orange */}
      <div className="flex flex-[0.8_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className={`font-sans text-[14px] leading-[normal] ${wo.route ? 'font-semibold text-[#ff7048]' : 'font-normal text-[#5e6578]'}`}>{wo.route || '\u2014'}</p>
        </div>
      </div>

      {/* Assignee */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{wo.assignee || '\u2014'}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="content-stretch flex gap-[4px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[80px]">
        <div onClick={onEdit} className="cursor-pointer bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 hover:bg-[#f5f5f5] transition-colors"><svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 2a2.121 2.121 0 0 1 3 3L5.667 13.667l-4 1 1-4L11.333 2z" stroke="#2B3B63" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
        <div onClick={onDelete} className="cursor-pointer bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 hover:bg-[#f5f5f5] transition-colors"><svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5.333 4V2.667A1.333 1.333 0 0 1 6.667 1.333h2.666A1.333 1.333 0 0 1 10.667 2.667V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334z" stroke="#2B3B63" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
      </div>
    </div>
  );
}

/* ─── Title Section ─────────────────────────────────────────── */

function WOTitleSection({ totalItems, currentPage, totalPages, setCurrentPage }: {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="bg-white content-stretch flex items-center justify-between flex-wrap gap-y-4 py-[16px] relative shrink-0 w-full" data-name="Table Header">
      <div className="content-stretch flex gap-[10px] items-center pl-[10px] relative shrink-0 w-full lg:w-auto flex-1">
        <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3b63] text-[32px] whitespace-nowrap">
          <p className="leading-[normal]">Work Orders</p>
        </div>
        <div className="bg-[#2b3b63] content-stretch flex flex-col items-center justify-center min-w-[30px] px-[6px] py-[4px] relative rounded-[6px] shrink-0">
          <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">{totalItems}</p>
          </div>
        </div>
      </div>

      <div className="content-stretch flex gap-[42px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <p className="font-sans font-normal text-[#787e90] text-[14px] leading-[normal]">Page {currentPage} of {totalPages}</p>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Page Control Group">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer disabled:opacity-50 hover:bg-gray-50"
            >
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center rotate-90">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer disabled:opacity-50 hover:bg-gray-50"
            >
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center -rotate-90">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Container ────────────────────────────────────────── */

import { LinkContractModal, LinkInventoryModal } from './LinkModals';
import type { ContractInfo, InventoryInfo } from './LinkModals';

type WOType = 'Delivery' | 'Return' | 'Move';
type WOStatus = 'Open' | 'Scheduled' | 'En Route' | 'Completed' | 'Delayed' | 'Draft'; 

export default function WorkOrdersContainer() {
  const navigate = useNavigate();
  const { workOrders, deleteWorkOrder } = useTransportation();
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('All');
  
  const [deletingWOId, setDeletingWOId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const counts = useMemo(() => ({
    All: workOrders.length,
    Open: workOrders.filter(w => w.status === 'Open').length,
    Scheduled: workOrders.filter(w => w.status === 'Scheduled').length,
    Completed: workOrders.filter(w => w.status === 'Completed').length,
  }), [workOrders]);

  const filteredWO = useMemo(() => {
    if (filterStatus === 'All') return workOrders;
    return workOrders.filter(wo => wo.status === filterStatus);
  }, [workOrders, filterStatus]);

  useEffect(() => { setCurrentPage(1); }, [filterStatus]);

  const totalPages = Math.ceil(filteredWO.length / itemsPerPage) || 1;
  const paginatedWO = filteredWO.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const confirmDelete = (id: string) => setDeletingWOId(id);
  const handleDelete = () => { if (deletingWOId) { deleteWorkOrder(deletingWOId); setDeletingWOId(null); } };
  const handleEdit = (wo: WorkOrder) => navigate(`/transportation/workorders/${wo.id}/edit`);
  const handleCreate = () => navigate('/transportation/workorders/create');

  const woFilterTabs: FilterTab[] = [
    { label: 'All', value: 'All', count: counts.All },
    { label: 'Open', value: 'Open', count: counts.Open },
    { label: 'Scheduled', value: 'Scheduled', count: counts.Scheduled },
    { label: 'Completed', value: 'Completed', count: counts.Completed },
  ];

  return (
    <div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="WO Container">
      <WOActionBar
        filterTabs={woFilterTabs}
        activeFilter={filterStatus}
        onFilterChange={(v) => setFilterStatus(v as FilterStatus)}
        onAddNew={handleCreate}
      />
      <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative rounded-[10px] shrink-0 w-full">
        <WOTitleSection
          totalItems={filteredWO.length}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="WO Table" style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "100%" }}>
          <WOTableHeader />
          {paginatedWO.length === 0 ? (
            <div className="w-full text-center py-12 text-[#5e6578]">No work orders found.</div>
          ) : (
            paginatedWO.map((wo) => (
              <WOTableItem
                key={wo.id}
                wo={wo}
                onEdit={() => navigate(`/transportation/workorders/${wo.id}/edit`)}
                onDelete={() => confirmDelete(wo.id)}
              />
            ))
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deletingWOId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#2b3b63] text-[20px] font-bold mb-2">Delete Work Order?</h3>
            <p className="text-[#5e6578] text-[14px] mb-6">
              Are you sure you want to delete {deletingWOId}? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Btn variant="outline" onClick={() => setDeletingWOId(null)}>Cancel</Btn>
              <Btn variant="danger" onClick={handleDelete}>Delete</Btn>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
