import React, { useMemo } from 'react';

// ============================================================
// TYPES
// ============================================================
export interface MapStop {
  seq: number;
  role: 'START' | 'PICKUP' | 'DROPOFF' | 'VISIT' | 'END';
  label: string;
  address: string;
}

interface RouteMapProps {
  stops: MapStop[];
  totalDistance: string;
}

// ============================================================
// ROLE COLORS
// ============================================================
const ROLE_COLORS: Record<string, string> = {
  START:   '#2FA301',
  PICKUP:  '#2B3B63',
  DROPOFF: '#FF7048',
  VISIT:   '#3B82F6',
  END:     '#4B5563',
};

// ============================================================
// BUILD GOOGLE MAPS DIRECTIONS URL
// Format: saddr=START&daddr=STOP1+to:STOP2+to:STOP3
// Matches Transportation-20260719.html reference implementation
// ============================================================
function buildGoogleMapsUrl(stops: MapStop[]): { embedUrl: string; linkUrl: string } {
  if (stops.length === 0) {
    return {
      embedUrl: 'https://www.google.com/maps?output=embed',
      linkUrl:  'https://www.google.com/maps',
    };
  }

  const enc = (s: string) => encodeURIComponent(s);

  // Single location — just show on map
  if (stops.length === 1) {
    const q = enc(stops[0].address);
    return {
      embedUrl: `https://www.google.com/maps?q=${q}&output=embed`,
      linkUrl:  `https://www.google.com/maps?q=${q}`,
    };
  }

  // Multi-stop directions: saddr=first & daddr=second+to:third+to:...
  const [first, ...rest] = stops;
  const saddr = enc(first.address);
  const daddr = rest.map(s => enc(s.address)).join('+to:');

  return {
    embedUrl: `https://www.google.com/maps?saddr=${saddr}&daddr=${daddr}&output=embed`,
    linkUrl:  `https://www.google.com/maps/dir/?api=1&origin=${saddr}&destination=${enc(rest[rest.length - 1].address)}&waypoints=${rest.slice(0, -1).map(s => enc(s.address)).join('|')}`,
  };
}


// ============================================================
// MAIN COMPONENT
// ============================================================
export default function RouteMap({ stops, totalDistance }: RouteMapProps) {
  const { embedUrl, linkUrl } = useMemo(() => buildGoogleMapsUrl(stops), [stops]);

  return (
    <div className="bg-white rounded-[10px] border border-[#e0e0e0] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e0e0e0]">
        <span className="text-[#2b3b63] text-[14px] font-bold">Route map</span>
        <div className="flex items-center gap-2">
          <span className="text-[#787e90] text-[13px]">{stops.length} stops · {totalDistance}</span>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-[#2B3B63] hover:text-[#ff7048] transition-colors" title="Open in Google Maps">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2H3.5A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V10M10 2h4v4M6.667 9.333 14 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="relative" style={{ height: 450 }}>
        {stops.length > 0 ? (
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Route Map"
          />
        ) : (
          <div className="absolute inset-0 bg-[#f0f2f5] flex items-center justify-center">
            <p className="text-[#787e90] text-[14px]">Add work orders to see route preview</p>
          </div>
        )}
      </div>

      {/* Bottom: Stop legend */}
      {stops.length > 0 && (
        <div className="px-4 py-3 border-t border-[#e0e0e0]">
          <div className="flex flex-col relative">
            {stops.map((stop, i) => (
              <div key={i} className="flex items-center gap-[10px] text-[12px] relative group h-[28px]">
                {/* Vertical line connecting dots (except last item) */}
                {i < stops.length - 1 && (
                  <div className="absolute left-[3.5px] top-[14px] w-[1px] h-[28px] bg-[#e2e8f0] z-0" />
                )}
                {/* Dot */}
                <div className="w-[8px] h-[8px] rounded-full shrink-0 z-10" style={{ backgroundColor: ROLE_COLORS[stop.role] || '#5e6578' }} />
                {/* Info */}
                <span className="text-[#94a3b8] text-[11px] font-semibold uppercase w-[55px] shrink-0">{stop.role}</span>
                <span className="text-[#2b3b63] text-[13px] truncate flex-1">{stop.address || '—'}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
