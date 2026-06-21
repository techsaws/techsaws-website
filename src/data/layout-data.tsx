import {
  Bot,
  Code2,
  TrendingUp,
  Shield,
  Wrench,
  Briefcase,
  Users,
  Layers,
} from "lucide-react";

export const HeaderNavData = [
  {
    path: "/",
    title: "Home",
  },
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
    subCategory: [
      {
        path: "/solutions/managed-support",
        title: "Managed Services",
        description:
          "Maintain, monitor, and optimize critical systems after deployment.",
        icon: Wrench,
      },
      {
        path: "/solutions/advisory-consulting",
        title: "Technology Advisory",
        description:
          "Get strategic guidance on architecture, AI adoption, and technology decisions.",
        icon: Briefcase,
      },
      {
        path: "/solutions/project-engagement",
        title: "Project Delivery",
        description:
          "Partner with us to design, build, and launch business-critical systems.",
        icon: Layers,
      },
      {
        path: "/solutions/dedicated-teams",
        title: "Dedicated Teams",
        description:
          "Extend your organization with embedded engineers and technical specialists.",
        icon: Users,
      },
    ],
  },
];
