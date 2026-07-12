import { monthLabel } from "../../data/format.js";
import { ACCENT, MUTED } from "../chartTheme.js";

export function scalingConfig(data) {
  const months = Object.keys(data.prsByMonth);
  const prData = Object.values(data.prsByMonth);

  return {
    data: {
      labels: months.map(monthLabel),
      datasets: [
        {
          label: "PRs Opened",
          data: prData,
          backgroundColor: ACCENT + "cc",
          borderColor: ACCENT,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { grid: { color: MUTED + "55" } },
        y: {
          grid: { color: MUTED + "55" },
          beginAtZero: true,
          ticks: { precision: 0 },
        },
      },
    },
  };
}
