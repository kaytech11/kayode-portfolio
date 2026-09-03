import fraudlensImage from "../assests/projects/fraudlens.png"
import pulsebeatImage from "../assests/projects/pulsebeat.png"

export const WORK = [
  {
    year: "2026",
    name: "FraudLens",
    role: "Fraud detection · Full Stack",
    blurb:
      "A transaction relationship explorer that helps identify connections, patterns, and potential fraud risks across financial accounts.",
    stack: ["React", "Node.js", "Express", "CognoDB"],
    url: "https://fraudlens-eyac.onrender.com",
    image: fraudlensImage
  },
  {
    year: "2026",
    name: "PulseBeat",
    role: "Streaming platform · Full Stack",
    blurb:
      "A modern music streaming platform built for discovering, managing, and enjoying music through a seamless digital experience.",
    stack: ["React", "Node.js", "PostgreSQL", "Redux", "prisma"],
    url: "https://pulse-beat-inky.vercel.app/",
    image: pulsebeatImage
  },
  {
    year: "2026",
    name: "HGFitAccess",
    role: "Gym management SaaS · Full Stack",
    blurb:
      "A multi-tenant gym management platform connecting gyms, staff, and members through web dashboards and mobile experiences.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    url: null,
  },
];