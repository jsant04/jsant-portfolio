export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    year: 2025,
    description:
      "Real-time analytics platform powered by ML models for predictive insights and data visualization.",
    longDescription: `A comprehensive analytics dashboard built with Next.js and a Python FastAPI backend. Features real-time data visualization, ML-powered predictions, and customizable widgets. Handles 10M+ data points with sub-100ms query response times.

Key features include live data streaming via WebSockets, interactive charts with D3.js, role-based access control, and automated anomaly detection alerts. Deployed on AWS with auto-scaling infrastructure that adapts to traffic spikes.`,
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    slug: "ecommerce-platform",
    title: "Headless E-Commerce",
    year: 2025,
    description:
      "Headless commerce solution with dynamic product catalog, cart, and Stripe payment integration.",
    longDescription: `A modern headless e-commerce platform leveraging Next.js App Router and Stripe for payments. Built with a microservices architecture supporting thousands of concurrent users with a 99.9% uptime SLA.

Implements ISR for product pages, edge caching for performance, and a composable checkout flow with 15+ payment methods across 30 countries. Sanity CMS powers the content layer with real-time preview support.`,
    tech: ["Next.js", "Stripe", "Sanity CMS", "Prisma", "PostgreSQL", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    slug: "design-system",
    title: "Design System",
    year: 2024,
    description:
      "Accessible, themeable component library with 50+ components and full Storybook documentation.",
    longDescription: `An enterprise-grade design system built with React and Storybook. Features 50+ fully accessible components following WCAG 2.1 AA standards, dark/light theme support, and comprehensive interactive documentation. Used across 5 internal products by 20+ engineers.

Built on top of Radix UI primitives for rock-solid accessibility, with Tailwind CSS for styling. Includes automated visual regression testing and Chromatic integration for visual diffing on every PR.`,
    tech: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS", "Vitest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "collab-app",
    title: "Real-Time Collab",
    year: 2024,
    description:
      "WebSocket-powered collaboration tool with live cursors, comments, and version history.",
    longDescription: `A real-time collaboration platform inspired by Figma and Notion. Implements CRDT algorithms for conflict-free concurrent editing, supports 100+ simultaneous users per document, and stores full revision history with branching support.

Features include presence indicators, live commenting, keyboard shortcuts, and an offline-first architecture with background sync. Built for teams that need to move fast without stepping on each other's work.`,
    tech: ["Next.js", "Socket.io", "CRDT", "MongoDB", "AWS S3", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    slug: "cli-toolkit",
    title: "CLI Dev Toolkit",
    year: 2024,
    description:
      "Productivity CLI with project scaffolding, code generation, and automated workflow tools.",
    longDescription: `A powerful CLI toolkit that accelerates developer workflows. Features project scaffolding with customizable templates, automated testing setup, and CI/CD pipeline configuration. Downloaded 50K+ times on npm.

Supports 10+ project templates, interactive prompts, and a plugin system for extensibility. Integrates with GitHub Actions, GitLab CI, and Bitbucket Pipelines out of the box.`,
    tech: ["Node.js", "TypeScript", "Commander.js", "Inquirer", "Plop", "Jest"],
    liveUrl: "https://npmjs.com",
    githubUrl: "https://github.com",
    category: "DevTools",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    slug: "fitness-app",
    title: "AI Fitness App",
    year: 2023,
    description:
      "Cross-platform React Native fitness app with AI workout recommendations and health metrics.",
    longDescription: `A React Native fitness application featuring AI-powered workout planning, real-time heart rate monitoring integration, social challenges, and personalized nutrition tracking. 10K+ active monthly users with a 4.8 App Store rating.

Integrates with Apple HealthKit, Google Fit, and wearable devices. Uses TensorFlow.js for on-device ML inference to protect user privacy. Offline-first architecture with smart background sync.`,
    tech: ["React Native", "Expo", "TensorFlow.js", "Firebase", "HealthKit", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Mobile",
    gradient: "from-pink-500 to-rose-600",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
