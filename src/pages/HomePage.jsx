import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon, StatCounter, Eyebrow, Btn, Chip } from "../components/ui/index";
import { useReveal } from "../hooks/index";
import { SERVICES } from "../data/index";
import SEO from "../components/SEO";

/* ── HERO ─────────────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="hero-bg pt-6 pb-0 overflow-hidden">
      <div className="hero-geo" />
      <div className="noise-overlay" />
      <div
        className="hero-glow"
        style={{ top: "10%", right: "5%", width: 600, height: 600 }}
      />

      <div className="container-wide relative z-10 pb-7 pt-10 w-full">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2.5 mb-8 mt-3 px-3 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(200,150,62,0.3)",
                background: "rgba(200,150,62,0.07)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-gold"
                style={{ background: "#C8963E" }}
              />
              <span
                className="text-[10px] tracking-[0.18em] uppercase"
                style={{ color: "#C8963E", fontFamily: "'DM Mono', monospace" }}
              >
                North Region's Trusted Engineering Partner
              </span>
            </div>

            <h1
              className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-8"
              style={{ fontSize: "clamp(3rem,6vw,5.5rem)" }}
            >
              Precision
              <br />
              <span style={{ color: "#C8963E" }}>Facility</span>
              <br />
              Management.
            </h1>

            <p
              className="text-lg leading-relaxed max-w-lg mb-10 text-[#5A6A7A] dark:text-[#8B9BB0]"
              style={{ fontWeight: 300 }}
            >
              From electrical engineering to integrated facility solutions —
              Amconz Infra Services delivers compliant, cost-effective services
              across Punjab and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Btn
                variant="primary"
                icon="ArrowRight"
                onClick={() => go("/services")}
              >
                Explore Services
              </Btn>
              <Btn variant="outline-white" onClick={() => go("/enquiry")}>
                Request a Quote
              </Btn>
            </div>
          </div>

          {/* Right — dashboard card */}
          <div className="hidden lg:block relative h-[480px]">
            <div className="absolute inset-0 rounded-2xl p-6 overflow-hidden animate-float-slow flex flex-col justify-between hero-card">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{
                      color: "#C8963E",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    Service Overview
                  </p>
                  <p
                    className="font-semibold text-[#19184C] dark:text-[#E8EDF2] text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    13 Verticals
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(200,150,62,0.15)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#C8963E" }}
                  />
                </div>
              </div>

              {/* Service icon grid */}
              <div className="grid grid-cols-4 gap-2.5 flex-1 content-center my-4">
                {SERVICES.slice(0, 8).map((s) => (
                  <div
                    key={s.id}
                    className="aspect-square rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 transition-all hover:scale-105"
                    style={{
                      background: `${s.color}14`,
                      border: `1px solid ${s.color}28`,
                    }}
                  >
                    <Icon name={s.icon} size={18} style={{ color: s.color }} />
                    <p
                      className="text-[8px] text-center leading-tight"
                      style={{ color: `${s.color}CC` }}
                    >
                      {s.title.split(" ")[0]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini services marquee */}
              <div
                className="pt-4 overflow-hidden"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="text-[9px] tracking-[0.15em] uppercase mb-2"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Our Services
                </p>
                <div className="overflow-hidden">
                  <div
                    className="flex gap-2 w-max"
                    style={{ animation: "marquee-card 28s linear infinite" }}
                  >
                    {[...SERVICES, ...SERVICES].map((s, i) => (
                      <div
                        key={`card-${s.id}-${i}`}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: `${s.color}12`,
                          border: `1px solid ${s.color}30`,
                        }}
                      >
                        <Icon
                          name={s.icon}
                          size={10}
                          style={{ color: s.color }}
                        />
                        <span
                          className="text-[9px] whitespace-nowrap"
                          style={{
                            color: s.color,
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <style>{`
                  @keyframes marquee-card {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                  }
                `}</style>
              </div>
            </div>

            {/* Floating badge — Support */}
            <div
              className="absolute -bottom-4 -right-5 rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-2xl animate-float-slow"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                animationDelay: "1.5s",
              }}
            >
              <Icon name="Headphones" size={16} style={{ color: "#C8963E" }} />
              <div>
                <p
                  className="font-bold text-[#19184C] dark:text-[#E8EDF2] text-base leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  24/7
                </p>
                <p
                  className="text-[9px] uppercase tracking-wide"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── SERVICES GRID ──────────────────────────────────────────── */
const ServicesSection = () => {
  const { ref, visible } = useReveal();
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="section bg-white dark:bg-[#171648] pt-24">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="mb-4">
              <Eyebrow>What We Deliver</Eyebrow>
            </div>
            <h2 className="section-title">
              13 Ways We
              <br />
              <span style={{ color: "var(--gold)" }}>Deliver Excellence</span>
            </h2>
          </div>
          <Btn variant="dark" icon="ArrowRight" onClick={() => go("/services")}>
            All Services
          </Btn>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-">
          {SERVICES.slice(0, 8).map((s, i) => (
            <div
              key={s.id}
              onClick={() => go("/services")}
              className={`card p-6 cursor-pointer group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="icon-box mb-5"
                style={{
                  borderColor: `${s.color}30`,
                  background: `${s.color}10`,
                }}
              >
                <Icon name={s.icon} size={20} style={{ color: s.color }} />
              </div>
              <h3
                className="font-semibold text-[15px] dark:text-[#E8EDF2] mb-2 leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.brief}</p>
              <div
                className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--gold)" }}
              >
                Learn more <Icon name="ArrowRight" size={13} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── WHY US ─────────────────────────────────────────────────── */
const WhyUs = () => {
  const { ref, visible } = useReveal();
  const pillars = [
    {
      icon: "ShieldCheck",
      color: "#4F46E5",
      title: "Safety First",
      desc: "Strict OHS protocols on every project — zero compromises on worker and public safety.",
    },
    {
      icon: "BadgeCheck",
      color: "#6366F1",
      title: "Verified Expertise",
      desc: "Background-checked, certified teams with decades of hands-on engineering experience.",
    },
    {
      icon: "Zap",
      color: "#22C55E",
      title: "Rapid Response",
      desc: "In-house experts ensure same-day response for critical facility emergencies.",
    },
    {
      icon: "TrendingUp",
      color: "#F59E0B",
      title: "Cost Optimisation",
      desc: "Data-driven approach consistently reduces operational costs by 20–30%.",
    },
    {
      icon: "FileText",
      color: "#EC4899",
      title: "Full Compliance",
      desc: "All work meets statutory, environmental and safety regulations with full documentation.",
    },
    {
      icon: "Layers",
      color: "#0EA5E9",
      title: "Single-Point Service",
      desc: "One partner for every facility need — no fragmented vendor coordination.",
    },
  ];
  return (
    <section
      className="section pt-0"
      style={{ background: "var(--off-white)" }}
    >
      <div className="dark:bg-card rounded-none">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-5">
                <Eyebrow>Why Choose Us</Eyebrow>
              </div>
              <h2 className="section-title mb-6">
                Built on
                <br />
                <span style={{ color: "var(--gold)" }}>20 Years</span> of Trust.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We are a lean, agile organisation where leadership directly
                oversees every project — ensuring professional, accountable
                delivery with no middlemen.
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { top: "Punjab", sub: "Based & Trusted" },
                  { top: "ISO", sub: "Compliant" },
                  { top: "24/7", sub: "Emergency" },
                ].map((b) => (
                  <div
                    key={b.top}
                    className="px-4 py-3 rounded-xl"
                    style={{ background: "#231F63" }}
                  >
                    <p
                      className="font-bold text-[22px] text-center leading-none"
                      style={{
                        color: "#C8963E",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {b.top}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.12em] uppercase mt-1"
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {b.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={ref} className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`p-5 rounded-xl border border-subtle bg-white dark:bg-[#231F63] hover:border-[rgba(200,150,62,0.3)] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    <Icon name={p.icon} size={17} style={{ color: p.color }} />
                  </div>
                  <p className="font-semibold text-sm dark:text-[#E8EDF2] mb-1.5">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── CTA ────────────────────────────────────────────────────── */
const CTA = () => {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="section bg-white dark:bg-[#19184C]">
      <div className="container-tight  ">
        <div
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center
             bg-gradient-to-br from-indigo-200 via-indigo-200 to-indigo-400
             dark:from-[#19184C] dark:via-[#231F63] dark:to-[#2E2A7A]"
        >
          <div className="hero-grid opacity-30" />
          <div
            className="hero-glow"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 500,
              height: 400,
            }}
          />
          <div className="relative z-10">
            <Eyebrow>Ready to Start?</Eyebrow>
            <h2
              className="h-display text-[#E8EDF2] mt-5 mb-5"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
              Let's Build Something
              <br />
              <span style={{ color: "#C8963E" }}>Exceptional Together.</span>
            </h2>
            <p
              className="mb-10 max-w-lg mx-auto leading-relaxed"
              style={{ color: "#8B9BB0" }}
            >
              Share your requirements and our team will respond with a tailored
              proposal within 24 business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Btn
                variant="primary"
                icon="ArrowRight"
                onClick={() => go("/enquiry")}
              >
                Send an Enquiry
              </Btn>
              <Btn variant="outline-white" onClick={() => go("/contact")}>
                Contact Us
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <main className="page">
   <SEO
  title="Home | Amconz Infra Services"
  description="Leading facility management company in India offering integrated engineering solutions, electrical works, housekeeping, construction, and maintenance services."
  url="/"
>
  {/* Primary SEO */}
  <meta
    name="keywords"
    content="
      facility management services India,
      integrated facility management,
      engineering solutions,
      HVAC services,
      electrical maintenance,
      mechanical services,
      housekeeping services,
      construction services,
      property maintenance,
      landscaping services,
      commercial facility management,
      industrial maintenance,
      infrastructure services,
      MEP services,
      Amconz Infra Services,
      facility management Punjab,
      Ludhiana engineering company
    "
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Amconz Infra Services"
  />

  <meta
    property="og:description"
    content="Trusted integrated facility management and engineering solutions across India."
  />

  <meta
    property="og:image"
    content="https://amconzinfra.com/og-image.jpg"
  />

  <meta property="og:type" content="website" />

  <meta property="og:url" content="https://amconzinfra.com" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="Amconz Infra Services"
  />

  <meta
    name="twitter:description"
    content="Leading facility management company in India"
  />

  <meta
    name="twitter:image"
    content="https://amconzinfra.com/og-image.jpg"
  />

  {/* Local Business Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",

      name: "Amconz Infra Services",

      description:
        "Integrated facility management and engineering services in India",

      url: "https://amconzinfra.com",

      logo: "https://amconzinfra.com/logo.png",

      image: "https://amconzinfra.com/og-image.jpg",

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      serviceType: [
        "Facility Management",
        "HVAC Services",
        "Electrical Engineering",
        "Mechanical Services",
        "Housekeeping",
        "Construction",
        "Interior Solutions",
        "Landscaping",
      ],
    })}
  </script>
</SEO>

    <Hero />
    <ServicesSection />
    <WhyUs />
    <CTA />
  </main>
);

export default HomePage;
