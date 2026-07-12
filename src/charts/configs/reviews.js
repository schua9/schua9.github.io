import { monthLabel } from '../../data/format.js'
import { MERGED, barOptions } from '../chartTheme.js'

export function reviewsConfig(data) {
  const months = Object.keys(data.reviewsByMonth)
  return {
    data: {
      labels: months.map(monthLabel),
      datasets: [
        {
          data: Object.values(data.reviewsByMonth),
          backgroundColor: MERGED + 'cc',
          borderColor: MERGED,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: barOptions(),
  }
}
