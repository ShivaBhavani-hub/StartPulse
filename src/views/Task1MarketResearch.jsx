import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ShieldCheck, AlertTriangle, Lightbulb, Flame, Award, Users, TrendingUp } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Task1MarketResearch({ data }) {
  const chartData = {
    labels: data?.marketShare?.map((item) => item.name) || ["Leader", "Challenger", "Others"],
    datasets: [
      {
        data: data?.marketShare?.map((item) => item.share) || [45, 30, 25],
        backgroundColor: ["#6366f1", "#06b6d4", "#3b82f6"],
        borderColor: "#0f172a",
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 11 } } },
    },
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Visual KPI Header Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <Award size={22} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Position</div>
            <div className="text-lg font-bold text-white">Category Leader</div>
          </div>
        </div>
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl">
          <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
            <TrendingUp size={22} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Market Moat</div>
            <div className="text-lg font-bold text-cyan-400">High Density</div>
          </div>
        </div>
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
            <Users size={22} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Target Cohort</div>
            <div className="text-lg font-bold text-emerald-400">Urban Core</div>
          </div>
        </div>
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl">
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
            <Lightbulb size={22} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Primary Engine</div>
            <div className="text-lg font-bold text-purple-400">Direct-to-App</div>
          </div>
        </div>
      </div>

      {/* Main Visual Grid: Chart & 4-Quadrant SWOT Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Market Share Donut Chart */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl">
          <h3 className="text-sm font-bold text-slate-200 mb-4 tracking-wide uppercase text-center">
            Competitive Market Share
          </h3>
          <div className="h-56 w-56 relative flex items-center justify-center">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* 4-Quadrant Visual SWOT Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Strengths */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-2">
              <ShieldCheck size={16} /> Strengths
            </div>
            {data?.swot?.strengths?.map((s, idx) => (
              <div key={idx} className="bg-slate-900/70 p-2.5 rounded-xl border border-emerald-500/20 mb-2 last:mb-0">
                <div className="text-xs font-bold text-emerald-200">{s.point}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">⚡ {s.action}</div>
              </div>
            ))}
          </div>

          {/* Weaknesses */}
          <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase mb-2">
              <AlertTriangle size={16} /> Weaknesses
            </div>
            {data?.swot?.weaknesses?.map((w, idx) => (
              <div key={idx} className="bg-slate-900/70 p-2.5 rounded-xl border border-rose-500/20 mb-2 last:mb-0">
                <div className="text-xs font-bold text-rose-200">{w.point}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">🛠️ {w.action}</div>
              </div>
            ))}
          </div>

          {/* Opportunities */}
          <div className="bg-cyan-950/20 border border-cyan-500/30 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase mb-2">
              <Lightbulb size={16} /> Opportunities
            </div>
            {data?.swot?.opportunities?.map((o, idx) => (
              <div key={idx} className="bg-slate-900/70 p-2.5 rounded-xl border border-cyan-500/20 mb-2 last:mb-0">
                <div className="text-xs font-bold text-cyan-200">{o.point}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">🚀 {o.action}</div>
              </div>
            ))}
          </div>

          {/* Threats */}
          <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
              <Flame size={16} /> Threats
            </div>
            {data?.swot?.threats?.map((t, idx) => (
              <div key={idx} className="bg-slate-900/70 p-2.5 rounded-xl border border-amber-500/20 mb-2 last:mb-0">
                <div className="text-xs font-bold text-amber-200">{t.point}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">🛡️ {t.action}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Benchmark Comparison Cards */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Competitive Benchmarking</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data?.competitors?.map((comp, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-800/80 p-3.5 rounded-xl flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm text-white">{comp.name}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">
                  {comp.share}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 space-y-1">
                <div><span className="text-slate-500">Moat:</span> {comp.usp}</div>
                <div><span className="text-slate-500">Retention:</span> {comp.retention}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}