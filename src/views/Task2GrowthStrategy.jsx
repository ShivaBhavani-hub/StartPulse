import React from "react";
import { Package, Tag, MapPin, Megaphone, CheckCircle2 } from "lucide-react";

export default function Task2GrowthStrategy({ data }) {
  const pFramework = [
    { label: "Product Moat", icon: Package, color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/5", desc: data?.fourPs?.product },
    { label: "Price Strategy", icon: Tag, color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", desc: data?.fourPs?.price },
    { label: "Place & Distribution", icon: MapPin, color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/5", desc: data?.fourPs?.place },
    { label: "Promotion Engine", icon: Megaphone, color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/5", desc: data?.fourPs?.promotion },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 4Ps Strategy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pFramework.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className={`p-5 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-xl flex flex-col justify-between`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 rounded-xl bg-slate-900 ${item.color}`}>
                  <Icon size={18} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">{item.label}</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Visual Roadmap Steps */}
      <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">12-Month Phased Scale Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {data?.roadmap?.map((r, idx) => (
            <div key={idx} className="relative bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
              <div className="inline-block px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase mb-2">
                {r.phase}
              </div>
              <h4 className="text-sm font-bold text-white mb-3">{r.title}</h4>
              <ul className="space-y-2">
                {r.milestones?.map((m, mIdx) => (
                  <li key={mIdx} className="text-xs text-slate-400 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}