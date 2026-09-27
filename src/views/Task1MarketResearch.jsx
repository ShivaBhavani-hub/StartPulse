import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import {
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Flame,
  PieChart,
  Users,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Task1MarketResearch({ data }) {
  if (!data) return null;

  // Chart 1: Market Share Doughnut
  const marketShareChart = {
    labels: data.marketShare.map((m) => m.name),
    datasets: [
      {
        data: data.marketShare.map((m) => m.share),
        backgroundColor: ["#6366f1", "#ec4899", "#f97316", "#10b981"],
        borderWidth: 2,
        borderColor: "#020617",
      },
    ],
  };

  // Chart 2: Competitor SKU Breadth Comparison Bar Chart
  const skuComparisonChart = {
    labels: ["Blinkit (Zomato)", "Zepto", "Swiggy Instamart"],
    datasets: [
      {
        label: "Estimated SKU Catalog Breadth",
        data: [20000, 11000, 9500],
        backgroundColor: "#6366f1",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div>
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Task 1: Market Research Deliverable
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {data.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{data.scope}</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          ~46% Market Share Dominance
        </div>
      </div>

      {/* Executive Summary & Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-950/80 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle2 size={16} /> Executive Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {data.executiveSummary}
          </p>
        </div>
        <div className="bg-slate-950/80 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
            Fulfillment Architecture
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {data.fulfillment}
          </p>
        </div>
      </div>

      {/* SWOT Diagnostic Matrix */}
      <div>
        <h3 className="text-base font-extrabold text-white flex items-center gap-2 mb-4">
          <ShieldCheck className="text-indigo-400" size={20} />
          SWOT Diagnostic with Mitigation & Growth Levers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Strengths */}
          <div className="bg-slate-950/90 border border-emerald-900/40 rounded-2xl p-5 hover:border-emerald-500/50 transition">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <ShieldCheck size={16} /> STRENGTHS (INTERNAL)
              </h4>
              <span className="text-[10px] font-bold uppercase bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                Core Levers
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {data.swot.strengths.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="font-bold text-slate-200">• {s.point}</p>
                  <p className="text-slate-400 mt-1">
                    <strong className="text-emerald-400">Strategic Action:</strong> {s.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-slate-950/90 border border-rose-900/40 rounded-2xl p-5 hover:border-rose-500/50 transition">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <AlertTriangle size={16} /> WEAKNESSES (INTERNAL)
              </h4>
              <span className="text-[10px] font-bold uppercase bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded">
                Mitigation Required
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {data.swot.weaknesses.map((w, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="font-bold text-slate-200">• {w.point}</p>
                  <p className="text-slate-400 mt-1">
                    <strong className="text-rose-400">Mitigation:</strong> {w.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="bg-slate-950/90 border border-blue-900/40 rounded-2xl p-5 hover:border-blue-500/50 transition">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <TrendingUp size={16} /> OPPORTUNITIES (EXTERNAL)
              </h4>
              <span className="text-[10px] font-bold uppercase bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded">
                Growth Levers
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {data.swot.opportunities.map((o, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="font-bold text-slate-200">• {o.point}</p>
                  <p className="text-slate-400 mt-1">
                    <strong className="text-blue-400">Growth Lever:</strong> {o.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Threats */}
          <div className="bg-slate-950/90 border border-amber-900/40 rounded-2xl p-5 hover:border-amber-500/50 transition">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                <Flame size={16} /> THREATS (EXTERNAL)
              </h4>
              <span className="text-[10px] font-bold uppercase bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">
                Risk Defense
              </span>
            </div>
            <div className="space-y-2.5 text-xs">
              {data.swot.threats.map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="font-bold text-slate-200">• {t.point}</p>
                  <p className="text-slate-400 mt-1">
                    <strong className="text-amber-400">Defense:</strong> {t.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Analytics & Competitor Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Competitor Benchmark Table */}
        <div className="lg:col-span-2 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            Competitor Benchmark Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3">Platform</th>
                  <th className="p-3">Est. Share</th>
                  <th className="p-3">Core USP</th>
                  <th className="p-3">Catalog Breadth</th>
                  <th className="p-3">Retention Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                {data.competitors.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50">
                    <td className="p-3 font-bold text-white">{c.name}</td>
                    <td className="p-3 text-indigo-400 font-bold">{c.share}</td>
                    <td className="p-3 text-slate-300">{c.usp}</td>
                    <td className="p-3 text-slate-400">{c.breadth}</td>
                    <td className="p-3 text-slate-400">{c.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Market Share Doughnut */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-between shadow-lg">
          <div className="w-full text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2">
              <PieChart size={16} className="text-indigo-400" /> Market Share Split
            </h3>
            <p className="text-[11px] text-slate-500 mt-1">Relative Quick Commerce Volume</p>
          </div>
          <div className="w-full h-48 flex justify-center items-center my-2">
            <Doughnut
              data={marketShareChart}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: { color: "#94a3b8", font: { size: 10 } },
                  },
                },
                cutout: "70%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Target Audience Personas & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personas */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users size={16} className="text-indigo-400" /> Target Audience Profiles
          </h3>
          <div className="space-y-4">
            {data.personas.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-xs font-bold text-white">{p.title}</h4>
                  <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    {p.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1"><strong>Profile:</strong> {p.traits}</p>
                <p className="text-[11px] text-slate-400 mt-0.5"><strong>Core Need:</strong> {p.needs}</p>
                <p className="text-[11px] text-emerald-400 mt-1"><strong>Buying Trigger:</strong> {p.trigger}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Recommendations */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Lightbulb size={16} className="text-indigo-400" /> Actionable Recommendations
          </h3>
          <div className="space-y-3">
            {data.recommendations.map((r, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {r.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white">{r.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}