import {
  ArrowRight,
  Check,
  Search,
  MapPin,
  MessageCircle,
  Zap,
  Star,
} from "lucide-react";
import { media } from "../data/site";
export function ServicePreview({ id, stage }: { id: string; stage: number }) {
  if (["websites", "social", "content"].includes(id))
    return (
      <div className={`service-photo-demo photo-demo-${id}`}>
        <div className="detail-source">
          <img
            src={media.architecture}
            alt="Illustrative property photography"
          />
          <span>YOUR BUSINESS</span>
        </div>
        <ArrowRight className="detail-transform-arrow" />
        <div className="detail-output">
          <div className="detail-window-bar">
            <i />
            <i />
            <i />
            <span>
              {id === "websites"
                ? "your-business.example"
                : id === "social"
                  ? "Your social presence"
                  : "Your next reel"}
            </span>
          </div>
          <div className="detail-photo-frame">
            <img
              src={media.architecture}
              alt="Example property marketing design"
            />
            <div>
              <small>YOUR PROPERTY BUSINESS</small>
              <h3>
                A place to
                <br />
                call home.
              </h3>
              <span className="detail-faux-button">
                {id === "websites"
                  ? "Explore properties ↗"
                  : "Your next chapter starts here."}
              </span>
            </div>
            {id === "content" && <div className="detail-edit-line" />}
          </div>
          <div className="detail-output-bottom">
            {id === "websites"
              ? "Properties · About · Enquire"
              : id === "social"
                ? "MON  /  WED  /  FRI"
                : "Footage → Edit → Captions"}
            <Check size={15} />
          </div>
        </div>
        <span className="detail-result-tag">
          {
            [
              "Your material, our starting point",
              "Taking shape · preview for approval",
              "Approved work, ready for your audience",
            ][stage]
          }
        </span>
      </div>
    );
  if (id === "seo")
    return (
      <div className="search-scene">
        <div className="detail-search">
          <Search size={17} />
          <span className="typed-query">Property agents near me</span>
        </div>
        <div className="search-results">
          <div className="search-business">
            <span className="mini-label">BUSINESS PROFILE PREVIEW</span>
            <h3>Your property business</h3>
            <p>Property advice. Local knowledge.</p>
            <div>
              <span>
                <MapPin size={14} />
                Your area
              </span>
              <span>Website ↗</span>
            </div>
          </div>
          <div className="detail-map">
            <div className="map-road one" />
            <div className="map-road two" />
            <MapPin size={40} />
            <span>Your business</span>
          </div>
        </div>
        <span className="detail-result-tag">
          {
            [
              "Review your current presence",
              "Clear details. Relevant pages.",
              "An easier path to your business",
            ][stage]
          }
        </span>
      </div>
    );
  if (id === "ads")
    return (
      <div className="ad-scene">
        <div className="detail-ad">
          <img src={media.architecture} alt="Example property advertisement" />
          <span>EXAMPLE AD CREATIVE</span>
          <h3>
            Find your
            <br />
            next home.
          </h3>
          <div>
            Explore available properties <ArrowRight size={14} />
          </div>
        </div>
        <div className="ad-conversation">
          <span className="mini-label">FROM INTEREST TO ENQUIRY</span>
          <div className="example-bubble">I’d like to arrange a viewing.</div>
          <div className="example-bubble reply">
            Let’s find a time that works.
          </div>
          <span className="enquiry-status">
            <MessageCircle size={16} />
            {stage === 2
              ? "Enquiry ready for your team"
              : "A clear next step for customers"}
          </span>
        </div>
      </div>
    );
  if (id === "automation")
    return (
      <div className="automation-scene">
        <div className="automation-wire" />
        {["New request", "Review & route", "Next action"].map((label, i) => (
          <div
            className={`automation-node ${i <= stage ? "node-ready" : ""}`}
            key={label}
          >
            <span>
              {i === 1 ? <Zap /> : i === 0 ? <MessageCircle /> : <Check />}
            </span>
            <h3>{label}</h3>
            <p>
              {
                [
                  "From your agreed source",
                  "With your approval rules",
                  "Assigned to the right person",
                ][i]
              }
            </p>
          </div>
        ))}
        <span className="detail-result-tag">
          Example workflow · tools and permissions agreed first
        </span>
      </div>
    );
  if (id === "reputation")
    return (
      <div className="reputation-scene">
        <div className="review-paper">
          <div className="review-person">
            <span>AC</span>
            <div>
              A customer<small>Illustrative review</small>
            </div>
          </div>
          <div className="review-stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={21} />
            ))}
          </div>
          <h3>
            “Clear advice.
            <br />A helpful team.”
          </h3>
        </div>
        <div className="review-response">
          <span className="mini-label">YOUR BUSINESS RESPONDS</span>
          <p>
            Thank you for sharing your experience. We’re glad we could help.
          </p>
          <span>
            <Check size={14} />A response in your voice
          </span>
        </div>
      </div>
    );
  if (id === "crm")
    return (
      <div className="crm-scene">
        {["New enquiry", "In conversation", "Follow-up"].map((label, i) => (
          <div className="crm-lane" key={label}>
            <span>
              <i />
              {label}
            </span>
            {stage === i && (
              <div className="crm-lead">
                <span className="mini-label">EXAMPLE CONTACT</span>
                <h3>Alex</h3>
                <p>Interested in a property viewing.</p>
                <span className="crm-next">
                  <Check size={14} />
                  {
                    [
                      "Assign an owner",
                      "Arrange a viewing",
                      "Confirm next steps",
                    ][stage]
                  }
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  return (
    <div className="consulting-scene">
      <div className="priority-note">
        <span className="mini-label">YOUR STARTING POINT</span>
        <h3>
          Lots to do.
          <br />
          Where to start?
        </h3>
        <span>Website · Content · Enquiries</span>
      </div>
      <ArrowRight />
      <div className="priority-plan">
        <span className="mini-label">YOUR NEXT PRIORITIES</span>
        {[
          "Clarify your offer",
          "Improve your enquiry route",
          "Plan consistent content",
        ].map((label, i) => (
          <div className={i <= stage ? "priority-active" : ""} key={label}>
            <span>0{i + 1}</span>
            {label}
            <Check size={16} />
          </div>
        ))}
      </div>
    </div>
  );
}
