import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/ui/index";
import SEO from "../components/SEO";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <SEO
        title="Privacy Policy | Amconz Infra Services"
        description="Read Amconz Infra Services privacy policy. Learn how we collect, use, and protect your personal information in compliance with Indian data protection laws."
        url="/privacy-policy"
      >
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information security, GDPR compliance, data privacy India, information security, cookie policy, user privacy, data collection policy, privacy terms, confidentiality policy, data usage policy"
        />
      </SEO>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-off-white max-w-screen-2xl">
        <div className="container-narrow">
          <div className="eyebrow mb-4">Legal Document</div>
          <h1 className="h-display text-5xl md:text-6xl mb-4">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-muted text-base">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-surface">
        <div className="container-narrow">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-muted leading-relaxed text-base mb-4">
              Amconz Infra Services ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
            <p className="text-muted leading-relaxed text-base">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <p className="text-muted leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6 mb-6">
              <li>Fill out enquiry forms or request quotes</li>
              <li>Contact us via email or phone</li>
              <li>Subscribe to our newsletters</li>
              <li>Register for an account</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>

            <p className="text-muted leading-relaxed mb-3">
              This information may include:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6 mb-8">
              <li>
                Name and contact information (email, phone number, address)
              </li>
              <li>Company name and designation</li>
              <li>Project details and requirements</li>
              <li>Payment and billing information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">
              Automatically Collected Information
            </h3>
            <p className="text-muted leading-relaxed mb-3">
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Clickstream data</li>
            </ul>
          </div>

          <div className="h-divider my-12"></div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              How We Use Your Information
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We use the information we collect for various purposes, including
              to:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests, quotes, and enquiries</li>
              <li>Send you service-related communications</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze usage patterns and optimize our website</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </div>

          <div className="h-divider my-12"></div>

          {/* Information Sharing */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Information Sharing and Disclosure
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>

            <h3 className="text-xl font-semibold mb-4">Service Providers</h3>
            <p className="text-muted leading-relaxed mb-6">
              We may share your information with third-party service providers
              who perform services on our behalf, such as payment processing,
              email delivery, hosting services, and analytics.
            </p>

            <h3 className="text-xl font-semibold mb-4">Legal Requirements</h3>
            <p className="text-muted leading-relaxed mb-6">
              We may disclose your information if required by law or in response
              to valid requests by public authorities (e.g., court orders,
              government agencies).
            </p>

            <h3 className="text-xl font-semibold mb-4">Business Transfers</h3>
            <p className="text-muted leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Data Security</h2>
            <p className="text-muted leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
            <p className="text-muted leading-relaxed">
              However, please note that no method of transmission over the
              Internet or electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our website
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences
              </li>
            </ul>
          </div>

          <div className="h-divider my-12"></div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Your Rights</h2>
            <p className="text-muted leading-relaxed mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6">
              <li>
                <strong>Access:</strong> Request a copy of your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your
                personal information
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent at any time
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Third-Party Websites
            </h2>
            <p className="text-muted leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Children's Privacy</h2>
            <p className="text-muted leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="h-divider my-12"></div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
