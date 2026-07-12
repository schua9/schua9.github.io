import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
)

Chart.defaults.color = '#7d8fa8'
Chart.defaults.borderColor = '#2a3547'
Chart.defaults.font.family = "'Inter', system-ui, sans-serif"

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  Chart.defaults.animation = false
}
