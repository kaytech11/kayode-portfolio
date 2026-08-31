import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import { SKILLS } from "../data/skills";
import { TESTIMONIALS } from "../data/testimonials";
import { SITE } from "../data/site";
import GentleParticles from "../components/GentleParticles";
import Reveal from "../components/Reveal";

export default function Home() {
  const { c } = useTheme();

  return (
    <>
      {/* Hero */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className={`font-mono  text-md ${c.muted} mb-4`}>{SITE.role}</p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-[1.1] max-w-2xl">
            I build interfaces that feel like they {" "}
            <span className={`${c.accent}`}> were made  on purpose.</span>
          </h1>
          <p className={`mt-6 max-w-md ${c.muted} leading-relaxed`}>
            Three years turning product ideas into apps people actually enjoy using, across web and
            mobile.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-colors`}
            >
              See my work
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={SITE.resumeUrl}
              download
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium ${c.pill} ${c.hoverText} transition-colors`}
            >
              <Download size={16} />
              Résumé
            </a>
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </section>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <section className={`${c.surface} py-24 transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-serif text-2xl mb-10">Skills &amp; <span className="text-[#1ED760]">tools</span></h2>
            <div className="grid sm:grid-cols-3 gap-10">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <h3 className={`font-mono text-sm ${c.accent} mb-4`}>{s.group}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className={c.muted}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-serif text-2xl mb-10">What people say</h2>

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-testimonials">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className={`w-[320px] shrink-0 bg-#1ED760 p-6 rounded-2xl ${c.surface} border ${c.border}`}
              >
                <p className="leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <p className="font-medium">{t.name}</p>

                <p className={`text-sm ${c.muted}`}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">

            {/* About content */}
            <div className="flex-1">
              <h2 className="font-serif text-2xl mb-6">About</h2>

              <div className={`space-y-4 ${c.muted} leading-relaxed max-w-lg`}>
                <p>
                  I'm a <span className={`${c.accent}`}> FULL SOFTWARE ENGINEER </span> focused on architecting and building high
                  quality digital products across web and mobile platforms.
                  I work across the entire stack from crafting polished,
                  intuitive interfaces t o designing scalable backend systems and
                  the infrastructure that brings them together.
                </p>

                <p>
                  I approach software engineering with a product mindset: Understanding the problem first, choosing
                  the problem first, choosing the right architecture and tools, and delivering solutions that are performant, secure, scalable
                  and mainttainable. My work spans frontend and mobile development, backend architecture, APIs, databases, authentication, integrations
                  and end to end application delivery.
                </p>

                <p>
                  I care about more than malking software work. I care about how it performs, hoe it scales, how it feels to use, and how easily
                  it can envolve as a product grows. i enjoy working on challenges problems, simplifying complexity, and turning ambitious ideas
                  into dependable software.
                </p>

                <p>
                  whether I'm building a web application, mobile product, backend platform, or complete digital
                  ecosystem, my goal is consistent: engineer thoughtful technology that
                  solves meaningful problems and deliver lasting value.
                </p>
              </div>
            </div>


            {/* Particle area */}
            <div className="hidden md:block flex-1 min-h-[400px]">
              <GentleParticles />
            </div>

          </div>
        </section>
      </Reveal>
    </>
  );
}
