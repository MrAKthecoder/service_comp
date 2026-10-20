import type { HeroStory } from "../data/heroStories";

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const ease = (x: number) => {
  const t = clamp(x);
  return t * t * (3 - 2 * t);
};

function Bag({
  x = 0,
  y = 0,
  scale = 1,
  color = "#bd754e",
}: {
  x?: number;
  y?: number;
  scale?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M-30-28Q-31-64 0-64Q31-64 30-28"
        fill="none"
        stroke="#785238"
        strokeWidth="9"
      />
      <path
        d="M-47-30H47L53 42Q0 54-53 42Z"
        fill={color}
        stroke="#795b40"
        strokeWidth="2"
      />
      <path
        d="M-42-19H42M-30-25V35M30-25V35"
        stroke="#f2d2a1"
        strokeOpacity=".35"
        strokeWidth="2"
        fill="none"
      />
      <rect x="-11" y="-3" width="22" height="13" rx="2" fill="#e0bc76" />
    </g>
  );
}

function Person({
  x,
  y,
  scale = 1,
  kind = "owner",
  time = 0,
  walk = false,
  arm = 0,
  phone = false,
  seated = false,
}: {
  x: number;
  y: number;
  scale?: number;
  kind?: "owner" | "woman" | "man" | "team";
  time?: number;
  walk?: boolean;
  arm?: number;
  phone?: boolean;
  seated?: boolean;
}) {
  const skin =
    kind === "woman" ? "#c99070" : kind === "man" ? "#ad7354" : "#c78d66";
  const shirt =
    kind === "owner"
      ? "#e8d5b2"
      : kind === "woman"
        ? "#b36c56"
        : kind === "team"
          ? "#4c715b"
          : "#829690";
  const stride = walk ? Math.sin(time * 8) * 19 : 0;
  const bob = walk
    ? Math.abs(Math.sin(time * 8)) * 3
    : Math.sin(time * 1.8) * 0.8;
  const blink = time % 4.1 > 3.9;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="3" rx="55" ry="10" fill="#243d32" opacity=".15" />
      {!seated && (
        <>
          <g transform={`rotate(${stride} -16 -94)`}>
            <path d="M-32-109L-33-12H-10L6-105" fill="#364e43" />
            <path d="M-34-16H-10L-1 0H-52Q-58-10-34-16" fill="#263b32" />
            <path d="M-51 0H0" stroke="#e8dec5" strokeWidth="4" />
          </g>
          <g transform={`rotate(${-stride} 18 -94)`}>
            <path d="M-1-106L12-12H36L32-109" fill="#486153" />
            <path d="M12-16H35L55-3Q57 3 48 3H12Z" fill="#263b32" />
            <path d="M12 3H53" stroke="#e8dec5" strokeWidth="4" />
          </g>
        </>
      )}
      <g transform={`translate(0 ${bob})`}>
        <path
          d="M-20-203Q-48-202-48-175L-38-102Q0-91 40-105L46-173Q45-200 20-204Z"
          fill={shirt}
        />
        {kind === "owner" && (
          <>
            <path
              d="M-25-197L-21-166H24L27-197L35-192L33-105Q0-97-33-105L-34-191Z"
              fill="#496b56"
            />
            <rect
              x="-16"
              y="-151"
              width="32"
              height="24"
              rx="3"
              fill="#385541"
            />
            <path d="M-16-149H16" stroke="#94aa7d" />
          </>
        )}
        <path d="M-11-218V-200Q0-190 12-201V-218" fill="#b57a57" />
        {kind === "woman" && (
          <path
            d="M-32-218Q-47-281 0-282Q49-285 34-213L33-191H-35Z"
            fill="#3d332d"
          />
        )}
        <ellipse cx="0" cy="-241" rx="31" ry="38" fill={skin} />
        <ellipse cx="-30" cy="-237" rx="6" ry="9" fill={skin} />
        <ellipse cx="30" cy="-237" rx="6" ry="9" fill={skin} />
        <path
          d={
            kind === "woman"
              ? "M-29-239Q-40-276-8-283Q35-290 33-244Q0-245-8-267Q-12-243-29-239"
              : "M-30-242Q-43-281-10-285Q34-291 34-249L26-236L21-269Q1-252-21-263L-24-242Z"
          }
          fill="#293a31"
        />
        <path
          d="M-20-253q6-3 13 0m14 0q7-3 13 0"
          stroke="#3c4030"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="-13"
          cy="-244"
          rx="2.7"
          ry={blink ? 0.5 : 3.4}
          fill="#25342d"
        />
        <ellipse
          cx="13"
          cy="-244"
          rx="2.7"
          ry={blink ? 0.5 : 3.4}
          fill="#25342d"
        />
        <path
          d="M0-241l-3 12h7"
          stroke="#a26b4b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {kind === "owner" && (
          <path d="M-14-225q7-8 14-2q8-6 15 2l-4 5-11-3-10 3Z" fill="#344335" />
        )}
        <path d="M-10-216Q1-209 13-217Q2-201-10-216" fill="#fff5dc" />
        <ellipse cx="-22" cy="-225" rx="6" ry="3" fill="#e5a283" opacity=".6" />
        <path
          d="M-39-187Q-57-163-45-139L-30-128"
          stroke={shirt}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-32-130l11 5"
          stroke={skin}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <g transform={`rotate(${-arm * 66} 35 -185)`}>
          <path
            d="M35-187Q51-172 48-155L51-136"
            fill="none"
            stroke={shirt}
            strokeWidth="21"
            strokeLinecap="round"
          />
          <path
            d="M51-138L53-125"
            fill="none"
            stroke={skin}
            strokeWidth="14"
            strokeLinecap="round"
          />
          {arm > 0.8 && (
            <path
              d="M50-129v-13q0-7 5-6l3 15"
              stroke={skin}
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </g>
        {phone && (
          <g transform="translate(-20 -136) rotate(-8)">
            <rect width="31" height="51" rx="5" fill="#263f36" />
            <rect x="4" y="6" width="23" height="36" rx="2" fill="#e5ead8" />
            <path d="M8 16h15M8 23h10" stroke="#9cb085" strokeWidth="3" />
          </g>
        )}
      </g>
    </g>
  );
}

function Bubble({
  x,
  y,
  width = 320,
  line1,
  line2,
  opacity = 1,
  dark = false,
}: {
  x: number;
  y: number;
  width?: number;
  line1: string;
  line2?: string;
  opacity?: number;
  dark?: boolean;
}) {
  return (
    <g
      opacity={opacity}
      transform={`translate(${x} ${y})`}
      filter="url(#story-shadow)"
    >
      <rect
        width={width}
        height={line2 ? 78 : 58}
        rx="18"
        fill={dark ? "#31553f" : "#fff9ec"}
      />
      <path
        d={`M40 ${line2 ? 76 : 56}l18 18 4-20`}
        fill={dark ? "#31553f" : "#fff9ec"}
      />
      <text
        x="20"
        y={line2 ? 31 : 36}
        fontSize="20"
        fontWeight="500"
        fill={dark ? "#f3f2df" : "#304d3a"}
      >
        {line1}
      </text>
      {line2 && (
        <text x="20" y="58" fontSize="20" fill={dark ? "#f3f2df" : "#304d3a"}>
          {line2}
        </text>
      )}
    </g>
  );
}

function Shop({
  story,
  time,
  busy,
}: {
  story: HeroStory;
  time: number;
  busy: boolean;
}) {
  const handoff = ease((time % 4) / 2);
  const entry = ease(time / 1.8);
  const words = story.customer.split(" ");
  let customerLine = "";
  while (words.length && (customerLine + " " + words[0]).length < 34)
    customerLine += (customerLine ? " " : "") + words.shift();
  return (
    <g>
      <rect width="960" height="600" fill="#e8dec8" />
      <path d="M0 0H960V83H0Z" fill="#34523e" />
      <path d="M0 82H960" stroke="#bda779" strokeWidth="6" />
      <text
        x="480"
        y="54"
        textAnchor="middle"
        fill="#eee4c9"
        fontFamily="Georgia, serif"
        fontSize="29"
        letterSpacing="5"
      >
        THE EVERYDAY STORE
      </text>
      <path d="M0 492H960V600H0Z" fill="#c7b991" />
      <path
        d="M0 545H960M170 492L80 600M410 492L390 600M660 492L705 600M865 492L960 600"
        stroke="#e6dcc0"
        strokeWidth="2"
      />
      <rect x="39" y="126" width="216" height="267" rx="100" fill="#9bac91" />
      <path d="M51 370Q133 251 243 332V393H51Z" fill="#718e71" />
      <path d="M147 126V393M39 275H255" stroke="#e0d5b9" strokeWidth="9" />
      <rect x="693" y="134" width="228" height="282" rx="6" fill="#d9cbb0" />
      <path d="M682 275H930M682 391H930" stroke="#9a7c55" strokeWidth="11" />
      <Bag x={744} y={235} scale={0.56} />
      <Bag x={859} y={235} scale={0.56} color="#6a8061" />
      <Bag x={750} y={352} scale={0.54} color="#ae985e" />
      <Bag x={856} y={352} scale={0.52} color="#996251" />
      <path d="M351 86v47m225-47v47" stroke="#756d50" strokeWidth="3" />
      <path
        d="M307 159q4-43 45-43t44 43ZM532 159q4-43 45-43t44 43Z"
        fill="#baa06e"
      />
      <ellipse cx="352" cy="159" rx="43" ry="6" fill="#f6e4b4" />
      <ellipse cx="577" cy="159" rx="43" ry="6" fill="#f6e4b4" />
      <Person
        x={516}
        y={488}
        scale={0.93}
        time={time}
        arm={0.25 + handoff * 0.6}
      />
      <path d="M330 411H662L686 438H311Z" fill="#b98b5d" />
      <rect x="311" y="438" width="375" height="111" rx="3" fill="#647658" />
      <path
        d="M332 451H665M342 458V537M376 458V537M410 458V537M444 458V537M478 458V537M512 458V537M546 458V537M580 458V537M614 458V537M648 458V537"
        stroke="#879674"
        strokeWidth="3"
      />
      <rect x="582" y="391" width="50" height="24" rx="4" fill="#354a3a" />
      <path d="M587 397H624" stroke="#aabd96" strokeWidth="4" />
      <Person
        x={245 + entry * 48}
        y={558}
        kind="woman"
        scale={0.97}
        time={time}
        walk={entry < 1}
        arm={0.3}
        phone={!busy}
      />
      {busy && (
        <>
          <Person
            x={85 + entry * 22}
            y={546}
            kind="man"
            scale={0.83}
            time={time + 1}
            phone
          />
          <Person
            x={808 + time * 23}
            y={554}
            kind="woman"
            scale={0.84}
            time={time + 2}
            walk
          />
          <Bag x={826 + time * 23} y={468} scale={0.34} color="#a78955" />
        </>
      )}
      <Bag
        x={453 - handoff * 84}
        y={403 - Math.sin(handoff * Math.PI) * 30}
        scale={0.47}
      />
      <Bubble
        x={44}
        y={104}
        width={400}
        line1={
          busy
            ? customerLine
            : story.id === "websites"
              ? "We found your new website!"
              : "So this is the shop!"
        }
        line2={
          busy
            ? words.join(" ") || "Thank you!"
            : "The collection looks lovely."
        }
        opacity={ease(time / 0.7)}
      />
      {busy && (
        <g transform="translate(729 95)">
          <rect width="195" height="37" rx="18" fill="#f8f0dc" />
          <circle cx="20" cy="19" r="5" fill="#5a8954" />
          <text x="34" y="24" fill="#3e593c" fontSize="13">
            A happy day in the shop
          </text>
        </g>
      )}
      {!busy && (
        <g transform="translate(710 411) rotate(7)">
          <rect
            width="174"
            height="124"
            rx="12"
            fill="#fbf7e9"
            stroke="#99ad8b"
            strokeWidth="2"
          />
          <text x="14" y="24" fontSize="11" fill="#617958">
            THE EVERYDAY STORE
          </text>
          <Bag x={89} y={64} scale={0.3} />
          <rect x="30" y="94" width="117" height="17" rx="8" fill="#4e7554" />
          <text x="89" y="106" fontSize="9" fill="#fff9e7" textAnchor="middle">
            Explore our collection
          </text>
        </g>
      )}
    </g>
  );
}

function ServiceScreen({
  story,
  time,
  compact = false,
}: {
  story: HeroStory;
  time: number;
  compact?: boolean;
}) {
  const id = story.id;
  const progress = ease(time / 3);
  return (
    <g>
      <rect width="600" height="348" rx="8" fill="#faf6e9" />
      <rect width="600" height="44" rx="8" fill="#e7ebdc" />
      <path d="M0 36H600V44H0Z" fill="#e7ebdc" />
      {[17, 30, 43].map((x) => (
        <circle key={x} cx={x} cy="21" r="3" fill="#9cae91" />
      ))}
      <text x="300" y="26" textAnchor="middle" fontSize="12" fill="#5e7758">
        {story.tag}
      </text>
      {id === "websites" && (
        <>
          <text
            x="29"
            y="84"
            fontSize="23"
            fill="#304c35"
            fontFamily="Georgia, serif"
          >
            The Everyday Store
          </text>
          <text x="475" y="81" fontSize="10" fill="#6c7d60">
            SHOP / OUR STORY
          </text>
          <rect x="22" y="103" width="556" height="174" rx="6" fill="#dce2cb" />
          <text
            x="44"
            y="150"
            fontSize="29"
            fill="#314d36"
            fontFamily="Georgia, serif"
          >
            Made with care.
          </text>
          <text
            x="44"
            y="184"
            fontSize="29"
            fill="#314d36"
            fontFamily="Georgia, serif"
          >
            Carried every day.
          </text>
          <rect x="44" y="211" width="156" height="35" rx="17" fill="#456849" />
          <text
            x="122"
            y="234"
            textAnchor="middle"
            fill="#f5f4df"
            fontSize="13"
          >
            Shop the collection ↗
          </text>
          <circle cx="456" cy="189" r="70" fill="#c0ccaa" />
          <Bag x={456} y={190} scale={0.94} />
          <text x="30" y="314" fontSize="14" fill="#56714b">
            HANDMADE BAGS. EVERYDAY STORIES.
          </text>
          <path d="M433 305H559M433 316H538" stroke="#c8d2bb" strokeWidth="4" />
        </>
      )}
      {(id === "social" || id === "content" || id === "ads") && (
        <>
          <circle cx="42" cy="78" r="15" fill="#718b62" />
          <text x="67" y="83" fontSize="19" fill="#314d37">
            {id === "social"
              ? "@theeverydaystore"
              : id === "ads"
                ? "The Everyday Store · Sponsored"
                : "The story behind every stitch"}
          </text>
          <rect x="25" y="108" width="276" height="204" rx="9" fill="#d3dcc0" />
          <circle cx="160" cy="209" r="76" fill="#b5c79e" />
          <Bag x={163} y={219} scale={1.13} />
          {id === "content" && (
            <>
              <circle cx="161" cy="208" r="25" fill="#fff9e9" opacity=".88" />
              <path d="M155 195l20 13-20 13Z" fill="#406142" />
              <rect
                x="43"
                y="288"
                width="239"
                height="4"
                rx="2"
                fill="#f4eed7"
              />
              <rect
                x="43"
                y="288"
                width={239 * progress}
                height="4"
                rx="2"
                fill="#456343"
              />
            </>
          )}
          <text x="326" y="144" fill="#425d3d" fontSize="18">
            {id === "ads"
              ? "Meet your new favourite."
              : id === "content"
                ? "From our hands to yours."
                : "The new collection is here."}
          </text>
          <text x="326" y="177" fill="#7b856b" fontSize="14">
            Thoughtfully made. Ready for you.
          </text>
          <text x="326" y="212" fill="#ae725a" fontSize="26">
            ♡ ↗ ◌
          </text>
          <rect
            x="321"
            y="245"
            width="253"
            height="48"
            rx="11"
            fill="#e4ead6"
          />
          <text x="337" y="274" fill="#3b613e" fontSize="15">
            {id === "ads"
              ? "“Is this bag available?”"
              : id === "content"
                ? "“I want to see this in person!”"
                : "“Can I visit your shop?”"}
          </text>
        </>
      )}
      {id === "seo" && (
        <>
          <rect
            x="24"
            y="62"
            width="552"
            height="43"
            rx="21"
            fill="#fffdf6"
            stroke="#d6deca"
          />
          <circle
            cx="47"
            cy="82"
            r="8"
            stroke="#739267"
            strokeWidth="2"
            fill="none"
          />
          <path d="M53 88l6 6" stroke="#739267" strokeWidth="2" />
          <text x="74" y="90" fontSize="20" fill="#4b6343">
            Handmade bags near me
          </text>
          <rect
            x="322"
            y="122"
            width="255"
            height="203"
            rx="9"
            fill="#dbe4cb"
          />
          <path
            d="M325 177l249 86M385 123l50 199M325 285l248-132"
            stroke="#f9f6e8"
            strokeWidth="17"
            fill="none"
          />
          <path
            d="M349 290L429 238L472 177"
            fill="none"
            stroke="#74955a"
            strokeWidth="5"
            strokeDasharray="8 6"
            strokeDashoffset={-time * 12}
          />
          <path
            d="M452 165a20 20 0 1 1 40 0q0 17-20 36q-20-19-20-36"
            fill="#4f754d"
          />
          <circle cx="472" cy="164" r="7" fill="#f0efd9" />
          <text x="29" y="159" fill="#385638" fontSize="23">
            The Everyday Store
          </text>
          <text x="29" y="192" fill="#b18b47" fontSize="20">
            ★★★★★
          </text>
          <text x="29" y="223" fill="#6a7e5d" fontSize="15">
            Handmade bags · Open today
          </text>
          <rect x="29" y="254" width="189" height="43" rx="21" fill="#466c45" />
          <text
            x="123"
            y="281"
            textAnchor="middle"
            fill="#f8f2de"
            fontSize="17"
          >
            Get directions ↗
          </text>
        </>
      )}
      {id === "automation" && (
        <>
          <text x="28" y="87" fontSize="23" fill="#3b593c">
            One order. Everything connected.
          </text>
          {["Order received", "Details saved", "Customer notified"].map(
            (s, i) => (
              <g key={s} transform={`translate(${26 + i * 189} 127)`}>
                {i < 2 && (
                  <path
                    d="M152 68h42l-8-6m8 6-8 6"
                    stroke="#a3b18e"
                    strokeWidth="3"
                    fill="none"
                  />
                )}
                <rect
                  width="166"
                  height="145"
                  rx="15"
                  fill={time > i * 0.8 ? "#e0e9cc" : "#ececdf"}
                  stroke="#cbd6b9"
                />
                <circle cx="82" cy="46" r="24" fill="#6e8d5b" />
                <path
                  d="M71 45l8 8 15-17"
                  stroke="#f9f5df"
                  strokeWidth="4"
                  fill="none"
                  opacity={ease((time - i * 0.8) / 0.4)}
                />
                <text
                  x="83"
                  y="97"
                  textAnchor="middle"
                  fontSize="16"
                  fill="#435e3c"
                >
                  {s}
                </text>
                <text
                  x="83"
                  y="122"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#7a8c68"
                >
                  {time > i * 0.8 ? "Done ✓" : "Waiting"}
                </text>
              </g>
            ),
          )}
          <text
            x="300"
            y="317"
            textAnchor="middle"
            fontSize="15"
            fill="#647b52"
          >
            While you look after your customers.
          </text>
        </>
      )}
      {id === "reputation" && (
        <>
          <text x="29" y="84" fontSize="23" fill="#385638">
            The Everyday Store · Reviews
          </text>
          <text x="32" y="128" fontSize="28" fill="#bd984e">
            ★★★★★
          </text>
          <rect x="28" y="151" width="545" height="71" rx="12" fill="#ecebdc" />
          <text x="47" y="181" fill="#465d3e" fontSize="18">
            “Beautiful bags and such a welcoming shop.”
          </text>
          <text x="47" y="207" fill="#7f8b6e" fontSize="13">
            A happy customer
          </text>
          <path
            d="M43 229v33h25"
            fill="none"
            stroke="#b5c39e"
            strokeWidth="2"
          />
          <rect x="78" y="238" width="495" height="82" rx="12" fill="#dce8cd" />
          <text x="96" y="267" fill="#3f6039" fontSize="17">
            “Thank you for visiting! It was lovely to meet you.”
          </text>
          <text x="96" y="295" fill="#66865a" fontSize="13">
            A thoughtful reply, in the owner’s voice.
          </text>
        </>
      )}
      {id === "crm" && (
        <>
          <text x="28" y="87" fontSize="23" fill="#3b593c">
            Every enquiry has a next step.
          </text>
          {["INTERESTED", "FOLLOW UP", "VISITED"].map((s, i) => (
            <g key={s} transform={`translate(${25 + i * 189} 113)`}>
              <rect width="171" height="203" rx="11" fill="#e5e9d7" />
              <text
                x="17"
                y="30"
                fill="#6c7e5c"
                fontSize="12"
                letterSpacing="1"
              >
                {s}
              </text>
              <rect
                x="12"
                y="131"
                width="147"
                height="53"
                rx="7"
                fill="#f5f3e6"
              />
              <path d="M27 149h85m-85 14h58" stroke="#ced6bd" strokeWidth="4" />
            </g>
          ))}
          <g transform={`translate(${38 + ease(time / 4) * 377} 164)`}>
            <rect
              width="145"
              height="67"
              rx="9"
              fill="#f9f4df"
              stroke="#a9ba8e"
              strokeWidth="2"
            />
            <text x="13" y="26" fontSize="16" fill="#405b38">
              Asha · Tote bag
            </text>
            <text x="13" y="49" fontSize="12" fill="#73845f">
              {time > 3 ? "Visit confirmed ✓" : "Send a friendly reply"}
            </text>
          </g>
        </>
      )}
      {id === "consulting" && (
        <>
          <text x="29" y="86" fontSize="23" fill="#385638">
            A plan for the next chapter.
          </text>
          {[
            "Launch the new collection",
            "Share its story online",
            "Review what customers ask",
          ].map((s, i) => (
            <g key={s} transform={`translate(28 ${110 + i * 72})`}>
              <rect
                width="544"
                height="60"
                rx="10"
                fill={i === 0 ? "#dce7c9" : "#eeecdd"}
              />
              <circle
                cx="32"
                cy="30"
                r="17"
                fill={i === 0 ? "#6a8955" : "#d2d9c0"}
              />
              <text
                x="32"
                y="36"
                textAnchor="middle"
                fontSize="17"
                fill={i === 0 ? "#f6f4df" : "#6b7d58"}
              >
                {i === 0 && time > 2 ? "✓" : i + 1}
              </text>
              <text x="67" y="36" fontSize="19" fill="#46603c">
                {s}
              </text>
            </g>
          ))}
        </>
      )}
      {!compact && (
        <g
          transform={`translate(${475 - progress * 70} ${282 - progress * 22})`}
        >
          <path
            d="M0 0l7 28 6-9 10-2Z"
            fill="#294a35"
            stroke="#fff9e9"
            strokeWidth="2"
          />
        </g>
      )}
    </g>
  );
}

function Discovery({ story, time }: { story: HeroStory; time: number }) {
  if (story.id === "websites")
    return <Shop story={story} time={time} busy={false} />;
  const internal = ["automation", "crm", "consulting"].includes(story.id);
  return (
    <g>
      <rect width="960" height="600" fill="#e5dfca" />
      <circle cx="740" cy="136" r="220" fill="#d5dcc3" />
      <path d="M0 499H960V600H0Z" fill="#c4c4a5" />
      <path d="M46 114H251V403H46Z" fill="#9bab8d" />
      <path d="M61 129H236V388H61Z" fill="#c8d4b4" />
      <path d="M150 129V388M61 260H236" stroke="#e9e1c8" strokeWidth="8" />
      <Person
        x={164}
        y={544}
        kind={internal ? "owner" : "woman"}
        scale={1.05}
        time={time}
        phone={!internal}
        arm={internal ? 0.55 : 0}
      />
      <g
        transform={`translate(303 ${126 + Math.sin(time) * 2}) scale(.99)`}
        filter="url(#story-shadow)"
      >
        <ServiceScreen story={story} time={time} />
      </g>
      <Bubble
        x={54}
        y={40}
        width={430}
        line1={
          internal
            ? "A simpler way to run my business."
            : story.id === "seo"
              ? "A lovely shop, just around the corner!"
              : story.id === "reputation"
                ? "These reviews sound wonderful."
                : "Oh, I’d love to see this in person."
        }
      />
      <g transform="translate(359 504)">
        <rect width="514" height="51" rx="25" fill="#38593d" />
        <text x="257" y="32" textAnchor="middle" fontSize="19" fill="#eff0db">
          {story.action} →
        </text>
      </g>
    </g>
  );
}

function Office({ time }: { time: number }) {
  const arrival = ease(time / 3.6);
  return (
    <g>
      <rect width="960" height="600" fill="#dddcc5" />
      <path d="M0 470H960V600H0Z" fill="#b7bd9e" />
      <rect x="34" y="83" width="213" height="395" rx="4" fill="#466049" />
      <rect x="51" y="102" width="181" height="376" fill="#e2cfaa" />
      <text x="140" y="137" textAnchor="middle" fontSize="17" fill="#6d704f">
        SHOP → OFFICE
      </text>
      <path d="M53 328H231V390H53Z" fill="#7a8c64" />
      <Bag x={109} y={306} scale={0.43} />
      <Bag x={184} y={306} scale={0.4} color="#7b8b60" />
      <rect x="654" y="67" width="220" height="219" rx="100" fill="#a4b492" />
      <path d="M768 68V286M654 189H874" stroke="#dedfc7" strokeWidth="7" />
      <rect x="339" y="97" width="170" height="104" rx="3" fill="#f0ead4" />
      <text
        x="424"
        y="139"
        textAnchor="middle"
        fontSize="22"
        fill="#54704a"
        fontFamily="Georgia, serif"
      >
        Small business.
      </text>
      <text
        x="424"
        y="171"
        textAnchor="middle"
        fontSize="22"
        fill="#54704a"
        fontFamily="Georgia, serif"
      >
        Big heart.
      </text>
      <Person
        x={152 + arrival * 351}
        y={523}
        scale={1.03}
        time={time}
        walk={time < 3.6}
        arm={arrival * 0.35}
      />
      <path
        d="M611 449L588 566M856 449L883 566"
        stroke="#8a7750"
        strokeWidth="16"
      />
      <path d="M554 420H864L909 449H590Z" fill="#b29363" />
      <path d="M590 449H909V461H590Z" fill="#8d7753" />
      <g transform="translate(680 314)">
        <path d="M0 0H141L158 107H18Z" fill="#355342" />
        <path d="M10 10H132L145 95H27Z" fill="#dbe5c7" />
        <Bag x={86} y={58} scale={0.38} />
        <path d="M18 107H158L185 119H45Z" fill="#91a184" />
      </g>
      <path d="M606 398h25v29q-12 8-25 0Z" fill="#eee7ce" />
      <path
        d="M631 405q21-4 10 15h-10"
        fill="none"
        stroke="#eee7ce"
        strokeWidth="5"
      />
      <Bubble
        x={280}
        y={226}
        width={307}
        line1="What a lovely day!"
        line2="Let’s check the laptop."
        opacity={ease(time / 0.8)}
      />
    </g>
  );
}

function Finale({ story, time }: { story: HeroStory; time: number }) {
  const avatar = ease((time - 1) / 0.7);
  return (
    <g>
      <rect width="960" height="600" fill="#dddcc6" />
      <path d="M0 445H960V600H0Z" fill="#b4976b" />
      <path d="M0 486H960M0 562H960" stroke="#927a55" strokeOpacity=".25" />
      <Person
        x={142}
        y={638}
        scale={1.52}
        time={time}
        seated
        arm={time > 3 ? 0.9 : 0.2}
      />
      <g transform="translate(327 118)">
        <rect x="-13" y="-13" width="626" height="374" rx="19" fill="#344d3c" />
        <ServiceScreen story={story} time={time + 4} compact />
        <path d="M-13 361H613L649 390H-53Z" fill="#93a389" />
        <path d="M232 370H365L380 380H215Z" fill="#71846c" />
      </g>
      <g
        opacity={avatar}
        transform={`translate(784 ${366 + (1 - avatar) * 40})`}
      >
        <rect
          x="-10"
          y="-100"
          width="129"
          height="139"
          rx="17"
          fill="#f6f2df"
          stroke="#9eaf88"
          strokeWidth="2"
        />
        <g transform="translate(49 37)">
          <Person x={0} y={0} scale={0.43} kind="team" time={time} arm={1} />
        </g>
        <rect x="-10" y="19" width="129" height="28" rx="9" fill="#385c40" />
        <text x="54" y="38" textAnchor="middle" fontSize="16" fill="#f5f1dd">
          forma ✳
        </text>
      </g>
      <Bubble
        x={30}
        y={50}
        width={276}
        line1="Thank you, FORMA!"
        opacity={ease((time - 2) / 0.5)}
      />
      <Bubble
        x={625}
        y={41}
        width={294}
        line1="You’re welcome!"
        line2="We’re here for you."
        dark
        opacity={ease((time - 4.3) / 0.6)}
      />
      <g opacity={ease((time - 6.5) / 0.6)} transform="translate(337 540)">
        <circle cx="10" cy="-5" r="10" fill="#496b3f" />
        <path d="M5-5l4 4 7-9" fill="none" stroke="#f5f0d9" strokeWidth="2" />
        <text x="30" y="1" fontSize="19" fill="#314c30">
          {story.result}
        </text>
      </g>
    </g>
  );
}

export function ServiceStoryArtwork({
  story,
  time,
}: {
  story: HeroStory;
  time: number;
}) {
  const shot = time < 7 ? 0 : time < 15 ? 1 : time < 20 ? 2 : 3;
  const local = time - [0, 7, 15, 20][shot];
  const transition = local === 0 ? 0 : 1 - ease(local / 0.3);
  return (
    <svg
      viewBox="0 0 960 600"
      className="service-story-art"
      role="img"
      aria-label={`${story.name}: ${story.captions[shot]}`}
    >
      <defs>
        <filter id="story-shadow" x="-20%" y="-20%" width="150%" height="160%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="10"
            floodColor="#25372a"
            floodOpacity=".16"
          />
        </filter>
      </defs>
      {shot === 0 ? (
        <Discovery story={story} time={local} />
      ) : shot === 1 ? (
        <Shop story={story} time={local} busy />
      ) : shot === 2 ? (
        <Office time={local} />
      ) : (
        <Finale story={story} time={local} />
      )}
      {shot === 1 && story.id !== "websites" && (
        <g transform="translate(681 198)">
          <rect width="250" height="115" rx="13" fill="#fff7e3" opacity=".97" />
          <text x="15" y="31" fontSize="13" fill="#748261">
            {story.short.toUpperCase()} AT WORK
          </text>
          <text x="15" y="61" fontSize="17" fill="#38573c">
            {story.id === "automation"
              ? "Confirmation sent ✓"
              : story.id === "crm"
                ? "Follow-up → shop visit"
                : story.id === "consulting"
                  ? "Collection launched ✓"
                  : story.id === "seo"
                    ? "Search → directions → visit"
                    : story.id === "reputation"
                      ? "Review → trust → visit"
                      : story.id === "ads"
                        ? "Ad → enquiry → visit"
                        : story.id === "content"
                          ? "Reel → interest → visit"
                          : "Post → message → visit"}
          </text>
          <text x="15" y="91" fontSize="14" fill="#748261">
            {story.id === "automation"
              ? "The owner keeps serving."
              : "A new conversation begins."}
          </text>
        </g>
      )}
      <rect
        width="960"
        height="600"
        fill="#e9e2cb"
        opacity={transition}
        pointerEvents="none"
      />
    </svg>
  );
}
