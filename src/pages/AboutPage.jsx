import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Eyebrow, Btn } from "../components/ui/index";
import { useReveal } from "../hooks/index";
import SEO from "../components/SEO";

// ─── Slide Images ─────────────────────────────────────────────────────────────
// Rename your images to match these, or update the filenames below
import slide1 from "../assets/images/slide1.png"; // Operations
import slide2 from "../assets/images/slide2.png"; // Horticulture
import slide3 from "../assets/images/slide3.png"; // Engineering
import slide4 from "../assets/images/slide4.png"; // Soft Services
import slide5 from "../assets/images/slide5.png"; // Construction & Interior

// ─── Slider Data ──────────────────────────────────────────────────────────────

const SLIDES = [
  {
    tag: "Operations",
    title: "Precision Facility\nManagement",
    desc: "Integrated systems across all verticals — electrical, mechanical & soft services.",
    img: slide1,
  },
  {
    tag: "Horticulture",
    title: "Lush Green Space\nManagement",
    desc: "Professional landscaping and horticulture services for every environment.",
    img: slide2,
  },
  {
    tag: "Engineering",
    title: "Electrical & Mechanical\nExcellence",
    desc: "OHS-compliant electrical and mechanical services with verified expertise.",
    img: slide3,
  },
  {
    tag: "Soft Services",
    title: "Hospitality & Soft\nServices",
    desc: "End-to-end soft service management for residential, commercial & hospitality sectors.",
    img: slide4,
  },
  {
  tag: "Construction",
  title: "Construction &\nInterior",
  desc: "Comprehensive construction and interior solutions tailored for residential, commercial & industrial spaces.",
  img: slide5,
},

  
];

// ─── Hero Slider ──────────────────────────────────────────────────────────────

const HeroSlider = () => {
  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((i) => {
    if (animating) return;
    setAnimating(true);
    setCur(i);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const next = useCallback(() => goTo((cur + 1) % SLIDES.length), [cur, goTo]);
  const prev = useCallback(() => goTo((cur - 1 + SLIDES.length) % SLIDES.length), [cur, goTo]);

  useEffect(() => {
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [next]);

  const { tag, title, desc, img } = SLIDES[cur];

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(200,150,62,0.28)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.45)",
      }}
    >
      {/* ── Slide visual area ── */}
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>

        {/* Background image */}
        <div
          key={cur}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            animation: "slideIn 0.55s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
        />

        {/* Dark gradient overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(25,24,76,0.88) 0%, rgba(25,24,76,0.45) 60%, rgba(25,24,76,0.15) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 120,
            background: "linear-gradient(to top, rgba(12,11,44,0.85) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Slide text */}
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "0 28px 26px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(200,150,62,0.16)",
              border: "1px solid rgba(200,150,62,0.45)",
              color: "#C8963E",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 4,
              marginBottom: 10,
            }}
          >
            {tag}
          </span>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
              fontWeight: 700,
              color: "#E8EDF2",
              lineHeight: 1.28,
              marginBottom: 8,
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 12,
              color: "rgba(232,237,242,0.65)",
              fontWeight: 300,
              lineHeight: 1.55,
              maxWidth: 290,
              margin: 0,
            }}
          >
            {desc}
          </p>
        </div>

        {/* Arrow buttons */}
        <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
          {[{ fn: prev, lbl: "←" }, { fn: next, lbl: "→" }].map(({ fn, lbl }) => (
            <button
              key={lbl}
              onClick={fn}
              aria-label={lbl === "←" ? "Previous" : "Next"}
              style={{
                width: 34, height: 34,
                borderRadius: 8,
                border: "1px solid rgba(200,150,62,0.32)",
                background: "rgba(25,24,76,0.55)",
                color: "#C8963E",
                fontSize: 15,
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(6px)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(200,150,62,0.22)";
                e.currentTarget.style.borderColor = "#C8963E";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(25,24,76,0.55)";
                e.currentTarget.style.borderColor = "rgba(200,150,62,0.32)";
              }}
            >
              {lbl}
            </button>
          ))}
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "rgba(12,11,44,0.82)",
          borderTop: "1px solid rgba(200,150,62,0.14)",
        }}
      >
        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === cur ? 20 : 7,
                height: 7,
                borderRadius: i === cur ? 4 : "50%",
                background: i === cur ? "#C8963E" : "rgba(200,150,62,0.22)",
                border: "1px solid rgba(200,150,62,0.38)",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <span style={{ fontSize: 11, color: "rgba(200,150,62,0.55)", letterSpacing: "0.1em" }}>
          {String(cur + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>

        {/* Label */}
        <span style={{ fontSize: 10, color: "rgba(232,237,242,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {SLIDES[cur].tag}
        </span>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1);    }
        }
      `}</style>
    </div>
  );
};

// ─── PageHero ─────────────────────────────────────────────────────────────────

const PageHero = () => (
  <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
    <div className="hero-geo" />
    <div className="noise-overlay" />
    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="mb-6"><Eyebrow>Our Story</Eyebrow></div>
          <h1
            className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
          >
            Two Decades of<br />
            <span style={{ color: "#C8963E" }}>Engineering Trust.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl text-[#5A6A7A] dark:text-[#8B9BB0]"
            style={{ fontWeight: 300 }}
          >
            A lean, integrity-first facility management firm based in Ludhiana, Punjab —
            built on experience, driven by accountability.
          </p>
        </div>

        <div className="hidden lg:block">
          <HeroSlider />
        </div>
      </div>
    </div>
  </section>
);

// ─── Story ────────────────────────────────────────────────────────────────────

const Story = () => {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <section className="section" style={{ background: "var(--off-white)" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div className="mb-5"><Eyebrow>Who We Are</Eyebrow></div>
            <h2 className="section-title mb-6">
              Amconz<br />
              <span style={{ color: "var(--gold)" }}>Infra Services</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Founded in Ludhiana, Punjab, Amconz Infra Services has spent over two decades
              delivering precision maintenance and facility management across residential, commercial,
              hospitality and industrial sectors.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              Our group of service partners operates across multiple verticals — electrical, mechanical,
              horticulture, soft services and more — united by a single commitment: doing the work right, every time.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              We are a small, agile organisation where leadership directly oversees all operations.
              That means fewer handoffs, better accountability, and measurable outcomes for every client.
            </p>
            <Btn variant="dark" icon="ArrowRight" onClick={() => go("/contact")}>Talk to Us</Btn>
          </div>

          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { icon: "ShieldCheck", title: "Safety First",    desc: "OHS protocols on every engagement — zero compromise." },
              { icon: "Award",       title: "20+ Years",       desc: "Two decades of diversified engineering expertise." },
              { icon: "Users",       title: "Verified Teams",  desc: "Background-checked staff selected for integrity." },
              { icon: "BadgeCheck",  title: "Full Compliance", desc: "Statutory, environmental and safety standards — always." },
            ].map((c, i) => (
              <div key={c.title} className="card p-6" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(200,150,62,0.1)", border: "1px solid rgba(200,150,62,0.2)" }}>
                  <Icon name={c.icon} size={18} style={{ color: "#C8963E" }} />
                </div>
                <p className="font-semibold text-sm dark:text-[#E8EDF2] mb-1.5">{c.title}</p>
                <p className="text-xs text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Values ───────────────────────────────────────────────────────────────────

const Values = () => {
  const { ref, visible } = useReveal();
  const vals = [
    { icon: "Target",    title: "Mission",    desc: "To deliver civil and engineering facility services of the highest professional standard — consistently and accountably." },
    { icon: "Eye",       title: "Vision",     desc: "To be the North Region’s most trusted single-source partner for integrated facility management, construction, interior, and infrastructure services." },
    { icon: "Heart",     title: "Values",     desc: "Integrity, quality, safety, and accountability — these are not aspirations, they are our operating standards." },
    { icon: "Lightbulb", title: "Innovation", desc: "Embracing new technology and methodology to deliver better outcomes for our clients at every scale." },
  ];

  return (
    <section className="section bg-white dark:bg-[#17164b] pt-0">
      <div className="container-wide">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4"><Eyebrow>Our Foundation</Eyebrow></div>
          <h2 className="section-title">Mission, Vision <span style={{ color: "var(--gold)" }}>&amp; Values</span></h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {vals.map((v, i) => (
            <div
              key={v.title}
              className={`card p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="icon-box mb-5" style={{ background: "rgba(200,150,62,0.1)", borderColor: "rgba(200,150,62,0.2)" }}>
                <Icon name={v.icon} size={20} style={{ color: "#C8963E" }} />
              </div>
              <h3 className="font-bold text-base dark:text-[#E8EDF2] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const AboutPage = () => (
  <main className="page">
    <SEO
      title="About Amconz Infra Services | Facility Management Expert"
      description="Discover our 20-year legacy of trust and excellence in integrated facility management across Punjab."
      url="/about"
    >
      <meta name="keywords" content="about Amconz, facility management company, engineering services, integrated solutions" />
    </SEO>
    <PageHero />
    <Story />
    <Values />
  </main>
);

export default AboutPage;