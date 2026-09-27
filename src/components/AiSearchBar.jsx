import React, { useState } from "react";
import { Sparkles, X, Loader2 } from "lucide-react";
import { generateStrategicReport } from "../services/geminiService";

export default function AiSearchBar({ isOpen, onClose, onDataGenerated }) {
  const [companyName, setCompanyName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!companyName.trim()) {
      setError("Please enter a company name.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const generated = await generateStrategicReport(companyName, apiKey);
      onDataGenerated(generated);
      onClose();
    } catch (err) {
      setError(err.message || "Failed to generate AI report. Check your API key or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-indigo-400" size={18} />
          <h3 className="text-base font-bold text-white">Generate Custom Strategic Report</h3>
        </div>
        <p className="text-xs text-slate-400 mb-5 leading-relaxed">
          Powered by Google Gemini 2.5 Flash. Enter any company or startup to auto-generate reports for all 4 tasks simultaneously.
        </p>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-slate-300 block mb-1">Target Company or Sector</label>
            <input
              type="text"
              placeholder="e.g. Ather Energy, Swiggy, Nike, OpenAI"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-300 block mb-1">
              Google Gemini API Key <span className="text-slate-500 font-normal">(Optional if using preloaded data)</span>
            </label>
            <input
              type="password"
              placeholder="AIzaSy..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>

          {error && <p className="text-[11px] text-rose-400 bg-rose-950/40 p-2 rounded border border-rose-900">{error}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-bold px-4 py-1.5 rounded-lg flex items-center gap-1.5 transition"
            >
              {loading && <Loader2 size={14} className="animate-spin" />}
              {loading ? "Analyzing..." : "Generate Analysis"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}