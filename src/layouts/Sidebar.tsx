import { NavLink } from 'react-router';
import {
  Home,
  User,
  Users,
  ClipboardList,
  UserPlus,
  BarChart3,
  Settings,
  ChevronsLeft,
  ChevronRight,
} from 'lucide-react';

const navLinks = [
  { to: '/dashboard', icon: Home, label: 'Home', end: true },
  { to: '/my-info', icon: User, label: 'My Info', hasChevron: true },
  { to: '/', icon: Users, label: 'People' },
  { to: '/team-management', icon: Users, label: 'Team Management', hasChevron: true },
  { to: '/project-setup', icon: ClipboardList, label: 'Project Setup', hasChevron: true },
  { to: '/hiring', icon: UserPlus, label: 'Hiring', hasChevron: true },
  { to: '/report', icon: BarChart3, label: 'Report', hasChevron: true },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      <aside className={`w-[280px] fixed top-4 left-4 bottom-4 rounded-[20px] text-white flex flex-col shadow-2xl z-50 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+16px)]'
      }`} style={{ background: '#3D3936' }}>
        <div className="flex items-center justify-between h-[92px] px-6 gap-[10px] rounded-t-[16px]">
          <div className="text-4xl font-black tracking-[-2px]">CORE</div>
          <button className="text-white" onClick={onClose}>
            <ChevronsLeft size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30 relative">
          {navLinks.map(({ to, icon: Icon, label, hasChevron, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  onClose();
                }
              }}
              className={({ isActive }) =>
                `flex items-center gap-[10px] px-4 h-[53px] rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-[#947550] shadow-sm'
                    : ''
                }`
              }
              style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 w-1 h-[30px] bg-white rounded-r-full" />
                  )}
                  <Icon size={20} />
                  <span>{label}</span>
                  {hasChevron && <ChevronRight size={20} className="ml-auto text-zinc-400" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-white/10">
          <NavLink
            to="/settings"
            onClick={(e) => {
              if (window.innerWidth < 1024) {
                onClose();
              }
            }}
            className="flex items-center gap-[10px] px-5 h-[53px] rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%', letterSpacing: '-0.02em' }}
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}