import { portfolioData } from "../data/portfolioData.js";
import { sumValues, compactNumber } from "../data/format.js";
import { useInView } from "../hooks/useInView.js";
import { useCountUp } from "../hooks/useCountUp.js";
import "./Hero.css";

function repositoryStats() {
  return {
    prsOpened: sumValues(Object.values(portfolioData.prsByMonth)),
    linesAdded: sumValues(
      Object.values(portfolioData.linesByMonth),
      (m) => m.added,
    ),
    prReviews: sumValues(Object.values(portfolioData.reviewsByMonth)),
  };
}

function aiStats() {
  const months = Object.values(portfolioData.aiByMonth);
  return {
    threads: sumValues(months, (m) => m.sessions),
    messages: sumValues(months, (m) => m.messages),
    toolCalls: sumValues(months, (m) => m.toolCalls),
  };
}

function StatCard({ value, label, animate }) {
  const count = useCountUp(value, { enabled: animate });
  return (
    <div className="stat-card">
      <div className="stat-number">{compactNumber(count)}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const repo = repositoryStats();
  const ai = aiStats();
  const [statsRef, statsInView] = useInView();
  const stats = [
    { value: repo.prsOpened, label: "Pull Requests" },
    { value: repo.linesAdded, label: "Lines Added" },
    { value: repo.prReviews, label: "PRs Reviewed" },
    { value: ai.threads, label: "AI Threads" },
    { value: ai.messages, label: "AI Messages" },
    { value: ai.toolCalls, label: "AI Tool Calls" },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-eyebrow">
        Personal Portfolio &middot; 2025 &ndash; 2026
      </div>
      <h1 className="hero-name">Sabrina Chua</h1>
      <p className="hero-role">Senior Software Engineer</p>
      <p className="hero-sub">
        Product &amp; Design systems at scale &mdash; leading a cross-team
        design-system migration and reusable component architecture across Cash
        Web and Taxes
      </p>

      <div className="stats-grid" ref={statsRef}>
        {stats.map((stat) => (
          <StatCard
            value={stat.value}
            label={stat.label}
            animate={statsInView}
            key={stat.label}
          />
        ))}
      </div>

      <div className="scaling-banner">
        <div className="scaling-banner-title">
          Design-System Lead on Cash Web &amp; Taxes
        </div>
        <div className="scaling-banner-body">
          DRI for the <strong>org-wide Arcade design-system migration</strong>{" "}
          across Cash Web - built shared components with Web Foundations and
          coordinated 5+ teams to reskin every web surface. Also led{" "}
          <strong>Taxes JSP Standardization</strong>, replacing ad-hoc legacy
          HTML with reusable React components portaled across both codebases.
          Monthly PR volume grew from <strong>73 in May 2025</strong> to{" "}
          <strong>437 by May 2026</strong>, while adopting AI-assisted workflows
          (Codex, Claude) heavily onward.
        </div>
      </div>
    </section>
  );
}
