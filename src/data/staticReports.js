export const PRESET_DATA = {
  blinkit: {
    task1: {
      title: "Strategic Market Research: Blinkit & Indian Quick Commerce",
      scope: "Urban India (Tier 1 & Tier 2 Metros) | Operational & Financial Benchmark",
      executiveSummary: "Blinkit (acquired by Zomato) has transitioned from an unviable scheduled grocery marketplace into India’s dominant Quick Commerce platform, commanding ~46% market share. By deploying an ultra-dense network of micro-fulfillment 'dark stores' within 2–3 km of major urban catchments, Blinkit delivers groceries, personal care, and high-margin electronics in 10–12 minutes. This report benchmarks its competitive moat and outlines actionable levers for sustained contribution margin expansion.",
      valueProp: "Instant gratification—turning unscheduled household and impulse needs into delivered goods within 10–12 minutes with minimal order failure.",
      fulfillment: "Hyper-dense network of 3,000–4,000 sq. ft. dark stores located every 2–3 km in high-density urban clusters, optimizing order picking, packing, and dispatch times to under 3 minutes.",
      marketShare: [
        { name: "Blinkit (Zomato)", share: 46, color: "#6366f1" },
        { name: "Zepto", share: 29, color: "#ec4899" },
        { name: "Swiggy Instamart", share: 25, color: "#f97316" }
      ],
      swot: {
        strengths: [
          { point: "Market Share Leadership (~46%)", action: "Leverage dominant order volume to extract deeper procurement discounts from FMCG manufacturers." },
          { point: "Zomato Synergies & Shared Logistics", action: "Share rider fleet during non-overlapping meal vs. grocery peak demand windows." },
          { point: "High Dark Store Throughput", action: "Amortize fixed urban warehouse rent across higher daily order frequencies." }
        ],
        weaknesses: [
          { point: "Low Gross Margins on Staples", action: "Mitigation: Promote high-margin private-label staples (dry groceries, spices) yielding 28–32% margins." },
          { point: "Gig Worker Churn & Attrition", action: "Mitigation: Implement safety-first delivery buffers and structured loyalty incentives for riders." },
          { point: "High Urban Real Estate Costs", action: "Mitigation: Optimize dark store vertical shelf layout to maximize SKU capacity per square foot." }
        ],
        opportunities: [
          { point: "Category Expansion (Electronics, Beauty)", action: "Growth Lever: Secure exclusive rapid-launch partnerships with smartphone, cosmetic, and toy brands." },
          { point: "Tier-2 Metro Expansion", action: "Growth Lever: Target high-density, underserved suburban belts with adjusted entry-level SKU mixes." },
          { point: "In-App Retail Media Advertising", action: "Growth Lever: Convert search real estate into high-margin ad auction placements for emerging D2C brands." }
        ],
        threats: [
          { point: "Aggressive VC-Backed Price Wars", action: "Defense: Focus on delivery reliability and basket completeness rather than unsustainable discounts." },
          { point: "Emerging Gig Economy Regulations", action: "Defense: Proactively structure fair compensation and insurance pools before legislative mandates." },
          { point: "Pushback from Local Kirana Unions", action: "Defense: Onboard neighborhood mom-and-pop stores as hybrid fulfillment nodes." }
        ]
      },
      competitors: [
        { name: "Blinkit (Zomato)", share: "46%", usp: "Vast SKU selection & dark store density", breadth: "High (20,000+ SKUs)", retention: "Zomato Gold Ecosystem" },
        { name: "Zepto", share: "29%", usp: "Pure 10-minute speed & Gen Z appeal", breadth: "Medium-High (10k+ SKUs)", retention: "Zepto Pass Subscriptions" },
        { name: "Swiggy Instamart", share: "25%", usp: "Cross-app grocery & dining synergy", breadth: "Medium (8k–10k SKUs)", retention: "Swiggy One Membership" }
      ],
      personas: [
        {
          title: "The Time-Starved Professional",
          badge: "Primary (Age 24–38)",
          traits: "Urban resident, dual-income household, monthly income > ₹50,000.",
          needs: "Has zero bandwidth for weekend grocery visits; orders frequently after work for emergency cooking needs or breakfast items.",
          trigger: "Willing to pay convenience fees for delivery reliability over discounts."
        },
        {
          title: "The Impulse Gen-Z Consumer",
          badge: "Secondary (Age 18–24)",
          traits: "College student or entry-level professional living in shared apartments.",
          needs: "Late-night snack cravings, party essentials, trending viral cosmetics, or replacement charger cables.",
          trigger: "Hyper-sensitive to delivery speed and influenced by trending social media products."
        }
      ],
      trends: [
        { title: "The 'Quick Everything' Shift", text: "Quick commerce has evolved beyond groceries into electronics, apparel, and festive gifts, lifting Average Order Values (AOV)." },
        { title: "Retail Ad Network Maturation", text: "Brands now allocate up to 15% of their digital trade marketing budgets directly into quick-commerce search ads." },
        { title: "Store-Level Contribution Breakeven", text: "Mature dark stores with >1,000 daily orders are proving positive unit economics in top metros." }
      ],
      recommendations: [
        { num: "01", title: "Scale High-Margin Private Labels ('Blinkit Essentials')", text: "Staples carry low 8–10% gross margins. Introducing private-label packaged staples, home cleaning, and dry goods will immediately elevate gross margins to 28–32%." },
        { num: "02", title: "Monetize Off-Peak Dark Store Capacity", text: "Utilize dark store operations during quiet morning/afternoon hours to offer rapid micro-services (e.g., instant screen guard application, dry-cleaning drops)." },
        { num: "03", title: "Implement Dynamic Weather & Density Surcharging", text: "Replace flat delivery structures with automated micro-surges tied to real-time store congestion and adverse weather to protect contribution margins." }
      ]
    },
    task2: {
      title: "Business Growth Strategy Proposal: Direct-to-Consumer Private Label Scaling",
      fourPs: {
        product: "Launch verified private-label dry groceries, cold-pressed oils, and cleaning staples under an umbrella brand ('Blinkit Naturals / Essentials').",
        price: "Price products 12–15% below established legacy FMCG brands while extracting a 28–32% gross margin due to zero distributor markup.",
        place: "Allocate prime top-shelf space in 100% of metro dark stores, ensuring instantaneous dispatch and zero stockouts for daily staples.",
        promotion: "Offer free mini-samples with orders above ₹599 and prompt smart 'Complete Your Basket' recommendations at checkout."
      },
      roadmap: [
        { phase: "Phase 1: Months 1–3", title: "Pilot Launch & Quality Validation", milestones: ["Deploy across top 50 high-volume dark stores in NCR and Bengaluru.", "Restrict rollout to top 15 highest-turnover grocery commodities.", "Benchmark customer repeat purchase rate (target: >40%)."] },
        { phase: "Phase 2: Months 4–6", title: "Scale & Unit Economics Optimization", milestones: ["Expand to 300+ dark stores across Mumbai, Hyderabad, and Pune.", "Deploy automated cart-recommendation algorithms at checkout.", "Optimize packaging procurement to reduce single-unit costs by 8%."] },
        { phase: "Phase 3: Months 7–12", title: "National Scale & Brand Extension", milestones: ["Introduce premium organic & wellness lines (nuts, superfoods).", "Transition private-label sales to represent 20%+ of grocery GMV.", "Achieve overall company contribution margin lift of +180 bps."] }
      ]
    },
    task3: {
      campaignName: "#NeedItIn10",
      objective: "Solidify Blinkit as the default choice for impulse & emergency household needs across top 8 metro clusters.",
      targetAudience: "Working professionals and urban Gen-Z seeking instant gratification and zero-wait shopping.",
      budgetAllocation: [
        { channel: "Meta Ads (Instagram Reels)", percentage: 45 },
        { channel: "Google Search & UAC", percentage: 30 },
        { channel: "Micro-Influencer Collaborations", percentage: 25 }
      ]
    },
    task4: {
      caseTitle: "Executive Case Study: How Zomato Transformed Grofers into India’s Quick Commerce Giant",
      crisis: "In 2020, Grofers was burning substantial capital on scheduled next-day deliveries, fighting Amazon and BigBasket in a thin-margin commodity race.",
      pivot: "A bold, total pivot to 10-minute dark-store deliveries, followed by Zomato's $568M acquisition in 2022, creating massive tech, delivery-fleet, and user-base synergies.",
      economics: "Dark stores break even once daily order counts exceed 1,000 with AOV over ₹600, turning fixed rental and staffing overhead into expanding positive contribution margin.",
      lessons: [
        "Convenience beats discounting: modern urban consumers happily trade price cuts for speed and high catalog reliability.",
        "Category expansion unlocks margins: milk and bread build habit, but electronics and beauty deliver profitability.",
        "Platform synergies protect cash: independent players face continuous dilution, whereas platform-backed firms outlast price wars."
      ]
    }
  }
};