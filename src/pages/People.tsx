import { Search, Download, Filter, Plus, Grid3x3, List, TreeDeciduousIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { User, Briefcase, Shield } from 'lucide-react';
import { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';

const employees = [
  { id: 1, name: 'John', role: 'Senior Developer', avatar: 'https://i.pravatar.cc/150?img=1', badgeIcon: Briefcase, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 2, name: 'jayesh Smith', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?img=2', badgeIcon: Shield, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 3, name: 'Mike Johnson', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=3', badgeIcon: User, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 4, name: 'shivam Williams', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?img=4', badgeIcon: Briefcase, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 5, name: 'priya Brown', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/150?img=5', badgeIcon: User, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 6, name: 'Meet Patel', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/150?img=6', badgeIcon: Briefcase, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 7, name: 'David Wilson', role: 'QA Engineer', avatar: 'https://i.pravatar.cc/150?img=7', badgeIcon: Shield, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
  { id: 8, name: 'Lisa Anderson', role: 'Scrum Master', avatar: 'https://i.pravatar.cc/150?img=8', badgeIcon: User, statusColors: ['#FFC83E', '#70D32E', '#6194EC', '#FB8C3D'] },
];

export default function People() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'tree'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div className="h-[calc(100vh-8rem)] mx-auto">
      <div className="bg-white rounded-3xl h-full flex flex-col">
        <div className="rounded-xl p-4 flex-shrink-0">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by Employee Name or Number"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-[#E5E5E4] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-3 rounded-2xl border border-[#E5E5E4] hover:bg-gray-50 transition-all active:scale-95">
                <Download size={20} className="text-gray-700" />
              </button>

              <button className="p-3 rounded-2xl border border-[#E5E5E4] hover:bg-gray-50 transition-all active:scale-95">
                <Filter size={20} className="text-gray-700" />
              </button>

              <button className="p-3 rounded-2xl bg-[#3D3936] border border-[#18181B] transition-all active:scale-95">
                <Plus size={20} className="text-white" />
              </button>

              <div className="flex gap-2.5 border border-[#E5E5E4] rounded-xl p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className="w-10 h-10 p-2 rounded-xl transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'grid' ? '#3D3936' : 'transparent' }}
                >
                  <Grid3x3 size={20} className={viewMode === 'grid' ? 'text-white' : 'text-gray-700'} />
                </button>
                
                <button 
                  onClick={() => setViewMode('list')}
                  className="w-10 h-10 p-2 rounded-xl transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'list' ? '#3D3936' : 'transparent' }}
                >
                  <List size={20} className={viewMode === 'list' ? 'text-white' : 'text-gray-700'} />
                </button>
                
                <button 
                  onClick={() => setViewMode('tree')}
                  className="w-10 h-10 p-2 rounded-xl transition-all flex items-center justify-center"
                  style={{ background: viewMode === 'tree' ? '#3D3936' : 'transparent' }}
                >
                  <TreeDeciduousIcon size={20} className={viewMode === 'tree' ? 'text-white' : 'text-gray-700'} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
          <div className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,248px)] gap-2.5 pb-6 justify-center">
            {displayedEmployees.map((employee) => (
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

        <div className="px-6 py-4 flex-shrink-0">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Rows per page:</span>
              <select 
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={50}>50</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredEmployees.length === 0 ? '0-0 of 0' : `${startIndex + 1}-${Math.min(endIndex, filteredEmployees.length)} of ${filteredEmployees.length}`}
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || filteredEmployees.length === 0}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}