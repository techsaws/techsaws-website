"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  item: {
    title: string;
    category: string;
    description: string;
    metrics: string;
    image: string | StaticImageData;
    href?: string;
  };
}

export default function CaseStudyCard({ item }: CaseStudyCardProps) {
  return (
    <article
      className="
        group
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        transition-colors
        hover:border-accent/30
      "
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 70vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
            {item.category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <p className="text-xl font-bold text-white">{item.metrics}</p>
        </div>
      </div>

      <div className="flex flex-col p-6">
        <h3 className="mb-3 text-xl font-semibold text-heading">
          {item.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <Link
          href={item.href || "/case-studies"}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-accent
          "
        >
          View Case Study
          <ArrowUpRight
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Link>
      </div>
    </article>
  );
}
