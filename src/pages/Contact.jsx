// import { Download } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";
// import SocialLinks from "../components/SocialLinks";
// import { SITE } from "../data/site";

// export default function Contact() {
//   const { c } = useTheme();

//   return (
//     <section className="max-w-5xl mx-auto px-6 pt-16 pb-24 min-h-[70vh] flex flex-col justify-center">
//       <p className={`font-mono text-sm ${c.accent} mb-3`}>Get in touch</p>
//       <h1 className="font-serif text-3xl sm:text-5xl mb-8 max-w-xl">
//         Have a project in mind? Let's talk.
//       </h1>
//       <a
//         href={`mailto:${SITE.email}`}
//         className={`text-xl sm:text-2xl underline underline-offset-4 mb-10 ${c.hoverText}`}
//       >
//         {SITE.email}
//       </a>

//       <div className="flex items-center gap-4">
//         <SocialLinks size={20} />
//         <a
//           href={SITE.resumeUrl}
//           download
//           className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-colors`}
//         >
//           <Download size={16} />
//           Résumé
//         </a>
//       </div>
//     </section>
//   );
// }


import { Download, Send } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import SocialLinks from "../components/SocialLinks";
import { SITE } from "../data/site";

export default function Contact() {
  const { c } = useTheme();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xaeyqgpr", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact intro */}
        <div>
          <p className={`font-mono text-sm ${c.accent} mb-3`}>
            Get in touch
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl leading-tight mb-6">
            Have a project in mind? Let's talk.
          </h1>

          <p className={`leading-relaxed ${c.muted} max-w-md mb-8`}>
            Whether you have a project in mind, need help bringing an idea to
            life, or simply want to connect, feel free to reach out.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className={`text-lg underline underline-offset-4 ${c.hoverText}`}
          >
            {SITE.email}
          </a>

          <div className="flex items-center gap-4 mt-8">
            <SocialLinks size={20} />

            <a
              href={SITE.resumeUrl}
              download
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-colors`}
            >
              <Download size={16} />
              Résumé
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded-xl border ${c.border} ${c.surface} outline-none focus:ring-1 focus:ring-[#1ED760] transition`}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl border ${c.border} ${c.surface} outline-none focus:ring-1 focus:ring-[#1ED760] transition`}
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Project inquiry"
              className={`w-full px-4 py-3 rounded-xl border ${c.border} ${c.surface} outline-none focus:ring-1 focus:ring-[#1ED760] transition`}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me a little about your project..."
              className={`w-full px-4 py-3 rounded-xl border ${c.border} ${c.surface} outline-none focus:ring-1 focus:ring-[#1ED760] transition resize-none`}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-black ${c.accentBg} ${c.accentBgHover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send size={16} />

              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {/* Success message */}
            {status === "success" && (
              <p className="mt-4 text-sm text-[#1ED760]">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {/* Error message */}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-500">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}