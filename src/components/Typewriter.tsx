"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  delay = 2500,
}: {
  words: string[];
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const word = words[index];
    let charIndex = 0;
    const type = () => {
      if (charIndex <= word.length) {
        setDisplayed(word.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 80);
      } else {
        // pause before clearing and next
        timeout = setTimeout(() => {
          setDisplayed("");
          setIndex((i) => (i + 1) % words.length);
        }, delay);
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, [index, words, delay]);

  return (
    <span className="inline-flex items-baseline">
      {displayed}
      <span className="ml-0.5 inline-block w-1 animate-blink bg-white/80" />
    </span>
  );
}