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
    slug: "weather-app",
    title: "MangEdu Weather Dashboard",
    year: 2025,
    description:
      "Real-time weather dashboard that lets you search any city and get live conditions powered by OpenWeatherMap.",
    longDescription: `A clean, real-time weather dashboard built with a secure API proxy so the OpenWeatherMap key is never exposed to the client. Type any city name and get instant current conditions including temperature, humidity, wind speed, and weather descriptions.

Designed with a focus on simplicity and speed — no bloat, just the data you need. The proxy server pattern keeps credentials safe while keeping the frontend lightweight and fast. Deployed on Vercel with zero-config CI/CD.`,
    tech: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API", "Vercel", "Proxy Server"],
    liveUrl: "https://weather-app-blush-eight-62.vercel.app/",
    githubUrl: "https://github.com",
    category: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "recipe-app",
    title: "PantryPro Recipe App",
    year: 2025,
    description:
      "Recipe discovery app where every meal feels like home — browse by category, search meals, and save your favourites.",
    longDescription: `PantryPro is a full-featured recipe discovery application powered by TheMealDB API. Browse hundreds of meals across categories like Beef, Chicken, Dessert, Seafood, and more. Each recipe includes full ingredient lists, step-by-step instructions, and a high-quality photo.

Features include a persistent favourites list, category filtering, and a dedicated meal detail page for every recipe. Built with a mobile-first responsive layout and smooth navigation between views. Deployed on Vercel with instant global delivery.`,
    tech: ["JavaScript", "HTML", "CSS", "TheMealDB API", "Vercel"],
    liveUrl: "https://recipe-app-opal-xi.vercel.app/",
    githubUrl: "https://github.com",
    category: "Frontend",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    slug: "scoundrel-game",
    title: "Scoundrel Card Game",
    year: 2025,
    description:
      "A browser-based implementation of the Scoundrel solitaire dungeon-crawler card game with full game logic and action log.",
    longDescription: `A faithful browser implementation of Scoundrel — a solo dungeon-crawler card game played with a standard deck. Each turn you enter a room of four cards: monsters to fight, weapons to pick up, and potions to drink. Choose wisely — one card carries forward to the next room.

Built entirely in vanilla JavaScript with no dependencies, featuring a complete rules engine, health and weapon tracking, an action log for every turn, and a responsive layout that works on desktop and mobile. Deployed on Vercel.`,
    tech: ["JavaScript", "HTML", "CSS", "Game Logic", "Vercel"],
    liveUrl: "https://scoundrel-game-inky.vercel.app/",
    githubUrl: "https://github.com",
    category: "Game",
    gradient: "from-violet-600 to-indigo-600",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
