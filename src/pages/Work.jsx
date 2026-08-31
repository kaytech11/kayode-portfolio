import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";
import { WORK } from "../data/work";
import Reveal from "../components/Reveal";

export default function Work() {
  const { c } = useTheme();

  return (
    <Reveal>
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      <p className={`font-mono text-sm ${c.accent} mb-3`}>Selected work</p>
      <h1 className="font-serif text-3xl sm:text-5xl mb-12 max-w-2xl">
        Things I've built, and what they were for.
      </h1>
       
       <Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {WORK.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      </Reveal>
    </section>
    </Reveal>
  );
}
