export const serviceFilms: Record<
  string,
  {
    name: string;
    problem: string[];
    request: string[];
    status: string;
    work: string;
    outcome: string;
    result: string;
    steps: string[];
  }
> = {
  social: {
    name: "Social media",
    problem: ["So much to share.", "No time to post."],
    request: ["Can you manage", "my social pages?"],
    status: "LAST POST — WEEKS AGO",
    work: "A plan. Beautiful posts. A steady presence.",
    outcome: "His collection starts new conversations.",
    result: "“Is this pendant available?”",
    steps: ["Plan the month", "Create the posts", "Schedule & manage"],
  },
  content: {
    name: "Content, reels & video",
    problem: ["Every piece has a story.", "How do I show it?"],
    request: ["Can you bring my", "collection to life?"],
    status: "IDEAS WAITING TO BE MADE",
    work: "We turn the craft into a story worth watching.",
    outcome: "Customers see the care behind each piece.",
    result: "A story ready to share.",
    steps: ["Find the story", "Create & edit", "Review together"],
  },
  seo: {
    name: "Google & SEO",
    problem: ["They search nearby.", "Can they find my shop?"],
    request: ["Can you help people", "find my shop online?"],
    status: "HARD TO FIND ONLINE",
    work: "Clear business details. Stronger search foundations.",
    outcome: "From finding his shop to finding the way there.",
    result: "Directions to your shop.",
    steps: ["Review visibility", "Improve the profile", "Optimise the website"],
  },
  ads: {
    name: "Paid ads & leads",
    problem: ["A new collection.", "Who will see it?"],
    request: ["Can you help reach", "the right customers?"],
    status: "NEW COLLECTION · NO CAMPAIGN",
    work: "The right message, audience and enquiry route.",
    outcome: "An interested shopper asks to see the collection.",
    result: "New collection enquiry.",
    steps: ["Agree the audience", "Build the campaign", "Track & refine"],
  },
  automation: {
    name: "AI & automation",
    problem: ["Copy. Paste. Repeat.", "There goes my day."],
    request: ["Can you reduce", "my repetitive admin?"],
    status: "ADMIN STILL TO DO",
    work: "We connect the tasks that slow his day down.",
    outcome: "The routine moves along. He helps a customer.",
    result: "Saved. Assigned. Notified.",
    steps: ["Map the routine", "Connect the tools", "Test the workflow"],
  },
  reputation: {
    name: "Reputation & brand",
    problem: ["Happy customers.", "Unanswered reviews."],
    request: ["Can you help manage", "my online reputation?"],
    status: "REVIEWS NEED ATTENTION",
    work: "We help his business respond with care.",
    outcome: "A thoughtful reply makes the care visible.",
    result: "“Thank you for visiting us.”",
    steps: ["Review the profiles", "Agree your voice", "Monitor & respond"],
  },
  crm: {
    name: "CRM & follow-ups",
    problem: ["Messages everywhere.", "Who needs a reply?"],
    request: ["Can you organise", "my customer enquiries?"],
    status: "FOLLOW-UPS GETTING MISSED",
    work: "Every enquiry gets a place and a next step.",
    outcome: "A reminder becomes a booked conversation.",
    result: "Appointment confirmed.",
    steps: ["Gather enquiries", "Set the next step", "Keep following up"],
  },
  consulting: {
    name: "Growth consulting",
    problem: ["So many ideas.", "Where should I start?"],
    request: ["Can you help choose", "my next business step?"],
    status: "PLANS WITHOUT PRIORITIES",
    work: "We turn a long wish list into a practical plan.",
    outcome: "He knows what to do first, and what comes next.",
    result: "A clear plan to move forward.",
    steps: ["Understand the shop", "Choose priorities", "Agree an action plan"],
  },
};
