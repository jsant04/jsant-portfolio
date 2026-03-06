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
  image?: string;
}

export const projects: Project[] = [
  // 1 — Weather App
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
    image: "https://image.thum.io/get/width/800/noanimate/https://weather-app-blush-eight-62.vercel.app/",
  },
  // 2 — Local Music Player
  {
    slug: "local-music-player",
    title: "Audify — Music Player",
    year: 2025,
    description:
      "A sleek music streaming app with album browsing, playlists, song uploads, and a full now-playing experience.",
    longDescription: `Audify is a full-featured music streaming web app built to stream and enjoy music right in the browser. Browse featured albums, scroll through all songs, manage playlists, upload new tracks, and control playback from a dedicated now-playing view.

Built with a modern UI focused on clean layout and smooth navigation between views. The app handles media state across multiple routes, giving users a cohesive streaming experience. Deployed on Vercel with instant global delivery.`,
    tech: ["Next.js", "React", "TypeScript", "CSS", "Vercel"],
    liveUrl: "https://local-music-player-gamma.vercel.app/songs",
    githubUrl: "https://github.com",
    category: "App",
    gradient: "from-purple-500 to-pink-600",
    image: "https://image.thum.io/get/width/800/noanimate/https://local-music-player-gamma.vercel.app/songs",
  },
  // 3 — Reflex Reaction Timer
  {
    slug: "reaction-game",
    title: "Reflex Reaction Timer",
    year: 2025,
    description:
      "3D WebGL reaction-speed timer built with Three.js — test your reflexes and track your best, worst, and average times.",
    longDescription: `A visually striking reflex-testing game powered by Three.js and WebGL. Click or tap the moment the signal fires and get instant feedback on your reaction time. Session stats track your average, best, and worst times across all attempts, with a full attempt history log.

Built with vanilla JavaScript and Three.js — no frameworks, just raw browser APIs and a WebGL canvas. A fun showcase of animation timing, event handling, and real-time stat tracking in the browser.`,
    tech: ["JavaScript", "Three.js", "WebGL", "HTML", "CSS", "GitHub Pages"],
    liveUrl: "https://jsant04.github.io/reaction-game/",
    githubUrl: "https://github.com/jsant04/reaction-game",
    category: "Game",
    gradient: "from-emerald-500 to-teal-600",
    image: "https://image.thum.io/get/width/800/noanimate/https://jsant04.github.io/reaction-game/",
  },
  // 4 — Scoundrel Card Game
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
    githubUrl: "https://github.com/jsant04/scoundrel-game",
    category: "Game",
    gradient: "from-violet-600 to-indigo-600",
    image: "https://image.thum.io/get/width/800/noanimate/https://scoundrel-game-inky.vercel.app/",
  },
  // 5 — Joke & Compliment Generator
  {
    slug: "joke-generator",
    title: "Joke & Compliment Generator",
    year: 2025,
    description:
      "A fun card-flip app that deals you a random joke or compliment — pick a card, any card!",
    longDescription: `A lighthearted card-based app that delivers random jokes and compliments on demand. Flip a card to reveal either a laugh or a kind word, with a playful UI built around the "pick a card" theme.

Built with vanilla JavaScript and CSS animations for the card-flip effect. A simple but polished project demonstrating DOM manipulation, fetch calls to a jokes API, and smooth CSS transitions. Hosted on GitHub Pages.`,
    tech: ["JavaScript", "HTML", "CSS", "Jokes API", "GitHub Pages"],
    liveUrl: "https://jsant04.github.io/joke-generator/",
    githubUrl: "https://github.com/jsant04/joke-generator",
    category: "Frontend",
    gradient: "from-amber-500 to-orange-500",
    image: "https://image.thum.io/get/width/800/noanimate/https://jsant04.github.io/joke-generator/",
  },
  // 6 — PantryPro Recipe App
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
    image: "https://image.thum.io/get/width/800/noanimate/https://recipe-app-opal-xi.vercel.app/",
  },
  // 7 — First React Project (Robofriends)
  {
    slug: "first-react-project",
    title: "Robofriends",
    year: 2025,
    description:
      "A searchable React directory of robot friends — built with the JSONPlaceholder API and RoboHash-generated avatars.",
    longDescription: `Robofriends is a classic React learning project turned polished portfolio piece. It renders a searchable grid of robot contact cards, each with a unique RoboHash avatar, name, and email pulled live from the JSONPlaceholder API.

Type into the search bar and the grid filters in real time using React state and props. A clean demonstration of component-based architecture, API data fetching, and controlled input in React. Hosted on GitHub Pages.`,
    tech: ["React", "JavaScript", "JSONPlaceholder API", "RoboHash", "GitHub Pages"],
    liveUrl: "https://jsant04.github.io/first-react-project/",
    githubUrl: "https://github.com/jsant04/first-react-project",
    category: "React",
    gradient: "from-sky-500 to-indigo-600",
    image: "https://image.thum.io/get/width/800/noanimate/https://jsant04.github.io/first-react-project/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
