import React from "react";
import { Layers, Rocket, Target, DollarSign, MapPin, Megaphone, Calendar } from "lucide-react";

export default function Task2GrowthStrategy({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div>
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Task 2: Business Growth Strategy Deliverable
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {data.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Marketing Mix (4Ps) & Phased Execution Framework
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
          <Rocket size={16} /> Contribution Margin Expansion Playbook
        </div>
      </div>

      {/* 4Ps Strategy Grid */}
      <div>
        <h3 className="text-base font-extrabold text-white flex items-center gap-2 mb-4">
          <Layers size={20} className="text-emerald-400" />
          The 4Ps Marketing Mix Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Product */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 border-t-4 border-t-emerald-500 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Product</span>
              <Target size={16} className="text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-white">Private-Label Essentials</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              {data.fourPs.product}
            </p>
          </div>

          {/* Price */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 border-t-4 border-t-indigo-500 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Price</span>
              <DollarSign size={16} className="text-indigo-400" />
            </div>
            <h4 className="text-sm font-bold text-white">Value Penetration Pricing</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              {data.fourPs.price}
            </p>
          </div>

          {/* Place */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 border-t-4 border-t-blue-500 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Place</span>
              <MapPin size={16} className="text-blue-400" />
            </div>
            <h4 className="text-sm font-bold text-white">Dark Store Placement</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              {data.fourPs.place}
            </p>
          </div>

          {/* Promotion */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 border-t-4 border-t-pink-500 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Promotion</span>
              <Megaphone size={16} className="text-pink-400" />
            </div>
            <h4 className="text-sm font-bold text-white">In-App Sampling Blitz</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              {data.fourPs.promotion}
            </p>
          </div>
        </div>
      </div>

      {/* Phased Strategic Roadmap */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-extrabold text-white flex items-center gap-2 mb-6">
          <Calendar size={20} className="text-emerald-400" />
          Phased Strategic Execution Roadmap
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.roadmap.map((stage, idx) => (
            <div key={idx} className="bg-slate-900/70 border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded">
                  {stage.phase}
                </span>
                <h4 className="text-sm font-bold text-white mt-2">{stage.title}</h4>
                <ul className="text-xs text-slate-400 mt-3 space-y-2">
                  {stage.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}