import { Search, Download, Filter, Plus, Grid3x3, List } from 'lucide-react';
import { User, Briefcase, Shield } from 'lucide-react';
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
  return (
    <div className="max-w-[1066px] mx-auto">
      <div className="bg-white rounded-[20px] p-6 space-y-6">
      {/* Toolbar */}
      <div className="rounded-xl p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by Employee Name or Number"
              className="w-full pl-10 pr-4 py-2 border border-[#E5E5E4] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Download size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter size={20} className="text-gray-700" />
            </button>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              <Plus size={20} className="text-white" />
            </button>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Grid3x3 size={20} className="text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 transition-colors">
                <List size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
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

      {/* Pagination */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Rows per page:</span>
            <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>8</option>
              <option>16</option>
              <option>24</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">1-8 of 8</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
