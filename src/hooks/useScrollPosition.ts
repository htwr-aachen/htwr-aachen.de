import { useEffect, useState } from "react";

/**
 * This is a small hook that updates to the current scrollY position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true }); // passive event listeners improve performance

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    return () => {}; // return noop
  }, []);

  return scrollPosition;
}
