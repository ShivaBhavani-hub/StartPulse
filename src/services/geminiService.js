import { GoogleGenerativeAI } from "@google/generative-ai";
import { PRESET_DATA } from "../data/staticReports";

export async function generateStrategicReport(companyName, apiKey) {
  // If no API key is provided, check if it's Blinkit or generate structured dynamic mock data
  if (!apiKey) {
    if (companyName.toLowerCase().includes("blinkit")) {
      return PRESET_DATA.blinkit;
    }
    // Return dynamically tailored fallback so it never fails
    return createSimulatedReport(companyName);
  }

  try {
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Analyze the company: "${companyName}" across 4 strategic consulting tasks.
Return ONLY valid JSON matching this exact structure:
{
  "task1": {
    "title": "Strategic Market Research: ${companyName}",
    "scope": "Market landscape, business model, and operational benchmark",
    "executiveSummary": "2 punchy sentences about market position and competitive moat.",
    "fulfillment": "Brief operational delivery/fulfillment architecture.",
    "marketShare": [
      { "name": "${companyName}", "share": 45 },
      { "name": "Key Competitor A", "share": 30 },
      { "name": "Key Competitor B", "share": 25 }
    ],
    "swot": {
      "strengths": [{ "point": "Core internal strength", "action": "Strategic action lever" }],
      "weaknesses": [{ "point": "Internal limitation", "action": "Mitigation strategy" }],
      "opportunities": [{ "point": "Market expansion opportunity", "action": "Growth lever" }],
      "threats": [{ "point": "Industry external threat", "action": "Risk defense" }]
    },
    "competitors": [
      { "name": "${companyName}", "share": "45%", "usp": "Main differentiator", "breadth": "Catalog/Offerings", "retention": "Retention play" },
      { "name": "Competitor 1", "share": "30%", "usp": "USP", "breadth": "Catalog", "retention": "Retention" },
      { "name": "Competitor 2", "share": "25%", "usp": "USP", "breadth": "Catalog", "retention": "Retention" }
    ],
    "personas": [
      { "title": "Primary Customer", "badge": "Core Segment", "traits": "Demographics", "needs": "Pain points", "trigger": "Buying trigger" },
      { "title": "Secondary Customer", "badge": "Emerging Segment", "traits": "Demographics", "needs": "Pain points", "trigger": "Buying trigger" }
    ],
    "recommendations": [
      { "num": "01", "title": "Growth Initiative", "text": "Strategic rationale." },
      { "num": "02", "title": "Operational Optimization", "text": "Strategic rationale." }
    ]
  },
  "task2": {
    "title": "Growth Strategy Proposal: ${companyName}",
    "fourPs": {
      "product": "Product differentiation & expansion",
      "price": "Pricing structure & margins",
      "place": "Distribution channels",
      "promotion": "Digital acquisition tactics"
    },
    "roadmap": [
      { "phase": "Phase 1: Months 1–3", "title": "Validation & Pilot", "milestones": ["Milestone 1", "Milestone 2"] },
      { "phase": "Phase 2: Months 4–6", "title": "Unit Economics", "milestones": ["Milestone 3", "Milestone 4"] },
      { "phase": "Phase 3: Months 7–12", "title": "National Scale", "milestones": ["Milestone 5", "Milestone 6"] }
    ]
  },
  "task3": {
    "campaignName": "#Go${companyName.replace(/\\s+/g, '')}",
    "objective": "Acquire high-intent users with low blended CAC",
    "targetAudience": "Urban core adopters",
    "budgetAllocation": [
      { "channel": "Social Media (Reels/TikTok)", "percentage": 45 },
      { "channel": "Search & App Store Ads", "percentage": 35 },
      { "channel": "Creator & Influencer Partnerships", "percentage": 20 }
    ]
  },
  "task4": {
    "caseTitle": "Strategic Transformation & Market Moat: The ${companyName} Case",
    "crisis": "The primary operational or competitive bottleneck faced.",
    "pivot": "The structural business model pivot executed.",
    "economics": "The unit economics and scalability drivers.",
    "lessons": [
      "Customer convenience over discounting.",
      "High density lowers customer acquisition costs.",
      "Data-driven supply chains protect contribution margins."
    ]
  }
}`;

    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(text);
  } catch (error) {
    console.warn("Live API call failed, using dynamic simulated report:", error);
    return createSimulatedReport(companyName);
  }
}

function createSimulatedReport(companyName) {
  return {
    task1: {
      title: `Strategic Market Research: ${companyName}`,
      scope: `Market Dynamics, Competitive Benchmarking & Consumer Landscape`,
      executiveSummary: `${companyName} operates in a rapidly evolving market characterized by increasing customer acquisition costs and rising demand for digital-first convenience. This research benchmarks its core value proposition and defensible moat.`,
      fulfillment: `Modern multi-channel distribution network with automated tracking and localized fulfillment centers.`,
      marketShare: [
        { name: companyName, share: 42 },
        { name: "Direct Rival A", share: 32 },
        { name: "Regional Players", share: 26 },
      ],
      swot: {
        strengths: [
          { point: "High Brand Recall", action: "Leverage organic traffic to lower paid ad dependencies." },
          { point: "Tech-Enabled Supply Chain", action: "Amortize software infrastructure across higher order volumes." }
        ],
        weaknesses: [
          { point: "Customer Churn in Discount-Heavy Cycles", action: "Introduce high-value loyalty and subscription tiers." },
          { point: "Rising Operating Overhead", action: "Automate tier-1 customer service workflows." }
        ],
        opportunities: [
          { point: "Tier-2 Metro Penetration", action: "Customize localized catalog offerings for suburban catchments." },
          { point: "High-Margin Private Label Lines", action: "Launch first-party product lines yielding 30%+ gross margins." }
        ],
        threats: [
          { point: "Aggressive VC-Subsidized Competitors", action: "Focus on delivery speed and product reliability rather than price wars." },
          { point: "Regulatory Shifts", action: "Proactively adopt compliance frameworks." }
        ]
      },
      competitors: [
        { name: companyName, share: "42%", usp: "Speed & Breadth", breadth: "Broad Ecosystem", retention: "Loyalty Programs" },
        { name: "Rival Prime", share: "32%", usp: "Low Cost", breadth: "Curated Selection", retention: "Discount Coupons" },
        { name: "Niche Disruptors", share: "26%", usp: "Specialized Verticals", breadth: "Category Specific", retention: "Community Engagement" }
      ],
      personas: [
        { title: "Digital Native Consumer", badge: "Primary Segment", traits: "Age 20–35, urban smartphone-first user", needs: "Demands zero friction and instant availability", trigger: "Prefers convenience and brand trust over coupons" },
        { title: "Value-Conscious Shopper", badge: "Secondary Segment", traits: "Age 35–50, household procurement lead", needs: "Basket completeness and predictable pricing", trigger: "Responds to bundled savings and loyalty benefits" }
      ],
      recommendations: [
        { num: "01", title: "Launch High-Margin Direct Offerings", text: "Introduce proprietary service tiers to lift blended contribution margins by 150–200 bps." },
        { num: "02", title: "Automate Re-order Workflows", text: "Deploy predictive notifications based on past repurchase intervals to lift 30-day retention." }
      ]
    },
    task2: {
      title: `Business Growth Strategy Proposal: ${companyName}`,
      fourPs: {
        product: `Differentiate core offerings by adding verified premium quality guarantees and exclusive digital bundles for ${companyName}.`,
        price: `Implement tiered value pricing to capture both budget shoppers and premium high-LTV users.`,
        place: `Expand local micro-distribution hubs closer to high-density consumer pin codes.`,
        promotion: `Run high-ROI influencer skits and retargeting ads highlighting everyday problem-solving scenarios.`
      },
      roadmap: [
        { phase: "Phase 1: Months 1–3", title: "Pilot & Channel Testing", milestones: ["Deploy pilot in top 3 urban markets", "Benchmark initial organic vs paid CAC", "Test localized customer messaging"] },
        { phase: "Phase 2: Months 4–6", title: "Unit Economics Optimization", milestones: ["Optimize inventory turnover by 12%", "Implement cross-sell algorithms", "Launch customer loyalty beta"] },
        { phase: "Phase 3: Months 7–12", title: "Multi-City Scale", milestones: ["Expand nationwide to Tier 2 hubs", "Target 35%+ 60-day repeat cohort rate", "Achieve store-level contribution breakeven"] }
      ]
    },
    task3: {
      campaignName: `#Experience${companyName.replace(/\\s+/g, '')}`,
      objective: `Drive viral awareness and lower cost-per-acquisition across metro clusters`,
      targetAudience: `Young working professionals and high-intent digital shoppers`,
      budgetAllocation: [
        { channel: "Meta (Instagram Reels)", percentage: 45 },
        { channel: "Google Search & UAC", percentage: 35 },
        { channel: "Micro-Creators", percentage: 20 }
      ]
    },
    task4: {
      caseTitle: `Strategic Growth Case Study: How ${companyName} Scales Operations`,
      crisis: `Initial business bottlenecks revolved around high user churn, unoptimized channel spending, and thin unit margins.`,
      pivot: `Management redirected focus toward high-density clusters, automated customer support, and strategic product bundling.`,
      economics: `By clustering delivery and sales density, fixed operational rents were amortized over higher order volumes, achieving positive unit economics.`,
      lessons: [
        "Customer retention generates 3x higher ROI than aggressive top-of-funnel acquisition.",
        "Operational density directly dictates contribution margin viability.",
        "A focused product catalog beats an unwieldy, high-overhead assortment."
      ]
    }
  };
}