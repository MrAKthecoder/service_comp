import { useId } from "react";
import {
  Background,
  Character,
  Necklace,
  PhoneScene,
  Store,
} from "./WebsiteFilmArtwork";
import { serviceFilms } from "../data/serviceFilms";
import "../styles/service-film.css";

function Product({
  x = 0,
  y = 0,
  scale = 1,
}: {
  x?: number;
  y?: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect width="150" height="164" rx="14" fill="#e8dcc1" />
      <path d="M32 143L43 44Q75 16 108 44L122 143Z" fill="#416550" />
      <g transform="translate(77 76) scale(.56)">
        <Necklace />
      </g>
    </g>
  );
}

function Panel({ id, result }: { id: string; result: boolean }) {
  const story = serviceFilms[id];
  return (
    <g className="sf-panel">
      <rect width="740" height="420" rx="20" fill="#faf7ed" />
      <path d="M0 56H740" stroke="#d9dece" />
      <circle cx="24" cy="28" r="4" fill="#829b81" />
      <circle cx="39" cy="28" r="4" fill="#a8b89b" />
      <text x="65" y="35" fontSize="18">
        ATELIER / {story.name}
      </text>
      {id === "social" && (
        <>
          <text x="30" y="98" fontSize="22">
            {result
              ? "Your collection, in the conversation."
              : "A month with a little more rhythm."}
          </text>
          {[0, 1, 2].map((n) => (
            <g
              key={n}
              className="sf-reveal"
              style={{ animationDelay: `${n * 0.4}s` }}
              transform={`translate(${30 + n * 236} 122)`}
            >
              <Product scale={1.3} />
              <rect y="225" width="195" height="42" rx="10" fill="#e4ebdc" />
              <text x="13" y="252" fontSize="17">
                {
                  [
                    "Monday · The craft",
                    "Wednesday · New in",
                    "Friday · Your story",
                  ][n]
                }
              </text>
            </g>
          ))}
        </>
      )}
      {id === "content" && (
        <>
          <rect x="28" y="78" width="410" height="253" rx="15" fill="#d5deca" />
          <g className="sf-product-pan">
            <Product x={132} y={83} scale={1.45} />
          </g>
          <text x="466" y="116" fontSize="25">
            Made with care.
          </text>
          <text x="466" y="150" fontSize="17">
            A closer look at the craft.
          </text>
          <circle cx="544" cy="240" r="40" fill="#31593f" />
          <path d="M534 220l29 20-29 20Z" fill="#f5eedb" />
          {[0, 1, 2, 3, 4, 5, 6].map((n) => (
            <rect
              key={n}
              x={30 + n * 98}
              y="353"
              width="86"
              height="31"
              rx="6"
              fill={n % 2 ? "#95ad91" : "#d4b77e"}
            />
          ))}
          <path
            className="sf-playhead"
            d="M35 343v51"
            stroke="#244632"
            strokeWidth="4"
          />
        </>
      )}
      {id === "seo" && (
        <>
          <rect x="28" y="81" width="340" height="48" rx="24" fill="#e7ecdf" />
          <text x="47" y="111" fontSize="19">
            Jewellery shops near me
          </text>
          <text x="34" y="181" fontSize="26">
            The Jewellery Studio
          </text>
          <text x="34" y="218" fontSize="18">
            Handcrafted pieces. Personal service.
          </text>
          <text x="34" y="256" fontSize="18">
            Opening hours · Photos · Contact
          </text>
          <rect x="32" y="291" width="151" height="44" rx="22" fill="#31593f" />
          <text x="56" y="319" className="wa-white" fontSize="18">
            Get directions
          </text>
          <rect
            x="398"
            y="81"
            width="314"
            height="305"
            rx="15"
            fill="#e1e6d4"
          />
          <path
            d="M410 160h286M480 90v282M410 287h286M630 90v282"
            stroke="#faf7ed"
            strokeWidth="19"
          />
          <path
            className="sf-route"
            d="M430 331H480V225H591V166"
            stroke="#769a6b"
            strokeWidth="7"
            fill="none"
          />
          <g className="sf-pin">
            <path
              d="M563 151a28 28 0 1 1 56 0q0 22-28 46-28-24-28-46"
              fill="#31593f"
            />
            <circle cx="591" cy="148" r="10" fill="#f1e3bc" />
          </g>
        </>
      )}
      {id === "ads" && (
        <>
          <Product x={32} y={82} scale={1.65} />
          <text x="32" y="379" fontSize="20">
            The new collection · Sponsored
          </text>
          <path
            d="M308 216h61l-12-12m12 12-12 12"
            fill="none"
            stroke="#74906e"
            strokeWidth="4"
          />
          <text x="399" y="116" fontSize="25">
            Reach the right people.
          </text>
          {[
            "Local audience",
            "Collection campaign",
            "A simple way to enquire",
          ].map((v, n) => (
            <g
              key={v}
              className="sf-reveal"
              style={{ animationDelay: `${n * 0.55}s` }}
            >
              <rect
                x="398"
                y={144 + n * 66}
                width="312"
                height="51"
                rx="12"
                fill="#e6ebdc"
              />
              <circle cx="421" cy={169 + n * 66} r="7" fill="#678e61" />
              <text x="439" y={175 + n * 66} fontSize="18">
                {v}
              </text>
            </g>
          ))}
        </>
      )}
      {id === "automation" && (
        <>
          <text x="32" y="111" fontSize="26">
            One enquiry. Less busywork.
          </text>
          <path d="M135 213H601" stroke="#b3c3a8" strokeWidth="4" />
          {["Enquiry received", "Customer saved", "Team notified"].map(
            (v, n) => (
              <g key={v} transform={`translate(${32 + n * 235} 155)`}>
                <rect width="204" height="133" rx="19" fill="#e3eada" />
                <circle
                  className="sf-check"
                  style={{ animationDelay: `${n * 0.65}s` }}
                  cx="102"
                  cy="43"
                  r="22"
                  fill="#75996a"
                />
                <path
                  d="M92 42l8 9 14-18"
                  stroke="#fff9ea"
                  strokeWidth="3"
                  fill="none"
                />
                <text x="102" y="99" textAnchor="middle" fontSize="18">
                  {v}
                </text>
              </g>
            ),
          )}
          <text x="32" y="357" fontSize="20">
            Connected tools. A routine that runs smoothly.
          </text>
        </>
      )}
      {id === "reputation" && (
        <>
          <rect x="30" y="82" width="680" height="119" rx="15" fill="#e9e5d5" />
          <circle cx="70" cy="122" r="23" fill="#b49b77" />
          <text x="63" y="130" className="wa-white" fontSize="21">
            A
          </text>
          <text x="110" y="116" fontSize="20">
            A customer’s experience
          </text>
          <text x="110" y="157" fontSize="23">
            “Such thoughtful, personal service.”
          </text>
          <g className="sf-reveal">
            <path
              d="M73 219v37h35"
              stroke="#a4b697"
              strokeWidth="3"
              fill="none"
            />
            <rect
              x="118"
              y="226"
              width="592"
              height="143"
              rx="17"
              fill="#dfebd9"
            />
            <text x="141" y="264" fontSize="17">
              RESPONSE FROM THE SHOP
            </text>
            <text x="141" y="305" fontSize="23">
              Thank you for visiting us.
            </text>
            <text x="141" y="340" fontSize="19">
              We’re glad you found something special.
            </text>
          </g>
        </>
      )}
      {id === "crm" && (
        <>
          {["New enquiries", "Follow up", "Appointment"].map((v, n) => (
            <g key={v} transform={`translate(${25 + n * 239} 86)`}>
              <rect width="214" height="303" rx="13" fill="#e6ebdf" />
              <text x="16" y="34" fontSize="21">
                {v}
              </text>
              <path d="M15 53H199" stroke="#c0cdb5" />
              {[0, 1].map((k) => (
                <g
                  key={k}
                  className="sf-reveal"
                  style={{ animationDelay: `${n * 0.5 + k * 0.3}s` }}
                >
                  <rect
                    x="14"
                    y={73 + k * 94}
                    width="185"
                    height="76"
                    rx="10"
                    fill="#fbf8ee"
                  />
                  <circle cx="36" cy={101 + k * 94} r="10" fill="#b8c9aa" />
                  <text x="55" y={106 + k * 94} fontSize="16">
                    {
                      [
                        ["Pendant enquiry", "Gift selection"],
                        ["Call tomorrow", "Send collection"],
                        ["Saturday · 11 AM", "Monday · 2 PM"],
                      ][n][k]
                    }
                  </text>
                  <text x="28" y={132 + k * 94} fontSize="13">
                    Next step saved
                  </text>
                </g>
              ))}
            </g>
          ))}
        </>
      )}
      {id === "consulting" && (
        <>
          <text x="32" y="107" fontSize="27">
            A practical plan for your shop.
          </text>
          {[
            "First · Make the shop easy to find",
            "Next · Give customers a reason to enquire",
            "Then · Review what is working",
          ].map((v, n) => (
            <g
              key={v}
              className="sf-reveal"
              style={{ animationDelay: `${n * 0.6}s` }}
            >
              <rect
                x="32"
                y={135 + n * 78}
                width="676"
                height="61"
                rx="13"
                fill={n === 0 ? "#d9e7d1" : "#eee8d8"}
              />
              <circle cx="65" cy={166 + n * 78} r="18" fill="#6c8d61" />
              <text x="59" y={172 + n * 78} className="wa-white" fontSize="18">
                {n + 1}
              </text>
              <text x="99" y={173 + n * 78} fontSize="22">
                {v}
              </text>
            </g>
          ))}
        </>
      )}
    </g>
  );
}

export function ServiceFilmArtwork({
  id,
  shot,
  description,
}: {
  id: string;
  shot: number;
  description: string;
}) {
  const story = serviceFilms[id];
  const grain = useId().replace(/:/g, "");
  return (
    <svg
      className="wa-artwork"
      viewBox="0 0 1200 660"
      role="img"
      aria-label={description}
    >
      <defs>
        <filter id={grain}>
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
          <Store problem={story.problem} status={story.status} />
        ) : shot === 1 ? (
          <PhoneScene />
        ) : shot === 2 ? (
          <PhoneScene chat request={story.request} />
        ) : (
          <>
            <Background dark={shot === 5} />
            <g transform="translate(74 113)">
              <g className={shot === 5 ? "wa-laptop-close" : ""}>
                <Panel id={id} result={shot >= 4} />
              </g>
            </g>
            <g transform="translate(1002 365) scale(.78)">
              <Character team={shot !== 4} thumbs={shot === 5} />
            </g>
            <g className="wa-welcome">
              <rect
                x="867"
                y="123"
                width="276"
                height="96"
                rx="21"
                fill="#f6efdb"
              />
              <path d="M980 217l20 20 11-20" fill="#f6efdb" />
              <text x="1005" y="162" textAnchor="middle" fontSize="21">
                {shot === 3
                  ? "Let’s make it happen."
                  : shot === 4
                    ? "That’s more like it."
                    : "You’re welcome."}
              </text>
              <text x="1005" y="193" textAnchor="middle" fontSize="15">
                {shot === 3
                  ? "We create. You review."
                  : shot === 4
                    ? "One clearer next step."
                    : "We’re here for you."}
              </text>
            </g>
            <g className="sf-reveal">
              <rect
                x="102"
                y="553"
                width="704"
                height="55"
                rx="15"
                fill={shot === 5 ? "#e3ddc4" : "#dce6d2"}
              />
              <text x="454" y="588" textAnchor="middle" fontSize="21">
                {shot === 3 ? story.steps.join("  →  ") : story.result}
              </text>
            </g>
          </>
        )}
      </g>
      <rect
        width="1200"
        height="660"
        filter={`url(#${grain})`}
        opacity=".035"
        pointerEvents="none"
      />
    </svg>
  );
}
