"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { HeaderNavData } from "@/data/layout-data";

import { ChevronDown } from "lucide-react";

export function ServicesDropdown({
  item,
}: {
  item: (typeof HeaderNavData)[number];
}) {
  const [open, setOpen] = useState(false);

  if (!item.subCategory) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="
          flex items-center gap-2
          rounded-xl
          px-4 py-3
          text-sm font-medium
          text-heading
          transition-colors duration-300
          hover:text-primary
        "
      >
        {item.title}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-1/2
              top-[calc(100%+20px)]
              z-50
              w-160
              -translate-x-1/2
            "
          >
            <div className="glass-bg-dark rounded-3xl p-3">
              <div className="grid grid-cols-2 gap-2">
                {item.subCategory.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      href={service.path}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-white/5
                        bg-white/2
                        p-5
                        transition-all
                        duration-300
                        hover:border-white/10
                        hover:bg-white/4
                      "
                    >
                      <div
                        className="
                          absolute inset-0 opacity-0
                          transition-opacity duration-300
                          group-hover:opacity-100
                          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_65%)]
                        "
                      />

                      <div className="relative z-10">
                        <div
                          className="
                            mb-4 flex h-11 w-11 items-center justify-center
                            rounded-xl
                            bg-white/5
                            text-primary
                            transition-transform duration-300
                            group-hover:scale-110
                          "
                        >
                          <Icon size={20} />
                        </div>

                        <h4 className="mb-2 text-sm font-semibold text-white">
                          {service.title}
                        </h4>

                        <p className="text-sm leading-relaxed text-white/60">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
