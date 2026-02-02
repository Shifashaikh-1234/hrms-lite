import { useEffect, useState } from "react";
import api from "../api/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const load = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white p-6 rounded shadow">
        <EmployeeForm onSuccess={load} />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <EmployeeList employees={employees} refresh={load} />
      </div>
    </div>
  );
}
