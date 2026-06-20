import Link from "next/link";

function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-white"
      style={{
        clipPath: "polygon(0% 0,100% 0%,100% 100%,0 100%)",
      }}
    >
      <div className="relative page-layout pt-12">
        <div className="h-75"></div>

        <div className="mt-12 flex flex-col gap-4 border-b-2 border-black/10 pb-3 text-sm font-manrope font-medium text-black/80 md:flex-row md:items-center md:justify-between">
          <p className="text-black/70 font-medium">
            © {new Date().getFullYear()} TechSaws. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-48 overflow-hidden">
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none z-10">
          <span className="text-[clamp(6rem,16vw,16rem)] font-black tracking-normal leading-none text-transparent bg-linear-to-t from-black/30 via-black/15 to-transparent bg-clip-text">
            TECHSAWS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
