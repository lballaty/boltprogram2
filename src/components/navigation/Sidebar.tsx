import React from 'react';
import { HomeIcon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Home Control</h2>
      </div>
      <nav className="mt-4">
        <NavItem icon={<HomeIcon className="h-6 w-6" />} label="Overview" active />
        <NavItem icon={<ChartBarIcon className="h-6 w-6" />} label="Statistics" />
        <NavItem icon={<Cog6ToothIcon className="h-6 w-6" />} label="Settings" />
      </nav>
    </aside>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-3 text-sm ${
        active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
}