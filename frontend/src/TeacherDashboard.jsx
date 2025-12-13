import { useState } from 'react';
import StudentManager from './TeacherStudentManager';
import AttendanceManager from './TeacherAttendanceManager';

function TeacherDashboard({ teacher, onLogout }) {
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().slice(0, 10));
  const d = new Date(selectedDate + 'T00:00:00');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayName = days[d.getDay()];
  const dateStr = selectedDate;
  const isWeekend = d.getDay() === 0 || d.getDay() === 6;

  return (
    <div className="min-h-screen w-screen flex bg-slate-100">
      <aside className="hidden md:flex md:flex-col w-60 bg-sky-900 text-sky-50 shadow-md">
        <div className="h-14 flex items-center px-4 border-b border-sky-800">
          <span className="text-lg font-semibold tracking-tight">
             Attendance
          </span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('attendance')}
            className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${
              activeTab === 'attendance'
                ? 'bg-sky-700 font-semibold'
                : 'hover:bg-sky-800/70'
            }`}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-sky-900 text-[10px] font-semibold">
              A
            </span>
            Daily Attendance
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('students')}
            className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 ${
              activeTab === 'students'
                ? 'bg-sky-700 font-semibold'
                : 'hover:bg-sky-800/70'
            }`}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-200 text-sky-900 text-[10px] font-semibold">
              S
            </span>
            Students
          </button>
        </nav>
        <div className="px-4 py-3 border-t border-sky-800 text-[11px] text-sky-100/90">
          Logged in as
          <div className="font-medium text-sky-50">
            {teacher && teacher.name ? teacher.name : teacher.emp_id}
          </div>
          <div className="text-sky-100/90 text-[11px]">{teacher && teacher.emp_id ? teacher.emp_id : ''}</div>
          <button
            onClick={onLogout}
            className="mt-2 inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-sky-200 text-sky-900 text-[11px] font-semibold hover:bg-white"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 bg-sky-800 text-sky-50">
          <div className="flex items-center gap-2">
            <div className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-200 text-sky-900 text-xs font-semibold">
              {teacher && teacher.name ? teacher.name.split(' ').map(n=>n[0]).slice(0,2).join('') : 'T'}
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight">
                Teacher dashboard
              </h4>
              <p className="text-[11px] text-sky-100/90">
                Mark attendance and manage students
              </p>
              
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <div className="hidden sm:block text-right">
              <div className="font-medium text-sky-50">{teacher && teacher.name ? teacher.name : teacher.emp_id}</div>
              <div className="text-sky-100/90">{teacher && teacher.emp_id ? teacher.emp_id + ' • Teacher' : 'Teacher'}</div>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-sky-200 text-sky-900 font-semibold hover:bg-white"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-5 bg-slate-50">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Welcome{teacher && teacher.name ? `, ${teacher.name}` : ''}</h2>
            <div className="text-sm text-slate-600 mt-1">Day: {dayName}{dateStr && ` - ${dateStr}`}</div>
            {isWeekend && (
              <div className="mt-3 inline-block px-3 py-2 rounded bg-yellow-50 text-yellow-800 font-medium">
                No class is scheduled
              </div>
            )}
          </div>
          {activeTab === 'attendance' && (
            <AttendanceManager date={selectedDate} setDate={setSelectedDate} />
          )}
          {activeTab === 'students' && (
            <StudentManager />
          )}
        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;
