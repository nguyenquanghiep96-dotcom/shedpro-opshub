import React from 'react';
import svgPaths from "./svg-er6yqlh6e7";

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

function OpenIcon() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <div className="absolute inset-[8.33%]" data-name="Layer_1">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <g clipPath="url(#clip0_1_1888)" id="Layer_1">
                <path d={svgPaths.p103de100} fill="var(--fill-0, #2B3B63)" id="Vector" />
                <path d={svgPaths.p39da900} fill="var(--fill-0, #2B3B63)" id="Vector_2" />
              </g>
              <defs>
                <clipPath id="clip0_1_1888">
                  <rect fill="white" height="13.3333" width="13.3333" />
                </clipPath>
              </defs>
            </svg>
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
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-auto" data-name="Buttons Container">
      <div className="bg-[#ff7048] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shrink-0" data-name="Button/Filled">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Add new - Outline">
          <Group />
        </div>
        <div className="[word-break:break-word] capitalize flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">Add New</p>
        </div>
      </div>
    </div>
  );
}

function SortSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full md:w-auto flex-1 md:flex-none flex-wrap" data-name="Sort Section">
      <div className="bg-[#eaecf0] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[4px] shrink-0" data-name="Button/Filled">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Search - Outline">
          <Group1 />
        </div>
        <div className="[word-break:break-word] capitalize flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Advanced Search</p>
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[12px] items-center justify-center min-w-px relative" data-name="Tag">
      <button className="bg-[#5e6578] content-stretch cursor-pointer flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">All Routes (5)</p>
        </div>
      </button>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#787e90] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Planned (0)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ddd] border-solid inset-0 pointer-events-none rounded-[34px] border-[0.5px]" />
      </div>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#787e90] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">En Route (0)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ddd] border-solid inset-0 pointer-events-none rounded-[34px] border-[0.5px]" />
      </div>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#787e90] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Completed (1)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ddd] border-solid inset-0 pointer-events-none rounded-[34px] border-[0.5px]" />
      </div>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#787e90] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Draft (1)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#ddd] border-solid inset-0 pointer-events-none rounded-[34px] border-[0.5px]" />
      </div>
    </div>
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
            <p className="leading-[normal]">Route Name</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Driver */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Driver</p>
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
            <p className="leading-[normal]">Stop Type</p>
          </div>
          <ArrowDown />
        </div>
      </div>

      {/* Schedule */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Schedule</p>
          </div>
          <ArrowDown />
        </div>
      </div>
      
      {/* Owner */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
            <p className="leading-[normal]">Owner</p>
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
      
      <div className="h-full relative shrink-0 w-[60px]" />
    </div>
  );
}

function RoutesTableItem({ id }: { id: string }) {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Checkbox />
      
      {/* Route */}
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative shrink-0 w-[140px]">
        <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">#{id}</p>
      </div>
      
      {/* Route Name */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">Fort Worth</p>
        </div>
      </div>
      
      {/* Driver */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">Hiep Nguyen</p>
        </div>
      </div>

      {/* Stops */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-bold text-[#2b3b63] text-[14px] leading-[normal]">5 stops</p>
          <p className="font-sans font-normal text-[#787e90] text-[12px] leading-[normal]">Done 2/5</p>
        </div>
      </div>
      
      {/* Stop Type */}
      <div className="flex flex-[1.5_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-wrap gap-[6px] items-center px-[10px] py-[12px] relative size-full">
          <div className="bg-[#e2e2e2] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#5e6578] whitespace-nowrap">Delivery Items</p>
          </div>
          <div className="bg-[#e2e2e2] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#5e6578] whitespace-nowrap">Repo</p>
          </div>
          <div className="bg-[#e2e2e2] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#5e6578] whitespace-nowrap">Repair</p>
          </div>
          <div className="bg-[#e2e2e2] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#5e6578] whitespace-nowrap">Lot Transfer</p>
          </div>
          <div className="bg-[#e2e2e2] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#5e6578] whitespace-nowrap">+1</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">04/16/2026</p>
        </div>
      </div>
      
      {/* Owner */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <p className="font-sans font-normal text-[#5e6578] text-[14px] leading-[normal]">ShedPro MFR</p>
        </div>
      </div>
      
      {/* Status */}
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
            <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Planned</p>
          </div>
        </div>
      </div>
      
      <OpenIcon />
    </div>
  );
}

function RoutesTitleSection() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between flex-wrap gap-y-4 py-[16px] relative shrink-0 w-full" data-name="Table Header">
      <div className="content-stretch flex gap-[10px] items-center pl-[10px] relative shrink-0 w-full lg:w-auto flex-1">
        <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3b63] text-[32px] whitespace-nowrap">
          <p className="leading-[normal]">Routes</p>
        </div>
        <div className="bg-[#2b3b63] content-stretch flex flex-col items-center justify-center min-w-[30px] px-[6px] py-[4px] relative rounded-[6px] shrink-0">
          <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">5</p>
          </div>
        </div>
      </div>
      
      <div className="content-stretch flex gap-[42px] items-center relative shrink-0">
        <div className="bg-white relative rounded-[4px] shrink-0">
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[0.06%_8.33%_-0.06%_8.33%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.0007">
                  <path d="M8 4.66733V0.306667C8.60867 0.537333 9.16867 0.892667 9.64333 1.36667L11.966 3.69067C12.4407 4.16467 12.796 4.72467 13.0267 5.33333H8.66667C8.29867 5.33333 8 5.03467 8 4.66733ZM13.3173 6.66733H8.66667C7.564 6.66733 6.66667 5.77 6.66667 4.66733V0.016C6.55933 0.00866667 6.452 0 6.34333 0H3.33333C1.49533 0.000666667 0 1.496 0 3.334V12.6673C0 14.5053 1.49533 16.0007 3.33333 16.0007H10C11.838 16.0007 13.3333 14.5053 13.3333 12.6673V6.99067C13.3333 6.882 13.3247 6.77467 13.3173 6.66733ZM9.138 12.338L8.06267 13.414C7.678 13.7987 7.172 13.9913 6.66667 13.9913C6.16133 13.9913 5.65533 13.7987 5.27067 13.414L4.19533 12.338C3.93467 12.0773 3.93467 11.6553 4.19533 11.3953C4.456 11.1347 4.87733 11.1347 5.138 11.3953L6 12.2573V9.32533C6 8.95733 6.298 8.65867 6.66667 8.65867C7.03533 8.65867 7.33333 8.95733 7.33333 9.32533V12.2573L8.19533 11.3953C8.456 11.1347 8.87733 11.1347 9.138 11.3953C9.39867 11.6553 9.39867 12.0773 9.138 12.338Z" fill="var(--fill-0, #5E6578)" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#5e6578] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <p className="font-sans font-normal text-[#787e90] text-[14px] leading-[normal]">Page 1 of 5</p>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Page Control Group">
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Button/Single">
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center rotate-90" data-name="Icon / Interface / Arrow-Left-Bold">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Button/Single">
              <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center -rotate-90" data-name="Icon / Interface / Arrow-Right-Bold">
                <svg className="block w-[13.33px] h-[8px]" fill="none" viewBox="0 0 13.3333 8">
                  <path d="M11.7611 0L6.66667 4.94673L1.57224 0L0 1.52661L6.66667 8L13.3333 1.52661L11.7611 0Z" fill="#5E6578" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoutesContainer() {
  return (
    <div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="Routes Container">
      <RoutesActionBar />
      <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative rounded-[10px] shrink-0 w-full">
        <RoutesTitleSection />
        <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Routes Table" style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "100%" }}>
          <RoutesTableHeader />
          <RoutesTableItem id="R-001" />
          <RoutesTableItem id="R-002" />
          <RoutesTableItem id="R-003" />
          <RoutesTableItem id="R-004" />
          <RoutesTableItem id="R-005" />
        </div>
      </div>
    </div>
  );
}
