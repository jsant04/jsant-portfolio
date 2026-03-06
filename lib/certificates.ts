export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: string;
  gradient: string;
}

export const certificates: Certificate[] = [
  {
    id: "hp-rockstar",
    title: "Rockstar Performer Award",
    issuer: "Sitel Philippines / HP Americas Support",
    date: "2020",
    credentialUrl: "#",
    category: "Achievement",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "hcltech-senior",
    title: "Senior Analyst Certification",
    issuer: "HCLTech Philippines",
    date: "2022",
    credentialUrl: "#",
    category: "Professional",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "html-css-js",
    title: "HTML, CSS & JavaScript",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    category: "Web Development",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "python-basics",
    title: "Python for Beginners",
    issuer: "Coursera / University of Michigan",
    date: "2023",
    credentialUrl: "#",
    category: "Programming",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialUrl: "#",
    category: "AI / ML",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "it-support",
    title: "Google IT Support Professional",
    issuer: "Google / Coursera",
    date: "2021",
    credentialUrl: "#",
    category: "IT Support",
    gradient: "from-lime-500 to-green-600",
  },
];
