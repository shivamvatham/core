import React from 'react';

interface EmployeeCardProps {
  name: string;
  role: string;
  avatar: string;
  badgeIcon: React.ComponentType<{ size?: number; className?: string }>;
  statusColors: string[];
}

export default function EmployeeCard({ name, role, avatar, badgeIcon: BadgeIcon, statusColors }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
            <BadgeIcon size={14} className="text-white" />
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 text-center mb-1">{name}</h3>
        <p className="text-sm text-gray-500 text-center mb-4">{role}</p>
        
        <div className="flex gap-1.5">
          {statusColors.map((color, index) => (
            <div key={index} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
