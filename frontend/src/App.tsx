import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load each module
const Home = lazy(() => import("./modules/dashboard/Home"));
const POS = lazy(() => import("./modules/pos/POS"));
const Inventory = lazy(() => import("./modules/inventory/Inventory"));
const Analytics = lazy(() => import("./modules/analytics/Analytics"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Suspense>
  );
}
