"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";

const CustomButton = ({
  classStyle,
  buttonText,
  handleClick,
  buttonIcon,
  type,
  ...props
}: {
  classStyle?: string;
  buttonText: string;
  buttonIcon?: ReactElement | HTMLElement;
  handleClick?: () => void;
  type?: "reset" | "button" | "submit";
}) => {
  return (
    <motion.button
      className={`text-white bg-primary-btn-color font-semibold py-3 capitalize px-4 text-sm  rounded-lg ${classStyle}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      type={type || "button"}
      {...props}
    >
      {buttonText}
    </motion.button>
  );
};

export default CustomButton;
