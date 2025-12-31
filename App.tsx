import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { ComponentsGrid } from './components/ComponentsGrid';
import { PromptVault } from './components/PromptVault';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Preview } from './components/Preview';
import { Pricing } from './components/Pricing';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Navigation />
      <Hero />
      <Problem />
      <ComponentsGrid />
      <PromptVault />
      <Preview />
      <WhoIsItFor />
      <Pricing />
    </div>
  );
};

export default App;