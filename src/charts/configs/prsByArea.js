import {
  PURPLE,
  ACCENT,
  BLUE,
  CYAN,
  ACCENT2,
  MERGED,
  doughnutLegendPosition,
} from '../chartTheme.js'

const COLORS = [BLUE, MERGED, ACCENT2, PURPLE, CYAN, ACCENT]

export function prsByAreaConfig(data) {
  const labels = Object.keys(data.prsByArea)
  const colors = labels.map((_, i) => COLORS[i % COLORS.length])
  return {
    data: {
      labels,
      datasets: [
        {
          data: Object.values(data.prsByArea),
          backgroundColor: colors.map((c) => c + 'cc'),
          borderColor: colors,
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: doughnutLegendPosition(),
          labels: { boxWidth: 12, padding: 12, font: { size: 11 } },
        },
      },
    },
  }
}
