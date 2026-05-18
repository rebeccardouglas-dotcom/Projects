export type Framework = {
  title: string;
  subtitle: string;
  body: string;
  callout?: string;
};

export type Section = {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  description: string;
  frameworks: Framework[];
  tips: string[];
  donnaOpener: string;
};

export const sections: Section[] = [
  {
    id: "emotional-intelligence",
    label: "Emotional Intelligence",
    icon: "🧠",
    tagline: "Feel it. Name it. Lead through it.",
    description:
      "In a high-change environment, your EQ is your competitive advantage. While others react, you respond. Donna helps you build Agile EQ — the ability to read the room, regulate yourself, and still move forward.",
    frameworks: [
      {
        title: "The RULER Model",
        subtitle: "Recognizing · Understanding · Labeling · Expressing · Regulating",
        body: "Before your next high-stakes meeting, run the RULER check: What am I feeling right now? What triggered it? Can I name it precisely — not just 'stressed' but 'threatened by ambiguity'? Precision in naming an emotion cuts its power in half.",
        callout: "Donna says: 'Naming the emotion isn't weakness. It's the first act of leadership.'",
      },
      {
        title: "Agile EQ Check-In",
        subtitle: "Pre-meeting emotional calibration",
        body: "Thirty seconds before any meeting, ask yourself: Am I coming in as a reactor or a responder? One word that describes your emotional state. One breath. Then walk in. High-change organizations punish people who lead with their amygdala.",
        callout: "Donna says: 'Your team doesn't need you to be perfect. They need you to be regulated.'",
      },
      {
        title: "The Empathy Audit",
        subtitle: "Monthly self-assessment",
        body: "List the three people on your team you find hardest to work with. For each, write one sentence from their perspective — what are they fighting for? If you can't do it, that's data. That's where your empathy gap lives.",
        callout: "Donna says: 'You cannot lead people you don't understand. Full stop.'",
      },
    ],
    tips: [
      "Replace 'I feel like…' with 'I notice I am...' — it creates distance between you and the emotion.",
      "When tension rises in a meeting, be the one who says: 'Let's pause — what does the room need right now?'",
      "Log one emotional trigger per week. Patterns will emerge within 30 days.",
      "Don't chase psychological safety — build it by going first. Admit uncertainty before others do.",
    ],
    donnaOpener:
      "Let's talk EQ. And before you tell me you're fine — I want you to actually check. What's the emotional temperature in your world right now, on a scale of 1 to 10? And don't round up.",
  },
  {
    id: "communication",
    label: "Communication",
    icon: "💬",
    tagline: "Intent over instruction. Clarity over control.",
    description:
      "Communication in a high-change org is less about what you say and more about what gets remembered. Donna teaches you to lead with Commander's Intent — paint the finish line, then get out of the way.",
    frameworks: [
      {
        title: "Commander's Intent",
        subtitle: "The Sinek Approach to delegation",
        body: "Stop giving how-tos. Start giving to-what-ends. Instead of: 'Finish the report by Friday' try: 'This report is the shield that protects our team's budget for next year. Whatever format gets that story told clearly — I trust you.' Watch what happens to ownership.",
        callout: "Donna says: 'If you have to explain every step, you've already micromanaged the outcome.'",
      },
      {
        title: "Active Listening Loops",
        subtitle: "The 5-minute meeting close",
        body: "In the last 5 minutes of every meeting, do this: 'Here's what I heard. Here's what we're tabling. Here's who owns the next 5 seconds of action.' This eliminates the meeting-after-the-meeting and makes you the most trusted voice in the room.",
        callout: "Donna says: 'The person who summarizes the room runs the room.'",
      },
      {
        title: "The Status-Free Check-In",
        subtitle: "Presence without surveillance",
        body: "Replace 'Is it done yet?' with: 'What's the biggest boulder in your path right now that I can move?' or 'On a scale of 1-10, how much clarity do you have on where we're going?' You go from monitor to multiplier.",
        callout: "Donna says: 'Checking in to check up is management. Checking in to remove friction is leadership.'",
      },
    ],
    tips: [
      "Before sending any Slack message, ask: is this a reply or a decision? If it's a decision, pick up the phone.",
      "Use 'I want to make sure I understand' before reacting. It buys you 10 seconds and saves you 10 days.",
      "Write your key message in one sentence before every important conversation. If you can't, you're not ready.",
      "Silence in a meeting isn't agreement. Call it: 'I notice it's quiet. What aren't we saying?'",
    ],
    donnaOpener:
      "Communication is where most leaders bleed. So let's find your pressure point. Tell me about the last conversation you wished had gone differently — and don't skip the part where you could have shown up better.",
  },
  {
    id: "strategic-leadership",
    label: "Strategic Leadership",
    icon: "♟️",
    tagline: "Play the infinite game. Navigate every pivot.",
    description:
      "Your org changes direction constantly. That's not dysfunction — that's the terrain. Strategic leaders don't wait for stability. They build adaptability into every decision and help their teams find purpose in every pivot.",
    frameworks: [
      {
        title: "The Infinite Game",
        subtitle: "Simon Sinek's long-play philosophy",
        body: "Finite players play to win. Infinite players play to keep playing. When your org pivots again, ask: does this new direction serve our just cause? If yes, rally. If not, that's a harder conversation worth having. Stop keeping score of pivots — start keeping score of resilience.",
        callout: "Donna says: 'You don't need a stable org to be a stable leader. That's the whole point.'",
      },
      {
        title: "The Strategic Pivot Reframe",
        subtitle: "Change as a leadership stress test",
        body: "Every strategic pivot is a stress test of your leadership brand. After the announcement, your team watches you — not leadership. How you frame the change in the first 24 hours sets the emotional tone for weeks. Ask: 'What does this change make possible that wasn't possible before?'",
        callout: "Donna says: 'Your team doesn't need you to have all the answers. They need you to have a direction.'",
      },
      {
        title: "The 'Tuition Paid' Reframe",
        subtitle: "Future-focused failure analysis",
        body: "When something goes sideways, give yourself 60 seconds to vent — then ask: 'What is the tuition we just paid for this lesson?' Document it. Share it. Make the failure earn its keep. Lessons that aren't shared are just losses.",
        callout: "Donna says: 'You're not behind. You're just more educated than you were yesterday.'",
      },
    ],
    tips: [
      "After every strategic pivot, send your team a one-paragraph 'North Star note' — the why behind the what.",
      "In uncertainty, double down on rituals. Weekly check-ins, consistent 1:1s, and visible routines create the psychological stability your team needs.",
      "Ask 'What would we do if we knew we couldn't fail?' at least once per quarter. Write the answer down.",
      "Identify one lagging indicator and one leading indicator for every initiative. If you only track lagging, you're always driving by looking in the rearview mirror.",
    ],
    donnaOpener:
      "Strategic leadership in a constant-change environment isn't about having a plan — it's about having a posture. So tell me: when your org announced the last pivot, what was your first reaction? And more importantly — what did you do with it?",
  },
  {
    id: "conflict-resolution",
    label: "Conflict Resolution",
    icon: "⚡",
    tagline: "The hard conversation IS the leadership.",
    description:
      "Conflict avoided is conflict compounded. Donna will push you to lean into the friction — because that's where trust is either built or destroyed. Radical Candor isn't a framework, it's a discipline.",
    frameworks: [
      {
        title: "Radical Candor",
        subtitle: "Care personally. Challenge directly.",
        body: "Kim Scott's model in one sentence: you can disagree and still have someone's back. The goal isn't to be liked — it's to be trusted enough that people want your honest take. Before a hard conversation, ask: Am I doing this because I care about this person's growth, or because I'm frustrated? The answer changes everything.",
        callout: "Donna says: 'If you're avoiding the conversation to protect feelings, ask yourself: whose feelings — theirs or yours?'",
      },
      {
        title: "The Elephant-Naming Protocol",
        subtitle: "Calling it before it calls you",
        body: "In any tense team dynamic, be the one who names it first: 'I think there's something we haven't said out loud yet. I'll go first.' It takes courage, but it instantly shifts the energy from tension to relief. Elephants don't leave on their own — they just get heavier.",
        callout: "Donna says: 'The room knows. They're just waiting to see if you're brave enough to say it.'",
      },
      {
        title: "The 'What I Heard' Reset",
        subtitle: "De-escalation through reflection",
        body: "When conflict spikes, pause and reflect back before responding: 'What I heard is [X]. Is that right?' You will be wrong at least 40% of the time — and that discovery is exactly what breaks the conflict loop. Most conflict is a story two people are telling about each other, not a fact.",
        callout: "Donna says: 'You can't solve a problem you haven't accurately described. Reflect first.'",
      },
    ],
    tips: [
      "Schedule 'conflict debt' reviews quarterly. Name three tensions you've been avoiding and pick one to address this week.",
      "When someone on your team vents, resist the urge to fix. Ask: 'Do you want me to help solve this or just listen right now?'",
      "In a heated moment, use 'I notice' over 'you always': 'I notice I'm feeling dismissed in this conversation' vs. 'You never listen.'",
      "After resolving a conflict, do a 48-hour check-in. The first conversation ends the tension. The second one builds the trust.",
    ],
    donnaOpener:
      "Let's be honest — there's a conversation you've been putting off. I can feel it from here. What's the one thing you know you need to say but keep finding reasons not to? Let's start there.",
  },
  {
    id: "design-thinking",
    label: "Design Thinking",
    icon: "🔮",
    tagline: "Reframe the problem. Iterate on everything.",
    description:
      "Design Thinking isn't just for product teams. It's the leadership discipline of staying curious in the face of ambiguity. Donna uses it to help you turn organizational chaos into a prototype-and-learn muscle.",
    frameworks: [
      {
        title: "Empathy Mapping for Leaders",
        subtitle: "See through your team's eyes",
        body: "Before proposing any solution — to a team problem, a process gap, or a conflict — complete an empathy map: What does my team see? Hear? Think and feel? Do? Say? Where do they gain? Where do they experience pain? Solutions built on empathy are adopted. Solutions built on assumptions are resisted.",
        callout: "Donna says: 'The best leaders don't guess what their team needs. They design experiments to find out.'",
      },
      {
        title: "How Might We (HMW)",
        subtitle: "Turning problems into possibilities",
        body: "Swap 'We have a problem with X' for 'How might we improve X?' — the framing shift is subtle but seismic. HMW keeps the brain in possibility mode rather than blame mode. Run a 10-minute HMW sprint with your team on any stuck problem. You will surface ideas that never emerge in a standard meeting.",
        callout: "Donna says: 'The question is the intervention. Ask a better question, get a better result.'",
      },
      {
        title: "Prototype & Learn Loop",
        subtitle: "The 30-day leadership experiment",
        body: "Pick one leadership behavior you want to improve. Run it as a 30-day experiment. Define what success looks like in week 1. Collect feedback in week 2. Adjust in week 3. Reflect in week 4. The goal isn't perfection — it's iteration velocity. Leaders who learn faster win longer.",
        callout: "Donna says: 'Done is better than perfect. Shipped and iterated beats polished and shelved every time.'",
      },
    ],
    tips: [
      "Run a 'Pre-Mortem' before every major initiative: 'Imagine it's 6 months from now and this failed. What happened?' Then fix it now.",
      "When you hit a wall, try 'Worst Possible Idea' brainstorming — what's the worst thing we could do here? The opposite is often the breakthrough.",
      "Build a personal 'learning log' — one insight per week from something that went wrong. In a year, you'll have 52 lessons your competitors don't.",
      "Prototype your team structure, not just your products. 'Swarm sessions' — pulling cross-functional people for 2-hour problem sprints — often outperform months of planning.",
    ],
    donnaOpener:
      "Design Thinking is about being comfortable not knowing the answer yet. So here's my question: What's a problem in your org that everyone sees but nobody has actually defined correctly? Let's start by tearing up the problem statement.",
  },
];
