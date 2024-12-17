import React, { useState } from 'react';
import { useHAStore } from '../../store/haStore';
import { HAService } from '../../services/haService';

export function HASettings() {
  const { config, setConfig, isPinging, setIsPinging, pingResult, setPingResult } = useHAStore();
  const [tempBaseUrl, setTempBaseUrl] = useState(config.baseUrl);
  const [tempAccessToken, setTempAccessToken] = useState(config.accessToken);

  const handleSave = () => {
    setConfig({
      baseUrl: tempBaseUrl,
      accessToken: tempAccessToken,
    });
  };

  const handlePing = async () => {
    setIsPinging(true);
    setPingResult(null);
    
    const haService = new HAService({
      ...config,
      baseUrl: tempBaseUrl,
      accessToken: tempAccessToken,
    });

    try {
      const result = await haService.pingServer();
      setPingResult(result);
    } finally {
      setIsPinging(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Home Assistant Connection</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Server URL</label>
          <input
            type="text"
            value={tempBaseUrl}
            onChange={(e) => setTempBaseUrl(e.target.value)}
            placeholder="http://homeassistant.local:8123"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Access Token</label>
          <input
            type="password"
            value={tempAccessToken}
            onChange={(e) => setTempAccessToken(e.target.value)}
            placeholder="Enter your long-lived access token"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Configuration
          </button>
          
          <button
            onClick={handlePing}
            disabled={isPinging}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isPinging ? 'Testing Connection...' : 'Test Connection'}
          </button>
        </div>

        {pingResult && (
          <div className={`mt-4 p-3 rounded-md ${
            pingResult.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {pingResult}
          </div>
        )}
      </div>
    </div>
  );
}