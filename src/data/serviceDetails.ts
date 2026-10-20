type Detail = {
  headline: string;
  intro: string;
  steps: [string, string, string];
  captions: [string, string, string];
  includes: [string, string][];
  needs: string[];
  question: string;
  answer: string;
};
export const serviceDetails: Record<string, Detail> = {
  websites: {
    headline: "A better home for your business.",
    intro:
      "Show what you do. Make it easy for customers to take the next step.",
    steps: ["Your business", "Your new space", "Ready to enquire"],
    captions: [
      "Start with your photos, services and goals.",
      "We turn them into a clear website or app design.",
      "Customers can explore and find a clear way to contact you.",
    ],
    includes: [
      ["Business websites", "Your services, story and contact details."],
      ["Landing pages", "A focused page for one offer or campaign."],
      ["Apps", "An app scoped around the tasks your users need."],
      ["Maintenance & SEO", "Updates and search foundations, as agreed."],
    ],
    needs: ["Your business details", "Photos & branding", "Your goals"],
    question: "Can you improve my existing website?",
    answer:
      "We’ll review its platform, content and condition first. Then we can discuss improvements or a rebuild, along with the scope and handover. Hosting, domains and ongoing maintenance are agreed separately.",
  },
  social: {
    headline: "Your business, consistently seen.",
    intro: "A clear content plan and a social presence that feels like you.",
    steps: ["Your story", "A content plan", "Ready to publish"],
    captions: [
      "We learn about your audience and what makes you different.",
      "Your ideas become an organised calendar of posts.",
      "Review the content before the agreed publishing schedule begins.",
    ],
    includes: [
      ["Channel planning", "Choose the platforms that fit your audience."],
      ["Creative posts", "On-brand visuals and captions."],
      ["Content calendar", "See what is coming and when."],
      ["Social management", "Instagram, Facebook, LinkedIn and YouTube."],
    ],
    needs: ["Your social links", "Brand photos", "Offers & updates"],
    question: "Do I need to be on every platform?",
    answer:
      "No. We’ll choose channels around your audience, priorities and available content. Post quantities, approval stages and management responsibilities will be defined in your scope.",
  },
  content: {
    headline: "Give your story a little motion.",
    intro: "Turn what you do into content people can understand at a glance.",
    steps: ["The raw material", "The creative edit", "Ready to share"],
    captions: [
      "Start with your product photos, footage or a simple brief.",
      "We shape the idea with visuals, editing and words.",
      "Review content prepared for the agreed channels.",
    ],
    includes: [
      ["Reels & videos", "Short stories built around your business."],
      ["Creative posts", "Visuals for your offers and updates."],
      ["Blogs & articles", "Useful writing for your customers."],
      ["Infographics", "Make complex information easier to see."],
    ],
    needs: ["Photos or footage", "Your key message", "Brand references"],
    question: "What if I don’t have footage?",
    answer:
      "Share what you have. We can discuss a format that fits the available material and identify any additional assets needed. Filming, asset licences and AI-assisted content should be agreed as part of the brief.",
  },
  seo: {
    headline: "Be there when people look.",
    intro: "Help customers find your business on Google, Search and Maps.",
    steps: ["Check your presence", "Make it clearer", "Help people find you"],
    captions: [
      "Review your website and Google Business Profile.",
      "Improve business details, pages and local relevance.",
      "Track visibility and the paths customers use to reach you.",
    ],
    includes: [
      [
        "Google Business Profile",
        "Accurate information and profile management.",
      ],
      ["Local SEO", "Your services and the areas you serve."],
      ["Website SEO", "Clear pages and search foundations."],
      ["Visibility reviews", "Check progress and identify next improvements."],
    ],
    needs: ["Website address", "Business location", "Profile access"],
    question: "Can you guarantee the top spot on Google?",
    answer:
      "No. Search positions depend on competition, relevance and many factors outside our control. We agree the work and tracking approach, then review progress over time. The preview is illustrative, not a ranking promise.",
  },
  ads: {
    headline: "Turn attention into a conversation.",
    intro:
      "Put a clear offer in front of the right people—and give them a next step.",
    steps: ["Choose your offer", "Launch a campaign", "Track enquiries"],
    captions: [
      "Agree the audience, offer and campaign budget.",
      "Create ads and connect them to a landing page or enquiry route.",
      "Review enquiries and performance to guide the next changes.",
    ],
    includes: [
      ["Google & Meta ads", "Campaigns scoped to your goals."],
      ["Landing pages", "A clear destination for interested visitors."],
      ["WhatsApp enquiries", "A direct route to start a conversation."],
      ["Tracking & reporting", "Understand where enquiries come from."],
    ],
    needs: ["Your offer", "Target area", "Campaign budget"],
    question: "Is advertising spend included?",
    answer:
      "Media spend and campaign management are separate costs. Your proposal should identify both, along with any landing-page or tracking work. Leads and sales are not guaranteed.",
  },
  automation: {
    headline: "Less repetition. More room to work.",
    intro: "Connect the routine steps that keep your business moving.",
    steps: ["Find the repeat work", "Connect the steps", "Test the workflow"],
    captions: [
      "Map a task your team does over and over.",
      "Define the trigger, action and points for human review.",
      "Test the workflow before using it in your business.",
    ],
    includes: [
      ["Workflow review", "Spot useful opportunities to save manual work."],
      ["Business automation", "Connect agreed steps and tools."],
      ["AI-assisted marketing", "Support content and marketing tasks."],
      ["Testing & handover", "Understand how to use the agreed workflow."],
    ],
    needs: ["A repetitive task", "Your current tools", "Your approval rules"],
    question: "Will this work with the tools I already use?",
    answer:
      "We’ll check what your tools support before proposing an integration. Access, subscriptions, data handling and human approvals are agreed before setup. Not every task needs AI or full automation.",
  },
  reputation: {
    headline: "Make every impression count.",
    intro:
      "A consistent brand and thoughtful responses help people understand your business.",
    steps: ["See the whole picture", "Respond with care", "Stay consistent"],
    captions: [
      "Review your public profiles and customer feedback.",
      "Prepare responses that reflect your business and tone.",
      "Keep agreed profiles and brand details aligned.",
    ],
    includes: [
      ["Review management", "Keep customer feedback in view."],
      ["Response guidance", "Thoughtful replies in your brand’s voice."],
      ["Profile consistency", "Align business information across profiles."],
      ["Brand presence", "A clear and recognisable online identity."],
    ],
    needs: ["Your public profiles", "Brand guidelines", "Response preferences"],
    question: "Can you remove negative reviews?",
    answer:
      "We cannot promise removal. We can discuss appropriate responses and reporting options where platform rules may have been broken. Reviews should reflect real customer experiences.",
  },
  crm: {
    headline: "Give every enquiry a next step.",
    intro:
      "Keep leads, conversations and follow-ups organised in one clear process.",
    steps: ["Capture an enquiry", "Keep it organised", "Follow up"],
    captions: [
      "Bring agreed enquiry sources into your customer workflow.",
      "Give each lead a stage and an owner.",
      "Set clear next actions so your team knows who to contact.",
    ],
    includes: [
      ["Lead organisation", "A clear view of new opportunities."],
      ["Conversation tracking", "Keep relevant customer context together."],
      ["Follow-up systems", "Define reminders and next actions."],
      ["Workflow setup", "A process that fits the way your team works."],
    ],
    needs: [
      "Your enquiry sources",
      "Current CRM or tools",
      "Your sales stages",
    ],
    question: "Do I need a new CRM?",
    answer:
      "Not necessarily. We can review your existing setup and requirements first. Tool selection, migration, integrations and any licence costs will be scoped before work starts.",
  },
  consulting: {
    headline: "Know what to work on next.",
    intro:
      "Turn a long list of possibilities into a clear set of business priorities.",
    steps: ["Understand today", "Find the priorities", "Plan your next move"],
    captions: [
      "Talk through your goals, challenges and current activity.",
      "Look at gaps and opportunities across your customer journey.",
      "Agree practical next actions around your resources.",
    ],
    includes: [
      ["Business review", "Understand your current starting point."],
      ["Opportunity mapping", "See where improvements may help."],
      ["Priority setting", "Focus on the next useful actions."],
      ["Action planning", "Connect priorities to practical next steps."],
    ],
    needs: ["Your goals", "Current challenges", "Available resources"],
    question: "Does the plan include implementation?",
    answer:
      "Consulting and implementation can be scoped separately. We’ll clarify which deliverables you receive, what your team will handle and which services you may want help with next.",
  },
};
