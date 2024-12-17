import React from 'react';
import logo from '../assets/logo.png';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <img
        src={logo}
        alt="Home Assistant Dashboard"
        className="w-64 h-64 object-contain"
      />
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to Home Assistant Dashboard
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        Control your smart home devices, manage automation, and monitor your environment
        all in one place.
      </p>
    </div>
  );
}