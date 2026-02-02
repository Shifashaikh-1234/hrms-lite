export default function AttendanceTable({ records, loading }) {
  if (loading) {
    return <p className="text-gray-500">Loading attendance...</p>;
  }

  if (!records.length) {
    return <p className="text-gray-500">No attendance records found.</p>;
  }

  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-3 py-2 text-left">Date</th>
          <th className="border px-3 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((r, idx) => (
          <tr key={idx}>
            <td className="border px-3 py-2">{r.date}</td>
            <td className="border px-3 py-2">
              <span
                className={`px-2 py-1 rounded text-sm ${
                  r.status === "Present"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {r.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
