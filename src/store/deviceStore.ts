import { create } from 'zustand';
import { Device } from '../types/device';

interface DeviceStore {
  devices: Device[];
  toggleDevice: (id: string) => void;
  updateDevice: (id: string, updates: Partial<Device>) => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  devices: [
    {
      id: '1',
      name: 'Living Room Light',
      type: 'light',
      state: 'off',
      room: 'Living Room',
    },
    {
      id: '2',
      name: 'Kitchen Temperature',
      type: 'sensor',
      state: '22.5',
      room: 'Kitchen',
      attributes: { unit: '°C' },
    },
    {
      id: '3',
      name: 'Bedroom AC',
      type: 'climate',
      state: 'on',
      room: 'Bedroom',
      attributes: { temperature: 20, mode: 'cool' },
    },
  ],
  toggleDevice: (id) =>
    set((state) => ({
      devices: state.devices.map((device) =>
        device.id === id
          ? { ...device, state: device.state === 'on' ? 'off' : 'on' }
          : device
      ),
    })),
  updateDevice: (id, updates) =>
    set((state) => ({
      devices: state.devices.map((device) =>
        device.id === id ? { ...device, ...updates } : device
      ),
    })),
}));