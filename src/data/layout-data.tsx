import { Bot, Code2, TrendingUp, Shield } from "lucide-react";

export const HeaderNavData = [
  {
    path: "/about",
    title: "About",
  },
  {
    title: "Services",
    subCategory: [
      {
        path: "/services/ai-automation",
        title: "AI & Automation Systems",
        description:
          "Automate workflows, operations, and business processes with AI-powered systems.",
        icon: Bot,
      },
      {
        path: "/services/software-engineering",
        title: "Software Engineering",
        description:
          "Build scalable applications, platforms, APIs, and business systems.",
        icon: Code2,
      },
      {
        path: "/services/revenue-growth",
        title: "Revenue Systems",
        description:
          "Create lead generation, sales, and growth systems that drive revenue.",
        icon: TrendingUp,
      },
      {
        path: "/services/cyber-defense",
        title: "Cyber Defense",
        description:
          "Protect infrastructure, applications, and data with proactive security.",
        icon: Shield,
      },
    ],
  },
  {
    title: "Solutions",
    path: "/solutions",
  },
  {
    title: "Case Studies",
    path: "/case-studies",
  },
];
