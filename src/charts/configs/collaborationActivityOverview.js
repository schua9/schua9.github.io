import {
  ACCENT,
  BLUE,
  MERGED,
  doughnutLegendPosition,
} from '../chartTheme.js'

const ACTIVITY = {
  'Code review': 41,
  'Pull requests': 30,
  Commits: 29,
}

const COLORS = [ACCENT, BLUE, MERGED]

export function collaborationActivityOverviewConfig() {
  const entries = Object.entries(ACTIVITY)
  const labels = entries.map(([label, value]) => `${label} (${value}%)`)

  return {
    data: {
      labels,
      datasets: [
        {
          data: entries.map(([, value]) => value),
          backgroundColor: COLORS.map((color) => color + 'cc'),
          borderColor: COLORS,
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: doughnutLegendPosition(),
          labels: { boxWidth: 12, padding: 12, font: { size: 11 } },
        },
      },
    },
  }
}
