import React, { useState } from 'react';
import RoutesContainer from './RoutesContainer';
import svgPaths from "./svg-er6yqlh6e7";
import imgThumbnail from "./71d7f36a3fe4c842bd190a79c3b92a977e1a20e0.png";
import imgAvatar from "./12feda209762e1e7724cd2a5b74ccb79e72d6570.png";

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

function Tag() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[12px] items-center justify-center min-w-px relative" data-name="Tag">
      <button className="bg-[#5e6578] content-stretch cursor-pointer flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[7px] relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">All (5)</p>
        </div>
      </button>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Cancelled (0)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[34px]" />
      </div>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Schedule (0)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[34px]" />
      </div>
      <div className="relative rounded-[34px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[7px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Delivered (1)</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[34px]" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.332 13.3331">
        <g id="Group">
          <path d={svgPaths.p2532e980} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p63c3100} fill="var(--fill-0, #5E6578)" id="Vector_2" />
          <path d={svgPaths.p2e34de80} fill="var(--fill-0, #5E6578)" id="Vector_3" />
        </g>
      </svg>
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

function Actions() {
  return (
    <div className="content-stretch flex items-center flex-wrap gap-y-4 relative shrink-0 w-full" data-name="Actions">
      <ButtonsContainer />
      <Tag />
      <SortSection />
    </div>
  );
}

function ActionBar1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[10px] shrink-0 w-full" data-name="Action Bar 1">
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Actions />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="content-stretch flex flex-col items-start py-[10px] relative shrink-0 w-full " data-name="Action Bar 1">
      <ActionBar1 />
    </div>
  );
}


function NumberContainer() {
  return (
    <div className="bg-[#2b3b63] content-stretch flex flex-col items-center justify-center min-w-[30px] px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Number Container">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function TitleSection() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pl-[10px] relative shrink-0 w-full lg:w-auto flex-1" data-name="Title Section">
      <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3b63] text-[32px] whitespace-nowrap">
        <p className="leading-[normal]">Deliveries</p>
      </div>
      <NumberContainer />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Group">
          <path d={svgPaths.p334830f0} fill="var(--fill-0, #5E6578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[8.33%] contents left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }} data-name="Group">
      <div className="absolute bottom-[8.33%] flex items-center justify-center left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Group">
          <path d={svgPaths.p334830f0} fill="var(--fill-0, #5E6578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[8.33%] contents left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }} data-name="Group">
      <div className="absolute bottom-[8.33%] flex items-center justify-center left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <Group5 />
        </div>
      </div>
    </div>
  );
}

function PageControlGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Page Control Group">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Arrow-Left-Bold">
          <Group2 />
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Arrow-Right-Bold">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function PageControlContainer() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Page Control Container">
      <PageControlGroup />
    </div>
  );
}

function PageInfoContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Page Info Container">
      <p className="[word-break:break-word] font-sans font-normal leading-[normal] not-italic relative shrink-0 text-[#787e90] text-[14px] whitespace-nowrap">Page 1 of 5</p>
      <PageControlContainer />
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[42px] items-center relative shrink-0" data-name="Pagination Container">
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Download - Solid">
            <div className="absolute inset-[0.06%_8.33%_-0.06%_8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.0007">
                <path d={svgPaths.p3bb94d80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#5e6578] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <PageInfoContainer />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between flex-wrap gap-y-4 py-[16px] relative shrink-0 w-full" data-name="Table Header">
      <TitleSection />
      <PaginationContainer />
    </div>
  );
}

function Component01AlignCenter() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter1() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter2() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter3() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter4() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter5() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter6() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter7() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter8() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter9() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component01AlignCenter10() {
  return (
    <div className="relative size-full" data-name="01 align center">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.833 9.51167">
        <g id="01 align center">
          <path d={svgPaths.p1c74a480} fill="var(--fill-0, #787E91)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderRow() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Header Row" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
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
      </div>
      <div className="content-stretch flex gap-[10px] items-end justify-end px-[10px] py-[12px] relative shrink-0 w-[320px]" data-name="Table-Title">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
          <p className="leading-[normal]">From Addresss</p>
        </div>
        <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
          <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <Component01AlignCenter />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-end justify-end size-full">
            <div className="content-stretch flex gap-[10px] items-end justify-end px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold h-full justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">To Address</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Thumbnail</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Driver</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Item</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter4 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Agreement#</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter5 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Created</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter6 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Schedule</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter7 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Delivered</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter8 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">Status</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter9 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[60px]" data-name="Table-Title">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-bold justify-center leading-[0] min-w-px not-italic relative text-[#2b3b63] text-[14px]">
                <p className="leading-[normal]">​</p>
              </div>
              <div className="opacity-0 overflow-clip relative shrink-0 size-[20px]" data-name="arrow-style1-small-down">
                <div className="absolute flex inset-[22.92%_24.14%_22.92%_28.31%] items-center justify-center" style={{ containerType: "size" }}>
                  <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                    <Component01AlignCenter10 />
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

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Home Shed</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Portable Shed Haulers</p>
      </div>
    </div>
  );
}

function TableItem() {
  return (
    <div className="h-full relative shrink-0 w-[320px]" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Matthew Mccormick-PM Loris, SC</p>
      </div>
    </div>
  );
}

function TableItem1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function TableItem2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgThumbnail} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Hiep Nguyen</p>
      </div>
    </div>
  );
}

function TableItem3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">TBD</p>
      </div>
    </div>
  );
}

function TableItem4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">323043</p>
      </div>
    </div>
  );
}

function TableItem5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/16/2026</p>
      </div>
    </div>
  );
}

function TableItem6() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem7() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem8() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status">
      <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
        <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function TableItem9() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <Status />
        </div>
      </div>
    </div>
  );
}

function Layer() {
  return (
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
  );
}

function TableItem10() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <Layer />
        </div>
      </div>
    </div>
  );
}

function TableList({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex items-center relative shrink-0 w-full"} data-name="Table-List" style={{ minWidth: "1200px" }}>
      <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <Checkbox />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableItem />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem4 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem5 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem6 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem8 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableItem9 />
      </div>
      <TableItem10 />
    </div>
  );
}

function Checkbox1() {
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

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Home Shed</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Portable Shed Haulers</p>
      </div>
    </div>
  );
}

function TableItem11() {
  return (
    <div className="h-full relative shrink-0 w-[320px]" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text9 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Matthew Mccormick-PM Loris, SC</p>
      </div>
    </div>
  );
}

function TableItem12() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function TableItem13() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgThumbnail} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Hiep Nguyen</p>
      </div>
    </div>
  );
}

function TableItem14() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">TBD</p>
      </div>
    </div>
  );
}

function TableItem15() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">323043</p>
      </div>
    </div>
  );
}

function TableItem16() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/16/2026</p>
      </div>
    </div>
  );
}

function TableItem17() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem18() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function Text17() {
  return <div className="content-stretch flex flex-col gap-[2px] h-[17px] items-start relative shrink-0 w-full" data-name="Text" />;
}

function TableItem19() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status">
      <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
        <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function TableItem20() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <Status1 />
        </div>
      </div>
    </div>
  );
}

function Layer1() {
  return (
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
  );
}

function TableItem21() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <Layer1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
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

function Text18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Home Shed</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Portable Shed Haulers</p>
      </div>
    </div>
  );
}

function TableItem22() {
  return (
    <div className="h-full relative shrink-0 w-[320px]" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text18 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Matthew Mccormick-PM Loris, SC</p>
      </div>
    </div>
  );
}

function TableItem23() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function TableItem24() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgThumbnail} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Hiep Nguyen</p>
      </div>
    </div>
  );
}

function TableItem25() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">TBD</p>
      </div>
    </div>
  );
}

function TableItem26() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">323043</p>
      </div>
    </div>
  );
}

function TableItem27() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/16/2026</p>
      </div>
    </div>
  );
}

function TableItem28() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem29() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function TableItem30() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full" />
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status">
      <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
        <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function TableItem31() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <Status2 />
        </div>
      </div>
    </div>
  );
}

function Layer2() {
  return (
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
  );
}

function TableItem32() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <Layer2 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
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

function Text26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Garden Depot</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Outdoor Storage Units</p>
      </div>
    </div>
  );
}

function TableItem33() {
  return (
    <div className="h-full relative shrink-0 w-[320px]" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text26 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Sophia Martinez-Project Lead Austin, TX</p>
      </div>
    </div>
  );
}

function TableItem34() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function TableItem35() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgThumbnail} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">{`Liam O'Connor`}</p>
      </div>
    </div>
  );
}

function TableItem36() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">In Progress</p>
      </div>
    </div>
  );
}

function TableItem37() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">415672</p>
      </div>
    </div>
  );
}

function TableItem38() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">05/10/2026</p>
      </div>
    </div>
  );
}

function TableItem39() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text32 />
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem40() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function TableItem41() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full" />
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status">
      <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
        <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function TableItem42() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <Status3 />
        </div>
      </div>
    </div>
  );
}

function Layer3() {
  return (
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
  );
}

function TableItem43() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <Layer3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
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

function Text34() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Urban Tools</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Compact Tool Sheds</p>
      </div>
    </div>
  );
}

function TableItem44() {
  return (
    <div className="h-full relative shrink-0 w-[320px]" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text34 />
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Ethan Zhang-Operations Denver, CO</p>
      </div>
    </div>
  );
}

function TableItem45() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text36 />
        </div>
      </div>
    </div>
  );
}

function TableItem46() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[12px] relative size-full">
          <div className="pointer-events-none relative rounded-[6px] shrink-0 size-[60px]" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6px] size-full" src={imgThumbnail} />
            <div aria-hidden className="absolute border border-[#ddd] border-solid inset-0 rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Amara Singh</p>
      </div>
    </div>
  );
}

function TableItem47() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">Pending Approval</p>
      </div>
    </div>
  );
}

function TableItem48() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text38 />
        </div>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">327859</p>
      </div>
    </div>
  );
}

function TableItem49() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">06/01/2026</p>
      </div>
    </div>
  );
}

function TableItem50() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text40 />
        </div>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
        <p className="leading-[normal]">04/18/2026 02:00 AM</p>
      </div>
    </div>
  );
}

function TableItem51() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full">
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function TableItem52() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[10px] py-[12px] relative size-full" />
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status">
      <div className="bg-[#32b6fd] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[3px] shrink-0" data-name="Value">
        <p className="[word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Scheduled</p>
      </div>
    </div>
  );
}

function TableItem53() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Table-Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[12px] relative size-full">
          <Status4 />
        </div>
      </div>
    </div>
  );
}

function Layer4() {
  return (
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
  );
}

function TableItem54() {
  return (
    <div className="content-stretch flex gap-[6px] h-[64px] items-center justify-end px-[10px] py-[12px] relative shrink-0 w-[60px]" data-name="Table-Item">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-end overflow-clip p-[10px] relative rounded-[4px] shrink-0" data-name="Button/Single">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface /  Open New Tab- Outline">
          <Layer4 />
        </div>
      </div>
    </div>
  );
}

function DeliveriesTable() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Deliveries Table" style={{ overflowX: "auto", maxWidth: "100%" }}>
      <TableHeaderRow />
      <TableList />
      <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <div className="flex flex-row items-center self-stretch">
          <Checkbox1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableItem11 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem12 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem13 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem14 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem15 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem16 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem17 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem18 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem19 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem20 />
        </div>
        <TableItem21 />
      </div>
      <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <div className="flex flex-row items-center self-stretch">
          <Checkbox2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableItem22 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem23 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem24 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem25 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem26 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem27 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem28 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem29 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem30 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem31 />
        </div>
        <TableItem32 />
      </div>
      <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <div className="flex flex-row items-center self-stretch">
          <Checkbox3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableItem33 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem34 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem35 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem36 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem37 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem38 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem39 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem40 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem41 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem42 />
        </div>
        <TableItem43 />
      </div>
      <div className="bg-white content-stretch flex items-center relative shrink-0 w-full" data-name="Table Entry" style={{ minWidth: "1200px" }}>
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
        <div className="flex flex-row items-center self-stretch">
          <Checkbox4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableItem44 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem45 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem46 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem47 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem48 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem49 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem50 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem51 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem52 />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <TableItem53 />
        </div>
        <TableItem54 />
      </div>
    </div>
  );
}

function DeliveriesTableContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative rounded-[10px] shrink-0 w-full" data-name="Deliveries Table Container">
      <TableHeader />
      <DeliveriesTable />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center w-full px-4 lg:px-[24px]" data-name="Container">
      <ActionBar />
      <DeliveriesTableContainer />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-row items-center gap-[12px] relative shrink-0 w-auto">
      <div className="h-[54px] relative shrink-0 w-[171px]" data-name="Button/Logo/ShedPro-White">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 54">
          <g id="Group 79">
            <g id="PRO">
              <path d={svgPaths.p2f5d6280} fill="var(--fill-0, #FF7048)" />
              <path d={svgPaths.p3c8eb500} fill="var(--fill-0, #FF7048)" />
              <path d={svgPaths.pcd67c00} fill="var(--fill-0, #FF7048)" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p1b25e300} fill="var(--fill-0, #FF7048)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="SHED">
              <path d={svgPaths.p1cd33f00} fill="var(--fill-0, #2B3B63)" />
              <path d={svgPaths.p374f1d80} fill="var(--fill-0, #2B3B63)" />
              <path d={svgPaths.p3b42e500} fill="var(--fill-0, #2B3B63)" />
              <path d={svgPaths.p1d6bd600} fill="var(--fill-0, #2B3B63)" />
            </g>
          </g>
        </svg>
      </div>
      <span className="font-sans font-bold text-[14px] text-[#5e6578]">PROTOYPE</span>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[4.17%_4.17%_4.16%_4.17%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3325 18.3341">
        <g id="Group">
          <path d={svgPaths.p6ade000} fill="var(--fill-0, #2B3B63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-sans font-normal leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Search</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
        <Group6 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[6px] shrink-0 w-[600px]">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Frame1 />
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#f41e1e] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] py-[5.5px] rounded-[40px] top-[26px] w-[18px]" data-name="Number">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-sans font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-white w-full">16</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[118px]">
      <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#2b3b63] text-[14px] w-full">Hiep Nguyen</p>
    </div>
  );
}

function Layer5() {
  return (
    <div className="absolute inset-[4.17%_4.17%_0_0]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
        <g clipPath="url(#clip0_1_1998)" id="Layer_1">
          <path d={svgPaths.p307f3e00} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p33251380} fill="var(--fill-0, #5E6578)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1998">
            <rect fill="white" height="15.3333" width="15.3333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-center py-[10px] relative rounded-[6px] shrink-0" data-name="User - Dropdown">
        <div className="relative shrink-0 size-[40px]" data-name="Avatar">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgAvatar} width="40" />
        </div>
        <Frame />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button/Filled">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Logout - Outline">
          <Layer5 />
        </div>
        <div className="[word-break:break-word] capitalize flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Logout</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame2 />
      <div className="bg-[rgba(43,59,99,0.1)] content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[6px] shrink-0" data-name="Notification">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[8.33%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6668 16.666">
              <path d={svgPaths.p377bd100} fill="var(--fill-0, #2B3B63)" id="Union" />
            </svg>
          </div>
        </div>
        <Number />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[4.17%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
        <g id="Frame 1099">
          <path d={svgPaths.p29a18d00} fill="var(--fill-0, #5E6578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute inset-[4.17%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
        <g id="Frame 1098">
          <path d={svgPaths.p15b9fe00} fill="var(--fill-0, #5E6578)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer6() {
  return (
    <div className="absolute inset-[4.17%_0_0_0]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.3333">
        <g clipPath="url(#clip0_1_1975)" id="Layer_1">
          <path d={svgPaths.p3d0cdc00} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p21f44000} fill="var(--fill-0, #5E6578)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1975">
            <rect fill="white" height="15.3333" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-w-px relative">
      <div className="relative rounded-[4px] shrink-0" data-name="Button/Filled">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Calculator - Line">
            <div className="absolute inset-[0_4.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 16">
                <path d={svgPaths.p344bbf00} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] capitalize flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[16px]">calculator</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[10px] relative shrink-0 w-full" data-name="Tab">
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <Frame8 />
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Home</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_1_1839)" id="door-open 1">
              <path d={svgPaths.p2cb926f0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_1_1839">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">RTO</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <Frame9 />
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Cash Sales</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[4.13%_4.17%_4.17%_4.17%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.666 14.6729">
              <path d={svgPaths.p28f3ca00} fill="var(--fill-0, #5E6578)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Quotes</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <Layer6 />
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Inventory</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_1_1918)" id="Layer_1">
              <path d={svgPaths.p31c3a00} fill="var(--fill-0, #5E6578)" id="Vector" />
              <path d={svgPaths.p111c2580} fill="var(--fill-0, #5E6578)" id="Vector_2" />
              <path d={svgPaths.p3586f780} fill="var(--fill-0, #5E6578)" id="Vector_3" />
            </g>
            <defs>
              <clipPath id="clip0_1_1918">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Builds</p>
      </button>
      <button className="bg-[#2b3b63] content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div aria-hidden className="absolute border-[#2b3b63] border-b-3 border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[12.5%_0_15.28%_0]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9993 11.5554">
              <path d={svgPaths.p123b2e00} fill="var(--fill-0, white)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-white text-[16px] text-left whitespace-nowrap">Deliveries</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[0_8.33%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 16">
              <g id="Vector">
                <path d={svgPaths.p197ff380} fill="var(--fill-0, #5E6578)" />
                <path d={svgPaths.p35ac5800} fill="var(--fill-0, #5E6578)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Reports</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3f31ef00} fill="var(--fill-0, #5E6578)" id="Vector" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Admin</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2de65770} fill="var(--fill-0, #5E6578)" id="Vector" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Tutorials</p>
      </button>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame5 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#2b3b63] border-b-2 border-solid inset-[0_0_-2px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Tab />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[9px] relative size-full">
              <Frame4 />
              <Frame3 />
            </div>
          </div>
        </div>
        <Frame6 />
      </div>
      <div aria-hidden className="absolute border-[#2b3b63] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[12px] tracking-[0.72px] whitespace-nowrap">DELIVERY MANAGEMENT</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49px] min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[10px] relative size-full" />
      </div>
    </div>
  );
}

function Frame13({ activeTab, setActiveTab }: { activeTab?: string, setActiveTab?: (tab: string) => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame 13">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Frame11 />
          <div className="bg-white content-stretch flex items-center overflow-x-auto flex-nowrap relative shrink-0 w-full flex-1 md:justify-center flex-nowrap hide-scrollbar" data-name="Nav">
            <div onClick={() => setActiveTab?.('Contracts')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={`absolute border-b-3 border-solid inset-0 pointer-events-none ${activeTab === 'Contracts' ? 'border-[#ff7048]' : 'border-white'}`} />
              <div className={`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${activeTab === 'Contracts' ? 'text-[#ff7048]' : 'text-[#5e6578]'}`}>
                <p className="leading-[normal]">Contracts</p>
              </div>
            </div>
            <div onClick={() => setActiveTab?.('Routes')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={`absolute border-b-3 border-solid inset-0 pointer-events-none ${activeTab === 'Routes' ? 'border-[#ff7048]' : 'border-white'}`} />
              <div className={`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${activeTab === 'Routes' ? 'text-[#ff7048]' : 'text-[#5e6578]'}`}>
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center opacity-25 px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Driver Schedule</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center opacity-25 px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Map Views</p>
              </div>
            </div>
          </div>
          <Frame12 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function DeliveriesContract() {
  const [activeTab, setActiveTab] = useState('Contracts');
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(43, 59, 99, 0.05) 0%, rgba(43, 59, 99, 0.05) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Deliveries - Contract">
      <div className="content-stretch flex flex-col items-start w-full shrink-0" data-name="Navbar">
        <Frame7 />
        <Frame13 activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1 w-full flex flex-col items-center">
        {activeTab === 'Contracts' ? <Container /> : <RoutesContainer />}
      </div>
      <div className="bg-white border-[#e0e0e0] border-solid border-t h-[56px] w-full mt-[12px] shrink-0" data-name="CopyRight">
        <div className="flex h-full font-sans font-normal justify-center items-center text-[#5e6578] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">© 2024 - ShedPro. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}