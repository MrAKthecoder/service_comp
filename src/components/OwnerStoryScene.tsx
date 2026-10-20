const ink = "#294c3e",
  paper = "#faf8f1",
  sage = "#dce6d6";
const problems: Record<string, string> = {
  websites: "No website. No enquiries.",
  social: "No posts. No one sees us.",
  content: "How do I show my collection?",
  seo: "My shop is missing here.",
  ads: "Who will see this launch?",
  automation: "Still doing all this by hand…",
  reputation: "Our happy customers go unseen.",
  crm: "I forgot to call them back.",
  consulting: "What should I do next?",
};

function Owner({ worried = false }: { worried?: boolean }) {
  return (
    <g
      stroke={ink}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M123 224v74h97v-74" fill={sage} />
      <path d="M134 297l-7 50m78-50 9 50" />
      <path
        d="M156 206q-28 12-28 55l18 40h66l-6-55q-2-29-29-39"
        fill={worried ? "#e4e0d3" : sage}
      />
      <g className={worried ? "owner-worry" : "owner-relief"}>
        <path d="M149 175q-7-35 19-38 32-3 31 33l-8 25-35-1Z" fill={ink} />
        <path d="M152 165q19 3 32-15l9 18-1 22q-12 27-32 8Z" fill={paper} />
        <path
          d={
            worried
              ? "M159 175l8 3m10 0 8-3 M165 193q8-8 15 0"
              : "M159 177h4m14 0h4 M164 190q9 12 17-1"
          }
          fill="none"
        />
      </g>
      <path
        className={worried ? "owner-tension" : "owner-typing"}
        d={
          worried
            ? "M143 223l-8 33 35-60m30 35 26 36h37"
            : "M145 225l17 35 95 6m-56-37 27 24 36 4"
        }
        fill="none"
      />
      <path d="M145 301l50 11-6 32h25m-49-44-10 43h-23" fill="none" />
    </g>
  );
}
function Laptop({
  contact = false,
  success = false,
}: {
  contact?: boolean;
  success?: boolean;
}) {
  return (
    <g stroke={ink} strokeWidth="2" strokeLinejoin="round">
      <rect x="261" y="156" width="250" height="149" rx="8" fill={paper} />
      <path d="M248 306h276l-13 10H261Z" fill={sage} />
      <path d="M262 179h248" />
      <text x="275" y="172" className="story-svg-label">
        {contact ? "forma ✳" : "THE JEWELLERY STUDIO"}
      </text>
      {contact ? (
        <>
          <text
            x="281"
            y="205"
            className="story-svg-heading"
            style={{ fontSize: 19 }}
          >
            Your business.
          </text>
          <text
            x="281"
            y="228"
            className="story-svg-heading"
            style={{ fontSize: 19 }}
          >
            More possibilities.
          </text>
          <rect
            x="281"
            y="245"
            width="111"
            height="33"
            rx="16"
            fill="#18d778"
            stroke="none"
          />
          <text x="297" y="266" className="story-svg-label">
            Contact us ↗
          </text>
          <g className="story-click">
            <path d="M379 265l4 26 7-9 11 1Z" fill={ink} />
            <circle cx="380" cy="264" r="19" fill="none" stroke="#18b667" />
          </g>
        </>
      ) : (
        <>
          <rect x="277" y="192" width="81" height="93" rx="4" fill={sage} />
          <path
            d="M294 223l22-17 23 17-23 28Z M294 223h45 M316 206v45"
            fill="none"
          />
          <text x="371" y="213" className="story-svg-label">
            Made to be
          </text>
          <text x="371" y="233" className="story-svg-label">
            treasured.
          </text>
          <rect x="370" y="253" width="121" height="26" rx="13" fill={ink} />
          <text x="384" y="271" className="story-svg-light">
            {success ? "Book a visit" : "See collection"}
          </text>
        </>
      )}
    </g>
  );
}
function Work({ id }: { id: string }) {
  if (id === "websites") return <Laptop success />;
  return (
    <g stroke={ink} strokeWidth="2" fill={paper}>
      <rect x="258" y="150" width="280" height="164" rx="10" />
      <path d="M258 180h280" />
      <text x="275" y="170" className="story-svg-label">
        {
          {
            social: "YOUR SOCIAL PRESENCE",
            content: "YOUR COLLECTION, IN MOTION",
            seo: "FIND YOUR SHOP",
            ads: "A CAMPAIGN WITH A PURPOSE",
            automation: "LET THE ROUTINE WORK FLOW",
            reputation: "CUSTOMER STORIES",
            crm: "EVERY ENQUIRY, TOGETHER",
            consulting: "YOUR NEXT STEPS",
          }[id]
        }
      </text>
      {id === "social" || id === "content" || id === "ads" ? (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i} className={`story-work work-${i}`}>
              <rect
                x={277 + i * 82}
                y="196"
                width="69"
                height="88"
                rx="5"
                fill={i === 1 ? sage : "#eee7d7"}
              />
              <path d={`M${295 + i * 82} 223l16-12 16 12-16 21Z`} fill="none" />
              {id === "content" ? (
                <path d={`M${304 + i * 82} 251l14 8-14 8Z`} fill={ink} />
              ) : (
                <path d={`M${287 + i * 82} 263h48m-48 8h32`} />
              )}
            </g>
          ))}
        </>
      ) : id === "seo" ? (
        <>
          <rect x="277" y="195" width="241" height="25" rx="12" />
          <text x="291" y="213" className="story-svg-label">
            Jewellery near me
          </text>
          <rect x="278" y="230" width="240" height="65" rx="5" fill={sage} />
          <text x="292" y="251" className="story-svg-label">
            The Jewellery Studio
          </text>
          <text x="292" y="278" className="story-svg-label">
            Visit website · Get directions ↗
          </text>
        </>
      ) : id === "reputation" ? (
        <>
          <text x="281" y="221" fill="#a67a2b" stroke="none" fontSize="23">
            ★★★★★
          </text>
          <text x="281" y="246" className="story-svg-label">
            “Beautiful pieces. Lovely service.”
          </text>
          <rect x="280" y="258" width="237" height="36" rx="8" fill={sage} />
          <text x="293" y="281" className="story-svg-label">
            Thank you for visiting our shop.
          </text>
        </>
      ) : (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i} className={`story-work work-${i}`}>
              <rect
                x="278"
                y={192 + i * 34}
                width="238"
                height="27"
                rx="5"
                fill={i === 1 ? sage : paper}
              />
              <text x="291" y={211 + i * 34} className="story-svg-label">
                {
                  (id === "crm"
                    ? [
                        "New: collection enquiry",
                        "Follow up: Maya, 3 pm",
                        "Booked: Saturday visit",
                      ]
                    : id === "automation"
                      ? [
                          "Enquiry received →",
                          "Customer record created →",
                          "Owner notified ✓",
                        ]
                      : [
                          "01  Make the shop easy to find",
                          "02  Show the collection online",
                          "03  Review and improve",
                        ])[i]
                }
              </text>
            </g>
          ))}
        </>
      )}
    </g>
  );
}
export function OwnerStoryScene({ id, scene }: { id: string; scene: number }) {
  return (
    <g
      key={scene}
      className="story-scene"
      fill="none"
      stroke={ink}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="65"
        y="40"
        width="590"
        height="300"
        rx="14"
        fill="#f0eee4"
        stroke="none"
      />
      <path d="M90 341h547 M104 90h120m-120 54h120" stroke="#bbc7b5" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M${119 + i * 41} 73l9-10 9 10-9 12Z`} stroke="#9a8a60" />
          <circle cx={127 + i * 41} cy="127" r="10" stroke="#9a8a60" />
        </g>
      ))}
      <rect x="555" y="83" width="77" height="258" rx="4" fill={paper} />
      <path d="M555 114h77m-12 96v20" />
      <text x="566" y="103" className="story-svg-label">
        OPEN
      </text>
      {scene === 0 ? (
        <>
          <Owner worried />
          <path d="M117 275h405m-271 0v66m248-66v66" />
          <rect x="273" y="195" width="148" height="79" rx="6" fill={paper} />
          <path d="M272 274h160" />
          <text x="285" y="227" className="story-svg-label">
            {id === "websites"
              ? "Website not found"
              : id === "crm"
                ? "Missed follow-ups"
                : id === "automation"
                  ? "Tasks piling up"
                  : "Waiting to be seen…"}
          </text>
          <path d="M286 242h111m-111 12h65" stroke="#bec6b8" />
          <g className="story-thought">
            <rect x="253" y="56" width="285" height="76" rx="15" fill={paper} />
            <path d="M269 132l-27 20 10-27" fill={paper} />
            <text x="269" y="88" className="story-svg-label">
              {problems[id]}
            </text>
            <text x="269" y="111" className="story-svg-label">
              I could use some help.
            </text>
          </g>
          <g className="story-clock">
            <circle cx="484" cy="226" r="25" />
            <path d="M484 210v16l12 6" />
          </g>
        </>
      ) : scene === 1 ? (
        <>
          <Owner />
          <Laptop contact />
          <g className="story-message reply">
            <rect x="272" y="55" width="257" height="69" rx="14" fill={ink} />
            <text x="289" y="81" className="story-svg-light">
              “Tell us about your shop.”
            </text>
            <text x="289" y="105" className="story-svg-light">
              We listen. We agree a plan.
            </text>
          </g>
        </>
      ) : scene === 2 ? (
        <>
          <Owner />
          <Work id={id} />
          <g className="story-message">
            <rect x="269" y="57" width="270" height="65" rx="13" fill={sage} />
            <text x="285" y="82" className="story-svg-label">
              Your team at work.
            </text>
            <text x="285" y="106" className="story-svg-label">
              Create → review together → launch
            </text>
          </g>
          <path
            className="story-connect"
            d="M392 124v20"
            strokeDasharray="3 5"
          />
        </>
      ) : scene === 3 ? (
        <>
          <Owner />
          <Work id={id} />
          <g className="story-notice">
            <rect x="263" y="57" width="274" height="65" rx="13" fill={ink} />
            <text x="280" y="84" className="story-svg-light">
              {id === "crm"
                ? "Follow-up complete. Visit booked."
                : id === "automation"
                  ? "Admin sorted. Time for customers."
                  : id === "consulting"
                    ? "Next steps agreed. Let’s begin."
                    : "“Hello! Can I visit your shop?”"}
            </text>
            <text x="280" y="107" className="story-svg-light">
              {id === "consulting"
                ? "A clear plan to move forward."
                : "A new conversation starts."}
            </text>
          </g>
          <g className="story-arrival">
            <circle cx="591" cy="184" r="17" fill={paper} />
            <path d="M578 207q15-9 29 0l10 72h-51Z" fill={sage} />
            <path d="M578 279v47m24-47v47m-32-106-16 31-15-10" />
          </g>
        </>
      ) : (
        <>
          <Owner />
          <Laptop success />
          <rect x="252" y="52" width="291" height="78" rx="16" fill={ink} />
          <text
            x="397"
            y="85"
            textAnchor="middle"
            className="story-svg-light"
            style={{ fontSize: 23 }}
          >
            We’re here for you.
          </text>
          <text x="397" y="111" textAnchor="middle" className="story-svg-light">
            Your business. Our next conversation.
          </text>
        </>
      )}
      {scene !== 0 && <path d="M241 317h298m-284 0v25m270-25v25" />}
    </g>
  );
}
