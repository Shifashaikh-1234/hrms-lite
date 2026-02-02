import { useEffect, useState } from "react";
import api from "../api/api";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterDate, setFilterDate] = useState("");


  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);


  const filteredRecords = filterDate
  ? records.filter(r => r.date === filterDate)
  : records;


  const loadAttendance = async (employeeId) => {
    setSelected(employeeId);
    setLoading(true);
    const res = await api.get(`/attendance/${employeeId}`);
    setRecords(res.data);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Mark Attendance */}
      <div className="bg-white p-6 rounded shadow">
        <AttendanceForm />
      </div>

      {/* View Attendance */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">View Attendance</h2>

        <select
          className="border p-2 rounded w-full"
          onChange={(e) => loadAttendance(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select Employee
          </option>
          {employees.map((e) => (
            <option key={e.employee_id} value={e.employee_id}>
              {e.full_name} ({e.employee_id})
            </option>
          ))}
        </select>

        <input
  type="date"
  className="border p-2 rounded mt-4"
  onChange={(e) => setFilterDate(e.target.value)}
/>

        {selected && (
          <AttendanceTable records={filteredRecords} loading={loading} />
        )}

      </div>
    </div>
  );
}
