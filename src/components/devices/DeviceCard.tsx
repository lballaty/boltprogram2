import React from 'react';
import { Device } from '../../types/device';
import { useDeviceStore } from '../../store/deviceStore';
import { Switch } from '../ui/Switch';

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const toggleDevice = useDeviceStore((state) => state.toggleDevice);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
          <p className="text-sm text-gray-500">{device.room}</p>
        </div>
        {device.type === 'light' || device.type === 'switch' ? (
          <Switch
            checked={device.state === 'on'}
            onChange={() => toggleDevice(device.id)}
          />
        ) : (
          <div className="text-lg font-medium">
            {device.state}
            {device.attributes?.unit}
          </div>
        )}
      </div>
    </div>
  );
}