import { Bar, Doughnut } from "react-chartjs-2";
import { portfolioData } from "../data/portfolioData.js";
import { collaborationByMonthConfig } from "../charts/configs/collaborationByMonth.js";
import { collaborationCategoriesConfig } from "../charts/configs/collaborationCategories.js";
import { collaborationActivityOverviewConfig } from "../charts/configs/collaborationActivityOverview.js";
import Section from "./Section.jsx";
import ChartCard from "./ChartCard.jsx";
import ChartsRow from "./ChartsRow.jsx";

export default function CollaborationSection() {
  const byMonth = collaborationByMonthConfig(portfolioData);
  const categories = collaborationCategoriesConfig(portfolioData);
  const activityOverview = collaborationActivityOverviewConfig();

  return (
    <Section
      id="collaboration"
      title="Team & Collaboration"
      sub="Review loops and where collaboration concentrated in the codebase"
    >
      <ChartCard title="Github Activity Percentage" wide>
        <Doughnut
          data={activityOverview.data}
          options={activityOverview.options}
        />
      </ChartCard>
      <ChartsRow>
        <ChartCard title="Comments by Month">
          <Bar data={byMonth.data} options={byMonth.options} />
        </ChartCard>
        <ChartCard title="Percentage of Review / Comment Focus Areas">
          <Doughnut data={categories.data} options={categories.options} />
        </ChartCard>
      </ChartsRow>
    </Section>
  );
}
