export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: "education" | "work" | "achievement";
}

export const timelineData: TimelineItem[] = [
  {
    id: "uni",
    year: "2025 \u2014 Present",
    title: "Mohammad Ali Jinnah University",
    subtitle: "Bachelor of Computer Science (In Progress)",
    type: "education",
  },
  {
    id: "1think2win",
    year: "2025",
    title: "Project: 1Think2Win",
    subtitle: "Real-time Quiz Platform",
    type: "work",
  },
  {
    id: "closet-by-era",
    year: "2025",
    title: "Project: Closet By Era",
    subtitle: "AI Fashion E-Commerce",
    type: "work",
  },
  {
    id: "pitch-craft",
    year: "2025",
    title: "Project: Pitch Craft",
    subtitle: "Hackathon Project (Zaitoon Ashraf IT Park)",
    type: "achievement",
  },
  {
    id: "saylani",
    year: "2024 \u2014 2025",
    title: "Saylani Mass IT Training",
    subtitle: "Full Stack Web Development Certification",
    type: "education",
  },
  {
    id: "kingston",
    year: "2022 \u2014 2024",
    title: "Kingston College",
    subtitle: "Pre-Engineering",
    type: "education",
  },
  {
    id: "akbar",
    year: "2022",
    title: "Akbar Public School",
    subtitle: "Secondary School Certificate (Science)",
    type: "education",
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
}

export const certificates: Certificate[] = [
  {
    id: "google-coursera",
    title: "Technical Support Fundamentals",
    issuer: "Google / Coursera",
  },
  {
    id: "jdc-wordpress",
    title: "Web Development (WordPress)",
    issuer: "JDC Free IT City",
  },
  {
    id: "saylani-cert",
    title: "Full Stack Web Development",
    issuer: "Saylani Mass IT Training",
  },
];
