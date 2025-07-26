import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Ordura</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link
          to="/pos"
          className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition"
        >
          <p>Point of Sale</p>
        </Link>
        <Link
          to="/inventory"
          className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition"
        >
          <p>Inventory</p>
        </Link>
        <Link
          to="/analytics"
          className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition"
        >
          <p>Analytics</p>
        </Link>
      </div>
    </div>
  );
}
