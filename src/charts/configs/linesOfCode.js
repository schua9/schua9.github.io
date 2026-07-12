import { monthLabel } from '../../data/format.js'
import { MERGED, DANGER } from '../chartTheme.js'

export function linesOfCodeConfig(data) {
  const months = Object.keys(data.linesByMonth)
  return {
    data: {
      labels: months.map(monthLabel),
      datasets: [
        {
          label: 'Lines Added',
          data: months.map((m) => data.linesByMonth[m].added),
          backgroundColor: MERGED + 'bb',
          borderColor: MERGED,
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Lines Deleted',
          data: months.map((m) => data.linesByMonth[m].deleted),
          backgroundColor: DANGER + 'bb',
          borderColor: DANGER,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: { boxWidth: 12, padding: 16, font: { size: 12 } },
        },
        tooltip: {
          callbacks: {
            footer: (items) => {
              const added =
                items.find((i) => i.dataset.label === 'Lines Added')?.parsed.y ?? 0
              const deleted =
                items.find((i) => i.dataset.label === 'Lines Deleted')?.parsed.y ?? 0
              const net = added - deleted
              return `Net: ${net >= 0 ? '+' : ''}${net.toLocaleString()}`
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (v) => (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v) },
        },
      },
    },
  }
}
