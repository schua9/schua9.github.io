import { Bar, Doughnut } from 'react-chartjs-2'
import { portfolioData } from '../data/portfolioData.js'
import { prsByAreaConfig } from '../charts/configs/prsByArea.js'
import { fileTypesConfig } from '../charts/configs/fileTypes.js'
import { linesOfCodeConfig } from '../charts/configs/linesOfCode.js'
import Section from './Section.jsx'
import ChartCard from './ChartCard.jsx'
import ChartsRow from './ChartsRow.jsx'

export default function EngineeringSection() {
  const area = prsByAreaConfig(portfolioData)
  const fileTypes = fileTypesConfig(portfolioData)
  const lines = linesOfCodeConfig(portfolioData)

  return (
    <Section
      id="engineering"
      title="Engineering Output"
      sub="Pull requests and code footprint across this period"
    >
      <ChartsRow>
        <ChartCard title="PRs by Focus Area">
          <Doughnut data={area.data} options={area.options} />
        </ChartCard>
        <ChartCard title="Percentage of File Types Authored">
          <Doughnut data={fileTypes.data} options={fileTypes.options} />
        </ChartCard>
      </ChartsRow>
      <ChartCard title="Lines of Code — Added vs Deleted" wide>
        <Bar data={lines.data} options={lines.options} />
      </ChartCard>
    </Section>
  )
}
