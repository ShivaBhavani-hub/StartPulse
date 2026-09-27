import React from "react";
import { BookOpen, AlertOctagon, RefreshCw, BarChart2, Award } from "lucide-react";

export default function Task4CaseStudy({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div>
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Task 4: Strategic Case Study Deliverable
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {data.caseTitle}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Deep-Dive Strategic Analysis: Business Model Pivot, Dark Store Unit Economics & Lessons
          </p>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
          <Award size={16} /> ~1,650 Words Comprehensive Diagnostic
        </div>
      </div>

      {/* Case Study Long-Form Reading Layout */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto space-y-6 text-sm text-slate-300 leading-relaxed shadow-xl">
        <div className="border-b border-slate-800 pb-4 flex justify-between items-center text-xs text-slate-400">
          <span>Subject: Blinkit (formerly Grofers) & Zomato</span>
          <span>Domain: Business Strategy & Market Disruption</span>
        </div>

        {/* Section 1: The Initial Crisis */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertOctagon size={18} className="text-rose-400" />
            1. The Initial Crisis: Failure of Scheduled Delivery
          </h3>
          <p>
            In late 2020, Grofers operated on an asset-heavy scheduled delivery model competing directly with BigBasket, Amazon Pantry, and Flipkart Supermart. The fundamental flaw was poor customer density and high order-batching complexity. Shipping non-perishable goods across city peripheries led to substantial warehouse leasing overhead and order cancellations, while gross margins remained compressed at single digits (6–8%). Grofers was burning millions each quarter with no clear path to profitability.
          </p>
        </section>

        {/* Section 2: The Radical Pivot */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <RefreshCw size={18} className="text-blue-400" />
            2. The Radical Pivot & Zomato Acquisition
          </h3>
          <p>
            Recognizing that scheduled groceries were a commoditized race to the bottom, the management executed an all-or-nothing operational pivot: rebranding to Blinkit and transitioning 100% of their operations to 10-minute micro-fulfillment. Instead of regional warehouses outside the city, they established micro-warehouses ("dark stores") right inside high-density residential belts.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-amber-500 text-xs">
            <p className="font-bold text-amber-300">The Turning Point (2022):</p>
            <p className="mt-1 text-slate-300">
              Zomato acquired Blinkit in an all-stock deal valued at ~$568 million. Despite initial skepticism from equity analysts, this merger gave Blinkit the financial runway and tech synergies needed to withstand ruthless competition from Zepto and Swiggy Instamart.
            </p>
          </div>
        </section>

        {/* Section 3: Unit Economics */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BarChart2 size={18} className="text-emerald-400" />
            3. The Unit Economics Engine: How Dark Stores Profit
          </h3>
          <p>
            Quick commerce profitability depends on store-level contribution margins. A standard 3,500 sq. ft. dark store incurs fixed costs (rent, picking staff, air conditioning, and software). As daily orders per store scale from 400 to over 1,000, fixed expenses are amortized across more transactions. Combined with Average Order Values (AOV) rising from ₹400 to above ₹650 through electronics and beauty products, each incremental order delivers positive contribution margin.
          </p>
        </section>

        {/* Section 4: Key Lessons */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen size={18} className="text-indigo-400" />
            4. Core Strategic Lessons for Business Leaders
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {data.lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="text-slate-300">{lesson}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}