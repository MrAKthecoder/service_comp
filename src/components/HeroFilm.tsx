import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { heroStories, STORY_SECONDS, storyCuts } from "../data/heroStories";
import { ServiceStoryArtwork } from "./ServiceStoryArtwork";

export function HeroFilm() {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(!document.hidden);
  const storyIndex = Math.floor(position / STORY_SECONDS);
  const time = position % STORY_SECONDS;
  const story = heroStories[storyIndex];
  const shot = time < 7 ? 0 : time < 15 ? 1 : time < 20 ? 2 : 3;
  const selectStory = (index: number) =>
    setPosition(
      ((index + heroStories.length) % heroStories.length) * STORY_SECONDS,
    );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setTabVisible(!document.hidden);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      if (motion.matches) setPlaying(false);
    };
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  useEffect(() => {
    if (!playing || !visible || !tabVisible) return;
    let frame = 0,
      previous = performance.now();
    const tick = (now: number) => {
      if (now - previous >= 1000 / 30) {
        const delta = Math.min(now - previous, 100) / 1000;
        setPosition((p) => (p + delta) % (heroStories.length * STORY_SECONDS));
        previous = now;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, visible, tabVisible]);

  return (
    <section
      ref={ref}
      className="story-hero"
      aria-label="Nine ways FORMA helps your business"
      data-story={story.id}
      data-shot={shot}
      data-playing={playing}
    >
      <div className="story-hero-layout">
        <div className="story-hero-intro">
          <span className="story-eyebrow">
            <i /> SMALL BUSINESS. BIG POSSIBILITIES.
          </span>
          <h1>
            Good things <br />
            happen with <br />
            <em>a little help.</em>
          </h1>
          <p>
            A shop. A happy owner. A team behind the scenes. <br />
            See what we can do for your business.
          </p>
          <Link className="story-contact" to="/contact">
            Let’s talk about your business <ArrowUpRight size={17} />
          </Link>
          <span className="story-watch-note">Nine services. Nine little stories.<br />Watch them unfold, one after another.</span>
        </div>
        <div className="story-cinema">
          <div className="story-cinema-heading">
            <div>
              <span className="story-live-dot" />
              <span>THE EVERYDAY STORE</span>
              <span className="story-heading-divider">/</span>
              <strong>{story.name}</strong>
            </div>
            <span>{String(storyIndex + 1).padStart(2, "0")} / 09</span>
          </div>
          <div className="story-screen">
            <ServiceStoryArtwork story={story} time={time} />
            <div className="story-shot-label">
              {
                [
                  "THE CONNECTION",
                  "IN THE SHOP",
                  "BACK AT HIS DESK",
                  "A LITTLE THANK YOU",
                ][shot]
              }
            </div>
          </div>
          <div className="story-caption" aria-live="off">
            <span>0{shot + 1}</span>
            <div>
              <h2>{story.title}</h2>
              <p>{story.captions[shot]}</p>
            </div>
          </div>
          <div className="story-transport">
            <button
              aria-label={playing ? "Pause stories" : "Play stories"}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? <Pause size={17} /> : <Play size={17} />}
            </button>
            <button
              aria-label="Replay current story"
              onClick={() => selectStory(storyIndex)}
            >
              <RotateCcw size={16} />
            </button>
            <label className="story-seek">
              <span className="sr-only">Story progress</span>
              <input
                type="range"
                min="0"
                max="29.99"
                step=".1"
                value={time}
                aria-label="Story progress"
                aria-valuetext={`${Math.floor(time)} of 30 seconds`}
                onChange={(e) =>
                  setPosition(
                    storyIndex * STORY_SECONDS + Number(e.target.value),
                  )
                }
                style={{
                  background: `linear-gradient(to right, #65e696 ${(time / STORY_SECONDS) * 100}%, #d5dfbc26 ${(time / STORY_SECONDS) * 100}%)`,
                }}
              />
            </label>
            <span className="story-time">
              {String(Math.floor(time)).padStart(2, "0")} / 30s
            </span>
            <button
              aria-label="Previous service story"
              onClick={() => selectStory(storyIndex - 1)}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next service story"
              onClick={() => selectStory(storyIndex + 1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div
            className="story-scene-links"
            role="group"
            aria-label="Scenes in this story"
          >
            {["Discover", "Shop", "Office", "Thank you"].map((name, i) => (
              <button
                key={name}
                aria-label={`Show ${name.toLowerCase()} scene`}
                aria-pressed={shot === i}
                onClick={() =>
                  setPosition(storyIndex * STORY_SECONDS + storyCuts[i] + 0.4)
                }
              >
                {name}
              </button>
            ))}
            <Link to={`/services/${story.id}`}>
              Explore this service <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="story-playlist"
        role="group"
        aria-label="Choose a service story"
      >
        {heroStories.map((s, i) => (
          <button
            key={s.id}
            aria-pressed={storyIndex === i}
            onClick={() => selectStory(i)}
          >
            <span className="story-playlist-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s.short}</span>
            <span className="story-playlist-line">
              <span
                style={{
                  transform: `scaleX(${i === storyIndex ? time / STORY_SECONDS : i < storyIndex ? 1 : 0})`,
                }}
              />
            </span>
          </button>
        ))}
      </div>
      <div className="story-hero-footnote">
        <span>YOUR BUSINESS. OUR FOCUS.</span>
        <span>Illustrated stories of what our services can do.</span>
      </div>
    </section>
  );
}


