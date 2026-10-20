import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import "../styles/website-film.css";
import { WebsiteFilmArtwork } from "./WebsiteFilmArtwork";
import type { ReactNode } from "react";

const shots = [
  [
    "A lovely shop. Waiting to be discovered.",
    "A worried jewellery owner sits in his quiet shop, without a website to share.",
  ],
  [
    "He finds us. And takes the first step.",
    "He opens FORMA on his phone and taps Contact us.",
  ],
  [
    "“We’ll help you bring your shop online.”",
    "The owner explains his problem and the FORMA team reassures him.",
  ],
  [
    "His collection. Beautifully brought online.",
    "A jewellery website takes shape with product pages and online ordering.",
  ],
  [
    "The door opens. So do new possibilities.",
    "Customers visit the shop and a new order appears on the owner's laptop.",
  ],
  [
    "Your next chapter starts with a hello.",
    "A close-up of the finished website. A FORMA character gives a thumbs-up and winks: You’re welcome.",
  ],
];

export function WebsiteFilm({
  storyShots = shots,
  artwork,
  title = "ONE SHOP. A NEW CHAPTER.",
  note = "Fictional shop and illustrative orders.",
  chapters = ["A quiet shop", "A helping hand", "A new beginning"],
}: {
  storyShots?: string[][];
  artwork?: (shot: number) => ReactNode;
  title?: string;
  note?: string;
  chapters?: string[];
}) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const shot = Math.min(5, Math.floor(time / 5));
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => {
      if (media.matches) setPlaying(false);
    };
    media.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", stop);
    };
  }, []);
  useEffect(() => {
    if (!playing || !visible) return;
    let previous = performance.now();
    const timer = setInterval(() => {
      const now = performance.now();
      const delta = (now - previous) / 1000;
      previous = now;
      if (!document.hidden) setTime((t) => Math.min(30, t + delta));
    }, 100);
    return () => clearInterval(timer);
  }, [playing, visible]);
  useEffect(() => {
    if (time >= 30) setPlaying(false);
  }, [time]);
  return (
    <section
      ref={ref}
      className={`website-film ${playing && visible ? "wf-playing" : "wf-paused"}`}
      aria-label={`${title} A 30-second illustrated story`}
    >
      <div className="wf-top">
        <span>{title}</span>
        <span>00:30 · AN ILLUSTRATED STORY</span>
      </div>
      <div className="wf-screen">
        {artwork ? (
          artwork(shot)
        ) : (
          <WebsiteFilmArtwork shot={shot} description={storyShots[shot][1]} />
        )}
        <div className="wf-scene-label">
          {String(shot + 1).padStart(2, "0")} / 06
        </div>
      </div>
      <p className="wf-caption">{storyShots[shot][0]}</p>
      <div className="wf-chapters">
        {chapters.map((name, i) => (
          <button
            key={name}
            aria-current={
              Math.floor(Math.min(time, 29.9) / 10) === i ? "step" : undefined
            }
            onClick={() => {
              setTime(i * 10);
              setPlaying(true);
            }}
          >
            <span>
              0{i + 1}{" "}
              <small>{i === 0 ? "00:00" : i === 1 ? "00:10" : "00:20"}</small>
            </span>
            {name}
            <i>
              <b
                style={{
                  width: `${Math.max(0, Math.min(100, (time - i * 10) * 10))}%`,
                }}
              />
            </i>
          </button>
        ))}
      </div>
      <div className="wf-controls">
        <button
          aria-label={playing ? "Pause film" : "Play film"}
          onClick={() => {
            if (time >= 30) setTime(0);
            setPlaying(!playing);
          }}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <input
          aria-label="Story progress in seconds"
          type="range"
          min="0"
          max="30"
          step=".1"
          value={time}
          onChange={(e) => {
            setTime(Number(e.target.value));
            setPlaying(false);
          }}
        />
        <span>
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          :
          {Math.floor(time % 60)
            .toString()
            .padStart(2, "0")}{" "}
          / 00:30
        </span>
        <button
          aria-label="Replay film"
          onClick={() => {
            setTime(0);
            setPlaying(true);
          }}
        >
          <RotateCcw size={18} />
        </button>
      </div>
      <p className="wf-note">{note}</p>
    </section>
  );
}
