import styles from "./Cursor.module.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

export interface IDesktop {
  isDesktop: boolean;
}
export const isSmallScreen = (): boolean => document.body.clientWidth < 767;

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor: MutableRefObject<HTMLDivElement> = useRef(null);
  const follower: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const onHover = () => {
      gsap.to(cursor.current, { scale: 0.5, duration: 0.3 });
      gsap.to(follower.current, { scale: 3, duration: 0.3 });
    };
    const onUnhover = () => {
      gsap.to(cursor.current, { scale: 1, duration: 0.3 });
      gsap.to(follower.current, { scale: 1, duration: 0.3 });
    };
    const moveCircle = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: Linear.easeNone,
      });
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: Linear.easeNone,
      });
    };

    if (isDesktop && !isSmallScreen()) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      document.addEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });
    }
    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;
