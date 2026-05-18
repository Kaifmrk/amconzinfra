import React from "react";
import * as LucideIcons from "lucide-react";
import { useCounter } from "../../hooks/index";

export const Icon = ({ name, size = 20, className = "", style }) => {
  const C = LucideIcons[name];
  if (!C) return null;
  return <C size={size} className={className} style={style} />;
};

export const Eyebrow = ({ children }) => <span className="eyebrow">{children}</span>;

export const Heading = ({ eyebrow, title, sub, center = true, light = false }) => (
  <div className={`mb-14 ${center ? "text-center" : ""}`}>
    {eyebrow && <div className={`mb-4 ${center ? "flex justify-center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow></div>}
    <h2 className={`h-display text-4xl md:text-5xl tracking-display mb-5 ${light ? "text-[#E8EDF2]" : ""}`}>{title}</h2>
    {sub && <p className={`text-base leading-relaxed max-w-xl ${center ? "mx-auto" : ""} ${light ? "text-[#8B9BB0]" : "text-muted"}`}>{sub}</p>}
  </div>
);

export const Btn = ({ variant = "primary", children, icon, iconLeft, onClick, type = "button", disabled, loading, className = "" }) => {
  const varMap = {
    primary: "btn-primary",
    ghost: "btn-ghost",
    dark: "btn-dark",
    "outline-white": "btn-outline-white",
  };
  const varCls = varMap[variant] || "btn-primary";
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={`btn ${varCls} ${className}`}>
      {loading ? <LucideIcons.Loader2 size={16} className="animate-spin" /> : iconLeft ? <Icon name={iconLeft} size={16} /> : null}
      {children}
      {!loading && icon && <Icon name={icon} size={16} />}
    </button>
  );
};

export const StatCounter = ({ end, suffix = "", label }) => {
  const { ref, count } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-num">{count}{suffix}</div>
      <p className="text-sm mt-2" style={{ color: "#8B9BB0", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {label}
      </p>
    </div>
  );
};

export const Chip = ({ children }) => <span className="chip">{children}</span>;
export const Divider = () => <div className="h-divider my-0" />;

export const WhatsAppSVG = ({ size = 26 }) => (
  <svg width={size} height={size} fill="white" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.7 12.7 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
