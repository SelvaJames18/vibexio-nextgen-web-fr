import { px } from "framer-motion";
import { X } from "lucide-react";

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: "-200px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeInRightBG = {
  hidden: {
    opacity: 0,
    x: "400px",
  },
  show: {
    opacity: 0.05,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: "600px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay,
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return variants;
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const popUpArrow = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};



export const slideInFromTop = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const slideInFromTopBG = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 0.05,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -100, // Better than -200
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export const slideInFromRight = {
  hidden: {
    opacity: 0,
    x: "200px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const slideInFromRightBG = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 0.06,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeIn2 = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const bounceFromTop = {
  hidden: {
    opacity: 0,
    y: "-80%", // Start above viewport
  },
  show: (index = 0) => ({
    opacity: [1, 1, 1, 1, 1, 1], // Stay visible throughout
    y: [
      "-80%",  // Start above
      "0%",    // Land
      "12%",   // Overshoot down
      "-6%",   // Rebound up
      "3%",    // Small bounce
      "0%",    // Settle
    ],
    transition: {
      duration: 3, // Slow overall animation
      ease: "easeInOut", // Smooth easing
      times: [0, 0.4, 0.6, 0.75, 0.9, 1], // Keyframe timings
      delay: index * 0.3, // Stagger each icon by 0.3s
    },
  }),
};

export const fadeSlideIn = {
  hidden: {
    opacity: 0,
    y: 50, // Start slightly below
  },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,        // Faster entrance
      ease: "easeOut",      // Smooth easing
      delay: index * 0.2,   // Smaller stagger between elements
    },
  }),
};

export const smoothSlideInFromLeft = {
  hidden: {
    opacity: 0,
    x: "-100px", // Reduced from -200px for less drastic movement
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", // Changed from tween to spring for bouncier feel
      damping: 10,    // Controls bounce
      stiffness: 100, // Controls speed
      mass: 0.5,      // Controls weight
      delay: 0.1,     // Small delay for staggered effect
    },
  },
};

export const smoothSlideInFromRight = {
  hidden: {
    opacity: 0,
    x: "100px", // Reduced from 200px
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      mass: 0.5,
      delay: 0.1, // Slightly longer delay for right element
    },
  },
};