import { WebsiteFilm } from "./WebsiteFilm";
import { ServiceFilmArtwork } from "./ServiceFilmArtwork";
import { serviceFilms } from "../data/serviceFilms";

export function ServiceStory({ id }: { id: string }) {
  const story = serviceFilms[id];
  if (!story) return null;
  const captions = [
    story.problem.join(" "),
    "He finds us. And takes the first step.",
    "We listen. Then make a plan together.",
    story.work,
    story.outcome,
    "We’re here for your next chapter.",
  ];
  return (
    <WebsiteFilm
      key={id}
      title={`ONE SHOP. ${story.name.toUpperCase()}.`}
      storyShots={captions.map((c) => [c, c])}
      artwork={(shot) => (
        <ServiceFilmArtwork id={id} shot={shot} description={captions[shot]} />
      )}
      note="Illustrated example · results depend on your business and agreed scope."
    />
  );
}
