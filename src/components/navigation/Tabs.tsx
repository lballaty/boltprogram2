import React from 'react';
import { HomeIcon, LightBulbIcon, FireIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface TabProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function Tabs({ currentTab, setCurrentTab }: TabProps) {
  const tabs = [
    { id: 'home', name: 'Home', icon: HomeIcon },
    { id: 'lights', name: 'Lights', icon: LightBulbIcon },
    { id: 'heat', name: 'Heat', icon: FireIcon },
    { id: 'config', name: 'Configuration', icon: Cog6ToothIcon },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8 px-4" aria-label="Tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={clsx(
                currentTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
              )}
            >
              <Icon className="h-5 w-5 mr-2" />
              {tab.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}