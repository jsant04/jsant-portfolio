export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: string;
  gradient: string;
  /** Path to the PDF inside /public */
  pdf: string;
}

export const certificates: Certificate[] = [
  {
    id: "web-developer",
    title: "The Complete Web Developer",
    issuer: "Zero To Mastery Academy",
    date: "2024",
    credentialUrl: "/certificates/the-complete-web-developer-zero-to-mastery.pdf",
    category: "Web Development",
    gradient: "from-cyan-500 to-blue-600",
    pdf: "/certificates/the-complete-web-developer-zero-to-mastery.pdf",
  },
  {
    id: "python-developer",
    title: "The Complete Python Developer",
    issuer: "Zero To Mastery Academy",
    date: "2025",
    credentialUrl: "/certificates/the-complete-python-developer-zero-to-mastery.pdf",
    category: "Programming",
    gradient: "from-emerald-500 to-teal-600",
    pdf: "/certificates/the-complete-python-developer-zero-to-mastery.pdf",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Bootcamp",
    issuer: "Zero To Mastery Academy",
    date: "2025",
    credentialUrl: "/certificates/prompt-engineering-bootcamp-working-with-ai-llms-zero-to-mastery.pdf",
    category: "AI / LLMs",
    gradient: "from-pink-500 to-rose-600",
    pdf: "/certificates/prompt-engineering-bootcamp-working-with-ai-llms-zero-to-mastery.pdf",
  },
  {
    id: "vibe-coding-bootcamp",
    title: "Vibe Coding Bootcamp - AI-Augmented Developer",
    issuer: "Zero To Mastery Academy",
    date: "2025",
    credentialUrl: "/certificates/the-vibe-coding-bootcamp-zero-to-mastery.pdf",
    category: "AI Automation",
    gradient: "from-orange-500 to-red-600",
    pdf: "/certificates/the-vibe-coding-bootcamp-zero-to-mastery.pdf",
  },
  {
    id: "ai-agents-n8n",
    title: "Build AI Agents with n8n",
    issuer: "Zero To Mastery Academy",
    date: "2025",
    credentialUrl: "/certificates/build-ai-agents-with-n8n.pdf",
    category: "AI Automation",
    gradient: "from-violet-600 to-indigo-600",
    pdf: "/certificates/build-ai-agents-with-n8n.pdf",
  },
];
