import { Outlet } from 'react-router';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
