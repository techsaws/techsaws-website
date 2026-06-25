"use client";

import { motion } from "framer-motion";

import { SidebarMenuSlide } from "./sidebar-animation";
import SidebarCruve from "./sidebar-curve";

import { X } from "lucide-react";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-90 bg-black/50 backdrop-blur-md"
      />

      <motion.div
        variants={SidebarMenuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-[88%] max-w-105 z-100 bg-black fixed right-0 top-0 text-heading"
      >
        <div className="h-full w-full px-4 py-6 flex flex-col">
          <div className="w-full flex items-center justify-end">
            <div
              onClick={onClose}
              className="flex items-center justify-center rounded-lg bg-white p-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <X strokeWidth={2.5} className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
        <SidebarCruve />
      </motion.div>
    </>
  );
}
