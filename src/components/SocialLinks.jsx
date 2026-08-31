import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { SITE } from "../data/site";

// size: icon size in px. variant: "pill" (bordered circle) or "plain" (bare icon, for dark footers).
export default function SocialLinks({ size = 18, variant = "pill" }) {
  const { c } = useTheme();

  const links = [
    { key: "github", icon: Github, href: SITE.socials.github, label: "GitHub" },
    { key: "linkedin", icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
    { key: "twitter", icon: Twitter, href: SITE.socials.twitter, label: "Twitter" },
    { key: "email", icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
  ];

  const wrapperClass =
    variant === "pill"
      ? `p-2 rounded-full ${c.pill} ${c.hoverText} transition-colors`
      : "text-white/60 hover:text-white transition-colors";

  return (
    <div className="flex items-center gap-3">
      {links.map(({ key, icon: Icon, href, label }) => (
        <a key={key} href={href} aria-label={label} className={wrapperClass}>
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
