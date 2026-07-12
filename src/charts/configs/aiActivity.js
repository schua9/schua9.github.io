import { monthLabel } from '../../data/format.js'
import { ACCENT, CYAN } from '../chartTheme.js'

export function aiActivityConfig(data) {
  const months = Object.keys(data.aiByMonth)
  return {
    data: {
      labels: months.map(monthLabel),
      datasets: [
        {
          label: 'Threads',
          data: months.map((m) => data.aiByMonth[m].sessions),
          backgroundColor: ACCENT + 'cc',
          borderColor: ACCENT,
          borderWidth: 1,
          borderRadius: 4,
          yAxisID: 'y',
        },
        {
          label: 'Messages (hundreds)',
          data: months.map((m) => Math.round(data.aiByMonth[m].messages / 100)),
          backgroundColor: CYAN + '66',
          borderColor: CYAN,
          borderWidth: 1,
          borderRadius: 4,
          yAxisID: 'y1',
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
      },
      scales: {
        y: {
          beginAtZero: true,
          position: 'left',
          title: { display: true, text: 'Threads', font: { size: 11 } },
        },
        y1: {
          grid: { display: false },
          beginAtZero: true,
          position: 'right',
          title: { display: true, text: 'Messages (100s)', font: { size: 11 } },
        },
      },
    },
  }
}
