"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import Sidebar from "./sidebar/sidebar";

import LogoWhite from "../../../public/favicons/logo.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <>
      <header className="fixed w-full z-50 flex items-center justify-center">
        <div className="py-6 w-full page-layout flex items-center justify-between max-md:hidden">
          <Link href="/">
            <Image
              src={LogoWhite}
              alt="Logo"
              className="w-auto lg:h-16 h-14 transition-all duration-500 hover:scale-105"
            />
          </Link>

          <div className="glass-bg flex items-center gap-1 rounded-lg pl-2 pr-1.5 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                  relative rounded-xl px-3.5 py-3 text-sm font-medium
                  font-manrope text-heading transition-colors duration-300
                  after:absolute after:left-3.5 after:right-3.5 after:bottom-2
                  after:h-0.5 after:rounded-full after:origin-left after:scale-x-0
                  after:bg-primary after:transition-transform
                  after:duration-300 after:content-['']
                  hover:after:scale-x-100
                "
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute left-3.5 right-3.5 bottom-2 h-px bg-primary" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-3 flex items-center gap-3 rounded-lg bg-black px-4 py-3.5 text-sm font-manrope font-light text-heading transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>

        <div className="py-6 w-full page-layout md:hidden">
          <div className="glass-bg flex items-center justify-between rounded-full px-6 h-15">
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Logo"
                className="w-auto h-10 transition-all duration-500 hover:scale-105"
              />
            </Link>

            <div
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="flex items-center justify-center rounded-lg bg-black p-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Menu strokeWidth={2.5} className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
