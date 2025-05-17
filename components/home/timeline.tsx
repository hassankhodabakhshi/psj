// components/home/timeline.tsx

// اینترفیس و تابع مورد نیاز رو همین بالا تعریف کن
export interface IDesktop {
  isDesktop: boolean;
}
export const isSmallScreen = (): boolean => document.body.clientWidth < 767;

import { useEffect, useRef, useState, MutableRefObject } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// مقادیر رنگ و استایل
const svgColor = "#9CA3AF";
const animColor = "#FCD34D";

const TIMELINE_STYLE = {
  SECTION: "relative w-full flex flex-col items-center py-16",
  SVG: "w-full h-64",
  TITLE: "text-2xl font-bold mb-6",
};

const TimelineSection = ({ isDesktop }: IDesktop) => {
  const svgRef: MutableRefObject<SVGSVGElement> = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          onEnter: () => setAnimated(true),
          onLeaveBack: () => setAnimated(false),
        },
      });

      timeline.to(svgRef.current.querySelectorAll(".timeline-path"), {
        stroke: animColor,
        duration: 1,
        stagger: 0.2,
        ease: Linear.easeNone,
      });

      return () => {
        timeline.scrollTrigger && timeline.scrollTrigger.kill();
        timeline.kill();
      };
    }
  }, [isDesktop]);

  return (
    <section className={TIMELINE_STYLE.SECTION}>
      <h2 className={TIMELINE_STYLE.TITLE}>تایم‌لاین پروژه‌ها</h2>
      <svg
        ref={svgRef}
        className={TIMELINE_STYLE.SVG}
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="timeline-path"
          d="M50 100 Q150 10 250 100 T450 100"
          stroke={animated ? animColor : svgColor}
          strokeWidth="4"
          fill="none"
        />
        {/* می‌تونی مسیرهای بیشتری اضافه کنی */}
      </svg>
      {/* بقیه‌ی محتوا و جزئیات تایم‌لاین */}
    </section>
  );
};

export default TimelineSection;
