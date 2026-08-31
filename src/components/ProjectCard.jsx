// import { ExternalLink } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export default function ProjectCard({ project }) {
//   const { c, isDark } = useTheme();
//   const isLive = Boolean(project.url);
//   const Tag = isLive ? "a" : "div";
//   const tagProps = isLive ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {};
//   const hoverAccent = isDark ? "text-[#1ED760]" : "text-[#1DB954]";

//   return (
//     <Tag
//       {...tagProps}
//       className={`group block p-6 rounded-2xl border ${c.border} ${c.surface} transition-colors ${
//         isLive ? "cursor-pointer hover:border-[#1ED760]/60" : "opacity-70 cursor-default"
//       }`}
//     >
//       <div className="flex items-start justify-between gap-4 mb-3">
//         <span className={`font-mono text-xs ${c.muted}`}>{project.year}</span>
//         {isLive ? (
//           <ExternalLink size={16} className={`shrink-0 ${c.muted} group-hover:${hoverAccent} transition-colors`} />
//         ) : (
//           <span className={`font-mono text-[10px] px-2 py-1 rounded-full ${c.pill}`}>Not live yet</span>
//         )}
//       </div>

//       <h3 className={`font-serif text-2xl mb-1 transition-colors ${isLive ? `group-hover:${hoverAccent}` : ""}`}>
//         {project.name}
//       </h3>
//       <p className={`text-sm ${c.muted} mb-4`}>{project.role}</p>
//       <p className={`${c.muted} leading-relaxed mb-5`}>{project.blurb}</p>

//       <div className="flex flex-wrap gap-2">
//         {project.stack.map((tech) => (
//           <span key={tech} className={`font-mono text-xs px-2 py-1 rounded-full ${c.pill}`}>
//             {tech}
//           </span>
//         ))}
//       </div>
//     </Tag>
//   );
// }


import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ProjectCard({ project }) {
  const { c, isDark } = useTheme();
  const isLive = Boolean(project.url);
  const Tag = isLive ? "a" : "div";

  const tagProps = isLive
    ? {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  const hoverAccent = isDark ? "text-[#1ED760]" : "text-[#1DB954]";

  return (
    <Tag
      {...tagProps}
      className={`group block p-6 rounded-2xl border ${c.border} ${c.surface} transition-colors ${
        isLive
          ? "cursor-pointer hover:border-[#1ED760]/60"
          : "opacity-70 cursor-default"
      }`}
    >
      {/* Project image */}
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-3">
        <span className={`font-mono text-xs ${c.muted}`}>
          {project.year}
        </span>

        {isLive ? (
          <ExternalLink
            size={16}
            className={`shrink-0 ${c.muted} transition-colors group-hover:${hoverAccent}`}
          />
        ) : (
          <span
            className={`font-mono text-[10px] px-2 py-1 rounded-full ${c.pill}`}
          >
            Not live yet
          </span>
        )}
      </div>

      <h3
        className={`font-serif text-2xl mb-1 transition-colors ${
          isLive ? `group-hover:${hoverAccent}` : ""
        }`}
      >
        {project.name}
      </h3>

      <p className={`text-sm ${c.muted} mb-4`}>
        {project.role}
      </p>

      <p className={`${c.muted} leading-relaxed mb-5`}>
        {project.blurb}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`font-mono text-xs px-2 py-1 rounded-full ${c.pill}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </Tag>
  );
}