export interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  tagline: string;
  description: string;
  highlights: string[];
  links: {
    github?: string;
    live?: string;
  };
  accentColor: string;
  badge?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "pitch-craft",
    title: "Pitch Craft",
    date: "October 2025",
    tags: ["AI", "Next.js", "TypeScript", "Hackathon"],
    tagline: "AI-powered development planning tool",
    description:
      "Built during a hackathon at Zaitoon Ashraf IT Park. Integrated generative AI APIs to automate requirement gathering and generate automated implementation plans. Improved project scoping efficiency significantly.",
    highlights: ["Team lead", "Real-world prototype", "Fast delivery under pressure"],
    links: {
      github: "https://github.com/AunMohammad254/pitch-craft",
      live: "https://pitch-craft.vercel.app",
    },
    accentColor: "#A78BFA",
    badge: "🏆 Hackathon Winner",
    featured: true,
  },
  {
    id: "closet-by-era",
    title: "Closet By Era",
    date: "November 2025",
    tags: ["E-Commerce", "Supabase", "Next.js 16", "Tailwind CSS"],
    tagline: "AI-styled full-stack fashion e-commerce platform",
    description:
      "Full-stack e-commerce store with Supabase PostgreSQL, role-based access control, AI styling assistant, multi-currency support, and automated email notifications.",
    highlights: ["RBAC", "Auth system", "Multi-currency", "Email automation"],
    links: {
      github: "https://github.com/AunMohammad254/closet-by-era",
      live: "https://closet-by-era.vercel.app",
    },
    accentColor: "#06D6A0",
    featured: false,
  },
  {
    id: "1think2win",
    title: "1Think2Win",
    date: "December 2025",
    tags: ["Quiz Platform", "Real-time", "Supabase", "TypeScript"],
    tagline: "Real-time gamified quiz gaming platform",
    description:
      "Full-stack quiz platform with real-time scoring, leaderboards, secure authentication, and mobile-first gamified UI. Optimized for high concurrency during timed quiz events.",
    highlights: ["Real-time", "Leaderboard", "RBAC", "Mobile-first", "Concurrency optimized"],
    links: {
      github: "https://github.com/AunMohammad254/1think2win",
      live: "https://1think2win.vercel.app",
    },
    accentColor: "#3B82F6",
    featured: false,
  },
];
