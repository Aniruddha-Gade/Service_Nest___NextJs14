import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      className="flex items-center gap-3 flex-col justify-center pt-24 pb-7 bg-gradient-to-r from-blue-500 to-purple-500"
    >
      <h2 className="font-bold text-[46px] text-center text-white">
        Find Home
        <span className="text-primary"> Service/Repair</span>
        <br />
        Near You
      </h2>

      <h2 className="text-xl text-center text-gray-400">
        Explore Best Home Service & Repair near you
      </h2>

      <div className="mt-4 flex gap-4 items-center pb-24">
        <Input
          placeholder="Search"
          className="rounded-full md:w-[350px] bg-white text-black" // Change input styles
        />
        <button className="rounded-full h-[46px] w-[3rem] flex justify-center items-center bg-white text-black">
          {" "}
          {/* Change button styles */}
          <Search className="h-4 w-4 bg-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;