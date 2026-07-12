import { PURPLE, ACCENT, BLUE, CYAN, ACCENT2, MERGED } from '../chartTheme.js'

const COLORS = [PURPLE, ACCENT, BLUE, CYAN, ACCENT2, MERGED]

export function appsTouchedConfig(data) {
  const labels = Object.keys(data.reposTouched)
  const values = Object.values(data.reposTouched)
  return {
    data: {
      labels: labels.map((l) => (/[-_]/.test(l) ? l : l.charAt(0).toUpperCase() + l.slice(1))),
      datasets: [
        {
          data: values,
          backgroundColor: labels.map((_, i) => COLORS[i % COLORS.length] + 'cc'),
          borderColor: labels.map((_, i) => COLORS[i % COLORS.length]),
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          title: { display: true, text: 'PRs', font: { size: 11 } },
        },
        y: { grid: { display: false } },
      },
    },
  }
}
