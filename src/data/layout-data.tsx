import {
  LucideIcon,
  TrendingUp,
  Clock3,
  Cpu,
  FileCode2,
  Layers3,
  Rocket,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

type SubCategoryItem = {
  path: string;
  title: string;
  description: string;
  beforeIcon: LucideIcon;
  afterIcon: LucideIcon;
};

type NavItemLink = {
  path: string;
  title: string;
  isSubCategory?: false;
  subCategory?: never;
};

type NavItemDropdown = {
  title: string;
  path?: never;
  isSubCategory: true;
  subCategory: SubCategoryItem[];
};

export type HeaderNavItem = NavItemLink | NavItemDropdown;

export const HeaderNavData: HeaderNavItem[] = [
  {
    path: "/about",
    title: "About",
  },

  {
    title: "Solutions",
    path: "/solutions",
  },

  {
    title: "Case Studies",
    path: "/case-studies",
  },

  {
    title: "Services",
    isSubCategory: true,
    subCategory: [
      {
        path: "/services/ai-automation",
        title: "AI & Automation Systems",
        description:
          "Automate workflows, operations, and business processes with AI-powered systems.",
        beforeIcon: Clock3,
        afterIcon: Cpu,
      },
      {
        path: "/services/software-engineering",
        title: "Software & Platform Engineering",
        description:
          "Build scalable applications, platforms, APIs, and business systems.",
        beforeIcon: FileCode2,
        afterIcon: Layers3,
      },
      {
        path: "/services/revenue-growth",
        title: "Revenue & Growth Systems",
        description:
          "Create lead generation, sales, and growth systems that drive revenue.",
        beforeIcon: TrendingUp,
        afterIcon: Rocket,
      },
      {
        path: "/services/cyber-defense",
        title: "Security & Cyber Defense",
        description:
          "Protect infrastructure, applications, and data with proactive security.",
        beforeIcon: ShieldAlert,
        afterIcon: ShieldCheck,
      },
    ],
  },
];

export const SidebarNavData = [
  {
    path: "/",
    title: "Home",
  },

  {
    path: "/about",
    title: "About Us",
  },

  {
    title: "Services",
    isAccordian: true,
    subCategory: [
      {
        path: "/services/ai-automation",
        title: "AI & Automation Systems",
      },
      {
        path: "/services/software-engineering",
        title: "Software & Platform Engineering",
      },
      {
        path: "/services/revenue-growth",
        title: "Revenue & Growth Systems",
      },
      {
        path: "/services/cyber-defense",
        title: "Security & Cyber Defense",
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

  {
    title: "Capabilities",
    path: "/capabilities",
  },

  {
    title: "Methodology",
    path: "/methodology",
  },

  {
    title: "Engagement",
    path: "/engagement",
  },

  {
    title: "Industries",
    path: "/industries",
  },

  {
    title: "Insights",
    path: "/insights",
  },
];
