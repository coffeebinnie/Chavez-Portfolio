import { useState, useEffect } from "react";

type Section = "about" | "quotes" | "movies" | "series" | "awards" | "family" | "guestbook";

export default function MadsPage() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [fanCount, setFanCount] = useState(1337);
  const [selectedMood, setSelectedMood] = useState("Dancing Martin 🍷");
  const [currentQuote, setCurrentQuote] = useState(
    "\"I don't think I'm a villain. I think I'm a normal guy who happens to do villainous things on screen.\""
  );

  const quotes = [
    "\"I don't think I'm a villain. I think I'm a normal guy who happens to do villainous things on screen.\"",
    "\"Dancing is a team sport, but acting is individual... or maybe it's the other way around?\"",
    "\"If you play a bad guy, you have to find his humanity. Otherwise, it's just boring.\"",
    "\"Beer, sports, and good friends. That's my definition of a perfect night.\"",
    "\"I love playing Hannibal. He is a guy who loves life and sees beauty in everything... even bad things!\""
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  // ✨ SPARKLE CURSOR TRAIL EFFECT
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      const colors = ["#f9a8d4", "#fbcfe8", "#ffffff", "#ec4899", "#be185d"];

      sparkle.className = "sparkle-particle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // UPDATE ACTIVE SECTION ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ["about", "quotes", "movies", "series", "awards", "family", "guestbook"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: Section) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen text-pink-900 selection:bg-pink-300 selection:text-pink-900 relative overflow-x-hidden"
      style={{
        fontFamily: "'Press Start 2P', monospace",
        cursor: "url('https://cur.cursors-4u.net/nature/nat-11/nat1021.cur'), auto",
        backgroundColor: "#fbcfe8",
        backgroundImage: `radial-gradient(#f9a8d4 2px, transparent 2px), radial-gradient(#f9a8d4 2px, #fce7f3 2px)`,
        backgroundSize: "32px 32px",
        backgroundPosition: "0 0, 16px 16px",
      }}
    >
      {/* STYLES & ANIMATIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .sparkle-particle {
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          box-shadow: 0 0 6px #f472b6, 0 0 12px #fff;
          animation: sparkleFade 0.6s ease-out forwards;
        }

        @keyframes sparkleFade {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5) rotate(45deg); opacity: 0; }
        }

        .pixel-box {
          box-shadow: 4px 4px 0px #db2777, 8px 8px 0px #f472b6;
        }

        .pixel-btn {
          box-shadow: 3px 3px 0px #be185d;
        }

        .pixel-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0px #be185d;
        }

        .bounce-badge {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .marquee-text {
          display: inline-block;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* TOP DECORATIVE MARQUEE BANNER */}
      <div className="bg-pink-600 text-pink-100 text-[10px] py-1 border-b-2 border-pink-700 overflow-hidden whitespace-nowrap">
        <span className="marquee-text">
          ★ WELCOME TO THE ULTIMATE MADS MIKKELSEN FAN CLUB ★ LIVE LAUGH LOVE MADS ♡ ★ BEST ACTOR IN THE UNIVERSE ★ 
        </span>
      </div>

      {/* MAIN HEADER */}
      <header className="p-6 text-center max-w-4xl mx-auto mt-4 relative">
        <div className="bg-white border-4 border-pink-400 p-6 rounded-none pixel-box relative">
          <span className="absolute -top-4 -left-4 text-2xl bounce-badge">🎀</span>
          <span className="absolute -top-4 -right-4 text-2xl bounce-badge">✨</span>
          <span className="absolute -bottom-4 -left-4 text-2xl bounce-badge">💋</span>
          <span className="absolute -bottom-4 -right-4 text-2xl bounce-badge">👑</span>

          <h1 className="text-2xl sm:text-3xl font-black text-pink-600 tracking-wider leading-relaxed">
            ★ MADS MIKKELSEN ★
          </h1>
          <p className="text-[10px] text-pink-500 mt-2 leading-loose">
            ♡ actor • performer • legendary icon ♡
          </p>

          {/* INTERACTIVE FAN COUNTER & MOOD PICKER */}
          <div className="mt-4 pt-4 border-t-2 border-dashed border-pink-300 flex flex-wrap justify-center items-center gap-4 text-[9px]">
            <button
              onClick={() => setFanCount(fanCount + 1)}
              className="pixel-btn bg-pink-500 text-white px-3 py-2 border-2 border-pink-700 hover:bg-pink-600"
            >
              💖 Click to Love Mads! ({fanCount})
            </button>

            <div className="bg-pink-100 p-2 border-2 border-pink-300 text-pink-800">
              <span>Current Mood: </span>
              <strong className="text-pink-600">{selectedMood}</strong>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY NAV BAR */}
      <nav className="sticky top-2 z-50 max-w-4xl mx-auto px-4 my-6">
        <div className="bg-pink-200 border-4 border-pink-400 p-2 flex flex-wrap justify-center gap-2 pixel-box">
          {(["about", "quotes", "movies", "series", "awards", "family", "guestbook"] as Section[]).map(
            (s) => (
              <button
                key={s}
                onClick={() => scrollToSection(s)}
                className={`pixel-btn px-3 py-2 text-[10px] uppercase border-2 transition-all ${
                  activeSection === s
                    ? "bg-pink-500 text-white border-pink-700 font-bold"
                    : "bg-white text-pink-700 border-pink-300 hover:bg-pink-100"
                }`}
              >
                [{s}]
              </button>
            )
          )}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-4xl mx-auto px-4 pb-12 space-y-10">
        
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed space-y-4"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [♡] ABOUT MADS
            </h2>
            <span className="text-xs">01/07</span>
          </div>

          <div className="space-y-3 leading-relaxed text-[11px]">
            <p>
              <strong className="text-pink-600">Mads Dittmann Mikkelsen</strong> (born November 22, 1965, in Copenhagen, Denmark) is one of the most celebrated international actors of our era!
            </p>
            <p>
              Originally a trained gymnast and professional dancer, Mikkelsen spent almost a decade performing on stage before transitioning to cinema in 1996.
            </p>
            <p>
              He rose to fame in the acclaimed Danish crime drama <em>Pusher</em>. His magnetic, intense physical presence quickly made him a global favorite.
            </p>
          </div>

          {/* MOOD SELECTOR WIDGET */}
          <div className="bg-pink-50 p-4 border-2 border-pink-300 mt-4 space-y-2">
            <p className="text-[10px] font-bold text-pink-700">🎭 Which Mads are you feeling today?</p>
            <div className="flex flex-wrap gap-2 text-[9px]">
              {[
                "Dancing Martin 🍷",
                "Intense Le Chiffre 🪙",
                "Sassy Hannibal 🍷",
                "Heroic Galen Erso 🚀",
              ].map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMood(m)}
                  className="pixel-btn bg-white px-2 py-1 border-2 border-pink-400 text-pink-700 hover:bg-pink-200"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* RANDOM QUOTE GENERATOR SECTION */}
        <section
          id="quotes"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed space-y-4"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [💬] MADS QUOTE GENERATOR
            </h2>
            <span className="text-xs">02/07</span>
          </div>

          <div className="bg-pink-100 p-4 border-2 border-pink-300 text-center space-y-4">
            <p className="text-[10px] italic text-pink-900 leading-loose">
              {currentQuote}
            </p>

            <button
              onClick={getRandomQuote}
              className="pixel-btn bg-pink-500 text-white text-[9px] px-4 py-2 border-2 border-pink-700 hover:bg-pink-600"
            >
              🎲 Generate Another Quote!
            </button>
          </div>
        </section>

        {/* MOVIES SECTION */}
        <section
          id="movies"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [🎬] FEATURE FILMS
            </h2>
            <span className="text-xs">03/07</span>
          </div>

          <ul className="space-y-3 text-[10px]">
            {[
              { title: "Casino Royale", year: "2006", role: "Le Chiffre" },
              { title: "The Hunt", year: "2012", role: "Lucas" },
              { title: "Doctor Strange", year: "2016", role: "Kaecilius" },
              { title: "Rogue One: A Star Wars Story", year: "2016", role: "Galen Erso" },
              { title: "Polar", year: "2019", role: "Duncan Vizla" },
              { title: "Another Round", year: "2020", role: "Martin" },
              { title: "Fantastic Beasts 3", year: "2022", role: "Gellert Grindelwald" },
              { title: "Indiana Jones 5", year: "2023", role: "Jürgen Voller" },
            ].map((m, i) => (
              <li
                key={i}
                className="bg-pink-50 p-3 border-2 border-pink-200 flex flex-col sm:flex-row sm:justify-between gap-1 hover:bg-pink-100 transition-all"
              >
                <span className="font-bold text-pink-700">🎬 {m.title} ({m.year})</span>
                <span className="text-pink-500">as {m.role}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SERIES SECTION */}
        <section
          id="series"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [📺] TELEVISION SHOWS
            </h2>
            <span className="text-xs">04/07</span>
          </div>

          <div className="space-y-4 text-[10px]">
            <div className="bg-pink-50 p-4 border-2 border-pink-200">
              <h3 className="font-bold text-pink-700 text-xs mb-1">📺 HANNIBAL (2013–2015)</h3>
              <p className="leading-relaxed">
                Portrayed Dr. Hannibal Lecter across three critically acclaimed seasons, winning international fanbase praise for his sophisticated, terrifying elegance.
              </p>
            </div>

            <div className="bg-pink-50 p-4 border-2 border-pink-200">
              <h3 className="font-bold text-pink-700 text-xs mb-1">📺 UNIT ONE (2000–2004)</h3>
              <p className="leading-relaxed">
                Starred as Allan Fischer in the hit Danish police procedural series, which earned an International Emmy Award.
              </p>
            </div>
          </div>
        </section>

        {/* AWARDS SECTION */}
        <section
          id="awards"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [🏆] HONORS & AWARDS
            </h2>
            <span className="text-xs">05/07</span>
          </div>

          <ul className="space-y-3 text-[10px]">
            {[
              "🏆 Cannes Film Festival – Best Actor (The Hunt)",
              "🏆 European Film Awards – Best European Actor (Another Round)",
              "🏆 Knight of the Order of the Dannebrog (Denmark)",
              "🏆 Bodil & Robert Awards – Multiple Wins (Danish Film Academy)",
            ].map((award, i) => (
              <li key={i} className="bg-pink-50 p-3 border-2 border-pink-200 text-pink-800">
                {award}
              </li>
            ))}
          </ul>
        </section>

        {/* FAMILY SECTION */}
        <section
          id="family"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed space-y-3"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [🏠] PERSONAL LIFE
            </h2>
            <span className="text-xs">06/07</span>
          </div>

          <p className="text-[10px] leading-relaxed">
            Mads has been married to choreographer <strong>Hanne Jacobsen</strong> since 2000, after being together since 1987. They have two children, Viola and Carl.
          </p>

          <p className="text-[10px] leading-relaxed">
            His older brother, <strong>Lars Mikkelsen</strong>, is also a renowned actor celebrated for his work in <em>Sherlock</em>, <em>House of Cards</em>, and voicing Grand Admiral Thrawn in <em>Star Wars Rebels / Ahsoka</em>.
          </p>
        </section>

        {/* RETRO GUESTBOOK SECTION */}
        <section
          id="guestbook"
          className="bg-white/95 border-4 border-pink-400 p-6 pixel-box text-xs leading-relaxed space-y-4"
        >
          <div className="flex items-center justify-between border-b-4 border-pink-300 pb-2 mb-4">
            <h2 className="text-base text-pink-600 font-bold">
              [📝] FAN GUESTBOOK
            </h2>
            <span className="text-xs">07/07</span>
          </div>

          <div className="bg-pink-50 p-4 border-2 border-pink-200 space-y-3 text-[10px]">
            <p className="font-bold text-pink-700">Sign the Mads Guestbook! 💌</p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Fan Name..."
                className="w-full p-2 border-2 border-pink-300 text-[10px] bg-white focus:outline-pink-500"
              />
              <textarea
                placeholder="Leave a message for Mads..."
                rows={2}
                className="w-full p-2 border-2 border-pink-300 text-[10px] bg-white focus:outline-pink-500"
              ></textarea>
              <button
                onClick={() => alert("Thanks for signing the guestbook! ✨ ♡")}
                className="pixel-btn bg-pink-500 text-white px-4 py-2 border-2 border-pink-700 hover:bg-pink-600"
              >
                Sign Guestbook ✨
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-[9px] text-pink-700 bg-pink-200 border-t-4 border-pink-400">
        <p className="mb-2">Made with 💗 by Kyrie • Live Laugh Love Mads Mikkelsen</p>
        <p className="text-pink-500">© 2000s Retro Fansite • All rights reserved</p>
      </footer>
    </div>
  );
}