function cssVar(name, fallback) {
  if (typeof window === 'undefined') return fallback
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return value || fallback
}

export const ACCENT = cssVar('--accent', '#0d9488')
export const ACCENT2 = cssVar('--accent2', '#f59e0b')
export const MERGED = cssVar('--merged', '#22c55e')
export const DANGER = cssVar('--danger', '#f87171')
export const BLUE = cssVar('--blue', '#60a5fa')
export const MUTED = cssVar('--muted', '#7d8fa8')
export const PURPLE = '#a78bfa'
export const CYAN = '#38bdf8'

export function doughnutLegendPosition() {
  if (typeof window === 'undefined') return 'right'
  return window.matchMedia('(max-width: 680px)').matches ? 'bottom' : 'right'
}

export function barOptions(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, ...extra.plugins },
    scales: {
      x: { grid: { color: MUTED + '55' } },
      y: {
        grid: { color: MUTED + '55' },
        beginAtZero: true,
        ticks: { precision: 0 },
        ...extra.y,
      },
    },
    ...extra,
  }
}
