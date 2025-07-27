import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { API_BASE } from "../../constants";

const fetchData = async () => {
  const response = await fetch(`${API_BASE}/test-connection`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["homeData"],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Ordura</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>{data.message}</p>
      )}
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
