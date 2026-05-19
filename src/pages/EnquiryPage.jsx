

import React, { useState } from "react";
import { Icon, Eyebrow, Btn } from "../components/ui/index";
import SEO from "../components/SEO";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyr4CSelNBXT8hup_LvNfYW3iMlijVEBe-ypbgUb1aKfB-O5Ov-r3WnOnX7H8uvreA_/exec";

/* ── Static data ────────────────────────────────────────────────────────── */
const SERVICE_LIST = [
  "Property Management", "Integrated Facility Management", "Electrical Engineering Works",
  "Waste Management", "Manpower Services", "Fire & Safety Project & Maintenance",
  "Soft Services", "Landscaping & Horticulture", "Office & House Interior Works",
  "Rain Harvesting Project", "Swimming Pool Operations", "STP / WTP Operations",
  "Water Tank Cleaning", "Multiple Services", "Other – please describe",
];

const BUDGETS = [
  "Below ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000", "Above ₹10,00,000", "Discuss on call",
];

const TIMELINES = [
  "Immediate (within 1 week)", "Short-term (2–4 weeks)", "Medium-term (1–3 months)",
  "Long-term (3+ months)", "Ongoing contract", "Flexible",
];

const PROPERTY_TYPES = [
  "Residential Society / Apartments", "Commercial Office / Mall", "Industrial Unit / Factory",
  "Hotel / Hospitality", "Educational Institution", "Hospital / Healthcare",
  "Government / Public Sector", "Other",
];

const HOW_HEARD = [
  "Google Search", "Social Media", "Word of Mouth / Referral",
  "Hoarding / Banner", "Direct Walk-in", "Other",
];

const EMPTY = {
  name: "", company: "", email: "", phone: "", contactPref: "email",
  service: "", propertyType: "", location: "", budget: "",
  timeline: "", message: "", howHeard: "",
};

/* ── Small shared UI pieces ─────────────────────────────────────────────── */
const FL = ({ children, req }) => (
  <label style={{
    display: "block", fontSize: "11px", fontFamily: "var(--font-mono, monospace)",
    letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)",
    marginBottom: "8px", fontWeight: 500,
  }}>
    {children}
    {req && <span style={{ color: "#C8963E", marginLeft: 2 }}>*</span>}
  </label>
);

const ErrMsg = ({ msg }) =>
  msg ? (
    <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "5px", display: "flex", alignItems: "center", gap: "4px" }}>
      <span style={{ fontSize: "13px" }}>⚠</span> {msg}
    </p>
  ) : null;

const ic = (err) => `form-field${err ? " field-error" : ""}`;

const Divider = () => (
  <div style={{
    height: "1px",
    background: "linear-gradient(to right, transparent, rgba(200,150,62,0.25), transparent)",
    margin: "4px 0",
  }} />
);

/* ── StepProgress ───────────────────────────────────────────────────────── */
const StepProgress = ({ current }) => {
  const steps = ["Personal Info", "Service Details", "Requirements"];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: "48px" }}>
      {steps.map((s, i) => {
        const n = i + 1;
        const done = current > n;
        const active = current === n;
        return (
          <React.Fragment key={s}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: done ? undefined : "14px", transition: "all 0.3s ease",
                ...(done
                  ? { background: "#C8963E", border: "none", color: "#fff" }
                  : active
                  ? { background: "rgba(200,150,62,0.12)", border: "2px solid #C8963E", color: "#C8963E" }
                  : { background: "transparent", border: "1.5px solid var(--border)", color: "var(--muted)" }),
              }}>
                {done ? <Icon name="Check" size={16} /> : n}
              </div>
              <span style={{
                fontSize: "10px", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em",
                textTransform: "uppercase", marginTop: "8px",
                color: active || done ? "#C8963E" : "var(--muted)",
                whiteSpace: "nowrap", fontWeight: active ? 600 : 400,
              }}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                height: "1.5px", width: "clamp(40px, 8vw, 96px)", margin: "0 8px",
                marginBottom: "24px", borderRadius: "2px", transition: "background 0.5s ease",
                background: current > n ? "#C8963E" : "var(--border)",
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/* ── ContactPill ────────────────────────────────────────────────────────── */
const ContactPill = ({ value, icon, label, selected, onChange }) => {
  const isSelected = selected === value;
  return (
    <label style={{
      display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px",
      borderRadius: "12px", border: `1.5px solid ${isSelected ? "#C8963E" : "var(--border)"}`,
      background: isSelected ? "rgba(200,150,62,0.08)" : "transparent",
      color: isSelected ? "#C8963E" : "var(--muted)", cursor: "pointer",
      transition: "all 0.2s ease", fontSize: "12px", fontWeight: 600,
      userSelect: "none", letterSpacing: "0.02em",
    }}>
      <input type="radio" name="contactPref" value={value} checked={isSelected}
        onChange={() => onChange(value)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <Icon name={icon} size={14} />
      {label}
    </label>
  );
};

/* ── TimelinePill ───────────────────────────────────────────────────────── */
const TimelinePill = ({ value, selected, onSelect }) => {
  const isSelected = selected === value;
  return (
    <label style={{
      display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px",
      borderRadius: "12px", border: `1.5px solid ${isSelected ? "#C8963E" : "var(--border)"}`,
      background: isSelected ? "rgba(200,150,62,0.08)" : "transparent",
      color: isSelected ? "#C8963E" : "var(--muted)", cursor: "pointer",
      transition: "all 0.2s ease", fontSize: "11.5px",
      fontWeight: isSelected ? 600 : 400, userSelect: "none",
    }}>
      <input type="radio" name="timeline" value={value} checked={isSelected}
        onChange={() => onSelect(value)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
      <Icon name="Calendar" size={12} />
      {value}
    </label>
  );
};

/* ── SummaryRow ─────────────────────────────────────────────────────────── */
const SummaryRow = ({ label, value }) =>
  value ? (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      padding: "8px 0", borderBottom: "1px solid rgba(200,150,62,0.08)", gap: "16px",
    }}>
      <span style={{
        fontSize: "11px", color: "var(--muted)", fontFamily: "var(--font-mono, monospace)",
        letterSpacing: "0.06em", textTransform: "uppercase", flexShrink: 0,
      }}>
        {label}
      </span>
      <span style={{ fontSize: "12px", fontWeight: 600, textAlign: "right", maxWidth: "55%", wordBreak: "break-word" }}
        className="dark:text-[#E8EDF2]">
        {value}
      </span>
    </div>
  ) : null;

/* ── SectionHeader ──────────────────────────────────────────────────────── */
const SectionHeader = ({ icon, title, subtitle }) => (
  <div style={{ marginBottom: "28px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
      <div style={{
        width: 32, height: 32, borderRadius: "10px", background: "rgba(200,150,62,0.1)",
        border: "1px solid rgba(200,150,62,0.2)", display: "flex", alignItems: "center",
        justifyContent: "center", flexShrink: 0,
      }}>
        <Icon name={icon} size={15} style={{ color: "#C8963E" }} />
      </div>
      <h2 className="font-display dark:text-[#E8EDF2]" style={{ fontWeight: 700, fontSize: "20px", margin: 0 }}>
        {title}
      </h2>
    </div>
    <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: "4px", paddingLeft: "42px" }}>
      {subtitle}
    </p>
  </div>
);

/* ── SuccessScreen ──────────────────────────────────────────────────────── */
const SuccessScreen = ({ name, service, refId, onReset }) => (
  <div style={{ textAlign: "center", padding: "64px 24px" }}>
    <div style={{
      width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center",
      justifyContent: "center", margin: "0 auto 32px",
      background: "rgba(34,197,94,0.08)", border: "1.5px solid rgba(34,197,94,0.3)",
    }}>
      <Icon name="CheckCircle2" size={36} style={{ color: "#22c55e" }} />
    </div>
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
      <Eyebrow>Enquiry submitted</Eyebrow>
    </div>
    <h2 className="h-display dark:text-[#E8EDF2]"
      style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: 16, lineHeight: 1.1 }}>
      We've Got Your <span style={{ color: "#C8963E" }}>Enquiry.</span>
    </h2>
    <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, maxWidth: 360, margin: "0 auto 36px" }}>
      Hi <strong className="dark:text-[#E8EDF2]">{name || "there"}</strong> — our team will review
      your requirements and respond within{" "}
      <strong style={{ color: "#C8963E" }}>24 business hours</strong>.
      A confirmation has been sent to your email.
    </p>
    <div style={{
      borderRadius: 16, padding: "20px 24px", textAlign: "left", maxWidth: 380, margin: "0 auto 36px",
      background: "rgba(200,150,62,0.05)", border: "1.5px solid rgba(200,150,62,0.18)",
    }}>
      <p style={{
        fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.12em",
        textTransform: "uppercase", color: "#C8963E", marginBottom: 16, fontWeight: 600,
      }}>
        Reference Details
      </p>
      {[
        ["Reference ID", refId],
        ["Service", service || "—"],
        ["Submitted", new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })],
        ["Status", "Received — Under Review"],
      ].map(([k, v]) => (
        <div key={k} style={{
          display: "flex", justifyContent: "space-between", fontSize: "12.5px",
          padding: "6px 0", borderBottom: "1px solid rgba(200,150,62,0.08)",
        }}>
          <span style={{ color: "var(--muted)" }}>{k}</span>
          <span style={{ fontWeight: 600 }} className="dark:text-[#E8EDF2]">{v}</span>
        </div>
      ))}
    </div>
    <Btn variant="dark" onClick={onReset}>Submit Another Enquiry</Btn>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   STEP SUB-COMPONENTS  — defined at module level, never re-created on render
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Step1 ──────────────────────────────────────────────────────────────── */
const Step1 = ({ form, errors, setField }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
      <div>
        <FL req>Full Name</FL>
        <input value={form.name} onChange={(e) => setField("name", e.target.value)}
          placeholder="Your full name" className={ic(errors.name)} />
        <ErrMsg msg={errors.name} />
      </div>
      <div>
        <FL>Company / Organisation</FL>
        <input value={form.company} onChange={(e) => setField("company", e.target.value)}
          placeholder="Optional" className={ic()} />
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
      <div>
        <FL req>Email Address</FL>
        <input type="email" value={form.email} onChange={(e) => setField("email", e.target.value)}
          placeholder="your@email.com" className={ic(errors.email)} />
        <ErrMsg msg={errors.email} />
      </div>
      <div>
        <FL req>Phone Number</FL>
        <input value={form.phone} onChange={(e) => setField("phone", e.target.value)}
          placeholder="+91 XXXXXXXXXX" className={ic(errors.phone)} />
        <ErrMsg msg={errors.phone} />
      </div>
    </div>

    <Divider />

    <div>
      <FL>Preferred Contact Method</FL>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
        <ContactPill value="email" icon="Mail" label="Email" selected={form.contactPref} onChange={(v) => setField("contactPref", v)} />
        <ContactPill value="phone" icon="Phone" label="Phone" selected={form.contactPref} onChange={(v) => setField("contactPref", v)} />
        <ContactPill value="whatsapp" icon="MessageSquare" label="WhatsApp" selected={form.contactPref} onChange={(v) => setField("contactPref", v)} />
      </div>
    </div>

    <div>
      <FL>How did you hear about us?</FL>
      <select value={form.howHeard} onChange={(e) => setField("howHeard", e.target.value)} className={ic()}>
        <option value="">Select an option…</option>
        {HOW_HEARD.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  </div>
);

/* ── Step2 ──────────────────────────────────────────────────────────────── */
const Step2 = ({ form, errors, setField }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
      <div>
        <FL req>Service Required</FL>
        <select value={form.service} onChange={(e) => setField("service", e.target.value)} className={ic(errors.service)}>
          <option value="">Select a service…</option>
          {SERVICE_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <ErrMsg msg={errors.service} />
      </div>
      <div>
        <FL>Property Type</FL>
        <select value={form.propertyType} onChange={(e) => setField("propertyType", e.target.value)} className={ic()}>
          <option value="">Select type…</option>
          {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
      <div>
        <FL req>Project Location</FL>
        <input value={form.location} onChange={(e) => setField("location", e.target.value)}
          placeholder="City, District, Punjab" className={ic(errors.location)} />
        <ErrMsg msg={errors.location} />
      </div>
      <div>
        <FL>Estimated Budget</FL>
        <select value={form.budget} onChange={(e) => setField("budget", e.target.value)} className={ic()}>
          <option value="">Select budget range…</option>
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
    </div>

    <Divider />

    <div>
      <FL>Preferred Timeline</FL>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", marginTop: "8px" }}>
        {TIMELINES.map((t) => (
          <TimelinePill key={t} value={t} selected={form.timeline} onSelect={(v) => setField("timeline", v)} />
        ))}
      </div>
    </div>
  </div>
);

/* ── Step3 ──────────────────────────────────────────────────────────────── */
const Step3 = ({ form, errors, setField }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <FL req>Detailed Requirements</FL>
      <textarea rows={7} value={form.message} onChange={(e) => setField("message", e.target.value)}
        placeholder="Describe your property, area size, current challenges, specific scope, preferred start date, any special considerations…"
        className={`${ic(errors.message)} resize-none`} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", alignItems: "center" }}>
        <ErrMsg msg={errors.message} />
        <p style={{ fontSize: "11px", color: "var(--muted)", fontFamily: "var(--font-mono, monospace)", marginLeft: "auto" }}>
          {form.message.length} chars
        </p>
      </div>
    </div>

    <div style={{ borderRadius: "16px", padding: "20px 24px", background: "rgba(200,150,62,0.04)", border: "1.5px solid rgba(200,150,62,0.14)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <Icon name="ClipboardList" size={14} style={{ color: "#C8963E" }} />
        <p style={{
          fontFamily: "var(--font-mono, monospace)", fontSize: "10px", letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#C8963E", fontWeight: 600, margin: 0,
        }}>
          Enquiry Summary
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[
          ["Name", form.name], ["Email", form.email], ["Phone", form.phone],
          ["Company", form.company], ["Service", form.service], ["Location", form.location],
          ["Budget", form.budget], ["Timeline", form.timeline], ["Contact Via", form.contactPref],
        ]
          .filter(([, v]) => v)
          .map(([k, v]) => <SummaryRow key={k} label={k} value={v} />)}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const EnquiryPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const [refId, setRefId] = useState("");

  const setField = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  const validateStep = (s) => {
    const e = {};
    if (s === 1) {
      if (!form.name.trim()) e.name = "Full name is required";
      if (!form.email.trim()) e.email = "Email address is required";
      if (!form.phone.trim()) e.phone = "Phone number is required";
    }
    if (s === 2) {
      if (!form.service.trim()) e.service = "Please select a service";
      if (!form.location.trim()) e.location = "Project location is required";
    }
    if (s === 3) {
      if (!form.message.trim()) e.message = "Please describe your requirements";
    }
    return e;
  };

  const goNext = () => {
    const e = validateStep(step);
    if (Object.keys(e).length) { setErrors(e); return; }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrev = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validateStep(3);
    if (Object.keys(e).length) { setErrors(e); return; }

    setStatus("sending");
    setErrMsg("");

    const id = "E-" + Date.now().toString().slice(-7);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "enquiry",
          name: form.name.trim(), company: form.company.trim(),
          email: form.email.trim(), phone: form.phone.trim(),
          contactPref: form.contactPref, service: form.service,
          propertyType: form.propertyType, location: form.location.trim(),
          budget: form.budget, timeline: form.timeline,
          howHeard: form.howHeard, message: form.message.trim(),
        }),
      });
      setRefId(id);
      setStatus("success");
      setForm(EMPTY);
      setStep(1);
    } catch (err) {
      console.error("Enquiry submit error:", err);
      setErrMsg("Network error. Please try again or call +91 7009811798 directly.");
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(EMPTY); setErrors({}); setStep(1);
    setStatus("idle"); setRefId(""); setErrMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Shared props for all step components
  const stepProps = { form, errors, setField };

  return (
    <main className="page">
      <SEO
  title="Request a Quote | Free Facility Management Consultation"
  description="Get a free quote for facility management services. Fill our enquiry form for customized solutions, competitive pricing, and expert consultation within 24 hours."
  url="/enquiry"
>
  <meta name="keywords" content="facility management quote, request quote online, free consultation, facility management enquiry form, get estimate, facility services pricing, facility management quotation, service request form, facility management proposal, RFQ facility management, cost estimation, competitive pricing, customized solutions, instant quote, 24 hour response, facility management tender, project enquiry" />
</SEO>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
        <div className="hero-grid" />
        <div className="noise-overlay" />
        <div className="hero-glow" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div className="container-tight relative z-10">
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <Eyebrow>Response within 24 hours — guaranteed</Eyebrow>
            </div>
            <h1 className="h-display text-[#171648] dark:text-[#E8EDF2] tracking-display leading-none"
              style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", marginBottom: "20px" }}>
              Tell us what<br /><span style={{ color: "#C8963E" }}>you need.</span>
            </h1>
            <p className="text-[#5A6A7A] dark:text-[#8B9BB0]"
              style={{ fontWeight: 300, lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
              Complete the 3-step form and receive a tailored proposal within 24 business hours.
            </p>
          </div>
        </div>
        
      </section>

      {/* ── Form section ────────────────────────────────────────────────── */}
      <section className="section bg-white dark:bg-[#171648]">
        <div className="container-tight">
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>

            {status === "success" ? (
              <div className="card">
                <SuccessScreen name={form.name} service={form.service} refId={refId} onReset={reset} />
              </div>
            ) : (
              <>
                <StepProgress current={step} />

                {status === "error" && (
                  <div style={{
                    borderRadius: "14px", padding: "14px 18px", marginBottom: "24px",
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    background: "rgba(239,68,68,0.06)", border: "1.5px solid rgba(239,68,68,0.2)",
                  }}>
                    <Icon name="AlertCircle" size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: "#ef4444", marginBottom: 2 }}>Submission failed</p>
                      <p style={{ fontSize: "12px", color: "var(--muted)" }}>{errMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="card" style={{ overflow: "hidden" }}>
                  <div style={{ padding: "clamp(24px, 5vw, 40px)" }}>
                    <div style={{ marginBottom: "32px" }}>
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "4px 10px", borderRadius: "6px",
                        background: "rgba(200,150,62,0.08)", border: "1px solid rgba(200,150,62,0.18)",
                        marginBottom: "14px",
                      }}>
                        <span style={{
                          fontFamily: "var(--font-mono, monospace)", fontSize: "10px",
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          color: "#C8963E", fontWeight: 600,
                        }}>
                          Step {step} of 3
                        </span>
                      </div>

                      {step === 1 && <SectionHeader icon="User" title="Personal Information" subtitle="Tell us who you are and how to reach you." />}
                      {step === 2 && <SectionHeader icon="Briefcase" title="Service Details" subtitle="What service are you looking for and where?" />}
                      {step === 3 && <SectionHeader icon="FileText" title="Project Requirements" subtitle="Describe your project in detail for an accurate proposal." />}
                    </div>

                    {/* ↓ Steps now receive state as props — stable component identity = no focus loss */}
                    {step === 1 && <Step1 {...stepProps} />}
                    {step === 2 && <Step2 {...stepProps} />}
                    {step === 3 && <Step3 {...stepProps} />}
                  </div>

                  <div style={{
                    padding: "16px clamp(24px, 5vw, 40px)", display: "flex",
                    alignItems: "center", justifyContent: "space-between",
                    background: "rgba(0,0,0,0.02)", borderTop: "1px solid var(--border)",
                  }}>
                    <Btn type="button" variant="ghost" onClick={goPrev} disabled={step === 1}
                      iconLeft="ChevronLeft" className="text-sm px-4 py-2.5">
                      Back
                    </Btn>

                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      {[1, 2, 3].map((n) => (
                        <div key={n} style={{
                          height: "5px", borderRadius: "99px", transition: "all 0.3s ease",
                          width: step === n ? 22 : 5,
                          background: step === n ? "#C8963E" : "var(--border)",
                        }} />
                      ))}
                    </div>

                    {step < 3 ? (
                      <Btn type="button" variant="primary" icon="ChevronRight" onClick={goNext} className="text-sm px-5 py-2.5">
                        Next
                      </Btn>
                    ) : (
                      <Btn type="submit" variant="primary" iconLeft="Send"
                        loading={status === "sending"} className="text-sm px-5 py-2.5">
                        {status === "sending" ? "Submitting…" : "Submit Enquiry"}
                      </Btn>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnquiryPage;