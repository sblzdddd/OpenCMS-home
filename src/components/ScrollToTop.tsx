import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration to ensure we stay at top on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Use instant behavior to override CSS smooth scrolling
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
