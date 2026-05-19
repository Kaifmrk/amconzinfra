import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../ui/index";
import { NAV_LINKS, SERVICES } from "../../data/index";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/images/logo.png"; // ← your Amconz logo image

const Footer = () => {
  const { dark } = useTheme();
  const go = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const year = new Date().getFullYear();

  const footerBg = dark ? "var(--navy)" : "#f8f9fa";
  const textPrimary = dark ? "var(--text-primary)" : "#19184C";
  const textLight = dark ? "var(--text-light)" : "#666";
  const borderColor = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)";
  const socialBg = dark ? "rgba(255,255,255,0.05)" : "rgba(200,150,62,0.08)";
  const socialHover = dark ? "rgba(200,150,62,0.15)" : "rgba(200,150,62,0.15)";
  const copyrightText = dark ? "#475569" : "#888";

  return (
    <footer style={{ background: footerBg, color: textPrimary }}>
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, var(--gold), var(--steel-light), transparent)",
        }}
      />
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2.5 group flex-shrink-0"
              >
                {/* Logo image  */}
                <img
                  src={logo}
                  alt="Amconz Infra Services Logo"
                  className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                />

                {/* Brand name beside logo */}
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-[15px] tracking-wide text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-300 text-textPrimary">
                    AMCONZ
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.18em] text-muted uppercase">
                    Infra Services
                  </span>
                </div>
              </Link>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: textLight }}
            >
              North Region’s trusted partner for precision facility management
              and engineering services — for over two decades.
            </p>
            <div className="flex gap-2">
              {[
                {
                  icon: "Linkedin",
                  href: "https://www.linkedin.com/in/amconz-infra-131b8a40b",
                },
                { icon: "Instagram", href: "https://www.instagram.com/amconz.infra/" },
                { icon: "Facebook", href: "#" },
                { icon: "Youtube", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[rgba(200,150,62,0.15)]"
                  style={{
                    background: socialBg,
                    color: dark ? "#8B9BB0" : "#666",
                  }}
                >
                  <Icon name={s.icon} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--gold)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {[...NAV_LINKS, { id: "enquiry", label: "Get a Quote" }].map(
                (l) => (
                  <li key={l.id}>
                    <Link
                      to={l.id === "home" ? "/" : `/${l.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="text-sm transition-colors hover:text-[var(--gold)] text-left"
                      style={{ color: textLight }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--gold)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-sm transition-colors hover:text-[var(--gold)] text-left leading-snug"
                    style={{ color: textLight }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{
                color: "var(--gold)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Contact
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "MapPin",
                  val: "F/1-373, Block No.33, Behind Dukhpanjam Grudwara, Gurnam Nagar, Jasiyan Road, Ludhiana, Punjab – 141008",
                },
                {
                  icon: "Phone",
                  val: "+91 8699159961",
                  href: "tel:+918699159961",
                },
                {
                  icon: "Mail",
                  val: "info@amconzinfra.com",
                  href: "mailto:info@amconzinfra.com",
                },
                {
                  icon: "Clock",
                  val: "Mon – Sat · 9 AM – 7 PM",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <Icon
                    name={item.icon}
                    size={14}
                    style={{
                      color: "var(--gold)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-relaxed transition-colors hover:text-[var(--gold)]"
                      style={{ color: textLight }}
                    >
                      {item.val}
                    </a>
                  ) : (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: textLight }}
                    >
                      {item.val}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: borderColor }}
        >
          <p
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ color: copyrightText, fontFamily: "'DM Mono', monospace" }}
          >
            © {year} Amconz Infra Services · All rights reserved
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[10px] tracking-[0.12em] uppercase transition-colors hover:text-[var(--gold)]"
              style={{
                color: copyrightText,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[10px] tracking-[0.12em] uppercase transition-colors hover:text-[var(--gold)]"
              style={{
                color: copyrightText,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
