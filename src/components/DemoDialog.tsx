import { useEffect, useRef, useState } from "react";
import { ArrowRight, Monitor, Smartphone, X } from "lucide-react";
import { services, videos, type ServiceId } from "../data/site";
import { ServiceVisual } from "./ServiceVisual";

export function DemoDialog({
  serviceId,
  onClose,
}: {
  serviceId: ServiceId | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const [mobile, setMobile] = useState(false);
  const service = services.find((s) => s.id === serviceId);
  useEffect(() => {
    if (!serviceId) return;
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    setStep(0);
    setMobile(false);
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
  }, [serviceId]);
  return (
    <dialog
      ref={dialog}
      className="demo-dialog"
      onCancel={onClose}
      aria-labelledby="demo-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      {service && (
        <>
          <button
            className="dialog-close icon-button"
            aria-label="Close preview"
            onClick={onClose}
          >
            <X />
          </button>
          <span className="eyebrow">
            {videos[service.id] ? "Video walkthrough" : "Interactive concept"}
          </span>
          <h2 id="demo-title">{service.name}</h2>
          {videos[service.id] ? (
            <video controls playsInline src={videos[service.id]} />
          ) : (
            <div className="demo-layout">
              <div>
                <ServiceVisual type={service.id} step={step} mobile={mobile} />
                {service.id === "websites" && (
                  <div className="device-switch">
                    <button
                      aria-pressed={!mobile}
                      onClick={() => setMobile(false)}
                    >
                      <Monitor size={15} />
                      Desktop
                    </button>
                    <button
                      aria-pressed={mobile}
                      onClick={() => setMobile(true)}
                    >
                      <Smartphone size={15} />
                      Mobile
                    </button>
                  </div>
                )}
              </div>
              <div className="demo-copy">
                <span className="eyebrow">Step 0{step + 1}</span>
                <h3>{service.steps[step][0]}</h3>
                <p>{service.steps[step][1]}</p>
                <div className="step-dots">
                  {service.steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStep(i)}
                      aria-label={`Show step ${i + 1}`}
                      aria-current={i === step ? "step" : undefined}
                    />
                  ))}
                </div>
                <button
                  className="button dark"
                  onClick={() => setStep((step + 1) % 3)}
                >
                  {step === 2 ? "Start again" : "Next step"}
                  <ArrowRight size={18} />
                </button>
                <p className="fine-print">
                  Illustrative preview. No live campaign, messages or enquiries
                  are created. Final video to follow.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </dialog>
  );
}
