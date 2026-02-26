import React from 'react';
import gearIcon from '../assets/VectorGear.png';

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
      <div className="w-full max-w-[248px] aspect-[248/267] rounded-3xl border border-[#E5E5E4] p-6 flex flex-col items-center gap-2.5">
        <div className="relative">
          <img src={avatar} alt={name} className="w-24 h-24 md:w-[100px] md:h-[100px] rounded-full object-cover" />
          <div className="absolute bottom-0 right-0 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
            <img src={gearIcon} alt="gear" className="absolute w-full h-full" />
            <div className="relative z-10">
              <BadgeIcon size={14} className="text-white md:w-4 md:h-4" />
            </div>
          </div>
        </div>
        
        <h3 className="font-medium text-[#3D3936] text-center text-sm md:text-base">{name}</h3>
        <p className="text-xs md:text-sm text-[#947550] text-center">{role}</p>
        
        <div className="flex gap-1.5 md:gap-2 mt-auto">
          {statusColors.map((color, index) => (
            <div key={index} className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
