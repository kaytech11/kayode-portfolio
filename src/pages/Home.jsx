// import { Link } from "react-router-dom";
// import { ArrowUpRight, Download } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";
// import SocialLinks from "../components/SocialLinks";
// import { SKILLS } from "../data/skills";
// import { TESTIMONIALS } from "../data/testimonials";
// import { SITE } from "../data/site";
// import GentleParticles from "../components/GentleParticles";
// import Reveal from "../components/Reveal";

// export default function Home() {
//   const { c } = useTheme();

//   return (
//     <>
//       {/* Hero */}
//       <Reveal>
//         <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
//           <p className={`font-mono  text-md ${c.muted} mb-4`}>{SITE.role}</p>
//           <h1 className="font-serif text-4xl sm:text-6xl leading-[1.1] max-w-2xl">
//             I build interfaces that feel like they {" "}
//             <span className={`${c.accent}`}> were made  on purpose.</span>
//           </h1>
//           <p className={`mt-6 max-w-md ${c.muted} leading-relaxed`}>
//             Three years turning product ideas into apps people actually enjoy using, across web and
//             mobile.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <Link
//               to="/work"
//               className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-colors`}
//             >
//               See my work
//               <ArrowUpRight size={16} />
//             </Link>
//             <a
//               href={SITE.resumeUrl}
//               download
//               className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium ${c.pill} ${c.hoverText} transition-colors`}
//             >
//               <Download size={16} />
//               Résumé
//             </a>
//           </div>

//           <div className="mt-6">
//             <SocialLinks />
//           </div>
//         </section>
//       </Reveal>

//       {/* Skills */}
//       <Reveal>
//         <section className={`${c.surface} py-24 transition-colors duration-300`}>
//           <div className="max-w-5xl mx-auto px-6">
//             <h2 className="font-serif text-2xl mb-10">Skills &amp; <span className="text-[#1ED760]">tools</span></h2>
//             <div className="grid sm:grid-cols-3 gap-10">
//               {SKILLS.map((s) => (
//                 <div key={s.group}>
//                   <h3 className={`font-mono text-sm ${c.accent} mb-4`}>{s.group}</h3>
//                   <ul className="space-y-2">
//                     {s.items.map((item) => (
//                       <li key={item} className={c.muted}>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </Reveal>

//       {/* Testimonials */}
//       <section className="max-w-5xl mx-auto px-6 py-24">
//         <h2 className="font-serif text-2xl mb-10">What people say</h2>

//         <div className="overflow-hidden">
//           <div className="flex gap-6 w-max animate-testimonials">
//             {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
//               <div
//                 key={`${t.name}-${index}`}
//                 className={`w-[320px] shrink-0 bg-#1ED760 p-6 rounded-2xl ${c.surface} border ${c.border}`}
//               >
//                 <p className="leading-relaxed mb-6">
//                   &ldquo;{t.quote}&rdquo;
//                 </p>

//                 <p className="font-medium">{t.name}</p>

//                 <p className={`text-sm ${c.muted}`}>
//                   {t.role}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <Reveal>
//         <section className="max-w-5xl mx-auto px-6 pb-24">
//           <div className="flex flex-col md:flex-row gap-12 md:gap-16">

//             {/* About content */}
//             <div className="flex-1">
//               <h2 className="font-serif text-2xl mb-6">About</h2>

//               <div className={`space-y-4 ${c.muted} leading-relaxed max-w-lg`}>
//                 <p>
//                   I'm a <span className={`${c.accent}`}> FULL SOFTWARE ENGINEER </span> focused on architecting and building high
//                   quality digital products across web and mobile platforms.
//                   I work across the entire stack from crafting polished,
//                   intuitive interfaces t o designing scalable backend systems and
//                   the infrastructure that brings them together.
//                 </p>

//                 <p>
//                   I approach software engineering with a product mindset: Understanding the problem first, choosing
//                   the problem first, choosing the right architecture and tools, and delivering solutions that are performant, secure, scalable
//                   and mainttainable. My work spans frontend and mobile development, backend architecture, APIs, databases, authentication, integrations
//                   and end to end application delivery.
//                 </p>

//                 <p>
//                   I care about more than malking software work. I care about how it performs, hoe it scales, how it feels to use, and how easily
//                   it can envolve as a product grows. i enjoy working on challenges problems, simplifying complexity, and turning ambitious ideas
//                   into dependable software.
//                 </p>

//                 <p>
//                   whether I'm building a web application, mobile product, backend platform, or complete digital
//                   ecosystem, my goal is consistent: engineer thoughtful technology that
//                   solves meaningful problems and deliver lasting value.
//                 </p>
//               </div>
//             </div>


//             {/* Particle area */}
//             <div className="hidden md:block flex-1 min-h-[400px]">
//               <GentleParticles />
//             </div>

//           </div>
//         </section>
//       </Reveal>
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { ArrowUpRight, Download, Code2, Smartphone, Server } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import { SKILLS } from "../data/skills";
import { TESTIMONIALS } from "../data/testimonials";
import { SITE } from "../data/site";
import GentleParticles from "../components/GentleParticles";
import Reveal from "../components/Reveal";
import profileImage from "../assests/projects/portfolio.png";

export default function Home() {
  const { c } = useTheme();

  return (
    <>

      <Reveal>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
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

            {/* Hero profile image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Particle background */}
              <div className="absolute inset-0 -z-10">
                <GentleParticles />
              </div>

              <div className="relative w-full max-w-sm sm:max-w-md">

                {/* Decorative frame */}
                <div
                  className={`absolute -inset-3 rounded-[2rem] border ${c.border} rotate-3 opacity-60`}
                />

                <div
                  className={`absolute -inset-3 rounded-[2rem] border ${c.border} -rotate-2 opacity-30`}
                />

                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-[2rem] border ${c.border} ${c.surface} shadow-2xl`}
                >
                  <img
                    src={profileImage}
                    alt="Professional portrait"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Small floating label */}
                <div
                  className={`absolute -bottom-5 -left-4 sm:-left-8 px-4 py-3 rounded-2xl ${c.surface} border ${c.border} backdrop-blur-md shadow-lg`}
                >
                  <p className={`font-mono text-xs ${c.muted}`}>
                    BUILDING WITH
                  </p>
                  <p className="font-medium text-sm mt-1">
                    purpose &amp; precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/*  INTRO / SERVICES */}
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

      {/*   TESTIMONIALS */}
      <section
        className={`${c.surface} border-y ${c.border} py-24 sm:py-28 overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <p className={`font-mono text-sm ${c.accent} mb-3`}>
            TESTIMONIALS
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl">
            What people say
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

                <p className="font-medium">
                  {t.name}
                </p>

                <p className={`text-sm ${c.muted} mt-1`}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
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

            {/* Secondary image / visual */}
            <div className="relative min-h-[420px] flex items-center justify-center">

              {/* Particles */}
              <div className="absolute inset-0">
                <GentleParticles />
              </div>

              {/* Image card */}
              <div className="relative w-full max-w-sm">

                <div
                  className={`absolute -inset-3 rounded-[2rem] border ${c.border} -rotate-3 opacity-40`}
                />

                <div
                  className={`relative overflow-hidden rounded-[2rem] border ${c.border} ${c.surface}`}
                >
                  <img
                    src={profileImage}
                    alt="Portrait"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Floating status */}
                <div
                  className={`absolute -right-4 sm:-right-8 top-8 px-4 py-3 rounded-2xl ${c.surface} border ${c.border} shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${c.accentBg}`}
                    />
                    <span className="text-sm font-medium">
                      Building
                    </span>
                  </div>
                </div>
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
    </>
  );
}
