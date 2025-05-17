import { useEffect, useState } from "react";

// مقدار مورد نیاز رو همینجا تعریف کن
const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  // بهتره تابع رو با useCallback تعریف کنی تا هشدار useEffect رو هم نگیری
  const calculateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = height > 0 ? winScroll / height : 0;
    setProgress(scrolled);
  };

  useEffect(() => {
    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY);

    if (matches) {
      window.addEventListener("scroll", calculateProgress);
      // مقدار اولیه پروگرس رو هم ست کن
      calculateProgress();
    }

    return () => window.removeEventListener("scroll", calculateProgress);
    // فقط یکبار اجرا بشه، پس []
  }, []);

  return (
    <div className="progress w-full fixed top-0 z-50">
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
