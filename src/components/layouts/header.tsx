import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/lib/site-config";

import { Button } from "@/components/ui/button";

import LogoWhite from "../../../public/favicons/logo.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "Contact", href: "#contact" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="page-layout flex h-21 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={LogoWhite} alt="Logo" className="w-auto h-14" />
          <div>
            <h1 className="font-manrope text-2xl font-bold text-heading">
              {siteConfig.name}
            </h1>
            <p className="text-xs uppercase font-semibold text-sub-heading">
              {siteConfig.slogan}
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-6 max-md:hidden">
          <nav
            aria-label="Primary navigation"
            className="items-center gap-4 flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase font-manrope font-semibold text-heading hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="px-8 rounded-full bg-primary hover:bg-primary-hover cursor-pointer py-4">
            Lets Connect!
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
