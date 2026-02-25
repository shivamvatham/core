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
    <div className="w-full flex justify-center">
      <div className="w-[248px] h-[267px] rounded-[24px] border border-[#E5E5E4] p-6 flex flex-col items-center gap-[10px]">
        <div className="relative">
          <img src={avatar} alt={name} className="w-[100px] h-[100px] rounded-full object-cover" />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center border-2 border-black">
            <BadgeIcon size={16} className="text-white" />
          </div>
        </div>
        
        <h3 className="font-medium text-[#9CA3AF] text-center">{name}</h3>
        <p className="text-sm text-[#D4A574] text-center">{role}</p>
        
        <div className="flex gap-2 mt-auto">
          {statusColors.map((color, index) => (
            <div key={index} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
