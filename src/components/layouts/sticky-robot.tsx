"use client";

import Lottie from "lottie-react";

import RobotAnimation from "../../../public/animations/robot.json";

export default function StickyRobot() {
  return (
    <div
      className="fixed bottom-9 right-8 z-40 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        className="md:w-24 md:h-24 w-18 h-18 transform-gpu will-change-transform"
      >
        <Lottie
          animationData={RobotAnimation}
          loop
          autoplay
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
      </div>
    </div>
  );
}
