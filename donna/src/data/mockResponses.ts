export type MockQA = { question: string; answer: string };

export const mockResponses: Record<string, MockQA[]> = {
  "emotional-intelligence": [
    {
      question: "I feel overwhelmed by constant change at work.",
      answer:
        "Overwhelmed. Good — you named it. That's step one of RULER and most leaders skip it entirely. Now let's go deeper: is it the pace of change, or the fact that nobody told you *why* it's happening? Because those are two very different problems with very different solutions. Which one is it?",
    },
    {
      question: "How do I manage my emotions in high-pressure meetings?",
      answer:
        "Thirty seconds. That's all I'm asking you to take before your next high-stakes meeting. One word for your emotional state — not 'fine,' that's not an emotion. Then one deliberate breath. You don't need to be calm. You need to be regulated. There's a difference, and your team can tell.",
    },
    {
      question: "My team seems disengaged and I don't know why.",
      answer:
        "Here's a hypothesis: they don't feel seen. And I say that not to sting you but because it's almost always the answer, and it's fixable. Run the Empathy Audit — list the three people you find hardest to understand and write one sentence from their perspective. If you can't do it, you have your answer right there.",
    },
    {
      question: "How do I build psychological safety?",
      answer:
        "You go first. Every time. Admit that you don't have all the answers in your next team meeting. Say 'I got that wrong and here's what I learned.' Psychological safety isn't a policy you announce — it's a posture you model, repeatedly, until others believe it's safe to do the same. So when's your next meeting?",
    },
  ],
  communication: [
    {
      question: "How do I delegate without losing control?",
      answer:
        "Stop. I'm going to stop you there — because 'losing control' is the wrong frame. You're not losing control, you're distributing ownership. There's a critical difference. Try Commander's Intent: paint the finish line vividly, then step back. 'This deliverable protects our team's headcount for Q3.' Now they own it. Does that feel like losing control, or building trust?",
    },
    {
      question: "My team never gives me straight answers in meetings.",
      answer:
        "Then you're probably asking the wrong questions, or they don't feel safe answering them honestly yet. Try this in your next meeting: go last instead of first. Don't share your view until everyone else has. Then at the end, do the Active Listening Loop — 'Here's what I heard, here's what we're not saying, here's who owns the next action.' Watch the room shift.",
    },
    {
      question: "I give clear instructions but nothing gets done right.",
      answer:
        "What if the problem isn't clarity of instruction — but clarity of *purpose*? Tell me: when you last assigned something, did you explain what a win looked like, or did you explain how to execute it? People will figure out the how if they understand and believe in the why. Try it once and report back.",
    },
    {
      question: "How do I communicate change to my team?",
      answer:
        "In the first 24 hours after any change announcement, your team is watching you — not leadership. Your body language, your first words, your tone. Here's the script: acknowledge the uncertainty, anchor to the purpose, and give them one thing they can control. Then shut up and listen. You talk too much when you're anxious. We all do.",
    },
  ],
  "strategic-leadership": [
    {
      question: "How do I stay strategic when everything is constantly changing?",
      answer:
        "By stopping the search for stability and building adaptability instead. The Infinite Game isn't about having a perfect plan — it's about having an unshakeable sense of direction. Ask yourself: do your team members know your *just cause* — the reason behind the work that goes beyond the org chart? If not, that's your strategic priority this week.",
    },
    {
      question: "Leadership announced another pivot and morale is low.",
      answer:
        "That's a leadership stress test and you just got graded. Here's what I need you to do in the next 24 hours: send your team a one-paragraph 'North Star note.' What does this pivot make *possible* that wasn't possible before? You don't have to be excited — you have to be directional. Morale follows clarity. Always.",
    },
    {
      question: "I feel like I'm always reacting instead of leading.",
      answer:
        "Because you're playing a finite game in an infinite environment. You're measuring wins and losses instead of resilience and learning velocity. This week: identify one leading indicator — something that tells you where you're *going* — and one lagging indicator. If your entire dashboard is lagging metrics, you're driving by looking in the rearview mirror. Fix the dashboard first.",
    },
    {
      question: "Something went wrong on my team. How do I recover?",
      answer:
        "60 seconds. You get 60 seconds to feel it. Go. ...Done? Good. Now: what is the tuition you just paid for this lesson? Document it. Share it with your team. Make the failure earn its keep. A lesson not shared is just a loss. A lesson shared is a competitive advantage. Which one do you want this to be?",
    },
  ],
  "conflict-resolution": [
    {
      question: "I have a difficult conversation I keep avoiding.",
      answer:
        "Of course you do. We all have one. But here's what you need to know: the longer you wait, the heavier it gets and the harder it lands when it finally happens. Schedule the conversation for this week — not next week, not 'when the timing is right.' The timing is never right. Block 30 minutes, walk in, and start with: 'There's something I've been meaning to say and I want to get it right.' Then stop performing and start talking.",
    },
    {
      question: "Two people on my team don't get along and it's affecting everyone.",
      answer:
        "Name the elephant. Call it in your next team meeting before it calls you. 'I think there's a dynamic between us that we haven't addressed. I'll go first.' Most team conflict lives in the silence between people — not in the actual disagreement. The act of naming it reduces it by half. Are you willing to go first?",
    },
    {
      question: "How do I give critical feedback without damaging the relationship?",
      answer:
        "Radical Candor. Care personally, challenge directly — in that order. Before the conversation, ask yourself: am I doing this because I care about this person's growth, or because I'm frustrated? If it's frustration, wait. If it's care, proceed. Start with: 'I'm telling you this because I think you're capable of more.' Then say the thing. Don't wrap it in compliments. That's not kindness — it's confusion.",
    },
    {
      question: "Someone on my team keeps undermining me in meetings.",
      answer:
        "I'm going to stop you there — because before we talk about them, I want to talk about you. Have you addressed it directly with that person, or have you been hoping it would stop? Because passive hope is not a conflict resolution strategy. Schedule a 1:1 this week. Use 'I notice' language: 'I notice that when I propose something in meetings, the response pattern has been X. I want to understand what's driving that.' Go.",
    },
  ],
  "design-thinking": [
    {
      question: "My team keeps solving the wrong problems.",
      answer:
        "Yes — because you skipped the most important step. You defined the problem too fast. Try this: before your next solution session, spend the first 20 minutes on 'How Might We' reframing. Take the problem statement, rewrite it five different ways, and pick the one that opens the most doors. The question is the intervention. A bad question guarantees a mediocre solution.",
    },
    {
      question: "How do I get my team to be more innovative?",
      answer:
        "Stop rewarding polish and start rewarding speed of learning. Innovation doesn't come from brainstorms — it comes from a culture that treats failure as data. This week: celebrate one thing that failed fast and what you learned. Do it publicly. Your team takes its cues from what you recognize, not what you say.",
    },
    {
      question: "We keep planning but never executing.",
      answer:
        "Then you don't have an execution problem — you have a safety problem. People plan endlessly when they're afraid of what it means to launch and fail. Run a Pre-Mortem: 'Imagine it's six months from now and this initiative failed spectacularly. What happened?' Then fix those things. Now you have a plan worth launching.",
    },
    {
      question: "How do I approach a problem when I'm completely stuck?",
      answer:
        "Worst Possible Idea. I mean it. Get your team together and ask: 'What is the absolute worst thing we could do here?' List them. Laugh. Then look at the opposites — that's where your breakthrough usually lives. Stuck means your brain is in a rut. The only way out is a pattern interrupt, and absurdity is an excellent one.",
    },
  ],
};
