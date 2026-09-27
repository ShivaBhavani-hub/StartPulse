import React, { useState } from "react";
import { Search, Sparkles, Loader2, TrendingUp } from "lucide-react";

export default function HeroSearch({ onSearch, loading }) {
  const [query, setQuery] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showKeyInput, setShowKeyInput] = useState(false);

  const presets = ["Blinkit", "Zomato", "Tesla", "Swiggy", "Spotify", "Ather Energy"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    onSearch(query.trim(), apiKey.trim());
  };

  const handleChipClick = (name) => {
    setQuery(name);
    onSearch(name, apiKey.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4 relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-6 animate-pulse">
        <Sparkles size={14} /> AI-Powered Strategic Intelligence Engine
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
        Instant Market & Growth Analysis for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">Any Company</span>
      </h1>
      
      <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-4 mb-8">
        Enter a brand or startup. StratPulse automatically evaluates the business across all 4 CodeAlpha Strategy tasks: Market Research, Growth Strategy, Campaign Design, and Case Study.
      </p>

      {/* Search Bar Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 shadow-2xl focus-within:border-indigo-500 transition-all backdrop-blur-xl">
          <div className="pl-3 text-slate-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Enter company name (e.g. Blinkit, Zepto, Nike)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
            className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 whitespace-nowrap"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {/* Optional Gemini API Key Toggle */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-2">
          <span>Uses live Google Gemini 1.5 Flash</span>
          <button
            type="button"
            onClick={() => setShowKeyInput(!showKeyInput)}
            className="text-indigo-400 hover:underline"
          >
            {showKeyInput ? "Hide API Key input" : "Provide custom Gemini API Key"}
          </button>
        </div>

        {showKeyInput && (
          <div className="mt-2 text-left animate-fadeIn">
            <input
              type="password"
              placeholder="Paste Gemini API Key (Optional — fallback data used if empty)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>
        )}
      </form>

      {/* Suggested Quick Chips */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-lg">
        <span className="text-xs text-slate-500 flex items-center gap-1">
          <TrendingUp size={13} /> Trending:
        </span>
        {presets.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => handleChipClick(name)}
            disabled={loading}
            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 text-xs text-slate-300 font-medium transition"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}