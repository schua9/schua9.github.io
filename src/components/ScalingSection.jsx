import { Bar } from 'react-chartjs-2'
import { portfolioData } from '../data/portfolioData.js'
import { scalingConfig } from '../charts/configs/scaling.js'
import { reviewsConfig } from '../charts/configs/reviews.js'
import { appsTouchedConfig } from '../charts/configs/appsTouched.js'
import Section from './Section.jsx'
import ChartCard from './ChartCard.jsx'
import ChartsRow from './ChartsRow.jsx'

export default function ScalingSection() {
  const scaling = scalingConfig(portfolioData)
  const reviews = reviewsConfig(portfolioData)
  const apps = appsTouchedConfig(portfolioData)

  return (
    <Section
      id="scaling"
      title="The Scaling Curve"
      sub="PRs opened per month, showing the ramp across the period"
      alt
    >
      <ChartCard title="PRs Opened by Month" wide>
        <Bar data={scaling.data} options={scaling.options} />
      </ChartCard>
      <ChartsRow>
        <ChartCard title="PR Reviews Given by Month">
          <Bar data={reviews.data} options={reviews.options} />
        </ChartCard>
        <ChartCard title="PRs by Repository">
          <Bar data={apps.data} options={apps.options} />
        </ChartCard>
      </ChartsRow>
    </Section>
  )
}
