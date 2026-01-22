
import React, { useState } from 'react';
import { LayoutDashboard, Database, Briefcase, FileText, Settings, Rocket, FileQuestion, Megaphone, CheckCircle2, DollarSign, Share2 } from 'lucide-react';
import Dashboard from './components/Dashboard';
import DatabaseStructure from './components/DatabaseStructure';
import MarketingAssets from './components/MarketingAssets';
import SetupGuide from './components/SetupGuide';
import PricingLadder from './components/PricingLadder';
import DistributionHub from './components/DistributionHub';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'structure' | 'marketing' | 'guide' | 'pricing' | 'distribution'>('preview');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-slate-800 text-lg">fintrack</h1>
          </div>
          <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Freelance OS Pro</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <button
            onClick={() => setActiveTab('preview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'preview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <Briefcase className="w-4 h-4" />
            Product Preview
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'pricing' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <DollarSign className="w-4 h-4" />
            Pricing Ladder
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'structure' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <Database className="w-4 h-4" />
            Database Schema
          </button>
          
          <div className="pt-4 pb-2 px-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth Engine</p>
          </div>
          
          <button
            onClick={() => setActiveTab('marketing')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'marketing' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <Megaphone className="w-4 h-4" />
            Sales Copy
          </button>
          <button
            onClick={() => setActiveTab('distribution')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'distribution' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <Share2 className="w-4 h-4" />
            Distribution Hub
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'guide' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <FileQuestion className="w-4 h-4" />
            Tutorial Script
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="text-xs text-slate-500 mb-2 font-medium">Potential ROI</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              $2,400/mo Target
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {activeTab === 'preview' && "The Visual Demo"}
              {activeTab === 'pricing' && "The Pricing Ladder"}
              {activeTab === 'structure' && "The Technical Build"}
              {activeTab === 'marketing' && "Gumroad Copy Engine"}
              {activeTab === 'distribution' && "Multi-Channel Distribution"}
              {activeTab === 'guide' && "Onboarding & Scripts"}
            </h2>
            <p className="text-slate-500 mt-1">
              {activeTab === 'preview' && "High-fidelity preview for your landing page."}
              {activeTab === 'pricing' && "Tiered pricing to increase average order value."}
              {activeTab === 'structure' && "Opinionated defaults for robust system design."}
              {activeTab === 'marketing' && "Conversion-optimized copy for maximum sales."}
              {activeTab === 'distribution' && "Ready-to-use posts for LinkedIn, Twitter, and Reddit."}
              {activeTab === 'guide' && "Short-form video scripts to drive traffic."}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Configure
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Launch Product
            </button>
          </div>
        </header>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px]">
          {activeTab === 'preview' && <Dashboard />}
          {activeTab === 'pricing' && <PricingLadder />}
          {activeTab === 'structure' && <DatabaseStructure />}
          {activeTab === 'marketing' && <MarketingAssets />}
          {activeTab === 'distribution' && <DistributionHub />}
          {activeTab === 'guide' && <SetupGuide />}
        </div>
      </main>
    </div>
  );
};

export default App;
