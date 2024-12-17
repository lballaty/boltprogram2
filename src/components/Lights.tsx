import React from 'react';
import { useDeviceStore } from '../store/deviceStore';
import { DeviceCard } from './devices/DeviceCard';

export function Lights() {
  const devices = useDeviceStore((state) => 
    state.devices.filter(device => device.type === 'light')
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Lighting Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}