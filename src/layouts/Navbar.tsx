import { Clock, FileText, Bell, Menu } from 'lucide-react';
import { useLocation } from 'react-router';

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/my-info': 'My Info',
  '/people': 'People',
  '/team-management': 'Team Management',
  '/project-setup': 'Project Setup',
  '/hiring': 'Hiring',
  '/report': 'Report',
  '/settings': 'Settings',
};

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const location = useLocation();
  const currentLabel = routeLabels[location.pathname] || 'Dashboard';

  return (
    <header className="bg-white h-[80px] fixed top-4 left-4 lg:left-[312px] right-4 rounded-[20px] flex items-center justify-between gap-[10px] px-6 shadow-lg">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-gray-700" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className="font-medium text-[#3D3936]" style={{ fontSize: '18px', lineHeight: '100%', letterSpacing: '-0.02em' }}>{currentLabel}</h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden sm:flex px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-700">
          MST
        </div>
        
        <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-700">
          <Clock size={16} />
          <span>02:03:02</span>
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
          <FileText size={20} className="text-gray-700" />
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} className="text-gray-700" />
        </button>
        
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm">
          U
        </div>
      </div>
    </header>
  );
}
