import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/ui/index";
import SEO from "../components/SEO";

const TermsOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <SEO
        title="Terms of Use | Amconz Infra Services"
        description="Review the terms and conditions for using Amconz Infra Services website and services. Legal terms, user agreement, and service conditions."
        url="/terms-of-use"
      >
        <meta
          name="keywords"
          content="terms of use, terms and conditions, user agreement, service terms, legal terms, website terms, terms of service, conditions of use, service agreement, usage policy, legal agreement, user terms"
        />
      </SEO>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-off-white">
        <div className="container-narrow">
          <div className="eyebrow mb-4">Legal Agreement</div>
          <h1 className="h-display text-5xl md:text-6xl mb-4">
            Terms of <span className="text-gold">Use</span>
          </h1>
          <p className="text-muted text-base">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-surface">
        <div className="container-narrow">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Agreement to Terms</h2>
            <p className="text-muted leading-relaxed mb-4">
              Welcome to Amconz Infra Services. These Terms of Use ("Terms")
              govern your access to and use of our website, services, and any
              related applications (collectively, the "Services").
            </p>
            <p className="text-muted leading-relaxed mb-4">
              By accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use our
              Services.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Definitions */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Definitions</h2>
            <ul className="space-y-3 text-muted">
              <li>
                <strong>"Company"</strong> refers to Amconz Infra Services.
              </li>
              <li>
                <strong>"Services"</strong> refers to all services, products,
                and content provided by the Company.
              </li>
              <li>
                <strong>"User"</strong> or <strong>"You"</strong> refers to the
                individual or entity accessing our Services.
              </li>
              <li>
                <strong>"Website"</strong> refers to amconzinfra.com and all
                related subdomains.
              </li>
              <li>
                <strong>"Content"</strong> refers to all text, images, videos,
                and other materials on our Services.
              </li>
            </ul>
          </div>

          <div className="h-divider my-12"></div>

          {/* Use of Services */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Use of Services</h2>

            <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
            <p className="text-muted leading-relaxed mb-6">
              You must be at least 18 years old to use our Services. By using
              our Services, you represent and warrant that you meet this age
              requirement.
            </p>

            <h3 className="text-xl font-semibold mb-4">Account Registration</h3>
            <p className="text-muted leading-relaxed mb-6">
              When creating an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-xl font-semibold mb-4">Acceptable Use</h3>
            <p className="text-muted leading-relaxed mb-3">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in fraudulent activities</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Collect user information without consent</li>
            </ul>
          </div>

          <div className="h-divider my-12"></div>

          {/* Services and Pricing */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Services and Pricing
            </h2>

            <h3 className="text-xl font-semibold mb-4">Service Description</h3>
            <p className="text-muted leading-relaxed mb-6">
              We provide facility management, engineering, and related
              infrastructure services. Specific services are detailed in our
              service agreements and quotations.
            </p>

            <h3 className="text-xl font-semibold mb-4">Pricing and Payment</h3>
            <p className="text-muted leading-relaxed mb-6">
              All prices are quoted in Indian Rupees (INR) unless otherwise
              stated. Payment terms will be specified in individual service
              agreements. We reserve the right to modify our pricing at any
              time.
            </p>

            <h3 className="text-xl font-semibold mb-4">Quotations</h3>
            <p className="text-muted leading-relaxed">
              All quotations are valid for 30 days from the date of issue unless
              otherwise specified. Quotations are subject to site verification
              and may be revised based on actual conditions.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold mb-4">Our Content</h3>
            <p className="text-muted leading-relaxed mb-6">
              All content on our Services, including text, graphics, logos,
              images, software, and other materials, is the property of Amconz
              Infra Services or its content suppliers and is protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-4">Limited License</h3>
            <p className="text-muted leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to
              access and use our Services for personal or business purposes. You
              may not:
            </p>
            <ul className="list-disc list-outside space-y-2 text-muted ml-6 mb-6">
              <li>
                Reproduce, modify, or distribute our content without permission
              </li>
              <li>
                Use our content for commercial purposes without authorization
              </li>
              <li>Remove copyright or proprietary notices</li>
              <li>Reverse engineer or decompile any software</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">User Content</h3>
            <p className="text-muted leading-relaxed">
              By submitting content to our Services (reviews, feedback, etc.),
              you grant us a worldwide, royalty-free license to use, reproduce,
              and display such content in connection with our Services.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Disclaimers */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Disclaimers and Limitation of Liability
            </h2>

            <h3 className="text-xl font-semibold mb-4">Service "As Is"</h3>
            <p className="text-muted leading-relaxed mb-6">
              Our Services are provided "as is" and "as available" without
              warranties of any kind, either express or implied. We do not
              warrant that our Services will be uninterrupted, error-free, or
              secure.
            </p>

            <h3 className="text-xl font-semibold mb-4">
              Limitation of Liability
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              To the maximum extent permitted by law, Amconz Infra Services
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our
              Services.
            </p>

            <h3 className="text-xl font-semibold mb-4">Indemnification</h3>
            <p className="text-muted leading-relaxed">
              You agree to indemnify and hold harmless Amconz Infra Services and
              its affiliates from any claims, damages, or expenses arising from
              your use of our Services or violation of these Terms.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Termination</h2>
            <p className="text-muted leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to our
              Services at any time, without notice, for any reason, including
              violation of these Terms.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Upon termination, your right to use our Services will immediately
              cease. All provisions of these Terms that by their nature should
              survive termination shall survive.
            </p>
            <p className="text-muted leading-relaxed">
              You may terminate your account at any time by contacting us or
              using the account settings if available.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms shall be
              subject to the exclusive jurisdiction of the courts in [Your
              City/State].
            </p>
            <p className="text-muted leading-relaxed">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Changes to Terms</h2>
            <p className="text-muted leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will
              notify you of any material changes by posting the new Terms on
              this page and updating the "Last updated" date.
            </p>
            <p className="text-muted leading-relaxed">
              Your continued use of our Services after changes to these Terms
              constitutes acceptance of the modified Terms. We encourage you to
              review these Terms periodically.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Third-Party Services */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">
              Third-Party Services and Links
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Our Services may contain links to third-party websites or
              services. We are not responsible for the content, privacy
              policies, or practices of these third-party services.
            </p>
            <p className="text-muted leading-relaxed">
              Your use of third-party services is at your own risk and subject
              to their respective terms and conditions.
            </p>
          </div>

          <div className="h-divider my-12"></div>

          {/* Entire Agreement */}
          <div className="mb-12">
            <h2 className="section-title text-3xl mb-6">Entire Agreement</h2>
            <p className="text-muted leading-relaxed">
              These Terms, together with our Privacy Policy and any other legal
              notices or agreements published on our Services, constitute the
              entire agreement between you and Amconz Infra Services regarding
              the use of our Services.
            </p>
          </div>

          <div className="h-divider my-12"></div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUsePage;
