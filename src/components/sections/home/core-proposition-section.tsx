import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import RobotAssistant from "../../../../public/gif/robot-assistant.gif";

function CorePropositionSection() {
  return (
    <section className="section pb-24 page-layout grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="mb-2 text-base font-manrope font-extrabold uppercase tracking-[0.32em] text-sub-heading relative inline-block">
          Core Proposition Value
          <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-sub-heading/20 blur-xl" />
        </p>
        <h2 className="text-5xl font-semibold leading-[1.05] tracking-normal font-manrope text-heading">
          We Engineer the{" "}
          <span className="text-accent font-bold relative inline-block">
            Systems{" "}
            <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-accent/20 blur-xl" />
          </span>{" "}
          Behind Faster Business{" "}
          <span className="text-accent font-bold relative inline-block">
            Growth{" "}
            <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-accent/20 blur-xl" />
          </span>
          .
        </h2>
        <p className="mt-4 text-lg leading-relaxed font-light">
          TechSaws builds automation, backend infrastructure, cybersecurity,
          revenue systems, and digital experiences for teams that need cleaner
          operations, stronger platforms, and software that scales with them.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Button className="py-4.5 font-manrope font-semibold px-8 bg-primary rounded-full border-4 border-blue-800">
            View Our Solutions
          </Button>
          <Link
            href={""}
            className="bg-transparent text-base font-manrope font-medium hover:text-primary group flex items-center gap-1"
          >
            Know More About Our Capabilites{" "}
            <ArrowRight
              strokeWidth={2}
              className="group-hover:translate-x-0.75 w-5 h-5 duration-500 transition-all ease-in-out"
            />
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative flex w-full max-w-md items-center justify-center overflow-hidden bg-[#030303] mask-[radial-gradient(ellipse_at_center,black_46%,rgba(0,0,0,0.86)_62%,transparent_82%)]">
            <Image
              src={RobotAssistant}
              alt="AI automation robot assistant"
              unoptimized
              className="aspect-[1.35/1] w-full object-cover object-center brightness-110 contrast-125 drop-shadow-[0_32px_90px_rgba(37,99,235,0.28)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorePropositionSection;
