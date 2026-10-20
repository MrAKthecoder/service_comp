import {
  Background,
  Character,
  Necklace,
  PhoneScene,
  Store,
} from "./WebsiteFilmArtwork";

function WebsitePreview({ live = false }: { live?: boolean }) {
  return (
    <g>
      <rect width="550" height="323" rx="18" fill="#fffaf0" />
      <path d="M0 43h550" stroke="#d5ddca" />
      <circle cx="22" cy="22" r="4" fill="#8fa085" />
      <text x="43" y="28" fontSize="13">
        your-shop.example
      </text>
      <text x="28" y="85" fontSize="21">
        THE JEWELLERY STUDIO
      </text>
      <rect x="26" y="110" width="214" height="180" rx="12" fill="#ddd0ad" />
      <path d="M61 271l19-104q57-39 106 0l25 104Z" fill="#3c624a" />
      <g transform="translate(136 198) scale(.66)">
        <Necklace />
      </g>
      <text x="266" y="156" fontSize="29" fontFamily="Georgia,serif">
        Made with care.
      </text>
      <text x="267" y="193" fontSize="17">
        Find your next favourite.
      </text>
      <rect x="266" y="224" width="245" height="43" rx="21" fill="#365e44" />
      <text x="287" y="252" className="wa-white" fontSize="18">
        {live ? "Explore the collection →" : "Preview for your review"}
      </text>
    </g>
  );
}

function SocialPreview() {
  return (
    <g>
      <rect width="194" height="269" rx="17" fill="#faf5e8" />
      <circle cx="23" cy="23" r="8" fill="#7d996b" />
      <text x="40" y="29" fontSize="14">
        Your shop
      </text>
      <rect x="12" y="48" width="170" height="157" rx="9" fill="#c5d1b9" />
      <g transform="translate(97 117) scale(.6)">
        <Necklace emerald />
      </g>
      <text x="18" y="232" fontSize="17">
        Small details.
      </text>
      <text x="18" y="252" fontSize="17">
        A story worth sharing.
      </text>
    </g>
  );
}

function ServiceChoices() {
  const cards = [
    ["Website & apps", "A home for your business."],
    ["Marketing & SEO", "Help people find you."],
    ["Content & social", "Give your business a voice."],
    ["CRM & automation", "Keep the next step organised."],
  ];
  return (
    <>
      <Background />
      <g transform="translate(598 432) scale(.64)">
        <Character phone />
      </g>
      {cards.map(([title, copy], i) => (
        <g
          key={title}
          transform={`translate(${i % 2 === 0 ? 70 : 740} ${i < 2 ? 72 : 343})`}
        >
          <g className="pf-card-in" style={{ animationDelay: `${i * 0.25}s` }}>
            <rect width="390" height="208" rx="22" fill="#fbf8ec" />
            <rect x="25" y="24" width="66" height="57" rx="13" fill="#dce7d1" />
            {i === 0 ? (
              <g stroke="#446446" fill="none" strokeWidth="2.5">
                <rect x="36" y="36" width="44" height="32" rx="4" />
                <path d="M36 44h44m-37 8h18m-18 8h28" />
              </g>
            ) : i === 1 ? (
              <g stroke="#446446" fill="none" strokeWidth="3">
                <circle cx="54" cy="48" r="12" />
                <path d="M64 58l13 13m-32-25h18" />
              </g>
            ) : i === 2 ? (
              <g>
                <rect
                  x="40"
                  y="33"
                  width="36"
                  height="40"
                  rx="6"
                  fill="#6e8e60"
                />
                <path d="M50 43l15 10-15 10Z" fill="#f7f0d9" />
              </g>
            ) : (
              <g stroke="#446446" strokeWidth="2" fill="#9eb68c">
                <rect x="35" y="35" width="17" height="16" rx="3" />
                <rect x="63" y="56" width="17" height="16" rx="3" />
                <path d="M52 43h17v13" fill="none" />
              </g>
            )}
            <text x="26" y="124" fontSize="27">
              {title}
            </text>
            <text x="26" y="162" fontSize="20">
              {copy}
            </text>
          </g>
        </g>
      ))}
    </>
  );
}

export function ProcessFilmArtwork({
  shot,
  description,
}: {
  shot: number;
  description: string;
}) {
  return (
    <svg
      className="wa-artwork"
      viewBox="0 0 1200 660"
      role="img"
      aria-label={description}
    >
      <g key={shot} className="wa-scene">
        {shot === 0 ? (
          <Store
            problem={["A shop full of ideas.", "Where do I start?"]}
            status="READY FOR A NEW CHAPTER"
          />
        ) : shot === 1 ? (
          <PhoneScene
            chat
            request={["I need help with", "my business online."]}
          />
        ) : shot === 2 ? (
          <ServiceChoices />
        ) : shot === 3 ? (
          <>
            <Background />
            <g transform="translate(190 384) scale(.77)">
              <Character />
            </g>
            <g transform="translate(1007 384) scale(.77)">
              <Character team />
            </g>
            <g className="pf-card-in">
              <rect
                x="340"
                y="72"
                width="520"
                height="478"
                rx="23"
                fill="#fcf8eb"
              />
              <text x="377" y="127" fontSize="15">
                YOUR PLAN · AGREED TOGETHER
              </text>
              <text x="377" y="179" fontSize="34">
                No guesswork.
              </text>
              {[
                "What we’ll deliver",
                "The price",
                "The timeline",
                "When you’ll review",
              ].map((t, i) => (
                <g
                  key={t}
                  className="pf-card-in"
                  style={{ animationDelay: `${i * 0.45}s` }}
                >
                  <path d={`M377 ${220 + i * 62}h442`} stroke="#d7ddcd" />
                  <circle cx="396" cy={247 + i * 62} r="13" fill="#d9e7ce" />
                  <path
                    d={`M390 ${247 + i * 62}l5 5 8-11`}
                    fill="none"
                    stroke="#507344"
                    strokeWidth="2"
                  />
                  <text x="425" y={254 + i * 62} fontSize="24">
                    {t}
                  </text>
                </g>
              ))}
            </g>
            <path d="M236 559h725" stroke="#a0b192" strokeWidth="4" />
          </>
        ) : (
          <>
            <Background dark={shot === 5} />
            <g transform="translate(78 105)">
              <g className="wa-laptop-close">
                <WebsitePreview live={shot === 5} />
              </g>
            </g>
            <g transform="translate(651 151)">
              <g className="pf-card-in">
                <SocialPreview />
              </g>
            </g>
            <g transform="translate(1032 370) scale(.73)">
              <Character team thumbs={shot === 5} />
            </g>
            <g className="wa-welcome">
              <rect
                x="891"
                y="115"
                width="260"
                height="105"
                rx="22"
                fill="#f1e8d0"
              />
              <path d="M996 220l15 19 12-19" fill="#f1e8d0" />
              <text x="1021" y="157" textAnchor="middle" fontSize="23">
                {shot === 5 ? "We’re here for you." : "What do you think?"}
              </text>
              <text x="1021" y="192" textAnchor="middle" fontSize="18">
                {shot === 5
                  ? "Ready for your next chapter."
                  : "Your feedback shapes it."}
              </text>
            </g>
            <g className="pf-card-in">
              <rect
                x="97"
                y="473"
                width="740"
                height="88"
                rx="19"
                fill={shot === 5 ? "#e1e8d3" : "#e6ddc7"}
              />
              <circle cx="142" cy="517" r="23" fill="#688959" />
              <path
                d="M130 517l9 10 17-22"
                stroke="#fff5dc"
                strokeWidth="3"
                fill="none"
              />
              <text x="180" y="510" fontSize="24">
                {shot === 5
                  ? "Approved. Live. Ready for customers."
                  : "“Looks great — let’s refine the details.”"}
              </text>
              <text x="180" y="540" fontSize="19">
                {shot === 5
                  ? "Handover + ongoing support, as agreed."
                  : "Previews → Feedback → Final approval"}
              </text>
            </g>
          </>
        )}
      </g>
    </svg>
  );
}
