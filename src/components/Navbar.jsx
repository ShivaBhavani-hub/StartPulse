import React from "react";
import {
  LineChart,
  Search,
  Rocket,
  Megaphone,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Navbar({ activeTab, setActiveTab, onOpenAiModal }) {
  const navItems = [
    { id: "task1", label: "Task 1: Market Research", icon: Search },
    { id: "task2", label: "Task 2: Growth Strategy", icon: Rocket },
    { id: "task3", label: "Task 3: Campaign Design", icon: Megaphone },
    { id: "task4", label: "Task 4: Case Study", icon: BookOpen },
  ];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <LineChart size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black tracking-tight text-white">StratPulse</h1>
              <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                CodeAlpha Suite
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Business & Marketing Strategy Intelligence</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* AI Analysis Trigger */}
        <button
          onClick={onOpenAiModal}
          className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
        >
          <Sparkles size={14} />
          <span>AI Generator</span>
        </button>
      </div>
    </header>
  );
}