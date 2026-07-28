import React from 'react';
import StopsManager from './StopsManager';
import svgPaths from "./svg-1iixo7oqec";
import imgAvatar from "./87b552f8867f96fa4d2ca833ef943c5aa1ab172b.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[245px]">
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
    </div>
  );
}

function Group() {
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Search</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
        <Group />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-[6px] shrink-0 w-[600px]">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Frame1 />
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#f41e1e] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] py-[5.5px] rounded-[40px] top-[26px] w-[18px]" data-name="Number">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-white w-full">16</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[118px]">
      <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b3b63] text-[14px] w-full">Hiep Nguyen</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[4.17%_4.17%_0_0]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
        <g clipPath="url(#clip0_1_1355)" id="Layer_1">
          <path d={svgPaths.p307f3e00} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p33251380} fill="var(--fill-0, #5E6578)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1355">
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
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button/Filled">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Logout - Outline">
          <Layer />
        </div>
        <div className="[word-break:break-word] capitalize flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
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

function Layer1() {
  return (
    <div className="absolute inset-[4.17%_0_0_0]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.3333">
        <g clipPath="url(#clip0_1_1329)" id="Layer_1">
          <path d={svgPaths.p3d0cdc00} fill="var(--fill-0, #5E6578)" id="Vector" />
          <path d={svgPaths.p21f44000} fill="var(--fill-0, #5E6578)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1329">
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
          <div className="[word-break:break-word] capitalize flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[16px]">calculator</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Home</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_1_1338)" id="door-open 1">
              <path d={svgPaths.p2cb926f0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_1_1338">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">RTO</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <Frame9 />
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Cash Sales</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[4.13%_4.17%_4.17%_4.17%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.666 14.6729">
              <path d={svgPaths.p28f3ca00} fill="var(--fill-0, #5E6578)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Quotes</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <Layer1 />
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Inventory</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_1_1359)" id="Layer_1">
              <path d={svgPaths.p31c3a00} fill="var(--fill-0, #5E6578)" id="Vector" />
              <path d={svgPaths.p111c2580} fill="var(--fill-0, #5E6578)" id="Vector_2" />
              <path d={svgPaths.p3586f780} fill="var(--fill-0, #5E6578)" id="Vector_3" />
            </g>
            <defs>
              <clipPath id="clip0_1_1359">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Builds</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <div className="absolute inset-[12.5%_0_15.28%_0]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9993 11.5554">
              <path d={svgPaths.p123b2e00} fill="var(--fill-0, #5E6578)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Deliveries</p>
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
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Reports</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3f31ef00} fill="var(--fill-0, #5E6578)" id="Vector" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Admin</p>
      </button>
      <button className="bg-white content-stretch cursor-pointer flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="Tab">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Notification - Solid">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2de65770} fill="var(--fill-0, #5E6578)" id="Vector" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] text-left whitespace-nowrap">Tutorials</p>
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
          <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[12px] tracking-[0.72px] whitespace-nowrap">DELIVERY MANAGEMENT</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49px] min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] pt-[24px] pb-[24px] relative size-full" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Frame11 />
          <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[640.333px]" data-name="Nav">
            <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Contracts</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-[#ff7048] border-b-3 border-solid inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7048] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Driver Schedule</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-center justify-center opacity-25 px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
              <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
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

function Group2() {
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

function Group1() {
  return (
    <div className="absolute bottom-[8.33%] contents left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }} data-name="Group">
      <div className="absolute bottom-[8.33%] flex items-center justify-center left-1/4 right-1/4 top-[8.33%]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative rounded-[6px] shrink-0" data-name="Button/Filled">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Save Draft</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-[#ff7048] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button/Filled">
        <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">Publish Route</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#2b3b63] text-[24px]">Create New Route</p>
      <Frame28 />
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[1120px] w-full mx-auto py-[16px] relative">
          <div className="content-stretch flex gap-[6px] h-[33px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Add">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Arrow-Left-Bold">
              <Group1 />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Back</p>
            </div>
          </div>
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function FieldAnimation() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Store A - Dallas Lot</p>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Arrow-down-light">
            <div className="absolute inset-[34.98%_9.41%_23.35%_11.42%]" data-name="Vector 35 (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5">
                <path clipRule="evenodd" d={svgPaths.p212be200} fill="var(--fill-0, #2B3B63)" fillRule="evenodd" id="Vector 35 (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldAnimation1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Fort Worth</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`Owner Entity `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`Route Name `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation1 />
      </div>
    </div>
  );
}

function FieldAnimation2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Calendar - Outline">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pceb20c0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </svg>
            <div className="absolute inset-[56.25%_43.75%_31.25%_43.75%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_64.58%_31.25%_22.92%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_22.92%_31.25%_64.58%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Apr 11, 2026</p>
        </div>
      </div>
    </div>
  );
}

function FieldAnimation3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Calendar - Outline">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pceb20c0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </svg>
            <div className="absolute inset-[56.25%_43.75%_31.25%_43.75%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_64.58%_31.25%_22.92%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_22.92%_31.25%_64.58%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">08:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`Start Date `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`Start Time `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation3 />
      </div>
    </div>
  );
}

function FieldAnimation4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Calendar - Outline">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pceb20c0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </svg>
            <div className="absolute inset-[56.25%_43.75%_31.25%_43.75%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_64.58%_31.25%_22.92%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_22.92%_31.25%_64.58%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Apr 16, 2026</p>
        </div>
      </div>
    </div>
  );
}

function FieldAnimation5() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Calendar - Outline">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.pceb20c0} fill="var(--fill-0, #5E6578)" id="Vector" />
            </svg>
            <div className="absolute inset-[56.25%_43.75%_31.25%_43.75%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_64.58%_31.25%_22.92%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[56.25%_22.92%_31.25%_64.58%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 1.5">
                <path d={svgPaths.p13cced80} fill="var(--fill-0, #5E6578)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">10:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`End Date `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`End Time `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation5 />
      </div>
    </div>
  );
}

function FieldAnimation6() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Add address</p>
        </div>
      </div>
    </div>
  );
}

function UserAssigned() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="User-Assigned">
      <div className="relative shrink-0 size-[20px]" data-name="Component 1">
        <div className="absolute bg-[#c9e1f5] border border-solid border-white inset-0 rounded-[24px]" />
        <div className="absolute inset-[26.47%] overflow-clip" data-name="Icon / Interface / User 1 - Bold">
          <div className="absolute inset-[58.33%_12.5%_0_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05882 3.92157">
              <path d={svgPaths.p8143dc0} fill="var(--fill-0, #2B3B63)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-1/2 left-1/4 right-1/4 top-0" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.70588 4.70588">
              <path d={svgPaths.pc4a5a00} fill="var(--fill-0, #2B3B63)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Hiep Nguyen</p>
      </div>
    </div>
  );
}

function FieldAnimation7() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[12px] py-[8px] relative size-full">
          <UserAssigned />
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Arrow-down-light">
            <div className="absolute inset-[34.98%_9.41%_23.35%_11.42%]" data-name="Vector 35 (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5">
                <path clipRule="evenodd" d={svgPaths.p212be200} fill="var(--fill-0, #5E6578)" fillRule="evenodd" id="Vector 35 (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">Starting Addess</p>
        <FieldAnimation6 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[55px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">
          <span className="leading-[normal]">{`Assign Driver `}</span>
          <span className="leading-[normal] text-[#ff7048]">*</span>
        </p>
        <FieldAnimation7 />
      </div>
    </div>
  );
}

function UserAssigned1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-w-px relative" data-name="User-Assigned">
      <div className="relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute bg-[#0a428f] border border-solid border-white inset-0 rounded-[24px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Indigo</p>
      </div>
    </div>
  );
}

function FieldAnimation8() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[12px] py-[9.5px] relative size-full">
          <UserAssigned1 />
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon / Interface / Arrow-down-light">
            <div className="absolute inset-[34.98%_9.41%_23.35%_11.42%]" data-name="Vector 35 (Stroke)">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5">
                <path clipRule="evenodd" d={svgPaths.p212be200} fill="var(--fill-0, #5E6578)" fillRule="evenodd" id="Vector 35 (Stroke)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldAnimation9() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[9.5px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">+84202888494</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">Route Color</p>
        <FieldAnimation8 />
        <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b738b] text-[12px] w-full">Used to identify this route on Map View</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="Input">
        <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">Support Number</p>
        <FieldAnimation9 />
      </div>
    </div>
  );
}

function FieldAnimation10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[6px] w-full" data-name="Field Animation">
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-start px-[12px] py-[9.5px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[14px]">Optional notes visible to dispatcher..</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Frame14 />
        <Frame18 />
        <Frame20 />
        <Frame23 />
        <Frame21 />
        <div className="content-stretch flex flex-col gap-[2px] h-[100px] items-start relative shrink-0 w-full" data-name="Input">
          <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[14px] w-full">Route Note</p>
          <FieldAnimation10 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame15 />
      </div>
      <div aria-hidden className="absolute border border-[#d8dadf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6578] text-[16px] w-full">Route Information</p>
      <Frame17 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 13.3334">
        <g id="Group">
          <path d={svgPaths.p199ffa80} fill="var(--fill-0, #FF7048)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[97px]">
      <div className="h-[33px] relative rounded-[6px] shrink-0 w-full" data-name="Add">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center p-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Add new - Outline">
              <Group3 />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7048] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[normal]">Add Stop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[1120px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#5e6578] text-[16px]">Stops</p>
      <Frame26 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center w-full">
          <p className="leading-[normal] mb-0">No stops added yet.</p>
          <p className="leading-[normal]">{`Click "+ Add Stop" to begin building your route.`}</p>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Component 1">
      <Frame24 />
      <div className="content-stretch flex flex-col items-start relative rounded-[10px] shrink-0 w-[1120px]" data-name="Stops/Standard">
        <Frame16 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame25 />
      <StopsManager />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center max-w-[1120px] w-full mx-auto relative">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-center overflow-x-clip overflow-y-auto pb-[24px] relative rounded-[inherit] size-full">
        <Top />
        <Frame19 />
      </div>
      <div aria-hidden className="absolute border-[#d8dadf] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Box() {
  return (
    <div className="relative shrink-0 w-full" data-name="Box 1">
      <div className="content-stretch flex flex-col items-start px-[24px] pt-[24px] pb-[24px] relative size-full">
        <Content />
      </div>
    </div>
  );
}

export default function DeliveriesRoutesAddNew() {
  return (
    <div className="flex-1 w-full flex justify-center py-[24px]">
      <Box />
    </div>
  );
}