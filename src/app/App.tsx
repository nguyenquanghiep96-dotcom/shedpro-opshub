import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DeliveriesContract from "../imports/DeliveriesContract/DeliveriesContract.tsx";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/transportation/workorders/:id" element={<DeliveriesContract defaultTab="WOView" />} />
          <Route path="/transportation/workorders" element={<DeliveriesContract defaultTab="Contracts" />} />
          <Route path="/transportation/workorders/create" element={<DeliveriesContract defaultTab="WODetail" />} />
          <Route path="/transportation/workorders/:id/edit" element={<DeliveriesContract defaultTab="WODetail" />} />
          <Route path="/transportation/routes" element={<DeliveriesContract defaultTab="Routes" />} />
          <Route path="/transportation/routes/create" element={<DeliveriesContract defaultTab="RouteDetail" />} />
          <Route path="/transportation/routes/:id" element={<DeliveriesContract defaultTab="RouteView" />} />
          <Route path="/transportation/routes/:id/edit" element={<DeliveriesContract defaultTab="RouteDetail" />} />
          <Route path="/transportation/calendar" element={<DeliveriesContract defaultTab="Calendar" />} />
          <Route path="/" element={<Navigate to="/transportation/workorders" replace />} />
          <Route path="/transportation" element={<Navigate to="/transportation/workorders" replace />} />
          <Route path="*" element={<Navigate to="/transportation/workorders" replace />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
