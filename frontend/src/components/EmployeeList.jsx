import api from "../api/api";
import React, { useState, useEffect } from "react";

export default function EmployeeList({ employees, refresh }) {
  const [presentCount, setPresentCount] = useState({});

  useEffect(() => {
    const fetchPresentDays = async () => {
      const counts = await Promise.all(
        employees.map((e) => api.get(`/employees/${e.employee_id}/present-days`))
      );
      setPresentCount(
        Object.fromEntries(
          counts.map((res, i) => [employees[i].employee_id, res.data.present_days])
        )
      );
    };

    if (employees.length) {
      fetchPresentDays();
    }
  }, [employees]);
  if (!employees.length) {
    return <p className="text-gray-500">No employees added yet.</p>;
  }

  const remove = async (id) => {
    await api.delete(`/employees/${id}`);
    refresh();
  };

  return (
    <div className="space-y-3">
      {employees.map((e) => (
        <div key={e.employee_id}
          className="flex justify-between items-center border p-3 rounded">
          <span>
            <strong>{e.full_name}</strong> — {e.department}
          </span>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => remove(e.employee_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
