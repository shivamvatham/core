import { NavLink } from 'react-router';
import {
  Home,
  User,
  Users,
  ClipboardList,
  UserPlus,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-[280px] fixed top-4 left-4 bottom-4 rounded-[20px] text-white flex flex-col shadow-2xl" style={{ background: '#3D3936' }}>
      {/* Header */}
      <div className="flex items-center justify-between h-[92px] px-6 gap-[10px] rounded-t-[16px]">
        <div className="text-4xl font-black tracking-[-2px]">CORE</div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {/* Home */}
        <NavLink
          to="/"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        {/* My Info */}
        <NavLink
          to="/my-info"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <User size={20} />
          <span>My Info</span>
          <ChevronRight size={20} className="ml-auto text-zinc-400" />
        </NavLink>

        {/* People – Active / Highlighted (exactly as in screenshot) */}
        <NavLink
          to="/people"
          className={({ isActive }) =>
            `flex items-center gap-[10px] px-4 h-[53px] rounded-xl transition-all ${
              isActive
                ? 'bg-white text-zinc-950 shadow-sm'
                : 'hover:bg-zinc-900'
            }`
          }
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <Users size={20} />
          <span>People</span>
        </NavLink>

        {/* Team Management */}
        <NavLink
          to="/team-management"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <Users size={20} />
          <span>Team Management</span>
          <ChevronRight size={20} className="ml-auto text-zinc-400" />
        </NavLink>

        {/* Project Setup */}
        <NavLink
          to="/project-setup"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <ClipboardList size={20} />
          <span>Project Setup</span>
          <ChevronRight size={20} className="ml-auto text-zinc-400" />
        </NavLink>

        {/* Hiring */}
        <NavLink
          to="/hiring"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <UserPlus size={20} />
          <span>Hiring</span>
          <ChevronRight size={20} className="ml-auto text-zinc-400" />
        </NavLink>

        {/* Report */}
        <NavLink
          to="/report"
          className="flex items-center gap-[10px] px-4 h-[53px] rounded-xl hover:bg-zinc-900 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <BarChart3 size={20} />
          <span>Report</span>
          <ChevronRight size={20} className="ml-auto text-zinc-400" />
        </NavLink>
      </nav>

      {/* Settings – Bottom section (exactly as in screenshot) */}
      <div className="p-4 border-t border-zinc-800">
        <NavLink
          to="/settings"
          className="flex items-center gap-[10px] px-5 h-[53px] rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}