import React, { useState } from "react";
import {
  Sliders,
  Eye,
  MousePointer,
  DownloadCloud,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Share2,
} from "lucide-react";

export default function Task3CampaignDesign({ data }) {
  if (!data) return null;

  // Interactive Budget Slider State (Defaults to ₹1,00,000)
  const [budget, setBudget] = useState(100000);

  // Dynamic Funnel Calculations
  const impressions = Math.round((budget / 200) * 1000); // CPM ~ ₹200
  const clicks = Math.round(impressions * 0.03); // CTR = 3.0%
  const leads = Math.round(clicks * 0.25); // Install Rate = 25%
  const orders = Math.round(leads * 0.5); // Conversion = 50%
  const cac = Math.round(budget / (orders || 1));

  // 8 Presentation Slides for Task 3
  const slides = [
    {
      title: "Campaign Theme: #NeedItIn10",
      category: "Slide 1 of 8: Core Objective",
      bullets: [
        "Objective: Establish Blinkit as the default choice for immediate household & impulse needs.",
        "Target Audience: High-density metro dwellers, young working professionals, and urban students.",
        "Campaign Duration: 6-week integrated digital sprint across metro catchments.",
      ],
    },
    {
      title: "Audience Persona & Pain Points",
      category: "Slide 2 of 8: Market Fit",
      bullets: [
        "Primary Segment: Time-starved corporate workers needing emergency ingredients during work hours.",
        "Secondary Segment: Gen-Z impulse consumers looking for late-night snacks and beauty essentials.",
        "Core Message: 'If you forgot it, we are already downstairs.'",
      ],
    },
    {
      title: "Omnichannel Channel Mix",
      category: "Slide 3 of 8: Channel Strategy",
      bullets: [
        "Meta Ads (Instagram Reels): 45% budget allocation for relatable short-form video skits.",
        "Google Universal App Campaigns (UAC): 30% allocation targeting high-intent grocery app installs.",
        "Micro-Influencers: 25% allocation for authentic 10-minute delivery reaction challenges.",
      ],
    },
    {
      title: "Creative Strategy & Hooks",
      category: "Slide 4 of 8: Creative Angles",
      bullets: [
        "Hook 1: 'Ran out of milk right before your 9 AM Zoom call?'",
        "Hook 2: 'Phone charger broke at 2% battery? Delivered before it dies.'",
        "Visual Language: Fast-paced, comedic, real-life relatable stress relieved instantly.",
      ],
    },
    {
      title: "4-Week Phased Content Calendar",
      category: "Slide 5 of 8: Content Execution",
      bullets: [
        "Week 1: Problem awareness skits & meme marketing blitz.",
        "Week 2: Micro-influencer speed tests ('Can Blinkit beat my elevator?').",
        "Week 3: Exclusive promotion blitz (Free delivery + ₹100 instant discount on 1st order).",
        "Week 4: User-Generated Content (UGC) testimonials and community highlights.",
      ],
    },
    {
      title: "Budget Allocation Breakdown",
      category: "Slide 6 of 8: Financial Model",
      bullets: [
        "Performance Advertising (Meta & Google): 60% of total ad spend.",
        "Creator & Influencer Production Fees: 25% of budget.",
        "Promotional First-Order Coupon Subsidies: 15% of budget.",
      ],
    },
    {
      title: "Funnel KPIs & Conversion Benchmarks",
      category: "Slide 7 of 8: Metrics & ROI",
      bullets: [
        "Target Blended CPM: ₹180–₹220 across metro tier-1 clusters.",
        "Landing-to-App Install Conversion Benchmark: >22%.",
        "Target Blended Customer Acquisition Cost (CAC): < ₹60 per acquired user.",
      ],
    },
    {
      title: "Post-Campaign Retention & LTV",
      category: "Slide 8 of 8: Customer Lifecycle",
      bullets: [
        "Day 3 & Day 7 Automated WhatsApp / Push re-order triggers based on basket history.",
        "Free 30-day Zomato Gold membership unlocked after completing second Blinkit order.",
        "Target 30-day cohort retention rate: > 38%.",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-pink-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div>
          <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">
            Task 3: Marketing Campaign Deliverable
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Digital Campaign Design: {data.campaignName}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Omnichannel Social Plan, Budget Funnel Model & 8-Slide Pitch Deck
          </p>
        </div>
        <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
          <Share2 size={16} /> 6-Week Integrated Digital Blitz
        </div>
      </div>

      {/* Interactive Budget & Funnel Calculator */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Sliders size={20} className="text-pink-400" />
              Dynamic Budget & Acquisition Funnel Calculator
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Adjust the monthly digital ad spend to recalculate expected impressions, app installs, and conversions.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400">Allocated Budget:</span>
            <span className="text-2xl font-black text-pink-400 block">
              ₹{budget.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="25000"
          max="500000"
          step="25000"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-8"
        />

        {/* Funnel Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1.5">
              <Eye size={14} className="text-pink-400" /> Impressions
            </span>
            <p className="text-xl font-black text-white mt-1.5">
              {impressions.toLocaleString("en-IN")}
            </p>
            <span className="text-[10px] text-pink-400 mt-1 block">Est. CPM: ~₹200</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1.5">
              <MousePointer size={14} className="text-pink-400" /> Ad Clicks
            </span>
            <p className="text-xl font-black text-white mt-1.5">
              {clicks.toLocaleString("en-IN")}
            </p>
            <span className="text-[10px] text-pink-400 mt-1 block">Est. CTR: 3.0%</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1.5">
              <DownloadCloud size={14} className="text-pink-400" /> App Installs
            </span>
            <p className="text-xl font-black text-white mt-1.5">
              {leads.toLocaleString("en-IN")}
            </p>
            <span className="text-[10px] text-pink-400 mt-1 block">Conversion: ~25%</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
            <span className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1.5">
              <ShoppingBag size={14} className="text-emerald-400" /> First Orders
            </span>
            <p className="text-xl font-black text-emerald-400 mt-1.5">
              {orders.toLocaleString("en-IN")}
            </p>
            <span className="text-[10px] text-emerald-400 mt-1 block">
              Blended CAC: ~₹{cac}
            </span>
          </div>
        </div>
      </div>

      {/* 8-Slide Presentation Deck Viewer */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Presentation size={18} className="text-pink-400" />
            Campaign Presentation Deck (8-Slide Format)
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>

        {/* Current Slide Display */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-8 min-h-[220px] flex flex-col justify-center transition-all">
          <span className="text-xs font-bold text-pink-400 uppercase tracking-widest block mb-1">
            {slides[currentSlide].category}
          </span>
          <h4 className="text-xl font-black text-white mb-3">
            {slides[currentSlide].title}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {slides[currentSlide].bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-pink-400 font-bold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Slide Controls */}
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-200 transition flex items-center gap-1.5"
          >
            <ChevronLeft size={16} /> Previous Slide
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white transition flex items-center gap-1.5"
          >
            Next Slide <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}