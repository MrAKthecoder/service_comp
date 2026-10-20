// Replace the working brand and contact details here when they are ready.
export const site = { name: "FORMA", email: "", whatsapp: "", bookingUrl: "" };
export const media = {
  hero: "/images/hero.png",
  coffee: "/images/coffee.png",
  craft: "/images/craft.png",
  architecture: "/images/architecture.png",
  campaign: "/images/campaign.png",
};
// Set a real video URL here later. Empty values show an honest interactive preview.
export const videos: Record<string, string> = {
  hero: "",
  websites: "",
  seo: "",
  ads: "",
  social: "",
  content: "",
  automation: "",
};
export type ServiceId =
  "websites" | "seo" | "ads" | "social" | "content" | "automation";
export interface Service {
  id: ServiceId;
  name: string;
  label: string;
  title: string;
  short: string;
  description: string;
  headline: string;
  benefit: string;
  image: string;
  deliverables: [string, string][];
  steps: [string, string][];
  needs: string[];
  engagement: string;
  faq: [string, string][];
}
export const services: Service[] = [
  {
    id: "websites",
    name: "Websites & landing pages",
    label: "Websites",
    title: "Websites that win trust.",
    short: "Clear pages. Easy enquiries.",
    description:
      "A professional home for your business, built around the people you want to reach.",
    headline: "Show what you do.\nMake it easy to enquire.",
    benefit:
      "A website that feels like your business—and gives customers a clear next step.",
    image: media.architecture,
    deliverables: [
      [
        "Your story, clearly told",
        "Thoughtful pages that explain what makes your business worth choosing.",
      ],
      [
        "Good on every screen",
        "A considered experience on phones, tablets and laptops.",
      ],
      [
        "A clear way to get in touch",
        "Enquiry forms and contact links, ready for your customers.",
      ],
    ],
    steps: [
      [
        "You share",
        "Your business details, photos and what you want to achieve.",
      ],
      [
        "We design & build",
        "Review the direction, share feedback and watch it come together.",
      ],
      [
        "We launch together",
        "We test the pages, connect your domain and show you around.",
      ],
    ],
    needs: [
      "Your logo and brand assets",
      "Business information and photos",
      "One person to review the work",
    ],
    engagement:
      "A fixed project scope. Pages, copywriting, revisions, hosting and maintenance are agreed before work begins.",
    faq: [
      [
        "Can you update my existing website?",
        "Yes. We review what you have and recommend an update or a rebuild based on your goals.",
      ],
      [
        "Will I be able to edit it?",
        "If you need to update content yourself, we include an editing system and handover in the agreed scope.",
      ],
    ],
  },
  {
    id: "seo",
    name: "SEO & local search",
    label: "SEO & search",
    title: "Be easier to find.",
    short: "Search & local visibility.",
    description:
      "Help customers discover your business when they search for the services you offer.",
    headline: "They’re looking.\nHelp them find you.",
    benefit:
      "Clearer website pages and accurate local listings help your business show up where it matters.",
    image: media.coffee,
    deliverables: [
      [
        "A healthier website",
        "Find and fix issues that make your site harder to discover.",
      ],
      [
        "The right words",
        "Useful pages built around what your customers are searching for.",
      ],
      [
        "A stronger local presence",
        "Accurate business information, service areas and local profiles.",
      ],
    ],
    steps: [
      [
        "Find the gaps",
        "We review your website, search presence and local listings.",
      ],
      [
        "Make improvements",
        "We fix technical issues and improve the pages that matter.",
      ],
      [
        "Review the progress",
        "Understand what changed and agree the next useful steps.",
      ],
    ],
    needs: [
      "Website and analytics access",
      "Your services and locations",
      "Accurate business profile details",
    ],
    engagement:
      "A scoped project or monthly plan. Search positions and enquiry volumes cannot be guaranteed.",
    faq: [
      [
        "What is SEO?",
        "Search engine optimisation means improving your website so search engines and customers can understand and find it.",
      ],
      [
        "How soon will I see results?",
        "Search improvements take time and depend on your website, competition and market. We agree a realistic review schedule rather than promise a ranking.",
      ],
    ],
  },
  {
    id: "ads",
    name: "Paid ads & lead generation",
    label: "Paid ads",
    title: "Reach the right people.",
    short: "Ads built around your offer.",
    description:
      "Put your offer in front of potential customers and give them an easy way to respond.",
    headline: "A little less scrolling.\nA lot more interest.",
    benefit:
      "A clear offer, considered creative and a focused enquiry journey—all working together.",
    image: media.campaign,
    deliverables: [
      [
        "An offer worth noticing",
        "Visuals and messaging that make the next step clear.",
      ],
      [
        "A focused destination",
        "A landing page built around one offer and one action.",
      ],
      [
        "A view of what works",
        "Track spend and enquiries, then improve the campaign.",
      ],
    ],
    steps: [
      ["Agree the audience", "Who are we reaching, and what are we offering?"],
      [
        "Create & launch",
        "We connect the ads, landing page and enquiry tracking.",
      ],
      [
        "Learn & improve",
        "We review enquiries and lead quality, then make adjustments.",
      ],
    ],
    needs: [
      "Your offer and audience",
      "Ad account access",
      "An advertising budget",
    ],
    engagement:
      "Usually a monthly engagement. Advertising spend is paid separately from our management fee. Creative and landing-page scope are agreed upfront.",
    faq: [
      [
        "Is ad spend included?",
        "No. Your advertising budget goes to the platforms and is separate from our service fee.",
      ],
      [
        "Can you guarantee enquiries?",
        "No. Results depend on your offer, market and budget. We focus on sound setup, useful tracking and ongoing improvements.",
      ],
    ],
  },
  {
    id: "social",
    name: "Social media management",
    label: "Social media",
    title: "Show up consistently.",
    short: "Social media, taken care of.",
    description:
      "A recognisable presence, a clear content plan and fewer last-minute posting decisions.",
    headline: "Your business.\nAlways worth a look.",
    benefit:
      "A feed that feels like you, with the planning and publishing taken care of.",
    image: media.coffee,
    deliverables: [
      ["A plan for the month", "Know what is going out and when."],
      [
        "A consistent look & voice",
        "Posts and captions that belong to the same brand.",
      ],
      [
        "Publishing, organised",
        "Review, approve and let us handle the schedule.",
      ],
    ],
    steps: [
      [
        "Find your voice",
        "We learn your brand, customers and content priorities.",
      ],
      [
        "Plan & create",
        "You review the calendar, visuals and captions together.",
      ],
      [
        "Publish & review",
        "Approved posts go out, and we learn from the response.",
      ],
    ],
    needs: [
      "Access to your profiles",
      "Brand assets and upcoming offers",
      "Timely content approvals",
    ],
    engagement:
      "A monthly plan with agreed post counts and channels. Comment replies, inbox management and filming have a separately defined scope.",
    faq: [
      [
        "Will I approve posts first?",
        "Yes. An agreed review process gives you visibility before content is published.",
      ],
      [
        "Is this different from content creation?",
        "Yes. Content creation produces the assets; management also covers planning, scheduling and the agreed ongoing channel work.",
      ],
    ],
  },
  {
    id: "content",
    name: "Content, reels & video",
    label: "Content & video",
    title: "Content worth watching.",
    short: "Reels, videos and creative.",
    description:
      "Turn your ideas, expertise and everyday work into content people want to stop for.",
    headline: "Good work deserves\nto be seen.",
    benefit:
      "Short videos, thoughtful visuals and a story that feels unmistakably yours.",
    image: media.craft,
    deliverables: [
      [
        "Ideas with a purpose",
        "Concepts and scripts built around your message.",
      ],
      [
        "Made for the format",
        "Reels, posts and edits designed for the right channels.",
      ],
      ["Ready to share", "Approved files delivered in the formats you need."],
    ],
    steps: [
      ["Shape the idea", "We agree the message, style and formats."],
      ["Bring it to life", "We design and edit your footage and brand assets."],
      [
        "Ready for your audience",
        "Review the work, approve it and receive your files.",
      ],
    ],
    needs: [
      "Your brand assets",
      "Source footage, unless filming is included",
      "Your message and reference examples",
    ],
    engagement:
      "One-off or recurring production. Filming, travel, formats, usage rights and revision rounds are agreed before production.",
    faq: [
      [
        "Do you handle filming?",
        "Filming can be scoped separately. We can also work with footage you provide.",
      ],
      [
        "Can I buy content without social management?",
        "Yes. You can use the finished assets with your own team or as part of a wider management plan.",
      ],
    ],
  },
  {
    id: "automation",
    name: "CRM & smart automation",
    label: "Smart follow-ups",
    title: "Keep every enquiry moving.",
    short: "Lead tracking & smart follow-ups.",
    description:
      "Give enquiries a home, notify the right person and keep the next step clear.",
    headline: "New enquiry?\nAlready on it.",
    benefit:
      "Less chasing between inboxes. More timely replies and better follow-through.",
    image: media.hero,
    deliverables: [
      [
        "One place for your leads",
        "See who enquired and what needs to happen next.",
      ],
      ["Your team, in the loop", "Route enquiries to the right person."],
      [
        "A timely next step",
        "Confirmations, reminders and helpful follow-ups.",
      ],
    ],
    steps: [
      ["Map the journey", "We see how you handle a new enquiry today."],
      [
        "Connect the steps",
        "Your forms, lead list and notifications work together.",
      ],
      [
        "Test & hand over",
        "We check the flow and show your team how to use it.",
      ],
    ],
    needs: [
      "Access to your existing tools",
      "Your current lead-handling process",
      "Approved messages and team roles",
    ],
    engagement:
      "A setup project with optional support. CRM means a shared system for managing customer enquiries. Software subscriptions and other tool fees are separate.",
    faq: [
      [
        "Will this replace our team?",
        "No. The system handles routine steps and helps a real person take over at the right moment.",
      ],
      [
        "Can you use our existing tools?",
        "We review what you use and confirm which connections are possible before defining the scope.",
      ],
    ],
  },
];
export const projects = [
  {
    id: "north-studio",
    title: "North Studio",
    category: "Website",
    image: media.architecture,
    service: "websites" as ServiceId,
    subtitle: "A considered home for beautiful spaces.",
    problem:
      "An architecture studio needs to turn interest in its work into a useful conversation.",
    solution:
      "A photo-led website, clear service pages and a simple enquiry journey.",
  },
  {
    id: "neighbourhood",
    title: "The Neighbourhood",
    category: "Social & content",
    image: media.coffee,
    service: "social" as ServiceId,
    subtitle: "A local favourite. A recognisable presence.",
    problem:
      "A café needs a consistent way to share its story without making every post from scratch.",
    solution:
      "A coordinated feed, a monthly content plan and short video concepts.",
  },
  {
    id: "daybreak",
    title: "Daybreak",
    category: "Paid campaign",
    image: media.campaign,
    service: "ads" as ServiceId,
    subtitle: "A fresh take on everyday.",
    problem:
      "A new product needs a clear offer and an easy way for customers to show interest.",
    solution:
      "A campaign concept connecting a product ad with a focused landing page.",
  },
];
export const generalFaq: [string, string][] = [
  [
    "Where should we start?",
    "Tell us what you want to improve. We’ll help choose the next useful step, then agree a clear scope.",
  ],
  [
    "Can I start with one service?",
    "Absolutely. Start with what you need now and connect other services when they make sense.",
  ],
  [
    "How much does it cost?",
    "Each engagement is scoped around the work involved. Final pricing is still to be confirmed; no fixed prices are advertised in this preview.",
  ],
  [
    "What happens after launch?",
    "You receive the agreed files, access and handover. Ongoing updates and support can be included in a separate plan.",
  ],
];
