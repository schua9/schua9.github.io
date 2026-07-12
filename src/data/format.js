export function monthLabel(ym) {
  const [y, m] = ym.split('-')
  return new Date(+y, +m - 1).toLocaleString('en-US', {
    month: 'short',
    year: '2-digit',
  })
}

export function sumValues(values, read = (value) => value) {
  return values.reduce((total, value) => total + read(value), 0)
}

export function compactNumber(value) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace('.0', '')}M`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace('.0', '')}k`
  }
  return value.toLocaleString('en-US')
}

export function fullNumber(value) {
  return value.toLocaleString('en-US')
}
