"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";

function Section1_text() {
  return (
    <div className="w-full h-auto flex flex-col   items-center justify-center ">
      <motion.div
        variants={textVariant(0)}
        id="Wecom-box"
        className=" px-[15px] py-[4px]  border border-[#00FF00]  opacity-[0.9] mb-0 1300:mb-[15px]  "
      >
        <SparklesIcon className=" h-4 370:h-5 w-4 370:w-5  text-[#7CFC00] mr-[10px]" />
        <div
          id="Wecom-text"
          className=" text-[12px] 310:text-[14px] 370:text-auto"
        >
          Experience With Some Technology
        </div>
      </motion.div>
      <motion.div
        variants={textVariant(1)}
        className=" text-[30px] 370:text-[40px] 450:text-[50px] 800:text-[60px] text-white  font-medium mt-[10px] text-center "
      >
        <span className="hidden 800:flex mb-0 1300:mb-[15px] ">
        Our tools and areas of action
        </span>
        <span className="flex 800:hidden  ">
        Our tools and <br /> areas of action
        </span>
      </motion.div>

      <motion.div
        variants={textVariant(2)}
        className=" text-[20px] text-gray-200  text-center mt-[10px]"
        id="cursive"
      >
        Never miss a note , idea or connection.
      </motion.div>
    </div>
  );
}

export default Section1_text;
