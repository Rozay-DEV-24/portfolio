import { useRef } from "react";
import "./tilt-card.css";

export default function TiltCard({ children, src, alt = "", maxTilt = 12 }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;

    const rx = (-py * maxTilt).toFixed(2);
    const ry = (px * maxTilt).toFixed(2);

    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${x}px`);
    el.style.setProperty("--gy", `${y}px`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return (
    <div
      ref={ref}
      className="tilt-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children || <img className="tilt-img" src={src} alt={alt} />}
    </div>
  );
}