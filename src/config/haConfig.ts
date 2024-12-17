export interface HAConfig {
  baseUrl: string;
  accessToken: string;
  isConnected: boolean;
}

export const defaultConfig: HAConfig = {
  baseUrl: '',
  accessToken: '',
  isConnected: false,
};