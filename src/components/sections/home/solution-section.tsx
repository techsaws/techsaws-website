"use client";

import { motion } from "framer-motion";

import { Bot, Boxes, TrendingUp, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Bot,
    title: "Support & Managed Services",
    body: "Build intelligent systems that automate workflows, operations, and decision-making while reducing manual work across your business.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Advisory & Consulting",
    body: "Design secure and scalable backend systems, APIs, platforms, and infrastructure that power modern products.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Revenue & Growth Systems",
    body: "Create lead generation, CRM, outreach, and analytics systems that turn operations into predictable revenue.",
  },
];

export default function SolutionSection() {
  return (
    <section className="page-layout">
      <div className="max-w-4xl text-center flex flex-col items-center mx-auto">
        <h2 className="relative text-5xl font-semibold leading-[1.05] tracking-normal font-manrope text-heading">
          Solutions to your{" "}
          <span className="relative inline-block text-accent font-bold">
            Problems
            <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-accent/20 blur-xl" />
          </span>
        </h2>

        <p className="mt-4 text-lg max-w-2xl leading-relaxed font-light">
          We design AI, engineering, growth, and security systems that eliminate
          bottlenecks and create scalable infrastructure.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.article
              key={solution.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
              </div>

              <span className="absolute right-5 top-3 text-7xl font-bold tracking-[-0.08em] text-white/4">
                {solution.number}
              </span>

              <div className="relative z-10 mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5">
                <Icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="relative z-10 text-2xl font-manrope font-semibold tracking-tight text-white">
                {solution.title}
              </h3>

              <p className="relative z-10 mt-5 leading-8 font-light">
                {solution.body}
              </p>

              <div className="relative z-10 mt-10 flex items-center gap-2 text-sm font-medium text-white/40 transition-colors duration-300 group-hover:text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />

              <div className="absolute left-0 top-0 h-px w-0 bg-primary/70 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
