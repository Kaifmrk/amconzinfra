import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useScrollY, useScrollProgress } from "../../hooks/index";
import { Icon, Btn } from "../ui/index";
import { NAV_LINKS } from "../../data/index";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const scrollY = useScrollY();
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 50;
  const location = useLocation();
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

 
  const logoClass = `h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
    dark
      ? "brightness-0 invert"           // dark  → white logo
      : "brightness-0.5 opacity-90"       
  }`;

  const logoClassSm = `h-8 w-auto object-contain transition-all duration-300 ${
    dark ? "brightness-0 invert" : "brightness-0 opacity-80"
  }`;

  return (
    <>
      <div className="scroll-bar" style={{ width: `${progress * 100}%` }} />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/96 dark:bg-[#19184C]/96 backdrop-blur-xl shadow-[0_1px_0_rgba(13,27,42,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-[70px]">

          {/* ── Logo + Brand Name ── */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <img src={logo} alt="Amconz Infra Services Logo" className={logoClass} />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[15px] tracking-wide text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-300">
                AMCONZ
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-muted uppercase">
                Infra Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.id === "home" ? "/" : `/${l.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`nav-item ${isActive(l.id === "home" ? "/" : `/${l.id}`) ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-subtle hover:border-[var(--gold)] transition-colors"
              style={{ background: "var(--surface)" }}
            >
              <Icon name={dark ? "Sun" : "Moon"} size={14} className="text-muted" />
            </button>
            <Btn
              variant="primary"
              onClick={() => go("/enquiry")}
              className="hidden md:inline-flex text-sm px-5 py-2"
            >
              Get a Quote
            </Btn>
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-[5px] border border-subtle hover:border-[var(--gold)] transition-colors"
              style={{ background: "var(--surface)" }}
              aria-label="Menu"
            >
              <span className={`block h-[1.5px] transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[6.5px] bg-[var(--gold)]" : "w-4 bg-current"}`} />
              <span className={`block h-[1.5px] transition-all duration-300 bg-current ${open ? "opacity-0 w-0" : "w-5"}`} />
              <span className={`block h-[1.5px] transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[6.5px] bg-[var(--gold)]" : "w-4 bg-current"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 border-t border-subtle ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ background: "var(--surface)" }}
        >
          <div className="container-wide py-4 flex flex-col gap-1">

            {/* Mobile logo + name header */}
            <div className="flex items-center gap-2.5 px-4 pb-3 mb-1 border-b border-subtle">
              <img src={logo} alt="Amconz Infra Services" className={logoClassSm} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[13px] tracking-wide text-[var(--foreground)]">
                  AMCONZ
                </span>
                <span className="text-[9px] font-medium tracking-[0.15em] text-muted uppercase">
                  Infra Services
                </span>
              </div>
            </div>

            {NAV_LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.id === "home" ? "/" : `/${l.id}`}
                onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  isActive(l.id === "home" ? "/" : `/${l.id}`)
                    ? "text-[var(--gold)] bg-[rgba(200,150,62,0.08)]"
                    : "text-muted hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Btn variant="primary" onClick={() => go("/enquiry")} className="w-full justify-center">
                Get a Quote
              </Btn>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;