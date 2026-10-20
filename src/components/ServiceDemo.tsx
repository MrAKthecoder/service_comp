import { useEffect, useRef } from "react";

const captions: Record<string, string[]> = {
  social: ["Plan your posts", "Ready to publish", "Show up consistently"],
  content: ["Shape the story", "Add the finishing touches", "Ready to share"],
  websites: [
    "Build your website",
    "Made for every screen",
    "Ready for your customers",
  ],
  seo: [
    "Customers search",
    "Your business appears",
    "Make it easy to find you",
  ],
  ads: [
    "Launch your campaign",
    "Start a conversation",
    "Turn interest into enquiries",
  ],
  automation: [
    "A new request arrives",
    "Your workflow takes over",
    "Every step connected",
  ],
  reputation: [
    "A customer shares a review",
    "Respond with care",
    "Build lasting trust",
  ],
  crm: [
    "Capture the enquiry",
    "Keep the conversation moving",
    "Follow up at the right time",
  ],
  consulting: [
    "Understand your business",
    "Find the opportunities",
    "Plan your next move",
  ],
};
function WindowFrame() {
  return (
    <>
      <rect
        className="demo-panel"
        x="39"
        y="26"
        width="282"
        height="174"
        rx="13"
      />
      <path className="demo-line" d="M39 50h282" />
      <circle className="demo-dot" cx="53" cy="38" r="2" />
      <circle className="demo-dot" cx="62" cy="38" r="2" />
      <circle className="demo-dot" cx="71" cy="38" r="2" />
    </>
  );
}
function Tick({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="13" className="demo-green" />
      <path d="m-5 0 3 3 7-7" stroke="#fff" strokeWidth="2" fill="none" />
    </g>
  );
}
function Photo({
  x,
  y,
  w = 62,
  h = 64,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="5" className="demo-sage" />
      <circle cx={w * 0.7} cy={h * 0.28} r={w * 0.12} fill="#faf5df" />
      <path
        d={`M0 ${h}V${h * 0.75}L${w * 0.35} ${h * 0.4}L${w * 0.65} ${h * 0.8}L${w} ${h * 0.55}V${h}Z`}
        fill="#78917a"
      />
    </g>
  );
}
export function ServiceDemo({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !matchMedia("(hover: none)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.dataset.playing = String(entry.isIntersecting);
      },
      { threshold: 0.8 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`service-demo demo-${id}`} aria-hidden="true">
      <svg viewBox="0 0 360 250" fill="none">
        <circle className="demo-halo" cx="180" cy="112" r="83" />
        {id === "social" && (
          <>
            <WindowFrame />
            <text className="demo-text" x="55" y="70">
              YOUR CONTENT PLAN
            </text>
            {[0, 1, 2].map((i) => (
              <g className={`motion post post-${i}`} key={i}>
                <rect
                  className="demo-panel"
                  x={57 + i * 83}
                  y="83"
                  width="73"
                  height="98"
                  rx="7"
                />
                <Photo x={62 + i * 83} y={89} w={63} h={52} />
                <path
                  className="demo-line"
                  d={`M${63 + i * 83} 153h49m-49 9h30`}
                />
              </g>
            ))}
            <g className="motion success">
              <rect
                className="demo-dark"
                x="115"
                y="171"
                width="135"
                height="32"
                rx="16"
              />
              <text className="demo-white" x="147" y="191">
                Posts published
              </text>
              <Tick x={131} y={187} />
            </g>
          </>
        )}
        {id === "content" && (
          <>
            <WindowFrame />
            <g className="motion film">
              <Photo x={58} y={62} w={112} h={90} />
              <Photo x={176} y={62} w={125} h={90} />
            </g>
            <g className="motion subtitle">
              <rect
                className="demo-dark"
                x="102"
                y="114"
                width="156"
                height="25"
                rx="5"
              />
              <text className="demo-white" x="117" y="131">
                Your story. Beautifully told.
              </text>
            </g>
            <g className="motion timeline">
              <rect
                className="demo-sage"
                x="58"
                y="164"
                width=" 60"
                height="14"
                rx="3"
              />
              <path
                className="demo-wave"
                d="M65 174v-7m7 10v-13m7 9v-5m7 10v-15m7 11v-9m7 11v-13m7 9v-4m7 10v-16m7 13v-9m7 9v-7m7 11v-17m7 15v-10m7 6v-4m7 8v-11m7 10v-7"
              />
            </g>
            <path
              className="motion playhead"
              d="M60 158v28"
              stroke="#27bc68"
              strokeWidth="3"
            />
            <g className="motion success">
              <Tick x={301} y={70} />
            </g>
          </>
        )}
        {id === "websites" && (
          <>
            <g className="motion desktop">
              <WindowFrame />
              <g className="motion build-one">
                <text className="demo-title" x="57" y="94">
                  Your business.
                </text>
                <text className="demo-title" x="57" y="114">
                  Your space.
                </text>
                <path className="demo-line" d="M58 128h102m-102 8h76" />
                <rect
                  className="demo-green"
                  x="58"
                  y="149"
                  width=" 70"
                  height="19"
                  rx="9"
                />
              </g>
              <g className="motion build-two">
                <Photo x={188} y={65} w={115} h={103} />
              </g>
              <path className="motion build-three demo-line" d="M58 183h 60" />
            </g>
            <g className="motion phone">
              <rect
                className="demo-dark"
                x="252"
                y="90"
                width="67"
                height="119"
                rx="11"
              />
              <rect
                x="257"
                y="97"
                width="57"
                height="103"
                rx="6"
                fill="#fffdf8"
              />
              <Photo x={262} y={109} w={47} h={46} />
              <path className="demo-line" d="M263 167h42m-42 9h30" />
              <rect
                className="demo-green"
                x="263"
                y="184"
                width="31"
                height="7"
                rx="3"
              />
            </g>
          </>
        )}
        {id === "seo" && (
          <>
            <rect
              className="demo-panel"
              x="40"
              y="37"
              width="280"
              height="39"
              rx="19"
            />
            <circle className="demo-line" cx=" 60" cy="55" r="6" />
            <path className="demo-line" d="m65 60 5 5" />
            <g className="motion search-type">
              <text className="demo-text" x="82" y="61">
                Great businesses near me
              </text>
            </g>
            <g className="motion search-result">
              <rect
                className="demo-panel"
                x="47"
                y="91"
                width="171"
                height="98"
                rx="10"
              />
              <text className="demo-title" x="61" y="118">
                Your business
              </text>
              <text className="demo-small" x="61" y="138">
                Services · Reviews · Directions
              </text>
              <path className="demo-line" d="M62 151h130m-130 10h95" />
              <rect
                className="demo-green"
                x="61"
                y="172"
                width="49"
                height="6"
                rx="3"
              />
            </g>
            <g className="motion map">
              <rect
                className="demo-sage"
                x="230"
                y="91"
                width=" 80"
                height="98"
                rx="10"
              />
              <path
                stroke="#fafbf5"
                strokeWidth="7"
                d="m240 91 38 98m-48-28  80-25"
              />
            </g>
            <g className="motion pin">
              <path
                className="demo-green"
                d="M286 126c0 14-17 30-17 30s-17-16-17-30a17 17 0 0 1 34 0"
              />
              <circle cx="269" cy="126" r="6" fill="#fcfaf6" />
            </g>
          </>
        )}
        {id === "ads" && (
          <>
            <g className="motion ad-creative">
              <rect
                className="demo-panel"
                x="51"
                y="37"
                width="114"
                height="159"
                rx="10"
              />
              <Photo x={60} y={46} w={96} h={84} />
              <text className="demo-text" x="61" y="148">
                Meet your next
              </text>
              <text className="demo-text" x="61" y="162">
                favourite.
              </text>
              <rect
                className="demo-green"
                x="61"
                y="174"
                width=" 60"
                height="12"
                rx="6"
              />
            </g>
            <path className="motion connector" d="M174 105h35l-6-6m6 6-6 6" />
            <g className="motion enquiry">
              <rect
                className="demo-panel"
                x="218"
                y=" 60"
                width="120"
                height=" 60"
                rx="10"
              />
              <text className="demo-text" x="230" y="82">
                New enquiry
              </text>
              <text className="demo-small" x="230" y="102">
                “Let’s talk.”
              </text>
            </g>
            <g className="motion success">
              <rect
                className="demo-dark"
                x="194"
                y="145"
                width="141"
                height="34"
                rx="17"
              />
              <text className="demo-white" x="224" y="166">
                Conversation started
              </text>
              <Tick x={209} y={162} />
            </g>
          </>
        )}
        {id === "automation" && (
          <>
            <path className="demo-line" d="M 80 110h200" />
            <path className="motion energy" d="M 80 110h200" />
            {[80, 180, 280].map((x, i) => (
              <g key={x}>
                <rect
                  className={`motion node node-${i} demo-panel`}
                  x={x - 28}
                  y="82"
                  width="56"
                  height="56"
                  rx="13"
                />
                <text className="demo-symbol" x={x} y="119" textAnchor="middle">
                  {["↗", "✳", "✓"][i]}
                </text>
                <text className="demo-small" x={x} y="160" textAnchor="middle">
                  {["Request", "Workflow", "Done"][i]}
                </text>
              </g>
            ))}
            <g className="motion success">
              <rect
                className="demo-dark"
                x="105"
                y=" 30"
                width="150"
                height="28"
                rx="14"
              />
              <text className="demo-white" x="123" y="48">
                Less work. More time.
              </text>
            </g>
          </>
        )}
        {id === "reputation" && (
          <>
            <rect
              className="demo-panel"
              x="53"
              y="40"
              width="254"
              height="113"
              rx="12"
            />
            <text className="demo-text" x=" 70" y="65">
              A happy customer
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <text
                key={i}
                className={`motion star star-${i}`}
                x={70 + i * 25}
                y="95"
              >
                ★
              </text>
            ))}
            <path className="demo-line" d="M70 113h197m-197 12h146" />
            <g className="motion reply">
              <rect
                className="demo-sage"
                x=" 90"
                y="139"
                width="227"
                height="58"
                rx="10"
              />
              <text className="demo-text" x="107" y="163">
                Thanks for choosing us.
              </text>
              <text className="demo-small" x="107" y="181">
                A thoughtful reply, in your voice.
              </text>
            </g>
          </>
        )}
        {id === "crm" && (
          <>
            <WindowFrame />
            {["New", "In touch", "Follow-up"].map((label, i) => (
              <g key={label}>
                <rect
                  className="demo-well"
                  x={50 + i * 89}
                  y="62"
                  width=" 80"
                  height="125"
                  rx="6"
                />
                <text className="demo-small" x={58 + i * 89} y="80">
                  {label}
                </text>
              </g>
            ))}
            <g className="motion lead">
              <rect
                className="demo-panel"
                x="55"
                y="94"
                width="70"
                height="54"
                rx="7"
              />
              <circle className="demo-sage" cx=" 70" cy="110" r="7" />
              <path className="demo-line" d="M83 108h31m-49 18h48m-48 9h30" />
            </g>
            <g className="motion success">
              <Tick x={289} y={152} />
            </g>
          </>
        )}
        {id === "consulting" && (
          <>
            <WindowFrame />
            <path
              className="demo-line"
              d="M64 70v102h229M64 135h229M64 99h229"
            />
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                className={`motion bar bar-${i} demo-sage`}
                x={85 + i * 51}
                y={145 - i * 23}
                width="29"
                height={27 + i * 23}
                rx="4"
              />
            ))}
            <path
              className="motion growth-line"
              d="m 90 136  50-22  50-25  50-33"
            />
            <g className="motion success">
              <Tick x={280} y={65} />
            </g>
          </>
        )}
      </svg>
      <div className="demo-captions">
        {captions[id].map((caption, i) => (
          <span key={caption} className={`motion caption caption-${i}`}>
            {caption}
          </span>
        ))}
      </div>
      <div className="demo-progress">
        <i className="motion" />
      </div>
    </div>
  );
}
