import {
  ACCENT,
  BLUE,
  CYAN,
  ACCENT2,
  MERGED,
  PURPLE,
  DANGER,
  doughnutLegendPosition,
} from '../chartTheme.js'

const COLORS = [ACCENT, BLUE, CYAN, ACCENT2, MERGED, PURPLE, DANGER]

export function collaborationCategoriesConfig(data) {
  const labels = Object.keys(data.collaborationCategories)
  const colors = labels.map((_, i) => COLORS[i % COLORS.length])
  return {
    data: {
      labels,
      datasets: [
        {
          data: Object.values(data.collaborationCategories),
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
      cutout: '55%',
      plugins: {
        legend: {
          position: doughnutLegendPosition(),
          labels: { boxWidth: 10, padding: 10, font: { size: 10 } },
        },
      },
    },
  }
}
