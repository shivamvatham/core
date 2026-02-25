import { Search, Download, Filter, Plus, Grid3x3, List, TreeDeciduousIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { User, Briefcase, Shield } from 'lucide-react';
import { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';

const employees = [
  { id: 1, name: 'John Doe', role: 'Senior Developer', avatar: 'https://i.pravatar.cc/150?img=1', badgeIcon: Briefcase, statusColors: ['#10b981', '#3b82f6', '#f59e0b'] },
  { id: 2, name: 'Jane Smith', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?img=2', badgeIcon: Shield, statusColors: ['#10b981', '#10b981', '#3b82f6'] },
  { id: 3, name: 'Mike Johnson', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=3', badgeIcon: User, statusColors: ['#3b82f6', '#f59e0b', '#10b981'] },
  { id: 4, name: 'Sarah Williams', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?img=4', badgeIcon: Briefcase, statusColors: ['#10b981', '#3b82f6', '#3b82f6'] },
  { id: 5, name: 'Tom Brown', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=5', badgeIcon: User, statusColors: ['#f59e0b', '#10b981', '#3b82f6'] },
  { id: 6, name: 'Emily Davis', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=6', badgeIcon: Briefcase, statusColors: ['#10b981', '#10b981', '#10b981'] },
  { id: 7, name: 'David Wilson', role: 'QA Engineer', avatar: 'https://i.pravatar.cc/150?img=7', badgeIcon: Shield, statusColors: ['#3b82f6', '#3b82f6', '#f59e0b'] },
  { id: 8, name: 'Lisa Anderson', role: 'Scrum Master', avatar: 'https://i.pravatar.cc/150?img=8', badgeIcon: User, statusColors: ['#10b981', '#f59e0b', '#f59e0b'] },
];

export default function People() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'tree'>('grid');

  return (
    <div className="h-[calc(100vh-128px)] mx-auto">
      <div className="bg-white rounded-[20px] h-full flex flex-col">
        <div className="rounded-xl p-4 flex-shrink-0">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Employee Name or Number"
                className="w-full pl-10 pr-4 py-2 border border-[#E5E5E4] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-3 rounded-2xl border border-[#E5E5E4] hover:bg-gray-50 transition-all active:scale-95">
                <Download size={20} className="text-gray-700" />
              </button>

              <button className="p-3 rounded-2xl border border-[#E5E5E4] hover:bg-gray-50 transition-all active:scale-95">
                <Filter size={20} className="text-gray-700" />
              </button>

              <button className="p-3 rounded-2xl bg-[#3D3936]  border border-[#18181B] transition-all active:scale-95">
                <Plus size={20} className="text-white" />
              </button>

              <div className="flex gap-[10px] border-[#E5E5E4] border-1 rounded-xl p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className="w-[40px] h-[40px] p-2 rounded-[12px] transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'grid' ? '#3D3936' : 'transparent' }}
                >
                  <Grid3x3 size={20} className={viewMode === 'grid' ? 'text-white' : 'text-gray-700'} />
                </button>
                
                <button 
                  onClick={() => setViewMode('list')}
                  className="w-[40px] h-[40px] p-2 rounded-[12px] transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'list' ? '#3D3936' : 'transparent' }}
                >
                  <List size={20} className={viewMode === 'list' ? 'text-white' : 'text-gray-700'} />
                </button>
                
                <button 
                  onClick={() => setViewMode('tree')}
                  className="w-[40px] h-[40px] p-2 rounded-[12px] transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'tree' ? '#3D3936' : 'transparent' }}
                >
                  <TreeDeciduousIcon size={20} className={viewMode === 'tree' ? 'text-white' : 'text-gray-700'} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[10px] pb-6">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                name={employee.name}
                role={employee.role}
                avatar={employee.avatar}
                badgeIcon={employee.badgeIcon}
                statusColors={employee.statusColors}
              />
            ))}
          </div>
        </div>

        <div className="px-6 py-4 flex flex-wrap">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Rows per page:</span>
              <select className="px-3 py-1.5 text-sm border border-[#e5e7eb] rounded-lg bg-white hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer">
                <option>100</option>
                <option>50</option>
                <option>25</option>
                <option>10</option>
              </select>
            </div>
            
            <div className="text-sm mt-2 text-gray-600">
              1-100 of 500
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center ">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center ">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}