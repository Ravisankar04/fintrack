
import { NotionDatabase, MarketingAsset } from './types';

export const PRICING_TIERS = [
  {
    name: "Lite",
    price: "$19",
    features: ["Invoice Tracker", "Basic Expense Log", "Simple CRM", "Standard Guide"],
    cta: "Basic Billing",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Everything in Lite", "Full Master Dashboard", "Tax Estimator", "Profitability Calc", "Video Tutorial"],
    cta: "The Full System",
    popular: true
  },
  {
    name: "Pro+",
    price: "$79",
    features: ["Everything in Pro", "Make.com Automations", "Zapier Guide", "Tax Season Checklist", "Priority Email Support"],
    cta: "Scale to Agency",
    popular: false
  }
];

export const NICHE_VARIANTS = [
  {
    niche: "Developers",
    hook: "Ship code, not invoices.",
    pain: "Tired of context-switching between VS Code and messy spreadsheets?",
    example: "Pre-filled categories: AWS, GitHub, Vercel, JetBrains."
  },
  {
    niche: "Designers",
    hook: "Beautiful finances for beautiful work.",
    pain: "Your bank account shouldn't be the only thing that looks ugly.",
    example: "Pre-filled categories: Adobe Creative Cloud, Figma, Fonts, Stock Photos."
  },
  {
    niche: "Consultants",
    hook: "High-value systems for high-value pros.",
    pain: "Stop guessing your effective hourly rate.",
    example: "Pre-filled categories: LinkedIn Premium, Calendly, Travel, Legal/LLC."
  }
];

export const DATABASES: NotionDatabase[] = [
  {
    title: "1. The CRM & Profitability Hub",
    icon: "🤝",
    description: "Connects every project to a client to calculate ROI on your time.",
    properties: [
      { name: "Client Name", type: "Text" },
      { name: "Retention Score", type: "Select", options: ["High", "Medium", "One-off"] },
      { name: "Eff. Hourly Rate", type: "Formula", formula: `prop("Total Paid") / prop("Total Hours")` },
      { name: "Lifetime Value", type: "Rollup", description: "Sum of all paid invoices" },
      { name: "Project Status", type: "Status" }
    ],
    views: ["High Value Clients", "Retention Risk", "Lead Pipeline"]
  },
  {
    title: "2. The Invoice Engine",
    icon: "📄",
    description: "Not just a list, but a collection system.",
    properties: [
      { name: "Invoice ID", type: "Formula", formula: `"FCC-" + format(toNumber(prop("Number")))` },
      { name: "Days Since Sent", type: "Formula", formula: `dateBetween(now(), prop("Date Sent"), "days")` },
      { name: "Reminder Status", type: "Select", options: ["Not Sent", "Friendly", "Firm", "Legal"] },
      { name: "Auto-Tax Reserve", type: "Formula", formula: `prop("Amount") * 0.25` }
    ],
    views: ["Overdue (Critical)", "Pending Verification", "Monthly Forecast"]
  }
];

export const DISTRIBUTION_SCRIPTS = [
  {
    platform: "Reddit (r/freelance)",
    title: "How I stopped fearing tax season as a solo dev",
    content: "I spent years dreading April. I finally built a system in Notion that tracks my tax liability in real-time with every invoice I send. Here's exactly how the math works... [Educational breakdown] ...If you're lazy, I turned it into a template called fintrack."
  },
  {
    platform: "Twitter/X (Building in Public)",
    title: "Transparency: 0 to 1 sales",
    content: "Spent 40 hours building fintrack for Notion. \n\nGoal: Save freelancers 5 hours/mo.\nReality: It's actually saving me 10.\n\nHere is a 30s screen recording of the profit dashboard update in real-time. 👇"
  },
  {
    platform: "LinkedIn (Authority Post)",
    title: "The difference between a job and a business",
    content: "Most freelancers have a job, not a business. The difference? A system. If you can't tell me your net profit margin for last month in 10 seconds, you have a job. I built fintrack to fix that."
  }
];

// Rename to VIDEO_SCRIPT to satisfy component imports in SetupGuide.tsx
export const VIDEO_SCRIPT = `
[0:00] (Screen: Master Dashboard) "This is your business at a glance. No more spreadsheets. This is fintrack."
[0:10] (Screen: Invoice Sent) "You send an invoice..."
[0:15] (Screen: Dashboard Update) "And your profit margin, tax debt, and emergency fund goals update instantly."
[0:30] (Screen: Tax Estimator) "Never guess what you owe the IRS again. The math is done for you."
[0:45] (Screen: CRM) "Identify which clients are making you money—and which are wasting your time."
[1:00] "fintrack. Professional grade. Notion based. Ready for you."
`;

export const GUMROAD_SALES_COPY = `
# Stop Running Your Business on "Vibes."

You’re a world-class professional. You shouldn't be managing $100k+ in revenue using a messy "Notes" app or a spreadsheet that breaks every time you add a row.

**fintrack** is a professional-grade financial operating system designed to give you total clarity in 15 minutes a month.

### The Problem:
Most freelancers spend 5-10 hours every month on "admin" but still don't know their real profit margin or tax liability.

### The Solution:
A interconnected system where data flows seamlessly:
- **Client logs work** → **Invoice updates** → **Profit dashboard reflects growth.**
- **Expense logged** → **Tax estimate decreases.**

### What’s Included:
- **High-Performance Dashboard:** The exact metrics 6-figure solopreneurs use.
- **The "Profitability" CRM:** Stop working for low-ROI clients.
- **Smart Tax Estimator:** Auto-calculates your quarterly payments.
- **Receipt Vault:** Stay audit-proof without the clutter.

**Join 500+ freelancers who turned their "hustle" into a business with fintrack.**
`;

// Define SETUP_GUIDE to satisfy component imports in SetupGuide.tsx
export const SETUP_GUIDE = `
# How to build the fintrack System

### Step 1: The Core Databases
Create two main databases in Notion: "CRM & Profitability Hub" and "Invoice Engine". Follow the Schema tab in this app for the exact properties and formulas.

### Step 2: Establish Relations
Link the "Invoice Engine" to the "CRM" using a Relation property. This allows you to track which invoices belong to which clients and calculate the "Lifetime Value" automatically.

### Step 3: Configure Rollups
In the CRM, add a Rollup property that sums the "Amount" of all paid invoices from the Invoice Engine. This gives you instant clarity on your most profitable clients.

### Step 4: The Dashboard
Create a new page and use "Linked Views of Databases" to pull in your Active Invoices and CRM. Use "Callout" blocks for your key metrics like "Cash in Bank" and "Tax Reserve".

### Step 5: Automation (Optional)
Connect your bank to the Expense Tracker using Zapier or Make.com to automate receipt logging and spend tracking.
`;
