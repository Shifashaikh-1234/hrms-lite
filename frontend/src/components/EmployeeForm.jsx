import { useState } from "react";
import api from "../api/api";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    onSuccess();
    setForm({ employee_id: "", full_name: "", email: "", department: "" });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <h2 className="text-lg font-semibold">Add Employee</h2>

      <input className="w-full border p-2 rounded" placeholder="Employee ID"
        onChange={(e) => setForm({ ...form, employee_id: e.target.value })} />

      <input className="w-full border p-2 rounded" placeholder="Full Name"
        onChange={(e) => setForm({ ...form, full_name: e.target.value })} />

      <input className="w-full border p-2 rounded" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input className="w-full border p-2 rounded" placeholder="Department"
        onChange={(e) => setForm({ ...form, department: e.target.value })} />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Employee
      </button>
    </form>
  );
}
