import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { SITE } from "../data/site";

export default function Footer() {
  const { c } = useTheme();

  return (
    <footer className={`${c.footerBg} text-white/60 transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        {/* <Link to="/contact" className="hover:text-white transition-colors">
          Get in touch →
        </Link> */}
      </div>
    </footer>
  );
}
