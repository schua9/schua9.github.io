import { portfolioData } from "../data/portfolioData.js";
import "./BuiltSection.css";

export default function BuiltSection() {
  return (
    <section className="built-section">
      <div className="built-inner">
        <div className="built-header">
          <span className="built-label">AI</span>
          <h3 className="built-title">How this portfolio was built</h3>
          <p className="built-desc">
            Built as a React site modeled on a personal activity-report format,
            populated with real GitHub contribution data, quarterly project
            summaries, and performance review highlights from the past year.
          </p>
        </div>
        <div className="built-sources">
          {portfolioData.dataSources.map((source) => (
            <div className="built-source" key={source.name}>
              <span className="built-source-icon">{source.icon}</span>
              <span className="built-source-name">{source.name}</span>
              <span className="built-source-detail">{source.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
