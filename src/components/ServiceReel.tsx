/** Temporary motion artwork. Replace with approved brand footage when available. */
export function ServiceReel({
  stage,
  social,
}: {
  stage: number;
  social: boolean;
}) {
  const messages = social
    ? [
        "A post worth stopping for.",
        "A story worth sharing.",
        "Your brand. Showing up.",
      ]
    : ["Find your story.", "Give it movement.", "Make it memorable."];
  return (
    <div className={`service-reel reel-frame-${stage}`}>
      <img
        className="reel-landscape reel-landscape-a"
        src="/images/editorial/mountain.jpg"
        alt="Mountain landscape in an illustrative outdoor campaign"
      />
      <img
        className="reel-landscape reel-landscape-b"
        src="/images/editorial/forest.jpg"
        alt="Forested valley in an illustrative outdoor campaign"
      />
      <div className="reel-shade" />
      <div className="reel-brand">
        FIELDWORK<span>OUTSIDE IS CALLING</span>
      </div>
      <div className="reel-title" key={stage}>
        <span>0{stage + 1} / THE OUTDOOR EDIT</span>
        <h3>{messages[stage]}</h3>
      </div>
      <div className="reel-format">
        <span>
          {social ? "POSTS · STORIES · REELS" : "CONCEPT · EDIT · SHARE"}
        </span>
        <span>↗</span>
      </div>
      <div className="reel-progress">
        <i key={stage} />
      </div>
    </div>
  );
}
