import { motion } from "framer-motion";
// import { FiLock } from "react-icons/fi";
import { useScramble } from "./useEncrypt";
import "./encrypt-button.css";

export default function EncryptButton({
  children,                 // <- use children as the label
  label,
  className = "",
  href,                      // if present, render as <a>
  onClick,
  ...rest
}) {
  const labelText = (children ?? label ?? "Join"); // default to "Join"
  const { text, start, stop } = useScramble(labelText, {
    cyclesPerLetter: 2,
    shuffleMs: 50,
  });

  // Render an anchor if href is passed; otherwise a button
  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      type={href ? undefined : "button"}
      className={`scramble-btn ${className}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onClick={onClick}
      {...rest}
    >
      <div className="scramble-btn__content">
        <span>{text}</span>
      </div>

      {/* animated sheen */}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1, ease: "linear" }}
        className="scramble-btn__sheen"
      />
    </Comp>
  );
}
