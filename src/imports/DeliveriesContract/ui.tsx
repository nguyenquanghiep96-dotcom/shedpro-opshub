/**
 * ============================================================
 * DESIGN SYSTEM — ui.tsx
 * Single source of truth for all UI primitives.
 * Equivalent to a Figma Component Library.
 *
 * Usage:
 *   import { Btn, Input, Select, FormLabel, Badge } from './ui';
 *   <Btn variant="primary" onClick={...}>Save</Btn>
 * ============================================================
 */

import React from 'react';

// ─────────────────────────────────────────────────────────────
// DESIGN TOKENS (change once → updates everywhere)
// ─────────────────────────────────────────────────────────────
export const TOKEN = {
  primary:        '#ff7048',
  primaryHover:   '#FF8765',
  navy:           '#2B3B63',
  muted:          '#5E6578',
  mutedLight:     '#787e90',
  border:         '#D8DADF',
  bgGray:         '#eaecf0',
  bgGrayHover:    '#E0E0E0',
  danger:         '#E53E3E',
  green:          '#16A34A',
} as const;

// ─────────────────────────────────────────────────────────────
// BTN
// Variants:
//   primary    → orange CTA  (Save, Add, Create)
//   outline    → gray fill   (Advanced Search, Secondary)
//   stroke     → white bg, border #E0E0E0 → hover border #5E6578 (Cancel, Save Draft)
//   ghost      → no bg/border (Back link)
//   danger     → red border  (Delete)
//   link-navy  → navy border (Link Contract, Link Inventory)
// ─────────────────────────────────────────────────────────────
type BtnVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link-navy';

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const BTN_VARIANT_CLASSES: Record<BtnVariant, string> = {
  'primary':   'bg-[#FF7048] hover:bg-[#FF8765] text-white border-transparent',
  'secondary': 'bg-[#EDEDED] hover:bg-[#E0E0E0] text-[#5E6578] border-transparent',
  'outline':   'bg-white hover:bg-[#F5F5F5] text-[#5E6578] border-[#E0E0E0] hover:border-[#5E6578]',
  'ghost':     'bg-transparent hover:bg-[#f0f2f5] text-[#5E6578] border-transparent',
  'danger':    'bg-white hover:bg-[#FBEAEA] text-[#E53E3E] border-[#F1C9C9]',
  'link-navy': 'bg-white hover:bg-[#f0f2f5] text-[#2B3B63] border-[#2B3B63]',
};

export function Btn({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  className = '',
  disabled,
  ...rest
}: BtnProps) {
  const height = size === 'sm' ? 'h-[32px]' : 'h-[40px]';
  const px     = size === 'sm' ? 'px-[14px]' : 'px-[16px]';
  const disCls = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-[6px]',
        'font-sans font-bold text-[14px] capitalize leading-[16px]',
        'rounded-[6px] border transition-colors',
        'select-none whitespace-nowrap',
        height, px, BTN_VARIANT_CLASSES[variant], disCls, className,
      ].join(' ')}
      {...rest}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0 flex items-center">{iconRight}</span>}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// ICON BTN — square icon-only buttons (Edit, Trash, Close)
// ─────────────────────────────────────────────────────────────
type IconBtnTone = 'muted' | 'danger' | 'navy';

interface IconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  tone?: IconBtnTone;
}

const ICON_BTN_TONE: Record<IconBtnTone, string> = {
  muted:  'text-[#787e90] hover:text-[#2B3B63] hover:bg-[#f0f2f5]',
  danger: 'text-[#787e90] hover:text-[#E53E3E] hover:bg-[#FBEAEA]',
  navy:   'text-[#787e90] hover:text-[#2B3B63] hover:bg-[#f0f2f5]',
};

export function IconBtn({ size = 32, tone = 'muted', className = '', children, ...rest }: IconBtnProps) {
  return (
    <button
      className={[
        'cursor-pointer rounded-[6px] flex items-center justify-center transition-colors',
        ICON_BTN_TONE[tone], className,
      ].join(' ')}
      style={{ width: size, height: size }}
      {...rest}
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// INPUT
// ─────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const INPUT_BASE = [
  'w-full border rounded-[6px] px-[12px]',
  'h-[40px]',
  'font-sans font-normal text-[#2B3B63] text-[14px]',
  'outline-none transition-colors bg-white',
  'placeholder:text-[#A0A4B0] placeholder:font-normal',
  'focus:border-[#2B3B63]',
].join(' ');

export function Input({ error, className = '', disabled, ...rest }: InputProps) {
  const stateCls = disabled
    ? 'border-[#D8DADF] bg-[#F5F5F7] text-[#A0A4B0] cursor-not-allowed'
    : error
    ? 'border-[#E53E3E]'
    : 'border-[#D8DADF]';
  return (
    <input
      disabled={disabled}
      className={[INPUT_BASE, stateCls, className].join(' ')}
      {...rest}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// TEXTAREA
// ─────────────────────────────────────────────────────────────
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error, className = '', ...rest }: TextareaProps) {
  const borderCls = error ? 'border-[#E53E3E]' : 'border-[#D8DADF] focus:border-[#2B3B63]';
  return (
    <textarea
      className={[
        'w-full border rounded-[6px] px-[12px] py-[10px]',
        'font-sans font-normal text-[#2B3B63] text-[14px] leading-[20px]',
        'outline-none transition-colors bg-white resize-none',
        'placeholder:text-[#A0A4B0]',
        borderCls, className,
      ].join(' ')}
      {...rest}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// SELECT
// ─────────────────────────────────────────────────────────────
const CHEVRON_SVG = `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235E6578' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;

export function Select({ className = '', children, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={[
        'w-full border border-[#D8DADF] rounded-[6px] px-[12px]',
        'h-[40px]',
        'font-sans font-normal text-[#2B3B63] text-[14px]',
        'outline-none focus:border-[#2B3B63] transition-colors bg-white',
        'cursor-pointer appearance-none',
        className,
      ].join(' ')}
      style={{
        backgroundImage: CHEVRON_SVG,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center',
        paddingRight: 36,
      }}
      {...rest}
    >
      {children}
    </select>
  );
}

// ─────────────────────────────────────────────────────────────
// FILTER TAB GROUP
// Shared pill-tab filter bar — Work Orders & Routes use this
// Active:   #5E6578 bg, white text, px-16, hover darken
// Inactive: border #E0E0E0, text #5E6578, hover border #5E6578
// ─────────────────────────────────────────────────────────────
export interface FilterTab {
  label: string;
  value: string;
  count?: number;
}

interface FilterTabGroupProps {
  tabs: FilterTab[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FilterTabGroup({ tabs, active, onChange, className = '' }: FilterTabGroupProps) {
  return (
    <div className={['content-center flex flex-[1_0_0] flex-wrap gap-[10px] items-center justify-center min-w-px relative', className].join(' ')}>
      {tabs.map(tab => {
        const isActive = tab.value === active;
        const label = tab.count !== undefined ? `${tab.label} (${tab.count})` : tab.label;
        return isActive ? (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className="bg-[#5E6578] hover:bg-[#4a5268] cursor-pointer flex gap-[6px] items-center justify-center px-[16px] py-[7px] rounded-[34px] shrink-0 transition-colors"
          >
            <span className="font-sans font-normal text-[14px] text-white whitespace-nowrap leading-normal">{label}</span>
          </button>
        ) : (
          <div
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className="relative rounded-[34px] shrink-0 cursor-pointer group"
          >
            <div className="flex gap-[6px] items-center justify-center px-[16px] py-[7px] rounded-[inherit]">
              <span className="font-sans font-normal text-[#5E6578] group-hover:text-[#2B3B63] text-[14px] whitespace-nowrap leading-normal transition-colors">{label}</span>
            </div>
            <div aria-hidden className="absolute border border-[#E0E0E0] group-hover:border-[#5E6578] border-solid inset-0 pointer-events-none rounded-[34px] transition-colors" />
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FORM LABEL
// ─────────────────────────────────────────────────────────────
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  hint?: string;
}

export function FormLabel({ required, hint, children, className = '', ...rest }: FormLabelProps) {
  return (
    <label
      className={['block font-sans font-medium text-[#5E6578] text-[13px] mb-[6px]', className].join(' ')}
      {...rest}
    >
      {children}
      {required && <span className="text-[#ff7048] ml-[2px]">*</span>}
      {hint && <span className="font-normal text-[#A0A4B0] ml-[4px]">{hint}</span>}
    </label>
  );
}

// ─────────────────────────────────────────────────────────────
// BADGE — colored label pill
// ─────────────────────────────────────────────────────────────
interface BadgeProps {
  color: string;
  bg?: string;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ color, bg, children, className = '' }: BadgeProps) {
  return (
    <span
      className={['font-sans font-bold text-[11px] px-[6px] py-[2px] rounded-[4px] whitespace-nowrap', className].join(' ')}
      style={{ color, backgroundColor: bg || `${color}1A` }}
    >
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// STATUS BADGE
// ─────────────────────────────────────────────────────────────
// STATUS colors — text 100% opacity, bg 20% opacity (hex suffix 33)
const STATUS_MAP: Record<string, { text: string; bg: string }> = {
  // Scheduled — Blue #3B82F6
  'Scheduled':   { text: '#3B82F6', bg: '#3B82F633' },
  // Completed — Green #2FA301
  'Completed':   { text: '#2FA301', bg: '#2FA30133' },
  // Open / Draft — Gray #7E8590
  'Open':        { text: '#7E8590', bg: '#7E859033' },
  'Draft':       { text: '#7E8590', bg: '#7E859033' },
  'Pending':     { text: '#7E8590', bg: '#7E859033' },
  // En Route — Purple #6A65D5
  'En Route':    { text: '#6A65D5', bg: '#6A65D533' },
  'In Progress': { text: '#6A65D5', bg: '#6A65D533' },
  // Others
  'Cancelled':   { text: '#EF4444', bg: '#EF444433' },
  'Arrived':     { text: '#F59E0B', bg: '#F59E0B33' },
};

export function StatusBadge({ status, className = '' }: { status: string; className?: string }) {
  const s = STATUS_MAP[status] || { text: '#5E6578', bg: '#5E657833' };
  return (
    <span
      className={['font-sans font-semibold text-[11px] px-[8px] py-[2px] rounded-[4px] whitespace-nowrap', className].join(' ')}
      style={{ color: s.text, backgroundColor: s.bg, letterSpacing: '0.01em' }}
    >
      {status}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// TYPE BADGE
// ─────────────────────────────────────────────────────────────
// Solid navy #2B3B63, white text — uniform for ALL WO types
// Material Symbols Rounded icon mapping per WO type
const TYPE_COLOR = '#2B3B63';

const TYPE_ICON_MAP: Record<string, string> = {
  'Delivery': 'delivery_truck_speed',
  'Repo': 'house_with_shield',
  'Lot Transfer': 'compare_arrows',
  'Private Move': 'add_home',
  'Repair': 'build',
  'Welfare Check': 'data_check',
  'Payment Collection': 'universal_currency',
};

export function TypeBadge({ type, className = '' }: { type: string; className?: string }) {
  const iconName = TYPE_ICON_MAP[type];
  return (
    <span
      className={['inline-flex items-center gap-[4px] font-sans font-semibold text-[11px] px-[8px] py-[2px] rounded-[4px] whitespace-nowrap text-white', className].join(' ')}
      style={{ backgroundColor: TYPE_COLOR, letterSpacing: '0.01em' }}
    >
      {iconName && (
        <span className="material-symbols-rounded" style={{ fontSize: 14, lineHeight: 1, fontVariationSettings: "'FILL' 0, 'wght' 600" }}>{iconName}</span>
      )}
      {type}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// CHECKBOX
// ─────────────────────────────────────────────────────────────
interface CheckboxProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer select-none" onClick={() => onChange(!checked)}>
      <div
        className={[
          'w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-colors shrink-0',
          checked ? 'bg-[#ff7048] border-[#ff7048]' : 'bg-white border-[#D8DADF]',
        ].join(' ')}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      {label && <span className="font-sans text-[#5E6578] text-[13px]">{label}</span>}
    </label>
  );
}

// ─────────────────────────────────────────────────────────────
// CLOSE BTN
// ─────────────────────────────────────────────────────────────
export function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-[#787e90] hover:text-[#2B3B63] p-1 rounded-[6px] hover:bg-[#f0f2f5] transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M13.5 4.5L4.5 13.5M4.5 4.5l9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// ICON SVGs
// ─────────────────────────────────────────────────────────────
export const Icons = {
  // Add new — from /opshub/public/icons/Add new.svg
  Add: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8333 7.16671H8.83325V2.16671C8.83325 1.70647 8.46015 1.33337 7.99992 1.33337C7.53968 1.33337 7.16659 1.70647 7.16659 2.16671V7.16671H2.16659C1.70635 7.16671 1.33325 7.53981 1.33325 8.00004C1.33325 8.46027 1.70635 8.83337 2.16659 8.83337H7.16659V13.8334C7.16659 14.2936 7.53968 14.6667 7.99992 14.6667C8.46015 14.6667 8.83325 14.2936 8.83325 13.8334V8.83337H13.8333C14.2935 8.83337 14.6666 8.46027 14.6666 8.00004C14.6666 7.53981 14.2935 7.16671 13.8333 7.16671Z" fill="currentColor"/>
    </svg>
  ),
  Edit: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9.917 1.75a1.237 1.237 0 0 1 1.75 1.75L4.083 11.083l-2.333.584.583-2.334L9.917 1.75Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Trash: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.75 3.5h10.5M5.25 3.5V2.333a.583.583 0 0 1 .583-.583h2.334a.583.583 0 0 1 .583.583V3.5M11.083 3.5l-.583 7.583a1.167 1.167 0 0 1-1.167 1.084H4.667A1.167 1.167 0 0 1 3.5 11.083L2.917 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Inventory: (props: any) => (
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22.1265 10.5804C22.3743 11.0756 22.9691 11.2777 23.4549 11.025C23.9406 10.7724 24.1389 10.1661 23.8911 9.67091L20.0844 1.94025L18.3099 2.84974L22.1166 10.5804M19.6283 3.91081L20.0844 1.94025L12.0051 0L11.549 1.97056L19.6383 3.92091M12.4611 1.97056L12.0051 0L3.91583 1.95035L4.37184 3.92091L12.4611 1.97056ZM5.6903 2.84974L3.91583 1.94025L0.10914 9.67091C-0.138691 10.1661 0.0595737 10.7724 0.545323 11.025C1.03107 11.2777 1.62587 11.0756 1.8737 10.5804L5.68039 2.84974" fill="currentColor"/>
      <path d="M18.5676 4.2746L11.9951 2.61731L5.42263 4.2746L1.84394 12.0053V19.3216C1.84394 21.3528 3.4598 23 5.45237 23H18.5379C20.5304 23 22.1463 21.3528 22.1463 19.3216V12.0053L18.5676 4.2746ZM20.1736 19.3216C20.1736 20.2412 19.44 20.9789 18.5478 20.9789H16.2975V14.1982C16.2975 13.0866 15.4152 12.1872 14.3247 12.1872H9.69524C8.60478 12.1872 7.7225 13.0866 7.7225 14.1982V20.9789H5.47219C4.57009 20.9789 3.84642 20.2311 3.84642 19.3216V12.46L6.84022 6.01274L12.0249 4.70914L17.2095 6.01274L20.2033 12.46V19.3216H20.1736Z" fill="currentColor"/>
    </svg>
  ),
  Contract: (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.8564 1C14.1146 1 14.3631 1.09946 14.5518 1.28809C14.7401 1.46667 14.8388 1.71466 14.8389 1.98242C14.8389 2.25034 14.7402 2.49891 14.5518 2.6875C14.3731 2.87613 14.1245 2.97559 13.8564 2.97559H5.62598C4.91132 2.97568 4.2463 3.2537 3.75 3.75C3.2537 4.25623 2.97569 4.92124 2.97559 5.62598V18.3633C2.97559 19.0781 3.25361 19.7438 3.75 20.2402C4.24629 20.7266 4.9312 21.0145 5.62598 21.0146H14.6504V17.4502C14.6504 16.7057 14.9485 16.0009 15.4746 15.4648C16.0007 14.9288 16.7056 14.6407 17.46 14.6406H21.0244V10.1533C21.0244 10.0342 21.0441 9.91484 21.0938 9.80566C21.1434 9.67669 21.2133 9.55723 21.3125 9.45801C21.4911 9.26971 21.7391 9.17099 22.0068 9.1709L21.9971 9.18066C22.2651 9.18066 22.5135 9.28012 22.7021 9.46875C22.8807 9.65726 22.9901 9.91495 22.9902 10.1729V15.9609C22.9902 16.5665 22.8808 17.1626 22.6426 17.7285C22.4142 18.2943 22.0764 18.7908 21.6396 19.2275L19.2275 21.6494C18.8007 22.0763 18.2943 22.4141 17.7285 22.6523C17.1726 22.8807 16.5763 23 15.9707 23H5.63672C4.39574 23 3.234 22.5133 2.36035 21.6396C1.48671 20.766 1 19.6043 1 18.3633V5.61621C1.00006 4.38524 1.48692 3.22402 2.35059 2.36035C3.22413 1.48684 4.38518 1.0001 5.62598 1H13.8564ZM17.46 16.6367C17.2417 16.6368 17.0338 16.7261 16.875 16.8848C16.7162 17.0337 16.626 17.2523 16.626 17.4707V20.9346C17.0825 20.8155 17.4996 20.5775 17.8271 20.25L20.25 17.8271C20.508 17.5592 20.6972 17.2321 20.8262 16.8848V16.8945C20.8559 16.8053 20.9049 16.7259 20.9248 16.6367H17.46ZM20.9248 0.990234C21.4805 0.990361 22.0065 1.2087 22.3936 1.5957C22.7807 1.99282 22.999 2.50947 22.999 3.06543C22.9989 3.62123 22.7806 4.14707 22.3936 4.53418L11.3438 15.6035C10.9764 15.9609 10.5498 16.2497 10.0732 16.4482C9.59678 16.6467 9.09038 16.7461 8.57422 16.7461H7.26367V15.4355C7.26367 14.9194 7.36307 14.413 7.56152 13.9365C7.75015 13.46 8.03794 13.0324 8.40527 12.665L19.4551 1.5957C19.8522 1.20858 20.3689 0.990234 20.9248 0.990234Z" fill="currentColor"/>
    </svg>
  ),
  ChevronLeft: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  LinkOut: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M8.167 1.75h3.5a.583.583 0 0 1 .583.583v3.5M12.25 1.75 7 7m-1.167-5.25H3.5a1.167 1.167 0 0 0-1.167 1.167v8.166A1.167 1.167 0 0 0 3.5 12.25h8.167a1.167 1.167 0 0 0 1.166-1.167V8.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Building: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1.75" y="3.5" width="10.5" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4.667 6.417h4.666M4.667 8.167h2.916" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  // Filter — from /opshub/public/icons/Filter.svg
  Filter: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.88874 3.97267H3.40859C3.70856 5.07636 4.84644 5.72791 5.95013 5.42794C6.659 5.23528 7.21274 4.68153 7.4054 3.97267H14.1097C14.4165 3.97267 14.6652 3.72397 14.6652 3.41718C14.6652 3.11038 14.4165 2.86168 14.1097 2.86168H7.4054C7.10543 1.75797 5.96755 1.10642 4.86386 1.40639C4.155 1.59905 3.60125 2.1528 3.40859 2.86166H1.88874C1.58195 2.86166 1.33325 3.11036 1.33325 3.41715C1.33325 3.72394 1.58195 3.97267 1.88874 3.97267Z" fill="currentColor"/>
      <path d="M14.1097 7.44436H12.5899C12.2905 6.34082 11.1533 5.68891 10.0497 5.98825C9.34029 6.18071 8.78607 6.7349 8.59362 7.44436H1.88874C1.58195 7.44436 1.33325 7.69306 1.33325 7.99985C1.33325 8.30664 1.58195 8.55534 1.88874 8.55534H8.59362C8.89299 9.65888 10.0302 10.3108 11.1338 10.0114C11.8432 9.81899 12.3974 9.2648 12.5899 8.55534H14.1097C14.4165 8.55534 14.6652 8.30664 14.6652 7.99985C14.6652 7.69306 14.4165 7.44436 14.1097 7.44436Z" fill="currentColor"/>
      <path d="M14.1097 12.0272H7.4054C7.10543 10.9235 5.96755 10.2719 4.86386 10.5719C4.155 10.7646 3.60125 11.3183 3.40859 12.0272H1.88874C1.58195 12.0272 1.33325 12.2759 1.33325 12.5827C1.33325 12.8895 1.58195 13.1382 1.88874 13.1382H3.40859C3.70856 14.2419 4.84644 14.8934 5.95013 14.5934C6.659 14.4008 7.21274 13.847 7.4054 13.1382H14.1097C14.4165 13.1382 14.6652 12.8895 14.6652 12.5827C14.6652 12.2759 14.4165 12.0272 14.1097 12.0272Z" fill="currentColor"/>
    </svg>
  ),
};
