import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className={`pt-[110px] pr-4 pb-2 pl-6 transition-all ${
        isSidebarOpen ? 'lg:ml-[296px]' : ''
      }`}>
        <Outlet />
      </main>
    </div>
  );
}
