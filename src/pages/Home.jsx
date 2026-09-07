import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Download, Code2, Smartphone, Server, Sparkles, Terminal,} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import { SKILLS } from "../data/skills";
import { TESTIMONIALS } from "../data/testimonials";
import { SITE } from "../data/site";
import GentleParticles from "../components/GentleParticles";
import Reveal from "../components/Reveal";
import profileImage from "../assests/projects/portfolio1.png";

export default function Home() {
  const { c } = useTheme();

  const [isHeroDancing, setIsHeroDancing] = useState(false);
  const [isAboutDancing, setIsAboutDancing] = useState(false);

  const handleHeroClick = () => {
    setIsHeroDancing(false);

    requestAnimationFrame(() => {
      setIsHeroDancing(true);
    });

    setTimeout(() => {
      setIsHeroDancing(false);
    }, 900);
  };

  const handleAboutClick = () => {
    setIsAboutDancing(false);

    requestAnimationFrame(() => {
      setIsAboutDancing(true);
    });

    setTimeout(() => {
      setIsAboutDancing(false);
    }, 700);
  };

  return (
    <>
      {/*  HERO */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">

            {/* Hero content */}
            <div>
              <p className={`font-mono text-sm sm:text-base ${c.muted} mb-5`}>
                {SITE.role}
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
                I build interfaces that feel like they{" "}
                <span className={c.accent}>were made on purpose.</span>
              </h1>

              <p
                className={`mt-7 max-w-xl ${c.muted} text-base sm:text-lg leading-relaxed`}
              >
                Full Software Engineer focused on building thoughtful,
                reliable digital products across web, mobile, and backend
                systems.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/work"
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-all duration-300 hover:-translate-y-0.5`}
                >
                  See my work
                  <ArrowUpRight size={17} />
                </Link>

                <a
                  href={SITE.resumeUrl}
                  download
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium ${c.pill} ${c.hoverText} transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <Download size={17} />
                  Résumé
                </a>
              </div>

              <div className="mt-7">
                <SocialLinks />
              </div>
            </div>

            {/*   HERO PROFILE IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 -z-10">
                <GentleParticles />
              </div>

              <div className="relative w-full max-w-sm sm:max-w-md">

                {/* Ambient glow */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${c.accentBg} opacity-[0.08] blur-3xl`}
                />

                {/* Decorative frames */}
                <div
                  className={`absolute -inset-4 rounded-[2.2rem] border ${c.border} rotate-3 opacity-40`}
                />

                <div
                  className={`absolute -inset-4 rounded-[2.2rem] border ${c.border} -rotate-2 opacity-20`}
                />

                {/* Interactive image */}
                <button
                  type="button"
                  onClick={handleHeroClick}
                  aria-label="Interact with profile picture"
                  className={`relative block w-full text-left rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#1ED760] focus-visible:ring-offset-4 ${
                    isHeroDancing ? "profile-dance" : "profile-float"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-[2rem] border ${c.border} ${c.surface} shadow-2xl cursor-pointer`}
                  >
                    <img
                      src={profileImage}
                      alt="Kayode — Full Software Engineer"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Image status */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 rounded-2xl bg-black/35 backdrop-blur-md border border-white/15 text-white">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1ED760] opacity-60" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1ED760]" />
                        </span>

                        <span className="text-xs font-medium">
                          Full Software Engineer
                        </span>
                      </div>

                      <span className="text-[10px] uppercase tracking-wider opacity-70">
                        Tap me
                      </span>
                    </div>
                  </div>
                </button>

                {/* Experience badge */}
                <div
                  className={`absolute -right-5 sm:-right-10 top-8 sm:top-10 z-20 ${c.surface} border ${c.border} rounded-2xl px-4 py-3.5 shadow-xl backdrop-blur-xl animate-floating-badge`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${c.accentBg} flex items-center justify-center text-black shadow-lg`}
                    >
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p
                        className={`text-[10px] uppercase tracking-widest ${c.muted}`}
                      >
                        Experience
                      </p>

                      <p className="text-sm font-semibold mt-0.5">
                        2+ Years
                      </p>

                      <p className={`text-[11px] ${c.muted}`}>
                        Building digital products
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability badge */}
                <div
                  className={`absolute -left-5 sm:-left-10 bottom-7 z-20 ${c.surface} border ${c.border} rounded-2xl px-4 py-3 shadow-xl backdrop-blur-xl`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${c.accentBg} shadow-[0_0_12px_rgba(30,215,96,0.6)]`}
                    />

                    <div>
                      <p className="text-xs font-semibold">
                        Available for work
                      </p>

                      <p className={`text-[10px] ${c.muted} mt-0.5`}>
                        Let's build something meaningful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* WHAT I DO*/}
      <Reveal>
        <section
          className={`${c.surface} border-y ${c.border} py-20 sm:py-24 transition-colors duration-300`}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-2xl mb-14">
              <p className={`font-mono text-sm ${c.accent} mb-3`}>
                WHAT I DO
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl">
                From idea to a product people can actually use.
              </h2>

              <p className={`mt-5 ${c.muted} leading-relaxed max-w-xl`}>
                I work across the stack to turn complex ideas into clean,
                scalable, and dependable digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Frontend */}
              <div
                className={`group rounded-3xl border ${c.border} p-7 transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl ${c.pill} flex items-center justify-center mb-6`}
                >
                  <Code2 size={21} />
                </div>

                <h3 className="font-serif text-xl mb-3">
                  Frontend Engineering
                </h3>

                <p className={`${c.muted} leading-relaxed text-sm`}>
                  Building responsive, accessible, and polished web
                  interfaces with a strong focus on usability and performance.
                </p>
              </div>

              {/* Mobile */}
              <div
                className={`group rounded-3xl border ${c.border} p-7 transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl ${c.pill} flex items-center justify-center mb-6`}
                >
                  <Smartphone size={21} />
                </div>

                <h3 className="font-serif text-xl mb-3">
                  Mobile Development
                </h3>

                <p className={`${c.muted} leading-relaxed text-sm`}>
                  Creating reliable mobile experiences that feel natural,
                  perform well, and solve real problems for their users.
                </p>
              </div>

              {/* Backend */}
              <div
                className={`group rounded-3xl border ${c.border} p-7 transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl ${c.pill} flex items-center justify-center mb-6`}
                >
                  <Server size={21} />
                </div>

                <h3 className="font-serif text-xl mb-3">
                  Backend &amp; Systems
                </h3>

                <p className={`${c.muted} leading-relaxed text-sm`}>
                  Designing APIs, databases, authentication, integrations,
                  and scalable systems that keep products dependable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SKILLS */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
          <div className="max-w-2xl mb-12">
            <p className={`font-mono text-sm ${c.accent} mb-3`}>
              TOOLKIT
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              Skills &amp; tools
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3
                  className={`font-mono text-sm ${c.accent} mb-5 uppercase tracking-wide`}
                >
                  {s.group}
                </h3>

                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className={`${c.muted} transition-colors duration-200`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TESTIMONIAL */}
      <section
        className={`${c.surface} border-y ${c.border} py-24 sm:py-28 overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <p className={`font-mono text-sm ${c.accent} mb-3`}>
            TESTIMONIALS
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl">
            Built with people, not just code.
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-testimonials px-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className={`w-[320px] sm:w-[360px] shrink-0 p-7 rounded-3xl ${c.surface} border ${c.border}`}
              >
                <p className="leading-relaxed mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <p className="font-medium">{t.name}</p>

                <p className={`text-sm ${c.muted} mt-1`}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-14 lg:gap-24 items-center">

            {/* About content */}
            <div>
              <p className={`font-mono text-sm ${c.accent} mb-3`}>
                ABOUT ME
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl mb-8">
                Engineering products with a product mindset.
              </h2>

              <div
                className={`space-y-5 ${c.muted} leading-relaxed max-w-2xl`}
              >
                <p>
                  I'm a{" "}
                  <span className={c.accent}>
                    FULL SOFTWARE ENGINEER
                  </span>{" "}
                  focused on architecting and building high-quality digital
                  products across web and mobile platforms.
                </p>

                <p>
                  I work across the entire stack from crafting polished,
                  intuitive interfaces to designing scalable backend systems
                  and the infrastructure that brings them together.
                </p>

                <p>
                  I approach software engineering with a product mindset:
                  understanding the problem first, choosing the right
                  architecture and tools, and delivering solutions that are
                  performant, secure, scalable, and maintainable.
                </p>

                <p>
                  My work spans frontend and mobile development, backend
                  architecture, APIs, databases, authentication, integrations,
                  and end-to-end application delivery.
                </p>

                <p>
                  I care about more than making software work. I care about
                  how it performs, how it scales, how it feels to use, and how
                  easily it can evolve as a product grows.
                </p>

                <p>
                  Whether I'm building a web application, mobile product,
                  backend platform, or complete digital ecosystem, my goal is
                  consistent: engineer thoughtful technology that solves
                  meaningful problems and delivers lasting value.
                </p>
              </div>

              <div className="mt-9">
                <Link
                  to="/about"
                  className={`inline-flex items-center gap-2 font-medium ${c.hoverText} transition-colors`}
                >
                  More about me
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* =====================================================
                NEW ABOUT VISUAL
            ===================================================== */}
            <div className="relative min-h-[500px] flex items-center justify-center">

              {/* Background particles */}
              <div className="absolute inset-0">
                <GentleParticles />
              </div>

              {/* Ambient glow */}
              <div
                className={`absolute w-72 h-72 rounded-full ${c.accentBg} opacity-[0.06] blur-3xl`}
              />

              <div className="relative w-full max-w-sm">

                {/* Decorative rotated frame */}
                <div
                  className={`absolute -inset-4 rounded-[2.5rem] border ${c.border} rotate-6 opacity-30`}
                />

                <div
                  className={`absolute -inset-4 rounded-[2.5rem] border ${c.border} -rotate-3 opacity-20`}
                />

                {/* Main image */}
                <button
                  type="button"
                  onClick={handleAboutClick}
                  aria-label="Interact with Kayode's profile picture"
                  className={`relative block w-full text-left outline-none rounded-[2.5rem] ${
                    isAboutDancing ? "about-image-dance" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-[2.5rem] border ${c.border} ${c.surface} shadow-2xl cursor-pointer group`}
                  >
                    <img
                      src={profileImage}
                      alt="Kayode Omoniyi — Software Engineer"
                      className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-[1.04]"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                    {/* Image information */}
                    <div className="absolute left-6 right-6 bottom-6 text-white">
                      <div className="flex items-end justify-between gap-4">

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
                            Software Engineer
                          </p>

                          <h3 className="font-serif text-2xl sm:text-3xl">
                            Kayode Omoniyi
                          </h3>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Top-left label */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-10 z-20 ${c.surface} border ${c.border} rounded-2xl px-4 py-3 shadow-xl backdrop-blur-xl`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-xl ${c.pill} flex items-center justify-center`}
                    >
                      <Terminal size={15} />
                    </div>

                    <div>
                      <p
                        className={`text-[9px] uppercase tracking-widest ${c.muted}`}
                      >
                        About the engineer
                      </p>

                      <p className="text-xs font-semibold mt-0.5">
                        Building &amp; shipping
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right experience label */}
                <div
                  className={`absolute -right-5 sm:-right-9 top-1/2 -translate-y-1/2 z-20 ${c.surface} border ${c.border} rounded-2xl px-4 py-3 shadow-xl backdrop-blur-xl`}
                >
                  <p
                    className={`text-[9px] uppercase tracking-widest ${c.muted}`}
                  >
                    Experience
                  </p>

                  <p className={`text-xl font-semibold ${c.accent} mt-1`}>
                    3+
                  </p>

                  <p className={`text-[10px] ${c.muted}`}>
                    Years
                  </p>
                </div>

                {/* Bottom-left year label */}
                <div
                  className={`absolute -left-4 sm:-left-8 bottom-8 z-20 ${c.surface} border ${c.border} rounded-2xl px-4 py-3 shadow-xl backdrop-blur-xl`}
                >
                  <p
                    className={`font-mono text-[10px] ${c.accent}`}
                  >
                    2026
                  </p>

                  <p className="text-xs font-medium mt-1">
                    Building meaningful
                    <br />
                    digital products.
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -right-2 -bottom-5 w-16 h-16 rounded-2xl border ${c.border} opacity-40 rotate-12 -z-10`}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FINAL CTA */}
      <Reveal>
        <section
          className={`${c.surface} border-t ${c.border} py-24 sm:py-28`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className={`font-mono text-sm ${c.accent} mb-4`}>
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Let's build something{" "}
              <span className={c.accent}>worth using.</span>
            </h2>

            <p
              className={`${c.muted} max-w-xl mx-auto mt-6 leading-relaxed`}
            >
              Whether you have a product idea, an existing application that
              needs improvement, or a complex technical problem to solve,
              let's talk.
            </p>

            <div className="mt-9">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-all duration-300 hover:-translate-y-0.5`}
              >
                Start a conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/*  ANIMATIONS */}

      <style>{`
        @keyframes profileFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-7px) rotate(0.4deg);
          }
        }

        @keyframes profileDance {
          0% {
            transform: translateX(0) rotate(0deg) scale(1);
          }

          15% {
            transform: translateX(-8px) rotate(-2deg) scale(1.01);
          }

          30% {
            transform: translateX(8px) rotate(2deg) scale(1.02);
          }

          45% {
            transform: translateX(-7px) rotate(-1.7deg) scale(1.01);
          }

          60% {
            transform: translateX(6px) rotate(1.5deg) scale(1.01);
          }

          75% {
            transform: translateX(-3px) rotate(-0.8deg) scale(1);
          }

          100% {
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes aboutImageDance {
          0% {
            transform: rotate(0deg) translateY(0) scale(1);
          }

          25% {
            transform: rotate(-2deg) translateY(-4px) scale(1.015);
          }

          50% {
            transform: rotate(2deg) translateY(-7px) scale(1.025);
          }

          75% {
            transform: rotate(-1deg) translateY(-3px) scale(1.01);
          }

          100% {
            transform: rotate(0deg) translateY(0) scale(1);
          }
        }

        @keyframes floatingBadge {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .profile-float {
          animation: profileFloat 4.5s ease-in-out infinite;
        }

        .profile-dance {
          animation: profileDance 900ms cubic-bezier(0.36, 0.07, 0.19, 0.97);
        }

        .about-image-dance {
          animation: aboutImageDance 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-floating-badge {
          animation: floatingBadge 3.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .profile-float,
          .profile-dance,
          .about-image-dance,
          .animate-floating-badge {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}