import React, { useState } from "react";
import { Icon, Eyebrow, Btn } from "../components/ui/index";
import SEO from "../components/SEO";

/* ── Apps Script URL ─────────────────────────────────────────────────────── */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyr4CSelNBXT8hup_LvNfYW3iMlijVEBe-ypbgUb1aKfB-O5Ov-r3WnOnX7H8uvreA_/exec"

/* ── Page Hero ───────────────────────────────────────────────────────────── */
const PageHero = () => (
  <section className="hero-bg pt-32 pb-12 relative overflow-hidden">
    <div className="hero-geo" />
    <div className="noise-overlay" />

    <div className="container-wide relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="max-w-3xl">
          <div className="mb-6">
            <Eyebrow>Get in Touch</Eyebrow>
          </div>

          <h1
            className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
          >
            Let's Start a
            <br />
            <span style={{ color: "#C8963E" }}>Conversation.</span>
          </h1>

          <p
            className="text-lg leading-relaxed max-w-xl text-[#5A6A7A] dark:text-[#8B9BB0]"
            style={{ fontWeight: 300 }}
          >
            Reach out for site visits, queries, or to discuss your facility
            management requirements. We respond within one business day.
          </p>
        </div>

        {/* Right Visual */}
        <div className="relative hidden md:block">
          <div className="relative w-full h-[400px]">
            {/* Center Icon */}
            <div
              className="absolute top-1/2 left-1/2 w-28 h-28 rounded-2xl flex items-center justify-center z-20"
              style={{
                background: "linear-gradient(135deg, #19184C, #2E5077)",
                boxShadow: "0 8px 32px rgba(200,150,62,0.3)",
                transform: "translate(-50%, -50%) rotate(-5deg)",
              }}
            >
              <Icon
                name="MessageSquare"
                size={44}
                style={{ color: "#C8963E" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }

      @keyframes pulse-ring {
        0% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 1;
        }

        100% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0;
        }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
    `}</style>
  </section>
);

/* ── Contact Items ───────────────────────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    icon: "MapPin",
    label: "Office Address",
    value:
      "F/1-373, Block No.33, Behind Dukhpanjam Grudwara, Gurnam Nagar, Jasiyan Road, Ludhiana, Punjab – 141008",
    href: null,
  },
  {
    icon: "Phone",
    label: "Phone",
    value: "+91  8699159961",
    href: "tel:+917009811798",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "info@amconzinfra.com",
    href: "mailto:info@amconzinfra.com",
  },
  {
    icon: "Clock",
    label: "Working Hours",
    value: "Mon – Sat · 9:00 AM – 7:00 PM | 24 / 7 Emergency",
    href: null,
  },
];

/* ── Contact Section ─────────────────────────────────────────────────────── */
const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  const setField = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Required";

    return e;
  };

  const submit = async (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setErrMsg(
        "Network error. Please try again or call +91 7009811798 directly.",
      );

      setStatus("error");
    }
  };

  return (
    <section className="section bg-white dark:bg-[#171648]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* Left */}
          <div>
            <div className="mb-5">
              <Eyebrow>Contact Details</Eyebrow>
            </div>

            <h2 className="section-title mb-6">
              Reach <span style={{ color: "var(--gold)" }}>Our Team</span>
            </h2>

            <p className="text-muted leading-relaxed mb-10">
              Whether you have a specific requirement or simply want to explore
              how we can help, we're always happy to connect.
            </p>

            <div className="space-y-4">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="contact-item flex gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(200,150,62,0.1)",
                      border: "1px solid rgba(200,150,62,0.2)",
                    }}
                  >
                    <Icon
                      name={item.icon}
                      size={15}
                      style={{ color: "#C8963E" }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-[10px] tracking-[0.15em] uppercase mb-1 font-medium"
                      style={{
                        color: "var(--text-light)",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-[var(--gold)] dark:text-[#E8EDF2]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm dark:text-[#E8EDF2] font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              className="mt-8 rounded-xl overflow-hidden border border-subtle"
              style={{ height: 200 }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3
                bg-gradient-to-br from-[#f5f4ff] to-[#e9e7ff]
                dark:from-[#19184C] dark:to-[#231F63]"
              >
                <Icon name="MapPin" size={32} style={{ color: "#C8963E" }} />

                <p className="text-sm text-[#5A6A7A] dark:text-[#8B9BB0]">
                  Gurnam Nagar, Ludhiana, Punjab
                </p>

                <a
                  href="https://maps.app.goo.gl/etNTi5rKXmm2UCWN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-1.5 rounded-md transition-colors
                  text-[#C8963E] border border-[#C8963E]/30
                  hover:bg-[#C8963E]/10"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="card p-8">
            {/* Success */}
            {status === "success" && (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "2px solid rgba(34,197,94,0.3)",
                  }}
                >
                  <Icon
                    name="CheckCircle2"
                    size={28}
                    style={{ color: "#22c55e" }}
                  />
                </div>

                <div>
                  <h3
                    className="font-bold text-xl dark:text-[#E8EDF2] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Message Sent!
                  </h3>

                  <p className="text-muted text-sm mb-1">
                    Your message has been received and forwarded to our team.
                  </p>

                  <p className="text-muted text-sm">
                    Expect a reply within{" "}
                    <strong style={{ color: "#C8963E" }}>
                      one business day
                    </strong>
                    .
                  </p>
                </div>

                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--gold)" }}
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div
                className="rounded-xl p-4 mb-6 flex gap-3"
                style={{
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                <Icon
                  name="AlertCircle"
                  size={15}
                  style={{
                    color: "#ef4444",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                />

                <div>
                  <p
                    className="text-xs font-semibold mb-0.5"
                    style={{ color: "#ef4444" }}
                  >
                    Submission failed
                  </p>

                  <p className="text-xs text-muted">{errMsg}</p>
                </div>
              </div>
            )}

            {/* Form */}
            {status !== "success" && (
              <>
                <h3
                  className="font-bold text-xl dark:text-[#e8f2eb] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send a Message
                </h3>

                <form onSubmit={submit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">
                        Full Name <span style={{ color: "#C8963E" }}>*</span>
                      </label>

                      <input
                        className={`form-field ${errors.name ? "error" : ""}`}
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setField("name", e.target.value)}
                      />

                      {errors.name && (
                        <span className="form-error">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="form-label">
                        Email Address{" "}
                        <span style={{ color: "#C8963E" }}>*</span>
                      </label>

                      <input
                        className={`form-field ${errors.email ? "error" : ""}`}
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                      />

                      {errors.email && (
                        <span className="form-error">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">
                        Phone Number <span style={{ color: "#C8963E" }}>*</span>
                      </label>

                      <input
                        className={`form-field ${errors.phone ? "error" : ""}`}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                      />

                      {errors.phone && (
                        <span className="form-error">{errors.phone}</span>
                      )}
                    </div>

                    <div>
                      <label className="form-label">Subject</label>

                      <input
                        className="form-field"
                        type="text"
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={(e) => setField("subject", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">
                      Message <span style={{ color: "#C8963E" }}>*</span>
                    </label>

                    <textarea
                      className={`form-field resize-none ${
                        errors.message ? "error" : ""
                      }`}
                      rows={5}
                      placeholder="Describe your requirements..."
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                    />

                    {errors.message && (
                      <span className="form-error">{errors.message}</span>
                    )}
                  </div>

                  <Btn
                    variant="primary"
                    type="submit"
                    loading={status === "sending"}
                    icon={status === "sending" ? undefined : "Send"}
                    className="w-full justify-center"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Btn>

                  <p
                    className="text-center text-xs flex items-center justify-center gap-1.5"
                    style={{ color: "#8B9BB0" }}
                  >
                    <Icon
                      name="ShieldCheck"
                      size={11}
                      style={{ color: "#22c55e" }}
                    />
                    Submitted securely via Google Apps Script.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Page ────────────────────────────────────────────────────────────────── */
const ContactPage = () => (
  <main className="page">

    <SEO
  title="Contact Us | Get in Touch with Amconz Infra Services"
  description="Contact Amconz Infra Services for facility management solutions. Call +91-8699159961 or email info@amconzinfra.com. Get free consultation and quotes."
  url="/contact"
>
  <meta name="keywords" content="contact facility management company, get quote, facility management enquiry, contact Amconz, facility management consultation, request quote India, facility management contact number, engineering services contact, infrastructure management enquiry, facility management office address, customer support, business enquiry, service request, schedule consultation, facility management RFP, vendor registration" />
</SEO>
    <PageHero />
    <ContactSection />
  </main>
);

export default ContactPage;
