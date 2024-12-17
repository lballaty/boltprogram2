import axios from 'axios';
import { HAConfig } from '../config/haConfig';

export class HAService {
  private config: HAConfig;

  constructor(config: HAConfig) {
    this.config = config;
  }

  async pingServer(): Promise<string> {
    try {
      const response = await axios.get(`${this.config.baseUrl}/api/`, {
        headers: {
          Authorization: `Bearer ${this.config.accessToken}`,
        },
        timeout: 5000,
      });

      if (response.status === 200) {
        return 'Connected successfully to Home Assistant';
      }
      return 'Failed to connect to Home Assistant';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return `Connection error: ${error.message}`;
      }
      return 'Unknown error occurred';
    }
  }
}