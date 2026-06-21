"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { HeaderNavData } from "@/data/layout-data";

import { useModals } from "@/providers/modals-provider";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import LogoWhite from "../../../public/favicons/logo.png";
import { User } from "lucide-react";

function Header() {
  const { openConnectModal } = useModals();
  const pathname = usePathname();

  return (
    <header className="absolute w-full z-50">
      <div className="page-layout flex h-30 items-center justify-between">
        <Link href="/">
          <Image
            src={LogoWhite}
            alt="Logo"
            className="w-auto lg:h-16 h-14 transition-all duration-500 hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-2 lg:translate-x-8 max-md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {HeaderNavData.map((item) => {
                if (!item.subCategory) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <Link
                        href={item.path}
                        className={`group/nav relative px-4 py-2 font-manrope font-bold text-sm uppercase tracking-wide transition-colors duration-300 ${pathname === item.path ? "text-primary" : "hover:text-primary"}`}
                      >
                        {item.title}

                        <span
                          className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary/30 via-primary to-primary/30 origin-left transition-transform duration-300 ${pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`}
                        />
                      </Link>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent font-manrope font-bold text-sm uppercase tracking-wide hover:bg-transparent data-[state=open]:bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="w-107.5 py-2.5">
                        <div className="grid gap-2">
                          {item.subCategory.map((sub) => {
                            const Icon = sub.icon;

                            return (
                              <Link
                                key={sub.path}
                                href={sub.path}
                                className="group flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-muted hover:translate-x-1"
                              >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border-2 border-primary">
                                  <Icon className="h-5 w-5" strokeWidth={2} />
                                </div>

                                <div>
                                  <h4 className="font-medium font-manrope transition-colors group-hover:text-primary">
                                    {sub.title}
                                  </h4>

                                  <p className="text-sm font-light text-muted-foreground">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2 max-md:hidden">
          <Link
            href={"https://studio.techsaws.com"}
            target="_blank"
            className="p-2 rounded-full bg-muted border-2 cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <User strokeWidth={3} className="w-4 h-4" />
          </Link>

          <Button
            onClick={openConnectModal}
            className="relative overflow-hidden max-lg:text-sm lg:px-8 px-4 py-4.5 rounded-full bg-primary border-4 border-blue-900 hover:bg-primary-hover hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10">Let&apos;s Connect!</span>

            <span className="absolute inset-0 z-0 w-16 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shine" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
