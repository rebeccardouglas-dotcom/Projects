import { useState, useRef, useEffect } from "react";
import { Button, Avatar, Chip } from "@heroui/react";
import { mockResponses, type MockQA } from "../data/mockResponses";

type Message = { role: "donna" | "user"; text: string };

const SUGGESTED_PROMPTS: Record<string, string[]> = {
  "emotional-intelligence": [
    "I feel overwhelmed by constant change at work.",
    "How do I manage my emotions in high-pressure meetings?",
    "My team seems disengaged and I don't know why.",
    "How do I build psychological safety?",
  ],
  communication: [
    "How do I delegate without losing control?",
    "My team never gives me straight answers in meetings.",
    "I give clear instructions but nothing gets done right.",
    "How do I communicate change to my team?",
  ],
  "strategic-leadership": [
    "How do I stay strategic when everything is constantly changing?",
    "Leadership announced another pivot and morale is low.",
    "I feel like I'm always reacting instead of leading.",
    "Something went wrong on my team. How do I recover?",
  ],
  "conflict-resolution": [
    "I have a difficult conversation I keep avoiding.",
    "Two people on my team don't get along and it's affecting everyone.",
    "How do I give critical feedback without damaging the relationship?",
    "Someone on my team keeps undermining me in meetings.",
  ],
  "design-thinking": [
    "My team keeps solving the wrong problems.",
    "How do I get my team to be more innovative?",
    "We keep planning but never executing.",
    "How do I approach a problem when I'm completely stuck?",
  ],
};

function findBestMatch(input: string, pool: MockQA[]): string {
  const lower = input.toLowerCase();
  const exact = pool.find((qa) => qa.question.toLowerCase() === lower);
  if (exact) return exact.answer;
  const scored = pool
    .map((qa) => {
      const words = lower.split(/\s+/);
      const matches = words.filter((w) => w.length > 3 && qa.question.toLowerCase().includes(w)).length;
      return { qa, score: matches };
    })
    .sort((a, b) => b.score - a.score);
  if (scored[0].score > 0) return scored[0].qa.answer;
  return "That's a question worth sitting with. Here's my challenge back to you: what do you already know about this situation that you haven't acted on yet? Because usually, you know more than you think. Start there.";
}

type Props = { sectionId: string; opener: string };

export default function DonnaChat({ sectionId, opener }: Props) {
  const [messages, setMessages] = useState<Message[]>([{ role: "donna", text: opener }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const suggestions = SUGGESTED_PROMPTS[sectionId] ?? [];

  useEffect(() => {
    setMessages([{ role: "donna", text: opener }]);
  }, [sectionId, opener]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function send(text: string) {
    if (!text.trim() || isTyping) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    const pool = mockResponses[sectionId] ?? [];
    const answer = findBestMatch(text, pool);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "donna", text: answer }]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  }

  const avatarStyle = { background: "linear-gradient(135deg, #7C3AED, #4F46E5)", flexShrink: 0 };

  return (
    <div className="flex flex-col h-full" style={{ background: "#0F0F23" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "#1E1B4B", background: "#080813" }}>
        <div className="relative">
          <Avatar.Root size="sm" style={avatarStyle}>
            <Avatar.Fallback style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>D</Avatar.Fallback>
          </Avatar.Root>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2" style={{ background: "#10B981", borderColor: "#080813" }} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-none">Donna</p>
          <p className="text-xs mt-0.5" style={{ color: "#7C3AED" }}>Executive Coach · Online</p>
        </div>
        <Chip size="sm" className="ml-auto" style={{ background: "#1E1B4B", color: "#A78BFA" }}>
          Mock Mode
        </Chip>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "donna" && (
              <Avatar.Root size="sm" className="mr-2 mt-1" style={avatarStyle}>
                <Avatar.Fallback style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>D</Avatar.Fallback>
              </Avatar.Root>
            )}
            <div className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.role === "donna" ? "chat-bubble-donna text-slate-200" : "chat-bubble-user text-slate-200"}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <Avatar.Root size="sm" style={avatarStyle}>
              <Avatar.Fallback style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>D</Avatar.Fallback>
            </Avatar.Root>
            <div className="chat-bubble-donna rounded-xl px-4 py-3">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#7C3AED", animationDelay: `${i * 150}ms` }} />
                ))}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <p className="text-xs mb-2" style={{ color: "#4B5563" }}>Try asking:</p>
          <div className="flex flex-col gap-1.5">
            {suggestions.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-left text-xs px-3 py-2 rounded-lg transition-colors"
                style={{ background: "#14142B", color: "#A78BFA", border: "1px solid #1E1B4B" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1E1B4B")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 px-4 py-3 border-t" style={{ borderColor: "#1E1B4B", background: "#080813" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Ask Donna something..."
          className="flex-1 rounded-lg px-3 py-2 text-sm outline-none transition-colors"
          style={{
            background: "#14142B",
            border: "1px solid #1E1B4B",
            color: "#F1F5F9",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#1E1B4B")}
        />
        <Button
          isIconOnly
          size="sm"
          isDisabled={!input.trim() || isTyping}
          onPress={() => send(input)}
          style={{ background: "#7C3AED", color: "white", minWidth: "36px", height: "36px" }}
        >
          ↑
        </Button>
      </div>
    </div>
  );
}
