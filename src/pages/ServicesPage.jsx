import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Eyebrow, Btn } from "../components/ui/index";
import { useReveal } from "../hooks/index";
import { SERVICES } from "../data/index";
import SEO from "../components/SEO";

const PageHero = () => (
  <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
    <div className="hero-geo" />
    <div className="noise-overlay" />
    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Eyebrow>What We Deliver</Eyebrow>
          </div>
          <h1
            className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
          >
            13 Specialist
            <br />
            <span style={{ color: "#C8963E" }}>Service Verticals.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl text-[#5A6A7A] dark:text-[#8B9BB0]"
            style={{ fontWeight: 300 }}
          >
            Every service delivered by certified professionals — with a single
            point of accountability.
          </p>
        </div>

        {/* Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[420px]">
            {/* Central Services Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Main circle */}
                <div
                  className="w-36 h-36 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #19184C, #2E5077)",
                    boxShadow: "0 12px 40px rgba(200,150,62,0.35)",
                  }}
                >
                  <div className="text-center">
                    <p
                      className="text-4xl font-bold mb-1"
                      style={{
                        color: "#C8963E",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      13
                    </p>
                    <p
                      className="text-[9px] uppercase tracking-wider text-white/70"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Services
                    </p>
                  </div>
                </div>

                {/* Rotating ring */}
                <div
                  className="absolute inset-0 w-36 h-36 rounded-full border-2 border-dashed"
                  style={{
                    borderColor: "#C8963E40",
                    animation: "spin 20s linear infinite",
                  }}
                />
              </div>
            </div>

            {/* Service Category Icons - Orbiting */}
            {[
              {
                icon: "Zap",
                label: "Electrical",
                angle: 0,
                color: "#3B82F6",
                radius: 130,
              },
              {
                icon: "Paintbrush",
                label: "Interior work's",
                angle: 144,
                color: "#8B5CF6",
                radius: 130,
              },
              {
                icon: "Building2",
                label: "Construction",
                angle: 72,
                color: "#F97316",
                radius: 130,
              },
              {
                icon: "Shield",
                label: "Security",
                angle: 216,
                color: "#EC4899",
                radius: 130,
              },
              {
                icon: "Wrench",
                label: "Maintenance",
                angle: 288,
                color: "#C8963E",
                radius: 130,
              },
            ].map((item, i) => {
              const x = Math.cos((item.angle * Math.PI) / 180) * item.radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * item.radius;
              return (
                <div
                  key={item.label}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: "64px",
                    height: "64px",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-1 backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      border: `2px solid ${item.color}30`,
                      boxShadow: `0 4px 12px ${item.color}15`,
                      animation: `serviceFloat ${2.5 + i * 0.3}s ease-in-out infinite`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    <Icon
                      name={item.icon}
                      size={20}
                      style={{ color: item.color }}
                    />
                    <span className="text-[8px] font-bold text-[#19184C]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ opacity: 0.2 }}
            >
              <defs>
                <radialGradient id="lineGrad">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#C8963E", stopOpacity: 0 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#C8963E", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#C8963E", stopOpacity: 0 }}
                  />
                </radialGradient>
              </defs>
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const x1 = 50 + Math.cos((angle * Math.PI) / 180) * 13;
                const y1 = 50 + Math.sin((angle * Math.PI) / 180) * 13;
                const x2 = 50 + Math.cos((angle * Math.PI) / 180) * 32;
                const y2 = 50 + Math.sin((angle * Math.PI) / 180) * 32;
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>

            {/* Stat Cards */}
            <div
              className="absolute top-4 right-4 px-4 py-2.5 rounded-lg backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(200,150,62,0.25)",
              }}
            >
              <div className="flex items-center gap-2">
                <Icon
                  name="CheckCircle2"
                  size={14}
                  style={{ color: "#10B981" }}
                />
                <div>
                  <p className="text-xs font-bold text-[#19184C]">Certified</p>
                  <p className="text-[9px] text-[#5A6A7A]">Professionals</p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-4 left-4 px-4 py-2.5 rounded-lg backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(200,150,62,0.25)",
              }}
            >
              <div className="flex items-center gap-2">
                <Icon name="Award" size={14} style={{ color: "#C8963E" }} />
                <div>
                  <p className="text-xs font-bold text-[#19184C]">
                    Single Point
                  </p>
                  <p className="text-[9px] text-[#5A6A7A]">Accountability</p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div
              className="absolute top-16 left-8 w-2 h-2 rounded-full"
              style={{
                background: "#C8963E40",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-20 right-12 w-2 h-2 rounded-full"
              style={{
                background: "#3B82F640",
                animation: "pulse 2s ease-in-out infinite 0.5s",
              }}
            />
            <div
              className="absolute top-24 right-16 w-2 h-2 rounded-full"
              style={{
                background: "#8B5CF640",
                animation: "pulse 2s ease-in-out infinite 1s",
              }}
            />
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes serviceFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }
    `}</style>
  </section>
);

/* ── SERVICES MARQUEE ───────────────────────────────────────── */
const ServicesMarquee = () => {
  const items = [...SERVICES, ...SERVICES]; // duplicate for seamless loop
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{
        borderColor: "var(--border)",
        background: "var(--off-white)",
      }}
    >
      <div
        className="flex gap-6 w-max animate-marquee"
        style={{ "--marquee-speed": "38s" }}
      >
        {items.map((s, i) => (
          <div
            key={`${s.id}-${i}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full flex-shrink-0 transition-all hover:scale-105"
            style={{
              background: `${s.color}10`,
              border: `1px solid ${s.color}28`,
            }}
          >
            <Icon name={s.icon} size={14} style={{ color: s.color }} />
            <span
              className="text-[11px] font-medium tracking-wide whitespace-nowrap"
              style={{ color: s.color, fontFamily: "'DM Mono', monospace" }}
            >
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-speed, 38s) linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const ServiceCard = ({ s, index, visible }) => {
  const [open, setOpen] = useState(false);
  const serviceIndex = SERVICES.findIndex((x) => x.id === s.id) + 1;

  return (
    <div
      className={`card flex flex-col overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 55}ms` }}
    >
      {/* ── Cover image / gradient banner ── */}
      <div className="relative w-full h-44 flex-shrink-0 overflow-hidden">
        {s.image ? (
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          /* Fallback: branded gradient so cards without photos still look intentional */
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${s.color}18 0%, ${s.color}50 100%)`,
            }}
          >
            {/* Large ghost icon as decorative background element */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Icon name={s.icon} size={96} style={{ color: s.color }} />
            </div>
          </div>
        )}

        {/* Dark-to-transparent scrim so the card body reads cleanly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,27,42,0.60) 0%, transparent 55%)",
          }}
        />

        {/* Service number badge — glassmorphism chip */}
        <span
          className="absolute top-3 right-3 text-[9px] tracking-[0.15em] uppercase px-2 py-1 rounded-md font-medium backdrop-blur-sm"
          style={{
            background: `${s.color}22`,
            color: s.color,
            fontFamily: "'DM Mono', monospace",
            border: `1px solid ${s.color}44`,
          }}
        >
          #{String(serviceIndex).padStart(2, "0")}
        </span>

        {/* Icon pill anchored to bottom-left of the image */}
        <div
          className="absolute bottom-3 left-4 icon-box"
          style={{
            background: `${s.color}18`,
            borderColor: `${s.color}40`,
            backdropFilter: "blur(6px)",
          }}
        >
          <Icon name={s.icon} size={18} style={{ color: s.color }} />
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-bold text-lg dark:text-[#E8EDF2] mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {s.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {open ? s.desc : s.brief}
        </p>

        {open && (
          <ul className="space-y-2 mb-5">
            {s.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-xs text-muted"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: s.color }}
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-colors"
          style={{ color: "var(--gold)" }}
        >
          {open ? "Show less" : "See details"}{" "}
          <Icon name={open ? "ChevronUp" : "ChevronDown"} size={13} />
        </button>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const { ref, visible } = useReveal();
  return (
    <section className="section bg-white dark:bg-[#171648]">
      <div className="container-wide">
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="section bg-[#F8F7F4] pt-0 dark:bg-[#1E1D54]">
      <div className="container-tight text-center">
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="section-title mt-5 mb-5">
          Need a Custom <span style={{ color: "var(--gold)" }}>Solution?</span>
        </h2>
        <p className="text-muted mb-10 max-w-lg mx-auto leading-relaxed">
          Our team will assess your facility requirements and propose a tailored
          service package.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn
            variant="primary"
            icon="ArrowRight"
            onClick={() => go("/enquiry")}
          >
            Request a Proposal
          </Btn>
          <Btn variant="ghost" onClick={() => go("/contact")}>
            Contact Us
          </Btn>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => (
  <main className="page">
    <SEO
      title="Services | Amconz Infra Services"
      description="Discover our 20-year legacy of trust and excellence in integrated facility management across Punjab."
      url="/about"
    >
      <meta
        name="keywords"
        content="about Amconz, facility management company, engineering services, integrated solutions,
      Interior designing, house renovation, office renovation, electrical works,swimming pool maintenance, society maintenance, manpower services, north region trusted,Punjab based, facility services"
      />
    </SEO>
    <PageHero />
    <ServicesMarquee />
    <ServicesGrid />
    <CTA />
  </main>
);

export default ServicesPage;
