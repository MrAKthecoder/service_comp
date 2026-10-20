import { useId } from "react";

export function Necklace({ emerald = false }: { emerald?: boolean }) {
  return (
    <g fill="none" strokeLinecap="round">
      <path
        d="M-49-55C-57 11-37 44 0 51C37 44 57 11 49-55"
        stroke="#a37c37"
        strokeWidth="6"
      />
      <path
        d="M-47-54C-51 8-34 39 0 47C34 39 51 8 47-54"
        stroke="#e2c789"
        strokeWidth="2"
      />
      <path
        d="M0 44L18 60 0 84-18 60Z"
        fill={emerald ? "#367568" : "#d5ae63"}
        stroke="#a37c37"
        strokeWidth="3"
      />
      <path
        d="M0 48L11 61 0 76-11 61Z"
        fill={emerald ? "#72a394" : "#f6dea5"}
        stroke="none"
      />
    </g>
  );
}

export function Character({
  mood = "happy",
  team = false,
  phone = false,
  thumbs = false,
}: {
  mood?: "worried" | "happy";
  team?: boolean;
  phone?: boolean;
  thumbs?: boolean;
}) {
  const skin = team ? "#d39a77" : "#be835e";
  const shade = team ? "#b97858" : "#a56b49";
  return (
    <g className={`wa-character ${mood === "worried" ? "wa-worried" : ""}`}>
      <ellipse cx="0" cy="248" rx="76" ry="13" fill="#203a31" opacity=".1" />
      <path
        d="M-41 112L-38 232H-7L8 129 22 231H54L46 112Z"
        fill={team ? "#e0cba9" : "#344b43"}
      />
      <path
        d="M-40 227h33l4 16h-65q-4-13 28-16M23 227h29l22 11q7 9-5 10H24Z"
        fill="#24352e"
      />
      <path
        d="M-55 6Q-39-9-14-11H19Q49-4 58 22L45 133Q-4 147-49 132Z"
        fill={team ? "#365f50" : "#eee0c7"}
      />
      {!team && (
        <>
          <path
            d="M-30-5L-24 42H24L31-5 40 2 34 143H-40L-39 2Z"
            fill="#567260"
          />
          <path d="M-17 67h36v31h-36Z" fill="#45614f" />
          <path d="M-17 67v7h36" fill="none" stroke="#73917b" strokeWidth="2" />
        </>
      )}
      <path d="M-13-34h29v32q-15 17-29 0Z" fill={shade} />
      <g className="wa-head">
        {team && (
          <path d="M-43-57q-6-62 37-65 59-4 54 69l-5 48H-44Z" fill="#503e31" />
        )}
        <ellipse cx="0" cy="-66" rx="36" ry="44" fill={skin} />
        <ellipse cx="-34" cy="-61" rx="8" ry="12" fill={skin} />
        <ellipse cx="34" cy="-61" rx="8" ry="12" fill={skin} />
        <path
          d={
            team
              ? "M-36-68q21 2 25-33 9 20 44 28 7-45-28-44-47-1-41 49"
              : "M-37-67q10 0 13-26 17 8 45-9l14 34q12-40-15-49-36-13-54 8-10 13-3 42"
          }
          fill={team ? "#503e31" : "#273b32"}
        />
        <path
          d="M2-63l-4 17h8"
          fill="none"
          stroke={shade}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g className={thumbs ? "wa-winking" : "wa-blinking"}>
          <ellipse cx="-14" cy="-65" rx="3" ry="4" fill="#23382d" />
          <ellipse
            className="wa-right-eye"
            cx="16"
            cy="-65"
            rx="3"
            ry="4"
            fill="#23382d"
          />
        </g>
        <path
          d={
            mood === "worried"
              ? "M-23-76l14 3M10-73l13-3M-9-32q10-9 19 0"
              : "M-22-78q6-3 13-1M10-79q7-2 13 2"
          }
          fill="none"
          stroke="#344235"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {mood === "happy" && (
          <path d="M-10-36q11 7 22-1-9 18-22 1" fill="#fff6df" />
        )}
        {!team && (
          <path d="M-13-44q7-8 14-2 8-7 14 2l-3 6-12-4-11 4Z" fill="#344235" />
        )}
        <ellipse cx="-23" cy="-46" rx="8" ry="4" fill="#d89a77" opacity=".5" />
      </g>
      {mood === "worried" ? (
        <>
          <path
            d="M-46 22L-63 66-30 3"
            fill="none"
            stroke={skin}
            strokeWidth="22"
            strokeLinecap="round"
          />
          <ellipse
            cx="-29"
            cy="-9"
            rx="10"
            ry="19"
            fill={skin}
            transform="rotate(20 -29 -9)"
          />
          <path
            d="M48 22L69 72 116 76"
            fill="none"
            stroke={skin}
            strokeWidth="21"
            strokeLinecap="round"
          />
          <path
            d="M-56 13l-14 27 26 11 15-32M36 9l-5 33 30 2-4-23"
            fill="#e9d9bc"
          />
        </>
      ) : thumbs ? (
        <>
          <path
            d="M-43 22l-12 72"
            fill="none"
            stroke={skin}
            strokeWidth="22"
            strokeLinecap="round"
          />
          <g className="wa-thumb-arm">
            <path
              d="M47 26l35 28 17-30"
              fill="none"
              stroke={skin}
              strokeWidth="23"
              strokeLinecap="round"
            />
            <path
              d="M89 31V5q2-18 11-15 8 2 2 24l24-1q13 2 8 13l-7 25q-3 10-19 6L91 49Z"
              fill={skin}
            />
            <path
              d="M109 22h19m-18 10h17"
              stroke={shade}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <path
            d="M-55 11l-5 29 25 5 9-31M33 5l-6 32 31 18 14-25"
            fill="#365f50"
          />
        </>
      ) : phone ? (
        <>
          <path
            d="M-45 26l-18 61 51-31M48 25L38 73 13 61"
            stroke={skin}
            strokeWidth="21"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="-18" y="20" width="40" height="65" rx="7" fill="#213b30" />
          <rect x="-13" y="27" width="30" height="45" rx="3" fill="#d1ddca" />
          <path d="M-3 78h10" stroke="#8a9c86" strokeWidth="2" />
        </>
      ) : (
        <g className="wa-working-hands">
          <path
            d="M-44 26l-17 52 80 15M46 27l24 41 44 5"
            stroke={skin}
            strokeWidth="23"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-54 8l-13 30 26 13 14-37M35 8l-3 32 28 3-7-22"
            fill={team ? "#365f50" : "#eee0c7"}
          />
        </g>
      )}
    </g>
  );
}

export function Background({ dark = false }: { dark?: boolean }) {
  return (
    <>
      <rect width="1200" height="660" fill={dark ? "#1e3c31" : "#e9e2d3"} />
      <circle cx="1020" cy="-50" r="480" fill={dark ? "#294a3b" : "#f2eddf"} />
      <path
        d="M0 560Q580 508 1200 554V660H0Z"
        fill={dark ? "#254637" : "#d8d2c0"}
      />
      <path
        d="M0 579Q630 535 1200 589"
        fill="none"
        stroke={dark ? "#345343" : "#ccc6b3"}
        strokeWidth="2"
      />
    </>
  );
}

export function Store({
  busy = false,
  problem = ["“No website to share.", "How will they find me?”"],
  status = "ORDER BOOK — 0",
}: {
  busy?: boolean;
  problem?: string[];
  status?: string;
}) {
  return (
    <>
      <Background />
      <g className="wa-room-camera">
        <rect x="86" y="85" width="278" height="407" rx="139" fill="#d6ceba" />
        <path d="M108 464V235q0-126 117-126t117 126v229" fill="#e4dbc6" />
        {[0, 1].map((i) => (
          <g key={i} transform={`translate(0 ${i * 157})`}>
            <rect
              x="116"
              y="281"
              width="220"
              height="10"
              rx="3"
              fill="#b8a888"
            />
            <path d="M163 264v-39q0-17 18-17t18 17v39Z" fill="#547460" />
            <g transform="translate(182 239) scale(.29)">
              <Necklace />
            </g>
            <path d="M249 265v-33q0-17 18-17t18 17v33Z" fill="#f9f0dc" />
            <circle
              cx="266"
              cy="241"
              r="11"
              stroke="#bd934c"
              strokeWidth="4"
              fill="none"
            />
          </g>
        ))}
        <rect x="844" y="96" width="231" height="450" rx="115" fill="#7c9480" />
        <path d="M860 548V218q0-104 99-104t99 104v330" fill="#bccbbb" />
        <path d="M958 116v430M858 286h201" stroke="#edf0df" strokeWidth="7" />
        <path
          d="M1029 328v36"
          stroke="#47674f"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect
          x="910"
          y="218"
          width="101"
          height="43"
          rx="3"
          fill="#f2ecd9"
          transform="rotate(-4 960 240)"
        />
        <text x="960" y="247" textAnchor="middle" className="wa-label">
          OPEN
        </text>
        <path d="M593 0v77" stroke="#596c53" strokeWidth="4" />
        <path d="M546 117q2-45 47-45t47 45Z" fill="#345b48" />
        <ellipse cx="593" cy="116" rx="47" ry="7" fill="#dbc494" />
        <path d="M556 124l-84 295h241l-86-295" fill="#fff6d7" opacity=".2" />
        <circle cx="749" cy="157" r="35" fill="#f6f0df" />
        <circle cx="749" cy="157" r="3" fill="#617359" />
        <path
          d="M749 132v25l15 10"
          stroke="#617359"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <g transform="translate(493 332) scale(.86)">
          <Character mood={busy ? "happy" : "worried"} />
        </g>
        <rect x="350" y="408" width="454" height="147" rx="6" fill="#486851" />
        <rect x="340" y="390" width="474" height="27" rx="7" fill="#6f8b6d" />
        <rect x="374" y="435" width="406" height="88" rx="4" fill="#dce1cd" />
        <path d="M389 439l87 80h62l-84-80Z" fill="#f8f8e7" opacity=".45" />
        <g transform="translate(446 485) scale(.35)">
          <Necklace />
        </g>
        <g transform="translate(581 485) scale(.35)">
          <Necklace emerald />
        </g>
        <circle
          cx="712"
          cy="476"
          r="20"
          fill="none"
          stroke="#b48a40"
          strokeWidth="6"
        />
        {busy ? (
          <>
            <g transform="translate(955 391) scale(.66)">
              <g className="wa-arrive">
                <Character team phone />
              </g>
            </g>
            <g transform="translate(1072 430) scale(.5)">
              <g className="wa-arrive wa-delayed">
                <Character phone />
              </g>
            </g>
            <g transform="translate(621 291) scale(.23)">
              <Laptop />
            </g>
            <g className="wa-order-float">
              <rect
                x="533"
                y="181"
                width="281"
                height="84"
                rx="16"
                fill="#fffaf0"
              />
              <circle cx="567" cy="219" r="17" fill="#d8e6cd" />
              <path
                d="M560 219l5 5 10-12"
                stroke="#356244"
                strokeWidth="3"
                fill="none"
              />
              <text x="595" y="212" className="wa-label">
                NEW ONLINE ORDER
              </text>
              <text x="595" y="240" className="wa-body">
                A new chapter begins.
              </text>
            </g>
          </>
        ) : (
          <>
            <rect
              x="607"
              y="354"
              width="145"
              height="28"
              rx="3"
              fill="#f4ebd6"
            />
            <text x="680" y="374" textAnchor="middle" className="wa-label">
              {status}
            </text>
            <g className="wa-thought">
              <rect
                x="549"
                y="250"
                width="238"
                height="89"
                rx="20"
                fill="#fffaf0"
              />
              <path d="M565 337l-28 18 8-29" fill="#fffaf0" />
              <text x="570" y="282" className="wa-body">
                {problem[0]}
              </text>
              <text x="570" y="312" className="wa-body">
                {problem[1]}
              </text>
            </g>
          </>
        )}
        <path
          d="M79 541q-47-113 1-161 49 48 7 153M83 518q-91-29-76-81 75-4 76 81M90 508q60-89 94-50-7 62-94 67"
          fill="#6e8b69"
        />
        <path d="M45 524h83l-13 67H59Z" fill="#bd7959" />
      </g>
    </>
  );
}

export function PhoneScene({
  chat = false,
  request = ["“I’d love a website", "for my jewellery shop.”"],
}: {
  chat?: boolean;
  request?: string[];
}) {
  return (
    <>
      <Background dark={chat} />
      <circle cx="304" cy="335" r="211" fill={chat ? "#3d604b" : "#d7decb"} />
      <g transform="translate(293 383) scale(1.05)">
        <Character phone />
      </g>
      <g className="wa-phone-in">
        <g transform="rotate(-5 756 337)">
          <rect
            x="613"
            y="44"
            width="295"
            height="553"
            rx="41"
            fill="#183a2b"
          />
          <rect
            x="623"
            y="54"
            width="275"
            height="532"
            rx="32"
            fill="#faf6e9"
          />
          <rect x="718" y="68" width="83" height="16" rx="8" fill="#183a2b" />
          <text x="650" y="133" className="wa-brand">
            forma<tspan fill="#65a67c">✳</tspan>
          </text>
          {chat ? (
            <>
              <text x="650" y="189" className="wa-label">
                A REAL CONVERSATION
              </text>
              <g className="wa-chat-one">
                <rect
                  x="644"
                  y="222"
                  width="225"
                  height="98"
                  rx="17"
                  fill="#e4dbc8"
                />
                <text x="663" y="255" className="wa-body">
                  {request[0]}
                </text>
                <text x="663" y="285" className="wa-body">
                  {request[1]}
                </text>
              </g>
              <g className="wa-chat-two">
                <rect
                  x="663"
                  y="343"
                  width="218"
                  height="102"
                  rx="17"
                  fill="#2e5940"
                />
                <text x="681" y="379" className="wa-body wa-white">
                  “We’ll help you.
                </text>
                <text x="681" y="410" className="wa-body wa-white">
                  Let’s make a plan.”
                </text>
              </g>
              <text x="665" y="500" className="wa-label">
                LISTEN. PLAN. BUILD TOGETHER.
              </text>
            </>
          ) : (
            <>
              <text x="650" y="223" className="wa-phone-title">
                Your business.
              </text>
              <text x="650" y="260" className="wa-phone-title">
                More possibilities.
              </text>
              <rect
                x="650"
                y="287"
                width="222"
                height="137"
                rx="12"
                fill="#dce3cf"
              />
              <g transform="translate(762 345) scale(.64)">
                <Necklace emerald />
              </g>
              <rect
                x="650"
                y="452"
                width="220"
                height="55"
                rx="27"
                fill="#25d878"
              />
              <text x="696" y="487" className="wa-body">
                Contact us ↗
              </text>
              <g className="wa-phone-touch">
                <circle
                  cx="828"
                  cy="479"
                  r="24"
                  fill="none"
                  stroke="#fffdf0"
                  strokeWidth="3"
                />
                <path
                  d="M829 497v-15q0-12 9-12t9 12v30l23 8 11 39-43 11-30-45q-5-9 2-13 6-2 19 10"
                  fill="#c88d68"
                />
                <path d="M846 515v22" stroke="#a46d4d" strokeWidth="2" />
              </g>
            </>
          )}
        </g>
      </g>
      {chat && (
        <g className="wa-advisor-badge">
          <circle cx="1036" cy="355" r="72" fill="#d9c7a6" />
          <g transform="translate(1036 375) scale(.38)">
            <Character team thumbs />
          </g>
          <text
            x="1036"
            y="460"
            textAnchor="middle"
            className="wa-label wa-white"
          >
            THE FORMA TEAM
          </text>
        </g>
      )}
    </>
  );
}

function Laptop({
  building = false,
  orders = false,
}: {
  building?: boolean;
  orders?: boolean;
}) {
  return (
    <g>
      <ellipse
        cx="403"
        cy="438"
        rx="390"
        ry="25"
        fill="#102c21"
        opacity=".13"
      />
      <rect x="36" y="0" width="735" height="421" rx="23" fill="#1b3028" />
      <rect x="47" y="11" width="713" height="396" rx="13" fill="#faf7ee" />
      <circle cx="403" cy="6" r="2" fill="#8aa08a" />
      <path d="M3 421h801l-21 21H29Z" fill="#a7b5a5" />
      <path d="M3 421h801v7H3Z" fill="#d7dfd1" />
      <path d="M337 421h132l-9 7H346Z" fill="#6b826e" />
      <rect x="47" y="11" width="713" height="33" rx="13" fill="#e2e6da" />
      <path d="M47 32h713v12H47Z" fill="#e2e6da" />
      {[64, 76, 88].map((x) => (
        <circle key={x} cx={x} cy="28" r="3" fill="#9cae98" />
      ))}
      <text x="403" y="32" textAnchor="middle" className="wa-url">
        thejewellerystudio.example
      </text>
      <g className={building ? "wa-site-build" : ""}>
        <text x="77" y="81" className="wa-shop-brand">
          ATELIER / 01
        </text>
        <text x="557" y="79" className="wa-label">
          Collection Our story Bag (0)
        </text>
        <path d="M76 98h652" stroke="#dedecd" />
        <rect x="77" y="119" width="307" height="261" rx="6" fill="#d8c8a7" />
        <path d="M97 380V254q0-122 135-122t130 122v126" fill="#eaddbf" />
        <ellipse
          cx="229"
          cy="355"
          rx="106"
          ry="11"
          fill="#bda57f"
          opacity=".4"
        />
        <path d="M159 338l14-125q1-35 56-36t59 36l13 125Z" fill="#355947" />
        <g transform="translate(229 253) scale(.86)">
          <Necklace />
        </g>
        <text x="418" y="154" className="wa-label">
          EVERYDAY, EXTRAORDINARY.
        </text>
        <text x="416" y="209" className="wa-site-title">
          Made to be
        </text>
        <text x="416" y="253" className="wa-site-title">
          treasured.
        </text>
        <text x="418" y="291" className="wa-body">
          Small details. Lasting stories.
        </text>
        <rect x="418" y="315" width="217" height="46" rx="23" fill="#305c43" />
        <text x="452" y="345" className="wa-body wa-white">
          Shop the collection ↗
        </text>
      </g>
      {orders && (
        <g className="wa-checkout">
          <rect
            x="487"
            y="88"
            width="276"
            height="114"
            rx="14"
            fill="#fffef6"
            stroke="#c9d4bc"
          />
          <circle cx="519" cy="126" r="16" fill="#d6e8cd" />
          <path
            d="M512 126l5 5 10-12"
            stroke="#3a6746"
            strokeWidth="3"
            fill="none"
          />
          <text x="545" y="130" className="wa-body">
            Order received
          </text>
          <text x="511" y="163" className="wa-label">
            GOLD PENDANT · 1 ITEM
          </text>
          <text x="511" y="184" className="wa-label">
            A little piece of your shop, online.
          </text>
        </g>
      )}
    </g>
  );
}

function BuildScene() {
  return (
    <>
      <Background />
      <circle cx="950" cy="208" r="159" fill="#c7d7bb" />
      <g transform="translate(222 128) scale(.98)">
        <g className="wa-device-reveal">
          <Laptop building />
        </g>
      </g>
      <g transform="translate(162 382) scale(.72)">
        <Character team />
      </g>
      <g className="wa-design-chip">
        <rect x="789" y="56" width="284" height="54" rx="27" fill="#fffaf0" />
        <circle cx="817" cy="83" r="10" fill="#76915c" />
        <text x="840" y="89" className="wa-body">
          Designed around your shop
        </text>
      </g>
      <g className="wa-mobile-preview">
        <rect x="891" y="323" width="153" height="264" rx="23" fill="#1c382c" />
        <rect x="899" y="333" width="137" height="243" rx="15" fill="#fbf6e8" />
        <text x="916" y="362" className="wa-label">
          ATELIER / 01
        </text>
        <rect x="911" y="377" width="113" height="124" rx="6" fill="#d9c8a6" />
        <g transform="translate(969 429) scale(.5)">
          <Necklace />
        </g>
        <rect x="913" y="519" width="109" height="31" rx="15" fill="#355d44" />
        <text x="968" y="540" textAnchor="middle" className="wa-label wa-white">
          SHOP NOW
        </text>
      </g>
    </>
  );
}

function Finale() {
  return (
    <>
      <Background dark />
      <circle cx="1020" cy="338" r="182" fill="#355643" />
      <g transform="translate(52 116) scale(1.03)">
        <g className="wa-laptop-close">
          <Laptop orders />
        </g>
      </g>
      <g transform="translate(1017 385) scale(.68)">
        <g className="wa-team-finish">
          <Character team thumbs />
        </g>
      </g>
      <g className="wa-welcome">
        <rect x="916" y="153" width="225" height="73" rx="22" fill="#efe6d1" />
        <path d="M995 225l18 20 8-20" fill="#efe6d1" />
        <text
          x="1028"
          y="199"
          textAnchor="middle"
          className="wa-body"
          style={{ fontSize: 24 }}
        >
          You’re welcome.
        </text>
      </g>
    </>
  );
}

export function WebsiteFilmArtwork({
  shot,
  description,
}: {
  shot: number;
  description: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className="wa-artwork"
      viewBox="0 0 1200 660"
      role="img"
      aria-label={description}
    >
      <defs>
        <filter id={`${id}-grain`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <g key={shot} className="wa-scene">
        {shot === 0 ? (
          <Store />
        ) : shot === 1 ? (
          <PhoneScene />
        ) : shot === 2 ? (
          <PhoneScene chat />
        ) : shot === 3 ? (
          <BuildScene />
        ) : shot === 4 ? (
          <Store busy />
        ) : (
          <Finale />
        )}
      </g>
      <rect
        width="1200"
        height="660"
        filter={`url(#${id}-grain)`}
        opacity=".035"
        pointerEvents="none"
      />
    </svg>
  );
}
