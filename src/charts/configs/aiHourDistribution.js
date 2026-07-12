import { ACCENT, BLUE, ACCENT2 } from '../chartTheme.js'

export function aiHourDistributionConfig(data) {
  const hours = Object.keys(data.aiHourDistribution).sort((a, b) => +a - +b)
  const labels = hours.map((h) => {
    const hr = +h
    return hr === 0 ? '12am' : hr < 12 ? hr + 'am' : hr === 12 ? '12pm' : hr - 12 + 'pm'
  })
  return {
    data: {
      labels,
      datasets: [
        {
          data: hours.map((h) => data.aiHourDistribution[h]),
          backgroundColor: hours.map((h) => {
            const hr = +h
            if (hr >= 8 && hr <= 11) return ACCENT + 'cc'
            if (hr >= 12 && hr <= 16) return BLUE + 'cc'
            return ACCENT2 + '88'
          }),
          borderColor: hours.map((h) => {
            const hr = +h
            if (hr >= 8 && hr <= 11) return ACCENT
            if (hr >= 12 && hr <= 16) return BLUE
            return ACCENT2
          }),
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Threads started', font: { size: 11 } },
          ticks: { precision: 0 },
        },
      },
    },
  }
}
