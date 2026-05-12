export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  secondaryImage?: string;
  techStack: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  builtIn?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "meezan-property-network",
    title: "Meezan Property Network",
    type: "Full-Stack AI Real Estate Platform",
    description:
      "A complete AI-powered real estate platform for Faisal Hills, Pakistan. Features multilingual AI property assistant (Urdu/English), smart buyer-seller matching with 8-point scoring, inventory PDF generation for dealers, and a PWA that installs as a mobile app. Built in 2 weeks.",
    image: "/meezahome.png",
    secondaryImage: "/meezanai.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "AI Chatbot (Urdu + English) with RAG",
      "Smart Buyer-Seller Matching Algorithm",
      "PWA — Installs as Mobile App",
      "Inventory PDF System for Dealers",
      "Admin Dashboard with Analytics",
    ],
    liveUrl: "https://meezanpropertynetwork.com",
    githubUrl: "https://github.com/asmaiqbal85/meezan",
    builtIn: "2 weeks",
    featured: true,
  },
  {
    id: "todo-list",
    title: "Todo List",
    type: "Productivity App",
    description:
      "A todo app helps you organize and manage your tasks efficiently.",
    image: "/todo.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather App",
    type: "Utility App",
    description:
      "A weather app providing current and forecasted weather conditions.",
    image: "/weather.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "video-call-app",
    title: "Video Call App",
    type: "Real-Time Communication",
    description:
      "A video calling app enabling face-to-face remote conversations.",
    image: "/video.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "time-table",
    title: "Time Table",
    type: "Planning Tool",
    description:
      "A visual schedule displaying organized time slots for planning.",
    image: "/Time.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "pizza-app",
    title: "Pizza App",
    type: "E-Commerce",
    description: "An app for ordering delicious pizza with various toppings.",
    image: "/piz.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "library-management",
    title: "Library Management",
    type: "Management System",
    description:
      "A system for organizing, tracking, and managing books and members.",
    image: "/library.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "countdown-timer",
    title: "Countdown Timer",
    type: "Utility App",
    description:
      "A digital tool displaying remaining time until a specific event.",
    image: "/timer.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "calculator",
    title: "Calculator",
    type: "Utility App",
    description:
      "A fast and reliable calculator built with Next.js and TypeScript.",
    image: "/calculator.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "ai-artist",
    title: "AI Artist",
    type: "AI Creative Tool",
    description: "An AI-powered creative tool generating original artwork.",
    image: "/aipeacock.png",
    techStack: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
    featured: false,
  },
];
