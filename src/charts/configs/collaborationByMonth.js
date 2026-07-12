import { monthLabel } from '../../data/format.js'
import { ACCENT2, barOptions } from '../chartTheme.js'

export function collaborationByMonthConfig(data) {
  const months = Object.keys(data.collaborationByMonth)
  return {
    data: {
      labels: months.map(monthLabel),
      datasets: [
        {
          data: Object.values(data.collaborationByMonth),
          backgroundColor: ACCENT2 + 'cc',
          borderColor: ACCENT2,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: barOptions(),
  }
}
