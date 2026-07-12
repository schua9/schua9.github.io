import { Bar } from "react-chartjs-2";
import { portfolioData } from "../data/portfolioData.js";
import { sumValues, fullNumber } from "../data/format.js";
import { aiActivityConfig } from "../charts/configs/aiActivity.js";
import { aiHourDistributionConfig } from "../charts/configs/aiHourDistribution.js";
import Section from "./Section.jsx";
import ChartCard from "./ChartCard.jsx";
import ChartsRow from "./ChartsRow.jsx";
import "./Ai.css";

function AiSummaryCard() {
  const months = Object.values(portfolioData.aiByMonth);
  const stats = [
    {
      value: fullNumber(sumValues(months, (m) => m.sessions)),
      label: "threads",
    },
    {
      value: fullNumber(sumValues(months, (m) => m.messages)),
      label: "messages",
    },
    {
      value: fullNumber(sumValues(months, (m) => m.toolCalls)),
      label: "tool calls",
    },
  ];
  return (
    <div className="ai-summary-card ai-summary-card-wide">
      <div className="ai-summary-tool">
        Claude, Codex &amp; Cursor (primary), plus supporting tools
      </div>
      <div className="ai-summary-stats">
        {stats.map((stat) => (
          <span key={stat.label}>
            <strong>{stat.value}</strong> {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkspaceRow({ workspace, max }) {
  const TEXT_OFFSET = 8;
  const pct = Math.round((workspace.sessions / max) * 100) - TEXT_OFFSET;
  return (
    <div className="meeting-row">
      <div className="meeting-meta">
        <span className="meeting-name">{workspace.project}</span>
        <span className="meeting-cadence">{workspace.note}</span>
      </div>
      <div className="meeting-bar-wrap">
        <div className="meeting-bar" style={{ width: `${pct}%` }} />
        <span className="meeting-count">{workspace.sessions}</span>
      </div>
    </div>
  );
}

function ToolRow({ tool }) {
  return (
    <div className="plugin-row">
      <span className="plugin-name">{tool.name}</span>
      <span className="plugin-purpose">{tool.purpose}</span>
      <span className="plugin-date">{tool.installed}</span>
    </div>
  );
}

export default function AiSection() {
  const activity = aiActivityConfig(portfolioData);
  const hours = aiHourDistributionConfig(portfolioData);
  const max = Math.max(
    ...portfolioData.mentorshipWorkspaces.map((w) => w.sessions),
    1,
  );

  return (
    <Section
      id="ai"
      title="AI & Tools"
      sub="AI-assisted workflow adoption across this period"
      alt
    >
      <div className="ai-summary-row">
        <AiSummaryCard />
      </div>

      <ChartsRow>
        <ChartCard title="Threads & Messages by Month">
          <Bar data={activity.data} options={activity.options} />
        </ChartCard>
        <ChartCard title="Percentage of Thread Start Times">
          <Bar data={hours.data} options={hours.options} />
        </ChartCard>
      </ChartsRow>

      <ChartsRow>
        <ChartCard title="Mentorship & AI Enablement" bare>
          <div className="workspace-list">
            {portfolioData.mentorshipWorkspaces.map((workspace) => (
              <WorkspaceRow
                workspace={workspace}
                max={max}
                key={workspace.project}
              />
            ))}
          </div>
        </ChartCard>
        <ChartCard title="Tools Used" bare>
          <div className="tool-list">
            {portfolioData.aiTools.map((tool) => (
              <ToolRow tool={tool} key={tool.name} />
            ))}
          </div>
        </ChartCard>
      </ChartsRow>
    </Section>
  );
}
