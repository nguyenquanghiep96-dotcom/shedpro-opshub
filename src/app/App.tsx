import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DeliveriesContract from "../imports/DeliveriesContract/DeliveriesContract.tsx";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/deliveries/contracts" element={<DeliveriesContract defaultTab="Contracts" />} />
          <Route path="/deliveries/routes" element={<DeliveriesContract defaultTab="Routes" />} />
          <Route path="/deliveries/routes/create" element={<DeliveriesContract defaultTab="RouteDetail" />} />
          <Route path="/deliveries/routes/:id/edit" element={<DeliveriesContract defaultTab="RouteDetail" />} />
          <Route path="/deliveries/calendar" element={<DeliveriesContract defaultTab="Calendar" />} />
          <Route path="/" element={<Navigate to="/deliveries/contracts" replace />} />
          <Route path="/deliveries" element={<Navigate to="/deliveries/contracts" replace />} />
          <Route path="*" element={<Navigate to="/deliveries/contracts" replace />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
