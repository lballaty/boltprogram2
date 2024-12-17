export interface Device {
  id: string;
  name: string;
  type: 'light' | 'switch' | 'sensor' | 'climate';
  state: string;
  room: string;
  icon?: string;
  attributes?: Record<string, any>;
}