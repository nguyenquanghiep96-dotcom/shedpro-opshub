import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Btn, IconBtn, Icons, StatusBadge, FilterTabGroup, type FilterTab } from './ui';
import svgPaths from "./svg-er6yqlh6e7";
import { MOCK_ROUTES } from './transportationData';

// Shared components that we need to duplicate to avoid cross-file dependency hell for a simple demo
function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d={svgPaths.p2532e980} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p63c3100} fill="var(--fill-0, #5E6578)" id="Vector_2" />
          <path d={svgPaths.p2e34de80} fill="var(--fill-0, #5E6578)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Group">
          <path d={svgPaths.p32ab1080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

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

function ButtonsContainer() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-auto" data-name="Buttons Container">
      <Btn variant="primary" icon={Icons.Add} onClick={() => navigate('/deliveries/routes/create')}>
        New Route
      </Btn>
    </div>
  );
}

function SortSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full md:w-auto flex-1 md:flex-none flex-wrap" data-name="Sort Section">
      <Btn variant="outline" icon={Icons.Filter}>
        Advanced Search
      </Btn>
    </div>
  );
}

const ROUTES_FILTER_TABS: FilterTab[] = [
  { label: 'All Routes', value: 'all', count: 10 },
  { label: 'Draft', value: 'draft', count: 2 },
  { label: 'Scheduled', value: 'scheduled', count: 4 },
  { label: 'En Route', value: 'en-route', count: 2 },
  { label: 'Completed', value: 'completed', count: 2 },
];

function Tag() {
  const [activeTab, setActiveTab] = useState('all');
  return (
    <FilterTabGroup
      tabs={ROUTES_FILTER_TABS}
      active={activeTab}
      onChange={setActiveTab}
    />
  );
}

function RoutesActionBar() {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full ">
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex items-center flex-wrap gap-y-4 relative shrink-0 w-full" data-name="Actions">
          <ButtonsContainer />
          <Tag />
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full md:w-auto flex-1 md:flex-none flex-wrap">
            <div className="bg-white content-stretch flex items-center px-[10px] py-[6px] relative rounded-[4px] shrink-0 w-[80px]">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px not-italic relative text-[#787e90] text-[12px] whitespace-nowrap">
                <p className="leading-[normal]">2026</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <div className="relative size-full">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
                        <g>
                          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <SortSection />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoutesTableHeader() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header Row" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <Checkbox />
      
      {/* Route */}
      <div className="content-stretch flex gap-[10px] items-end justify-end px-[10px] py-[12px] relative shrink-0 w-[140px]">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold h-full justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
          <p className="leading-[normal]">Route</p>
        </div>
        <ArrowDown />
      </div>
      
      {/* Route Name */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Assignee</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Driver */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Work Orders</p>
          </div>
          <ArrowDown />
        </div>
      </div>

      {/* Stops */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Stops</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Stop Type */}
      <div className="flex flex-[1.5_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Distance</p>
          </div>
          <ArrowDown />
        </div>
      </div>

      {/* Schedule */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Scheduled Date</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Owner */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Dispatched</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Status */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Status</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      <div className="h-full relative shrink-0 w-[80px]" />
    </div>
  );
}

type RouteItemProps = {
  id: string;
  assignee: string;
  workOrders: number;
  stops: number;
  distance: string;
  scheduledDate: string;
  dispatched: string;
  status: string;
};

const ROUTE_STATUS_STYLES: Record<string, {text: string; bg: string}> = {
  'Draft': { text: '#6B7280', bg: '#F3F4F6' },
  'Scheduled': { text: '#2563EB', bg: '#EFF6FF' },
  'En Route': { text: '#D97706', bg: '#FFFBEB' },
  'Completed': { text: '#16A34A', bg: '#F0FDF4' },
};

function RoutesTableItem({ id, assignee, workOrders, stops, distance, scheduledDate, dispatched, status }: RouteItemProps) {
  const navigate = useNavigate();
  const statusStyle = ROUTE_STATUS_STYLES[status] || { text: '#6B7280', bg: '#F3F4F6' };
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Checkbox />
      
      {/* Route */}
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative shrink-0 w-[140px]">
        <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{id}</p>
      </div>
      
      {/* Route Name */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{assignee}</p>
        </div>
      </div>
      
      {/* Driver */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{workOrders}</p>
        </div>
      </div>

      {/* Stops */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{stops}</p>
        </div>
      </div>
      
      {/* Stop Type */}
      <div className="flex flex-[1.5_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-wrap gap-[12px] items-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal] whitespace-nowrap">{distance}</p>
          <div className="flex gap-[3px] flex-row items-center">
            <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#C0C4CC]" />
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{scheduledDate}</p>
        </div>
      </div>
      
      {/* Owner */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">{dispatched}</p>
        </div>
      </div>
      
      {/* Status */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <StatusBadge status={status} />
        </div>
      </div>
      
      <div className="content-stretch flex gap-[4px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[80px]">
        <div onClick={() => navigate(`/deliveries/routes/${id}/edit`)} className="cursor-pointer bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 hover:bg-[#f5f5f5] transition-colors"><svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 2a2.121 2.121 0 0 1 3 3L5.667 13.667l-4 1 1-4L11.333 2z" stroke="#2B3B63" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
        <div className="cursor-pointer bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 hover:bg-[#f5f5f5] transition-colors"><svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5.333 4V2.667A1.333 1.333 0 0 1 6.667 1.333h2.666A1.333 1.333 0 0 1 10.667 2.667V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334z" stroke="#2B3B63" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
      </div>
    </div>
  );
}

function RoutesTitleSection({
  totalItems,
  currentPage,
  totalPages,
  setCurrentPage
}: {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="bg-white content-stretch flex items-center justify-between flex-wrap gap-y-4 py-[16px] relative shrink-0 w-full" data-name="Table Header">
      <div className="content-stretch flex gap-[10px] items-center pl-[10px] relative shrink-0 w-full lg:w-auto flex-1">
        <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3b63] text-[32px] whitespace-nowrap">
          <p className="leading-[normal]">Routes</p>
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

export default function RoutesContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  const filteredRoutes = MOCK_ROUTES;
  const totalPages = Math.ceil(filteredRoutes.length / itemsPerPage) || 1;
  const paginatedRoutes = filteredRoutes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="Routes Container">
      <RoutesActionBar />
      <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative rounded-[10px] shrink-0 w-full">
        <RoutesTitleSection 
          totalItems={filteredRoutes.length}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Routes Table" style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "100%" }}>
          <RoutesTableHeader />
          {paginatedRoutes.length === 0 ? (
            <div className="w-full text-center py-12 text-[#5e6578]">No routes found.</div>
          ) : (
            paginatedRoutes.map((route) => (
              <RoutesTableItem key={route.id} {...route} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

