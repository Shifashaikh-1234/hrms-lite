import { useEffect, useState } from "react";
import api from "../api/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/employees/summary").then(res => setStats(res.data));
  }, []);

  if (!stats) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Employees" value={stats.total_employees} />
      <Card title="Attendance Records" value={stats.total_attendance} />
      <Card title="Present Days" value={stats.present_today} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
