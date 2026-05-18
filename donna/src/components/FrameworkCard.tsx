import { Card } from "@heroui/react";
import { type Framework } from "../data/coachingContent";

export default function FrameworkCard({ fw }: { fw: Framework }) {
  return (
    <Card.Root
      className="border transition-all duration-200 hover:scale-[1.01]"
      style={{ background: "#14142B", borderColor: "#1E1B4B" }}
    >
      <Card.Header className="pb-1 flex-col items-start gap-1">
        <h3 className="text-base font-semibold text-white">{fw.title}</h3>
        <p className="text-xs font-medium" style={{ color: "#F59E0B" }}>
          {fw.subtitle}
        </p>
      </Card.Header>
      <Card.Content className="pt-2 flex flex-col gap-3">
        <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
          {fw.body}
        </p>
        {fw.callout && (
          <div
            className="rounded-lg px-3 py-2 text-sm italic"
            style={{
              background: "rgba(124,58,237,0.12)",
              borderLeft: "3px solid #7C3AED",
              color: "#A78BFA",
            }}
          >
            {fw.callout}
          </div>
        )}
      </Card.Content>
    </Card.Root>
  );
}
