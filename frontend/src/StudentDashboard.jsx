import { useEffect, useMemo, useState } from 'react';
import api from './api';

function StudentDashboard({ student, onLogout }) {

  // ✅ PREVENT BLANK SCREEN
  if (!student) {
    return <div className="p-4 text-slate-700">Loading student...</div>;
  }

  const [rows, setRows] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [filter, setFilter] = useState({ from: '', to: '' });
  const [passwords, setPasswords] = useState({
    new_password: '',
    confirm: ''
  });
  const [loading, setLoading] = useState(false);

  const loadPeriods = async () => {
    const res = await api.get('/student/periods');
    setPeriods(res.data || []);
  };

  const loadAttendance = async () => {
    setLoading(true);
    try {
      const params = {};
      if (filter.from) params.from = filter.from;
      if (filter.to) params.to = filter.to;

      const res = await api.get(
        `/student/attendance-periodwise/${student.id}`,
        { params }
      );
      setRows(res.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPeriods();
    loadAttendance();
    // eslint-disable-next-line
  }, []);

  const handleFilterChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = e => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    loadAttendance();
  };

  const changePassword = async e => {
    e.preventDefault();
    if (!passwords.new_password || passwords.new_password !== passwords.confirm) {
      return;
    }
    await api.put(`/student/password/${student.id}`, {
      new_password: passwords.new_password
    });
    setPasswords({ new_password: '', confirm: '' });
  };

  // date → period map
  const attendanceByDate = useMemo(() => {
    const map = {};
    rows.forEach(r => {
      const d = r.date.slice(0, 10);
      if (!map[d]) map[d] = {};
      map[d][r.period_no] = r.status;
    });
    return map;
  }, [rows]);

  const stats = useMemo(() => {
    let present = 0;
    let absent = 0;
    rows.forEach(r => {
      if (r.status === 'present') present++;
      if (r.status === 'absent') absent++;
    });
    const total = present + absent;
    return {
      present,
      absent,
      total,
      percentage: total ? Math.round((present / total) * 100) : 0
    };
  }, [rows]);

  const sortedDates = useMemo(
    () => Object.keys(attendanceByDate).sort(),
    [attendanceByDate]
  );

  return (
    <div className="min-h-screen w-screen bg-slate-100">
     <header className="h-14 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 bg-sky-800 text-sky-50">
        <div>
          <h1 className="text-sm font-semibold tracking-tight">
            Student dashboard
          </h1>
          <p className="text-[11px] text-sky-100/90">
            View your period-wise attendance and update password
          </p>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <div className="hidden sm:block text-right">
            <div className="font-medium text-sky-50">
              {student.admission_no}
            </div>
            <div className="text-sky-100/90">{student.name}</div>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-sky-200 text-sky-900 font-semibold hover:bg-white"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-0 py-5 space-y-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4">
            <h2 className="text-xs font-semibold text-slate-700 mb-1">
              Overall attendance (period-wise)
            </h2>
            <p className="text-2xl font-semibold text-sky-800">
              {stats.percentage}%
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {stats.present} periods present / {stats.absent} periods absent out
              of {stats.total} recorded periods.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4 flex flex-col justify-center">
            <h3 className="text-xs font-semibold text-slate-700">
              Present periods
            </h3>
            <p className="text-lg font-semibold text-emerald-700">
              {stats.present}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-md shadow-sm p-4 flex flex-col justify-center">
            <h3 className="text-xs font-semibold text-slate-700">
              Absent periods
            </h3>
            <p className="text-lg font-semibold text-red-700">
              {stats.absent}
            </p>
          </div>
        </section>

        {/* TABLE */}
        <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4 space-y-3">
  {/* Header + Filter */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    <div>
      <h2 className="text-sm font-semibold text-slate-800">
        Period-wise attendance
      </h2>
      <p className="text-[11px] text-slate-500">
        Choose a date range to view your attendance for each hour.
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-2 text-xs">
      <input
        type="date"
        name="from"
        value={filter.from}
        onChange={handleFilterChange}
        className="px-3 py-1.5 rounded border border-slate-300 focus:ring-2 focus:ring-sky-500"
      />
      <span className="text-slate-500 text-[11px]">to</span>
      <input
        type="date"
        name="to"
        value={filter.to}
        onChange={handleFilterChange}
        className="px-3 py-1.5 rounded border border-slate-300 focus:ring-2 focus:ring-sky-500"
      />
      <button
        onClick={applyFilter}
        className="px-4 py-1.5 rounded bg-sky-700 text-white font-semibold hover:bg-sky-800"
      >
        Apply
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto border border-slate-200 rounded">
    <table className="min-w-full text-xs divide-y divide-slate-200">
      <thead className="bg-slate-200">
        <tr>
          <th className="px-3 py-2 text-left font-medium text-slate-700">
            Date
          </th>
          {periods.map(p => (
            <th
              key={p.period_no}
              className="px-3 py-2 text-center font-medium text-slate-700"
            >
              {p.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-slate-200">
        {loading && (
          <tr>
            <td
              colSpan={1 + periods.length}
              className="px-3 py-3 text-center text-slate-500"
            >
              Loading...
            </td>
          </tr>
        )}

        {!loading &&
          sortedDates.map(d => (
            <tr key={d}>
              <td className="px-3 py-2 font-medium text-slate-800">
                {d}
              </td>

              {periods.map(p => {
                const status = attendanceByDate[d]?.[p.period_no];
                return (
                  <td key={p.period_no} className="py-2 text-center">
                    {status === 'present' && (
                      <span className="px-2 py-0.5 rounded bg-emerald-700 text-white">
                        P
                      </span>
                    )}
                    {status === 'absent' && (
                      <span className="px-2 py-0.5 rounded bg-red-700 text-white">
                        A
                      </span>
                    )}
                    {!status && (
                      <span className="px-2 py-0.5 rounded bg-slate-300 text-slate-700">
                        U
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}

        {!loading && sortedDates.length === 0 && (
          <tr>
            <td
              colSpan={1 + periods.length}
              className="px-3 py-3 text-center text-slate-500"
            >
              No attendance records for the selected dates.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</section>


        {/* PASSWORD */}
         <section className="bg-white border border-slate-200 rounded-md shadow-sm p-4 space-y-3">
          <h2 className="text-sm font-semibold text-slate-800">
            Change password
          </h2>
          <form
            onSubmit={changePassword}
            className="flex flex-col sm:flex-row gap-3 text-xs"
          >
            <input
              type="password"
              name="new_password"
              placeholder="New password"
              value={passwords.new_password}
              onChange={handlePasswordChange}
              className="flex-1 px-3 py-1.5 rounded border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="flex-1 px-3 py-1.5 rounded border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-sky-700 text-white font-semibold hover:bg-sky-800"
            >
              Change
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default StudentDashboard;
