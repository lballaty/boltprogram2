import React from 'react';
import { useDeviceStore } from '../../store/deviceStore';
import { DeviceCard } from './DeviceCard';

export function DeviceGrid() {
  const devices = useDeviceStore((state) => state.devices);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
}