export type JobPosting = {
  slug: string;
  title: string;
  oneLiner: string;
  glance: { label: string; value: string }[];
  intro: string[];
  responsibilities: { group: string; items: string[] }[];
  howWeWork: string[];
  whoWereLookingFor: string[];
  compensation: string;
  applyEmail: { to: string[]; subjectTemplate: string; bodyTemplate: string };
  active: boolean;
};

export const JOBS: JobPosting[] = [
  {
    slug: "social-media-content-assistant",
    title: "Social Media & Content Assistant",
    oneLiner:
      "Help run the content behind The Forge System and Petty Little Things — part-time, remote, Nigeria-based.",
    glance: [
      { label: "Hours", value: "4–5 hrs/day" },
      { label: "Type", value: "3-month paid trial" },
      { label: "Location", value: "Nigeria (remote)" },
      { label: "Start", value: "Rolling" },
    ],
    intro: [
      "I'm Pelumi Olawole — author of Petty Little Things and creator of The Forge System. I'm building the content and social presence behind this work, and I need someone reliable to run the day-to-day of it with me.",
      "This isn't a big agency role. It's a small, real position inside something being built with care, from the ground up — and if it goes well, there's real room to grow with it.",
    ],
    responsibilities: [
      {
        group: "Content & editing",
        items: [
          "Edit raw footage I record into ready-to-post short-form content",
          "Prepare and schedule posts across LinkedIn and Instagram (our primary platforms), plus Facebook, X, and TikTok (secondary)",
        ],
      },
      {
        group: "Community & growth",
        items: [
          "Handle day-to-day comments and engagement on our pages",
          "Spend time engaging thoughtfully on relevant pages and posts elsewhere, to help draw the right audience back to ours",
          "Flag anything that looks like a real inquiry — a coaching lead, a corporate question — to me, the same day. You don't need to close it. Just catch it and pass it on.",
        ],
      },
      {
        group: "Reporting",
        items: [
          "A short weekly report: what went out, what worked, how follower count and engagement moved",
        ],
      },
    ],
    howWeWork: [
      "You'll get raw footage, brand voice notes, and a content plan to work from — you're not starting from a blank page",
      "LinkedIn carries a more professional register, for our corporate audience. Instagram, Facebook, X, and TikTok carry a warmer, more personal one. I'll walk you through both.",
      "For the first few weeks, everything gets a quick sign-off from me before it posts, while we build trust in each other's judgment. That loosens as it's earned.",
      "Account access is shared through a password manager, not over chat — clean, secure, and easy to hand back if things don't work out.",
    ],
    whoWereLookingFor: [
      "Someone who's actually made and managed content before — your own page, a past small project, examples you can show. You don't need years of formal agency experience, but I want to see real work, not just a promise.",
      "Comfortable with an editing tool (CapCut, Canva, or similar) and post-scheduling tools",
      "Reliable and communicative — if something isn't working, I need to hear it early, not find out later",
      "Based in Nigeria",
    ],
    compensation: "Paid monthly. Discussed directly with shortlisted candidates.",
    applyEmail: {
      to: ["coach@pelumiolawole.com", "olawolepelumisunday@gmail.com"],
      subjectTemplate: "Social Media Role — [Your Name]",
      bodyTemplate:
        "Hi Pelumi,\n\nI'm applying for the Social Media & Content Assistant role.\n\nHere are 2–3 examples of content I've made or managed (paste links, or note what you'll attach separately):\n1. \n2. \n3. \n\nWhy this role interests me:\n\n\nMy experience with editing tools (CapCut, Canva, etc.) and scheduling tools:\n\n\nThanks,\n[Your Name]",
    },
    active: true,
  },
];
