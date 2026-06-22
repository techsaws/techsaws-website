"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import LogoWhite from "../../../public/favicons/logo.png";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "AI Power", href: "/ai" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  return (
    <header className="fixed w-full z-50 flex items-center justify-center">
      <div className="py-6 w-full page-layout flex items-center justify-between">
        <Link href="/">
          <Image
            src={LogoWhite}
            alt="Logo"
            className="w-auto lg:h-16 h-14 transition-all duration-500 hover:scale-105"
          />
        </Link>

        <div className="glass-nav flex items-center gap-1 rounded-lg pl-2 pr-1.5 py-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-3.5 py-3 text-sm font-mediium font-manrope text-heading transition-all duration-300 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

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
    </header>
  );
}
