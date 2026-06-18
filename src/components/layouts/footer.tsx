import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "Contact", href: "#contact" },
] as const;

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="page-layout flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <Link href="/" className="font-manrope text-lg font-bold text-heading">
            {siteConfig.name}
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.shortDescription}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
