export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
  accentColor: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    accentColor: "#3B82F6",
    skills: [
      { name: "Next.js 16" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript ES6+" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Database",
    accentColor: "#06D6A0",
    skills: [
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "Authentication" },
      { name: "RBAC" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Platform",
    accentColor: "#A78BFA",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "VS Code" },
      { name: "Antigravity" },
    ],
  },
  {
    id: "concepts",
    name: "Concepts",
    accentColor: "#F59E0B",
    skills: [
      { name: "Full Stack Development" },
      { name: "Responsive Design" },
      { name: "Database Design" },
      { name: "AI Integration" },
    ],
  },
];

export const currentlyLearning = [
  "Claude Code",
  "Gemini CLI",
  "LangChain",
  "AI Agents",
];
