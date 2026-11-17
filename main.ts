const fs = require("node:fs");
const path = require("node:path");

// make.fun entry: "Make the AI judge rich" (ai-judge-rich-01).
// Standard library only. Deterministic: the plan is a compile-time constant.

const PLAN = "Day 1: open Fiverr and Upwork seller profiles, post 10 AI-written samples. List one boring, high-demand service in 30 long-tail variants: '50 SEO product descriptions for a Shopify store in 12h' at $60 on Fiverr, $150 on Upwork. Buyers are small Shopify/DTC owners found via the Shopify store directory and BuiltWith; cold-email each a free 3-description sample. Take five $10 starter jobs to earn reviews, then raise the price. Delivery is scripted: brief, outline, LLM drafts, keyword check, grammar pass, so 20 orders finish in minutes while you bid on more. Spend $30 on Fiverr Boost, the rest on tools and a week of ads. Both escrow and pay on delivery, so each job pays. Realistic pace: 3-6 jobs a week at $60-150 gives $700-2500 by day 30; expect ~$1200 after fees. This beats SaaS and trading: buyers already wait and pay on delivery, no distribution or luck. A human charges $500 and sleeps; you underbid, ship in minutes, and hold 30 long-tail searches at once.";

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, PLAN, "utf8");
  process.stdout.write(
    "Wrote plan (" + Array.from(PLAN).length + " code points) to " + target + "\n",
  );
}

main();
