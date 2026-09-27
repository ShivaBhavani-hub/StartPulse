import React from "react";
import { AlertCircle, RefreshCw, Scale, CheckCircle } from "lucide-react";

export default function Task4CaseStudy({ data }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
          Executive Diagnostic Study
        </span>
        <h2 className="text-lg font-black text-white mt-1.5">{data?.caseTitle}</h2>
      </div>

      {/* 3 Pillars: Crisis -> Pivot -> Unit Economics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* The Bottleneck */}
        <div className="bg-rose-950/10 border border-rose-500/30 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase mb-2">
              <AlertCircle size={16} /> The Bottleneck
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">{data?.crisis}</p>
          </div>
          <div className="mt-4 text-[10px] text-rose-400/80 font-mono font-semibold">STAGE 01: PROBLEM</div>
        </div>

        {/* The Pivot */}
        <div className="bg-indigo-950/10 border border-indigo-500/30 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase mb-2">
              <RefreshCw size={16} /> Operational Pivot
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">{data?.pivot}</p>
          </div>
          <div className="mt-4 text-[10px] text-indigo-400/80 font-mono font-semibold">STAGE 02: EXECUTION</div>
        </div>

        {/* Unit Economics */}
        <div className="bg-emerald-950/10 border border-emerald-500/30 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-2">
              <Scale size={16} /> Unit Economics Moat
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">{data?.economics}</p>
          </div>
          <div className="mt-4 text-[10px] text-emerald-400/80 font-mono font-semibold">STAGE 03: DEFENSE</div>
        </div>
      </div>

      {/* 3 Key Strategic Lessons Card */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Strategic Takeaways</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data?.lessons?.map((lesson, idx) => (
            <div key={idx} className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5">
              <CheckCircle size={15} className="text-indigo-400 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-slate-300 font-medium">{lesson}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}