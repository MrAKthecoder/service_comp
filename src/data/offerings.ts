// Confirmed services from the two business-service sheets supplied by the owner.
// Service page content is maintained in serviceDetails.ts.
export const offerings = [
  {
    id: "social",
    name: "Social media management",
    title: "We keep you posting.",
    summary:
      "Instagram, Facebook, LinkedIn and YouTube. Planned, created and managed.",
    scope: "Social media",
  },
  {
    id: "content",
    name: "Content, reels & video",
    title: "We bring your story to life.",
    summary:
      "Reels, videos, creative posts, blogs and articles made for your business.",
    scope: "Content & video",
  },
  {
    id: "websites",
    name: "Website & app development",
    title: "We build your online home.",
    summary:
      "Business websites, apps and landing pages, with ongoing website maintenance.",
    scope: "Websites & apps",
  },
  {
    id: "seo",
    name: "Google Business Profile & SEO",
    title: "We help you get found.",
    summary:
      "Google Business Profile, local SEO and website SEO. Be easier to discover.",
    scope: "Google & SEO",
  },
  {
    id: "ads",
    name: "Paid ads & lead generation",
    title: "We bring your offer to people.",
    summary:
      "Google and Meta ads, landing pages and WhatsApp enquiries. Tracked and reported.",
    scope: "Ads & enquiries",
  },
  {
    id: "automation",
    name: "AI & business automation",
    title: "We simplify the everyday.",
    summary:
      "AI-assisted marketing and business workflows that cut down repetitive work.",
    scope: "AI & automation",
  },
  {
    id: "reputation",
    name: "Reputation & brand management",
    title: "We look after your reputation.",
    summary:
      "Review management and a consistent brand presence across your online profiles.",
    scope: "Reputation",
  },
  {
    id: "crm",
    name: "CRM & customer follow-ups",
    title: "We keep enquiries moving.",
    summary:
      "Organise your leads, track conversations and follow up with customers.",
    scope: "CRM & follow-ups",
  },
  {
    id: "consulting",
    name: "Business growth consulting",
    title: "We plan your next step.",
    summary:
      "A clear look at your business, your opportunities and where to focus next.",
    scope: "Growth consulting",
  },
] as const;
