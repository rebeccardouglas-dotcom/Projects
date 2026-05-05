import { useState } from "react";
import { sections } from "./data/coachingContent";
import SectionView from "./components/SectionView";
import DonnaChat from "./components/DonnaChat";

export default function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <>
      <div className="flex h-screen overflow-hidden" style={{ background: "#080813", color: "#F1F5F9" }}>
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:static z-30 flex flex-col h-full transition-transform duration-200
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          style={{ width: "240px", background: "#0A0A1A", borderRight: "1px solid #1E1B4B", flexShrink: 0 }}
        >
          <div className="px-5 py-5 border-b" style={{ borderColor: "#1E1B4B" }}>
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
              >
                D
              </div>
              <span className="font-bold text-white text-lg">Donna</span>
            </div>
            <p className="text-xs" style={{ color: "#4B5563" }}>
              Your Executive Coach
            </p>
          </div>

          <nav className="flex-1 px-3 py-4 overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-widest px-2 mb-3" style={{ color: "#4B5563" }}>
              Areas of Focus
            </p>
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => { setActiveId(s.id); setSidebarOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-150"
                      style={{
                        background: isActive ? "rgba(124,58,237,0.15)" : "transparent",
                        color: isActive ? "#A78BFA" : "#64748B",
                        borderLeft: isActive ? "2px solid #7C3AED" : "2px solid transparent",
                      }}
                    >
                      <span className="text-base">{s.icon}</span>
                      <span className="font-medium leading-tight">{s.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-5 py-4 border-t" style={{ borderColor: "#1E1B4B" }}>
            <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
              Sinek's empathy. Robbins' fire. Zero tolerance for playing small.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header
            className="flex items-center gap-4 px-4 py-3 border-b shrink-0"
            style={{ borderColor: "#1E1B4B", background: "#080813" }}
          >
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white px-2 py-1 rounded"
              style={{ background: "#14142B", fontSize: "18px" }}
            >
              ☰
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xl">{active.icon}</span>
              <h2 className="font-semibold text-white text-base">{active.label}</h2>
            </div>
            <div
              className="ml-auto hidden sm:block text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B" }}
            >
              {active.tagline}
            </div>
          </header>

          {/* Split view */}
          <div className="flex-1 flex overflow-hidden">
            {/* Section content */}
            <div className="flex-1 overflow-y-auto min-w-0">
              <SectionView section={active} />
            </div>

            {/* Chat panel — desktop */}
            <div
              className="hidden lg:flex flex-col shrink-0 border-l"
              style={{ width: "380px", borderColor: "#1E1B4B" }}
            >
              <DonnaChat section={active} />
            </div>
          </div>

          {/* Chat panel — mobile */}
          <div
            className="lg:hidden border-t shrink-0"
            style={{ borderColor: "#1E1B4B", height: "42vh" }}
          >
            <DonnaChat section={active} />
          </div>
        </div>
      </div>
    </>
  );
}
