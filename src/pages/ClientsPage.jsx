import React from "react";
import { Icon, Eyebrow } from "../components/ui/index";
import { useReveal } from "../hooks/index";
import { CLIENTS } from "../data/index";
import SEO from "../components/SEO";

const PageHero = () => (
  <section className="hero-bg pt-32 pb-14 relative overflow-hidden">
    <div className="hero-geo" />
    <div className="noise-overlay" />

    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Eyebrow>Who Trusts Us</Eyebrow>
          </div>

          <h1
            className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
          >
            Multiple Organisations.
            <br />
            <span style={{ color: "#C8963E" }}>
              One Common Standard.
            </span>
          </h1>

          <p
            className="text-lg leading-relaxed max-w-xl text-[#5A6A7A] dark:text-[#8B9BB0]"
            style={{ fontWeight: 300 }}
          >
            From residential societies to five-star hotels — clients across
            North Region trust Amconz Infra Services to keep their facilities running
            flawlessly.
          </p>
        </div>

        {/* Visual Element */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[400px]">
            
        

            {/* Central Hub */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center z-20"
              style={{
                background:
                  "linear-gradient(135deg, #19184C, #2E5077)",
                boxShadow: "0 8px 32px rgba(200,150,62,0.3)",
              }}
            >
              {/* Inner Rotating Ring */}
              <div
                className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-dashed -translate-x-1/2 -translate-y-1/2"
                style={{
                  borderColor: "#C8963E40",
                  animation: "spinReverse 14s linear infinite",
                }}
              />

              <Icon
                name="Zap"
                size={48}
                style={{ color: "#C8963E" }}
              />
            </div>

            {/* Orbiting Client Icons */}
            {[
              {
                icon: "Home",
                angle: 0,
                color: "#3B82F6",
                label: "Residential",
              },
              {
                icon: "Building2",
                angle: 90,
                color: "#8B5CF6",
                label: "Commercial",
              },
              {
                icon: "Factory",
                angle: 180,
                color: "#C8963E",
                label: "Industrial",
              },
              {
                icon: "Star",
                angle: 270,
                color: "#EC4899",
                label: "Hospitality",
                
              },
            ].map((item, i) => {
              const radius = 160;

              const x =
                Math.cos((item.angle * Math.PI) / 180) * radius;

              const y =
                Math.sin((item.angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={item.icon}
                  className="absolute top-1/2 left-1/2 w-16 h-16 rounded-xl flex flex-col items-center justify-center gap-1"
                  style={{
                    "--tx": `calc(-50% + ${x}px)`,
                    "--ty": `calc(-50% + ${y}px)`,

                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",

                    border: `2px solid ${item.color}40`,
                    boxShadow: `0 4px 20px ${item.color}20`,

                    animation: `float ${
                      3 + i * 0.5
                    }s ease-in-out infinite`,
                    aimationDelay: `${i * 0.2}s`,
                  }}
                >
                  <Icon
                    name={item.icon}
                    size={28}
                    style={{ color: item.color }}
                  />

                  <span className="text-[9px] font-semibold text-[#19184C]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% {
          transform:
            translate(var(--tx), var(--ty))
            translateY(0px);
        }

        50% {
          transform:
            translate(var(--tx), var(--ty))
            translateY(-10px);
        }
      }

      @keyframes spin {
        from {
          transform:
            translate(-50%, -50%)
            rotate(0deg);
        }

        to {
          transform:
            translate(-50%, -50%)
            rotate(360deg);
        }
      }

      @keyframes spinReverse {
        from {
          transform:
            translate(-50%, -50%)
            rotate(360deg);
        }

        to {
          transform:
            translate(-50%, -50%)
            rotate(0deg);
        }
      }
    `}</style>
  </section>
);
const ClientLogos = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="section bg-white dark:bg-[#1E1D54]">
      <div className="container-wide">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <Eyebrow>Our Clients</Eyebrow>
          </div>

          <h2 className="section-title">
            Organisations That{" "}
            <span style={{ color: "var(--gold)" }}>
              Trust Us
            </span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {CLIENTS.map((c, i) => (
            <div
              key={c}
              className={`logo-card transition-all duration-500 ${
                visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${i * 40}ms`,
              }}
            >
              <div className="text-center">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{
                    background:
                      "rgba(200,150,62,0.1)",
                    border:
                      "1px solid rgba(200,150,62,0.2)",
                  }}
                >
                  <Icon
                    name="Building2"
                    size={14}
                    style={{ color: "#C8963E" }}
                  />
                </div>

                <p className="font-medium text-xs dark:text-[#E8EDF2] leading-snug text-center">
                  {c}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientsPage = () => (
  <main className="page">

    <SEO
  title="Our Clients | Trusted by Leading Companies Across India"
  description="Amconz Infra Services proudly serves 200+ clients including Fortune 500 companies, IT parks, hospitals, hotels, and manufacturing units across India."
  url="/clients"
>
  <meta name="keywords" content="facility management clients, trusted clients, corporate clients India, Fortune 500 clients, IT park facility management, hospital facility management, hotel facility management, manufacturing facility management, commercial clients, industrial clients, testimonials, client reviews, case studies, satisfied clients, client portfolio, banking sector clients, healthcare facility management, retail facility management" />
</SEO>
    <PageHero />
    <ClientLogos />
  </main>
);

export default ClientsPage;