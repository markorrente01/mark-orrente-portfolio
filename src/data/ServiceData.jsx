import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineTrendingUp } from "react-icons/hi";

export const ServiceData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building fast, responsive, and scalable web interfaces using modern frontend technologies with a strong focus on performance and clean code.",
    icon: <SiReact />
  },
  {
    id: 2,
    title: "Next.js Web Applications",
    description:
      "Developing SEO-friendly and high-performance web applications with server-side rendering, optimized routing, and modern architecture.",
    icon: <TbBrandNextjs />
  },
  {
    id: 3,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect and responsive interfaces with attention to usability and cross-browser compatibility.",
    icon: <MdOutlineDesignServices />
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Optimizing frontend performance through efficient rendering, clean architecture, and best practices to improve speed and user experience.",
    icon: <FiZap />
  },
  {
    id: 5,
    title: "Meta Ads Management",
    description:
      "Planning, launching, and optimizing Facebook ad campaigns with data-driven strategies focused on targeting, creatives, and conversions.",
    icon: <FaFacebookF />
  },
  {
    id: 6,
    title: "Landing Page Conversion",
    description:
      "Designing and optimizing landing pages aligned with ad campaigns to boost engagement, reduce bounce rates, and increase conversions.",
    icon: <HiOutlineTrendingUp />,
    featured: true
  }
];
