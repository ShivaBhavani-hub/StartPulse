import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Search,
  Sparkles,
  TrendingUp,
  RotateCcw,
  DollarSign,
  Package,
  Megaphone,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Scale,
  Users,
  Award,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Flame,
  Calculator,
  BarChart3,
  Layers,
  MapPin,
} from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

/* =========================================================================
   1. 3D CONSTELLATION BACKGROUND COMPONENT (Three.js)
   ========================================================================= */
function Background3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 160;
      positions[i + 1] = (Math.random() - 0.5) * 160;
      positions[i + 2] = (Math.random() - 0.5) * 80;

      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pMaterial = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 2.2,
      transparent: true,
      opacity: 0.75,
    });
    const pointSystem = new THREE.Points(geometry, pMaterial);
    scene.add(pointSystem);

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.18,
    });

    let linesMesh = null;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        if (pos[i * 3] > 80 || pos[i * 3] < -80) velocities[i].x *= -1;
        if (pos[i * 3 + 1] > 80 || pos[i * 3 + 1] < -80) velocities[i].y *= -1;
        if (pos[i * 3 + 2] > 40 || pos[i * 3 + 2] < -40) velocities[i].z *= -1;
      }
      geometry.attributes.position.needsUpdate = true;

      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 26) {
            linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }

      if (linesMesh) scene.remove(linesMesh);
      if (linePositions.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        linesMesh = new THREE.LineSegments(lineGeo, linesMaterial);
        scene.add(linesMesh);
      }

      pointSystem.rotation.y += 0.0006;
      pointSystem.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}

/* =========================================================================
   2. DYNAMIC STRATEGIC DATA GENERATOR (Industry-Adaptive)
   ========================================================================= */
function generateCompanyData(companyName) {
  const cleanName = companyName.trim() || "Blinkit";
  const lower = cleanName.toLowerCase();

  let industry = "Tech & Retail Ecosystem";
  let speedVal = "48 hrs Fulfillment";
  let infraVal = "120+ Distribution Hubs";
  let tamVal = "$45 Billion";
  let samVal = "$12.4 Billion";
  let somVal = "$5.6 Billion";

  if (lower.includes("tesla")) {
    industry = "EV & Clean Energy Dominance";
    speedVal = "2-4 Weeks Factory-to-Customer";
    infraVal = "6 Gigafactories & 5,000+ Superchargers";
    tamVal = "$850 Billion";
    samVal = "$240 Billion";
    somVal = "$96 Billion";
  } else if (lower.includes("blinkit") || lower.includes("zepto") || lower.includes("swiggy")) {
    industry = "Quick Commerce & Instant Hyperlocal";
    speedVal = "10-12 mins Delivery SLA";
    infraVal = "850+ Dark Stores";
    tamVal = "$45 Billion";
    samVal = "$12.4 Billion";
    somVal = "$5.6 Billion";
  } else if (lower.includes("apple") || lower.includes("nike")) {
    industry = "Consumer Hardware & Lifestyle Moat";
    speedVal = "Next-Day Direct Express";
    infraVal = "500+ Global Retail Flagships";
    tamVal = "$1.2 Trillion";
    samVal = "$380 Billion";
    somVal = "$120 Billion";
  }

  return {
    name: cleanName,
    tagline: `Strategic Growth & Market Intelligence Diagnostic for ${cleanName} (${industry})`,
    task1: {
      marketMetrics: {
        tam: tamVal,
        tamGrowth: "+24.8% CAGR",
        sam: samVal,
        samCoverage: "Tier-1 Metro Catchments",
        som: somVal,
        somShare: "46% Category Dominance",
      },
      marketShare: [
        { name: cleanName, share: 48 },
        { name: "Direct Rival Alpha", share: 30 },
        { name: "Emerging Challengers", share: 22 },
      ],
      competitorMatrix: [
        {
          name: cleanName,
          speed: speedVal,
          darkStores: infraVal,
          margin: "High (+28%)",
          retention: "68%",
          isFocus: true,
        },
        {
          name: "Direct Rival Alpha",
          speed: "Moderate SLA",
          darkStores: "Distributed Regional Hubs",
          margin: "Medium (+16%)",
          retention: "51%",
          isFocus: false,
        },
        {
          name: "Category Challengers",
          speed: "Standard SLA",
          darkStores: "Outsourced 3PL",
          margin: "Low (+9%)",
          retention: "44%",
          isFocus: false,
        },
      ],
      swot: [
        {
          type: "Strengths",
          icon: ShieldCheck,
          items: [
            {
              title: "Proprietary Tech & Vertical Integration",
              action: "Unlocks unmatched delivery speed & operational density",
              impact: 95,
            },
            {
              title: "Defensible Brand Equity & Loyalty",
              action: "Drives 68%+ organic customer repeat orders without heavy ad burn",
              impact: 91,
            },
          ],
        },
        {
          type: "Weaknesses",
          icon: AlertTriangle,
          items: [
            {
              title: "Capital Intensity & Infrastructure Capex",
              action: "Amortize warehouse rents across high-margin non-grocery SKUs",
              impact: 74,
            },
            {
              title: "Supply Chain & Seasonal Attrition",
              action: "Deploy predictive staffing bonuses and flexible shift scheduling",
              impact: 68,
            },
          ],
        },
        {
          type: "Opportunities",
          icon: Lightbulb,
          items: [
            {
              title: "High-Margin Software & Brand Ad Network",
              action: "Monetize search placements with FMCG manufacturers at 85%+ margins",
              impact: 92,
            },
            {
              title: "Tier-2 Metro Expansion",
              action: "Deploy modular micro-hubs in fast-growing suburban clusters",
              impact: 86,
            },
          ],
        },
        {
          type: "Threats",
          icon: Flame,
          items: [
            {
              title: "Aggressive VC-Subsidized Competitors",
              action: "Compete strictly on delivery reliability rather than margin-destroying discounts",
              impact: 78,
            },
            {
              title: "Urban Traffic & Zoning Regulations",
              action: "Transition to 100% electric commercial 2-wheelers and local micro-zones",
              impact: 65,
            },
          ],
        },
      ],
    },
    task2: {
      fourPs: [
        {
          p: "Product Moat",
          icon: Package,
          tag: "12,000+ Active SKUs",
          color: "from-indigo-500/20 to-indigo-950/40",
          border: "border-indigo-500/40",
          accent: "text-indigo-400",
          headline: "High-Margin Catalog Diversification",
          points: [
            "Expanding from essentials into high-ticket consumer electronics and beauty.",
            "Algorithm-driven dynamic bundling increases average order value by +22%.",
          ],
        },
        {
          p: "Price Strategy",
          icon: DollarSign,
          tag: "+₹28 Net Contribution",
          color: "from-emerald-500/20 to-emerald-950/40",
          border: "border-emerald-500/40",
          accent: "text-emerald-400",
          headline: "Dynamic Surge & Value Tiering",
          points: [
            "Order value thresholds calibrated to guarantee positive unit economics.",
            "Weather and peak-hour dynamic surge absorbs rider incentive overhead.",
          ],
        },
        {
          p: "Place / Distribution",
          icon: MapPin,
          tag: "2.5 km Micro-Radius",
          color: "from-cyan-500/20 to-cyan-950/40",
          border: "border-cyan-500/40",
          accent: "text-cyan-400",
          headline: "Hyper-Dense Micro Hub Network",
          points: [
            "Predictive restocking algorithms maintain 99.2% shelf inventory accuracy.",
            "Optimized in-store picking paths reduce fulfillment dispatch latency to <150s.",
          ],
        },
        {
          p: "Promotion Engine",
          icon: Megaphone,
          tag: "4.2x Organic LTV:CAC",
          color: "from-pink-500/20 to-pink-950/40",
          border: "border-pink-500/40",
          accent: "text-pink-400",
          headline: "Contextual Pop-Culture Moments",
          points: [
            "Hyper-localized outdoor billboards combined with weather-triggered app alerts.",
            "Gamified referral loops delivering immediate 10-minute gratification perks.",
          ],
        },
      ],
      roadmap: [
        {
          phase: "Phase 1: Months 1–3",
          progress: 100,
          title: "Infrastructure Saturation & SLA Moat",
          milestones: [
            "Audit fulfillment times and secure 99% on-time completion rates.",
            "Benchmark CAC across organic vs paid social acquisition channels.",
          ],
        },
        {
          phase: "Phase 2: Months 4–8",
          progress: 70,
          title: "Monetization & High-Margin Ancillaries",
          milestones: [
            "Launch brand ad network for partner FMCG manufacturers.",
            "Elevate blended contribution margin by +180 bps per order.",
          ],
        },
        {
          phase: "Phase 3: Months 9–12",
          progress: 30,
          title: "National Multi-City Scale",
          milestones: [
            "Expand modular micro-hubs to 15 emerging state capitals.",
            "Achieve company-wide positive EBITDA contribution.",
          ],
        },
      ],
    },
    task3: {
      campaignName: `#Experience${cleanName.replace(/\s+/g, "")}`,
      objective: "Acquire High-Intent Urban Users at <$1.80 Blended CAC",
      targetCohort: "Urban Professionals & Digital Natives (Ages 20–38)",
      channels: [
        { name: "Short-Form Video (Reels/TikTok)", share: 45, color: "#ec4899" },
        { name: "Search & App Store Intent Ads", share: 35, color: "#6366f1" },
        { name: "Creator & Influencer Partnerships", share: 20, color: "#06b6d4" },
      ],
      defaultBudget: 50000,
    },
    task4: {
      title: `Strategic Transformation & Moat Case Study: ${cleanName}`,
      phases: [
        {
          step: "01. The Strategic Bottleneck",
          color: "border-rose-500/40 bg-rose-950/20 text-rose-400",
          headline: "High Churn & Unviable Economics",
          metric: "-₹180 per unit",
          detail:
            "Early scheduled models suffered from massive delivery cancellations, unoptimized van routes, and unsustainable pricing wars against large retail incumbents.",
        },
        {
          step: "02. The Structural Pivot",
          color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-400",
          headline: "Pivot to Hyper-Dense Micro-Hubs",
          metric: "10-min SLA",
          detail:
            "Shut down unprofitable outer-city warehouses, leased compact 3,000 sq ft urban storefronts, and built real-time localized inventory tracking down to shelf bins.",
        },
        {
          step: "03. The Moat & Breakeven",
          color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-400",
          headline: "Density Unlocks Positive Unit Margins",
          metric: "+₹32 contribution",
          detail:
            "Order density allowed single riders to deliver multiple dropped orders per run. Expanding into electronics and FMCG ads pushed store-level margins into healthy profitability.",
        },
      ],
      waterfall: [
        { label: "Gross Order Value (GOV)", value: "+100%", width: "w-full", color: "bg-indigo-500" },
        { label: "Cost of Goods & Procurement (COGS)", value: "-78%", width: "w-3/4", color: "bg-slate-600" },
        { label: "Delivery Fleet & Rider Payouts", value: "-11%", width: "w-1/2", color: "bg-rose-500" },
        { label: "Dark Store Rent & Utilities", value: "-5%", width: "w-1/4", color: "bg-amber-500" },
        { label: "Brand Advertising Platform Revenue", value: "+3.5%", width: "w-1/6", color: "bg-cyan-500" },
        { label: "Net Operating Contribution Margin", value: "+9.5%", width: "w-1/5", color: "bg-emerald-500" },
      ],
    },
  };
}

/* =========================================================================
   3. MAIN APPLICATION ROOT
   ========================================================================= */
export default function App() {
  const [analyzedCompany, setAnalyzedCompany] = useState("");
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("task1");

  const [searchInput, setSearchInput] = useState("");

  // Task 3 Ad Funnel state
  const [adSpend, setAdSpend] = useState(50000);
  const [cpc, setCpc] = useState(1.4);
  const [conversionRate, setConversionRate] = useState(3.5);

  // Task 2 Growth Lever state
  const [priceLift, setPriceLift] = useState(5);
  const [retentionLift, setRetentionLift] = useState(8);

  const presets = ["Blinkit", "Tesla", "Zepto", "Zomato", "Swiggy", "Apple", "Nike"];

  const handleSearch = (name) => {
    const targetName = name || searchInput || "Blinkit";
    setAnalyzedCompany(targetName);
    setData(generateCompanyData(targetName));
    setActiveTab("task1");
  };

  const handleReset = () => {
    setData(null);
    setAnalyzedCompany("");
    setSearchInput("");
  };

  const clicks = Math.round(adSpend / (cpc || 1));
  const newCustomers = Math.round(clicks * ((conversionRate || 1) / 100));
  const estimatedCac = newCustomers > 0 ? (adSpend / newCustomers).toFixed(2) : 0;
  const estimatedRevenue = (newCustomers * 42).toFixed(0);
  const estimatedRoas = adSpend > 0 ? (estimatedRevenue / adSpend).toFixed(2) : 0;

  const marketShareChartData = data
    ? {
        labels: data.task1.marketShare.map((m) => m.name),
        datasets: [
          {
            data: data.task1.marketShare.map((m) => m.share),
            backgroundColor: ["#6366f1", "#06b6d4", "#f43f5e"],
            borderColor: "#020617",
            borderWidth: 3,
          },
        ],
      }
    : null;

  const mediaMixChartData = data
    ? {
        labels: data.task3.channels.map((c) => c.name),
        datasets: [
          {
            data: data.task3.channels.map((c) => c.share),
            backgroundColor: data.task3.channels.map((c) => c.color),
            borderColor: "#020617",
            borderWidth: 3,
          },
        ],
      }
    : null;

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* 3D Animated Particle Constellation Backdrop */}
      <Background3D />

      {/* TOP NAVIGATION BAR */}
      <header className="relative z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-lg shadow-indigo-600/30">
              SP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white">
                  StratPulse
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  CodeAlpha Suite
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Visual Business & Marketing Diagnostic Engine
              </p>
            </div>
          </div>

          {data && (
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex bg-slate-900/90 border border-slate-800 rounded-xl p-1 gap-1">
                {[
                  { id: "task1", label: "Task 1: Market Research", icon: BarChart3 },
                  { id: "task2", label: "Task 2: Growth Strategy", icon: TrendingUp },
                  { id: "task3", label: "Task 3: Campaign Design", icon: Megaphone },
                  { id: "task4", label: "Task 4: Case Study", icon: Layers },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      <Icon size={14} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition"
              >
                <RotateCcw size={13} />
                <span>New Brand</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {!data ? (
          /* HERO SEARCH LANDING SCREEN */
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6 animate-pulse">
              <Sparkles size={14} /> Instant Strategic Intelligence Generator
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
              Visual Strategy & Growth Engine for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">
                Any Business
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-4 mb-8 leading-relaxed">
              Type any company or brand. StratPulse instantly generates dynamic, visual
              dashboards across all 4 CodeAlpha tasks: TAM/SAM/SOM research, 4Ps roadmap,
              live CAC funnel simulator, and turn-around case studies.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(searchInput);
              }}
              className="w-full max-w-xl"
            >
              <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 shadow-2xl focus-within:border-indigo-500 transition backdrop-blur-xl">
                <div className="pl-3 text-slate-400">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Enter brand name (e.g. Blinkit, Zepto, Tesla, Nike)..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg shadow-indigo-600/30 whitespace-nowrap cursor-pointer"
                >
                  <Sparkles size={16} />
                  <span>Analyze Brand</span>
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-lg">
              <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                <TrendingUp size={13} /> Popular:
              </span>
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleSearch(preset)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:bg-slate-800 text-xs text-slate-300 font-semibold transition"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* STRATEGIC DASHBOARD VIEWS */
          <div className="space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-xl">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                    Executive Strategy Report
                  </span>
                  <span className="text-xs text-slate-400">• CodeAlpha Assessment</span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1.5 tracking-tight">
                  {data.name} Strategic Intelligence
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">{data.tagline}</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-4 py-2 rounded-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-slate-300">Live AI Diagnostics Active</span>
              </div>
            </div>

            {/* TAB 1: MARKET RESEARCH */}
            {activeTab === "task1" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/90 border border-indigo-500/30 p-5 rounded-2xl backdrop-blur-xl">
                    <div className="text-[10px] text-indigo-400 uppercase font-black tracking-widest">
                      TAM (Total Addressable)
                    </div>
                    <div className="text-3xl font-black text-white mt-1">
                      {data.task1.marketMetrics.tam}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Growth Rate:{" "}
                      <span className="text-emerald-400 font-bold">
                        {data.task1.marketMetrics.tamGrowth}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-indigo-500 h-full w-full rounded-full" />
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-cyan-500/30 p-5 rounded-2xl backdrop-blur-xl">
                    <div className="text-[10px] text-cyan-400 uppercase font-black tracking-widest">
                      SAM (Serviceable Addressable)
                    </div>
                    <div className="text-3xl font-black text-white mt-1">
                      {data.task1.marketMetrics.sam}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Catchment:{" "}
                      <span className="text-cyan-400 font-bold">
                        {data.task1.marketMetrics.samCoverage}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-cyan-500 h-full w-3/4 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-emerald-500/30 p-5 rounded-2xl backdrop-blur-xl">
                    <div className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">
                      SOM (Serviceable Obtainable)
                    </div>
                    <div className="text-3xl font-black text-white mt-1">
                      {data.task1.marketMetrics.som}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Position:{" "}
                      <span className="text-emerald-400 font-bold">
                        {data.task1.marketMetrics.somShare}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-1/2 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                      Market Share Split
                    </h3>
                    <div className="h-52 w-52 relative flex items-center justify-center">
                      <Doughnut
                        data={marketShareChartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: "bottom",
                              labels: { color: "#94a3b8", font: { size: 10 } },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                      Operational Benchmark & Moat Diagnostic
                    </h3>
                    <div className="space-y-3">
                      {data.task1.competitorMatrix.map((comp, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border transition ${
                            comp.isFocus
                              ? "bg-indigo-950/20 border-indigo-500/40"
                              : "bg-slate-950/60 border-slate-800"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white">{comp.name}</span>
                              {comp.isFocus && (
                                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-bold">
                                  Subject Entity
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-300">
                              {comp.speed}
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 text-xs text-slate-400 mt-2">
                            <div>
                              <span className="text-slate-500 text-[10px] uppercase font-bold block">
                                Infrastructure
                              </span>
                              <span className="font-semibold text-slate-200">
                                {comp.darkStores}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500 text-[10px] uppercase font-bold block">
                                Contribution
                              </span>
                              <span className="font-semibold text-emerald-400">
                                {comp.margin}
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500 text-[10px] uppercase font-bold block">
                                Customer Repeat
                              </span>
                              <span className="font-semibold text-cyan-400">
                                {comp.retention}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    SWOT Diagnostic & Strategic Levers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.task1.swot.map((quad, idx) => {
                      const Icon = quad.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Icon size={18} className="text-indigo-400" />
                            <span className="font-extrabold text-sm text-white">
                              {quad.type}
                            </span>
                          </div>
                          <div className="space-y-2.5">
                            {quad.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-xl"
                              >
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-xs font-bold text-slate-200">
                                    {item.title}
                                  </span>
                                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-bold">
                                    Impact: {item.impact}/100
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  ⚡ {item.action}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GROWTH STRATEGY */}
            {activeTab === "task2" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.task2.fourPs.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={idx}
                        className={`bg-gradient-to-b ${card.color} border ${card.border} p-5 rounded-2xl backdrop-blur-xl flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                              <Icon size={18} className={card.accent} />
                            </div>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/80 text-white border border-slate-800">
                              {card.tag}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            {card.p}
                          </h4>
                          <h3 className="text-sm font-black text-white mt-1 mb-2">
                            {card.headline}
                          </h3>
                          <ul className="space-y-1.5 mt-3">
                            {card.points.map((pt, ptIdx) => (
                              <li
                                key={ptIdx}
                                className="text-xs text-slate-300 flex items-start gap-1.5"
                              >
                                <span className="text-indigo-400 mt-0.5">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator size={18} className="text-indigo-400" />
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Interactive Growth Levers Simulator
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Average Basket Price Adjustment</span>
                          <span className="text-white font-mono font-bold">+{priceLift}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="25"
                          step="1"
                          value={priceLift}
                          onChange={(e) => setPriceLift(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Customer Retention Lift</span>
                          <span className="text-white font-mono font-bold">+{retentionLift}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="30"
                          step="1"
                          value={retentionLift}
                          onChange={(e) => setRetentionLift(Number(e.target.value))}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl flex items-center justify-around">
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">
                          Contribution Lift
                        </div>
                        <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                          +{(priceLift * 1.8 + retentionLift * 0.9).toFixed(1)}%
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Margin Expansion</div>
                      </div>

                      <div className="h-10 w-px bg-slate-800" />

                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">
                          Projected ARR Lift
                        </div>
                        <div className="text-2xl font-black text-indigo-400 font-mono mt-1">
                          +${((priceLift * 1.4 + retentionLift * 2.2) * 1.5).toFixed(1)}M
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Annualized Impact</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">
                    12-Month Execution Roadmap
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.task2.roadmap.map((stage, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-bold text-indigo-400 uppercase bg-indigo-500/10 px-2 py-0.5 rounded">
                              {stage.phase}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {stage.progress}% Done
                            </span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mb-3 overflow-hidden">
                            <div
                              className="bg-indigo-500 h-full rounded-full"
                              style={{ width: `${stage.progress}%` }}
                            />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-2">{stage.title}</h4>
                          <ul className="space-y-1.5">
                            {stage.milestones.map((m, mIdx) => (
                              <li
                                key={mIdx}
                                className="text-xs text-slate-400 flex items-start gap-1.5"
                              >
                                <CheckCircle2
                                  size={13}
                                  className="text-emerald-400 mt-0.5 flex-shrink-0"
                                />
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
            )}

            {/* TAB 3: CAMPAIGN DESIGN */}
            {activeTab === "task3" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-950/30 via-purple-950/30 to-indigo-950/30 border border-pink-500/30 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded-full">
                      High-Growth Campaign Concept
                    </span>
                    <h2 className="text-2xl font-black text-white mt-1">
                      {data.task3.campaignName}
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">{data.task3.objective}</p>
                  </div>
                  <div className="px-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Target Cohort</div>
                    <div className="text-xs font-bold text-indigo-300">
                      {data.task3.targetCohort}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
                      Campaign Budget & Funnel Calculator
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Ad Campaign Budget</span>
                          <span className="text-white font-mono font-bold">
                            ${adSpend.toLocaleString()}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="200000"
                          step="5000"
                          value={adSpend}
                          onChange={(e) => setAdSpend(Number(e.target.value))}
                          className="w-full accent-pink-500 cursor-pointer"
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
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                          />
                        </div>
                        <div>
                          <div className="text-[11px] text-slate-400 mb-1">
                            Conversion Rate (%)
                          </div>
                          <input
                            type="number"
                            step="0.5"
                            value={conversionRate}
                            onChange={(e) => setConversionRate(Number(e.target.value))}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-2 pt-3">
                        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                          <div className="text-[9px] text-slate-400 uppercase font-bold">
                            Ad Clicks
                          </div>
                          <div className="text-sm font-black text-white font-mono mt-1">
                            {clicks.toLocaleString()}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
                          <div className="text-[9px] text-slate-400 uppercase font-bold">
                            Acquisitions
                          </div>
                          <div className="text-sm font-black text-emerald-400 font-mono mt-1">
                            {newCustomers.toLocaleString()}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/30 text-center">
                          <div className="text-[9px] text-indigo-400 uppercase font-bold">
                            Blended CAC
                          </div>
                          <div className="text-sm font-black text-indigo-300 font-mono mt-1">
                            ${estimatedCac}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950/80 rounded-xl border border-pink-500/30 text-center">
                          <div className="text-[9px] text-pink-400 uppercase font-bold">
                            Est. ROAS
                          </div>
                          <div className="text-sm font-black text-pink-300 font-mono mt-1">
                            {estimatedRoas}x
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Optimal Media Spend Allocation
                    </h4>
                    <div className="h-48 w-48 relative flex items-center justify-center">
                      <Doughnut
                        data={mediaMixChartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: "bottom",
                              labels: { color: "#94a3b8", font: { size: 10 } },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CASE STUDY */}
            {activeTab === "task4" && (
              <div className="space-y-6">
                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-xl">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    Consulting Case Diagnostic
                  </span>
                  <h2 className="text-xl font-black text-white mt-1.5">{data.task4.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.task4.phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className={`border p-5 rounded-2xl backdrop-blur-xl flex flex-col justify-between ${phase.color}`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                            {phase.step}
                          </span>
                          <span className="text-xs font-mono font-bold bg-slate-950/80 px-2 py-0.5 rounded">
                            {phase.metric}
                          </span>
                        </div>
                        <h3 className="text-base font-black text-white mb-2">
                          {phase.headline}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                          {phase.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl backdrop-blur-xl">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                    Unit Economics Waterfall (Per Unit Contribution Margin)
                  </h3>
                  <div className="space-y-3">
                    {data.task4.waterfall.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-300">{item.label}</span>
                          <span className="font-mono text-white font-bold">{item.value}</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800/80">
                          <div className={`h-full rounded-full ${item.color} ${item.width}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 py-4 text-center text-xs text-slate-500">
        StratPulse Intelligence Suite • Built for CodeAlpha Business & Marketing Internship
      </footer>
    </div>
  );
}