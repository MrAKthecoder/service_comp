// A service-specific explanation of the proposed engagement, not fixed packages.
export const serviceProcess: Record<
  string,
  { discuss: string; create: string; deliver: string; result: string }
> = {
  websites: {
    discuss:
      "Choose a website, landing page or app. Agree pages, features and budget.",
    create: "Review the design, then try the working screens and enquiry flow.",
    deliver:
      "Check mobile and desktop together. Agree launch, handover and ongoing support.",
    result: "A website or app your customers can use.",
  },
  social: {
    discuss: "Choose your audience, social channels and posting schedule.",
    create:
      "Review a content calendar, post designs and captions before publishing.",
    deliver:
      "Publish approved content on the agreed channels and review activity together.",
    result: "A planned, consistent social presence.",
  },
  content: {
    discuss: "Choose the message, formats and where the content will appear.",
    create:
      "Review the ideas, then the first edits, designs or written drafts.",
    deliver:
      "Refine the agreed content and prepare the final files for your channels.",
    result: "Content ready for your next post or campaign.",
  },
  seo: {
    discuss:
      "Review your website, Google profile, services and target locations.",
    create:
      "Agree priorities, then improve the selected pages and business details.",
    deliver:
      "Review the completed work and visibility tracking. Plan the next improvements.",
    result: "Clearer pages and a more complete search presence.",
  },
  ads: {
    discuss:
      "Agree your offer, audience, enquiry route and separate advertising budget.",
    create: "Review the ads and landing page. Check tracking before launch.",
    deliver:
      "Launch approved campaigns and review enquiries, spend and next changes.",
    result: "A campaign with a clear path to enquiry.",
  },
  automation: {
    discuss: "Show us one repetitive task and the tools your team uses.",
    create:
      "Map the workflow, build the agreed connections and add approval points.",
    deliver:
      "Test real scenarios together, then hand over the workflow and usage guidance.",
    result: "A tested workflow with less manual repetition.",
  },
  reputation: {
    discuss:
      "Review your profiles, customer feedback and preferred tone of voice.",
    create:
      "Align business details and prepare a response approach for your review.",
    deliver:
      "Apply approved updates and agree how future feedback will be handled.",
    result: "A consistent presence and a clear response process.",
  },
  crm: {
    discuss:
      "Map where enquiries arrive, who handles them and your sales stages.",
    create:
      "Set up the agreed lead stages, contact records and follow-up reminders.",
    deliver:
      "Test an enquiry from start to finish and show your team how to use the setup.",
    result: "An organised enquiry and follow-up process.",
  },
  consulting: {
    discuss:
      "Talk through your goals, current challenges and available resources.",
    create:
      "Review your customer journey and identify the most useful priorities.",
    deliver:
      "Walk through an action plan with responsibilities and next steps. Scope implementation separately.",
    result: "A practical plan for your next business decisions.",
  },
};
