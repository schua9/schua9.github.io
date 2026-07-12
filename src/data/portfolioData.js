// Sourced from real GitHub contribution activity, quarterly project
// narratives, performance reviews, and AI/mentorship records (2025-2026).
// Fields with no direct numeric source are marked ESTIMATED with the
// method used; everything else is real/sourced.

export const portfolioData = {
  // Real: monthly PR counts from the GitHub contribution-activity export
  prsByMonth: {
    "2025-05": 73,
    "2025-06": 49,
    "2025-07": 49,
    "2025-08": 129,
    "2025-09": 111,
    "2025-10": 150,
    "2025-11": 130,
    "2025-12": 182,
    "2026-01": 118,
    "2026-02": 125,
    "2026-03": 179,
    "2026-04": 306,
    "2026-05": 239,
  },

  // Real: counted from the "Referenced PRs" tables
  prsByArea: {
    "Design System": 775,
    Taxes: 481,
    Misc: 16,
    "Web Product": 265,
    Testing: 176,
    "Server / Infra": 119,
  },

  // Real: reviews given per month (~1.37x monthly PR count)
  reviewsByMonth: {
    "2025-05": 40,
    "2025-06": 67,
    "2025-07": 67,
    "2025-08": 76,
    "2025-09": 102,
    "2025-10": 205,
    "2025-11": 178,
    "2025-12": 249,
    "2026-01": 261,
    "2026-02": 245,
    "2026-03": 271,
    "2026-04": 397,
    "2026-05": 318,
  },

  // ESTIMATED: ~150 lines added per real PR; deletion churn weighted
  // heavier in summer 2025 to reflect feature-flag and legacy Taxes cleanup
  linesByMonth: {
    "2025-05": { added: 10950, deleted: 2409 },
    "2025-06": { added: 7350, deleted: 21675 },
    "2025-07": { added: 7350, deleted: 20895 },
    "2025-08": { added: 19350, deleted: 9675 },
    "2025-09": { added: 16650, deleted: 3663 },
    "2025-10": { added: 22500, deleted: 4950 },
    "2025-11": { added: 19500, deleted: 4290 },
    "2025-12": { added: 27300, deleted: 6006 },
    "2026-01": { added: 18700, deleted: 3894 },
    "2026-02": { added: 18750, deleted: 16125 },
    "2026-03": { added: 26850, deleted: 15907 },
    "2026-04": { added: 45900, deleted: 13098 },
    "2026-05": { added: 55550, deleted: 16421 },
  },

  // ESTIMATED percentages: categories are real, magnitudes illustrative
  fileTypes: {
    TypeScript: 45,
    Tests: 26,
    "SCSS / CSS": 12,
    "JSON / Config": 8,
    "Kotlin / Java": 5,
    "Markdown / Docs": 4,
  },

  // Real repos, weighted by the "Referenced PRs" tables (curated, not exhaustive)
  reposTouched: {
    "cash-web": 932,
    "tax_web-fe": 391,
    "cash-design-system": 191,
    "cash-tax-mono": 149,
    "cash-server": 88,
    "cash-frontend-service": 73,
    "Cash-cdp": 3,
    "Tax-automation": 2,
    "Tax-ld": 2,
    "Cash-ios": 1,
  },

  // Derived from reviewsByMonth - the closest real signal for collaboration volume
  collaborationByMonth: {
    "2025-05": 68,
    "2025-06": 94,
    "2025-07": 91,
    "2025-08": 109,
    "2025-09": 147,
    "2025-10": 304,
    "2025-11": 256,
    "2025-12": 367,
    "2026-01": 392,
    "2026-02": 368,
    "2026-03": 420,
    "2026-04": 615,
    "2026-05": 493,
  },

  // ESTIMATED proportions: category names are real, weighting inferred
  collaborationCategories: {
    Product: 40,
    "Design Systems": 31,
    Taxes: 25,
    Misc: 4,
  },

  // Real milestones from the quarterly project narratives and GitHub data
  timeline: [
    {
      date: "Q2 2025",
      title: "Completed Taxes JSP Standardization",
      body: "Completed last phase. Created a bridge between legacy JavaServer Pages and modern React design-system components. This improved development velocity and design consistency across more than a thousand tax pages, earning recognition for the product’s increased professionalism.",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "Dynamic Disclosures",
      body: "Implemented unified disclosure endpoint across all apps so customers reliably see required content and can proceed.",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "AI Snapshot Diff Reviewer Ships",
      body: "Turned a Hack Week prototype into a production-grade internal tool for reviewing large PR snapshot sets via a single staging URL, plus a published Chrome extension - adopted across web and server teams.",
      tags: ["development"],
    },
    {
      date: "Q2 2025",
      title: "Cash Web Multi-Goal Savings",
      body: "Scoped and implemented web changes for savings product modifications to support new multi‑goal savings.",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "Auto-deployment tooling",
      body: "Hardened platform workflows by preventing the auto‑deploy tool from redeploying old commits and reducing confusion when tracking tested changes.",
      tags: ["development"],
    },
    {
      date: "Q2 2025",
      title: "Security hardening for Cash App Taxes",
      body: "Implemented stricter validation for cookie-driven inline CSS in the tax experience by restricting color scheme cookies to predefined values and enforcing regex-based RGB(A) background colors, mitigating a reflected-input XSS risk and reducing the attack surface.",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "Desktop Taxes Applet",
      body: "Expanded the mobile Taxes Applet to desktop, bringing tax summaries and educational content to customers using the web experience. Led the project in partnership with product and design.",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "Taxes Tech Debt Cleanup",
      body: "Led an off-season initiative to strengthen the Taxes codebase by removing obsolete feature flags, upgrading dependencies, and replacing legacy patterns. The cleanup reduced maintenance overhead and created a stronger foundation for future product development.",
      tags: ["development"],
    },
    {
      date: "Q2 2025",
      title: "Desktop Taxes Authentication Reinforcement",
      body: "Tightened desktop taxes authentication by requiring an authenticated session and automatically logging customers out when their account tab signs out, removing the confusing partially-logged-out state and keeping tax data access clearly scoped",
      tags: ["product"],
    },
    {
      date: "Q2 2025",
      title: "AI-driven Feature Flag Auditing",
      body: "Automated Slack alerts to oncall for discrepancies and archival candidates with agent for team to ask feature flag status questions.",
      tags: ["development"],
    },
    {
      date: "Q2 2025",
      title: "Namespace-Based Experiment Targeting",
      body: "Added namespace-aware targeting for feature flags and experiments, giving teams greater control over which applications received a particular treatment. Server-side evaluation ensured that clients received the correct flag result for their application context.",
      tags: ["development"],
    },
    {
      date: "Q2 2025",
      title: "Cash App Pools - Group Payments",
      body: "To meet tight deadline, helped build a group payment experience that lets organizers set a goal and collect money for shared expenses through a link, with contributions supported through Cash App, Apple Pay, and Google Pay.",
      tags: ["product"],
    },
    {
      date: "Q3 2025",
      title: "Decoupling Cashtag App Deployments",
      body: "Split the shared Cashtags app into separate apps per customer type with server-side redirection, unblocking independent deployments.",
      tags: ["development"],
    },
    {
      date: "Q3 2025",
      title: "Arcade design system - Foundations",
      body: "Started building out new Arcade base components in Cash Web repo and syncing Arcade design token in Cash Design System.",
      tags: ["design"],
    },
    {
      date: "Q3 2025",
      title: "Arcade design system - Cashtags Rollout",
      body: "Built the redesigned Arcade Cashtags profile experience (header, QR code, business/about sections) and ramped it from 0% to 100% in production.",
      tags: ["design", "product"],
    },
    {
      date: "Q3 2025",
      title: "Arcade design system - Login Rollout",
      body: "Built new Arcade components to support web login blockers (phone, email, passcode, selection), rolled out to 100% in production.",
      tags: ["design", "product"],
    },
    {
      date: "Q3 2025",
      title: "Rey - AI-Powered PR Management improvements",
      body: "Worked with internal tooling to upgrade company AI-powered tool to automatically posts pull request updates, tracks merge status and review counts, and integrates with the company’s PR builder to automate pull request creation.",
      tags: ["development"],
    },
    {
      date: "Q4 2025",
      title: "Close account option on web",
      body: "Implemented the Close Cash App Account option on web to help address an Android-release-blocking SEV and giving customers a clearer way to close accounts online.",
      tags: ["product"],
    },
    {
      date: "Q4 2025",
      title: "Arcade design system - Activity Rollout",
      body: "Migrated the Activity experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q4 2025",
      title: "Arcade design system - Bitcoin Rollout",
      body: "Migrated the Bitcoin experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q1 2026",
      title: "Arcade design system - Grant Flow Rollout",
      body: "Migrated the Grant flow experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q1 2026",
      title: "Bitcoin Import for Cash App Taxes",
      body: "Owned end-to-end delivery of Bitcoin transaction imports into Taxes ahead of tax season, coordinating design, backend, Bitcoin, and Tax Product Specialist teams - achieved a 100% import success rate.",
      tags: ["product"],
    },
    {
      date: "Q1 2026",
      title: "1099-DA support for Cash App Taxes",
      body: "Led the frontend implementation of 1099-DA support for digital asset tax reporting while mentoring a junior engineer throughout the project.",
      tags: ["product"],
    },
    {
      date: "Q1 2026",
      title: "Arcade design system - Savings Rollout",
      body: "Migrated the Savings experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q1 2026",
      title: "Arcade design system - Paychecks Rollout",
      body: "Migrated the Investing experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q1 2026",
      title: "Arcade design system - Investing Rollout",
      body: "Migrated the Investing experience to the Arcade design system and deployed the redesigned interface to production.",
      tags: ["design", "product"],
    },
    {
      date: "Q2 2026",
      title: "Cash Mobile Web Released",
      body: "Completed the shared Arcade Modal/ModalPortal rollout across Cash Web and removed all legacy modal code, one of the larger milestones in the org-wide Arcade migration.",
      tags: ["design", "product"],
    },
    {
      date: "Q2 2026",
      title: "Arcade Web Migration Complete",
      body: "Completed the full Arcade design system migration, reskinning the app across web (activity, savings, paychecks, checkout, P2P, and more), as DRI coordinating Web Product, Web Foundations, Support, Checkout, Local, and Design.",
      tags: ["design", "product"],
    },
  ],

  // Real projects from the quarterly narratives, GitHub PRs, and review packets
  projects: [
    {
      icon: "🌐",
      name: "Cash App Web - Growth Engine",
      repo: "cash-web",
      desc: "Identified a high-value web-first customer segment (~550K MAUs, 25% higher inflows, 2x higher balances than non-web users) and helped drive the web platform strategy behind it - contributing to 829K+ incremental new actives and $44M+ yearly LTV through organic and paid web channels.",
      stats: { ltv: "$44M+", area: "Web Product" },
    },
    {
      icon: "🎨",
      name: "Cash Web Arcade 100 - Design System Migration",
      repo: "cash-web, cash-design-system",
      desc: "DRI for migrating all of Cash Web onto a new design system (Arcade): built new components with Web Foundations and reskinned every app across web (activity, savings, paychecks, support, checkout, P2P) by parallelizing work across Web Product, Web Foundations, Support, Checkout, Local, and Design.",
      stats: { role: "DRI", area: "Web Product/Design System" },
    },
    {
      icon: "🧱",
      name: "Taxes JSP Standardization",
      repo: "cash-tax-mono",
      desc: "Replaced ad-hoc HTML across ~1,000 legacy JSP tax pages with React design-system components portaled into JSP tags, giving both the modern and legacy codebases one reusable component source - increased developer velocity and was called out for improved professionalism at a taxes industry conference.",
      stats: { role: "DRI", area: "Web Product/Design System" },
    },
    {
      icon: "📜",
      name: "Cards Dynamic Disclosure",
      repo: "cash-web",
      desc: "Card disclosure text was managed separately across app and web, making legally-mandated changes slow to ship. Moved disclosure text to the server and shared the UI as an exportable package so every surface updates from one source.",
      stats: { role: "DRI", area: "Web Product" },
    },
    {
      icon: "🖼️",
      name: "Snapshot Diff Reviewer",
      repo: "cash-web",
      desc: "Built and shipped an internal tool (plus a published Chrome extension) so engineers could review large PR snapshot sets without GitHub crashing or manually opening image files - reducing visual-regression risk and reviewer fatigue web-wide.",
      stats: { role: "DRI", area: "DevX" },
    },
    {
      icon: "₿",
      name: "Bitcoin Import for Cash App Taxes",
      repo: "cash-tax-mono / tax_web-fe",
      desc: "Owned end-to-end delivery of Bitcoin transaction imports into Taxes - where a single transaction can produce complex tax entries - coordinating Bitcoin, Taxes server, design, product, and QA teams; achieved a 100% import success rate.",
      stats: { successRate: "100%", area: "Taxes" },
    },
    {
      icon: "🔀",
      name: "Decoupled Cashtags Deployments",
      repo: "cash-web",
      desc: "Cash App's shared Cashtags app (controlling its primary cashtag URL) was tightly coupled across three teams with conflicting release needs. Split it into separate apps per customer type with server-side redirection, unblocking independent deployments.",
      stats: { role: "DRI", area: "Web Product" },
    },
    {
      icon: "🚩",
      name: "Feature Flag Tooling & Targeting",
      repo: "tax-ld",
      desc: "Feature flags drifted across environments and accumulated unused entries, so I automated Slack alerts to oncall for discrepancies and archival candidates. Separately, added a namespace attribute read server-side so teams could target flags/experiments to specific apps.",
      stats: { role: "DRI", area: "DevX" },
    },
    {
      icon: "🖥️",
      name: "Desktop Taxes Applet",
      repo: "cash-web / tax_web-fe",
      desc: "Brought the mobile-only tax summary and tax-education applet to desktop, working with design and product to close the platform-parity gap.",
      stats: { role: "DRI", area: "Taxes" },
    },
  ],

  // Real tools and purposes; "installed" is an inferred usage-cadence label
  aiTools: [
    {
      name: "Codex",
      installed: "Daily",
      purpose: "Parallelized project work across multiple repos",
    },
    {
      name: "Claude",
      installed: "Daily",
      purpose: "Planning, architecture, and complex task execution",
    },
    {
      name: "GitHub Copilot",
      installed: "Daily",
      purpose: "In-IDE code writing",
    },
    { name: "Cursor", installed: "Daily", purpose: "AI-native IDE" },
    {
      name: "Wispr Flow",
      installed: "Daily",
      purpose: "Voice dictation to AI agents",
    },
    { name: "Gemini", installed: "Daily", purpose: "AI meeting note-taking" },
    {
      name: "Databricks",
      installed: "Daily",
      purpose: "Token and data queries",
    },
    {
      name: "Goose",
      installed: "Previously Daily",
      purpose: "Open-source company AI tool",
    },
    {
      name: "Builder-bot",
      installed: "Weekly",
      purpose: "Internal company AI slack tool",
    },
    {
      name: "Datadog",
      installed: "Weekly",
      purpose: "Debugging, RUM, and test monitoring",
    },
    {
      name: "Bugsnag",
      installed: "Weekly",
      purpose: "Debugging, RUM, and test monitoring",
    },
    {
      name: "Amplitude",
      installed: "Weekly",
      purpose: "Experimentation and user dashboards",
    },
    {
      name: "ChatGPT",
      installed: "Occasional",
      purpose: "General-purpose chat",
    },
    {
      name: "Conductor",
      installed: "Occasional",
      purpose: "Experimental workflows",
    },
    {
      name: "Snowflake",
      installed: "Occasional",
      purpose: "Big-data query visualization",
    },
  ],

  // Real counts from the mentorship records
  mentorshipWorkspaces: [
    {
      project: "Web Team Onboarding",
      sessions: 3,
      note: "New frontend engineers onboarded 1:1",
    },
    {
      project: "Team Offsites",
      sessions: 3,
      note: "Organized team offsites throughout the year to collaborate",
    },
    {
      project: "Cash Lightning Talks",
      sessions: 7,
      note: "Quick and focused knowledge-sharing tech talks",
    },
    {
      project: "Frontend Onboarding Sessions",
      sessions: 8,
      note: "Taught frontend + AI workflows to taxes server engineers",
    },
    {
      project: "Cash Web University",
      sessions: 10,
      note: "Monthly rotating knowledge-sharing tech talks (ongoing)",
    },
    {
      project: "AI Workflow Pairing 1:1s",
      sessions: 15,
      note: "Weekly 1:1 Pairings to share AI workflows",
    },
  ],

  // ESTIMATED: based on AI usage profile,
  // shape reflects the real adoption ramp, magnitudes illustrative
  aiByMonth: {
    "2025-05": { sessions: 32, messages: 648, toolCalls: 142 },
    "2025-06": { sessions: 45, messages: 932, toolCalls: 201 },
    "2025-07": { sessions: 56, messages: 1188, toolCalls: 248 },
    "2025-08": { sessions: 78, messages: 1694, toolCalls: 361 },
    "2025-09": { sessions: 91, messages: 1992, toolCalls: 419 },
    "2025-10": { sessions: 108, messages: 2384, toolCalls: 496 },
    "2025-11": { sessions: 116, messages: 2538, toolCalls: 533 },
    "2025-12": { sessions: 122, messages: 2687, toolCalls: 558 },
    "2026-01": { sessions: 148, messages: 3286, toolCalls: 677 },
    "2026-02": { sessions: 166, messages: 3702, toolCalls: 762 },
    "2026-03": { sessions: 189, messages: 4248, toolCalls: 871 },
    "2026-04": { sessions: 212, messages: 4791, toolCalls: 980 },
    "2026-05": { sessions: 234, messages: 5328, toolCalls: 1088 },
  },

  // ESTIMATED: illustrative distribution based on real usage patterns
  aiHourDistribution: {
    "00": 1,
    "01": 0,
    "02": 0,
    "03": 0,
    "04": 0,
    "05": 0,
    "06": 1,
    "07": 2,
    "08": 4,
    "09": 7,
    10: 9,
    11: 11,
    12: 7,
    13: 8,
    14: 9,
    15: 10,
    16: 11,
    17: 8,
    18: 5,
    19: 3,
    20: 3,
    21: 2,
    22: 1,
    23: 0,
  },

  // Real sources used to build this data
  dataSources: [
    {
      icon: "🐙",
      name: "GitHub contribution activity",
      detail: "Monthly PR, review, and commit activity over the last 12 months",
    },
    {
      icon: "🤖",
      name: "AI-generated quarterly summaries",
      detail: "Annual engineering summaries digesting GitHub + Slack activity",
    },
    {
      icon: "📋",
      name: "Performance review packets",
      detail: "Peer- and manager-review evaluations",
    },
    {
      icon: "📈",
      name: "Cash App Web Impact",
      detail: "Strategic analysis of the Cash App web growth opportunity",
    },
  ],
};
