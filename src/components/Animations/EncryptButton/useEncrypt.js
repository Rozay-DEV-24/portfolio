import { useEffect, useRef, useState } from "react";

const DEFAULT_CHARS = "!@#$%^&*():{};|,.<>/?";

export function useScramble(
  targetText,
  { cyclesPerLetter = 2, shuffleMs = 50, chars = DEFAULT_CHARS } = {}
) {
  const [text, setText] = useState(targetText);
  const ref = useRef(null);

  const stop = () => {
    clearInterval(ref.current);
    setText(targetText);
  };

  const start = () => {
    clearInterval(ref.current);
    let pos = 0;
    ref.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((ch, i) => (pos / cyclesPerLetter > i ? ch : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= targetText.length * cyclesPerLetter) stop();
    }, shuffleMs);
  };

  useEffect(() => () => clearInterval(ref.current), []);
  useEffect(() => setText(targetText), [targetText]);

  return { text, start, stop };
}
