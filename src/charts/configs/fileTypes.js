import {
  BLUE,
  CYAN,
  MERGED,
  PURPLE,
  ACCENT2,
  DANGER,
  doughnutLegendPosition,
} from '../chartTheme.js'

const COLORS = [BLUE, CYAN, MERGED, PURPLE, ACCENT2, DANGER]

export function fileTypesConfig(data) {
  const labels = Object.keys(data.fileTypes)
  const colors = labels.map((_, i) => COLORS[i % COLORS.length])
  return {
    data: {
      labels,
      datasets: [
        {
          data: Object.values(data.fileTypes),
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
