import { useInView } from "../hooks/useInView.js";
import "./ChartCard.css";

export default function ChartCard({
  title,
  wide = false,
  bare = false,
  children,
}) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <div className={wide ? "chart-card chart-wide" : "chart-card"} ref={ref}>
      <div className="chart-title">{title}</div>
      {bare ? (
        children
      ) : (
        <div className="chart-canvas-wrap">{inView ? children : null}</div>
      )}
    </div>
  );
}
