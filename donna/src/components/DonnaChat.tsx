import { useState, useRef, useEffect, useCallback } from "react";
import { Button, Avatar, Chip } from "@heroui/react";
import Anthropic from "@anthropic-ai/sdk";
import { type Section } from "../data/coachingContent";

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

const DONNA_SYSTEM = `You are Donna — a sharp, empathetic executive coach with the emotional intelligence of Simon Sinek and the fire of Tony Robbins. You have zero tolerance for playing small.

Your coaching philosophy:
- Lead with empathy, follow with accountability
- Ask the question behind the question
- Challenge assumptions without dismissing feelings
- Short answers are powerful. Long answers are lazy.
- You don't coddle. You calibrate.

Your style:
- Direct, witty, slightly provocative
- You call things out. You don't moralize.
- You ask hard questions that make people think
- You use frameworks as tools, not scripts
- 2-4 sentences per response max unless depth is genuinely warranted

You are NOT a therapist. You are a thinking partner for leaders who want to get better, faster.`;

function buildSystemPrompt(section: Section): string {
  return `${DONNA_SYSTEM}

Current coaching context: ${section.label} — ${section.tagline}
${section.description}

Relevant frameworks for this session: ${section.frameworks.map((f) => f.title).join(", ")}.
Keep responses grounded in this domain but follow the leader's lead.`;
}

// dangerouslyAllowBrowser is intentional for this prototype — move key to a proxy for production
const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY ?? "",
  dangerouslyAllowBrowser: true,
});

type Props = { section: Section };

export default function DonnaChat({ section }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "donna", text: section.donnaOpener },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const suggestions = SUGGESTED_PROMPTS[section.id] ?? [];

  useEffect(() => {
    abortRef.current?.abort();
    setMessages([{ role: "donna", text: section.donnaOpener }]);
    setInput("");
    setIsStreaming(false);
    setStreamingText("");
  }, [section.id, section.donnaOpener]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const send = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;

      const userMessage: Message = { role: "user", text };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsStreaming(true);
      setStreamingText("");

      const history = [...messages, userMessage];
      const apiMessages = history
        .filter((m) => m.role !== "donna" || m !== history[0])
        .map((m) => ({
          role: m.role === "donna" ? ("assistant" as const) : ("user" as const),
          content: m.text,
        }));

      const abort = new AbortController();
      abortRef.current = abort;

      try {
        let accumulated = "";
        const stream = client.messages.stream(
          {
            model: "claude-opus-4-7",
            max_tokens: 512,
            thinking: { type: "adaptive" },
            system: buildSystemPrompt(section),
            messages: apiMessages,
          },
          { signal: abort.signal }
        );

        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            accumulated += event.delta.text;
            setStreamingText(accumulated);
          }
        }

        setMessages((prev) => [...prev, { role: "donna", text: accumulated }]);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setMessages((prev) => [
            ...prev,
            {
              role: "donna",
              text: "Something went sideways on my end. Try again — I'm not going anywhere.",
            },
          ]);
        }
      } finally {
        setIsStreaming(false);
        setStreamingText("");
        abortRef.current = null;
      }
    },
    [messages, isStreaming, section]
  );

  const avatarStyle = {
    background: "linear-gradient(135deg, #7C3AED, #4F46E5)",
    flexShrink: 0,
  };

  return (
    <div className="flex flex-col h-full" style={{ background: "#0F0F23" }}>
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{ borderColor: "#1E1B4B", background: "#080813" }}
      >
        <div className="relative">
          <Avatar.Root size="sm" style={avatarStyle}>
            <Avatar.Fallback style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>
              D
            </Avatar.Fallback>
          </Avatar.Root>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
            style={{ background: "#10B981", borderColor: "#080813" }}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-none">Donna</p>
          <p className="text-xs mt-0.5" style={{ color: "#7C3AED" }}>
            Executive Coach · Online
          </p>
        </div>
        <Chip
          size="sm"
          className="ml-auto"
          style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}
        >
          Live
        </Chip>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "donna" && (
              <Avatar.Root size="sm" className="mr-2 mt-1" style={avatarStyle}>
                <Avatar.Fallback
                  style={{ color: "white", fontSize: "12px", fontWeight: 600 }}
                >
                  D
                </Avatar.Fallback>
              </Avatar.Root>
            )}
            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "donna"
                  ? "chat-bubble-donna text-slate-200"
                  : "chat-bubble-user text-slate-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Streaming bubble */}
        {isStreaming && (
          <div className="flex justify-start">
            <Avatar.Root size="sm" className="mr-2 mt-1" style={avatarStyle}>
              <Avatar.Fallback
                style={{ color: "white", fontSize: "12px", fontWeight: 600 }}
              >
                D
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="chat-bubble-donna rounded-xl px-4 py-3 text-sm leading-relaxed max-w-[85%] text-slate-200">
              {streamingText || (
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: "#7C3AED", animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </span>
              )}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 2 && !isStreaming && (
        <div className="px-4 pb-2">
          <p className="text-xs mb-2" style={{ color: "#4B5563" }}>
            Try asking:
          </p>
          <div className="flex flex-col gap-1.5">
            {suggestions.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-left text-xs px-3 py-2 rounded-lg transition-colors"
                style={{
                  background: "#14142B",
                  color: "#A78BFA",
                  border: "1px solid #1E1B4B",
                }}
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
      <div
        className="flex gap-2 px-4 py-3 border-t"
        style={{ borderColor: "#1E1B4B", background: "#080813" }}
      >
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
          isDisabled={!input.trim() || isStreaming}
          onPress={() => send(input)}
          style={{
            background: "#7C3AED",
            color: "white",
            minWidth: "36px",
            height: "36px",
          }}
        >
          ↑
        </Button>
      </div>
    </div>
  );
}
