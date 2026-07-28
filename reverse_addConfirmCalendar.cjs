const fs = require('fs');
let content = fs.readFileSync('src/imports/DeliveriesContract/CalendarView.tsx', 'utf8');

// Reverse state for confirmDrop
content = content.replace("const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);\n  const [confirmDrop, setConfirmDrop] = useState<{routeId: string, date: Date} | null>(null);", "const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);");

// Reverse onDrop
content = content.replace("onDrop={(e) => { const routeId = e.dataTransfer.getData('routeId'); if(routeId) setConfirmDrop({routeId, date: dayObj.date}); }}", "onDrop={(e) => { const routeId = e.dataTransfer.getData('routeId'); if(routeId) updateRouteDate(routeId, dayObj.date); }}");

// Remove the modal
const confirmModal = `      {/* Confirm Drop Modal */}
      {confirmDrop && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[400px] p-6">
            <h3 className="text-[#2b3b63] text-[20px] font-bold mb-2">Change Route Date?</h3>
            <p className="text-[#5e6578] text-[14px] mb-6">
              Are you sure you want to move Route {confirmDrop.routeId} to {confirmDrop.date.toDateString()}?
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setConfirmDrop(null)}
                className="bg-[#eaecf0] text-[#5e6578] hover:bg-gray-200 rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  updateRouteDate(confirmDrop.routeId, confirmDrop.date);
                  setConfirmDrop(null);
                }}
                className="bg-[#ff7048] hover:bg-[#e65a32] text-white rounded-[4px] px-[16px] py-[10px] font-bold text-[14px] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;

content = content.replace(confirmModal, "    </div>\n  );\n}");

fs.writeFileSync('src/imports/DeliveriesContract/CalendarView.tsx', content);

