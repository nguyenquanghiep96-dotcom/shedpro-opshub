import React from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/DeliveriesContract/svg-er6yqlh6e7";
import imgAvatar from "../../imports/DeliveriesContract/12feda209762e1e7724cd2a5b74ccb79e72d6570.png";

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

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[118px]">
      <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#2b3b63] text-[14px] w-full">Hiep Nguyen</p>
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
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[10px] py-[8px] relative rounded-[4px] shrink-0 font-sans font-bold" data-name="Button/Filled">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Interface / Logout - Outline">
          <Layer5 />
        </div>
        <div className="[word-break:break-word] capitalize flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#5e6578] text-[14px] text-center whitespace-nowrap">
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

function Frame13({ activeTab }: { activeTab?: string }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame 13">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Frame11 />
          <div className="bg-white content-stretch flex items-center flex-nowrap relative shrink-0 w-full flex-1 md:justify-center flex-nowrap hide-scrollbar" data-name="Nav">
            <div onClick={() => navigate('/transportation/workorders')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={`absolute border-b-3 border-solid inset-0 pointer-events-none ${activeTab === 'Contracts' ? 'border-[#ff7048]' : 'border-white'}`} />
              <div className={`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${activeTab === 'Contracts' ? 'text-[#ff7048]' : 'text-[#5e6578]'}`}>
                <p className="leading-[normal]">Work Orders</p>
              </div>
            </div>
            <div onClick={() => navigate('/transportation/routes')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={`absolute border-b-3 border-solid inset-0 pointer-events-none ${activeTab === 'Routes' ? 'border-[#ff7048]' : 'border-white'}`} />
              <div className={`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${activeTab === 'Routes' ? 'text-[#ff7048]' : 'text-[#5e6578]'}`}>
                <p className="leading-[normal]">Routes</p>
              </div>
            </div>
            <div onClick={() => navigate('/transportation/calendar')} className="cursor-pointer bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="Tab">
              <div aria-hidden className={`absolute border-b-3 border-solid inset-0 pointer-events-none ${activeTab === 'Calendar' ? 'border-[#ff7048]' : 'border-white'}`} />
              <div className={`[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${activeTab === 'Calendar' ? 'text-[#ff7048]' : 'text-[#5e6578]'}`}>
                <p className="leading-[normal]">Calendar</p>
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
        <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-white text-[16px] text-left whitespace-nowrap">Transportation</p>
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



export default function HeaderNav() {
  return <Frame7 />;
}

export { Frame7 as TopHeader, Frame13 as Navbar, Group, Layer, Layer1 };
