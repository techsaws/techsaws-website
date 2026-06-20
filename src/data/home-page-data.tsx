import { StaticImageData } from "next/image";

import AutomationImg from "../../public/images/automation-img.jpg";
import SaaSImg from "../../public/images/saas-img.jpg";
import AiImg from "../../public/images/ai-img.jpg";
import SecurityImg from "../../public/images/security-img.jpg";

export interface CaseStudyDataProps {
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: StaticImageData;
  href?: string;
}

export const CaseStudiesData: CaseStudyDataProps[] = [
  {
    title: "AI Workflow Automation",
    category: "Automation Systems",
    description:
      "Reduced operational workload by 68% through AI-driven workflows and business automation.",
    image: AutomationImg,
    metrics: "68% Less Manual Work",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "Platform Engineering",
    description:
      "Designed scalable infrastructure supporting thousands of users and tenants.",
    image: SaaSImg,
    metrics: "99.99% Uptime",
  },
  {
    title: "Revenue Operations System",
    category: "Revenue Engineering",
    description:
      "Unified lead capture, CRM automation, and outbound pipelines.",
    image: AiImg,
    metrics: "3.4x More Leads",
  },
  {
    title: "Security Infrastructure",
    category: "Cybersecurity",
    description:
      "Implemented hardened authentication, monitoring, and threat detection.",
    image: SecurityImg,
    metrics: "Zero Critical Issues",
  },
];
