// Config-driven lead-magnet resource pages, rendered by
// ResourcePageClient. Each entry drives one /resources/<slug> page.
// Add a new resource by adding a new config here — no new component
// code needed unless the layout itself has to change.

export type ResourcePageConfig = {
  slug: string;

  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  heroHeadlineLines: string[];
  heroSubheading: string;
  heroSupportingLine: string;
  heroButtonLabel: string;

  insideEyebrow: string;
  insideHeadlineLine1: string;
  insideHeadlineLine2: string;
  insideParagraphs: string[];

  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  // Tailwind classes for the image's display size — the two resources
  // use very different image shapes (a portrait cover vs. a wide
  // diagram), so this isn't forced to match pixel-for-pixel.
  imageSectionMaxWidthClassName: string;
  imageDisplayClassName: string;

  signupLabel: string;
  signupHeadline: string;
  signupCopy: string;
  submitButtonLabel: string;
  successHeadline: string;
  successBody: string;

  locationFieldPlaceholder: string;

  // Extra fields merged into the /api/subscribe POST body. H2 sends an
  // explicit literal groupId (its existing, unchanged behaviour).
  // Newer resources send `list`, which the API resolves server-side
  // against an env var — keeping the real group ID out of the client
  // bundle.
  subscribeExtra: { groupId: string } | { list: string };
};

export const H2_RESOURCE: ResourcePageConfig = {
  slug: "h2",

  metaTitle: "Personal Mastery H2 Blueprint",
  metaDescription:
    "A free identity audit workbook for the second half of your year. 40 pages. 5 domains. One honest reckoning.",

  eyebrow: "Personal Mastery · H2 Blueprint",
  heroHeadlineLines: ["Most people spend Q3", "recovering from Q1."],
  heroSubheading: "This is the workbook that ends that cycle.",
  heroSupportingLine:
    "Forty pages. Five identity domains. One honest reckoning with the gap between who you planned to be and who you actually became.",
  heroButtonLabel: "Get the Blueprint — Free",

  insideEyebrow: "What's Inside",
  insideHeadlineLine1: "Identity audit before goal-setting.",
  insideHeadlineLine2: "Not another planner.",
  insideParagraphs: [
    "Before you set a single goal for the second half, you need to know who you're actually setting it for. The H2 Blueprint starts where every other productivity tool skips: your identity.",
    "Most people review their H1 results and set better H2 targets. This workbook asks the harder question: who were you becoming while you were chasing those targets?",
    "Because the version of you that didn't follow through on H1 is the same version who will write the H2 goals, unless something changes first. This workbook changes it first.",
  ],

  imageSrc: "/images/h2-blueprint-cover.png",
  imageAlt: "Personal Mastery H2 Blueprint — workbook cover",
  imageWidth: 600,
  imageHeight: 800,
  imageSectionMaxWidthClassName: "max-w-xs",
  imageDisplayClassName: "w-56 md:w-64 mx-auto",

  signupLabel: "Free Download",
  signupHeadline: "Get the H2 Blueprint",
  signupCopy: "Enter your details and the workbook lands in your inbox — ready to use today.",
  submitButtonLabel: "Send Me the Blueprint",
  successHeadline: "Check your email.",
  successBody: "Your download link is on its way.",

  locationFieldPlaceholder: "Where are you based? (e.g. Lagos, London)",

  subscribeExtra: { groupId: "bomwLz" },
};

export const EOYGS_RESOURCE: ResourcePageConfig = {
  slug: "eoygs",

  metaTitle: "The Straight Line Method | Goal Setting | Pelumi Olawole",
  metaDescription:
    "A free ten page goal-setting method. Draw one line from today to your deadline, mark every milestone, and fill in what each one takes.",

  eyebrow: "Goal Setting · The Straight Line Method",
  heroHeadlineLines: ["A goal in your head weighs more than a goal on a wall."],
  heroSubheading:
    "This is the one-hour method that turns the goal in your head into a line in front of your eyes.",
  heroSupportingLine: "Ten pages and seven steps. One honest hour with a pen and a wall.",
  heroButtonLabel: "Get the Method, Free",

  insideEyebrow: "What's Inside",
  insideHeadlineLine1: "Not another list of resolutions.",
  insideHeadlineLine2: "A route you can walk.",
  insideParagraphs: [
    "Most year-end planning stops at tasks. This starts with one line from today to your deadline, with every milestone on it. Under each milestone you write what it costs, what could stop it, who can help, and who you need to become to reach it. The goal stops being a weight you carry and becomes a route you walk.",
    "Inside: the seven steps to build your line, four boxes to fill for every milestone, how to tell the few actions that move you from the ones that only keep you busy, a 15 minute weekly review, and a worksheet to fill in.",
  ],

  imageSrc: "/images/eoygs-line-diagram.png",
  imageAlt: "The Straight Line Method — a line from today to your deadline, with every milestone marked on it",
  imageWidth: 1200,
  imageHeight: 327,
  imageSectionMaxWidthClassName: "max-w-2xl",
  imageDisplayClassName: "w-full mx-auto",

  signupLabel: "Free Download",
  signupHeadline: "Get The Straight Line Method",
  signupCopy:
    "Enter your details and the PDF lands in your inbox, ready to use today. A few short follow-up emails will help you put it to work.",
  submitButtonLabel: "Send Me the Method",
  successHeadline: "Check your email.",
  successBody: "Your download link is on its way.",

  locationFieldPlaceholder: "Where are you based? (e.g. Lagos, London)",

  subscribeExtra: { list: "eoygs" },
};
