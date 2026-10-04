import { siteConfig } from "../config/site";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif text-brand-white mb-6">Privacy Policy</h1>
          <p className="text-brand-gray">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="space-y-8 text-brand-gray leading-relaxed">
            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">1. Introduction</h2>
              <p>
                {siteConfig.businessName} ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard information when you visit our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Contact information you provide through our contact form (name, email, company, message)</li>
                <li>Business information shared during project discussions</li>
                <li>Technical data such as browser type, IP address, and pages visited (through standard web analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>To respond to your enquiries and communicate about potential projects</li>
                <li>To deliver services we have been engaged to provide</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">4. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data only when required by law or with service providers who assist us in operating our website (under confidentiality agreements).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">5. Cookies</h2>
              <p>
                Our website may use essential cookies for basic functionality. We do not use tracking cookies or advertising cookies without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">6. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">7. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">8. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-brand-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
