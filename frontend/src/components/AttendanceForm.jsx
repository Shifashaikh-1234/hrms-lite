import { useState } from "react";
import api from "../api/api";

export default function AttendanceForm() {
  const [data, setData] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/attendance", data);
      alert("Attendance marked");
    } catch (err) {
      alert(err.response?.data?.detail || "Error");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2 className="text-lg font-semibold mb-4">Mark Attendance</h2>

      <input name="employee_id" placeholder="Employee ID" onChange={(e) => setData({ ...data, employee_id: e.target.value })} required />
      <input type="date" onChange={(e) => setData({ ...data, date: e.target.value })} required />
      <select onChange={(e) => setData({ ...data, status: e.target.value })}>
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button className="primary" type="submit">Mark Attendance</button>

    </form>
  );
}
