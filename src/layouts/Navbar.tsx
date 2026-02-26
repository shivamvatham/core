import { Clock, FileText, Bell, Menu } from 'lucide-react';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

const routeLabels: Record<string, string> = {
  '/dashboard': 'Home',
  '/': 'People',
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
  isOpen: boolean;
}

export default function Navbar({ onMenuClick, isOpen }: NavbarProps) {
  const location = useLocation();
  const currentLabel = routeLabels[location.pathname] || 'Dashboard';
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  return (
    <header className={`bg-white h-18 fixed top-4 right-4 rounded-3xl flex items-center justify-between gap-2.5 px-6 transition-all ${
      isOpen ? 'lg:left-[312px] left-4' : 'left-4'
    }`}>
      <div className="flex items-center gap-4">
        <button className={`text-gray-700 ${isOpen ? 'lg:hidden' : ''}`} onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className="font-medium text-[#3D3936] text-lg leading-none tracking-tight">{currentLabel}</h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden sm:flex px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-700">
          MST
        </div>
        
        <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-700">
          <Clock size={16} />
          <span>{formatTime(time)}</span>
          <button className="hover:bg-gray-100 rounded-full transition-colors hidden md:block">
          <FileText size={16} className="text-gray-700" />
        </button>
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={20} className="text-gray-700" />
        </button>
        
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="User" 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
