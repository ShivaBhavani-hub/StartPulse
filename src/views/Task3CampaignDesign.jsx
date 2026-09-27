import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Calculator, Target, DollarSign, Users } from "lucide-react";

export default function Task3CampaignDesign({ data }) {
  const [budget, setBudget] = useState(50000);
  const [cpc, setCpc] = useState(1.5);
  const [conversionRate, setConversionRate] = useState(3.0);

  const clicks = Math.round(budget / cpc);
  const conversions = Math.round(clicks * (conversionRate / 100));
  const cac = conversions > 0 ? (budget / conversions).toFixed(2) : 0;

  const budgetData = {
    labels: data?.budgetAllocation?.map((b) => b.channel) || ["Reels", "Search", "Influencers"],
    datasets: [
      {
        data: data?.budgetAllocation?.map((b) => b.percentage) || [45, 35, 20],
        backgroundColor: ["#ec4899", "#8b5cf6", "#06b6d4"],
        borderColor: "#0f172a",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Campaign Concept Strip */}
      <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900 border border-indigo-500/20 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded-full">
            Flagship Campaign
          </span>
          <h2 className="text-xl font-black text-white mt-1">{data?.campaignName}</h2>
          <p className="text-xs text-slate-400 mt-1">{data?.objective}</p>
        </div>
        <div className="px-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-right">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Target Cohort</div>
          <div className="text-xs font-bold text-indigo-300">{data?.targetAudience}</div>
        </div>
      </div>

      {/* Visual Interactive Split: Simulator + Channel Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive CAC Simulator */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4">
            <Calculator size={18} className="text-indigo-400" />
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Interactive Campaign CAC & Funnel Simulator
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Ad Spend Budget</span>
                <span className="text-white font-mono font-bold">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] text-slate-400 mb-1">Avg CPC ($)</div>
                <input
                  type="number"
                  step="0.1"
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 mb-1">Conversion Rate (%)</div>
                <input
                  type="number"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Calculated KPI Outputs */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Total Clicks</div>
                <div className="text-base font-bold text-white font-mono">{clicks.toLocaleString()}</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Acquisitions</div>
                <div className="text-base font-bold text-emerald-400 font-mono">{conversions.toLocaleString()}</div>
              </div>
              <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-500/30 text-center">
                <div className="text-[10px] text-indigo-400 uppercase font-semibold">Est. CAC</div>
                <div className="text-base font-bold text-indigo-300 font-mono">${cac}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Allocation Chart */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Media Mix Split</h4>
          <div className="h-48 w-48 relative flex items-center justify-center">
            <Doughnut
              data={budgetData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: "bottom", labels: { color: "#94a3b8", font: { size: 10 } } } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}