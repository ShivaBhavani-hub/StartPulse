import React, { useState } from "react";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import HeroSearch from "./components/HeroSearch";
import Task1MarketResearch from "./views/Task1MarketResearch";
import Task2GrowthStrategy from "./views/Task2GrowthStrategy";
import Task3CampaignDesign from "./views/Task3CampaignDesign";
import Task4CaseStudy from "./views/Task4CaseStudy";
import { generateStrategicReport } from "./services/geminiService";
import { RotateCcw } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("task1");
  const [analyzedCompany, setAnalyzedCompany] = useState("");
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchCompany = async (companyName, apiKey) => {
    setLoading(true);
    setAnalyzedCompany(companyName);
    try {
      const data = await generateStrategicReport(companyName, apiKey);
      setReportData(data);
      setActiveTab("task1");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReportData(null);
    setAnalyzedCompany("");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Interactive 3D Background */}
      <Background3D />

      {/* Top Navbar: only visible once a company is analyzed */}
      {reportData && (
        <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-sm">
                SP
              </div>
              <div>
                <h1 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{analyzedCompany}</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Analysis Active
                  </span>
                </h1>
                <p className="text-[10px] text-slate-400">4-Task Strategy Diagnostic Suite</p>
              </div>
            </div>

            {/* Task Switcher Navigation */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
              {[
                { id: "task1", label: "Task 1: Market Research" },
                { id: "task2", label: "Task 2: Growth Strategy" },
                { id: "task3", label: "Task 3: Campaign Design" },
                { id: "task4", label: "Task 4: Case Study" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Change Company Button */}
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
            >
              <RotateCcw size={13} />
              <span>New Analysis</span>
            </button>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        {!reportData ? (
          /* Initial Hero Landing: Search Any Company */
          <HeroSearch onSearch={handleSearchCompany} loading={loading} />
        ) : (
          /* Populated 4-Task Views */
          <div>
            {activeTab === "task1" && <Task1MarketResearch data={reportData.task1} />}
            {activeTab === "task2" && <Task2GrowthStrategy data={reportData.task2} />}
            {activeTab === "task3" && <Task3CampaignDesign data={reportData.task3} />}
            {activeTab === "task4" && <Task4CaseStudy data={reportData.task4} />}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 py-4 text-center text-xs text-slate-500">
        StratPulse Intelligence • Dynamic Market & Strategy Evaluation Platform
      </footer>
    </div>
  );
}