import { type Section } from "../data/coachingContent";
import FrameworkCard from "./FrameworkCard";

export default function SectionView({ section }: { section: Section }) {
  return (
    <div className="flex flex-col gap-6 p-6 overflow-y-auto h-full">
      {/* Hero */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{section.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">{section.label}</h1>
            <p className="text-sm font-medium" style={{ color: "#F59E0B" }}>
              {section.tagline}
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed mt-3" style={{ color: "#94A3B8" }}>
          {section.description}
        </p>
      </div>

      {/* Frameworks */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6D28D9" }}>
          Core Frameworks
        </h2>
        <div className="grid gap-4">
          {section.frameworks.map((fw) => (
            <FrameworkCard key={fw.title} fw={fw} />
          ))}
        </div>
      </div>

      {/* Tips */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6D28D9" }}>
          Donna's Field Tips
        </h2>
        <div className="flex flex-col gap-2">
          {section.tips.map((tip, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-lg px-4 py-3 text-sm"
              style={{ background: "#14142B", borderLeft: "3px solid #F59E0B", color: "#CBD5E1" }}
            >
              <span
                className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                style={{ background: "#1E1B4B", color: "#F59E0B" }}
              >
                {i + 1}
              </span>
              <span className="leading-relaxed">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
