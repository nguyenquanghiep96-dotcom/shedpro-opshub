import React, { useState } from 'react';
import { Route } from './types';
import { DRIVERS } from './mockData';

interface DriverScheduleCalendarProps {
  routes: Route[];
  onSelectRoute: (route: Route) => void;
}

export default function DriverScheduleCalendar({
  routes,
  onSelectRoute
}: DriverScheduleCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 6, 23)); // July 2026
  const [selectedDriver, setSelectedDriver] = useState<string>('all');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Days in month calculation
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const today = () => setCurrentDate(new Date(2026, 6, 23));

  // Build grid cells
  const calendarCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push({ empty: true, dateNum: 0 });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push({ empty: false, dateNum: d });
  }

  // Filter routes for selected driver
  const filteredRoutes = routes.filter(r => {
    if (selectedDriver !== 'all' && r.driver !== selectedDriver) return false;
    return true;
  });

  const getRoutesForDay = (day: number) => {
    return filteredRoutes.filter(r => {
      const rDate = new Date(r.scheduledAt);
      return rDate.getFullYear() === year && rDate.getMonth() === month && rDate.getDate() === day;
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* Calendar Header Controls */}
      <div className="bg-white p-4 rounded-xl border border-[#d8dadf] flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-4">
          <h2 className="font-['Proxima_Nova:Bold',sans-serif] text-[20px] text-[#2b3b63]">
            {monthNames[month]} {year}
          </h2>

          <div className="flex items-center gap-1 bg-[#f1f5f9] p-1 rounded-lg">
            <button
              onClick={prevMonth}
              className="px-2.5 py-1 rounded-md font-bold text-[#5e6578] hover:bg-white hover:shadow-xs transition-all"
            >
              ‹
            </button>
            <button
              onClick={today}
              className="px-3 py-1 rounded-md font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578] hover:bg-white hover:shadow-xs transition-all"
            >
              Today
            </button>
            <button
              onClick={nextMonth}
              className="px-2.5 py-1 rounded-md font-bold text-[#5e6578] hover:bg-white hover:shadow-xs transition-all"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578]">
            Filter Driver:
          </label>
          <select
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            className="h-9 border border-[#d8dadf] rounded-lg px-3 font-['Proxima_Nova:Semibold',sans-serif] text-[13px] text-[#2b3b63] outline-none"
          >
            <option value="all">All Drivers</option>
            {DRIVERS.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Calendar Month Grid */}
      <div className="bg-white rounded-xl border border-[#d8dadf] overflow-hidden shadow-xs">
        
        {/* Days of week header */}
        <div className="grid grid-cols-7 border-b border-[#e0e0e0] bg-[#f8f9fa] text-center font-['Proxima_Nova:Bold',sans-serif] text-[13px] text-[#5e6578] py-2.5">
          {daysOfWeek.map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Grid Cells */}
        <div className="grid grid-cols-7 border-collapse divide-x divide-y divide-[#e2e8f0]">
          {calendarCells.map((cell, idx) => {
            if (cell.empty) {
              return <div key={`empty-${idx}`} className="bg-[#fafafa] min-h-[110px]" />;
            }

            const dayRoutes = getRoutesForDay(cell.dateNum);
            const isToday = cell.dateNum === 23 && month === 6 && year === 2026;

            return (
              <div 
                key={`day-${cell.dateNum}`}
                className={`min-h-[110px] p-2 flex flex-col gap-1 transition-colors ${
                  isToday ? 'bg-[#fff0eb]' : 'hover:bg-[#f8fafc]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-['Proxima_Nova:Bold',sans-serif] text-[13px] w-6 h-6 rounded-full flex items-center justify-center ${
                    isToday ? 'bg-[#ff7048] text-white' : 'text-[#2b3b63]'
                  }`}>
                    {cell.dateNum}
                  </span>
                </div>

                {/* Day Routes List */}
                <div className="flex flex-col gap-1.5 mt-1 overflow-y-auto max-h-[85px]">
                  {dayRoutes.map(r => (
                    <div
                      key={r.id}
                      onClick={() => onSelectRoute(r)}
                      className="bg-[#2b3b63] text-white p-1.5 rounded-md text-[11px] cursor-pointer hover:bg-[#1e293b] transition-colors shadow-2xs"
                    >
                      <div className="font-['Proxima_Nova:Bold',sans-serif] truncate">
                        {r.code} - {r.driver}
                      </div>
                      <div className="font-['Proxima_Nova:Regular',sans-serif] text-[#cbd5e1] truncate">
                        {r.stops.length} Stops ({r.status})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
