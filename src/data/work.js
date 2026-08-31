// Add, remove, or edit projects here.
// Set `url` to your live site to make the card clickable.
// Leave `url` as null and the card will show a "Not live yet" badge instead.

// export const WORK = [
//   {
//     year: "2026",
//     name: "Field Notes",
//     role: "Mobile app · React Native",
//     blurb:
//       "A journaling app for people who take notes on the move — offline-first, synced when signal returns.",
//     stack: ["React Native", "TypeScript", "SQLite"],
//     url: "https://example.com",
//   },
//   {
//     year: "2025",
//     name: "Harbor",
//     role: "Web platform · React",
//     blurb:
//       "Internal tooling for a small logistics team, replacing three spreadsheets and a group chat.",
//     stack: ["React", "Tailwind", "Node"],
//     url: null,
//   },
//   {
//     year: "2025",
//     name: "Loom",
//     role: "Design system",
//     blurb:
//       "A shared component library so three product teams stopped rebuilding the same button.",
//     stack: ["TypeScript", "Storybook", "Radix"],
//     url: null,
//   },
// ];


import fraudlensImage from "../assests/projects/fraudlens.png"

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
    stack: ["React", "Node.js", "PostgreSQL", "Redux"],
    url: null,
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