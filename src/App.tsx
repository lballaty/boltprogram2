import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Tabs } from './components/navigation/Tabs';
import { Home } from './components/Home';
import { Lights } from './components/Lights';
import { Heat } from './components/Heat';
import { HASettings } from './components/settings/HASettings';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home />;
      case 'lights':
        return <Lights />;
      case 'heat':
        return <Heat />;
      case 'config':
        return <HASettings />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="p-6">
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;