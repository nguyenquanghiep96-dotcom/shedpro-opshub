import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DeliveriesContract from "../imports/DeliveriesContract/DeliveriesContract.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deliveries/contracts" element={<DeliveriesContract defaultTab="Contracts" />} />
        <Route path="/deliveries/routes" element={<DeliveriesContract defaultTab="Routes" />} />
        <Route path="/" element={<Navigate to="/deliveries/contracts" replace />} />
        <Route path="/deliveries" element={<Navigate to="/deliveries/contracts" replace />} />
        <Route path="*" element={<Navigate to="/deliveries/contracts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
