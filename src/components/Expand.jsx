import React from "react";
import { motion } from "framer-motion";

export const Expand = ({ stroke = "#fff", ...rest }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    {...rest}
  >
    {/* Bottom right */}
    <path
      d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bottom left */}
    <path
      d="M3 16.2V21m0 0h4.8M3 21l6-6"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top right */}
    <path
      d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top left */}
    <path
      d="M3 7.8V3m0 0h4.8M3 3l6 6"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);