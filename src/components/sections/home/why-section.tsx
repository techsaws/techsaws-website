import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import WhyTechSaws from "../../../../public/images/floating-shape.png";

function WhySection() {
  return (
    <section className="section pb-24 page-layout grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex items-center justify-center">
        <Image
          src={WhyTechSaws}
          alt="Why TechSaws"
          unoptimized
          className="w-full h-auto"
        />
      </div>

      <div>
        <p className="mb-2 text-base font-manrope font-extrabold uppercase tracking-[0.32em] text-sub-heading relative inline-block">
          Why Choose TechSaws
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
    </section>
  );
}

export default WhySection;
