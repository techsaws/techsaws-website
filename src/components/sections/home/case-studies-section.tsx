"use client";

import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ArrowRight } from "lucide-react";

import { CaseStudiesData } from "@/data/home-page-data";
import CaseStudyCard from "@/components/sections/common/case-study-card";

function CaseStudiesSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="section page-layout overflow-hidden">
      <div>
        <p className="relative mb-2 inline-block text-base font-extrabold uppercase tracking-[0.32em] text-sub-heading">
          Proven Results
          <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-sub-heading/20 blur-xl" />
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-heading md:text-5xl">
          Systems Built For Real{" "}
          <span className="relative inline-block font-bold text-accent">
            Business Outcomes
            <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-accent/20 blur-xl" />
          </span>
        </h2>

        <p className="mt-5 max-w-4xl text-lg text-muted-foreground">
          Selected projects demonstrating how engineering, automation, and
          infrastructure directly impact growth, operations, and scalability.
        </p>
      </div>

      <div ref={emblaRef} className="mt-16 overflow-hidden">
        <div className="-ml-5 flex">
          {CaseStudiesData.map((item, index) => (
            <div
              key={index}
              className="
                min-w-0
                pl-5
                flex-[0_0_100%]
                sm:flex-[0_0_75%]
                lg:flex-[0_0_50%]
                xl:flex-[0_0_33.333%]
              "
            >
              <CaseStudyCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/case-studies"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-border
            px-8
            py-4
            font-medium
            transition-colors
            hover:border-accent
            hover:text-accent
          "
        >
          View All Case Studies
          <ArrowRight
            className="
              h-5
              w-5
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
